// 1979 NCAA Division I Wrestling Championships (3/8/1979 to 3/10/1979 at Iowa State). Weight classes 118-275. Consolation: SEMIFINALIST WRESTLEBACK (rounds SfConsR1-R4).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1979 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1979-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Jay Liles",
    "winner_school": "Bowling Green",
    "loser": "Tracy Moore",
    "loser_school": "Utah State",
    "result": "Dec 10-7"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1001,
    "winner": "Luke Gilpin",
    "winner_school": "New Mexico",
    "loser": "Bruce Irussi",
    "loser_school": "Illinois",
    "result": "Dec 11-6"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 2001,
    "winner": "John Hartupee",
    "winner_school": "Central Michigan",
    "loser": "Bob DeStefanis",
    "loser_school": "Rhode Island",
    "result": "MD 11-3"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 3001,
    "winner": "Ed Bailey",
    "winner_school": "Salisbury",
    "loser": "Matt Oddo",
    "loser_school": "Auburn",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 4001,
    "winner": "Angelo Marino",
    "winner_school": "Indiana",
    "loser": "Glen Maxwell",
    "loser_school": "Pittsburgh",
    "result": "Dec 14-11"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 5001,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Khris Whelan",
    "loser_school": "Missouri",
    "result": "Fall 3:36"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Jamie Reid",
    "winner_school": "Cleveland State",
    "loser": "Bob Dickman",
    "loser_school": "Indiana State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Tom Husted",
    "winner_school": "Wisconsin",
    "loser": "Mike Marino",
    "loser_school": "Chattanooga",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Randy Hoffman",
    "winner_school": "Arizona State",
    "loser": "Brad Anderson",
    "loser_school": "Brigham Young",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Mitch Vance",
    "loser_school": "Temple",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Jim Pagano",
    "winner_school": "William & Mary",
    "loser": "Luke Gilpin",
    "loser_school": "New Mexico",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Gary Fischer",
    "winner_school": "Cal Poly",
    "loser": "Henry Callie",
    "loser_school": "Millersville",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Don Finnegan",
    "winner_school": "Iowa State",
    "loser": "Ed Bailey",
    "loser_school": "Salisbury",
    "result": "MD 15-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Joe Gonzales",
    "winner_school": "CSU Bakersfield",
    "loser": "Gary Bohay",
    "loser_school": "UCLA",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Adam Cuestas",
    "loser_school": "Oregon",
    "result": "Fall 7:37"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Jim Zenz",
    "winner_school": "NC State",
    "loser": "Angelo Marino",
    "loser_school": "Indiana",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Rob Wurm",
    "winner_school": "Weber State",
    "loser": "Greg Ely",
    "loser_school": "Hofstra",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Steve Bastianelli",
    "winner_school": "Lehigh",
    "loser": "Jay Liles",
    "loser_school": "Bowling Green",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "John Hartupee",
    "winner_school": "Central Michigan",
    "loser": "Edwin DiBeck",
    "loser_school": "Utah",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "David Suarez",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Howard Aufleger",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Chris Wentz",
    "winner_school": "Louisiana State",
    "loser": "Mike Monday",
    "loser_school": "Oklahoma",
    "result": "MD 18-10"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Bill DePaoli",
    "winner_school": "California PA",
    "loser": "Dave Cotti",
    "loser_school": "California-Berkeley",
    "result": "MD 19-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "118",
    "bout": 251,
    "winner": "Mitch Vance",
    "winner_school": "Temple",
    "loser": "Khris Whelan",
    "loser_school": "Missouri",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Tom Husted",
    "winner_school": "Wisconsin",
    "loser": "Jamie Reid",
    "loser_school": "Cleveland State",
    "result": "Fall 7:54"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Randy Hoffman",
    "loser_school": "Arizona State",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Gary Fischer",
    "winner_school": "Cal Poly",
    "loser": "Jim Pagano",
    "loser_school": "William & Mary",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "Joe Gonzales",
    "winner_school": "CSU Bakersfield",
    "loser": "Don Finnegan",
    "loser_school": "Iowa State",
    "result": "MD 24-9"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Jim Zenz",
    "loser_school": "NC State",
    "result": "Fall 4:31"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Steve Bastianelli",
    "winner_school": "Lehigh",
    "loser": "Rob Wurm",
    "loser_school": "Weber State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "David Suarez",
    "winner_school": "Nevada-Las Vegas",
    "loser": "John Hartupee",
    "loser_school": "Central Michigan",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Bill DePaoli",
    "winner_school": "California PA",
    "loser": "Chris Wentz",
    "loser_school": "Louisiana State",
    "result": "Dec 13-8"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Randy Hoffman",
    "winner_school": "Arizona State",
    "loser": "Mitch Vance",
    "loser_school": "Temple",
    "result": "Dec 3-0"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Don Finnegan",
    "winner_school": "Iowa State",
    "loser": "Gary Bohay",
    "loser_school": "UCLA",
    "result": "MD 11-2"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Jim Zenz",
    "winner_school": "NC State",
    "loser": "Adam Cuestas",
    "loser_school": "Oregon",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Chris Wentz",
    "winner_school": "Louisiana State",
    "loser": "Dave Cotti",
    "loser_school": "California-Berkeley",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Tom Husted",
    "loser_school": "Wisconsin",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "Joe Gonzales",
    "winner_school": "CSU Bakersfield",
    "loser": "Gary Fischer",
    "loser_school": "Cal Poly",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Steve Bastianelli",
    "loser_school": "Lehigh",
    "result": "MD 17-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Bill DePaoli",
    "winner_school": "California PA",
    "loser": "David Suarez",
    "loser_school": "Nevada-Las Vegas",
    "result": "Dec 11-5"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Randy Hoffman",
    "winner_school": "Arizona State",
    "loser": "Tom Husted",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Don Finnegan",
    "winner_school": "Iowa State",
    "loser": "Gary Fischer",
    "loser_school": "Cal Poly",
    "result": "M FOR"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Jim Zenz",
    "winner_school": "NC State",
    "loser": "Steve Bastianelli",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Chris Wentz",
    "winner_school": "Louisiana State",
    "loser": "David Suarez",
    "loser_school": "Nevada-Las Vegas",
    "result": "MD 12-3"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Don Finnegan",
    "winner_school": "Iowa State",
    "loser": "Randy Hoffman",
    "loser_school": "Arizona State",
    "result": "Dec 10-3"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Jim Zenz",
    "winner_school": "NC State",
    "loser": "Chris Wentz",
    "loser_school": "Louisiana State",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Joe Gonzales",
    "winner_school": "CSU Bakersfield",
    "loser": "Dan Glenn",
    "loser_school": "Iowa",
    "result": "Dec 8-6"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Bill DePaoli",
    "loser_school": "California PA",
    "result": "Fall 7:00"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Bill DePaoli",
    "winner_school": "California PA",
    "loser": "Don Finnegan",
    "loser_school": "Iowa State",
    "result": "Dec 9-7"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Jim Zenz",
    "loser_school": "NC State",
    "result": "Fall 3:48"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 521,
    "winner": "Randy Hoffman",
    "winner_school": "Arizona State",
    "loser": "Chris Wentz",
    "loser_school": "Louisiana State",
    "result": "MD 13-4"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Don Finnegan",
    "winner_school": "Iowa State",
    "loser": "Jim Zenz",
    "loser_school": "NC State",
    "result": "Dec 7-2"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Bill DePaoli",
    "loser_school": "California PA",
    "result": "MD 12-2"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Joe Gonzales",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 16-13"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Dave Riggs",
    "winner_school": "Arizona",
    "loser": "Rick Whitehead",
    "loser_school": "Nebraska",
    "result": "Dec 7-1"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "Bob Katz",
    "winner_school": "West Chester",
    "loser": "Cave Larimer",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2002,
    "winner": "Eddie Baza",
    "winner_school": "San Jose State",
    "loser": "Eddie Mannion",
    "loser_school": "Rhode Island",
    "result": "Dec 12-10"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 3002,
    "winner": "Mike Bauer",
    "winner_school": "Oregon State",
    "loser": "Ike Anderson",
    "loser_school": "Appalachian State",
    "result": "Dec 9-5"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 4002,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Pat Simpson",
    "loser_school": "Middle Tennessee",
    "result": "MD 16-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Bryan Billig",
    "winner_school": "Wilkes",
    "loser": "Harlan Kistler",
    "loser_school": "UCLA",
    "result": "Fall 7:54"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Kevin Puebla",
    "winner_school": "Illinois",
    "loser": "Dan Cuestas",
    "loser_school": "Cal Poly",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Keith Whelan",
    "winner_school": "Missouri",
    "loser": "Jose Martinez",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Greg Shoemaker",
    "winner_school": "East Stroudsburg",
    "loser": "Eddie Baza",
    "loser_school": "San Jose State",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Bob Katz",
    "loser_school": "West Chester",
    "result": "Fall 1:37"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Steve Perdew",
    "winner_school": "Slippery Rock",
    "loser": "Scott Barrett",
    "loser_school": "Boise State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Jimmy Carr",
    "winner_school": "Alabama",
    "loser": "Dave Riggs",
    "loser_school": "Arizona",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Sam Herriman",
    "winner_school": "Augustana SD",
    "loser": "Gary Lefebvre",
    "loser_school": "Minnesota",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Tom Diamond",
    "winner_school": "Clarion",
    "loser": "Doug Heimbach",
    "loser_school": "Navy",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Mike Bauer",
    "winner_school": "Oregon State",
    "loser": "Derek Glenn",
    "loser_school": "Colorado",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Mike Rossetti",
    "winner_school": "College of New Jersey",
    "loser": "Mike Starr",
    "loser_school": "Central Michigan",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Ed Tyrrell",
    "loser_school": "Buffalo",
    "result": "MD 17-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Guy Reilly",
    "loser_school": "Indiana State",
    "result": "Dec 27-22"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "C.D. Mock",
    "winner_school": "North Carolina",
    "loser": "Bryan Evans",
    "loser_school": "Oklahoma",
    "result": "Fall 3:33"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Tom Alexander",
    "winner_school": "Colorado State",
    "loser": "Tom Gaskins",
    "loser_school": "Tennessee",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Jim Hanson",
    "winner_school": "Wisconsin",
    "loser": "Don Reese",
    "loser_school": "Bloomsburg",
    "result": "MD 11-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 252,
    "winner": "Pat Simpson",
    "winner_school": "Middle Tennessee",
    "loser": "Ed Tyrrell",
    "loser_school": "Buffalo",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Kevin Puebla",
    "winner_school": "Illinois",
    "loser": "Bryan Billig",
    "loser_school": "Wilkes",
    "result": "Dec 13-8"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Keith Whelan",
    "winner_school": "Missouri",
    "loser": "Greg Shoemaker",
    "loser_school": "East Stroudsburg",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Steve Perdew",
    "loser_school": "Slippery Rock",
    "result": "Fall 3:31"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Sam Herriman",
    "winner_school": "Augustana SD",
    "loser": "Jimmy Carr",
    "loser_school": "Alabama",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Mike Bauer",
    "winner_school": "Oregon State",
    "loser": "Tom Diamond",
    "loser_school": "Clarion",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Mike Rossetti",
    "loser_school": "College of New Jersey",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "C.D. Mock",
    "winner_school": "North Carolina",
    "loser": "Ricky Dellagatta",
    "loser_school": "Kentucky",
    "result": "Dec 11-10"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Jim Hanson",
    "winner_school": "Wisconsin",
    "loser": "Tom Alexander",
    "loser_school": "Colorado State",
    "result": "Fall 5:58"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 265,
    "winner": "Bryan Billig",
    "winner_school": "Wilkes",
    "loser": "Dan Cuestas",
    "loser_school": "Cal Poly",
    "result": "Dec 15-10"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 266,
    "winner": "Steve Perdew",
    "winner_school": "Slippery Rock",
    "loser": "Bob Katz",
    "loser_school": "West Chester",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 267,
    "winner": "Mike Rossetti",
    "winner_school": "College of New Jersey",
    "loser": "Pat Simpson",
    "loser_school": "Middle Tennessee",
    "result": "MD 12-3"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 268,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Bryan Evans",
    "loser_school": "Oklahoma",
    "result": "Fall 1:27"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Kevin Puebla",
    "winner_school": "Illinois",
    "loser": "Keith Whelan",
    "loser_school": "Missouri",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Sam Herriman",
    "loser_school": "Augustana SD",
    "result": "MD 17-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Mike Bauer",
    "loser_school": "Oregon State",
    "result": "Dec 12-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "C.D. Mock",
    "winner_school": "North Carolina",
    "loser": "Jim Hanson",
    "loser_school": "Wisconsin",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Keith Whelan",
    "winner_school": "Missouri",
    "loser": "Bryan Billig",
    "loser_school": "Wilkes",
    "result": "MD 17-7"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Steve Perdew",
    "winner_school": "Slippery Rock",
    "loser": "Sam Herriman",
    "loser_school": "Augustana SD",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Mike Bauer",
    "winner_school": "Oregon State",
    "loser": "Mike Rossetti",
    "loser_school": "College of New Jersey",
    "result": "Dec 6-5"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Jim Hanson",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 423,
    "winner": "Keith Whelan",
    "winner_school": "Missouri",
    "loser": "Steve Perdew",
    "loser_school": "Slippery Rock",
    "result": "Dec 7-0"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 424,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Mike Bauer",
    "loser_school": "Oregon State",
    "result": "Dec 15-8"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Kevin Puebla",
    "loser_school": "Illinois",
    "result": "MD 17-6"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "C.D. Mock",
    "loser_school": "North Carolina",
    "result": "Dec 13-6"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "C.D. Mock",
    "winner_school": "North Carolina",
    "loser": "Keith Whelan",
    "loser_school": "Missouri",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Kevin Puebla",
    "loser_school": "Illinois",
    "result": "Dec 8-7"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 522,
    "winner": "Steve Perdew",
    "winner_school": "Slippery Rock",
    "loser": "Mike Bauer",
    "loser_school": "Oregon State",
    "result": "Dec 7-5"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Kevin Puebla",
    "winner_school": "Illinois",
    "loser": "Keith Whelan",
    "loser_school": "Missouri",
    "result": "Dec 6-0"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "C.D. Mock",
    "winner_school": "North Carolina",
    "loser": "Ricky Dellagatta",
    "loser_school": "Kentucky",
    "result": "Dec 9-7"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "John Azevedo",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 20-14"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Billy Fitzgibbons",
    "winner_school": "Cal Poly",
    "loser": "Chris Xakellis",
    "loser_school": "Virginia",
    "result": "Fall 4:32"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Mark Cagle",
    "winner_school": "West Virginia",
    "loser": "Mike Jacoutot",
    "loser_school": "College of New Jersey",
    "result": "Fall 1:28"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 2003,
    "winner": "Bill Nugent",
    "winner_school": "Oregon",
    "loser": "Mark Demeo",
    "loser_school": "Syracuse",
    "result": "MD 18-4"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3003,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Dave DiSabato",
    "loser_school": "Notre Dame",
    "result": "MD 25-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Juan Causey",
    "winner_school": "Illinois",
    "loser": "Dan Caballero",
    "loser_school": "Oregon State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Ed Maisey",
    "winner_school": "Brigham Young",
    "loser": "Steve Weight",
    "loser_school": "Utah State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Bob McGuinn",
    "winner_school": "Eastern Illinois",
    "loser": "Tyrone Rose",
    "loser_school": "Nevada-Las Vegas",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Jim Martinez",
    "winner_school": "Minnesota",
    "loser": "Cody Westbrook",
    "loser_school": "Wyoming",
    "result": "Fall 7:40"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Mark Cagle",
    "loser_school": "West Virginia",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Frank DeAngelis",
    "winner_school": "Oklahoma",
    "loser": "Dennis Lewis",
    "loser_school": "Ball State",
    "result": "Fall 6:38"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Mike Walsh",
    "winner_school": "Michigan State",
    "loser": "Bill Nugent",
    "loser_school": "Oregon",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Ray Downey",
    "winner_school": "Auburn",
    "loser": "Brad Alfred",
    "loser_school": "Boise State",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Dane Ives",
    "winner_school": "Missouri",
    "loser": "Andre Massey",
    "loser_school": "Appalachian State",
    "result": "Fall 6:00"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Billy Fitzgibbons",
    "winner_school": "Cal Poly",
    "loser": "Buddy Lee",
    "loser_school": "Old Dominion",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Randy Miller",
    "winner_school": "Clarion",
    "loser": "Larry Otsuka",
    "loser_school": "Massachusetts",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Carl Poff",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Ron Voss",
    "winner_school": "Western Michigan",
    "loser": "David Miller",
    "loser_school": "West Chester",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Brian Brown",
    "winner_school": "Franklin and Marshall",
    "loser": "Joe Romero",
    "loser_school": "Arizona State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Lew Sondgeroth",
    "winner_school": "Colorado",
    "loser": "Kyle Grunwald",
    "loser_school": "Louisiana State",
    "result": "Dec 7-5 TB"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Dave Goodspeed",
    "winner_school": "Wisconsin",
    "loser": "Ken Mallory",
    "loser_school": "Montclair State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "134",
    "bout": 253,
    "winner": "Dave DiSabato",
    "winner_school": "Notre Dame",
    "loser": "Carl Poff",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Ed Maisey",
    "winner_school": "Brigham Young",
    "loser": "Juan Causey",
    "loser_school": "Illinois",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Jim Martinez",
    "winner_school": "Minnesota",
    "loser": "Bob McGuinn",
    "loser_school": "Eastern Illinois",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Frank DeAngelis",
    "loser_school": "Oklahoma",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Ray Downey",
    "winner_school": "Auburn",
    "loser": "Mike Walsh",
    "loser_school": "Michigan State",
    "result": "Dec 8-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Billy Fitzgibbons",
    "winner_school": "Cal Poly",
    "loser": "Dane Ives",
    "loser_school": "Missouri",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Randy Miller",
    "loser_school": "Clarion",
    "result": "Fall 3:53"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Brian Brown",
    "winner_school": "Franklin and Marshall",
    "loser": "Ron Voss",
    "loser_school": "Western Michigan",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Lew Sondgeroth",
    "winner_school": "Colorado",
    "loser": "Dave Goodspeed",
    "loser_school": "Wisconsin",
    "result": "Dec 14-13"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 269,
    "winner": "Juan Causey",
    "winner_school": "Illinois",
    "loser": "Steve Weight",
    "loser_school": "Utah State",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 270,
    "winner": "Mark Cagle",
    "winner_school": "West Virginia",
    "loser": "Frank DeAngelis",
    "loser_school": "Oklahoma",
    "result": "Dec 11-5"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 271,
    "winner": "Randy Miller",
    "winner_school": "Clarion",
    "loser": "Dave DiSabato",
    "loser_school": "Notre Dame",
    "result": "Fall 3:41"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 272,
    "winner": "Joe Romero",
    "winner_school": "Arizona State",
    "loser": "Ron Voss",
    "loser_school": "Western Michigan",
    "result": "MD 12-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Ed Maisey",
    "winner_school": "Brigham Young",
    "loser": "Jim Martinez",
    "loser_school": "Minnesota",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Ray Downey",
    "loser_school": "Auburn",
    "result": "Dec 8-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Billy Fitzgibbons",
    "loser_school": "Cal Poly",
    "result": "Fall 3:17"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Brian Brown",
    "winner_school": "Franklin and Marshall",
    "loser": "Lew Sondgeroth",
    "loser_school": "Colorado",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "Jim Martinez",
    "winner_school": "Minnesota",
    "loser": "Juan Causey",
    "loser_school": "Illinois",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Mark Cagle",
    "winner_school": "West Virginia",
    "loser": "Ray Downey",
    "loser_school": "Auburn",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Randy Miller",
    "winner_school": "Clarion",
    "loser": "Billy Fitzgibbons",
    "loser_school": "Cal Poly",
    "result": "Dec 6-1 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Joe Romero",
    "winner_school": "Arizona State",
    "loser": "Lew Sondgeroth",
    "loser_school": "Colorado",
    "result": "Dec 8-6"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 425,
    "winner": "Jim Martinez",
    "winner_school": "Minnesota",
    "loser": "Mark Cagle",
    "loser_school": "West Virginia",
    "result": "Fall 3:35"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 426,
    "winner": "Joe Romero",
    "winner_school": "Arizona State",
    "loser": "Randy Miller",
    "loser_school": "Clarion",
    "result": "Fall 5:30"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Ed Maisey",
    "loser_school": "Brigham Young",
    "result": "Dec 17-11"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Brian Brown",
    "loser_school": "Franklin and Marshall",
    "result": "MD 21-10"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "Jim Martinez",
    "winner_school": "Minnesota",
    "loser": "Brian Brown",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Joe Romero",
    "winner_school": "Arizona State",
    "loser": "Ed Maisey",
    "loser_school": "Brigham Young",
    "result": "M FOR"
  },
  {
    "round": "7thPlace",
    "weight": "134",
    "bout": 523,
    "winner": "Randy Miller",
    "winner_school": "Clarion",
    "loser": "Mark Cagle",
    "loser_school": "West Virginia",
    "result": "Dec 9-5"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Brian Brown",
    "winner_school": "Franklin and Marshall",
    "loser": "Ed Maisey",
    "loser_school": "Brigham Young",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Jim Martinez",
    "winner_school": "Minnesota",
    "loser": "Joe Romero",
    "loser_school": "Arizona State",
    "result": "MD 16-5"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Mike Land",
    "loser_school": "Iowa State",
    "result": "Dec 9-7"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Casper Tortella",
    "winner_school": "Wilkes",
    "loser": "Andy Lokie",
    "loser_school": "Ohio",
    "result": "MD 15-7"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "Dan Boos",
    "winner_school": "Luther",
    "loser": "Larry Buckner",
    "loser_school": "Nevada-Las Vegas",
    "result": "Fall 4:56"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Andy DiSabato",
    "winner_school": "Ohio State",
    "loser": "Dave Brown",
    "loser_school": "Iowa State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "Dave Moyer",
    "loser_school": "Lock Haven",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Mike Mathies",
    "winner_school": "Portland State",
    "loser": "Brad Vadnais",
    "loser_school": "Utah",
    "result": "MD 17-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Ryan Kaufman",
    "winner_school": "Minnesota",
    "loser": "Mike Fredenburg",
    "loser_school": "Humboldt State",
    "result": "Fall 7:03"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Ron McKinney",
    "winner_school": "Cal Poly",
    "loser": "Mike Pollock",
    "loser_school": "Missouri",
    "result": "Dec 14-10"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Steve Traylor",
    "winner_school": "Yale",
    "loser": "Tony DiGiovanni",
    "loser_school": "Cleveland State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Dan Boos",
    "winner_school": "Luther",
    "loser": "Vic Hargett",
    "loser_school": "Louisiana State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Dan Hicks",
    "winner_school": "Oregon State",
    "loser": "Tom Gongora",
    "loser_school": "CSU Bakersfield",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Bill Cripps",
    "winner_school": "Arizona State",
    "loser": "Russ Campbell",
    "loser_school": "Weber State",
    "result": "Fall 7:15"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Casper Tortella",
    "winner_school": "Wilkes",
    "loser": "Steve Roberts",
    "loser_school": "Slippery Rock",
    "result": "Fall 5:45"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Doug Parise",
    "winner_school": "Temple",
    "loser": "Loren Danielson",
    "loser_school": "American",
    "result": "Fall 7:23"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "Craig Prete",
    "loser_school": "Brigham Young",
    "result": "Fall 3:03"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Gary Waller",
    "loser_school": "Chattanooga",
    "result": "Fall 7:11"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Mike Elliott",
    "winner_school": "Cal State Fullerton",
    "loser": "Scott Arnel",
    "loser_school": "Rhode Island",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Rick Jensen",
    "winner_school": "South Dakota State",
    "loser": "Chris Catalfo",
    "loser_school": "Florida",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Mike Koob",
    "loser_school": "NC State",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "Andy DiSabato",
    "loser_school": "Ohio State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Mike Mathies",
    "winner_school": "Portland State",
    "loser": "Ryan Kaufman",
    "loser_school": "Minnesota",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Steve Traylor",
    "winner_school": "Yale",
    "loser": "Ron McKinney",
    "loser_school": "Cal Poly",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Dan Hicks",
    "winner_school": "Oregon State",
    "loser": "Dan Boos",
    "loser_school": "Luther",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Bill Cripps",
    "winner_school": "Arizona State",
    "loser": "Casper Tortella",
    "loser_school": "Wilkes",
    "result": "Fall 3:46"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "Doug Parise",
    "loser_school": "Temple",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Mike Elliott",
    "loser_school": "Cal State Fullerton",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Rick Jensen",
    "loser_school": "South Dakota State",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 273,
    "winner": "Ryan Kaufman",
    "winner_school": "Minnesota",
    "loser": "Brad Vadnais",
    "loser_school": "Utah",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 274,
    "winner": "Dan Boos",
    "winner_school": "Luther",
    "loser": "Tom Gongora",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 275,
    "winner": "Doug Parise",
    "winner_school": "Temple",
    "loser": "Craig Prete",
    "loser_school": "Brigham Young",
    "result": "Fall 5:59"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 276,
    "winner": "Mike Elliott",
    "winner_school": "Cal State Fullerton",
    "loser": "Gary Waller",
    "loser_school": "Chattanooga",
    "result": "MD 12-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Mike Mathies",
    "winner_school": "Portland State",
    "loser": "Lee Roy Smith",
    "loser_school": "Oklahoma State",
    "result": "MD 17-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Dan Hicks",
    "winner_school": "Oregon State",
    "loser": "Steve Traylor",
    "loser_school": "Yale",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "Bill Cripps",
    "loser_school": "Arizona State",
    "result": "Dec 12-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Andy Rein",
    "loser_school": "Wisconsin",
    "result": "MD 17-4"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Kaufman",
    "loser_school": "Minnesota",
    "result": "MD 9-1"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "Dan Boos",
    "winner_school": "Luther",
    "loser": "Steve Traylor",
    "loser_school": "Yale",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "Bill Cripps",
    "winner_school": "Arizona State",
    "loser": "Doug Parise",
    "loser_school": "Temple",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Mike Elliott",
    "loser_school": "Cal State Fullerton",
    "result": "MD 14-6"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 427,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "Dan Boos",
    "loser_school": "Luther",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 428,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Bill Cripps",
    "loser_school": "Arizona State",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Dan Hicks",
    "winner_school": "Oregon State",
    "loser": "Mike Mathies",
    "loser_school": "Portland State",
    "result": "Fall 1:49"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "Andre Metzger",
    "loser_school": "Oklahoma",
    "result": "Dec 10-6"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "Andre Metzger",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Mike Mathies",
    "winner_school": "Portland State",
    "loser": "Andy Rein",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 524,
    "winner": "Bill Cripps",
    "winner_school": "Arizona State",
    "loser": "Dan Boos",
    "loser_school": "Luther",
    "result": "Dec 2-1"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Andy Rein",
    "loser_school": "Wisconsin",
    "result": "Dec 7-6"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Mike Mathies",
    "winner_school": "Portland State",
    "loser": "Lee Roy Smith",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-4"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Dan Hicks",
    "winner_school": "Oregon State",
    "loser": "Scott Trizzino",
    "loser_school": "Iowa",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Robert Schandle",
    "winner_school": "Minnesota",
    "loser": "Paul Merritt",
    "loser_school": "Missouri",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Randy Fleury",
    "winner_school": "Cal Poly",
    "loser": "Shawn Connors",
    "loser_school": "Indiana",
    "result": "Fall 6:11"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Tony Neitenbach",
    "winner_school": "Colorado",
    "loser": "Walt Fingar",
    "loser_school": "Citadel",
    "result": "MD 18-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Scott Bliss",
    "winner_school": "Oregon",
    "loser": "Mike Willner",
    "loser_school": "Rhode Island",
    "result": "Fall 7:14"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Charles Shelton",
    "winner_school": "Oklahoma State",
    "loser": "Brian Surage",
    "loser_school": "Rutgers",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Tom Coffing",
    "winner_school": "Arizona",
    "loser": "Scott Madigan",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "John Stallings",
    "winner_school": "Auburn",
    "loser": "Kevin Benson",
    "loser_school": "Portland State",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Bruce Kinseth",
    "winner_school": "Iowa",
    "loser": "Tom Napier",
    "loser_school": "SIU-Edwardsville",
    "result": "Fall 4:23"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Chuck Biggert",
    "winner_school": "Toledo",
    "loser": "Robert Schandle",
    "loser_school": "Minnesota",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Jack Garrison",
    "winner_school": "Colorado State",
    "loser": "Steve Greenley",
    "loser_school": "Bucknell",
    "result": "MD 24-16"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Robert McDowell",
    "winner_school": "San Jose State",
    "loser": "Dave Pacheco",
    "loser_school": "Idaho State",
    "result": "MD 17-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Randy Fleury",
    "winner_school": "Cal Poly",
    "loser": "Allen Washington",
    "loser_school": "Yale",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Larry Kihlstadius",
    "winner_school": "Navy",
    "loser": "Scott Preston",
    "loser_school": "Louisiana State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Steve Suder",
    "winner_school": "Wyoming",
    "loser": "Dave Jurgens",
    "loser_school": "North Carolina",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Greg Drenik",
    "winner_school": "Cleveland State",
    "loser": "John Trice",
    "loser_school": "Illinois State",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Dick Knorr",
    "winner_school": "Oregon State",
    "loser": "Steve Peck",
    "loser_school": "Nebraska",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Gary Wood",
    "winner_school": "William Penn",
    "loser": "Carl Bridge",
    "loser_school": "Slippery Rock",
    "result": "Fall 4:04"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Mike Terry",
    "winner_school": "Wisconsin",
    "loser": "Tony Caravella",
    "loser_school": "Bloomsburg",
    "result": "Fall 7:40"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Scott Bliss",
    "winner_school": "Oregon",
    "loser": "Tony Neitenbach",
    "loser_school": "Colorado",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Charles Shelton",
    "winner_school": "Oklahoma State",
    "loser": "Tom Coffing",
    "loser_school": "Arizona",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Bruce Kinseth",
    "winner_school": "Iowa",
    "loser": "John Stallings",
    "loser_school": "Auburn",
    "result": "Fall 7:02"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Chuck Biggert",
    "winner_school": "Toledo",
    "loser": "Jack Garrison",
    "loser_school": "Colorado State",
    "result": "MD 19-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Randy Fleury",
    "winner_school": "Cal Poly",
    "loser": "Robert McDowell",
    "loser_school": "San Jose State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Larry Kihlstadius",
    "winner_school": "Navy",
    "loser": "Steve Suder",
    "loser_school": "Wyoming",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Dick Knorr",
    "winner_school": "Oregon State",
    "loser": "Greg Drenik",
    "loser_school": "Cleveland State",
    "result": "DQ"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Mike Terry",
    "winner_school": "Wisconsin",
    "loser": "Gary Wood",
    "loser_school": "William Penn",
    "result": "MD 23-7"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 277,
    "winner": "Tom Coffing",
    "winner_school": "Arizona",
    "loser": "Brian Surage",
    "loser_school": "Rutgers",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 278,
    "winner": "John Stallings",
    "winner_school": "Auburn",
    "loser": "Tom Napier",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 9-6"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 279,
    "winner": "Steve Suder",
    "winner_school": "Wyoming",
    "loser": "Scott Preston",
    "loser_school": "Louisiana State",
    "result": "Dec 12-5"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 280,
    "winner": "Greg Drenik",
    "winner_school": "Cleveland State",
    "loser": "Steve Peck",
    "loser_school": "Nebraska",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Charles Shelton",
    "winner_school": "Oklahoma State",
    "loser": "Scott Bliss",
    "loser_school": "Oregon",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Bruce Kinseth",
    "winner_school": "Iowa",
    "loser": "Chuck Biggert",
    "loser_school": "Toledo",
    "result": "Fall 6:53"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Larry Kihlstadius",
    "winner_school": "Navy",
    "loser": "Randy Fleury",
    "loser_school": "Cal Poly",
    "result": "Dec 12-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Dick Knorr",
    "winner_school": "Oregon State",
    "loser": "Mike Terry",
    "loser_school": "Wisconsin",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Tom Coffing",
    "winner_school": "Arizona",
    "loser": "Scott Bliss",
    "loser_school": "Oregon",
    "result": "Dec 10-8"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Chuck Biggert",
    "winner_school": "Toledo",
    "loser": "John Stallings",
    "loser_school": "Auburn",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Steve Suder",
    "winner_school": "Wyoming",
    "loser": "Randy Fleury",
    "loser_school": "Cal Poly",
    "result": "Dec 12-8"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Mike Terry",
    "winner_school": "Wisconsin",
    "loser": "Greg Drenik",
    "loser_school": "Cleveland State",
    "result": "MD 16-6"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 429,
    "winner": "Tom Coffing",
    "winner_school": "Arizona",
    "loser": "Chuck Biggert",
    "loser_school": "Toledo",
    "result": "Dec 8-6"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 430,
    "winner": "Mike Terry",
    "winner_school": "Wisconsin",
    "loser": "Steve Suder",
    "loser_school": "Wyoming",
    "result": "MD 17-6"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Bruce Kinseth",
    "winner_school": "Iowa",
    "loser": "Charles Shelton",
    "loser_school": "Oklahoma State",
    "result": "Fall 1:51"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Dick Knorr",
    "winner_school": "Oregon State",
    "loser": "Larry Kihlstadius",
    "loser_school": "Navy",
    "result": "Dec 13-6"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "Tom Coffing",
    "winner_school": "Arizona",
    "loser": "Larry Kihlstadius",
    "loser_school": "Navy",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Charles Shelton",
    "winner_school": "Oklahoma State",
    "loser": "Mike Terry",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 525,
    "winner": "Chuck Biggert",
    "winner_school": "Toledo",
    "loser": "Steve Suder",
    "loser_school": "Wyoming",
    "result": "Fall 5:10"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Mike Terry",
    "winner_school": "Wisconsin",
    "loser": "Larry Kihlstadius",
    "loser_school": "Navy",
    "result": "Dec 9-6"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Tom Coffing",
    "winner_school": "Arizona",
    "loser": "Charles Shelton",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-5"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Bruce Kinseth",
    "winner_school": "Iowa",
    "loser": "Dick Knorr",
    "loser_school": "Oregon State",
    "result": "Fall 2:34"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Jed Brown",
    "winner_school": "Iowa",
    "loser": "Greg Johnson",
    "loser_school": "Idaho State",
    "result": "Fall 4:59"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Mike Pheanis",
    "winner_school": "Northern Illinois",
    "loser": "Bryce Monasmith",
    "loser_school": "Colorado State",
    "result": "Dec 14-8"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Bill Keck",
    "winner_school": "Hofstra",
    "loser": "John Hanrahan",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 3006,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Tom Jones",
    "loser_school": "Pittsburgh",
    "result": "MD 15-4"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 4006,
    "winner": "Fred Boss",
    "winner_school": "Central Michigan",
    "loser": "Dale Gilbert",
    "loser_school": "Clarion",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Roye Oliver",
    "winner_school": "Arizona State",
    "loser": "Joe Birmingham",
    "loser_school": "Georgia",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Bob Holland",
    "winner_school": "Eastern Illinois",
    "loser": "Doug Oliver",
    "loser_school": "Rutgers",
    "result": "Fall 3:34"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Isreal Sheppard",
    "winner_school": "Oklahoma",
    "loser": "Paul Supchak",
    "loser_school": "Navy",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Fred Boss",
    "winner_school": "Central Michigan",
    "loser": "Dave Musselman",
    "loser_school": "Arizona",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Kelly Ward",
    "winner_school": "Iowa State",
    "loser": "Bill Keck",
    "loser_school": "Hofstra",
    "result": "Fall 6:30"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "Rick Boland",
    "loser_school": "Citadel",
    "result": "Fall 6:02"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Jed Brown",
    "winner_school": "Iowa",
    "loser": "Harold Ritchie",
    "loser_school": "Missouri",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Lee Spiegel",
    "winner_school": "Rhode Island",
    "loser": "Warren Flynn",
    "loser_school": "Fresno State",
    "result": "MD 19-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Jamie Milkovich",
    "loser_school": "Auburn",
    "result": "Fall 7:50"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Mike Pheanis",
    "winner_school": "Northern Illinois",
    "loser": "Mark Densberger",
    "loser_school": "Wilkes",
    "result": "Dec 6-4 TB"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Jeff Freedman",
    "winner_school": "Ashland",
    "loser": "Donny Owen",
    "loser_school": "Brigham Young",
    "result": "Dec 5-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Oscar Ordonez",
    "loser_school": "Drake",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Mark Evenhus",
    "winner_school": "Oregon State",
    "loser": "Chuck Broderick",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Tobey Matney",
    "winner_school": "Cleveland State",
    "loser": "Roger Dallas",
    "loser_school": "Lake Superior",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Carter Mario",
    "winner_school": "North Carolina",
    "loser": "Mark Schultz",
    "loser_school": "UCLA",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Scott Heaton",
    "winner_school": "Cal Poly",
    "loser": "Tom Janicik",
    "loser_school": "Northwestern",
    "result": "MD 19-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 256,
    "winner": "Oscar Ordonez",
    "winner_school": "Drake",
    "loser": "Tom Jones",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Bob Holland",
    "winner_school": "Eastern Illinois",
    "loser": "Roye Oliver",
    "loser_school": "Arizona State",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Fred Boss",
    "winner_school": "Central Michigan",
    "loser": "Isreal Sheppard",
    "loser_school": "Oklahoma",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Kelly Ward",
    "winner_school": "Iowa State",
    "loser": "Dave Evans",
    "loser_school": "Wisconsin",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Jed Brown",
    "winner_school": "Iowa",
    "loser": "Lee Spiegel",
    "loser_school": "Rhode Island",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Mike Pheanis",
    "loser_school": "Northern Illinois",
    "result": "Fall 3:33"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Jeff Freedman",
    "loser_school": "Ashland",
    "result": "Fall 2:46"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Mark Evenhus",
    "winner_school": "Oregon State",
    "loser": "Tobey Matney",
    "loser_school": "Cleveland State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Scott Heaton",
    "winner_school": "Cal Poly",
    "loser": "Carter Mario",
    "loser_school": "North Carolina",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 281,
    "winner": "Roye Oliver",
    "winner_school": "Arizona State",
    "loser": "Doug Oliver",
    "loser_school": "Rutgers",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 282,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "Bill Keck",
    "loser_school": "Hofstra",
    "result": "MD 10-1"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 283,
    "winner": "Oscar Ordonez",
    "winner_school": "Drake",
    "loser": "Jeff Freedman",
    "loser_school": "Ashland",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 284,
    "winner": "Tobey Matney",
    "winner_school": "Cleveland State",
    "loser": "Chuck Broderick",
    "loser_school": "Virginia Tech",
    "result": "Dec 16-11"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Bob Holland",
    "winner_school": "Eastern Illinois",
    "loser": "Fred Boss",
    "loser_school": "Central Michigan",
    "result": "Fall 6:58"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Kelly Ward",
    "winner_school": "Iowa State",
    "loser": "Jed Brown",
    "loser_school": "Iowa",
    "result": "Dec 13-11"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Ricky Stewart",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Mark Evenhus",
    "winner_school": "Oregon State",
    "loser": "Scott Heaton",
    "loser_school": "Cal Poly",
    "result": "Dec 11-7"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Roye Oliver",
    "winner_school": "Arizona State",
    "loser": "Fred Boss",
    "loser_school": "Central Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "Jed Brown",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Oscar Ordonez",
    "loser_school": "Drake",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Tobey Matney",
    "winner_school": "Cleveland State",
    "loser": "Scott Heaton",
    "loser_school": "Cal Poly",
    "result": "Fall 1:59"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 431,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "Roye Oliver",
    "loser_school": "Arizona State",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 432,
    "winner": "Tobey Matney",
    "winner_school": "Cleveland State",
    "loser": "Ricky Stewart",
    "loser_school": "Oklahoma State",
    "result": "Dec 12-6"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Kelly Ward",
    "winner_school": "Iowa State",
    "loser": "Bob Holland",
    "loser_school": "Eastern Illinois",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Mark Evenhus",
    "loser_school": "Oregon State",
    "result": "MD 13-4"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "Mark Evenhus",
    "loser_school": "Oregon State",
    "result": "Dec 7-0"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Bob Holland",
    "winner_school": "Eastern Illinois",
    "loser": "Tobey Matney",
    "loser_school": "Cleveland State",
    "result": "Dec 21-18"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 526,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Roye Oliver",
    "loser_school": "Arizona State",
    "result": "Dec 6-0"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Tobey Matney",
    "winner_school": "Cleveland State",
    "loser": "Mark Evenhus",
    "loser_school": "Oregon State",
    "result": "MD 24-7"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "Bob Holland",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-5"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Kelly Ward",
    "winner_school": "Iowa State",
    "loser": "Dan Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Dom Macchia",
    "winner_school": "Rhode Island",
    "loser": "Mike Benzel",
    "loser_school": "North Carolina",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Jeff Parker",
    "winner_school": "Louisiana State",
    "loser": "Tony Mantella",
    "loser_school": "Temple",
    "result": "MD 18-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Dave Landis",
    "winner_school": "Georgia",
    "loser": "Fred Miles",
    "loser_school": "Oregon State",
    "result": "Fall 0:43"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Dave Powell",
    "winner_school": "Iowa State",
    "loser": "Russ Pickering",
    "loser_school": "Miami Ohio",
    "result": "MD 17-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Mark Churella",
    "winner_school": "Michigan",
    "loser": "Bob Stout",
    "loser_school": "Eastern Illinois",
    "result": "Dec 14-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Dom DiGioacchino",
    "winner_school": "Bloomsburg",
    "loser": "Robert Kiddy",
    "loser_school": "Cal Poly",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Mark Harris",
    "winner_school": "Utah State",
    "loser": "Tom Press",
    "loser_school": "Minnesota",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Skip Bolin",
    "winner_school": "Pittsburgh",
    "loser": "Dale Walters",
    "loser_school": "Air Force",
    "result": "Dec 14-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Fred Duell",
    "winner_school": "Oklahoma State",
    "loser": "Brian Rodgers",
    "loser_school": "Navy",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Paul Sigler",
    "winner_school": "Wisconsin",
    "loser": "Dave Coyle",
    "loser_school": "Marshall",
    "result": "Fall 0:30"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Mike Abrams",
    "winner_school": "Grand Valley State",
    "loser": "Ron Michaels",
    "loser_school": "Kent State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Brad Hansen",
    "winner_school": "Brigham Young",
    "loser": "Bob Celli",
    "loser_school": "Shippensburg",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Dave Miller",
    "winner_school": "Missouri",
    "loser": "John Licata",
    "loser_school": "West Chester",
    "result": "Dec 15-10"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "Tom Beyer",
    "loser_school": "Minnesota-Morris",
    "result": "Fall 7:56"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Jim Hall",
    "winner_school": "Oklahoma",
    "loser": "Keith Foxx",
    "loser_school": "Arizona",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Jeff Parker",
    "winner_school": "Louisiana State",
    "loser": "Dom Macchia",
    "loser_school": "Rhode Island",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Dave Powell",
    "winner_school": "Iowa State",
    "loser": "Dave Landis",
    "loser_school": "Georgia",
    "result": "Fall 4:35"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Mark Churella",
    "winner_school": "Michigan",
    "loser": "Dom DiGioacchino",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:47"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Mark Harris",
    "winner_school": "Utah State",
    "loser": "Skip Bolin",
    "loser_school": "Pittsburgh",
    "result": "Fall 1:10"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Fred Duell",
    "winner_school": "Oklahoma State",
    "loser": "Paul Sigler",
    "loser_school": "Wisconsin",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Brad Hansen",
    "winner_school": "Brigham Young",
    "loser": "Mike Abrams",
    "loser_school": "Grand Valley State",
    "result": "Fall 4:04"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "Dave Miller",
    "loser_school": "Missouri",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Jim Vargo",
    "winner_school": "East Stroudsburg",
    "loser": "Jim Hall",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 285,
    "winner": "Russ Pickering",
    "winner_school": "Miami Ohio",
    "loser": "Dave Landis",
    "loser_school": "Georgia",
    "result": "Dec 8-5"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 286,
    "winner": "Dom DiGioacchino",
    "winner_school": "Bloomsburg",
    "loser": "Bob Stout",
    "loser_school": "Eastern Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 287,
    "winner": "Mike Abrams",
    "winner_school": "Grand Valley State",
    "loser": "Bob Celli",
    "loser_school": "Shippensburg",
    "result": "MD 19-11"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 288,
    "winner": "Dave Miller",
    "winner_school": "Missouri",
    "loser": "Tom Beyer",
    "loser_school": "Minnesota-Morris",
    "result": "MD 15-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Dave Powell",
    "winner_school": "Iowa State",
    "loser": "Jeff Parker",
    "loser_school": "Louisiana State",
    "result": "Fall 4:49"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Mark Churella",
    "winner_school": "Michigan",
    "loser": "Mark Harris",
    "loser_school": "Utah State",
    "result": "Fall 5:33"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Brad Hansen",
    "winner_school": "Brigham Young",
    "loser": "Fred Duell",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "Jim Vargo",
    "loser_school": "East Stroudsburg",
    "result": "Dec 16-9"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Russ Pickering",
    "winner_school": "Miami Ohio",
    "loser": "Jeff Parker",
    "loser_school": "Louisiana State",
    "result": "Dec 11-7"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Dom DiGioacchino",
    "winner_school": "Bloomsburg",
    "loser": "Mark Harris",
    "loser_school": "Utah State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "Mike Abrams",
    "winner_school": "Grand Valley State",
    "loser": "Fred Duell",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Dave Miller",
    "winner_school": "Missouri",
    "loser": "Jim Vargo",
    "loser_school": "East Stroudsburg",
    "result": "MD 15-4"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 433,
    "winner": "Dom DiGioacchino",
    "winner_school": "Bloomsburg",
    "loser": "Russ Pickering",
    "loser_school": "Miami Ohio",
    "result": "MD 21-7"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 434,
    "winner": "Mike Abrams",
    "winner_school": "Grand Valley State",
    "loser": "Dave Miller",
    "loser_school": "Missouri",
    "result": "Dec 12-7"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Mark Churella",
    "winner_school": "Michigan",
    "loser": "Dave Powell",
    "loser_school": "Iowa State",
    "result": "Dec 8-6"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "Brad Hansen",
    "loser_school": "Brigham Young",
    "result": "Fall 7:19"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Brad Hansen",
    "winner_school": "Brigham Young",
    "loser": "Dom DiGioacchino",
    "loser_school": "Bloomsburg",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "Dave Powell",
    "winner_school": "Iowa State",
    "loser": "Mike Abrams",
    "loser_school": "Grand Valley State",
    "result": "Fall 5:00"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 527,
    "winner": "Dave Miller",
    "winner_school": "Missouri",
    "loser": "Russ Pickering",
    "loser_school": "Miami Ohio",
    "result": "Dec 12-7"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Dom DiGioacchino",
    "winner_school": "Bloomsburg",
    "loser": "Mike Abrams",
    "loser_school": "Grand Valley State",
    "result": "Dec 8-6"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Dave Powell",
    "winner_school": "Iowa State",
    "loser": "Brad Hansen",
    "loser_school": "Brigham Young",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Mark Churella",
    "winner_school": "Michigan",
    "loser": "Mike DeAnna",
    "loser_school": "Iowa",
    "result": "Fall 3:10"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "John Stroup",
    "winner_school": "Slippery Rock",
    "loser": "Tom Wertz",
    "loser_school": "Wyoming",
    "result": "Dec 4-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1008,
    "winner": "Eric Moll",
    "winner_school": "Louisiana State",
    "loser": "Bill Braseth",
    "loser_school": "Boise State",
    "result": "MD 12-2"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 2008,
    "winner": "Jim Kleinhans",
    "winner_school": "Wisconsin",
    "loser": "Mark Snider",
    "loser_school": "Auburn",
    "result": "Dec 8-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Dave Severn",
    "winner_school": "Arizona State",
    "loser": "Mark Jarosz",
    "loser_school": "Salisbury",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Jim Ellis",
    "loser_school": "Michigan State",
    "result": "Dec 18-14"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Bill Teutsch",
    "winner_school": "Florida",
    "loser": "Bill Petoskey",
    "loser_school": "Michigan",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Bart Cook",
    "winner_school": "Wilkes",
    "loser": "Gary Germundson",
    "loser_school": "Oklahoma State",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Mark Lieberman",
    "winner_school": "Lehigh",
    "loser": "John Stroup",
    "loser_school": "Slippery Rock",
    "result": "Fall 3:59"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Mark Hattendorf",
    "winner_school": "SIU-Edwardsville",
    "loser": "James Rey",
    "loser_school": "San Jose State",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Jim Kleinhans",
    "winner_school": "Wisconsin",
    "loser": "Bryan Neitenbach",
    "loser_school": "Colorado",
    "result": "MD 20-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Noel Loban",
    "winner_school": "Clemson",
    "loser": "Kelly Carter",
    "loser_school": "Toledo",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Don Brown",
    "winner_school": "Oregon",
    "loser": "Bob Greenley",
    "loser_school": "Bucknell",
    "result": "Dec 15-11"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Eric Moll",
    "winner_school": "Louisiana State",
    "loser": "Randy McCarthy",
    "loser_school": "Rhode Island",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Rick Worel",
    "winner_school": "Cal Poly",
    "loser": "Keith Ely",
    "loser_school": "Princeton",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Brian Parlet",
    "winner_school": "Augustana SD",
    "loser": "Tom Flanagan",
    "loser_school": "Chattanooga",
    "result": "Fall 1:04"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Andy Cappelli",
    "winner_school": "Bloomsburg",
    "loser": "Marty Ryan",
    "loser_school": "Oregon State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Bud Palmer",
    "winner_school": "Iowa",
    "loser": "Butch Revils",
    "loser_school": "East Carolina",
    "result": "MD 17-8"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Joe Gormally",
    "winner_school": "Northern Iowa",
    "loser": "Joe Palivoda",
    "loser_school": "Cleveland State",
    "result": "Fall 1:45"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Jim Darlington",
    "winner_school": "Oklahoma",
    "loser": "Tom Vizzi",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Dave Severn",
    "winner_school": "Arizona State",
    "loser": "Dave Allen",
    "loser_school": "Iowa State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Bill Teutsch",
    "winner_school": "Florida",
    "loser": "Bart Cook",
    "loser_school": "Wilkes",
    "result": "Fall 2:59"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Mark Lieberman",
    "winner_school": "Lehigh",
    "loser": "Mark Hattendorf",
    "loser_school": "SIU-Edwardsville",
    "result": "Fall 3:54"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Jim Kleinhans",
    "winner_school": "Wisconsin",
    "loser": "Noel Loban",
    "loser_school": "Clemson",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Don Brown",
    "winner_school": "Oregon",
    "loser": "Eric Moll",
    "loser_school": "Louisiana State",
    "result": "Fall 2:09"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Brian Parlet",
    "winner_school": "Augustana SD",
    "loser": "Rick Worel",
    "loser_school": "Cal Poly",
    "result": "Fall 4:11"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Bud Palmer",
    "winner_school": "Iowa",
    "loser": "Andy Cappelli",
    "loser_school": "Bloomsburg",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Joe Gormally",
    "winner_school": "Northern Iowa",
    "loser": "Jim Darlington",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 289,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Mark Jarosz",
    "loser_school": "Salisbury",
    "result": "Dec 6-0"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 290,
    "winner": "Mark Hattendorf",
    "winner_school": "SIU-Edwardsville",
    "loser": "John Stroup",
    "loser_school": "Slippery Rock",
    "result": "Fall 0:26"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 291,
    "winner": "Eric Moll",
    "winner_school": "Louisiana State",
    "loser": "Bob Greenley",
    "loser_school": "Bucknell",
    "result": "MD 21-9"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 292,
    "winner": "Butch Revils",
    "winner_school": "East Carolina",
    "loser": "Andy Cappelli",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Dave Severn",
    "winner_school": "Arizona State",
    "loser": "Bill Teutsch",
    "loser_school": "Florida",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Mark Lieberman",
    "winner_school": "Lehigh",
    "loser": "Jim Kleinhans",
    "loser_school": "Wisconsin",
    "result": "Fall 3:46"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Don Brown",
    "winner_school": "Oregon",
    "loser": "Brian Parlet",
    "loser_school": "Augustana SD",
    "result": "Fall 1:42"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Bud Palmer",
    "winner_school": "Iowa",
    "loser": "Joe Gormally",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Bill Teutsch",
    "loser_school": "Florida",
    "result": "Fall 2:21"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Mark Hattendorf",
    "winner_school": "SIU-Edwardsville",
    "loser": "Jim Kleinhans",
    "loser_school": "Wisconsin",
    "result": "MD 13-3"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "Brian Parlet",
    "winner_school": "Augustana SD",
    "loser": "Eric Moll",
    "loser_school": "Louisiana State",
    "result": "Fall 0:54"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Joe Gormally",
    "winner_school": "Northern Iowa",
    "loser": "Butch Revils",
    "loser_school": "East Carolina",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 435,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Mark Hattendorf",
    "loser_school": "SIU-Edwardsville",
    "result": "Fall 5:58"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 436,
    "winner": "Joe Gormally",
    "winner_school": "Northern Iowa",
    "loser": "Brian Parlet",
    "loser_school": "Augustana SD",
    "result": "Dec 5-3 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Mark Lieberman",
    "winner_school": "Lehigh",
    "loser": "Dave Severn",
    "loser_school": "Arizona State",
    "result": "MD 12-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Bud Palmer",
    "winner_school": "Iowa",
    "loser": "Don Brown",
    "loser_school": "Oregon",
    "result": "Dec 9-3"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Don Brown",
    "loser_school": "Oregon",
    "result": "MD 11-2"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Joe Gormally",
    "winner_school": "Northern Iowa",
    "loser": "Dave Severn",
    "loser_school": "Arizona State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 528,
    "winner": "Brian Parlet",
    "winner_school": "Augustana SD",
    "loser": "Mark Hattendorf",
    "loser_school": "SIU-Edwardsville",
    "result": "Fall 1:04"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Dave Severn",
    "winner_school": "Arizona State",
    "loser": "Don Brown",
    "loser_school": "Oregon",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Joe Gormally",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Mark Lieberman",
    "winner_school": "Lehigh",
    "loser": "Bud Palmer",
    "loser_school": "Iowa",
    "result": "DQ"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 9,
    "winner": "Brian Gaffney",
    "winner_school": "Florida",
    "loser": "Bobby Orand",
    "loser_school": "Chattanooga",
    "result": "Fall 4:38"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 1009,
    "winner": "Ed Meyers",
    "winner_school": "Navy",
    "loser": "Mike Harris",
    "loser_school": "Ohio",
    "result": "Fall 3:20"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 2009,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Craig Simpson",
    "loser_school": "Weber State",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Kevin Sheesley",
    "winner_school": "Colorado State",
    "loser": "Duane Harris",
    "loser_school": "San Jose State",
    "result": "Fall 8:59 SV"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Mitch Hull",
    "winner_school": "Wisconsin",
    "loser": "Mark Miller",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Joe Cooper",
    "winner_school": "Yale",
    "loser": "Charles Schoen",
    "loser_school": "Michigan State",
    "result": "Dec 15-12"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Kirk Myers",
    "winner_school": "Northern Iowa",
    "loser": "Mark Redman",
    "loser_school": "Drake",
    "result": "Fall 1:22"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Eric Wais",
    "winner_school": "Oklahoma State",
    "loser": "Geno Savegnago",
    "loser_school": "Eastern Illinois",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Jerry Rodriquez",
    "winner_school": "Louisiana State",
    "loser": "Joe Lidowski",
    "loser_school": "NC State",
    "result": "Fall 4:21"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "George Bowman",
    "winner_school": "Minnesota",
    "loser": "Ed Meyers",
    "loser_school": "Navy",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Kelly Wilson",
    "winner_school": "Wyoming",
    "loser": "Aurel Balaianu",
    "loser_school": "Hofstra",
    "result": "Fall 8:39 SV"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Joe Davis",
    "winner_school": "Cal Poly",
    "loser": "Bob McNally",
    "loser_school": "New Hampshire",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Brian Gaffney",
    "loser_school": "Florida",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Jay Hockenbroch",
    "winner_school": "Clarion",
    "loser": "Brad Moseley",
    "loser_school": "Missouri",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Craig Blackman",
    "loser_school": "Franklin and Marshall",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Brian Thomas",
    "winner_school": "Ball State",
    "loser": "Joe Jarosz",
    "loser_school": "Salisbury",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Steve Fraser",
    "winner_school": "Michigan",
    "loser": "Mike Kovalick",
    "loser_school": "Arizona State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Edcar Thomas",
    "winner_school": "Oklahoma",
    "loser": "Sam Sallitt",
    "loser_school": "Penn State",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Paul Marfiz",
    "loser_school": "New Mexico",
    "result": "Fall 3:39"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Mitch Hull",
    "winner_school": "Wisconsin",
    "loser": "Kevin Sheesley",
    "loser_school": "Colorado State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Kirk Myers",
    "winner_school": "Northern Iowa",
    "loser": "Joe Cooper",
    "loser_school": "Yale",
    "result": "Fall 1:11"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Eric Wais",
    "winner_school": "Oklahoma State",
    "loser": "Jerry Rodriquez",
    "loser_school": "Louisiana State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "George Bowman",
    "winner_school": "Minnesota",
    "loser": "Kelly Wilson",
    "loser_school": "Wyoming",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Joe Davis",
    "loser_school": "Cal Poly",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Jay Hockenbroch",
    "loser_school": "Clarion",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Steve Fraser",
    "winner_school": "Michigan",
    "loser": "Brian Thomas",
    "loser_school": "Ball State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Edcar Thomas",
    "loser_school": "Oklahoma",
    "result": "MD 21-9"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 293,
    "winner": "Kevin Sheesley",
    "winner_school": "Colorado State",
    "loser": "Mark Miller",
    "loser_school": "Virginia Tech",
    "result": "MD 16-6"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 294,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Jerry Rodriquez",
    "loser_school": "Louisiana State",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 295,
    "winner": "Craig Blackman",
    "winner_school": "Franklin and Marshall",
    "loser": "Jay Hockenbroch",
    "loser_school": "Clarion",
    "result": "Dec 9-6"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 296,
    "winner": "Edcar Thomas",
    "winner_school": "Oklahoma",
    "loser": "Paul Marfiz",
    "loser_school": "New Mexico",
    "result": "Dec 12-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Mitch Hull",
    "winner_school": "Wisconsin",
    "loser": "Kirk Myers",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Eric Wais",
    "winner_school": "Oklahoma State",
    "loser": "George Bowman",
    "loser_school": "Minnesota",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Mike Mann",
    "loser_school": "Iowa State",
    "result": "Dec 11-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Steve Fraser",
    "loser_school": "Michigan",
    "result": "MD 13-3"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "Kirk Myers",
    "winner_school": "Northern Iowa",
    "loser": "Kevin Sheesley",
    "loser_school": "Colorado State",
    "result": "Dec 10-3"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "George Bowman",
    "loser_school": "Minnesota",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Craig Blackman",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Edcar Thomas",
    "winner_school": "Oklahoma",
    "loser": "Steve Fraser",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 437,
    "winner": "Kirk Myers",
    "winner_school": "Northern Iowa",
    "loser": "Geno Savegnago",
    "loser_school": "Eastern Illinois",
    "result": "Dec 9-4"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 438,
    "winner": "Edcar Thomas",
    "winner_school": "Oklahoma",
    "loser": "Mike Mann",
    "loser_school": "Iowa State",
    "result": "MD 19-7"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Eric Wais",
    "winner_school": "Oklahoma State",
    "loser": "Mitch Hull",
    "loser_school": "Wisconsin",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Howard Harris",
    "loser_school": "Oregon State",
    "result": "Dec 12-5"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Kirk Myers",
    "winner_school": "Northern Iowa",
    "loser": "Howard Harris",
    "loser_school": "Oregon State",
    "result": "Dec 10-8"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Mitch Hull",
    "winner_school": "Wisconsin",
    "loser": "Edcar Thomas",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 529,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Geno Savegnago",
    "loser_school": "Eastern Illinois",
    "result": "Dec 9-2"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Edcar Thomas",
    "loser_school": "Oklahoma",
    "result": "Fall 4:00"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Kirk Myers",
    "winner_school": "Northern Iowa",
    "loser": "Mitch Hull",
    "loser_school": "Wisconsin",
    "result": "Dec 6-3"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Eric Wais",
    "winner_school": "Oklahoma State",
    "loser": "Mike Brown",
    "loser_school": "Lehigh",
    "result": "Dec 12-5"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 10,
    "winner": "Craig Schoene",
    "winner_school": "Oregon",
    "loser": "Dan Scow",
    "loser_school": "Montana",
    "result": "Dec 10-3"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 1010,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Gene Rowell",
    "loser_school": "Dubuque",
    "result": "Fall 7:18"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 155,
    "winner": "Jeff Gilman",
    "winner_school": "Missouri",
    "loser": "Scott Jerabek",
    "loser_school": "Wisconsin",
    "result": "Fall 2:20"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 156,
    "winner": "Shawn Whitcomb",
    "winner_school": "Michigan State",
    "loser": "Bob Bath",
    "loser_school": "Wyoming",
    "result": "MD 30-7"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 157,
    "winner": "Steve Kyriopoulos",
    "winner_school": "Utah State",
    "loser": "Bill Amelio",
    "loser_school": "Lehigh",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Dave Klemm",
    "winner_school": "Eastern Illinois",
    "loser": "Lo Carmen",
    "loser_school": "Appalachian State",
    "result": "Fall 1:49"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 159,
    "winner": "Jeff Blatnick",
    "winner_school": "Springfield",
    "loser": "Glen Quackenbush",
    "loser_school": "Arizona State",
    "result": "Fall 4:32"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 160,
    "winner": "Chris Gardner",
    "winner_school": "Auburn",
    "loser": "Craig Newburg",
    "loser_school": "Ball State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 161,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Dan House",
    "loser_school": "Wilkes",
    "result": "Fall 7:54"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Jeff Grier",
    "winner_school": "Augustana SD",
    "loser": "John Allen",
    "loser_school": "Massachusetts",
    "result": "Fall 6:41"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Ray Wagner",
    "winner_school": "Kent State",
    "loser": "Al Tanner",
    "loser_school": "Clemson",
    "result": "Fall 2:19"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 164,
    "winner": "Tim Payne",
    "winner_school": "Cleveland State",
    "loser": "Craig Schoene",
    "loser_school": "Oregon",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 165,
    "winner": "Jack Campbell",
    "winner_school": "Clarion",
    "loser": "Jay Craddock",
    "loser_school": "Columbia",
    "result": "Fall 2:58"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 166,
    "winner": "Fred Bohna",
    "winner_school": "UCLA",
    "loser": "David Jack",
    "loser_school": "Cal Poly",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "Fred McGaver",
    "winner_school": "Marquette",
    "loser": "Rich Passerotti",
    "loser_school": "Bucknell",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 168,
    "winner": "Tom Waldon",
    "winner_school": "Iowa State",
    "loser": "Mindell Tyson",
    "loser_school": "East Carolina",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 169,
    "winner": "Jim Becker",
    "winner_school": "Minnesota",
    "loser": "George Atiyeh",
    "loser_school": "Louisiana State",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 170,
    "winner": "John Hurlock",
    "winner_school": "Colorado",
    "loser": "John Bowlsby",
    "loser_school": "Iowa",
    "result": "Fall 1:33"
  },
  {
    "round": "ConsPrelims",
    "weight": "UNL",
    "bout": 260,
    "winner": "Dan House",
    "winner_school": "Wilkes",
    "loser": "Gene Rowell",
    "loser_school": "Dubuque",
    "result": "Fall 5:22"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Shawn Whitcomb",
    "winner_school": "Michigan State",
    "loser": "Jeff Gilman",
    "loser_school": "Missouri",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Dave Klemm",
    "winner_school": "Eastern Illinois",
    "loser": "Steve Kyriopoulos",
    "loser_school": "Utah State",
    "result": "Fall 1:50"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Jeff Blatnick",
    "winner_school": "Springfield",
    "loser": "Chris Gardner",
    "loser_school": "Auburn",
    "result": "Fall 5:58"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Jeff Grier",
    "loser_school": "Augustana SD",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Ray Wagner",
    "winner_school": "Kent State",
    "loser": "Tim Payne",
    "loser_school": "Cleveland State",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Fred Bohna",
    "winner_school": "UCLA",
    "loser": "Jack Campbell",
    "loser_school": "Clarion",
    "result": "MD 21-4"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Fred McGaver",
    "winner_school": "Marquette",
    "loser": "Tom Waldon",
    "loser_school": "Iowa State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Jim Becker",
    "winner_school": "Minnesota",
    "loser": "John Hurlock",
    "loser_school": "Colorado",
    "result": "MD 16-1"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 297,
    "winner": "Steve Kyriopoulos",
    "winner_school": "Utah State",
    "loser": "Lo Carmen",
    "loser_school": "Appalachian State",
    "result": "Fall 5:28"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 298,
    "winner": "Jeff Grier",
    "winner_school": "Augustana SD",
    "loser": "Dan House",
    "loser_school": "Wilkes",
    "result": "MD 11-1"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 299,
    "winner": "Jack Campbell",
    "winner_school": "Clarion",
    "loser": "David Jack",
    "loser_school": "Cal Poly",
    "result": "Dec 6-5"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 300,
    "winner": "Tom Waldon",
    "winner_school": "Iowa State",
    "loser": "Rich Passerotti",
    "loser_school": "Bucknell",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Dave Klemm",
    "winner_school": "Eastern Illinois",
    "loser": "Shawn Whitcomb",
    "loser_school": "Michigan State",
    "result": "Fall 3:44"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Jeff Blatnick",
    "loser_school": "Springfield",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Fred Bohna",
    "winner_school": "UCLA",
    "loser": "Ray Wagner",
    "loser_school": "Kent State",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Fred McGaver",
    "winner_school": "Marquette",
    "loser": "Jim Becker",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 417,
    "winner": "Shawn Whitcomb",
    "winner_school": "Michigan State",
    "loser": "Steve Kyriopoulos",
    "loser_school": "Utah State",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 418,
    "winner": "Jeff Blatnick",
    "winner_school": "Springfield",
    "loser": "Jeff Grier",
    "loser_school": "Augustana SD",
    "result": "Dec 9-3"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 419,
    "winner": "Jack Campbell",
    "winner_school": "Clarion",
    "loser": "Ray Wagner",
    "loser_school": "Kent State",
    "result": "MD 16-1"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 420,
    "winner": "Tom Waldon",
    "winner_school": "Iowa State",
    "loser": "Jim Becker",
    "loser_school": "Minnesota",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 439,
    "winner": "Jeff Blatnick",
    "winner_school": "Springfield",
    "loser": "Shawn Whitcomb",
    "loser_school": "Michigan State",
    "result": "Dec 7-1"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 440,
    "winner": "Jack Campbell",
    "winner_school": "Clarion",
    "loser": "Tom Waldon",
    "loser_school": "Iowa State",
    "result": "MD 8-0"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Dave Klemm",
    "winner_school": "Eastern Illinois",
    "loser": "Steve Williams",
    "loser_school": "Oklahoma",
    "result": "Fall 3:03"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Fred Bohna",
    "winner_school": "UCLA",
    "loser": "Fred McGaver",
    "loser_school": "Marquette",
    "result": "MD 14-6"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 499,
    "winner": "Jeff Blatnick",
    "winner_school": "Springfield",
    "loser": "Fred McGaver",
    "loser_school": "Marquette",
    "result": "Fall 3:35"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 500,
    "winner": "Jack Campbell",
    "winner_school": "Clarion",
    "loser": "Steve Williams",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "7thPlace",
    "weight": "UNL",
    "bout": 530,
    "winner": "Tom Waldon",
    "winner_school": "Iowa State",
    "loser": "Shawn Whitcomb",
    "loser_school": "Michigan State",
    "result": "Dec 7-5"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "Fred McGaver",
    "winner_school": "Marquette",
    "loser": "Steve Williams",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Jeff Blatnick",
    "winner_school": "Springfield",
    "loser": "Jack Campbell",
    "loser_school": "Clarion",
    "result": "Dec 12-9"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Fred Bohna",
    "winner_school": "UCLA",
    "loser": "Dave Klemm",
    "loser_school": "Eastern Illinois",
    "result": "Dec 9-5"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
