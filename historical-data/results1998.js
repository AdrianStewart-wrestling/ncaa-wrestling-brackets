// 1998 NCAA Division I Wrestling Championships (Cleveland State, March 19-21, 1998). Weight classes 118-275 (pre-1999 set).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1998 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1998-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Rudy Ruiz",
    "winner_school": "Stanford",
    "loser": "Brent Thompson",
    "loser_school": "Kent State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Tim Dernlan",
    "winner_school": "Purdue",
    "loser": "Rudy Ruiz",
    "loser_school": "Stanford",
    "result": "Fall 2:47"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Cody Sanderson",
    "winner_school": "Iowa State",
    "loser": "Eric Keller",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Brandon Paulson",
    "winner_school": "Minnesota",
    "loser": "Tom Combes",
    "loser_school": "Eastern Illinois",
    "result": "Fall 2:55"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "David Morgan",
    "winner_school": "Michigan State",
    "loser": "Jose Enriquez",
    "loser_school": "Brigham Young",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "John Carvalheira",
    "winner_school": "Rider",
    "loser": "Chris Walker",
    "loser_school": "Wyoming",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Jason Gabrielson",
    "winner_school": "Edinboro",
    "loser": "Mark Garcia",
    "loser_school": "New Mexico",
    "result": "Dec 12-10"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Paul Gomez",
    "loser_school": "Nebraska",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Chuckie Connor",
    "winner_school": "North Carolina",
    "loser": "Angelo Zegarelli",
    "loser_school": "West Virginia",
    "result": "Fall 4:21"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Steve Doerrer",
    "winner_school": "Illinois",
    "loser": "Chris Mansueto",
    "loser_school": "George Mason",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Ben Richards",
    "loser_school": "Oregon State",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Lee Pritts",
    "winner_school": "Clarion",
    "loser": "Lee Carroll",
    "loser_school": "NC State",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Corey Williams",
    "loser_school": "UNC Greensboro",
    "result": "Fall 6:58"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Teague Moore",
    "winner_school": "Oklahoma State",
    "loser": "Steve Garland",
    "loser_school": "Virginia",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Sean Kim",
    "winner_school": "Cal State Fullerton",
    "loser": "James Butera",
    "loser_school": "Harvard",
    "result": "TF 24-9 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Jeremy Sluyter",
    "winner_school": "East Stroudsburg",
    "loser": "Mike Kawamura",
    "loser_school": "Arizona State",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Shane Valdez",
    "winner_school": "Oklahoma",
    "loser": "Scott Clough",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "118",
    "bout": 171,
    "winner": "Scott Clough",
    "winner_school": "Wisconsin",
    "loser": "Brent Thompson",
    "loser_school": "Kent State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 181,
    "winner": "Tim Dernlan",
    "winner_school": "Purdue",
    "loser": "Cody Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 182,
    "winner": "David Morgan",
    "winner_school": "Michigan State",
    "loser": "Brandon Paulson",
    "loser_school": "Minnesota",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 183,
    "winner": "John Carvalheira",
    "winner_school": "Rider",
    "loser": "Jason Gabrielson",
    "loser_school": "Edinboro",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 184,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Chuckie Connor",
    "loser_school": "North Carolina",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 185,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Steve Doerrer",
    "loser_school": "Illinois",
    "result": "MD 16-6"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 186,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Lee Pritts",
    "loser_school": "Clarion",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 187,
    "winner": "Teague Moore",
    "winner_school": "Oklahoma State",
    "loser": "Sean Kim",
    "loser_school": "Cal State Fullerton",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 188,
    "winner": "Shane Valdez",
    "winner_school": "Oklahoma",
    "loser": "Jeremy Sluyter",
    "loser_school": "East Stroudsburg",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 189,
    "winner": "Scott Clough",
    "winner_school": "Wisconsin",
    "loser": "Mike Kawamura",
    "loser_school": "Arizona State",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 190,
    "winner": "Steve Garland",
    "winner_school": "Virginia",
    "loser": "James Butera",
    "loser_school": "Harvard",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 191,
    "winner": "Lee Carroll",
    "winner_school": "NC State",
    "loser": "Corey Williams",
    "loser_school": "UNC Greensboro",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 192,
    "winner": "Ben Richards",
    "winner_school": "Oregon State",
    "loser": "Chris Mansueto",
    "loser_school": "George Mason",
    "result": "Fall 3:48"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 193,
    "winner": "Paul Gomez",
    "winner_school": "Nebraska",
    "loser": "Angelo Zegarelli",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 194,
    "winner": "Chris Walker",
    "winner_school": "Wyoming",
    "loser": "Mark Garcia",
    "loser_school": "New Mexico",
    "result": "Fall 2:37"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 195,
    "winner": "Tom Combes",
    "winner_school": "Eastern Illinois",
    "loser": "Jose Enriquez",
    "loser_school": "Brigham Young",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 196,
    "winner": "Eric Keller",
    "winner_school": "Northern Iowa",
    "loser": "Rudy Ruiz",
    "loser_school": "Stanford",
    "result": "Fall 2:36"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 341,
    "winner": "Jason Gabrielson",
    "winner_school": "Edinboro",
    "loser": "Scott Clough",
    "loser_school": "Wisconsin",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 342,
    "winner": "Chuckie Connor",
    "winner_school": "North Carolina",
    "loser": "Steve Garland",
    "loser_school": "Virginia",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 343,
    "winner": "Cody Sanderson",
    "winner_school": "Iowa State",
    "loser": "Lee Carroll",
    "loser_school": "NC State",
    "result": "Dec 12-7"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 344,
    "winner": "Brandon Paulson",
    "winner_school": "Minnesota",
    "loser": "Ben Richards",
    "loser_school": "Oregon State",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 345,
    "winner": "Sean Kim",
    "winner_school": "Cal State Fullerton",
    "loser": "Paul Gomez",
    "loser_school": "Nebraska",
    "result": "Dec 14-8"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 346,
    "winner": "Jeremy Sluyter",
    "winner_school": "East Stroudsburg",
    "loser": "Chris Walker",
    "loser_school": "Wyoming",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 347,
    "winner": "Tom Combes",
    "winner_school": "Eastern Illinois",
    "loser": "Steve Doerrer",
    "loser_school": "Illinois",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 348,
    "winner": "Lee Pritts",
    "winner_school": "Clarion",
    "loser": "Eric Keller",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 421,
    "winner": "David Morgan",
    "winner_school": "Michigan State",
    "loser": "Tim Dernlan",
    "loser_school": "Purdue",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 422,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "John Carvalheira",
    "loser_school": "Rider",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 423,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Stephen Abas",
    "loser_school": "Fresno State",
    "result": "Dec 11-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 424,
    "winner": "Teague Moore",
    "winner_school": "Oklahoma State",
    "loser": "Shane Valdez",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR3",
    "weight": "118",
    "bout": 425,
    "winner": "Chuckie Connor",
    "winner_school": "North Carolina",
    "loser": "Jason Gabrielson",
    "loser_school": "Edinboro",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR3",
    "weight": "118",
    "bout": 426,
    "winner": "Brandon Paulson",
    "winner_school": "Minnesota",
    "loser": "Cody Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR3",
    "weight": "118",
    "bout": 427,
    "winner": "Sean Kim",
    "winner_school": "Cal State Fullerton",
    "loser": "Jeremy Sluyter",
    "loser_school": "East Stroudsburg",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR3",
    "weight": "118",
    "bout": 428,
    "winner": "Tom Combes",
    "winner_school": "Eastern Illinois",
    "loser": "Lee Pritts",
    "loser_school": "Clarion",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "118",
    "bout": 501,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Chuckie Connor",
    "loser_school": "North Carolina",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR4",
    "weight": "118",
    "bout": 502,
    "winner": "Brandon Paulson",
    "winner_school": "Minnesota",
    "loser": "Shane Valdez",
    "loser_school": "Oklahoma",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "118",
    "bout": 503,
    "winner": "Tim Dernlan",
    "winner_school": "Purdue",
    "loser": "Sean Kim",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR4",
    "weight": "118",
    "bout": 504,
    "winner": "John Carvalheira",
    "winner_school": "Rider",
    "loser": "Tom Combes",
    "loser_school": "Eastern Illinois",
    "result": "Fall 6:53"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 541,
    "winner": "David Morgan",
    "winner_school": "Michigan State",
    "loser": "Jeremy Hunter",
    "loser_school": "Penn State",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 542,
    "winner": "Teague Moore",
    "winner_school": "Oklahoma State",
    "loser": "Eric Juergens",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsQtr",
    "weight": "118",
    "bout": 543,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Brandon Paulson",
    "loser_school": "Minnesota",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsQtr",
    "weight": "118",
    "bout": 544,
    "winner": "Tim Dernlan",
    "winner_school": "Purdue",
    "loser": "John Carvalheira",
    "loser_school": "Rider",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsSemi",
    "weight": "118",
    "bout": 581,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Jeremy Hunter",
    "loser_school": "Penn State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "118",
    "bout": 582,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Tim Dernlan",
    "loser_school": "Purdue",
    "result": "Dec 5-4"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 601,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Stephen Abas",
    "loser_school": "Fresno State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 602,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Tim Dernlan",
    "loser_school": "Purdue",
    "result": "Dec 9-2"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 603,
    "winner": "Brandon Paulson",
    "winner_school": "Minnesota",
    "loser": "John Carvalheira",
    "loser_school": "Rider",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 631,
    "winner": "Teague Moore",
    "winner_school": "Oklahoma State",
    "loser": "David Morgan",
    "loser_school": "Michigan State",
    "result": "Fall 4:50"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Jason Betz",
    "winner_school": "Penn State",
    "loser": "Nate Rupp",
    "loser_school": "Cornell",
    "result": "Dec 5-0"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "Dave Vollmer",
    "loser_school": "James Madison",
    "result": "TF 19-4 6:57"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Jason Buce",
    "winner_school": "Oregon State",
    "loser": "Jason Betz",
    "loser_school": "Penn State",
    "result": "MD 18-9"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Joe Warren",
    "winner_school": "Michigan",
    "loser": "C.C. Fisher",
    "loser_school": "North Carolina",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "John Kelly",
    "winner_school": "Brigham Young",
    "loser": "Joey Coughran",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 1:32"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Eric Jetton",
    "winner_school": "Wisconsin",
    "loser": "Chad Caros",
    "loser_school": "Buffalo",
    "result": "TF 15-0 5:46"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Dane Valdez",
    "winner_school": "Oklahoma",
    "loser": "Ryan Egan",
    "loser_school": "Northern Illinois",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Zach Zimmerer",
    "loser_school": "Stanford",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Stan Greene",
    "winner_school": "Fresno State",
    "loser": "Tommy Davis",
    "loser_school": "NC State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Rob Loper",
    "winner_school": "Pittsburgh",
    "loser": "Doug Schwab",
    "loser_school": "Iowa",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Carl Perry",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Bob Patnesky",
    "winner_school": "West Virginia",
    "loser": "Steve Walker",
    "loser_school": "Penn",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Jay Vesperman",
    "winner_school": "Central Michigan",
    "loser": "Josh Hutchens",
    "loser_school": "Purdue",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Kevin Saniga",
    "winner_school": "Edinboro",
    "loser": "Chris Heckel",
    "loser_school": "Duke",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Solomon Webb",
    "loser_school": "Bucknell",
    "result": "TF 15-0 6:56"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Matt Roth",
    "winner_school": "Virginia",
    "loser": "Bob Hanson",
    "loser_school": "Chattanooga",
    "result": "Fall 0:27"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Shawn Ford",
    "winner_school": "Arizona State",
    "loser": "Jeramie Welder",
    "loser_school": "Nebraska",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Terry Showalter",
    "winner_school": "Lock Haven",
    "loser": "Kelly Revells",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 172,
    "winner": "Kelly Revells",
    "winner_school": "Eastern Illinois",
    "loser": "Nate Rupp",
    "loser_school": "Cornell",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 1172,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Dave Vollmer",
    "loser_school": "James Madison",
    "result": "Fall 5:35"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 197,
    "winner": "Jason Buce",
    "winner_school": "Oregon State",
    "loser": "Joe Warren",
    "loser_school": "Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 198,
    "winner": "Eric Jetton",
    "winner_school": "Wisconsin",
    "loser": "John Kelly",
    "loser_school": "Brigham Young",
    "result": "TF 20-3 5:43"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 199,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Dane Valdez",
    "loser_school": "Oklahoma",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 200,
    "winner": "Rob Loper",
    "winner_school": "Pittsburgh",
    "loser": "Stan Greene",
    "loser_school": "Fresno State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 201,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Bob Patnesky",
    "loser_school": "West Virginia",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 202,
    "winner": "Jay Vesperman",
    "winner_school": "Central Michigan",
    "loser": "Kevin Saniga",
    "loser_school": "Edinboro",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 203,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Matt Roth",
    "loser_school": "Virginia",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 204,
    "winner": "Terry Showalter",
    "winner_school": "Lock Haven",
    "loser": "Shawn Ford",
    "loser_school": "Arizona State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 205,
    "winner": "Jeramie Welder",
    "winner_school": "Nebraska",
    "loser": "Kelly Revells",
    "loser_school": "Eastern Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 206,
    "winner": "Solomon Webb",
    "winner_school": "Bucknell",
    "loser": "Bob Hanson",
    "loser_school": "Chattanooga",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 207,
    "winner": "Josh Hutchens",
    "winner_school": "Purdue",
    "loser": "Chris Heckel",
    "loser_school": "Duke",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 208,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "Steve Walker",
    "loser_school": "Penn",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 209,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Tommy Davis",
    "loser_school": "NC State",
    "result": "MD 18-7"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 210,
    "winner": "Zach Zimmerer",
    "winner_school": "Stanford",
    "loser": "Ryan Egan",
    "loser_school": "Northern Illinois",
    "result": "Dec 13-9"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 211,
    "winner": "Joey Coughran",
    "winner_school": "Cal State Fullerton",
    "loser": "Chad Caros",
    "loser_school": "Buffalo",
    "result": "MD 16-4"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 212,
    "winner": "Jason Betz",
    "winner_school": "Penn State",
    "loser": "C.C. Fisher",
    "loser_school": "North Carolina",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 349,
    "winner": "Jeramie Welder",
    "winner_school": "Nebraska",
    "loser": "Dane Valdez",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 350,
    "winner": "Stan Greene",
    "winner_school": "Fresno State",
    "loser": "Solomon Webb",
    "loser_school": "Bucknell",
    "result": "Fall 6:38"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 351,
    "winner": "Joe Warren",
    "winner_school": "Michigan",
    "loser": "Josh Hutchens",
    "loser_school": "Purdue",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 352,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "John Kelly",
    "loser_school": "Brigham Young",
    "result": "Dec 12-10"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 353,
    "winner": "Matt Roth",
    "winner_school": "Virginia",
    "loser": "Doug Schwab",
    "loser_school": "Iowa",
    "result": "Dec 11-9"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 354,
    "winner": "Shawn Ford",
    "winner_school": "Arizona State",
    "loser": "Zach Zimmerer",
    "loser_school": "Stanford",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 355,
    "winner": "Joey Coughran",
    "winner_school": "Cal State Fullerton",
    "loser": "Bob Patnesky",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 356,
    "winner": "Jason Betz",
    "winner_school": "Penn State",
    "loser": "Kevin Saniga",
    "loser_school": "Edinboro",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 429,
    "winner": "Eric Jetton",
    "winner_school": "Wisconsin",
    "loser": "Jason Buce",
    "loser_school": "Oregon State",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 430,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Rob Loper",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-8 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 431,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Jay Vesperman",
    "loser_school": "Central Michigan",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 432,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Terry Showalter",
    "loser_school": "Lock Haven",
    "result": "TF 17-2 7:00"
  },
  {
    "round": "ConsR3",
    "weight": "126",
    "bout": 433,
    "winner": "Stan Greene",
    "winner_school": "Fresno State",
    "loser": "Jeramie Welder",
    "loser_school": "Nebraska",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "126",
    "bout": 434,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "Joe Warren",
    "loser_school": "Michigan",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR3",
    "weight": "126",
    "bout": 435,
    "winner": "Shawn Ford",
    "winner_school": "Arizona State",
    "loser": "Matt Roth",
    "loser_school": "Virginia",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR3",
    "weight": "126",
    "bout": 436,
    "winner": "Joey Coughran",
    "winner_school": "Cal State Fullerton",
    "loser": "Jason Betz",
    "loser_school": "Penn State",
    "result": "Dec 5-5 TB"
  },
  {
    "round": "ConsR4",
    "weight": "126",
    "bout": 505,
    "winner": "Stan Greene",
    "winner_school": "Fresno State",
    "loser": "Jay Vesperman",
    "loser_school": "Central Michigan",
    "result": "MD 16-4"
  },
  {
    "round": "ConsR4",
    "weight": "126",
    "bout": 506,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "Terry Showalter",
    "loser_school": "Lock Haven",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR4",
    "weight": "126",
    "bout": 507,
    "winner": "Jason Buce",
    "winner_school": "Oregon State",
    "loser": "Shawn Ford",
    "loser_school": "Arizona State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR4",
    "weight": "126",
    "bout": 508,
    "winner": "Joey Coughran",
    "winner_school": "Cal State Fullerton",
    "loser": "Rob Loper",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 545,
    "winner": "Eric Jetton",
    "winner_school": "Wisconsin",
    "loser": "Pat McNamara",
    "loser_school": "Michigan State",
    "result": "MD 9-1"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 546,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Dwight Hinson",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsQtr",
    "weight": "126",
    "bout": 547,
    "winner": "Stan Greene",
    "winner_school": "Fresno State",
    "loser": "Carl Perry",
    "loser_school": "Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsQtr",
    "weight": "126",
    "bout": 548,
    "winner": "Jason Buce",
    "winner_school": "Oregon State",
    "loser": "Joey Coughran",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsSemi",
    "weight": "126",
    "bout": 583,
    "winner": "Stan Greene",
    "winner_school": "Fresno State",
    "loser": "Pat McNamara",
    "loser_school": "Michigan State",
    "result": "MD 12-4"
  },
  {
    "round": "ConsSemi",
    "weight": "126",
    "bout": 584,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Jason Buce",
    "loser_school": "Oregon State",
    "result": "Dec 9-3"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 604,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Stan Greene",
    "loser_school": "Fresno State",
    "result": "Dec 6-1"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 605,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Jason Buce",
    "loser_school": "Oregon State",
    "result": "Dec 11-6"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 606,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "Joey Coughran",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 632,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Eric Jetton",
    "loser_school": "Wisconsin",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Mark Piotrowsky",
    "winner_school": "Penn",
    "loser": "Rafael Vega",
    "loser_school": "Edinboro",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Jamill Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Mark Piotrowsky",
    "loser_school": "Penn",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Jason Mutarelli",
    "loser_school": "Virginia",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Chad Jesko",
    "loser_school": "Pittsburgh",
    "result": "TF 23-8 5:55"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Nick Flach",
    "winner_school": "Northern Iowa",
    "loser": "James Kocher",
    "loser_school": "NC State",
    "result": "Dec 6-5 SV"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Greg Mayer",
    "loser_school": "Central Michigan",
    "result": "TF 17-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Jeff Bucher",
    "loser_school": "Ohio State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Dustin Denunzio",
    "winner_school": "Harvard",
    "loser": "Biff Walizer",
    "loser_school": "Penn State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Mike Collier",
    "winner_school": "UC Davis",
    "loser": "Erik Smith",
    "loser_school": "Appalachian State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Eric Schmiesing",
    "winner_school": "Hofstra",
    "loser": "Don Pool",
    "loser_school": "Eastern Illinois",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Gregg Kessler",
    "loser_school": "Rider",
    "result": "MD 19-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Mike Mendoza",
    "winner_school": "CSU Bakersfield",
    "loser": "Bobby Cook",
    "loser_school": "Chattanooga",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Shawn Enright",
    "winner_school": "Ohio",
    "loser": "Dave Esposito",
    "loser_school": "Lehigh",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Whitey Chlebove",
    "winner_school": "West Virginia",
    "loser": "Quinn Foster",
    "loser_school": "Arizona State",
    "result": "Fall 0:58"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Brad Canoyer",
    "winner_school": "Nebraska",
    "loser": "Troy Marr",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Isaac Miller",
    "winner_school": "Michigan State",
    "loser": "Bryce Bochy",
    "loser_school": "Wyoming",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Jeremy Ensrud",
    "winner_school": "Oregon",
    "loser": "James Torres",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "134",
    "bout": 173,
    "winner": "James Torres",
    "winner_school": "Indiana",
    "loser": "Rafael Vega",
    "loser_school": "Edinboro",
    "result": "Fall 5:27"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 213,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Jamill Kelly",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3 SV"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 214,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Nick Flach",
    "loser_school": "Northern Iowa",
    "result": "Fall 5:51"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 215,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Sean Gray",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 216,
    "winner": "Dustin Denunzio",
    "winner_school": "Harvard",
    "loser": "Mike Collier",
    "loser_school": "UC Davis",
    "result": "Fall 1:35"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 217,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Eric Schmiesing",
    "loser_school": "Hofstra",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 218,
    "winner": "Shawn Enright",
    "winner_school": "Ohio",
    "loser": "Mike Mendoza",
    "loser_school": "CSU Bakersfield",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 219,
    "winner": "Whitey Chlebove",
    "winner_school": "West Virginia",
    "loser": "Brad Canoyer",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 220,
    "winner": "Jeremy Ensrud",
    "winner_school": "Oregon",
    "loser": "Isaac Miller",
    "loser_school": "Michigan State",
    "result": "MD 16-7"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 221,
    "winner": "Bryce Bochy",
    "winner_school": "Wyoming",
    "loser": "James Torres",
    "loser_school": "Indiana",
    "result": "Dec 11-9"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 222,
    "winner": "Troy Marr",
    "winner_school": "Minnesota",
    "loser": "Quinn Foster",
    "loser_school": "Arizona State",
    "result": "TF 19-2 7:00"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 223,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Bobby Cook",
    "loser_school": "Chattanooga",
    "result": "Fall 2:40"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 224,
    "winner": "Don Pool",
    "winner_school": "Eastern Illinois",
    "loser": "Gregg Kessler",
    "loser_school": "Rider",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 225,
    "winner": "Biff Walizer",
    "winner_school": "Penn State",
    "loser": "Erik Smith",
    "loser_school": "Appalachian State",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 226,
    "winner": "Jeff Bucher",
    "winner_school": "Ohio State",
    "loser": "Greg Mayer",
    "loser_school": "Central Michigan",
    "result": "MD 17-9"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 227,
    "winner": "Chad Jesko",
    "winner_school": "Pittsburgh",
    "loser": "James Kocher",
    "loser_school": "NC State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 228,
    "winner": "Mark Piotrowsky",
    "winner_school": "Penn",
    "loser": "Jason Mutarelli",
    "loser_school": "Virginia",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 357,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Bryce Bochy",
    "loser_school": "Wyoming",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 358,
    "winner": "Troy Marr",
    "winner_school": "Minnesota",
    "loser": "Mike Collier",
    "loser_school": "UC Davis",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 359,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Jamill Kelly",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 360,
    "winner": "Nick Flach",
    "winner_school": "Northern Iowa",
    "loser": "Don Pool",
    "loser_school": "Eastern Illinois",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 361,
    "winner": "Biff Walizer",
    "winner_school": "Penn State",
    "loser": "Brad Canoyer",
    "loser_school": "Nebraska",
    "result": "Fall 6:06"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 362,
    "winner": "Jeff Bucher",
    "winner_school": "Ohio State",
    "loser": "Isaac Miller",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 363,
    "winner": "Chad Jesko",
    "winner_school": "Pittsburgh",
    "loser": "Eric Schmiesing",
    "loser_school": "Hofstra",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 364,
    "winner": "Mike Mendoza",
    "winner_school": "CSU Bakersfield",
    "loser": "Mark Piotrowsky",
    "loser_school": "Penn",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 437,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Michael Lightner",
    "loser_school": "Oklahoma",
    "result": "Dec 11-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 438,
    "winner": "Dustin Denunzio",
    "winner_school": "Harvard",
    "loser": "Scott Schatzman",
    "loser_school": "Northwestern",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 439,
    "winner": "Shawn Enright",
    "winner_school": "Ohio",
    "loser": "Mark Angle",
    "loser_school": "Clarion",
    "result": "Dec 10-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 440,
    "winner": "Jeremy Ensrud",
    "winner_school": "Oregon",
    "loser": "Whitey Chlebove",
    "loser_school": "West Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "134",
    "bout": 441,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Troy Marr",
    "loser_school": "Minnesota",
    "result": "Fall 2:22"
  },
  {
    "round": "ConsR3",
    "weight": "134",
    "bout": 442,
    "winner": "Nick Flach",
    "winner_school": "Northern Iowa",
    "loser": "Dave Esposito",
    "loser_school": "Lehigh",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "134",
    "bout": 443,
    "winner": "Biff Walizer",
    "winner_school": "Penn State",
    "loser": "Jeff Bucher",
    "loser_school": "Ohio State",
    "result": "Fall 7:44 SV"
  },
  {
    "round": "ConsR3",
    "weight": "134",
    "bout": 444,
    "winner": "Chad Jesko",
    "winner_school": "Pittsburgh",
    "loser": "Mike Mendoza",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "134",
    "bout": 509,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Sean Gray",
    "loser_school": "Virginia Tech",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR4",
    "weight": "134",
    "bout": 510,
    "winner": "Whitey Chlebove",
    "winner_school": "West Virginia",
    "loser": "Nick Flach",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR4",
    "weight": "134",
    "bout": 511,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Biff Walizer",
    "loser_school": "Penn State",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR4",
    "weight": "134",
    "bout": 512,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Chad Jesko",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 549,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Dustin Denunzio",
    "loser_school": "Harvard",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 550,
    "winner": "Shawn Enright",
    "winner_school": "Ohio",
    "loser": "Jeremy Ensrud",
    "loser_school": "Oregon",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "134",
    "bout": 551,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Whitey Chlebove",
    "loser_school": "West Virginia",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsQtr",
    "weight": "134",
    "bout": 552,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Scott Schatzman",
    "loser_school": "Northwestern",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsSemi",
    "weight": "134",
    "bout": 585,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Dustin Denunzio",
    "loser_school": "Harvard",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsSemi",
    "weight": "134",
    "bout": 586,
    "winner": "Jeremy Ensrud",
    "winner_school": "Oregon",
    "loser": "Michael Lightner",
    "loser_school": "Oklahoma",
    "result": "Dec 7-4"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 607,
    "winner": "Jeremy Ensrud",
    "winner_school": "Oregon",
    "loser": "Mark Angle",
    "loser_school": "Clarion",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 608,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Dustin Denunzio",
    "loser_school": "Harvard",
    "result": "Dec 5-4"
  },
  {
    "round": "7thPlace",
    "weight": "134",
    "bout": 609,
    "winner": "Whitey Chlebove",
    "winner_school": "West Virginia",
    "loser": "Scott Schatzman",
    "loser_school": "Northwestern",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 633,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Shawn Enright",
    "loser_school": "Ohio",
    "result": "Dec 9-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Melvin Saunders",
    "loser_school": "UNC Greensboro",
    "result": "Fall 2:07"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "Ryan Bernholz",
    "winner_school": "Lehigh",
    "loser": "Dusty Coufal",
    "loser_school": "Wisconsin",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Steven Schmidt",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Bernholz",
    "loser_school": "Lehigh",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Cole Sanderson",
    "winner_school": "Iowa State",
    "loser": "Sidney Billups",
    "loser_school": "Coppin State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Chris Elliott",
    "loser_school": "Slippery Rock",
    "result": "Fall 4:23"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Mike Harp",
    "winner_school": "Missouri",
    "loser": "Arkee Allen",
    "loser_school": "Columbia",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Casey Cunningham",
    "winner_school": "Central Michigan",
    "loser": "David Levitt",
    "loser_school": "Boise State",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Brent Conly",
    "winner_school": "Lock Haven",
    "loser": "Jeff Tufano",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "JaMarr Billman",
    "winner_school": "Penn State",
    "loser": "Trent McDowell",
    "loser_school": "Fresno State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Dorian Hager",
    "winner_school": "West Virginia",
    "loser": "Jonathon Archuleta",
    "loser_school": "CSU Bakersfield",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Pierre Pryor",
    "loser_school": "NC State",
    "result": "Fall 5:34"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "JohnMark Bentley",
    "winner_school": "North Carolina",
    "loser": "Malik Elliott",
    "loser_school": "Northwestern",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Tom Tomeo",
    "winner_school": "Clarion",
    "loser": "David Inkman",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Willie Wineberg",
    "winner_school": "Purdue",
    "loser": "Tracy Brown",
    "loser_school": "Arizona State",
    "result": "Fall 6:11"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Jason Davids",
    "winner_school": "Minnesota",
    "loser": "Mike Ziska",
    "loser_school": "Pittsburgh",
    "result": "Fall 3:16"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Shane Mack",
    "winner_school": "Maryland",
    "loser": "Jeromy McVige",
    "loser_school": "Buffalo",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Ed Hockenberry",
    "loser_school": "Bloomsburg",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Brian Singleton",
    "winner_school": "Kent State",
    "loser": "Bill Maldonado",
    "loser_school": "Georgia State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 174,
    "winner": "Jonathon Archuleta",
    "winner_school": "CSU Bakersfield",
    "loser": "Melvin Saunders",
    "loser_school": "UNC Greensboro",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 1174,
    "winner": "Bill Maldonado",
    "winner_school": "Georgia State",
    "loser": "Dusty Coufal",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 229,
    "winner": "Steven Schmidt",
    "winner_school": "Oklahoma State",
    "loser": "Cole Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 230,
    "winner": "Mike Harp",
    "winner_school": "Missouri",
    "loser": "Oscar Wood",
    "loser_school": "Oregon State",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 231,
    "winner": "Casey Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Brent Conly",
    "loser_school": "Lock Haven",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 232,
    "winner": "JaMarr Billman",
    "winner_school": "Penn State",
    "loser": "Dorian Hager",
    "loser_school": "West Virginia",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 233,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "JohnMark Bentley",
    "loser_school": "North Carolina",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 234,
    "winner": "Tom Tomeo",
    "winner_school": "Clarion",
    "loser": "Willie Wineberg",
    "loser_school": "Purdue",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 235,
    "winner": "Jason Davids",
    "winner_school": "Minnesota",
    "loser": "Shane Mack",
    "loser_school": "Maryland",
    "result": "Fall 4:48"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 236,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Brian Singleton",
    "loser_school": "Kent State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 237,
    "winner": "Bill Maldonado",
    "winner_school": "Georgia State",
    "loser": "Ed Hockenberry",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 238,
    "winner": "Mike Ziska",
    "winner_school": "Pittsburgh",
    "loser": "Jeromy McVige",
    "loser_school": "Buffalo",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 239,
    "winner": "Tracy Brown",
    "winner_school": "Arizona State",
    "loser": "David Inkman",
    "loser_school": "Virginia Tech",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 240,
    "winner": "Pierre Pryor",
    "winner_school": "NC State",
    "loser": "Malik Elliott",
    "loser_school": "Northwestern",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 241,
    "winner": "Trent McDowell",
    "winner_school": "Fresno State",
    "loser": "Jonathon Archuleta",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 1:46"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 242,
    "winner": "David Levitt",
    "winner_school": "Boise State",
    "loser": "Jeff Tufano",
    "loser_school": "Wyoming",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 243,
    "winner": "Chris Elliott",
    "winner_school": "Slippery Rock",
    "loser": "Arkee Allen",
    "loser_school": "Columbia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 244,
    "winner": "Ryan Bernholz",
    "winner_school": "Lehigh",
    "loser": "Sidney Billups",
    "loser_school": "Coppin State",
    "result": "Fall 3:43"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 365,
    "winner": "Brent Conly",
    "winner_school": "Lock Haven",
    "loser": "Bill Maldonado",
    "loser_school": "Georgia State",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 366,
    "winner": "Dorian Hager",
    "winner_school": "West Virginia",
    "loser": "Mike Ziska",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 367,
    "winner": "Tracy Brown",
    "winner_school": "Arizona State",
    "loser": "Cole Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 368,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Pierre Pryor",
    "loser_school": "NC State",
    "result": "TF 21-5 7:00"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 369,
    "winner": "Trent McDowell",
    "winner_school": "Fresno State",
    "loser": "Shane Mack",
    "loser_school": "Maryland",
    "result": "Fall 2:06"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 370,
    "winner": "Brian Singleton",
    "winner_school": "Kent State",
    "loser": "David Levitt",
    "loser_school": "Boise State",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 371,
    "winner": "JohnMark Bentley",
    "winner_school": "North Carolina",
    "loser": "Chris Elliott",
    "loser_school": "Slippery Rock",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 372,
    "winner": "Willie Wineberg",
    "winner_school": "Purdue",
    "loser": "Ryan Bernholz",
    "loser_school": "Lehigh",
    "result": "Dec 11-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 445,
    "winner": "Mike Harp",
    "winner_school": "Missouri",
    "loser": "Steven Schmidt",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 446,
    "winner": "Casey Cunningham",
    "winner_school": "Central Michigan",
    "loser": "JaMarr Billman",
    "loser_school": "Penn State",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 447,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Tom Tomeo",
    "loser_school": "Clarion",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 448,
    "winner": "Jason Davids",
    "winner_school": "Minnesota",
    "loser": "Adam Tirapelle",
    "loser_school": "Illinois",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR3",
    "weight": "142",
    "bout": 449,
    "winner": "Dorian Hager",
    "winner_school": "West Virginia",
    "loser": "Brent Conly",
    "loser_school": "Lock Haven",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR3",
    "weight": "142",
    "bout": 450,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Tracy Brown",
    "loser_school": "Arizona State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "142",
    "bout": 451,
    "winner": "Brian Singleton",
    "winner_school": "Kent State",
    "loser": "Trent McDowell",
    "loser_school": "Fresno State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "142",
    "bout": 452,
    "winner": "Willie Wineberg",
    "winner_school": "Purdue",
    "loser": "JohnMark Bentley",
    "loser_school": "North Carolina",
    "result": "Dec 11-10"
  },
  {
    "round": "ConsR4",
    "weight": "142",
    "bout": 513,
    "winner": "Tom Tomeo",
    "winner_school": "Clarion",
    "loser": "Dorian Hager",
    "loser_school": "West Virginia",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR4",
    "weight": "142",
    "bout": 514,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Adam Tirapelle",
    "loser_school": "Illinois",
    "result": "Dec 12-7"
  },
  {
    "round": "ConsR4",
    "weight": "142",
    "bout": 515,
    "winner": "Steven Schmidt",
    "winner_school": "Oklahoma State",
    "loser": "Brian Singleton",
    "loser_school": "Kent State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR4",
    "weight": "142",
    "bout": 516,
    "winner": "JaMarr Billman",
    "winner_school": "Penn State",
    "loser": "Willie Wineberg",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 553,
    "winner": "Casey Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Mike Harp",
    "loser_school": "Missouri",
    "result": "MD 10-0"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 554,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Jason Davids",
    "loser_school": "Minnesota",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsQtr",
    "weight": "142",
    "bout": 555,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Tom Tomeo",
    "loser_school": "Clarion",
    "result": "Fall 4:17"
  },
  {
    "round": "ConsQtr",
    "weight": "142",
    "bout": 556,
    "winner": "JaMarr Billman",
    "winner_school": "Penn State",
    "loser": "Steven Schmidt",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsSemi",
    "weight": "142",
    "bout": 587,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Mike Harp",
    "loser_school": "Missouri",
    "result": "Fall 1:26"
  },
  {
    "round": "ConsSemi",
    "weight": "142",
    "bout": 588,
    "winner": "Jason Davids",
    "winner_school": "Minnesota",
    "loser": "JaMarr Billman",
    "loser_school": "Penn State",
    "result": "Dec 12-5"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 610,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Jason Davids",
    "loser_school": "Minnesota",
    "result": "Fall 2:46"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 611,
    "winner": "JaMarr Billman",
    "winner_school": "Penn State",
    "loser": "Mike Harp",
    "loser_school": "Missouri",
    "result": "Dec 9-8"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 612,
    "winner": "Steven Schmidt",
    "winner_school": "Oklahoma State",
    "loser": "Tom Tomeo",
    "loser_school": "Clarion",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 634,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Casey Cunningham",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Eric Siebert",
    "winner_school": "Illinois",
    "loser": "Eric Jorgensen",
    "loser_school": "Oregon State",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Ben Boozer",
    "winner_school": "Edinboro",
    "loser": "Chris Ayres",
    "loser_school": "Lehigh",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Eric Siebert",
    "winner_school": "Illinois",
    "loser": "Mike Kallai",
    "loser_school": "Air Force",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Drew Pariano",
    "winner_school": "Northwestern",
    "loser": "Trey Burlingame",
    "loser_school": "UNC Greensboro",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Jimmy Arias",
    "winner_school": "Oklahoma State",
    "loser": "Kasey Gilliss",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Rodney Jones",
    "winner_school": "Oklahoma",
    "loser": "Craig Welk",
    "loser_school": "Cal Poly",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Mike Mason",
    "winner_school": "West Virginia",
    "loser": "Dennis Balogh",
    "loser_school": "Miami Ohio",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Mark Strickland",
    "winner_school": "Old Dominion",
    "loser": "David Maldonado",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Bill Lacure",
    "winner_school": "Michigan",
    "loser": "Jim Harshaw",
    "loser_school": "Virginia",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Heath Eslinger",
    "winner_school": "Chattanooga",
    "loser": "R.J. Galioto",
    "loser_school": "Seton Hall",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Ben Boozer",
    "winner_school": "Edinboro",
    "loser": "Chris Bahr",
    "loser_school": "Northern Iowa",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Larry Quisel",
    "loser_school": "Boise State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Kevin Brandon",
    "winner_school": "George Mason",
    "loser": "Brendan James",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Clint Musser",
    "winner_school": "Penn State",
    "loser": "Chris Martin",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Jeff Whalen",
    "winner_school": "Maryland",
    "loser": "Ian Kaplan",
    "loser_school": "Davidson",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Ben Gerdes",
    "loser_school": "Lock Haven",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "John Fogarty",
    "loser_school": "Cornell",
    "result": "Fall 3:53"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Darryl Christian",
    "winner_school": "Oregon",
    "loser": "Kevin Stanley",
    "loser_school": "Indiana",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 175,
    "winner": "Chris Ayres",
    "winner_school": "Lehigh",
    "loser": "R.J. Galioto",
    "loser_school": "Seton Hall",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 1175,
    "winner": "Eric Jorgensen",
    "winner_school": "Oregon State",
    "loser": "Kevin Stanley",
    "loser_school": "Indiana",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 245,
    "winner": "Eric Siebert",
    "winner_school": "Illinois",
    "loser": "Drew Pariano",
    "loser_school": "Northwestern",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 246,
    "winner": "Jimmy Arias",
    "winner_school": "Oklahoma State",
    "loser": "Rodney Jones",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 247,
    "winner": "Mike Mason",
    "winner_school": "West Virginia",
    "loser": "Mark Strickland",
    "loser_school": "Old Dominion",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 248,
    "winner": "Bill Lacure",
    "winner_school": "Michigan",
    "loser": "Heath Eslinger",
    "loser_school": "Chattanooga",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 249,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Ben Boozer",
    "loser_school": "Edinboro",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 250,
    "winner": "Clint Musser",
    "winner_school": "Penn State",
    "loser": "Kevin Brandon",
    "loser_school": "George Mason",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 251,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Jeff Whalen",
    "loser_school": "Maryland",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 252,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Darryl Christian",
    "loser_school": "Oregon",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 253,
    "winner": "Eric Jorgensen",
    "winner_school": "Oregon State",
    "loser": "John Fogarty",
    "loser_school": "Cornell",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 254,
    "winner": "Ben Gerdes",
    "winner_school": "Lock Haven",
    "loser": "Ian Kaplan",
    "loser_school": "Davidson",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 255,
    "winner": "Chris Martin",
    "winner_school": "Virginia Tech",
    "loser": "Brendan James",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 256,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Chris Bahr",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 257,
    "winner": "Jim Harshaw",
    "winner_school": "Virginia",
    "loser": "Chris Ayres",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 258,
    "winner": "David Maldonado",
    "winner_school": "Iowa State",
    "loser": "Dennis Balogh",
    "loser_school": "Miami Ohio",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 259,
    "winner": "Craig Welk",
    "winner_school": "Cal Poly",
    "loser": "Kasey Gilliss",
    "loser_school": "Iowa",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 260,
    "winner": "Mike Kallai",
    "winner_school": "Air Force",
    "loser": "Trey Burlingame",
    "loser_school": "UNC Greensboro",
    "result": "Fall 5:50"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 373,
    "winner": "Mark Strickland",
    "winner_school": "Old Dominion",
    "loser": "Eric Jorgensen",
    "loser_school": "Oregon State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 374,
    "winner": "Heath Eslinger",
    "winner_school": "Chattanooga",
    "loser": "Ben Gerdes",
    "loser_school": "Lock Haven",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 375,
    "winner": "Drew Pariano",
    "winner_school": "Northwestern",
    "loser": "Chris Martin",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 376,
    "winner": "Rodney Jones",
    "winner_school": "Oklahoma",
    "loser": "Larry Quisel",
    "loser_school": "Boise State",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 377,
    "winner": "Jeff Whalen",
    "winner_school": "Maryland",
    "loser": "Jim Harshaw",
    "loser_school": "Virginia",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 378,
    "winner": "David Maldonado",
    "winner_school": "Iowa State",
    "loser": "Darryl Christian",
    "loser_school": "Oregon",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 379,
    "winner": "Craig Welk",
    "winner_school": "Cal Poly",
    "loser": "Ben Boozer",
    "loser_school": "Edinboro",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 380,
    "winner": "Kevin Brandon",
    "winner_school": "George Mason",
    "loser": "Mike Kallai",
    "loser_school": "Air Force",
    "result": "Fall 1:04"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 453,
    "winner": "Eric Siebert",
    "winner_school": "Illinois",
    "loser": "Jimmy Arias",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 454,
    "winner": "Mike Mason",
    "winner_school": "West Virginia",
    "loser": "Bill Lacure",
    "loser_school": "Michigan",
    "result": "Dec 11-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 455,
    "winner": "Clint Musser",
    "winner_school": "Penn State",
    "loser": "Don Pritzlaff",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 456,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Steven Blackford",
    "loser_school": "Arizona State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "150",
    "bout": 457,
    "winner": "Mark Strickland",
    "winner_school": "Old Dominion",
    "loser": "Heath Eslinger",
    "loser_school": "Chattanooga",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "150",
    "bout": 458,
    "winner": "Rodney Jones",
    "winner_school": "Oklahoma",
    "loser": "Drew Pariano",
    "loser_school": "Northwestern",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "150",
    "bout": 459,
    "winner": "David Maldonado",
    "winner_school": "Iowa State",
    "loser": "Jeff Whalen",
    "loser_school": "Maryland",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "150",
    "bout": 460,
    "winner": "Craig Welk",
    "winner_school": "Cal Poly",
    "loser": "Kevin Brandon",
    "loser_school": "George Mason",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR4",
    "weight": "150",
    "bout": 517,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Mark Strickland",
    "loser_school": "Old Dominion",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR4",
    "weight": "150",
    "bout": 518,
    "winner": "Rodney Jones",
    "winner_school": "Oklahoma",
    "loser": "Steven Blackford",
    "loser_school": "Arizona State",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR4",
    "weight": "150",
    "bout": 519,
    "winner": "Jimmy Arias",
    "winner_school": "Oklahoma State",
    "loser": "David Maldonado",
    "loser_school": "Iowa State",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR4",
    "weight": "150",
    "bout": 520,
    "winner": "Bill Lacure",
    "winner_school": "Michigan",
    "loser": "Craig Welk",
    "loser_school": "Cal Poly",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 557,
    "winner": "Eric Siebert",
    "winner_school": "Illinois",
    "loser": "Mike Mason",
    "loser_school": "West Virginia",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 558,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Clint Musser",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "150",
    "bout": 559,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Rodney Jones",
    "loser_school": "Oklahoma",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsQtr",
    "weight": "150",
    "bout": 560,
    "winner": "Bill Lacure",
    "winner_school": "Michigan",
    "loser": "Jimmy Arias",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "150",
    "bout": 589,
    "winner": "Mike Mason",
    "winner_school": "West Virginia",
    "loser": "Don Pritzlaff",
    "loser_school": "Wisconsin",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsSemi",
    "weight": "150",
    "bout": 590,
    "winner": "Bill Lacure",
    "winner_school": "Michigan",
    "loser": "Clint Musser",
    "loser_school": "Penn State",
    "result": "Dec 6-2"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 613,
    "winner": "Mike Mason",
    "winner_school": "West Virginia",
    "loser": "Bill Lacure",
    "loser_school": "Michigan",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 614,
    "winner": "Clint Musser",
    "winner_school": "Penn State",
    "loser": "Don Pritzlaff",
    "loser_school": "Wisconsin",
    "result": "MD 12-3"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 615,
    "winner": "Jimmy Arias",
    "winner_school": "Oklahoma State",
    "loser": "Rodney Jones",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 635,
    "winner": "Eric Siebert",
    "winner_school": "Illinois",
    "loser": "Chad Kraft",
    "loser_school": "Minnesota",
    "result": "Dec 7-3"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Isaac Wood",
    "winner_school": "Oregon State",
    "loser": "Vince DeAugustine",
    "loser_school": "Buffalo",
    "result": "Dec 4-1"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "Kirk White",
    "loser_school": "Boise State",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Byron Tucker",
    "winner_school": "Oklahoma",
    "loser": "Bill Zeman",
    "loser_school": "Illinois",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Hardell Moore",
    "winner_school": "Oklahoma State",
    "loser": "Isaac Wood",
    "loser_school": "Oregon State",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Neil Barnes",
    "winner_school": "Lock Haven",
    "loser": "Alex Leykikh",
    "loser_school": "Virginia",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Mark Samples",
    "winner_school": "Edinboro",
    "loser": "Dan Dicesare",
    "loser_school": "Ohio State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Jamie Kelly",
    "winner_school": "Old Dominion",
    "loser": "Josh Holiday",
    "loser_school": "Minnesota",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Byron Tucker",
    "winner_school": "Oklahoma",
    "loser": "Travis Doto",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Eric Douglas",
    "winner_school": "Purdue",
    "loser": "Eric Hall",
    "loser_school": "Virginia Tech",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Sean Morgan",
    "winner_school": "Oregon",
    "loser": "Gabe McMahan",
    "loser_school": "Iowa",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Tivon Abel",
    "winner_school": "Brown",
    "loser": "Babak Alimoradian",
    "loser_school": "Boston University",
    "result": "Dec 17-11"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "Jarrod Fitzpatrick",
    "loser_school": "VMI",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Maurice Worthy",
    "winner_school": "Army",
    "loser": "Jamie Groudle",
    "loser_school": "North Carolina",
    "result": "Fall 3:27"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "David Wells",
    "winner_school": "Cal Poly",
    "loser": "John Lange",
    "loser_school": "Penn State",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Matt Suter",
    "winner_school": "Arizona State",
    "loser": "Brett Gappmayer",
    "loser_school": "Brigham Young",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Greg DeGrand",
    "winner_school": "Michigan State",
    "loser": "Brad Harris",
    "loser_school": "Clarion",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Dwight Gardner",
    "winner_school": "Ohio",
    "loser": "Alan Grasso",
    "loser_school": "Millersville",
    "result": "Fall 2:38"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Rick Springman",
    "loser_school": "Penn",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "James Hieronymus",
    "winner_school": "Hofstra",
    "loser": "Sam Kline",
    "loser_school": "West Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 176,
    "winner": "Sam Kline",
    "winner_school": "West Virginia",
    "loser": "Vince DeAugustine",
    "loser_school": "Buffalo",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 1176,
    "winner": "Bill Zeman",
    "winner_school": "Illinois",
    "loser": "Brett Gappmayer",
    "loser_school": "Brigham Young",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 2176,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Babak Alimoradian",
    "loser_school": "Boston University",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 261,
    "winner": "Hardell Moore",
    "winner_school": "Oklahoma State",
    "loser": "Neil Barnes",
    "loser_school": "Lock Haven",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 262,
    "winner": "Mark Samples",
    "winner_school": "Edinboro",
    "loser": "Jamie Kelly",
    "loser_school": "Old Dominion",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 263,
    "winner": "Eric Douglas",
    "winner_school": "Purdue",
    "loser": "Byron Tucker",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 264,
    "winner": "Tivon Abel",
    "winner_school": "Brown",
    "loser": "Sean Morgan",
    "loser_school": "Oregon",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 265,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "Maurice Worthy",
    "loser_school": "Army",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 266,
    "winner": "David Wells",
    "winner_school": "Cal Poly",
    "loser": "Matt Suter",
    "loser_school": "Arizona State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 267,
    "winner": "Dwight Gardner",
    "winner_school": "Ohio",
    "loser": "Greg DeGrand",
    "loser_school": "Michigan State",
    "result": "TF 19-4 6:49"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 268,
    "winner": "James Hieronymus",
    "winner_school": "Hofstra",
    "loser": "Ryan Cunningham",
    "loser_school": "Central Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 269,
    "winner": "Sam Kline",
    "winner_school": "West Virginia",
    "loser": "Rick Springman",
    "loser_school": "Penn",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 270,
    "winner": "Brad Harris",
    "winner_school": "Clarion",
    "loser": "Alan Grasso",
    "loser_school": "Millersville",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 271,
    "winner": "John Lange",
    "winner_school": "Penn State",
    "loser": "Bill Zeman",
    "loser_school": "Illinois",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 272,
    "winner": "Jarrod Fitzpatrick",
    "winner_school": "VMI",
    "loser": "Jamie Groudle",
    "loser_school": "North Carolina",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 273,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Gabe McMahan",
    "loser_school": "Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 274,
    "winner": "Eric Hall",
    "winner_school": "Virginia Tech",
    "loser": "Travis Doto",
    "loser_school": "Lehigh",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 275,
    "winner": "Josh Holiday",
    "winner_school": "Minnesota",
    "loser": "Dan Dicesare",
    "loser_school": "Ohio State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 276,
    "winner": "Alex Leykikh",
    "winner_school": "Virginia",
    "loser": "Isaac Wood",
    "loser_school": "Oregon State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 381,
    "winner": "Sam Kline",
    "winner_school": "West Virginia",
    "loser": "Byron Tucker",
    "loser_school": "Oklahoma",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 382,
    "winner": "Brad Harris",
    "winner_school": "Clarion",
    "loser": "Sean Morgan",
    "loser_school": "Oregon",
    "result": "Dec 2-0 SV"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 383,
    "winner": "John Lange",
    "winner_school": "Penn State",
    "loser": "Neil Barnes",
    "loser_school": "Lock Haven",
    "result": "DEF"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 384,
    "winner": "Jamie Kelly",
    "winner_school": "Old Dominion",
    "loser": "Jarrod Fitzpatrick",
    "loser_school": "VMI",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 385,
    "winner": "Greg DeGrand",
    "winner_school": "Michigan State",
    "loser": "Kirk White",
    "loser_school": "Boise State",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 386,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Eric Hall",
    "loser_school": "Virginia Tech",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 387,
    "winner": "Josh Holiday",
    "winner_school": "Minnesota",
    "loser": "Maurice Worthy",
    "loser_school": "Army",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 388,
    "winner": "Matt Suter",
    "winner_school": "Arizona State",
    "loser": "Alex Leykikh",
    "loser_school": "Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 461,
    "winner": "Hardell Moore",
    "winner_school": "Oklahoma State",
    "loser": "Mark Samples",
    "loser_school": "Edinboro",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 462,
    "winner": "Tivon Abel",
    "winner_school": "Brown",
    "loser": "Eric Douglas",
    "loser_school": "Purdue",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 463,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "David Wells",
    "loser_school": "Cal Poly",
    "result": "MD 12-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 464,
    "winner": "Dwight Gardner",
    "winner_school": "Ohio",
    "loser": "James Hieronymus",
    "loser_school": "Hofstra",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "158",
    "bout": 465,
    "winner": "Sam Kline",
    "winner_school": "West Virginia",
    "loser": "Brad Harris",
    "loser_school": "Clarion",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR3",
    "weight": "158",
    "bout": 466,
    "winner": "John Lange",
    "winner_school": "Penn State",
    "loser": "Jamie Kelly",
    "loser_school": "Old Dominion",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR3",
    "weight": "158",
    "bout": 467,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Greg DeGrand",
    "loser_school": "Michigan State",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsR3",
    "weight": "158",
    "bout": 468,
    "winner": "Matt Suter",
    "winner_school": "Arizona State",
    "loser": "Josh Holiday",
    "loser_school": "Minnesota",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR4",
    "weight": "158",
    "bout": 521,
    "winner": "David Wells",
    "winner_school": "Cal Poly",
    "loser": "Sam Kline",
    "loser_school": "West Virginia",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR4",
    "weight": "158",
    "bout": 522,
    "winner": "John Lange",
    "winner_school": "Penn State",
    "loser": "James Hieronymus",
    "loser_school": "Hofstra",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR4",
    "weight": "158",
    "bout": 523,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Mark Samples",
    "loser_school": "Edinboro",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR4",
    "weight": "158",
    "bout": 524,
    "winner": "Eric Douglas",
    "winner_school": "Purdue",
    "loser": "Matt Suter",
    "loser_school": "Arizona State",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 561,
    "winner": "Hardell Moore",
    "winner_school": "Oklahoma State",
    "loser": "Tivon Abel",
    "loser_school": "Brown",
    "result": "Dec 8-1"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 562,
    "winner": "Dwight Gardner",
    "winner_school": "Ohio",
    "loser": "Temoer Terry",
    "loser_school": "Nebraska",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsQtr",
    "weight": "158",
    "bout": 563,
    "winner": "John Lange",
    "winner_school": "Penn State",
    "loser": "David Wells",
    "loser_school": "Cal Poly",
    "result": "Fall 6:58"
  },
  {
    "round": "ConsQtr",
    "weight": "158",
    "bout": 564,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Eric Douglas",
    "loser_school": "Purdue",
    "result": "Fall 5:12"
  },
  {
    "round": "ConsSemi",
    "weight": "158",
    "bout": 591,
    "winner": "John Lange",
    "winner_school": "Penn State",
    "loser": "Tivon Abel",
    "loser_school": "Brown",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "158",
    "bout": 592,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Temoer Terry",
    "loser_school": "Nebraska",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 616,
    "winner": "John Lange",
    "winner_school": "Penn State",
    "loser": "Ryan Cunningham",
    "loser_school": "Central Michigan",
    "result": "Dec 6-5"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 617,
    "winner": "Tivon Abel",
    "winner_school": "Brown",
    "loser": "Temoer Terry",
    "loser_school": "Nebraska",
    "result": "M FOR"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 618,
    "winner": "David Wells",
    "winner_school": "Cal Poly",
    "loser": "Eric Douglas",
    "loser_school": "Purdue",
    "result": "Dec 6-0"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 636,
    "winner": "Dwight Gardner",
    "winner_school": "Ohio",
    "loser": "Hardell Moore",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-1"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Lionel Halsey",
    "winner_school": "CSU Bakersfield",
    "loser": "Josh Didion",
    "loser_school": "Cleveland State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Zac Taylor",
    "winner_school": "Minnesota",
    "loser": "Lionel Halsey",
    "loser_school": "CSU Bakersfield",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Glenn Pritzlaff",
    "winner_school": "Penn State",
    "loser": "Jason Moore",
    "loser_school": "Missouri",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Joe Williams",
    "winner_school": "Iowa",
    "loser": "Matt Mapes",
    "loser_school": "Duke",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Rod Van Ness",
    "winner_school": "Rutgers",
    "loser": "Luke Bindriff",
    "loser_school": "Air Force",
    "result": "Dec 14-10"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Jeff Catrabone",
    "winner_school": "Michigan",
    "loser": "Todd Palmisano",
    "loser_school": "Rider",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Ben Perkins",
    "winner_school": "Iowa State",
    "loser": "Brad Ginn",
    "loser_school": "George Mason",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Casey Strand",
    "winner_school": "Arizona State",
    "loser": "Chris Snyder",
    "loser_school": "Central Michigan",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Josh Stanley",
    "winner_school": "Drexel",
    "loser": "David Dixon",
    "loser_school": "Georgia State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Mark Smith",
    "winner_school": "Oklahoma State",
    "loser": "Jason Moaney",
    "loser_school": "Clarion",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Jason Webster",
    "winner_school": "Cal State Fullerton",
    "loser": "Kevin Boross",
    "loser_school": "NC State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Nick Mengerink",
    "winner_school": "Pittsburgh",
    "loser": "Markese Nelson",
    "loser_school": "Fresno State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Ed Mosley",
    "winner_school": "Harvard",
    "loser": "Kevin Welsh",
    "loser_school": "Edinboro",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Brandon Slay",
    "winner_school": "Penn",
    "loser": "Ben King",
    "loser_school": "Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "William Hill",
    "winner_school": "Michigan State",
    "loser": "Jamie Hensch",
    "loser_school": "UNC Greensboro",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Mark Bybee",
    "winner_school": "Northwestern",
    "loser": "Jeff Grant",
    "loser_school": "Stanford",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Michael Roller",
    "winner_school": "Oklahoma",
    "loser": "Gill Journey",
    "loser_school": "Chicago State",
    "result": "Fall 2:56"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 177,
    "winner": "Josh Didion",
    "winner_school": "Cleveland State",
    "loser": "Gill Journey",
    "loser_school": "Chicago State",
    "result": "Fall 5:32"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 277,
    "winner": "Glenn Pritzlaff",
    "winner_school": "Penn State",
    "loser": "Zac Taylor",
    "loser_school": "Minnesota",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 278,
    "winner": "Joe Williams",
    "winner_school": "Iowa",
    "loser": "Rod Van Ness",
    "loser_school": "Rutgers",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 279,
    "winner": "Jeff Catrabone",
    "winner_school": "Michigan",
    "loser": "Ben Perkins",
    "loser_school": "Iowa State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 280,
    "winner": "Casey Strand",
    "winner_school": "Arizona State",
    "loser": "Josh Stanley",
    "loser_school": "Drexel",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 281,
    "winner": "Mark Smith",
    "winner_school": "Oklahoma State",
    "loser": "Jason Webster",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 1:02"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 282,
    "winner": "Nick Mengerink",
    "winner_school": "Pittsburgh",
    "loser": "Ed Mosley",
    "loser_school": "Harvard",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 283,
    "winner": "Brandon Slay",
    "winner_school": "Penn",
    "loser": "William Hill",
    "loser_school": "Michigan State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 284,
    "winner": "Mark Bybee",
    "winner_school": "Northwestern",
    "loser": "Michael Roller",
    "loser_school": "Oklahoma",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 285,
    "winner": "Jeff Grant",
    "winner_school": "Stanford",
    "loser": "Josh Didion",
    "loser_school": "Cleveland State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 286,
    "winner": "Ben King",
    "winner_school": "Illinois",
    "loser": "Jamie Hensch",
    "loser_school": "UNC Greensboro",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 287,
    "winner": "Kevin Welsh",
    "winner_school": "Edinboro",
    "loser": "Markese Nelson",
    "loser_school": "Fresno State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 288,
    "winner": "Jason Moaney",
    "winner_school": "Clarion",
    "loser": "Kevin Boross",
    "loser_school": "NC State",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 289,
    "winner": "Chris Snyder",
    "winner_school": "Central Michigan",
    "loser": "David Dixon",
    "loser_school": "Georgia State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 290,
    "winner": "Todd Palmisano",
    "winner_school": "Rider",
    "loser": "Brad Ginn",
    "loser_school": "George Mason",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 291,
    "winner": "Luke Bindriff",
    "winner_school": "Air Force",
    "loser": "Matt Mapes",
    "loser_school": "Duke",
    "result": "Dec 15-8"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 292,
    "winner": "Lionel Halsey",
    "winner_school": "CSU Bakersfield",
    "loser": "Jason Moore",
    "loser_school": "Missouri",
    "result": "TF 18-2 5:05"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 389,
    "winner": "Ben Perkins",
    "winner_school": "Iowa State",
    "loser": "Jeff Grant",
    "loser_school": "Stanford",
    "result": "TF 20-5 6:33"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 390,
    "winner": "Ben King",
    "winner_school": "Illinois",
    "loser": "Josh Stanley",
    "loser_school": "Drexel",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 391,
    "winner": "Kevin Welsh",
    "winner_school": "Edinboro",
    "loser": "Zac Taylor",
    "loser_school": "Minnesota",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 392,
    "winner": "Rod Van Ness",
    "winner_school": "Rutgers",
    "loser": "Jason Moaney",
    "loser_school": "Clarion",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 393,
    "winner": "William Hill",
    "winner_school": "Michigan State",
    "loser": "Chris Snyder",
    "loser_school": "Central Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 394,
    "winner": "Michael Roller",
    "winner_school": "Oklahoma",
    "loser": "Todd Palmisano",
    "loser_school": "Rider",
    "result": "MD 14-0"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 395,
    "winner": "Jason Webster",
    "winner_school": "Cal State Fullerton",
    "loser": "Luke Bindriff",
    "loser_school": "Air Force",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 396,
    "winner": "Ed Mosley",
    "winner_school": "Harvard",
    "loser": "Lionel Halsey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 469,
    "winner": "Joe Williams",
    "winner_school": "Iowa",
    "loser": "Glenn Pritzlaff",
    "loser_school": "Penn State",
    "result": "MD 19-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 470,
    "winner": "Jeff Catrabone",
    "winner_school": "Michigan",
    "loser": "Casey Strand",
    "loser_school": "Arizona State",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 471,
    "winner": "Mark Smith",
    "winner_school": "Oklahoma State",
    "loser": "Nick Mengerink",
    "loser_school": "Pittsburgh",
    "result": "MD 11-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 472,
    "winner": "Brandon Slay",
    "winner_school": "Penn",
    "loser": "Mark Bybee",
    "loser_school": "Northwestern",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR3",
    "weight": "167",
    "bout": 473,
    "winner": "Ben Perkins",
    "winner_school": "Iowa State",
    "loser": "Ben King",
    "loser_school": "Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "167",
    "bout": 474,
    "winner": "Kevin Welsh",
    "winner_school": "Edinboro",
    "loser": "Rod Van Ness",
    "loser_school": "Rutgers",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "167",
    "bout": 475,
    "winner": "Michael Roller",
    "winner_school": "Oklahoma",
    "loser": "William Hill",
    "loser_school": "Michigan State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "167",
    "bout": 476,
    "winner": "Ed Mosley",
    "winner_school": "Harvard",
    "loser": "Jason Webster",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR4",
    "weight": "167",
    "bout": 525,
    "winner": "Nick Mengerink",
    "winner_school": "Pittsburgh",
    "loser": "Ben Perkins",
    "loser_school": "Iowa State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "167",
    "bout": 526,
    "winner": "Mark Bybee",
    "winner_school": "Northwestern",
    "loser": "Kevin Welsh",
    "loser_school": "Edinboro",
    "result": "Fall 4:35"
  },
  {
    "round": "ConsR4",
    "weight": "167",
    "bout": 527,
    "winner": "Glenn Pritzlaff",
    "winner_school": "Penn State",
    "loser": "Michael Roller",
    "loser_school": "Oklahoma",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR4",
    "weight": "167",
    "bout": 528,
    "winner": "Casey Strand",
    "winner_school": "Arizona State",
    "loser": "Ed Mosley",
    "loser_school": "Harvard",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 565,
    "winner": "Joe Williams",
    "winner_school": "Iowa",
    "loser": "Jeff Catrabone",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 566,
    "winner": "Brandon Slay",
    "winner_school": "Penn",
    "loser": "Mark Smith",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsQtr",
    "weight": "167",
    "bout": 567,
    "winner": "Mark Bybee",
    "winner_school": "Northwestern",
    "loser": "Nick Mengerink",
    "loser_school": "Pittsburgh",
    "result": "M FOR"
  },
  {
    "round": "ConsQtr",
    "weight": "167",
    "bout": 568,
    "winner": "Casey Strand",
    "winner_school": "Arizona State",
    "loser": "Glenn Pritzlaff",
    "loser_school": "Penn State",
    "result": "Fall 6:52"
  },
  {
    "round": "ConsSemi",
    "weight": "167",
    "bout": 593,
    "winner": "Jeff Catrabone",
    "winner_school": "Michigan",
    "loser": "Mark Bybee",
    "loser_school": "Northwestern",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsSemi",
    "weight": "167",
    "bout": 594,
    "winner": "Mark Smith",
    "winner_school": "Oklahoma State",
    "loser": "Casey Strand",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 619,
    "winner": "Jeff Catrabone",
    "winner_school": "Michigan",
    "loser": "Mark Smith",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-4 TB"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 620,
    "winner": "Casey Strand",
    "winner_school": "Arizona State",
    "loser": "Mark Bybee",
    "loser_school": "Northwestern",
    "result": "Dec 9-7 SV"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 621,
    "winner": "Glenn Pritzlaff",
    "winner_school": "Penn State",
    "loser": "Nick Mengerink",
    "loser_school": "Pittsburgh",
    "result": "M FOR"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 637,
    "winner": "Joe Williams",
    "winner_school": "Iowa",
    "loser": "Brandon Slay",
    "loser_school": "Penn",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Rob Neidlinger",
    "winner_school": "Penn State",
    "loser": "Corey Bell",
    "loser_school": "North Carolina",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Jim Straight",
    "winner_school": "Edinboro",
    "loser": "Joe Watson",
    "loser_school": "Georgia State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Dave Murray",
    "winner_school": "Lock Haven",
    "loser": "Sanders Freed",
    "loser_school": "Oregon State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Mitch Clark",
    "winner_school": "Ohio State",
    "loser": "Doug Lee",
    "loser_school": "Oregon",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Mike Greenfield",
    "winner_school": "Central Michigan",
    "loser": "Davion Peterson",
    "loser_school": "Purdue",
    "result": "TF 20-5 5:27"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "John Withrow",
    "winner_school": "Pittsburgh",
    "loser": "Tom Shaw",
    "loser_school": "Virginia",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Greg Gingeleskie",
    "winner_school": "Navy",
    "loser": "Jevon Herman",
    "loser_school": "Illinois",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Ken Bigley",
    "winner_school": "Northern Iowa",
    "loser": "Nathan Funk",
    "loser_school": "Chattanooga",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Steve Alf",
    "loser_school": "Wisconsin",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Leo Giel",
    "winner_school": "Rider",
    "loser": "Brandon Eggum",
    "loser_school": "Minnesota",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Matt Mulvihill",
    "winner_school": "Iowa State",
    "loser": "Matt Esposito",
    "loser_school": "American",
    "result": "TF 17-2 4:48"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Aaron Simpson",
    "winner_school": "Arizona State",
    "loser": "Paul Jenn",
    "loser_school": "Iowa",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Shawn Finnicum",
    "loser_school": "Air Force",
    "result": "Fall 1:35"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Brian Bowles",
    "loser_school": "Cal Poly",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "John Van Doren",
    "winner_school": "Lehigh",
    "loser": "Russell Jones",
    "loser_school": "Hofstra",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Jason Street",
    "winner_school": "Oklahoma",
    "loser": "Francis Volpe",
    "loser_school": "Harvard",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 293,
    "winner": "Rob Neidlinger",
    "winner_school": "Penn State",
    "loser": "Jim Straight",
    "loser_school": "Edinboro",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 294,
    "winner": "Mitch Clark",
    "winner_school": "Ohio State",
    "loser": "Dave Murray",
    "loser_school": "Lock Haven",
    "result": "Fall 4:04"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 295,
    "winner": "John Withrow",
    "winner_school": "Pittsburgh",
    "loser": "Mike Greenfield",
    "loser_school": "Central Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 296,
    "winner": "Greg Gingeleskie",
    "winner_school": "Navy",
    "loser": "Ken Bigley",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 297,
    "winner": "Leo Giel",
    "winner_school": "Rider",
    "loser": "Brad Vering",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 298,
    "winner": "Aaron Simpson",
    "winner_school": "Arizona State",
    "loser": "Matt Mulvihill",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 299,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Mark Munoz",
    "loser_school": "Oklahoma State",
    "result": "MD 18-8"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 300,
    "winner": "Jason Street",
    "winner_school": "Oklahoma",
    "loser": "John Van Doren",
    "loser_school": "Lehigh",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 301,
    "winner": "Francis Volpe",
    "winner_school": "Harvard",
    "loser": "Russell Jones",
    "loser_school": "Hofstra",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 302,
    "winner": "Brian Bowles",
    "winner_school": "Cal Poly",
    "loser": "Shawn Finnicum",
    "loser_school": "Air Force",
    "result": "MD 13-1"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 303,
    "winner": "Paul Jenn",
    "winner_school": "Iowa",
    "loser": "Matt Esposito",
    "loser_school": "American",
    "result": "Fall 4:47"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 304,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Steve Alf",
    "loser_school": "Wisconsin",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 305,
    "winner": "Jevon Herman",
    "winner_school": "Illinois",
    "loser": "Nathan Funk",
    "loser_school": "Chattanooga",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 306,
    "winner": "Tom Shaw",
    "winner_school": "Virginia",
    "loser": "Davion Peterson",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 307,
    "winner": "Doug Lee",
    "winner_school": "Oregon",
    "loser": "Sanders Freed",
    "loser_school": "Oregon State",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 308,
    "winner": "Joe Watson",
    "winner_school": "Georgia State",
    "loser": "Corey Bell",
    "loser_school": "North Carolina",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 397,
    "winner": "Mike Greenfield",
    "winner_school": "Central Michigan",
    "loser": "Francis Volpe",
    "loser_school": "Harvard",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 398,
    "winner": "Brian Bowles",
    "winner_school": "Cal Poly",
    "loser": "Ken Bigley",
    "loser_school": "Northern Iowa",
    "result": "MD 13-0"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 399,
    "winner": "Paul Jenn",
    "winner_school": "Iowa",
    "loser": "Jim Straight",
    "loser_school": "Edinboro",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 400,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Dave Murray",
    "loser_school": "Lock Haven",
    "result": "MD 15-4"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 401,
    "winner": "Jevon Herman",
    "winner_school": "Illinois",
    "loser": "Mark Munoz",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 402,
    "winner": "John Van Doren",
    "winner_school": "Lehigh",
    "loser": "Tom Shaw",
    "loser_school": "Virginia",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 403,
    "winner": "Doug Lee",
    "winner_school": "Oregon",
    "loser": "Brad Vering",
    "loser_school": "Nebraska",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 404,
    "winner": "Matt Mulvihill",
    "winner_school": "Iowa State",
    "loser": "Joe Watson",
    "loser_school": "Georgia State",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 477,
    "winner": "Mitch Clark",
    "winner_school": "Ohio State",
    "loser": "Rob Neidlinger",
    "loser_school": "Penn State",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 478,
    "winner": "John Withrow",
    "winner_school": "Pittsburgh",
    "loser": "Greg Gingeleskie",
    "loser_school": "Navy",
    "result": "Dec 1-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 479,
    "winner": "Aaron Simpson",
    "winner_school": "Arizona State",
    "loser": "Leo Giel",
    "loser_school": "Rider",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 480,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Jason Street",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR3",
    "weight": "177",
    "bout": 481,
    "winner": "Mike Greenfield",
    "winner_school": "Central Michigan",
    "loser": "Brian Bowles",
    "loser_school": "Cal Poly",
    "result": "Fall 0:44"
  },
  {
    "round": "ConsR3",
    "weight": "177",
    "bout": 482,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Paul Jenn",
    "loser_school": "Iowa",
    "result": "TF 20-5 6:58"
  },
  {
    "round": "ConsR3",
    "weight": "177",
    "bout": 483,
    "winner": "Jevon Herman",
    "winner_school": "Illinois",
    "loser": "John Van Doren",
    "loser_school": "Lehigh",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR3",
    "weight": "177",
    "bout": 484,
    "winner": "Matt Mulvihill",
    "winner_school": "Iowa State",
    "loser": "Doug Lee",
    "loser_school": "Oregon",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR4",
    "weight": "177",
    "bout": 529,
    "winner": "Mike Greenfield",
    "winner_school": "Central Michigan",
    "loser": "Leo Giel",
    "loser_school": "Rider",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR4",
    "weight": "177",
    "bout": 530,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Jason Street",
    "loser_school": "Oklahoma",
    "result": "Fall 4:16"
  },
  {
    "round": "ConsR4",
    "weight": "177",
    "bout": 531,
    "winner": "Jevon Herman",
    "winner_school": "Illinois",
    "loser": "Rob Neidlinger",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "177",
    "bout": 532,
    "winner": "Greg Gingeleskie",
    "winner_school": "Navy",
    "loser": "Matt Mulvihill",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 569,
    "winner": "Mitch Clark",
    "winner_school": "Ohio State",
    "loser": "John Withrow",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 570,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Aaron Simpson",
    "loser_school": "Arizona State",
    "result": "Dec 15-13 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "177",
    "bout": 571,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Mike Greenfield",
    "loser_school": "Central Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsQtr",
    "weight": "177",
    "bout": 572,
    "winner": "Jevon Herman",
    "winner_school": "Illinois",
    "loser": "Greg Gingeleskie",
    "loser_school": "Navy",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "177",
    "bout": 595,
    "winner": "John Withrow",
    "winner_school": "Pittsburgh",
    "loser": "Brandon Eggum",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "177",
    "bout": 596,
    "winner": "Aaron Simpson",
    "winner_school": "Arizona State",
    "loser": "Jevon Herman",
    "loser_school": "Illinois",
    "result": "Fall 1:14"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 622,
    "winner": "John Withrow",
    "winner_school": "Pittsburgh",
    "loser": "Aaron Simpson",
    "loser_school": "Arizona State",
    "result": "Dec 2-1"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 623,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Jevon Herman",
    "loser_school": "Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 624,
    "winner": "Greg Gingeleskie",
    "winner_school": "Navy",
    "loser": "Mike Greenfield",
    "loser_school": "Central Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 638,
    "winner": "Mitch Clark",
    "winner_school": "Ohio State",
    "loser": "Vertus Jones",
    "loser_school": "West Virginia",
    "result": "TF 17-0 3:00"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 9,
    "winner": "Ben Barton",
    "winner_school": "Northern Iowa",
    "loser": "Mike French",
    "loser_school": "Cal Poly",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Ben Barton",
    "winner_school": "Northern Iowa",
    "loser": "Mike Quaglio",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Chael Sonnen",
    "winner_school": "Oregon",
    "loser": "Joel Holman",
    "loser_school": "Cornell",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Raphael Davis",
    "winner_school": "CSU Bakersfield",
    "loser": "Joe Terrell",
    "loser_school": "Wisconsin",
    "result": "Fall 4:20"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Jason Robison",
    "winner_school": "Edinboro",
    "loser": "Donny Rider",
    "loser_school": "Fresno State",
    "result": "Fall 0:41"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Chris Vike",
    "winner_school": "Central Michigan",
    "loser": "Jonathan DyReyes",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "Shane Zajac",
    "loser_school": "Oregon State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Mark Bodo",
    "winner_school": "Pittsburgh",
    "loser": "Ross Thatcher",
    "loser_school": "Penn State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Pat Quirk",
    "winner_school": "Illinois",
    "loser": "Jake Sherer",
    "loser_school": "Air Force",
    "result": "Dec 8-3 SV"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Martius Harding",
    "loser_school": "Virginia",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Orville Palmer",
    "winner_school": "Oklahoma",
    "loser": "Scott Stay",
    "loser_school": "North Carolina",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Sam Neider",
    "winner_school": "Northwestern",
    "loser": "Ken Haines",
    "loser_school": "Lock Haven",
    "result": "Fall 1:47"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Andrei Rodzianko",
    "winner_school": "Penn",
    "loser": "Pat Popolizio",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Jeremy Goeden",
    "winner_school": "Northern Illinois",
    "loser": "Todd Hockenbroch",
    "loser_school": "Bloomsburg",
    "result": "Fall 3:56"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Chad Roland",
    "loser_school": "Duquesne",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Elliot Williams",
    "loser_school": "James Madison",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Isaac Moore",
    "loser_school": "VMI",
    "result": "MD 12-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "190",
    "bout": 179,
    "winner": "Mike French",
    "winner_school": "Cal Poly",
    "loser": "Isaac Moore",
    "loser_school": "VMI",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 309,
    "winner": "Chael Sonnen",
    "winner_school": "Oregon",
    "loser": "Ben Barton",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:19"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 310,
    "winner": "Jason Robison",
    "winner_school": "Edinboro",
    "loser": "Raphael Davis",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 1:19"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 311,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "Chris Vike",
    "loser_school": "Central Michigan",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 312,
    "winner": "Mark Bodo",
    "winner_school": "Pittsburgh",
    "loser": "Pat Quirk",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 313,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Orville Palmer",
    "loser_school": "Oklahoma",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 314,
    "winner": "Sam Neider",
    "winner_school": "Northwestern",
    "loser": "Andrei Rodzianko",
    "loser_school": "Penn",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 315,
    "winner": "Jeremy Goeden",
    "winner_school": "Northern Illinois",
    "loser": "Zach Thompson",
    "loser_school": "Iowa State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 316,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Nick Muzashvili",
    "loser_school": "Michigan State",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 317,
    "winner": "Mike French",
    "winner_school": "Cal Poly",
    "loser": "Elliot Williams",
    "loser_school": "James Madison",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 318,
    "winner": "Todd Hockenbroch",
    "winner_school": "Bloomsburg",
    "loser": "Chad Roland",
    "loser_school": "Duquesne",
    "result": "DEF"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 319,
    "winner": "Pat Popolizio",
    "winner_school": "Oklahoma State",
    "loser": "Ken Haines",
    "loser_school": "Lock Haven",
    "result": "Fall 1:40"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 320,
    "winner": "Scott Stay",
    "winner_school": "North Carolina",
    "loser": "Martius Harding",
    "loser_school": "Virginia",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 321,
    "winner": "Jake Sherer",
    "winner_school": "Air Force",
    "loser": "Ross Thatcher",
    "loser_school": "Penn State",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 322,
    "winner": "Shane Zajac",
    "winner_school": "Oregon State",
    "loser": "Jonathan DyReyes",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 1:05"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 323,
    "winner": "Donny Rider",
    "winner_school": "Fresno State",
    "loser": "Joe Terrell",
    "loser_school": "Wisconsin",
    "result": "Fall 2:07"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 324,
    "winner": "Joel Holman",
    "winner_school": "Cornell",
    "loser": "Mike Quaglio",
    "loser_school": "Hofstra",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 405,
    "winner": "Chris Vike",
    "winner_school": "Central Michigan",
    "loser": "Mike French",
    "loser_school": "Cal Poly",
    "result": "Fall 0:28"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 406,
    "winner": "Todd Hockenbroch",
    "winner_school": "Bloomsburg",
    "loser": "Pat Quirk",
    "loser_school": "Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 407,
    "winner": "Ben Barton",
    "winner_school": "Northern Iowa",
    "loser": "Pat Popolizio",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 408,
    "winner": "Raphael Davis",
    "winner_school": "CSU Bakersfield",
    "loser": "Scott Stay",
    "loser_school": "North Carolina",
    "result": "Fall 7:54 SV"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 409,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Jake Sherer",
    "loser_school": "Air Force",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 410,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Shane Zajac",
    "loser_school": "Oregon State",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 411,
    "winner": "Orville Palmer",
    "winner_school": "Oklahoma",
    "loser": "Donny Rider",
    "loser_school": "Fresno State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 412,
    "winner": "Andrei Rodzianko",
    "winner_school": "Penn",
    "loser": "Joel Holman",
    "loser_school": "Cornell",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 485,
    "winner": "Jason Robison",
    "winner_school": "Edinboro",
    "loser": "Chael Sonnen",
    "loser_school": "Oregon",
    "result": "Fall 0:50"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 486,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "Mark Bodo",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 487,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Sam Neider",
    "loser_school": "Northwestern",
    "result": "MD 12-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 488,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Jeremy Goeden",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "190",
    "bout": 489,
    "winner": "Todd Hockenbroch",
    "winner_school": "Bloomsburg",
    "loser": "Chris Vike",
    "loser_school": "Central Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "190",
    "bout": 490,
    "winner": "Ben Barton",
    "winner_school": "Northern Iowa",
    "loser": "Raphael Davis",
    "loser_school": "CSU Bakersfield",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR3",
    "weight": "190",
    "bout": 491,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Zach Thompson",
    "loser_school": "Iowa State",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR3",
    "weight": "190",
    "bout": 492,
    "winner": "Orville Palmer",
    "winner_school": "Oklahoma",
    "loser": "Andrei Rodzianko",
    "loser_school": "Penn",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "190",
    "bout": 533,
    "winner": "Sam Neider",
    "winner_school": "Northwestern",
    "loser": "Todd Hockenbroch",
    "loser_school": "Bloomsburg",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR4",
    "weight": "190",
    "bout": 534,
    "winner": "Jeremy Goeden",
    "winner_school": "Northern Illinois",
    "loser": "Ben Barton",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR4",
    "weight": "190",
    "bout": 535,
    "winner": "Chael Sonnen",
    "winner_school": "Oregon",
    "loser": "Nick Muzashvili",
    "loser_school": "Michigan State",
    "result": "Fall 0:23"
  },
  {
    "round": "ConsR4",
    "weight": "190",
    "bout": 536,
    "winner": "Mark Bodo",
    "winner_school": "Pittsburgh",
    "loser": "Orville Palmer",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 573,
    "winner": "Jason Robison",
    "winner_school": "Edinboro",
    "loser": "Ryan Tobin",
    "loser_school": "Nebraska",
    "result": "Dec 10-7"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 574,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Lee Fullhart",
    "loser_school": "Iowa",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsQtr",
    "weight": "190",
    "bout": 575,
    "winner": "Sam Neider",
    "winner_school": "Northwestern",
    "loser": "Jeremy Goeden",
    "loser_school": "Northern Illinois",
    "result": "Fall 4:17"
  },
  {
    "round": "ConsQtr",
    "weight": "190",
    "bout": 576,
    "winner": "Mark Bodo",
    "winner_school": "Pittsburgh",
    "loser": "Chael Sonnen",
    "loser_school": "Oregon",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsSemi",
    "weight": "190",
    "bout": 597,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "Sam Neider",
    "loser_school": "Northwestern",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsSemi",
    "weight": "190",
    "bout": 598,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Mark Bodo",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-1"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 625,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Ryan Tobin",
    "loser_school": "Nebraska",
    "result": "Dec 4-0"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 626,
    "winner": "Sam Neider",
    "winner_school": "Northwestern",
    "loser": "Mark Bodo",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 627,
    "winner": "Jeremy Goeden",
    "winner_school": "Northern Illinois",
    "loser": "Chael Sonnen",
    "loser_school": "Oregon",
    "result": "MD 12-4"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 639,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Jason Robison",
    "loser_school": "Edinboro",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 155,
    "winner": "Ben Lee",
    "winner_school": "Oklahoma State",
    "loser": "Mike Dixon",
    "loser_school": "Indiana",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 156,
    "winner": "Aaron Stark",
    "winner_school": "Wisconsin",
    "loser": "Tim Courtad",
    "loser_school": "Miami Ohio",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 157,
    "winner": "J.R. Plienis",
    "winner_school": "Nebraska",
    "loser": "Chris Miller",
    "loser_school": "Brigham Young",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 158,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Derek DelPorto",
    "loser_school": "Slippery Rock",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 159,
    "winner": "David Pierce",
    "winner_school": "Purdue",
    "loser": "Matt Stein",
    "loser_school": "Edinboro",
    "result": "Fall 4:25"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 160,
    "winner": "Shelton Benjamin",
    "winner_school": "Minnesota",
    "loser": "Jason Grim",
    "loser_school": "Bloomsburg",
    "result": "Fall 6:51"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 161,
    "winner": "John Henry Ward",
    "winner_school": "Oklahoma",
    "loser": "Wes Hand",
    "loser_school": "Iowa",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 163,
    "winner": "Airron Richardson",
    "winner_school": "Michigan",
    "loser": "Marc DeFrancesco",
    "loser_school": "Rider",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 164,
    "winner": "Ricky Krieger",
    "winner_school": "Lock Haven",
    "loser": "Dion Reed",
    "loser_school": "Boston University",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 165,
    "winner": "Karl Roesler",
    "winner_school": "Illinois",
    "loser": "Gan McGee",
    "loser_school": "Cal Poly",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 167,
    "winner": "Jason Gleasman",
    "winner_school": "Syracuse",
    "loser": "Billy Blunt",
    "loser_school": "NC State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 168,
    "winner": "Bob Puzio",
    "winner_school": "American",
    "loser": "Mike Russow",
    "loser_school": "Eastern Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 169,
    "winner": "Trent Hynek",
    "winner_school": "Iowa State",
    "loser": "Rich Polkinghorn",
    "loser_school": "Oregon",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 325,
    "winner": "Aaron Stark",
    "winner_school": "Wisconsin",
    "loser": "Ben Lee",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 326,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "J.R. Plienis",
    "loser_school": "Nebraska",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 327,
    "winner": "Shelton Benjamin",
    "winner_school": "Minnesota",
    "loser": "David Pierce",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 328,
    "winner": "Bill Closson",
    "winner_school": "Lehigh",
    "loser": "John Henry Ward",
    "loser_school": "Oklahoma",
    "result": "Fall 2:07"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 329,
    "winner": "Airron Richardson",
    "winner_school": "Michigan",
    "loser": "Ricky Krieger",
    "loser_school": "Lock Haven",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 330,
    "winner": "Karl Roesler",
    "winner_school": "Illinois",
    "loser": "Mat Orndorff",
    "loser_school": "Oregon State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 331,
    "winner": "Jason Gleasman",
    "winner_school": "Syracuse",
    "loser": "Bob Puzio",
    "loser_school": "American",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 332,
    "winner": "Trent Hynek",
    "winner_school": "Iowa State",
    "loser": "Leslie Apedoe",
    "loser_school": "VMI",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 334,
    "winner": "Billy Blunt",
    "winner_school": "NC State",
    "loser": "Mike Russow",
    "loser_school": "Eastern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 336,
    "winner": "Dion Reed",
    "winner_school": "Boston University",
    "loser": "Marc DeFrancesco",
    "loser_school": "Rider",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 338,
    "winner": "Jason Grim",
    "winner_school": "Bloomsburg",
    "loser": "Matt Stein",
    "loser_school": "Edinboro",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 339,
    "winner": "Derek DelPorto",
    "winner_school": "Slippery Rock",
    "loser": "Chris Miller",
    "loser_school": "Brigham Young",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 340,
    "winner": "Tim Courtad",
    "winner_school": "Miami Ohio",
    "loser": "Mike Dixon",
    "loser_school": "Indiana",
    "result": "MD 16-5"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 413,
    "winner": "David Pierce",
    "winner_school": "Purdue",
    "loser": "Rich Polkinghorn",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 414,
    "winner": "Billy Blunt",
    "winner_school": "NC State",
    "loser": "John Henry Ward",
    "loser_school": "Oklahoma",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 415,
    "winner": "Ben Lee",
    "winner_school": "Oklahoma State",
    "loser": "Gan McGee",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 416,
    "winner": "Dion Reed",
    "winner_school": "Boston University",
    "loser": "J.R. Plienis",
    "loser_school": "Nebraska",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 417,
    "winner": "Wes Hand",
    "winner_school": "Iowa",
    "loser": "Bob Puzio",
    "loser_school": "American",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 418,
    "winner": "Jason Grim",
    "winner_school": "Bloomsburg",
    "loser": "Leslie Apedoe",
    "loser_school": "VMI",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 419,
    "winner": "Ricky Krieger",
    "winner_school": "Lock Haven",
    "loser": "Derek DelPorto",
    "loser_school": "Slippery Rock",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 420,
    "winner": "Mat Orndorff",
    "winner_school": "Oregon State",
    "loser": "Tim Courtad",
    "loser_school": "Miami Ohio",
    "result": "TF 16-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 493,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Aaron Stark",
    "loser_school": "Wisconsin",
    "result": "Fall 4:26"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 494,
    "winner": "Bill Closson",
    "winner_school": "Lehigh",
    "loser": "Shelton Benjamin",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 495,
    "winner": "Airron Richardson",
    "winner_school": "Michigan",
    "loser": "Karl Roesler",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 496,
    "winner": "Trent Hynek",
    "winner_school": "Iowa State",
    "loser": "Jason Gleasman",
    "loser_school": "Syracuse",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "275",
    "bout": 497,
    "winner": "Billy Blunt",
    "winner_school": "NC State",
    "loser": "David Pierce",
    "loser_school": "Purdue",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "275",
    "bout": 498,
    "winner": "Ben Lee",
    "winner_school": "Oklahoma State",
    "loser": "Dion Reed",
    "loser_school": "Boston University",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR3",
    "weight": "275",
    "bout": 499,
    "winner": "Wes Hand",
    "winner_school": "Iowa",
    "loser": "Jason Grim",
    "loser_school": "Bloomsburg",
    "result": "MD 16-2"
  },
  {
    "round": "ConsR3",
    "weight": "275",
    "bout": 500,
    "winner": "Mat Orndorff",
    "winner_school": "Oregon State",
    "loser": "Ricky Krieger",
    "loser_school": "Lock Haven",
    "result": "MD 13-0"
  },
  {
    "round": "ConsR4",
    "weight": "275",
    "bout": 537,
    "winner": "Karl Roesler",
    "winner_school": "Illinois",
    "loser": "Billy Blunt",
    "loser_school": "NC State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "275",
    "bout": 538,
    "winner": "Jason Gleasman",
    "winner_school": "Syracuse",
    "loser": "Ben Lee",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR4",
    "weight": "275",
    "bout": 539,
    "winner": "Wes Hand",
    "winner_school": "Iowa",
    "loser": "Aaron Stark",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsR4",
    "weight": "275",
    "bout": 540,
    "winner": "Shelton Benjamin",
    "winner_school": "Minnesota",
    "loser": "Mat Orndorff",
    "loser_school": "Oregon State",
    "result": "Dec 9-8"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 577,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Bill Closson",
    "loser_school": "Lehigh",
    "result": "Fall 2:15"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 578,
    "winner": "Trent Hynek",
    "winner_school": "Iowa State",
    "loser": "Airron Richardson",
    "loser_school": "Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "275",
    "bout": 579,
    "winner": "Jason Gleasman",
    "winner_school": "Syracuse",
    "loser": "Karl Roesler",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "275",
    "bout": 580,
    "winner": "Shelton Benjamin",
    "winner_school": "Minnesota",
    "loser": "Wes Hand",
    "loser_school": "Iowa",
    "result": "Fall 0:50"
  },
  {
    "round": "ConsSemi",
    "weight": "275",
    "bout": 599,
    "winner": "Bill Closson",
    "winner_school": "Lehigh",
    "loser": "Jason Gleasman",
    "loser_school": "Syracuse",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "275",
    "bout": 600,
    "winner": "Shelton Benjamin",
    "winner_school": "Minnesota",
    "loser": "Airron Richardson",
    "loser_school": "Michigan",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "3rdPlace",
    "weight": "275",
    "bout": 628,
    "winner": "Shelton Benjamin",
    "winner_school": "Minnesota",
    "loser": "Bill Closson",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "5thPlace",
    "weight": "275",
    "bout": 629,
    "winner": "Airron Richardson",
    "winner_school": "Michigan",
    "loser": "Jason Gleasman",
    "loser_school": "Syracuse",
    "result": "Dec 9-4"
  },
  {
    "round": "7thPlace",
    "weight": "275",
    "bout": 630,
    "winner": "Karl Roesler",
    "winner_school": "Illinois",
    "loser": "Wes Hand",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "275",
    "bout": 640,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Trent Hynek",
    "loser_school": "Iowa State",
    "result": "TF 20-5 7:00"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
