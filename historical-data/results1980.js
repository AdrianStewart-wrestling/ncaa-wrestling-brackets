// 1980 NCAA Division I Wrestling Championships (3/13/1980 to 3/15/1980 at Oregon State). Weight classes 118-275. Consolation: SEMIFINALIST WRESTLEBACK (rounds SfConsR1-R4).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1980 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1980-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Joe Gonzales",
    "winner_school": "CSU Bakersfield",
    "loser": "Brian Higa",
    "loser_school": "Washington",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Jim Zenz",
    "winner_school": "NC State",
    "loser": "Wade Genova",
    "loser_school": "Boston University",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Tony Leonino",
    "winner_school": "Auburn",
    "loser": "Richard Berry",
    "loser_school": "Idaho State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Doug Smith",
    "winner_school": "Western Michigan",
    "loser": "Tracy Moore",
    "loser_school": "Utah State",
    "result": "MD 17-8"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Shelby Stone",
    "winner_school": "Oklahoma",
    "loser": "Mike Jones",
    "loser_school": "Colorado",
    "result": "Dec 15-12"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Chris Taylor",
    "loser_school": "Brigham Young",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Mike Millward",
    "winner_school": "Lock Haven",
    "loser": "Dan Foldesy",
    "loser_school": "Cleveland State",
    "result": "Fall 2:53"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Joe Gonzales",
    "winner_school": "CSU Bakersfield",
    "loser": "Tony Calderaio",
    "loser_school": "Slippery Rock",
    "result": "MD 25-11"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Angelo Marino",
    "winner_school": "Indiana",
    "loser": "Bobby Greenwood",
    "loser_school": "VMI",
    "result": "MD 19-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Mark Zimmer",
    "winner_school": "Wisconsin",
    "loser": "Jorge Leon",
    "loser_school": "West Chester",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Jim Pagano",
    "loser_school": "William & Mary",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Dale Mills",
    "winner_school": "Syracuse",
    "loser": "Tom Jacoutot",
    "loser_school": "Buffalo",
    "result": "Fall 6:02"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Roger Desart",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Randy Majors",
    "loser_school": "Oregon State",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Gary Fischer",
    "winner_school": "Cal Poly",
    "loser": "Matt Hawes",
    "loser_school": "Springfield",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Randy Hoffman",
    "winner_school": "Arizona State",
    "loser": "Ed Bailey",
    "loser_school": "Salisbury",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Mike Picozzi",
    "winner_school": "Iowa State",
    "loser": "Greg Robbins",
    "loser_school": "Utah",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Tom Reed",
    "winner_school": "SIU-Edwardsville",
    "loser": "Joe Biggs",
    "loser_school": "Ohio State",
    "result": "MD 17-7"
  },
  {
    "round": "ConsPrelims",
    "weight": "118",
    "bout": 251,
    "winner": "Brian Higa",
    "winner_school": "Washington",
    "loser": "Tony Calderaio",
    "loser_school": "Slippery Rock",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Jim Zenz",
    "winner_school": "NC State",
    "loser": "Tony Leonino",
    "loser_school": "Auburn",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Shelby Stone",
    "winner_school": "Oklahoma",
    "loser": "Doug Smith",
    "loser_school": "Western Michigan",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Mike Millward",
    "loser_school": "Lock Haven",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "Joe Gonzales",
    "winner_school": "CSU Bakersfield",
    "loser": "Angelo Marino",
    "loser_school": "Indiana",
    "result": "MD 20-7"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Mark Zimmer",
    "loser_school": "Wisconsin",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Dale Mills",
    "winner_school": "Syracuse",
    "loser": "Roger Desart",
    "loser_school": "Nevada-Las Vegas",
    "result": "MD 21-6"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Gary Fischer",
    "winner_school": "Cal Poly",
    "loser": "Randy Hoffman",
    "loser_school": "Arizona State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Mike Picozzi",
    "winner_school": "Iowa State",
    "loser": "Tom Reed",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 16-12"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Tony Leonino",
    "winner_school": "Auburn",
    "loser": "Wade Genova",
    "loser_school": "Boston University",
    "result": "Dec 6-1"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Angelo Marino",
    "winner_school": "Indiana",
    "loser": "Brian Higa",
    "loser_school": "Washington",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Mark Zimmer",
    "winner_school": "Wisconsin",
    "loser": "Jim Pagano",
    "loser_school": "William & Mary",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Randy Hoffman",
    "winner_school": "Arizona State",
    "loser": "Matt Hawes",
    "loser_school": "Springfield",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Jim Zenz",
    "winner_school": "NC State",
    "loser": "Shelby Stone",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "Joe Gonzales",
    "winner_school": "CSU Bakersfield",
    "loser": "Rich Santoro",
    "loser_school": "Lehigh",
    "result": "MD 27-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Dale Mills",
    "loser_school": "Syracuse",
    "result": "MD 18-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Gary Fischer",
    "winner_school": "Cal Poly",
    "loser": "Mike Picozzi",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Tony Leonino",
    "winner_school": "Auburn",
    "loser": "Shelby Stone",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Angelo Marino",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Mark Zimmer",
    "winner_school": "Wisconsin",
    "loser": "Dale Mills",
    "loser_school": "Syracuse",
    "result": "Dec 9-6"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Mike Picozzi",
    "winner_school": "Iowa State",
    "loser": "Randy Hoffman",
    "loser_school": "Arizona State",
    "result": "Dec 8-6"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Tony Leonino",
    "loser_school": "Auburn",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Mike Picozzi",
    "winner_school": "Iowa State",
    "loser": "Mark Zimmer",
    "loser_school": "Wisconsin",
    "result": "MD 8-0"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Joe Gonzales",
    "winner_school": "CSU Bakersfield",
    "loser": "Jim Zenz",
    "loser_school": "NC State",
    "result": "MD 16-7"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Gary Fischer",
    "loser_school": "Cal Poly",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Gary Fischer",
    "winner_school": "Cal Poly",
    "loser": "Rich Santoro",
    "loser_school": "Lehigh",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Jim Zenz",
    "winner_school": "NC State",
    "loser": "Mike Picozzi",
    "loser_school": "Iowa State",
    "result": "Dec 12-9"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 521,
    "winner": "Tony Leonino",
    "winner_school": "Auburn",
    "loser": "Mark Zimmer",
    "loser_school": "Wisconsin",
    "result": "Dec 8-1"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Mike Picozzi",
    "winner_school": "Iowa State",
    "loser": "Rich Santoro",
    "loser_school": "Lehigh",
    "result": "Dec 7-6"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Jim Zenz",
    "winner_school": "NC State",
    "loser": "Gary Fischer",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Joe Gonzales",
    "winner_school": "CSU Bakersfield",
    "loser": "Dan Glenn",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Bryan Evans",
    "winner_school": "Oklahoma",
    "loser": "Eddie Baza",
    "loser_school": "San Jose State",
    "result": "MD 12-3"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Alan Reto",
    "loser_school": "East Stroudsburg",
    "result": "Fall 4:26"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2002,
    "winner": "Jerry Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Sam Edwards",
    "loser_school": "Cornell",
    "result": "Fall 3:11"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Eddie Ortiz",
    "winner_school": "Arizona State",
    "loser": "Dave Cooke",
    "loser_school": "North Carolina",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Marvin Gasner",
    "winner_school": "Colorado",
    "loser": "Mike Jacoutot",
    "loser_school": "College of New Jersey",
    "result": "Dec 14-10"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Khris Whelan",
    "winner_school": "Missouri",
    "loser": "Joe Viola",
    "loser_school": "Connecticut",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Steve Perdew",
    "winner_school": "Slippery Rock",
    "loser": "Mike Wenzel",
    "loser_school": "Rider",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Bryan Evans",
    "winner_school": "Oklahoma",
    "loser": "Chris Bell",
    "loser_school": "Wyoming",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Steve Bastianelli",
    "winner_school": "Lehigh",
    "loser": "Brent Hagen",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Gary Bohay",
    "loser_school": "UCLA",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Mike Giustizia",
    "winner_school": "Tennessee",
    "loser": "Scott Barrett",
    "loser_school": "Boise State",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Mike Romero",
    "winner_school": "Arizona",
    "loser": "John Lamanna",
    "loser_school": "Illinois State",
    "result": "Fall 6:26"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Jerry Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Larry Haughn",
    "loser_school": "Michigan",
    "result": "Fall 3:36"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Byron McGlathery",
    "winner_school": "Chattanooga",
    "loser": "Jeff Kerber",
    "loser_school": "Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Steve Jastrabek",
    "winner_school": "Clarion",
    "loser": "Don Reese",
    "loser_school": "Bloomsburg",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Ed Snook",
    "winner_school": "Brigham Young",
    "loser": "Tim Bishong",
    "loser_school": "Toledo",
    "result": "MD 17-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Jeff Thomas",
    "winner_school": "Michigan State",
    "loser": "Dick Lemelle",
    "loser_school": "Cal Poly",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Kevin Richard",
    "loser_school": "SUNY-Brockport",
    "result": "Fall 2:49"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Gary Lefebvre",
    "winner_school": "Minnesota",
    "loser": "Gene Leonard",
    "loser_school": "Kent State",
    "result": "Fall 7:54"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 252,
    "winner": "Gary Bohay",
    "winner_school": "UCLA",
    "loser": "Alan Reto",
    "loser_school": "East Stroudsburg",
    "result": "WIN-NP"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 1252,
    "winner": "Larry Haughn",
    "winner_school": "Michigan",
    "loser": "Sam Edwards",
    "loser_school": "Cornell",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Eddie Ortiz",
    "winner_school": "Arizona State",
    "loser": "Marvin Gasner",
    "loser_school": "Colorado",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Khris Whelan",
    "winner_school": "Missouri",
    "loser": "Steve Perdew",
    "loser_school": "Slippery Rock",
    "result": "MD 18-9"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Bryan Evans",
    "winner_school": "Oklahoma",
    "loser": "Steve Bastianelli",
    "loser_school": "Lehigh",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Mike Giustizia",
    "loser_school": "Tennessee",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Jerry Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Mike Romero",
    "loser_school": "Arizona",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Byron McGlathery",
    "winner_school": "Chattanooga",
    "loser": "Steve Jastrabek",
    "loser_school": "Clarion",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Jeff Thomas",
    "winner_school": "Michigan State",
    "loser": "Ed Snook",
    "loser_school": "Brigham Young",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Gary Lefebvre",
    "loser_school": "Minnesota",
    "result": "MD 19-7"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 265,
    "winner": "Marvin Gasner",
    "winner_school": "Colorado",
    "loser": "Dave Cooke",
    "loser_school": "North Carolina",
    "result": "Dec 8-6"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 266,
    "winner": "Mike Giustizia",
    "winner_school": "Tennessee",
    "loser": "Gary Bohay",
    "loser_school": "UCLA",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 267,
    "winner": "Larry Haughn",
    "winner_school": "Michigan",
    "loser": "Mike Romero",
    "loser_school": "Arizona",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 268,
    "winner": "Gary Lefebvre",
    "winner_school": "Minnesota",
    "loser": "Kevin Richard",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 9-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Eddie Ortiz",
    "winner_school": "Arizona State",
    "loser": "Khris Whelan",
    "loser_school": "Missouri",
    "result": "MD 13-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Bryan Evans",
    "loser_school": "Oklahoma",
    "result": "Fall 7:48"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Jerry Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Byron McGlathery",
    "loser_school": "Chattanooga",
    "result": "MD 12-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Jeff Thomas",
    "loser_school": "Michigan State",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Khris Whelan",
    "winner_school": "Missouri",
    "loser": "Marvin Gasner",
    "loser_school": "Colorado",
    "result": "MD 17-8"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Mike Giustizia",
    "winner_school": "Tennessee",
    "loser": "Bryan Evans",
    "loser_school": "Oklahoma",
    "result": "Dec 8-5"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Byron McGlathery",
    "winner_school": "Chattanooga",
    "loser": "Larry Haughn",
    "loser_school": "Michigan",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Jeff Thomas",
    "winner_school": "Michigan State",
    "loser": "Gary Lefebvre",
    "loser_school": "Minnesota",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 423,
    "winner": "Mike Giustizia",
    "winner_school": "Tennessee",
    "loser": "Khris Whelan",
    "loser_school": "Missouri",
    "result": "Dec 10-3"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 424,
    "winner": "Byron McGlathery",
    "winner_school": "Chattanooga",
    "loser": "Jeff Thomas",
    "loser_school": "Michigan State",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Eddie Ortiz",
    "loser_school": "Arizona State",
    "result": "Dec 12-7"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Jerry Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Ricky Dellagatta",
    "loser_school": "Kentucky",
    "result": "Fall 3:19"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Mike Giustizia",
    "loser_school": "Tennessee",
    "result": "Dec 10-4"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Eddie Ortiz",
    "winner_school": "Arizona State",
    "loser": "Byron McGlathery",
    "loser_school": "Chattanooga",
    "result": "Dec 8-5"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 522,
    "winner": "Khris Whelan",
    "winner_school": "Missouri",
    "loser": "Jeff Thomas",
    "loser_school": "Michigan State",
    "result": "Dec 14-11"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Byron McGlathery",
    "winner_school": "Chattanooga",
    "loser": "Mike Giustizia",
    "loser_school": "Tennessee",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Eddie Ortiz",
    "loser_school": "Arizona State",
    "result": "MD 19-8"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Jerry Kelly",
    "loser_school": "Oklahoma State",
    "result": "MD 17-9"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Mark Cagle",
    "winner_school": "West Virginia",
    "loser": "Dave Lundskog",
    "loser_school": "Weber State",
    "result": "Dec 10-6"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Thomas Landrum",
    "winner_school": "Oklahoma State",
    "loser": "Lou Dionisio",
    "loser_school": "Hofstra",
    "result": "Fall 7:17"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 2003,
    "winner": "Ed Fiorvanti",
    "winner_school": "Bloomsburg",
    "loser": "Rick Waller",
    "loser_school": "Chattanooga",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3003,
    "winner": "Jeff Tolbert",
    "winner_school": "Purdue",
    "loser": "Doug House",
    "loser_school": "Florida International",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 4003,
    "winner": "Kyle Grunwald",
    "winner_school": "Louisiana State",
    "loser": "Bill Pincus",
    "loser_school": "William & Mary",
    "result": "MD 15-6"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 5003,
    "winner": "Derek Glenn",
    "winner_school": "Colorado",
    "loser": "Frank DeAngelis",
    "loser_school": "Oklahoma",
    "result": "Dec 17-14"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 6003,
    "winner": "Mike Bauer",
    "winner_school": "Oregon State",
    "loser": "Jeff Buxton",
    "loser_school": "Rhode Island",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Dalen Wasmund",
    "winner_school": "Minnesota",
    "loser": "John Dolch",
    "loser_school": "Salisbury",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Mike Bauer",
    "winner_school": "Oregon State",
    "loser": "Dave DiSabato",
    "loser_school": "Notre Dame",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Randy Miller",
    "winner_school": "Clarion",
    "loser": "Bob Bury",
    "loser_school": "Penn State",
    "result": "Dec 5-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Derek Glenn",
    "winner_school": "Colorado",
    "loser": "Nelson Gardner",
    "loser_school": "Brigham Young",
    "result": "Fall 2:07"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Dave Goodspeed",
    "winner_school": "Wisconsin",
    "loser": "Kyle Grunwald",
    "loser_school": "Louisiana State",
    "result": "MD 18-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Harlan Kistler",
    "loser_school": "UCLA",
    "result": "Fall 4:45"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Jeff Tolbert",
    "winner_school": "Purdue",
    "loser": "Kevin Bellis",
    "loser_school": "Illinois State",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Bryan Billig",
    "winner_school": "Wilkes",
    "loser": "Ron Voss",
    "loser_school": "Western Michigan",
    "result": "Fall 5:42"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Joe Romero",
    "winner_school": "Arizona State",
    "loser": "Curtis Longstreet",
    "loser_school": "Kentucky",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Chris Xakellis",
    "winner_school": "Virginia",
    "loser": "Ed Fiorvanti",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Steve Weight",
    "loser_school": "Utah State",
    "result": "Fall 1:41"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Thomas Landrum",
    "winner_school": "Oklahoma State",
    "loser": "Craig Jordan",
    "loser_school": "Minnesota State",
    "result": "Fall 5:53"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Jim Gibbons",
    "winner_school": "Iowa State",
    "loser": "Mark Cagle",
    "loser_school": "West Virginia",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Tom Mount",
    "winner_school": "Cal Poly",
    "loser": "Cody Westbrook",
    "loser_school": "Wyoming",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Buddy Lee",
    "winner_school": "Old Dominion",
    "loser": "Bill Nugent",
    "loser_school": "Oregon",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "C.D. Mock",
    "winner_school": "North Carolina",
    "loser": "Don St. James",
    "loser_school": "Georgia",
    "result": "MD 15-7"
  },
  {
    "round": "ConsPrelims",
    "weight": "134",
    "bout": 253,
    "winner": "Frank DeAngelis",
    "winner_school": "Oklahoma",
    "loser": "Nelson Gardner",
    "loser_school": "Brigham Young",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Mike Bauer",
    "winner_school": "Oregon State",
    "loser": "Dalen Wasmund",
    "loser_school": "Minnesota",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Derek Glenn",
    "winner_school": "Colorado",
    "loser": "Randy Miller",
    "loser_school": "Clarion",
    "result": "Fall 1:42"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Dave Goodspeed",
    "loser_school": "Wisconsin",
    "result": "Dec 18-13"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Bryan Billig",
    "winner_school": "Wilkes",
    "loser": "Jeff Tolbert",
    "loser_school": "Purdue",
    "result": "Fall 5:25"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Joe Romero",
    "winner_school": "Arizona State",
    "loser": "Chris Xakellis",
    "loser_school": "Virginia",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Thomas Landrum",
    "loser_school": "Oklahoma State",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Jim Gibbons",
    "winner_school": "Iowa State",
    "loser": "Tom Mount",
    "loser_school": "Cal Poly",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Buddy Lee",
    "winner_school": "Old Dominion",
    "loser": "C.D. Mock",
    "loser_school": "North Carolina",
    "result": "Fall 6:35"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 269,
    "winner": "Randy Miller",
    "winner_school": "Clarion",
    "loser": "Frank DeAngelis",
    "loser_school": "Oklahoma",
    "result": "Fall 2:37"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 270,
    "winner": "Harlan Kistler",
    "winner_school": "UCLA",
    "loser": "Dave Goodspeed",
    "loser_school": "Wisconsin",
    "result": "Dec 6-1"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 271,
    "winner": "Thomas Landrum",
    "winner_school": "Oklahoma State",
    "loser": "Steve Weight",
    "loser_school": "Utah State",
    "result": "Fall 4:52"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 272,
    "winner": "Bill Nugent",
    "winner_school": "Oregon",
    "loser": "C.D. Mock",
    "loser_school": "North Carolina",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Derek Glenn",
    "winner_school": "Colorado",
    "loser": "Mike Bauer",
    "loser_school": "Oregon State",
    "result": "Fall 2:36"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Bryan Billig",
    "loser_school": "Wilkes",
    "result": "Fall 7:20"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Joe Romero",
    "loser_school": "Arizona State",
    "result": "Dec 13-10"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Buddy Lee",
    "winner_school": "Old Dominion",
    "loser": "Jim Gibbons",
    "loser_school": "Iowa State",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "Mike Bauer",
    "winner_school": "Oregon State",
    "loser": "Randy Miller",
    "loser_school": "Clarion",
    "result": "Dec 13-12"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Harlan Kistler",
    "winner_school": "UCLA",
    "loser": "Bryan Billig",
    "loser_school": "Wilkes",
    "result": "Dec 13-11"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Thomas Landrum",
    "winner_school": "Oklahoma State",
    "loser": "Joe Romero",
    "loser_school": "Arizona State",
    "result": "Fall 4:13"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Jim Gibbons",
    "winner_school": "Iowa State",
    "loser": "Bill Nugent",
    "loser_school": "Oregon",
    "result": "Dec 8-7"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 425,
    "winner": "Harlan Kistler",
    "winner_school": "UCLA",
    "loser": "Mike Bauer",
    "loser_school": "Oregon State",
    "result": "Dec 10-9"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 426,
    "winner": "Thomas Landrum",
    "winner_school": "Oklahoma State",
    "loser": "Jim Gibbons",
    "loser_school": "Iowa State",
    "result": "Dec 10-7"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Derek Glenn",
    "loser_school": "Colorado",
    "result": "Dec 8-7"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Buddy Lee",
    "loser_school": "Old Dominion",
    "result": "MD 16-5"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "Buddy Lee",
    "winner_school": "Old Dominion",
    "loser": "Harlan Kistler",
    "loser_school": "UCLA",
    "result": "Dec 10-4"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Derek Glenn",
    "winner_school": "Colorado",
    "loser": "Thomas Landrum",
    "loser_school": "Oklahoma State",
    "result": "MD 13-5"
  },
  {
    "round": "7thPlace",
    "weight": "134",
    "bout": 523,
    "winner": "Jim Gibbons",
    "winner_school": "Iowa State",
    "loser": "Mike Bauer",
    "loser_school": "Oregon State",
    "result": "M FOR"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Thomas Landrum",
    "winner_school": "Oklahoma State",
    "loser": "Harlan Kistler",
    "loser_school": "UCLA",
    "result": "Fall 3:33"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Derek Glenn",
    "winner_school": "Colorado",
    "loser": "Buddy Lee",
    "loser_school": "Old Dominion",
    "result": "MD 10-2"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Darryl Burley",
    "loser_school": "Lehigh",
    "result": "MD 11-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Mike Fredenburg",
    "winner_school": "Humbouldt State",
    "loser": "Gene Nighman",
    "loser_school": "Cornell",
    "result": "Dec 9-4"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "Joe Galli",
    "loser_school": "North Carolina",
    "result": "MD 16-1"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 2004,
    "winner": "Steve Roberts",
    "winner_school": "Slippery Rock",
    "loser": "Steven Spangenberg",
    "loser_school": "Michigan",
    "result": "Dec 5-0 TB"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 3004,
    "winner": "Denny Reed",
    "winner_school": "Lehigh",
    "loser": "Jim Martinez",
    "loser_school": "Minnesota",
    "result": "Fall 4:12"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Jeff Therrian",
    "winner_school": "Michigan State",
    "loser": "Rich Roehner",
    "loser_school": "Ohio",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Bill Walsh",
    "winner_school": "Cleveland State",
    "loser": "Jimmy London",
    "loser_school": "Wyoming",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Dave Brown",
    "winner_school": "Iowa State",
    "loser": "D.J. West",
    "loser_school": "Northern Colorado",
    "result": "Fall 4:15"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Doug Parise",
    "winner_school": "Temple",
    "loser": "Rick McReynolds",
    "loser_school": "Portland State",
    "result": "MD 22-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "Mike Hogan",
    "loser_school": "Hofstra",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Bob Eon",
    "winner_school": "Rhode Island",
    "loser": "Dan Caballero",
    "loser_school": "Oregon State",
    "result": "Fall 1:51"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Denny Reed",
    "winner_school": "Lehigh",
    "loser": "Steve Cavayero",
    "loser_school": "UCLA",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Mike Pollock",
    "winner_school": "Missouri",
    "loser": "Jack Garrison",
    "loser_school": "Colorado State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Robert Hilfiger",
    "winner_school": "Appalachian State",
    "loser": "Kurt Geib",
    "loser_school": "Indiana State",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Jeff Barksdale",
    "winner_school": "Cal Poly",
    "loser": "Mike Fredenburg",
    "loser_school": "Humbouldt State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Earl Rayford",
    "loser_school": "Kentucky",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Lew Sondgeroth",
    "winner_school": "Colorado",
    "loser": "Steve Roberts",
    "loser_school": "Slippery Rock",
    "result": "Dec 7-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Lenny Zalesky",
    "winner_school": "Iowa",
    "loser": "Mark DeAugustino",
    "loser_school": "Tennessee",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Bernie Fritz",
    "winner_school": "Penn State",
    "loser": "Doug Pugmire",
    "loser_school": "Boise State",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Brian Brown",
    "winner_school": "Franklin and Marshall",
    "loser": "Gus Ristas",
    "loser_school": "Toledo",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Bill Cripps",
    "winner_school": "Arizona State",
    "loser": "Mark Schmitz",
    "loser_school": "Wisconsin",
    "result": "MD 22-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 254,
    "winner": "Mike Hogan",
    "winner_school": "Hofstra",
    "loser": "Joe Galli",
    "loser_school": "North Carolina",
    "result": "WIN-NP"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Jeff Therrian",
    "winner_school": "Michigan State",
    "loser": "Bill Walsh",
    "loser_school": "Cleveland State",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Dave Brown",
    "winner_school": "Iowa State",
    "loser": "Doug Parise",
    "loser_school": "Temple",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "Bob Eon",
    "loser_school": "Rhode Island",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Denny Reed",
    "winner_school": "Lehigh",
    "loser": "Mike Pollock",
    "loser_school": "Missouri",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Jeff Barksdale",
    "winner_school": "Cal Poly",
    "loser": "Robert Hilfiger",
    "loser_school": "Appalachian State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Lew Sondgeroth",
    "loser_school": "Colorado",
    "result": "MD 17-8"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Lenny Zalesky",
    "winner_school": "Iowa",
    "loser": "Bernie Fritz",
    "loser_school": "Penn State",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Bill Cripps",
    "winner_school": "Arizona State",
    "loser": "Brian Brown",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 273,
    "winner": "Doug Parise",
    "winner_school": "Temple",
    "loser": "D.J. West",
    "loser_school": "Northern Colorado",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 274,
    "winner": "Bob Eon",
    "winner_school": "Rhode Island",
    "loser": "Mike Hogan",
    "loser_school": "Hofstra",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 275,
    "winner": "Lew Sondgeroth",
    "winner_school": "Colorado",
    "loser": "Earl Rayford",
    "loser_school": "Kentucky",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 276,
    "winner": "Brian Brown",
    "winner_school": "Franklin and Marshall",
    "loser": "Mark Schmitz",
    "loser_school": "Wisconsin",
    "result": "Dec 12-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Dave Brown",
    "winner_school": "Iowa State",
    "loser": "Jeff Therrian",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "Denny Reed",
    "loser_school": "Lehigh",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Jeff Barksdale",
    "loser_school": "Cal Poly",
    "result": "Fall 5:20"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Bill Cripps",
    "winner_school": "Arizona State",
    "loser": "Lenny Zalesky",
    "loser_school": "Iowa",
    "result": "Dec 14-11"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Doug Parise",
    "winner_school": "Temple",
    "loser": "Jeff Therrian",
    "loser_school": "Michigan State",
    "result": "MD 14-3"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "Denny Reed",
    "winner_school": "Lehigh",
    "loser": "Bob Eon",
    "loser_school": "Rhode Island",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "Jeff Barksdale",
    "winner_school": "Cal Poly",
    "loser": "Lew Sondgeroth",
    "loser_school": "Colorado",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Lenny Zalesky",
    "winner_school": "Iowa",
    "loser": "Brian Brown",
    "loser_school": "Franklin and Marshall",
    "result": "MD 12-4"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 427,
    "winner": "Doug Parise",
    "winner_school": "Temple",
    "loser": "Denny Reed",
    "loser_school": "Lehigh",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 428,
    "winner": "Lenny Zalesky",
    "winner_school": "Iowa",
    "loser": "Jeff Barksdale",
    "loser_school": "Cal Poly",
    "result": "MD 16-4"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "Dave Brown",
    "loser_school": "Iowa State",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Bill Cripps",
    "loser_school": "Arizona State",
    "result": "Dec 11-7"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "Bill Cripps",
    "winner_school": "Arizona State",
    "loser": "Doug Parise",
    "loser_school": "Temple",
    "result": "Dec 12-6"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Lenny Zalesky",
    "winner_school": "Iowa",
    "loser": "Dave Brown",
    "loser_school": "Iowa State",
    "result": "Dec 6-5"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 524,
    "winner": "Denny Reed",
    "winner_school": "Lehigh",
    "loser": "Jeff Barksdale",
    "loser_school": "Cal Poly",
    "result": "Fall 1:27"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Doug Parise",
    "winner_school": "Temple",
    "loser": "Dave Brown",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Bill Cripps",
    "winner_school": "Arizona State",
    "loser": "Lenny Zalesky",
    "loser_school": "Iowa",
    "result": "Fall 3:18"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "Andre Metzger",
    "loser_school": "Oklahoma",
    "result": "Dec 10-7"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Joe Solorio",
    "winner_school": "Arizona State",
    "loser": "Mike Bond",
    "loser_school": "Pittsburgh",
    "result": "Default 4:28"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Tony Rowland",
    "winner_school": "Middle Tennessee",
    "loser": "Ed Wohlwender",
    "loser_school": "Army",
    "result": "MD 17-9"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Brad Swartz",
    "winner_school": "Oregon State",
    "loser": "Tony Neitenbach",
    "loser_school": "Colorado",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 3005,
    "winner": "Scott Bliss",
    "winner_school": "Oregon",
    "loser": "Fred Boss",
    "loser_school": "Central Michigan",
    "result": "MD 18-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Scott Madigan",
    "loser_school": "Minnesota State",
    "result": "MD 25-12"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Ken Gallagher",
    "winner_school": "Northern Iowa",
    "loser": "Jim Althans",
    "loser_school": "Miami Ohio",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Tony Surage",
    "loser_school": "Rutgers",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Tom Janicik",
    "winner_school": "Northwestern",
    "loser": "Chad Teichert",
    "loser_school": "Brigham Young",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Brad Swartz",
    "winner_school": "Oregon State",
    "loser": "Milton Thompson",
    "loser_school": "Tennessee",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Matt Skove",
    "winner_school": "Georgia",
    "loser": "Bruce Moe",
    "loser_school": "Winona State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Tony Rowland",
    "loser_school": "Middle Tennessee",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Mike Elliott",
    "winner_school": "Cal State Fullerton",
    "loser": "Marty Maciel",
    "loser_school": "CSU Bakersfield",
    "result": "MD 18-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Steve Leslie",
    "winner_school": "Colgate",
    "loser": "Mike Baker",
    "loser_school": "New Mexico",
    "result": "MD 17-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Scott Bliss",
    "winner_school": "Oregon",
    "loser": "Tom Elcott",
    "loser_school": "Allegheny",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Mike Koob",
    "winner_school": "NC State",
    "loser": "Jerry Disimone",
    "loser_school": "Colorado State",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Joe Solorio",
    "winner_school": "Arizona State",
    "loser": "John Beijan",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "King Mueller",
    "winner_school": "Iowa",
    "loser": "Frank Shaffer",
    "loser_school": "Navy",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Tony Caravella",
    "winner_school": "Bloomsburg",
    "loser": "Larry LaFountain",
    "loser_school": "Montana State",
    "result": "MD 21-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Wes Roper",
    "winner_school": "Missouri",
    "loser": "John Sauerland",
    "loser_school": "Hofstra",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Randy Fleury",
    "winner_school": "Cal Poly",
    "loser": "Kevin Egleston",
    "loser_school": "Boston University",
    "result": "Fall 6:02"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 255,
    "winner": "Fred Boss",
    "winner_school": "Central Michigan",
    "loser": "Tom Elcott",
    "loser_school": "Allegheny",
    "result": "WIN-NP"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Ken Gallagher",
    "loser_school": "Northern Iowa",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Tom Janicik",
    "loser_school": "Northwestern",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Matt Skove",
    "winner_school": "Georgia",
    "loser": "Brad Swartz",
    "loser_school": "Oregon State",
    "result": "Fall 5:55"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Mike Elliott",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Scott Bliss",
    "winner_school": "Oregon",
    "loser": "Steve Leslie",
    "loser_school": "Colgate",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Mike Koob",
    "winner_school": "NC State",
    "loser": "Joe Solorio",
    "loser_school": "Arizona State",
    "result": "Dec 7-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "King Mueller",
    "winner_school": "Iowa",
    "loser": "Tony Caravella",
    "loser_school": "Bloomsburg",
    "result": "Fall 0:45"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Wes Roper",
    "winner_school": "Missouri",
    "loser": "Randy Fleury",
    "loser_school": "Cal Poly",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 277,
    "winner": "Tony Surage",
    "winner_school": "Rutgers",
    "loser": "Tom Janicik",
    "loser_school": "Northwestern",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 278,
    "winner": "Mike Elliott",
    "winner_school": "Cal State Fullerton",
    "loser": "Tony Rowland",
    "loser_school": "Middle Tennessee",
    "result": "MD 12-3"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 279,
    "winner": "Fred Boss",
    "winner_school": "Central Michigan",
    "loser": "Steve Leslie",
    "loser_school": "Colgate",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 280,
    "winner": "Tony Caravella",
    "winner_school": "Bloomsburg",
    "loser": "Frank Shaffer",
    "loser_school": "Navy",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Nate Carr",
    "loser_school": "Iowa State",
    "result": "Dec 13-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Matt Skove",
    "loser_school": "Georgia",
    "result": "MD 18-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Scott Bliss",
    "winner_school": "Oregon",
    "loser": "Mike Koob",
    "loser_school": "NC State",
    "result": "Dec 9-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "King Mueller",
    "winner_school": "Iowa",
    "loser": "Wes Roper",
    "loser_school": "Missouri",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Tony Surage",
    "winner_school": "Rutgers",
    "loser": "Nate Carr",
    "loser_school": "Iowa State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Mike Elliott",
    "winner_school": "Cal State Fullerton",
    "loser": "Matt Skove",
    "loser_school": "Georgia",
    "result": "Dec 8-7"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Fred Boss",
    "winner_school": "Central Michigan",
    "loser": "Mike Koob",
    "loser_school": "NC State",
    "result": "MD 12-3"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Tony Caravella",
    "winner_school": "Bloomsburg",
    "loser": "Wes Roper",
    "loser_school": "Missouri",
    "result": "Dec 6-5"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 429,
    "winner": "Mike Elliott",
    "winner_school": "Cal State Fullerton",
    "loser": "Tony Surage",
    "loser_school": "Rutgers",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 430,
    "winner": "Fred Boss",
    "winner_school": "Central Michigan",
    "loser": "Tony Caravella",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Roger Frizzell",
    "loser_school": "Oklahoma",
    "result": "Dec 9-6"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Scott Bliss",
    "winner_school": "Oregon",
    "loser": "King Mueller",
    "loser_school": "Iowa",
    "result": "Dec 12-8"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "King Mueller",
    "winner_school": "Iowa",
    "loser": "Mike Elliott",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Fred Boss",
    "loser_school": "Central Michigan",
    "result": "Fall 1:52"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 525,
    "winner": "Tony Surage",
    "winner_school": "Rutgers",
    "loser": "Tony Caravella",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Mike Elliott",
    "winner_school": "Cal State Fullerton",
    "loser": "Fred Boss",
    "loser_school": "Central Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "King Mueller",
    "winner_school": "Iowa",
    "loser": "Roger Frizzell",
    "loser_school": "Oklahoma",
    "result": "Dec 16-11"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Scott Bliss",
    "loser_school": "Oregon",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Dave Musselman",
    "winner_school": "Arizona",
    "loser": "Scott Howard",
    "loser_school": "Auburn",
    "result": "Dec 8-6"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Jim Tebbe",
    "loser_school": "Miami Ohio",
    "result": "MD 16-5"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Kevin Dugan",
    "winner_school": "CSU Bakersfield",
    "loser": "Jim Clowes",
    "loser_school": "Montana",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Bart McCollum",
    "winner_school": "Bloomsburg",
    "loser": "Donny Owen",
    "loser_school": "Brigham Young",
    "result": "Dec 8-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Mike Terry",
    "winner_school": "Wisconsin",
    "loser": "Geoff Brodhead",
    "loser_school": "Penn State",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "William Smith",
    "winner_school": "Morgan State",
    "loser": "Jeff Newman",
    "loser_school": "UCLA",
    "result": "MD 23-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Court Vining",
    "winner_school": "Nebraska",
    "loser": "David Strickland",
    "loser_school": "Chattanooga",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Kevin Dugan",
    "winner_school": "CSU Bakersfield",
    "loser": "Jeff Bouslog",
    "loser_school": "Luther",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "John Hefner",
    "winner_school": "Missouri",
    "loser": "Bob Gruner",
    "loser_school": "Wisconsin-Parkland",
    "result": "Dec 11-10"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Steve Reedy",
    "loser_school": "Kent State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Mark Stevenson",
    "winner_school": "Iowa",
    "loser": "Dale Gilbert",
    "loser_school": "Clarion",
    "result": "Fall 1:29"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Jim Reilly",
    "winner_school": "Lehigh",
    "loser": "Mike Kuziola",
    "loser_school": "Middle Tennessee",
    "result": "MD 19-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Dave Musselman",
    "winner_school": "Arizona",
    "loser": "Bill Keck",
    "loser_school": "Hofstra",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Isreal Sheppard",
    "winner_school": "Oklahoma",
    "loser": "Toby Breon",
    "loser_school": "Shippensburg",
    "result": "Fall 4:01"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Mark Densberger",
    "winner_school": "Wilkes",
    "loser": "Mike Degenova",
    "loser_school": "Temple",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Fred Worthem",
    "winner_school": "Michigan State",
    "loser": "Mike Carroll",
    "loser_school": "Massachusetts",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Kevin Benson",
    "winner_school": "Portland State",
    "loser": "Dan Drllevich",
    "loser_school": "Washington State",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Jan Michaels",
    "winner_school": "North Carolina",
    "loser": "Robert Kiddy",
    "loser_school": "Cal Poly",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Tom Pickard",
    "loser_school": "Iowa State",
    "result": "MD 19-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 256,
    "winner": "Steve Reedy",
    "winner_school": "Kent State",
    "loser": "Jim Tebbe",
    "loser_school": "Miami Ohio",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Mike Terry",
    "winner_school": "Wisconsin",
    "loser": "Bart McCollum",
    "loser_school": "Bloomsburg",
    "result": "Dec 18-12"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "William Smith",
    "winner_school": "Morgan State",
    "loser": "Court Vining",
    "loser_school": "Nebraska",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Kevin Dugan",
    "winner_school": "CSU Bakersfield",
    "loser": "John Hefner",
    "loser_school": "Missouri",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Mark Stevenson",
    "loser_school": "Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Jim Reilly",
    "winner_school": "Lehigh",
    "loser": "Dave Musselman",
    "loser_school": "Arizona",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Isreal Sheppard",
    "winner_school": "Oklahoma",
    "loser": "Mark Densberger",
    "loser_school": "Wilkes",
    "result": "Fall 6:28"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Fred Worthem",
    "winner_school": "Michigan State",
    "loser": "Kevin Benson",
    "loser_school": "Portland State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Jan Michaels",
    "loser_school": "North Carolina",
    "result": "Fall 1:59"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 281,
    "winner": "Jeff Newman",
    "winner_school": "UCLA",
    "loser": "Court Vining",
    "loser_school": "Nebraska",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 282,
    "winner": "Mark Stevenson",
    "winner_school": "Iowa",
    "loser": "Steve Reedy",
    "loser_school": "Kent State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 283,
    "winner": "Mark Densberger",
    "winner_school": "Wilkes",
    "loser": "Toby Breon",
    "loser_school": "Shippensburg",
    "result": "Fall 1:09"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 284,
    "winner": "Tom Pickard",
    "winner_school": "Iowa State",
    "loser": "Jan Michaels",
    "loser_school": "North Carolina",
    "result": "Fall 5:27"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "William Smith",
    "winner_school": "Morgan State",
    "loser": "Mike Terry",
    "loser_school": "Wisconsin",
    "result": "Dec 12-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Kevin Dugan",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Isreal Sheppard",
    "winner_school": "Oklahoma",
    "loser": "Jim Reilly",
    "loser_school": "Lehigh",
    "result": "Fall 2:30"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Fred Worthem",
    "loser_school": "Michigan State",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Mike Terry",
    "winner_school": "Wisconsin",
    "loser": "Jeff Newman",
    "loser_school": "UCLA",
    "result": "MD 19-6"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "Mark Stevenson",
    "winner_school": "Iowa",
    "loser": "Kevin Dugan",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Jim Reilly",
    "winner_school": "Lehigh",
    "loser": "Mark Densberger",
    "loser_school": "Wilkes",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Tom Pickard",
    "winner_school": "Iowa State",
    "loser": "Fred Worthem",
    "loser_school": "Michigan State",
    "result": "Fall 3:19"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 431,
    "winner": "Mike Terry",
    "winner_school": "Wisconsin",
    "loser": "Mark Stevenson",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 432,
    "winner": "Tom Pickard",
    "winner_school": "Iowa State",
    "loser": "Jim Reilly",
    "loser_school": "Lehigh",
    "result": "Fall 0:21"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "William Smith",
    "winner_school": "Morgan State",
    "loser": "Dan Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Isreal Sheppard",
    "loser_school": "Oklahoma",
    "result": "Dec 8-6"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Isreal Sheppard",
    "winner_school": "Oklahoma",
    "loser": "Mike Terry",
    "loser_school": "Wisconsin",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Tom Pickard",
    "winner_school": "Iowa State",
    "loser": "Dan Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 9-6"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 526,
    "winner": "Mark Stevenson",
    "winner_school": "Iowa",
    "loser": "Jim Reilly",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Mike Terry",
    "loser_school": "Wisconsin",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Isreal Sheppard",
    "winner_school": "Oklahoma",
    "loser": "Tom Pickard",
    "loser_school": "Iowa State",
    "result": "Dec 9-4"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "William Smith",
    "loser_school": "Morgan State",
    "result": "Dec 11-6"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Dale Walters",
    "winner_school": "Air Force",
    "loser": "Kevin Wood",
    "loser_school": "Boise State",
    "result": "Dec 9-3"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1007,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "John Gehret",
    "loser_school": "Slippery Rock",
    "result": "MD 18-7"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 2007,
    "winner": "Scott Heaton",
    "winner_school": "Cal Poly",
    "loser": "Jim Trudeau",
    "loser_school": "Minnesota",
    "result": "Fall 2:28"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 3007,
    "winner": "Russ Pickering",
    "winner_school": "Miami Ohio",
    "loser": "Ron Varga",
    "loser_school": "Cleveland State",
    "result": "Dec 7-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "Dan Fiorini",
    "loser_school": "Northern Illinois",
    "result": "Fall 4:16"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Dave Brouhard",
    "winner_school": "San Jose State",
    "loser": "Larry Meierotto",
    "loser_school": "Chattanooga",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Dom DiGioacchino",
    "winner_school": "Bloomsburg",
    "loser": "Tim Neumann",
    "loser_school": "Nebraska",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Matt Reiss",
    "winner_school": "NC State",
    "loser": "Ed Potokar",
    "loser_school": "Ohio State",
    "result": "Dec 15-10"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Scott Heaton",
    "winner_school": "Cal Poly",
    "loser": "Bob Stout",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Jamie Milkovich",
    "winner_school": "Auburn",
    "loser": "Brett Stamm",
    "loser_school": "Wheaton",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "John Bliss",
    "loser_school": "Washington State",
    "result": "Fall 4:41"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Tom Harvey",
    "winner_school": "Syracuse",
    "loser": "Mike Hogoboam",
    "loser_school": "Washington",
    "result": "Fall 4:02"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Jeff Stuebing",
    "winner_school": "Oregon",
    "loser": "Bill Boyd",
    "loser_school": "Brigham Young",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Russ Pickering",
    "winner_school": "Miami Ohio",
    "loser": "Jim Thornton",
    "loser_school": "Wyoming",
    "result": "MD 19-10"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Perry Hummel",
    "winner_school": "Iowa State",
    "loser": "Doug Anderson",
    "loser_school": "Iowa",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Richard Evans",
    "winner_school": "Oklahoma",
    "loser": "Dale Walters",
    "loser_school": "Air Force",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Lee Spiegel",
    "winner_school": "Rhode Island",
    "loser": "Brad Bitterman",
    "loser_school": "Northern Michigan",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Kevin Colabucci",
    "winner_school": "Maryland",
    "loser": "Jon Lundberg",
    "loser_school": "Augustana SD",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Fred Duell",
    "winner_school": "Oklahoma State",
    "loser": "Bob Greenley",
    "loser_school": "Bucknell",
    "result": "Dec 13-10"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Jim Vargo",
    "winner_school": "East Stroudsburg",
    "loser": "John Hanrahan",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 257,
    "winner": "John Gehret",
    "winner_school": "Slippery Rock",
    "loser": "John Bliss",
    "loser_school": "Washington State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "Dave Brouhard",
    "loser_school": "San Jose State",
    "result": "Dec 13-11"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Matt Reiss",
    "winner_school": "NC State",
    "loser": "Dom DiGioacchino",
    "loser_school": "Bloomsburg",
    "result": "Fall 8:52 SV"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Jamie Milkovich",
    "winner_school": "Auburn",
    "loser": "Scott Heaton",
    "loser_school": "Cal Poly",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "Tom Harvey",
    "loser_school": "Syracuse",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Russ Pickering",
    "winner_school": "Miami Ohio",
    "loser": "Jeff Stuebing",
    "loser_school": "Oregon",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Perry Hummel",
    "winner_school": "Iowa State",
    "loser": "Richard Evans",
    "loser_school": "Oklahoma",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Lee Spiegel",
    "winner_school": "Rhode Island",
    "loser": "Kevin Colabucci",
    "loser_school": "Maryland",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Fred Duell",
    "winner_school": "Oklahoma State",
    "loser": "Jim Vargo",
    "loser_school": "East Stroudsburg",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 285,
    "winner": "Dom DiGioacchino",
    "winner_school": "Bloomsburg",
    "loser": "Ed Potokar",
    "loser_school": "Ohio State",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 286,
    "winner": "Tom Harvey",
    "winner_school": "Syracuse",
    "loser": "John Gehret",
    "loser_school": "Slippery Rock",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 287,
    "winner": "Doug Anderson",
    "winner_school": "Iowa",
    "loser": "Richard Evans",
    "loser_school": "Oklahoma",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 288,
    "winner": "Brad Bitterman",
    "winner_school": "Northern Michigan",
    "loser": "Kevin Colabucci",
    "loser_school": "Maryland",
    "result": "Fall 3:59"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Matt Reiss",
    "winner_school": "NC State",
    "loser": "Dave Evans",
    "loser_school": "Wisconsin",
    "result": "Fall 7:47"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "Jamie Milkovich",
    "loser_school": "Auburn",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Perry Hummel",
    "winner_school": "Iowa State",
    "loser": "Russ Pickering",
    "loser_school": "Miami Ohio",
    "result": "Dec 16-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Lee Spiegel",
    "winner_school": "Rhode Island",
    "loser": "Fred Duell",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-7"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "Dom DiGioacchino",
    "loser_school": "Bloomsburg",
    "result": "Dec 13-8"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Jamie Milkovich",
    "winner_school": "Auburn",
    "loser": "Tom Harvey",
    "loser_school": "Syracuse",
    "result": "Fall 3:10"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "Doug Anderson",
    "winner_school": "Iowa",
    "loser": "Russ Pickering",
    "loser_school": "Miami Ohio",
    "result": "Dec 8-6"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Brad Bitterman",
    "winner_school": "Northern Michigan",
    "loser": "Fred Duell",
    "loser_school": "Oklahoma State",
    "result": "Dec 13-7"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 433,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "Jamie Milkovich",
    "loser_school": "Auburn",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 434,
    "winner": "Brad Bitterman",
    "winner_school": "Northern Michigan",
    "loser": "Doug Anderson",
    "loser_school": "Iowa",
    "result": "MD 15-5"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Matt Reiss",
    "winner_school": "NC State",
    "loser": "John Reich",
    "loser_school": "Navy",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Perry Hummel",
    "winner_school": "Iowa State",
    "loser": "Lee Spiegel",
    "loser_school": "Rhode Island",
    "result": "Dec 6-2"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "Lee Spiegel",
    "loser_school": "Rhode Island",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "Brad Bitterman",
    "loser_school": "Northern Michigan",
    "result": "Dec 5-0 TB"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 527,
    "winner": "Jamie Milkovich",
    "winner_school": "Auburn",
    "loser": "Doug Anderson",
    "loser_school": "Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Lee Spiegel",
    "winner_school": "Rhode Island",
    "loser": "Brad Bitterman",
    "loser_school": "Northern Michigan",
    "result": "MD 12-3"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Dave Evans",
    "winner_school": "Wisconsin",
    "loser": "John Reich",
    "loser_school": "Navy",
    "result": "Dec 9-5"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Matt Reiss",
    "winner_school": "NC State",
    "loser": "Perry Hummel",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "Ben Hill",
    "winner_school": "Tennessee",
    "loser": "Butch Revils",
    "loser_school": "East Carolina",
    "result": "Dec 11-10"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Efonda Sproles",
    "loser_school": "Northern Illinois",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Steve Fraser",
    "winner_school": "Michigan",
    "loser": "Mark Jarosz",
    "loser_school": "Salisbury",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Jim Hall",
    "winner_school": "Oklahoma",
    "loser": "Bill Braseth",
    "loser_school": "Boise State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Don Brown",
    "winner_school": "Oregon",
    "loser": "Jay Greiner",
    "loser_school": "Ohio State",
    "result": "Fall 0:16"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Jim Kimsey",
    "winner_school": "Nebraska",
    "loser": "Joe Lidowski",
    "loser_school": "NC State",
    "result": "Fall 6:58"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Dave Severn",
    "winner_school": "Arizona State",
    "loser": "Jim Laube",
    "loser_school": "Wisconsin-Superior",
    "result": "MD 18-8"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Ben Hill",
    "winner_school": "Tennessee",
    "loser": "Larry Deal",
    "loser_school": "Wyoming",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Gary Chadwick",
    "winner_school": "Air Force",
    "loser": "Rick Worel",
    "loser_school": "Cal Poly",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Eli Blazeff",
    "loser_school": "Auburn",
    "result": "Fall 4:35"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Jim Kleinhans",
    "winner_school": "Wisconsin",
    "loser": "Bobby Orand",
    "loser_school": "Chattanooga",
    "result": "MD 21-9"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Gary Germundson",
    "winner_school": "Oklahoma State",
    "loser": "Keith Foxx",
    "loser_school": "Arizona",
    "result": "MD 17-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Scott Mansur",
    "winner_school": "Portland State",
    "loser": "Chet Davis",
    "loser_school": "New Hampshire",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Lorant Ipacs",
    "winner_school": "Ohio",
    "loser": "Butch Snyder",
    "loser_school": "Bloomsburg",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Charlie Heller",
    "winner_school": "Clarion",
    "loser": "Brian Parlet",
    "loser_school": "Augustana SD",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Tony Mantella",
    "winner_school": "Temple",
    "loser": "Eric Moll",
    "loser_school": "Louisiana State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Colin Kilrain",
    "winner_school": "Lehigh",
    "loser": "Aurel Balaianu",
    "loser_school": "Hofstra",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "177",
    "bout": 258,
    "winner": "Larry Deal",
    "winner_school": "Wyoming",
    "loser": "Butch Revils",
    "loser_school": "East Carolina",
    "result": "M FOR"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Steve Fraser",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Jim Hall",
    "winner_school": "Oklahoma",
    "loser": "Don Brown",
    "loser_school": "Oregon",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Dave Severn",
    "winner_school": "Arizona State",
    "loser": "Jim Kimsey",
    "loser_school": "Nebraska",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Ben Hill",
    "winner_school": "Tennessee",
    "loser": "Gary Chadwick",
    "loser_school": "Air Force",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Jim Kleinhans",
    "loser_school": "Wisconsin",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Gary Germundson",
    "winner_school": "Oklahoma State",
    "loser": "Scott Mansur",
    "loser_school": "Portland State",
    "result": "Fall 4:02"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Charlie Heller",
    "winner_school": "Clarion",
    "loser": "Lorant Ipacs",
    "loser_school": "Ohio",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Colin Kilrain",
    "winner_school": "Lehigh",
    "loser": "Tony Mantella",
    "loser_school": "Temple",
    "result": "Dec 8-5"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 289,
    "winner": "Steve Fraser",
    "winner_school": "Michigan",
    "loser": "Efonda Sproles",
    "loser_school": "Northern Illinois",
    "result": "Dec 9-7"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 290,
    "winner": "Larry Deal",
    "winner_school": "Wyoming",
    "loser": "Gary Chadwick",
    "loser_school": "Air Force",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 291,
    "winner": "Jim Kleinhans",
    "winner_school": "Wisconsin",
    "loser": "Eli Blazeff",
    "loser_school": "Auburn",
    "result": "MD 10-1"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 292,
    "winner": "Tony Mantella",
    "winner_school": "Temple",
    "loser": "Aurel Balaianu",
    "loser_school": "Hofstra",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Jim Hall",
    "loser_school": "Oklahoma",
    "result": "Fall 7:56"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Ben Hill",
    "winner_school": "Tennessee",
    "loser": "Dave Severn",
    "loser_school": "Arizona State",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Gary Germundson",
    "loser_school": "Oklahoma State",
    "result": "Fall 7:59"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Colin Kilrain",
    "winner_school": "Lehigh",
    "loser": "Charlie Heller",
    "loser_school": "Clarion",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "Steve Fraser",
    "winner_school": "Michigan",
    "loser": "Jim Hall",
    "loser_school": "Oklahoma",
    "result": "Dec 6-1"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Dave Severn",
    "winner_school": "Arizona State",
    "loser": "Larry Deal",
    "loser_school": "Wyoming",
    "result": "Dec 2-1"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "Gary Germundson",
    "winner_school": "Oklahoma State",
    "loser": "Jim Kleinhans",
    "loser_school": "Wisconsin",
    "result": "Dec 9-7"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Charlie Heller",
    "winner_school": "Clarion",
    "loser": "Tony Mantella",
    "loser_school": "Temple",
    "result": "Dec 7-0"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 435,
    "winner": "Steve Fraser",
    "winner_school": "Michigan",
    "loser": "Dave Severn",
    "loser_school": "Arizona State",
    "result": "Dec 12-5"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 436,
    "winner": "Charlie Heller",
    "winner_school": "Clarion",
    "loser": "Gary Germundson",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Ben Hill",
    "loser_school": "Tennessee",
    "result": "MD 11-0"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Colin Kilrain",
    "loser_school": "Lehigh",
    "result": "Dec 12-11"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Colin Kilrain",
    "winner_school": "Lehigh",
    "loser": "Steve Fraser",
    "loser_school": "Michigan",
    "result": "Dec 3-0"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Charlie Heller",
    "winner_school": "Clarion",
    "loser": "Ben Hill",
    "loser_school": "Tennessee",
    "result": "Dec 2-0"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 528,
    "winner": "Gary Germundson",
    "winner_school": "Oklahoma State",
    "loser": "Dave Severn",
    "loser_school": "Arizona State",
    "result": "Dec 5-0"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Steve Fraser",
    "winner_school": "Michigan",
    "loser": "Ben Hill",
    "loser_school": "Tennessee",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Colin Kilrain",
    "winner_school": "Lehigh",
    "loser": "Charlie Heller",
    "loser_school": "Clarion",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Dave Allen",
    "loser_school": "Iowa State",
    "result": "MD 16-5"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 9,
    "winner": "Pete Froehlich",
    "winner_school": "Illinois",
    "loser": "Dan Morrow",
    "loser_school": "Washington State",
    "result": "Dec 7-5"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 1009,
    "winner": "Jerry Morrison",
    "winner_school": "San Jose State",
    "loser": "Ryan Kelly",
    "loser_school": "Oregon",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Kirk Myers",
    "winner_school": "Northern Iowa",
    "loser": "Rey Martinez",
    "loser_school": "Oklahoma State",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Dennis Koslowski",
    "winner_school": "Minnesota-Morris",
    "loser": "Brian Thomas",
    "loser_school": "Ball State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Pat Murphy",
    "loser_school": "Chattanooga",
    "result": "Fall 4:45"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Paul Marfiz",
    "loser_school": "New Mexico",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Dan Pfautz",
    "winner_school": "Penn State",
    "loser": "Mark Downing",
    "loser_school": "Clarion",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Craig Jennings",
    "loser_school": "Northwestern",
    "result": "Fall 2:37"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Joe Davis",
    "winner_school": "Cal Poly",
    "loser": "Pete Froehlich",
    "loser_school": "Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Noel Loban",
    "winner_school": "Clemson",
    "loser": "Mark Miller",
    "loser_school": "Virginia Tech",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Joe Atiyeh",
    "winner_school": "Louisiana State",
    "loser": "Craig Blackman",
    "loser_school": "Franklin and Marshall",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Dan Severn",
    "winner_school": "Arizona State",
    "loser": "Jerry Morrison",
    "loser_school": "San Jose State",
    "result": "Fall 2:25"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Edcar Thomas",
    "winner_school": "Oklahoma",
    "loser": "Bill McQuaide",
    "loser_school": "Massachusetts",
    "result": "MD 20-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Kent Bruggerman",
    "winner_school": "Ohio State",
    "loser": "George Fears",
    "loser_school": "Navy",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Joe Elinsky",
    "winner_school": "Auburn",
    "loser": "Scott Morton",
    "loser_school": "Montana",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Lou DiSerafino",
    "winner_school": "Rider",
    "loser": "Terry Crafton",
    "loser_school": "Southern Oregon",
    "result": "Fall 6:51"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Mitch Hull",
    "winner_school": "Wisconsin",
    "loser": "Tony Smith",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Kevin Sheesley",
    "winner_school": "Colorado State",
    "loser": "Steve Lucas",
    "loser_school": "Kent State",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Kirk Myers",
    "winner_school": "Northern Iowa",
    "loser": "Dennis Koslowski",
    "loser_school": "Minnesota-Morris",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Geno Savegnago",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Dan Pfautz",
    "loser_school": "Penn State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Noel Loban",
    "winner_school": "Clemson",
    "loser": "Joe Davis",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Dan Severn",
    "winner_school": "Arizona State",
    "loser": "Joe Atiyeh",
    "loser_school": "Louisiana State",
    "result": "Fall 5:36"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Edcar Thomas",
    "winner_school": "Oklahoma",
    "loser": "Kent Bruggerman",
    "loser_school": "Ohio State",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Lou DiSerafino",
    "winner_school": "Rider",
    "loser": "Joe Elinsky",
    "loser_school": "Auburn",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Mitch Hull",
    "winner_school": "Wisconsin",
    "loser": "Kevin Sheesley",
    "loser_school": "Colorado State",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 293,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Paul Marfiz",
    "loser_school": "New Mexico",
    "result": "Dec 9-3"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 294,
    "winner": "Joe Davis",
    "winner_school": "Cal Poly",
    "loser": "Mark Miller",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-2"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 295,
    "winner": "Joe Atiyeh",
    "winner_school": "Louisiana State",
    "loser": "Jerry Morrison",
    "loser_school": "San Jose State",
    "result": "Dec 13-11"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 296,
    "winner": "Joe Elinsky",
    "winner_school": "Auburn",
    "loser": "Terry Crafton",
    "loser_school": "Southern Oregon",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Kirk Myers",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Noel Loban",
    "winner_school": "Clemson",
    "loser": "Mike Brown",
    "loser_school": "Lehigh",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Dan Severn",
    "winner_school": "Arizona State",
    "loser": "Edcar Thomas",
    "loser_school": "Oklahoma",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Lou DiSerafino",
    "winner_school": "Rider",
    "loser": "Mitch Hull",
    "loser_school": "Wisconsin",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Kirk Myers",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Joe Davis",
    "loser_school": "Cal Poly",
    "result": "Dec 3-1"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Joe Atiyeh",
    "winner_school": "Louisiana State",
    "loser": "Edcar Thomas",
    "loser_school": "Oklahoma",
    "result": "Dec 15-11"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Mitch Hull",
    "winner_school": "Wisconsin",
    "loser": "Joe Elinsky",
    "loser_school": "Auburn",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 437,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Mike Brown",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 438,
    "winner": "Mitch Hull",
    "winner_school": "Wisconsin",
    "loser": "Joe Atiyeh",
    "loser_school": "Louisiana State",
    "result": "MD 14-6"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Noel Loban",
    "winner_school": "Clemson",
    "loser": "Mike Mann",
    "loser_school": "Iowa State",
    "result": "Dec 11-6"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Dan Severn",
    "winner_school": "Arizona State",
    "loser": "Lou DiSerafino",
    "loser_school": "Rider",
    "result": "Fall 1:03"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Lou DiSerafino",
    "winner_school": "Rider",
    "loser": "Geno Savegnago",
    "loser_school": "Eastern Illinois",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Mitch Hull",
    "loser_school": "Wisconsin",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 529,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Joe Atiyeh",
    "loser_school": "Louisiana State",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Mitch Hull",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Lou DiSerafino",
    "winner_school": "Rider",
    "loser": "Mike Mann",
    "loser_school": "Iowa State",
    "result": "MD 14-3"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Noel Loban",
    "winner_school": "Clemson",
    "loser": "Dan Severn",
    "loser_school": "Arizona State",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 10,
    "winner": "Harold Smith",
    "winner_school": "Kentucky",
    "loser": "Keith Wenger",
    "loser_school": "Drexel",
    "result": "Fall 1:58"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 1010,
    "winner": "Bob Matzelle",
    "winner_school": "Wilkes",
    "loser": "Manny Estrada",
    "loser_school": "Weber State",
    "result": "MD 16-0"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 2010,
    "winner": "D.T. Joyner",
    "winner_school": "East Carolina",
    "loser": "Ray Wagner",
    "loser_school": "Kent State",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 3010,
    "winner": "Tim Payne",
    "winner_school": "Cleveland State",
    "loser": "David Jack",
    "loser_school": "Cal Poly",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 155,
    "winner": "Dean Phinney",
    "winner_school": "Iowa",
    "loser": "Chris Hackbarth",
    "loser_school": "Colorado",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 156,
    "winner": "John Allen",
    "winner_school": "Massachusetts",
    "loser": "Chris Gardner",
    "loser_school": "Auburn",
    "result": "Fall 7:08"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 157,
    "winner": "Shawn Whitcomb",
    "winner_school": "Michigan State",
    "loser": "Dave Klemm",
    "loser_school": "Eastern Illinois",
    "result": "Fall 0:27"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Mike Haschak",
    "winner_school": "UCLA",
    "loser": "Bob Isola",
    "loser_school": "Clemson",
    "result": "Fall 4:05"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 159,
    "winner": "Bob Bath",
    "winner_school": "Wyoming",
    "loser": "Tim Payne",
    "loser_school": "Cleveland State",
    "result": "Fall 1:26"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 160,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Craig Newburg",
    "loser_school": "Ball State",
    "result": "Fall 0:32"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 161,
    "winner": "Mike Evans",
    "winner_school": "Louisiana State",
    "loser": "D.T. Joyner",
    "loser_school": "East Carolina",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Jeff Golz",
    "winner_school": "Ohio State",
    "loser": "Drew Keiser",
    "loser_school": "Lehigh",
    "result": "Fall 1:09"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Henry Milligan",
    "winner_school": "Princeton",
    "loser": "Chuck Pinta",
    "loser_school": "Citadel",
    "result": "Dec 9-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 164,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Bob Matzelle",
    "loser_school": "Wilkes",
    "result": "Fall 7:38"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 165,
    "winner": "Eric Klasson",
    "winner_school": "Michigan",
    "loser": "Rick Romeo",
    "loser_school": "Missouri",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 166,
    "winner": "Harold Smith",
    "winner_school": "Kentucky",
    "loser": "Jim Walker",
    "loser_school": "Illinois State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "Bruce Baumgartner",
    "winner_school": "Indiana State",
    "loser": "Dan Cook",
    "loser_school": "Oregon",
    "result": "Fall 5:50"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 168,
    "winner": "Ron Essink",
    "winner_school": "Grand Valley State",
    "loser": "Fred McGaver",
    "loser_school": "Marquette",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 169,
    "winner": "Jack Campbell",
    "winner_school": "Clarion",
    "loser": "Dave Osenbaugh",
    "loser_school": "Iowa State",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 170,
    "winner": "Don Wagner",
    "winner_school": "Millersville",
    "loser": "Casey Gulliford",
    "loser_school": "San Jose State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Dean Phinney",
    "winner_school": "Iowa",
    "loser": "John Allen",
    "loser_school": "Massachusetts",
    "result": "Fall 1:41"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Mike Haschak",
    "winner_school": "UCLA",
    "loser": "Shawn Whitcomb",
    "loser_school": "Michigan State",
    "result": "Fall 4:05"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Bob Bath",
    "loser_school": "Wyoming",
    "result": "Fall 3:20"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Jeff Golz",
    "winner_school": "Ohio State",
    "loser": "Mike Evans",
    "loser_school": "Louisiana State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Henry Milligan",
    "loser_school": "Princeton",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Harold Smith",
    "winner_school": "Kentucky",
    "loser": "Eric Klasson",
    "loser_school": "Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Bruce Baumgartner",
    "winner_school": "Indiana State",
    "loser": "Ron Essink",
    "loser_school": "Grand Valley State",
    "result": "Fall 3:03"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Jack Campbell",
    "winner_school": "Clarion",
    "loser": "Don Wagner",
    "loser_school": "Millersville",
    "result": "Dec 16-9"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 297,
    "winner": "Shawn Whitcomb",
    "winner_school": "Michigan State",
    "loser": "Bob Isola",
    "loser_school": "Clemson",
    "result": "Fall 2:25"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 298,
    "winner": "Craig Newburg",
    "winner_school": "Ball State",
    "loser": "Bob Bath",
    "loser_school": "Wyoming",
    "result": "Fall 3:46"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 299,
    "winner": "Henry Milligan",
    "winner_school": "Princeton",
    "loser": "Bob Matzelle",
    "loser_school": "Wilkes",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 300,
    "winner": "Ron Essink",
    "winner_school": "Grand Valley State",
    "loser": "Dan Cook",
    "loser_school": "Oregon",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Mike Haschak",
    "winner_school": "UCLA",
    "loser": "Dean Phinney",
    "loser_school": "Iowa",
    "result": "MD 14-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Jeff Golz",
    "loser_school": "Ohio State",
    "result": "Fall 6:13"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Harold Smith",
    "loser_school": "Kentucky",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Bruce Baumgartner",
    "winner_school": "Indiana State",
    "loser": "Jack Campbell",
    "loser_school": "Clarion",
    "result": "Fall 4:25"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 417,
    "winner": "Dean Phinney",
    "winner_school": "Iowa",
    "loser": "Shawn Whitcomb",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 418,
    "winner": "Jeff Golz",
    "winner_school": "Ohio State",
    "loser": "Craig Newburg",
    "loser_school": "Ball State",
    "result": "Fall 0:30"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 419,
    "winner": "Harold Smith",
    "winner_school": "Kentucky",
    "loser": "Henry Milligan",
    "loser_school": "Princeton",
    "result": "MD 14-4"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 420,
    "winner": "Ron Essink",
    "winner_school": "Grand Valley State",
    "loser": "Jack Campbell",
    "loser_school": "Clarion",
    "result": "MD 11-2"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 439,
    "winner": "Dean Phinney",
    "winner_school": "Iowa",
    "loser": "Jeff Golz",
    "loser_school": "Ohio State",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 440,
    "winner": "Harold Smith",
    "winner_school": "Kentucky",
    "loser": "Ron Essink",
    "loser_school": "Grand Valley State",
    "result": "Fall 4:45"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Mike Haschak",
    "loser_school": "UCLA",
    "result": "Fall 3:54"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Bruce Baumgartner",
    "winner_school": "Indiana State",
    "loser": "Steve Williams",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 499,
    "winner": "Dean Phinney",
    "winner_school": "Iowa",
    "loser": "Steve Williams",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 500,
    "winner": "Mike Haschak",
    "winner_school": "UCLA",
    "loser": "Harold Smith",
    "loser_school": "Kentucky",
    "result": "Dec 7-5"
  },
  {
    "round": "7thPlace",
    "weight": "UNL",
    "bout": 530,
    "winner": "Ron Essink",
    "winner_school": "Grand Valley State",
    "loser": "Jeff Golz",
    "loser_school": "Ohio State",
    "result": "Fall 1:16"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Harold Smith",
    "loser_school": "Kentucky",
    "result": "Dec 3-0"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Dean Phinney",
    "winner_school": "Iowa",
    "loser": "Mike Haschak",
    "loser_school": "UCLA",
    "result": "Fall 3:46"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Bruce Baumgartner",
    "loser_school": "Indiana State",
    "result": "Fall 4:35"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
