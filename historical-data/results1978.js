// 1978 NCAA Division I Wrestling Championships (3/16/1978 to 3/18/1978 at Maryland). Weight classes 118-275. Consolation: SEMIFINALIST WRESTLEBACK (rounds SfConsR1-R4).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1978 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1978-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Bob Barber",
    "winner_school": "Missouri",
    "loser": "Dave Ciardy",
    "loser_school": "Indiana State",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1001,
    "winner": "Tom Goodwin",
    "winner_school": "Washington State",
    "loser": "Rob Wurm",
    "loser_school": "Weber State",
    "result": "Fall 6:49"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 2001,
    "winner": "Andy Daniels",
    "winner_school": "Ohio",
    "loser": "Mark Jordine",
    "loser_school": "Boise State",
    "result": "MD 19-7"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 3001,
    "winner": "Bill DePaoli",
    "winner_school": "California PA",
    "loser": "Tom Husted",
    "loser_school": "Wisconsin",
    "result": "Dec 9-4"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 4001,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Mike Picozzi",
    "loser_school": "Florida",
    "result": "Dec 16-12"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 5001,
    "winner": "Joe Viola",
    "winner_school": "Connecticut",
    "loser": "John Gross",
    "loser_school": "SIU-Carbondale",
    "result": "Fall 4:59"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Greg Ely",
    "winner_school": "Hofstra",
    "loser": "Jim Hansen",
    "loser_school": "Minnesota",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Steve Bastianelli",
    "loser_school": "Lehigh",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Sam Orme",
    "winner_school": "Brigham Young",
    "loser": "Joe Viola",
    "loser_school": "Connecticut",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Henry Callie",
    "winner_school": "Millersville",
    "loser": "Tracy Moore",
    "loser_school": "Utah State",
    "result": "Fall 7:15"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Gary Fischer",
    "winner_school": "Cal Poly",
    "loser": "Bill Rosado",
    "loser_school": "Arizona State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Tom Goodwin",
    "winner_school": "Washington State",
    "loser": "Kevin Nellis",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Bob Barber",
    "winner_school": "Missouri",
    "loser": "Bill Hawley",
    "loser_school": "Princeton",
    "result": "Dec 5-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Gary Matlock",
    "loser_school": "Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Dave Prehn",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Jay Liles",
    "winner_school": "Bowling Green",
    "loser": "Steve McKenna",
    "loser_school": "Columbia",
    "result": "MD 21-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Bill DePaoli",
    "winner_school": "California PA",
    "loser": "Steve Stalnaker",
    "loser_school": "Tennessee",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Bryan Evans",
    "winner_school": "Oklahoma",
    "loser": "Glen Maxwell",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Andy Daniels",
    "winner_school": "Ohio",
    "loser": "Chuck Davis",
    "loser_school": "Colorado",
    "result": "Fall 3:14"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Mike DeAugustino",
    "winner_school": "Penn State",
    "loser": "Larry Cohen",
    "loser_school": "Clemson",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Drew Krapf",
    "winner_school": "Shippensburg",
    "loser": "Byron McGlathery",
    "loser_school": "Chattanooga",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Pat Plourd",
    "winner_school": "Oregon State",
    "loser": "Tom Dursee",
    "loser_school": "William & Mary",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "118",
    "bout": 251,
    "winner": "Chuck Davis",
    "winner_school": "Colorado",
    "loser": "Mark Jordine",
    "loser_school": "Boise State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "118",
    "bout": 1251,
    "winner": "Mike Picozzi",
    "winner_school": "Florida",
    "loser": "Dave Prehn",
    "loser_school": "Northern Iowa",
    "result": "M FOR"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Greg Ely",
    "loser_school": "Hofstra",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Sam Orme",
    "winner_school": "Brigham Young",
    "loser": "Henry Callie",
    "loser_school": "Millersville",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Gary Fischer",
    "winner_school": "Cal Poly",
    "loser": "Tom Goodwin",
    "loser_school": "Washington State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Bob Barber",
    "loser_school": "Missouri",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Jay Liles",
    "loser_school": "Bowling Green",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Bryan Evans",
    "winner_school": "Oklahoma",
    "loser": "Bill DePaoli",
    "loser_school": "California PA",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Andy Daniels",
    "winner_school": "Ohio",
    "loser": "Mike DeAugustino",
    "loser_school": "Penn State",
    "result": "Dec 14-10"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Drew Krapf",
    "winner_school": "Shippensburg",
    "loser": "Pat Plourd",
    "loser_school": "Oregon State",
    "result": "MD 12-3"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Steve Bastianelli",
    "winner_school": "Lehigh",
    "loser": "Greg Ely",
    "loser_school": "Hofstra",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Gary Matlock",
    "winner_school": "Illinois",
    "loser": "Bob Barber",
    "loser_school": "Missouri",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Mike Picozzi",
    "winner_school": "Florida",
    "loser": "Jay Liles",
    "loser_school": "Bowling Green",
    "result": "Dec 9-8"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Mike DeAugustino",
    "winner_school": "Penn State",
    "loser": "Chuck Davis",
    "loser_school": "Colorado",
    "result": "MD 15-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Sam Orme",
    "loser_school": "Brigham Young",
    "result": "MD 12-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Gary Fischer",
    "loser_school": "Cal Poly",
    "result": "MD 16-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Bryan Evans",
    "loser_school": "Oklahoma",
    "result": "Dec 12-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Andy Daniels",
    "winner_school": "Ohio",
    "loser": "Drew Krapf",
    "loser_school": "Shippensburg",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Sam Orme",
    "winner_school": "Brigham Young",
    "loser": "Steve Bastianelli",
    "loser_school": "Lehigh",
    "result": "MD 11-1"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Gary Fischer",
    "winner_school": "Cal Poly",
    "loser": "Gary Matlock",
    "loser_school": "Illinois",
    "result": "Dec 9-4"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Mike Picozzi",
    "winner_school": "Florida",
    "loser": "Bryan Evans",
    "loser_school": "Oklahoma",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Mike DeAugustino",
    "winner_school": "Penn State",
    "loser": "Drew Krapf",
    "loser_school": "Shippensburg",
    "result": "Dec 11-8"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Gary Fischer",
    "winner_school": "Cal Poly",
    "loser": "Sam Orme",
    "loser_school": "Brigham Young",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Mike DeAugustino",
    "winner_school": "Penn State",
    "loser": "Mike Picozzi",
    "loser_school": "Florida",
    "result": "Dec 13-7"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "John Azevedo",
    "winner_school": "CSU Bakersfield",
    "loser": "Dan Glenn",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Andy Daniels",
    "winner_school": "Ohio",
    "loser": "Gene Mills",
    "loser_school": "Syracuse",
    "result": "MD 15-7"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Gary Fischer",
    "loser_school": "Cal Poly",
    "result": "MD 13-3"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Mike DeAugustino",
    "loser_school": "Penn State",
    "result": "MD 11-3"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Gary Fischer",
    "winner_school": "Cal Poly",
    "loser": "Mike DeAugustino",
    "loser_school": "Penn State",
    "result": "Dec 9-8"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Dan Glenn",
    "winner_school": "Iowa",
    "loser": "Gene Mills",
    "loser_school": "Syracuse",
    "result": "Dec 12-8"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Andy Daniels",
    "winner_school": "Ohio",
    "loser": "John Azevedo",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 0:30"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Joaquin Maldonado",
    "winner_school": "UCLA",
    "loser": "Leon Madsen",
    "loser_school": "Boise State",
    "result": "Dec 11-6"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "Tom Diamond",
    "winner_school": "Clarion",
    "loser": "Mike Bauer",
    "loser_school": "Oregon State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Joe Davidson",
    "winner_school": "Rhode Island",
    "loser": "Mike Starr",
    "loser_school": "Central Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Jose Martinez",
    "winner_school": "Pittsburgh",
    "loser": "Lonnie Parker",
    "loser_school": "Northern Illinois",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Jim Hanson",
    "winner_school": "Wisconsin",
    "loser": "Jene Burris",
    "loser_school": "Cal State-Chico",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Glenn Burkett",
    "winner_school": "Shippensburg",
    "loser": "Ricky Dellagatta",
    "loser_school": "Kentucky",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Vic Ritchey",
    "loser_school": "Ohio State",
    "result": "Fall 3:42"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Greg Shoemaker",
    "winner_school": "East Stroudsburg",
    "loser": "Mike Slyman",
    "loser_school": "Missouri",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Sam Herriman",
    "winner_school": "Augustana SD",
    "loser": "Tom Diamond",
    "loser_school": "Clarion",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Juan Causey",
    "winner_school": "Illinois",
    "loser": "Scott Hasson",
    "loser_school": "Fresno State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Joaquin Maldonado",
    "winner_school": "UCLA",
    "loser": "Marvin Gasner",
    "loser_school": "Colorado",
    "result": "Dec 13-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Jorge Leon",
    "loser_school": "West Chester",
    "result": "Fall 6:56"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "C.D. Mock",
    "winner_school": "North Carolina",
    "loser": "Mike Rossetti",
    "loser_school": "College of New Jersey",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Carl Mangrum",
    "winner_school": "Washington",
    "loser": "Tom Alexander",
    "loser_school": "Colorado State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Dave DiSabato",
    "winner_school": "Notre Dame",
    "loser": "Boyer Lamar",
    "loser_school": "Brigham Young",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Jerry Reid",
    "winner_school": "Columbia",
    "loser": "Kenny Nelson",
    "loser_school": "Oklahoma",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Tad Overmire",
    "winner_school": "Cal Poly",
    "loser": "Ray Downey",
    "loser_school": "Auburn",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Guy Dugas",
    "winner_school": "Syracuse",
    "loser": "Tim Moon",
    "loser_school": "Northern Colorado",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Joe Davidson",
    "winner_school": "Rhode Island",
    "loser": "Jose Martinez",
    "loser_school": "Pittsburgh",
    "result": "Fall 4:31"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Glenn Burkett",
    "winner_school": "Shippensburg",
    "loser": "Jim Hanson",
    "loser_school": "Wisconsin",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Greg Shoemaker",
    "loser_school": "East Stroudsburg",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Juan Causey",
    "winner_school": "Illinois",
    "loser": "Sam Herriman",
    "loser_school": "Augustana SD",
    "result": "Fall 7:19"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Joaquin Maldonado",
    "loser_school": "UCLA",
    "result": "Fall 5:59"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "C.D. Mock",
    "winner_school": "North Carolina",
    "loser": "Carl Mangrum",
    "loser_school": "Washington",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Jerry Reid",
    "winner_school": "Columbia",
    "loser": "Dave DiSabato",
    "loser_school": "Notre Dame",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Tad Overmire",
    "winner_school": "Cal Poly",
    "loser": "Guy Dugas",
    "loser_school": "Syracuse",
    "result": "DEF"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 265,
    "winner": "Jim Hanson",
    "winner_school": "Wisconsin",
    "loser": "Ricky Dellagatta",
    "loser_school": "Kentucky",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 266,
    "winner": "Greg Shoemaker",
    "winner_school": "East Stroudsburg",
    "loser": "Vic Ritchey",
    "loser_school": "Ohio State",
    "result": "Dec 10-6"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 267,
    "winner": "Jorge Leon",
    "winner_school": "West Chester",
    "loser": "Joaquin Maldonado",
    "loser_school": "UCLA",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 268,
    "winner": "Kenny Nelson",
    "winner_school": "Oklahoma",
    "loser": "Dave DiSabato",
    "loser_school": "Notre Dame",
    "result": "MD 12-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Glenn Burkett",
    "winner_school": "Shippensburg",
    "loser": "Joe Davidson",
    "loser_school": "Rhode Island",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Juan Causey",
    "loser_school": "Illinois",
    "result": "Fall 7:55"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "C.D. Mock",
    "loser_school": "North Carolina",
    "result": "MD 15-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "Jerry Reid",
    "winner_school": "Columbia",
    "loser": "Tad Overmire",
    "loser_school": "Cal Poly",
    "result": "Dec 10-6"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Jim Hanson",
    "winner_school": "Wisconsin",
    "loser": "Joe Davidson",
    "loser_school": "Rhode Island",
    "result": "Dec 7-1"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Greg Shoemaker",
    "winner_school": "East Stroudsburg",
    "loser": "Juan Causey",
    "loser_school": "Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "C.D. Mock",
    "winner_school": "North Carolina",
    "loser": "Jorge Leon",
    "loser_school": "West Chester",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Kenny Nelson",
    "winner_school": "Oklahoma",
    "loser": "Tad Overmire",
    "loser_school": "Cal Poly",
    "result": "Dec 7-1"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 423,
    "winner": "Jim Hanson",
    "winner_school": "Wisconsin",
    "loser": "Greg Shoemaker",
    "loser_school": "East Stroudsburg",
    "result": "Dec 5-0"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 424,
    "winner": "Kenny Nelson",
    "winner_school": "Oklahoma",
    "loser": "C.D. Mock",
    "loser_school": "North Carolina",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Glenn Burkett",
    "loser_school": "Shippensburg",
    "result": "MD 19-4"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Jerry Reid",
    "loser_school": "Columbia",
    "result": "Fall 3:08"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "Jim Hanson",
    "winner_school": "Wisconsin",
    "loser": "Jerry Reid",
    "loser_school": "Columbia",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Kenny Nelson",
    "winner_school": "Oklahoma",
    "loser": "Glenn Burkett",
    "loser_school": "Shippensburg",
    "result": "MD 10-1"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Glenn Burkett",
    "winner_school": "Shippensburg",
    "loser": "Jerry Reid",
    "loser_school": "Columbia",
    "result": "Dec 7-4"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "Kenny Nelson",
    "winner_school": "Oklahoma",
    "loser": "Jim Hanson",
    "loser_school": "Wisconsin",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Randy Lewis",
    "loser_school": "Iowa",
    "result": "MD 13-5"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Dan Cysewski",
    "winner_school": "Indiana",
    "loser": "Art Haberman",
    "loser_school": "Florida",
    "result": "Dec 9-8"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Mike Mathies",
    "winner_school": "Portland State",
    "loser": "Brad Isom",
    "loser_school": "Weber State",
    "result": "Fall 3:28"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 2003,
    "winner": "Lee Roy Smith",
    "winner_school": "Oklahoma State",
    "loser": "James Polsinelli",
    "loser_school": "Appalachian State",
    "result": "Fall 3:46"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Franc Affentranger",
    "winner_school": "CSU Bakersfield",
    "loser": "Butch Campbell",
    "loser_school": "Temple",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Steve Silverberg",
    "winner_school": "Virginia",
    "loser": "Mark Warner",
    "loser_school": "Iowa State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Rande Stottlemyer",
    "winner_school": "Pittsburgh",
    "loser": "Mike Mathies",
    "loser_school": "Portland State",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Dave Blake",
    "winner_school": "Arizona",
    "loser": "Mike Walsh",
    "loser_school": "Michigan State",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Ken Mallory",
    "winner_school": "Montclair State",
    "loser": "Frank Gilpin",
    "loser_school": "New Mexico",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Tyrone Rose",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Dennis Lewis",
    "loser_school": "Ball State",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Bill Walsh",
    "winner_school": "Cleveland State",
    "loser": "Lee Roy Smith",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Ron Voss",
    "winner_school": "Western Michigan",
    "loser": "Andy Zook",
    "loser_school": "Millersville",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Frank DeAngelis",
    "winner_school": "Oklahoma",
    "loser": "Dan Cysewski",
    "loser_school": "Indiana",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Steve Hunte",
    "winner_school": "Iowa",
    "loser": "Buddy Lee",
    "loser_school": "Old Dominion",
    "result": "Fall 6:57"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Kurt Mock",
    "winner_school": "Kentucky",
    "loser": "Kevin Roesch",
    "loser_school": "Princeton",
    "result": "Fall 7:10"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Dane Ives",
    "winner_school": "Missouri",
    "loser": "Scott Arnel",
    "loser_school": "Rhode Island",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Ed Maisey",
    "winner_school": "Brigham Young",
    "loser": "Dan Caballero",
    "loser_school": "Oregon State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Bobby Sparks",
    "winner_school": "Washington",
    "loser": "Tom Scotton",
    "loser_school": "Bucknell",
    "result": "Dec 14-10"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Mike Chinn",
    "winner_school": "Louisiana State",
    "loser": "Les Standerfer",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Brian Brown",
    "winner_school": "Franklin and Marshall",
    "loser": "Bob Trapino",
    "loser_school": "Wisconsin",
    "result": "Dec 6-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Franc Affentranger",
    "winner_school": "CSU Bakersfield",
    "loser": "Steve Silverberg",
    "loser_school": "Virginia",
    "result": "Fall 1:20"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Rande Stottlemyer",
    "winner_school": "Pittsburgh",
    "loser": "Dave Blake",
    "loser_school": "Arizona",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Ken Mallory",
    "winner_school": "Montclair State",
    "loser": "Tyrone Rose",
    "loser_school": "Nevada-Las Vegas",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Bill Walsh",
    "winner_school": "Cleveland State",
    "loser": "Ron Voss",
    "loser_school": "Western Michigan",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Frank DeAngelis",
    "winner_school": "Oklahoma",
    "loser": "Steve Hunte",
    "loser_school": "Iowa",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Kurt Mock",
    "winner_school": "Kentucky",
    "loser": "Dane Ives",
    "loser_school": "Missouri",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Ed Maisey",
    "winner_school": "Brigham Young",
    "loser": "Bobby Sparks",
    "loser_school": "Washington",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Brian Brown",
    "winner_school": "Franklin and Marshall",
    "loser": "Mike Chinn",
    "loser_school": "Louisiana State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 269,
    "winner": "Steve Silverberg",
    "winner_school": "Virginia",
    "loser": "Butch Campbell",
    "loser_school": "Temple",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 270,
    "winner": "Tyrone Rose",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Frank Gilpin",
    "loser_school": "New Mexico",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 271,
    "winner": "Steve Hunte",
    "winner_school": "Iowa",
    "loser": "Dan Cysewski",
    "loser_school": "Indiana",
    "result": "MD 16-1"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 272,
    "winner": "Mike Chinn",
    "winner_school": "Louisiana State",
    "loser": "Bob Trapino",
    "loser_school": "Wisconsin",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Franc Affentranger",
    "winner_school": "CSU Bakersfield",
    "loser": "Rande Stottlemyer",
    "loser_school": "Pittsburgh",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Ken Mallory",
    "winner_school": "Montclair State",
    "loser": "Bill Walsh",
    "loser_school": "Cleveland State",
    "result": "Fall 5:25"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Frank DeAngelis",
    "winner_school": "Oklahoma",
    "loser": "Kurt Mock",
    "loser_school": "Kentucky",
    "result": "Dec 10-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Brian Brown",
    "winner_school": "Franklin and Marshall",
    "loser": "Ed Maisey",
    "loser_school": "Brigham Young",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "Rande Stottlemyer",
    "winner_school": "Pittsburgh",
    "loser": "Steve Silverberg",
    "loser_school": "Virginia",
    "result": "Dec 5-3 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Tyrone Rose",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Bill Walsh",
    "loser_school": "Cleveland State",
    "result": "Fall 5:08"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Steve Hunte",
    "winner_school": "Iowa",
    "loser": "Kurt Mock",
    "loser_school": "Kentucky",
    "result": "DEF"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Mike Chinn",
    "winner_school": "Louisiana State",
    "loser": "Ed Maisey",
    "loser_school": "Brigham Young",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 425,
    "winner": "Rande Stottlemyer",
    "winner_school": "Pittsburgh",
    "loser": "Tyrone Rose",
    "loser_school": "Nevada-Las Vegas",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 426,
    "winner": "Mike Chinn",
    "winner_school": "Louisiana State",
    "loser": "Steve Hunte",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Ken Mallory",
    "winner_school": "Montclair State",
    "loser": "Franc Affentranger",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-4 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Frank DeAngelis",
    "winner_school": "Oklahoma",
    "loser": "Brian Brown",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 15-8"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "Brian Brown",
    "winner_school": "Franklin and Marshall",
    "loser": "Rande Stottlemyer",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-2"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Franc Affentranger",
    "winner_school": "CSU Bakersfield",
    "loser": "Mike Chinn",
    "loser_school": "Louisiana State",
    "result": "Dec 6-3"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Mike Chinn",
    "winner_school": "Louisiana State",
    "loser": "Rande Stottlemyer",
    "loser_school": "Pittsburgh",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Franc Affentranger",
    "winner_school": "CSU Bakersfield",
    "loser": "Brian Brown",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 9-7"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Ken Mallory",
    "winner_school": "Montclair State",
    "loser": "Frank DeAngelis",
    "loser_school": "Oklahoma",
    "result": "Dec 10-7"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Bob Harwick",
    "winner_school": "Virginia",
    "loser": "Ralph McCausland",
    "loser_school": "Eastern Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "Frank Pucino",
    "winner_school": "Rhode Island",
    "loser": "Jerry Disimone",
    "loser_school": "Colorado State",
    "result": "Dec 6-5"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 2004,
    "winner": "Steve Cavayero",
    "winner_school": "SUNY-Binghampton",
    "loser": "Mike Collins",
    "loser_school": "Florida",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Steve Grubman",
    "winner_school": "Princeton",
    "loser": "Kent Kraft",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Donald Moore",
    "winner_school": "William & Mary",
    "loser": "Mike Pollock",
    "loser_school": "Missouri",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Larry Buckner",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Frank Pucino",
    "loser_school": "Rhode Island",
    "result": "Dec 12-11"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Randy Nielsen",
    "winner_school": "Iowa State",
    "loser": "Alex Riccomini",
    "loser_school": "Northwestern",
    "result": "Fall 3:53"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Tim Welch",
    "winner_school": "Auburn",
    "loser": "Paul Hibbs",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Dan Hicks",
    "winner_school": "Oregon State",
    "loser": "Greg Drenik",
    "loser_school": "Cleveland State",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Charles Shelton",
    "winner_school": "Oklahoma State",
    "loser": "Bob Harwick",
    "loser_school": "Virginia",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Mike Moore",
    "winner_school": "Lock Haven",
    "loser": "Milan Yakovich",
    "loser_school": "Kent State",
    "result": "Fall 1:01"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Steve Cavayero",
    "loser_school": "SUNY-Binghampton",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Brad Alfred",
    "winner_school": "Boise State",
    "loser": "Mark Truitt",
    "loser_school": "Marshall",
    "result": "Fall 4:40"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Dru Meshes",
    "winner_school": "SIU-Edwardsville",
    "loser": "Robert McDowell",
    "loser_school": "San Jose State",
    "result": "Fall 3:12"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Doug Smith",
    "winner_school": "Washington",
    "loser": "Larry Griffith",
    "loser_school": "Oklahoma",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "Casper Tortella",
    "loser_school": "Wilkes",
    "result": "MD 20-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "John Mecham",
    "winner_school": "Brigham Young",
    "loser": "Mike Hogan",
    "loser_school": "Hofstra",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Dennis Brighton",
    "winner_school": "Michigan State",
    "loser": "Larry Kihlstadius",
    "loser_school": "Navy",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Tim Mousetis",
    "winner_school": "Kentucky",
    "loser": "Gary Hines",
    "loser_school": "New Mexico",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Steve Grubman",
    "winner_school": "Princeton",
    "loser": "Donald Moore",
    "loser_school": "William & Mary",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Randy Nielsen",
    "winner_school": "Iowa State",
    "loser": "Larry Buckner",
    "loser_school": "Nevada-Las Vegas",
    "result": "Fall 4:32"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Dan Hicks",
    "winner_school": "Oregon State",
    "loser": "Tim Welch",
    "loser_school": "Auburn",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Mike Moore",
    "winner_school": "Lock Haven",
    "loser": "Charles Shelton",
    "loser_school": "Oklahoma State",
    "result": "Dec 14-9"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Brad Alfred",
    "loser_school": "Boise State",
    "result": "MD 24-9"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Doug Smith",
    "winner_school": "Washington",
    "loser": "Dru Meshes",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "John Mecham",
    "loser_school": "Brigham Young",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Dennis Brighton",
    "winner_school": "Michigan State",
    "loser": "Tim Mousetis",
    "loser_school": "Kentucky",
    "result": "Dec 9-6"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 273,
    "winner": "Larry Buckner",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Alex Riccomini",
    "loser_school": "Northwestern",
    "result": "Fall 3:00"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 274,
    "winner": "Greg Drenik",
    "winner_school": "Cleveland State",
    "loser": "Tim Welch",
    "loser_school": "Auburn",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 275,
    "winner": "Steve Cavayero",
    "winner_school": "SUNY-Binghampton",
    "loser": "Brad Alfred",
    "loser_school": "Boise State",
    "result": "Fall 5:37"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 276,
    "winner": "John Mecham",
    "winner_school": "Brigham Young",
    "loser": "Casper Tortella",
    "loser_school": "Wilkes",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Randy Nielsen",
    "winner_school": "Iowa State",
    "loser": "Steve Grubman",
    "loser_school": "Princeton",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Dan Hicks",
    "winner_school": "Oregon State",
    "loser": "Mike Moore",
    "loser_school": "Lock Haven",
    "result": "MD 13-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Doug Smith",
    "loser_school": "Washington",
    "result": "MD 12-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "Dennis Brighton",
    "loser_school": "Michigan State",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Larry Buckner",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Steve Grubman",
    "loser_school": "Princeton",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "Mike Moore",
    "winner_school": "Lock Haven",
    "loser": "Greg Drenik",
    "loser_school": "Cleveland State",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "Steve Cavayero",
    "winner_school": "SUNY-Binghampton",
    "loser": "Doug Smith",
    "loser_school": "Washington",
    "result": "Dec 6-5"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "John Mecham",
    "winner_school": "Brigham Young",
    "loser": "Dennis Brighton",
    "loser_school": "Michigan State",
    "result": "Dec 12-5"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 427,
    "winner": "Mike Moore",
    "winner_school": "Lock Haven",
    "loser": "Larry Buckner",
    "loser_school": "Nevada-Las Vegas",
    "result": "Fall 3:01"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 428,
    "winner": "John Mecham",
    "winner_school": "Brigham Young",
    "loser": "Steve Cavayero",
    "loser_school": "SUNY-Binghampton",
    "result": "Dec 6-0"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Dan Hicks",
    "winner_school": "Oregon State",
    "loser": "Randy Nielsen",
    "loser_school": "Iowa State",
    "result": "Dec 9-7"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Andy Rein",
    "winner_school": "Wisconsin",
    "loser": "Scott Trizzino",
    "loser_school": "Iowa",
    "result": "DQ"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "Mike Moore",
    "loser_school": "Lock Haven",
    "result": "MD 17-4"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "John Mecham",
    "winner_school": "Brigham Young",
    "loser": "Randy Nielsen",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Mike Moore",
    "winner_school": "Lock Haven",
    "loser": "Randy Nielsen",
    "loser_school": "Iowa State",
    "result": "MD 14-2"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "John Mecham",
    "loser_school": "Brigham Young",
    "result": "Dec 11-5"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Dan Hicks",
    "winner_school": "Oregon State",
    "loser": "Andy Rein",
    "loser_school": "Wisconsin",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Tim Jefferies",
    "winner_school": "Arizona State",
    "loser": "Mike Willner",
    "loser_school": "Rhode Island",
    "result": "Dec 8-6"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "John Stallings",
    "winner_school": "Auburn",
    "loser": "Scott Brambini",
    "loser_school": "Rider",
    "result": "MD 13-4"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Dave Schultz",
    "winner_school": "Oklahoma State",
    "loser": "Max Lorenzo",
    "loser_school": "William & Mary",
    "result": "Dec 13-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Kirk Sinet",
    "winner_school": "South Dakota State",
    "loser": "Doug Ziebart",
    "loser_school": "Oregon State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Mark Nelson",
    "winner_school": "Oklahoma",
    "loser": "Jeff Reintgen",
    "loser_school": "North Carolina",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Dave Schultz",
    "winner_school": "Oklahoma State",
    "loser": "Chuck Biggert",
    "loser_school": "Toledo",
    "result": "MD 17-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Kim Farrison",
    "winner_school": "Wisconsin",
    "loser": "Tom Lunsford",
    "loser_school": "Appalachian State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Mark Churella",
    "winner_school": "Michigan",
    "loser": "Paul Supchak",
    "loser_school": "Navy",
    "result": "Fall 2:49"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Scott Bliss",
    "winner_school": "Oregon",
    "loser": "Dan Godbehere",
    "loser_school": "Wyoming",
    "result": "Dec 12-10"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "John Stallings",
    "winner_school": "Auburn",
    "loser": "Ed Rusher",
    "loser_school": "Colorado",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Steve Spangenberg",
    "winner_school": "Northern Michigan",
    "loser": "Larry Tusick",
    "loser_school": "Alabama",
    "result": "Fall 4:39"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Tim Jefferies",
    "winner_school": "Arizona State",
    "loser": "Brian Surage",
    "loser_school": "Rutgers",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Tony Caravella",
    "winner_school": "Bloomsburg",
    "loser": "Mark Jensen",
    "loser_school": "Concordia MN",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Joe Zuspann",
    "winner_school": "Iowa State",
    "loser": "Bruce Solomon",
    "loser_school": "Ohio State",
    "result": "Fall 5:59"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Oscar Ordonez",
    "winner_school": "Drake",
    "loser": "Emanuel Miller",
    "loser_school": "UCLA",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Bruce Kinseth",
    "winner_school": "Iowa",
    "loser": "Frank Presley",
    "loser_school": "Millersville",
    "result": "Fall 5:51"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Dave Musselman",
    "winner_school": "Arizona",
    "loser": "Greg Okoorian",
    "loser_school": "Long Beach State",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Bill Vollrath",
    "winner_school": "Penn State",
    "loser": "Gary Etchemendy",
    "loser_school": "Idaho State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Jim Tebbe",
    "winner_school": "Miami Ohio",
    "loser": "Jody McMullen",
    "loser_school": "East Stroudsburg",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 255,
    "winner": "Max Lorenzo",
    "winner_school": "William & Mary",
    "loser": "Chuck Biggert",
    "loser_school": "Toledo",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Kirk Sinet",
    "winner_school": "South Dakota State",
    "loser": "Mark Nelson",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Dave Schultz",
    "winner_school": "Oklahoma State",
    "loser": "Kim Farrison",
    "loser_school": "Wisconsin",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Mark Churella",
    "winner_school": "Michigan",
    "loser": "Scott Bliss",
    "loser_school": "Oregon",
    "result": "MD 25-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "John Stallings",
    "winner_school": "Auburn",
    "loser": "Steve Spangenberg",
    "loser_school": "Northern Michigan",
    "result": "MD 21-13"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Tim Jefferies",
    "winner_school": "Arizona State",
    "loser": "Tony Caravella",
    "loser_school": "Bloomsburg",
    "result": "Fall 4:57"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Joe Zuspann",
    "winner_school": "Iowa State",
    "loser": "Oscar Ordonez",
    "loser_school": "Drake",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Bruce Kinseth",
    "winner_school": "Iowa",
    "loser": "Dave Musselman",
    "loser_school": "Arizona",
    "result": "Fall 6:51"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Bill Vollrath",
    "winner_school": "Penn State",
    "loser": "Jim Tebbe",
    "loser_school": "Miami Ohio",
    "result": "MD 11-2"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 277,
    "winner": "Max Lorenzo",
    "winner_school": "William & Mary",
    "loser": "Kim Farrison",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 278,
    "winner": "Scott Bliss",
    "winner_school": "Oregon",
    "loser": "Paul Supchak",
    "loser_school": "Navy",
    "result": "Dec 8-7"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 279,
    "winner": "Bruce Solomon",
    "winner_school": "Ohio State",
    "loser": "Oscar Ordonez",
    "loser_school": "Drake",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 280,
    "winner": "Dave Musselman",
    "winner_school": "Arizona",
    "loser": "Frank Presley",
    "loser_school": "Millersville",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Dave Schultz",
    "winner_school": "Oklahoma State",
    "loser": "Kirk Sinet",
    "loser_school": "South Dakota State",
    "result": "Dec 11-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Mark Churella",
    "winner_school": "Michigan",
    "loser": "John Stallings",
    "loser_school": "Auburn",
    "result": "Dec 14-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Joe Zuspann",
    "winner_school": "Iowa State",
    "loser": "Tim Jefferies",
    "loser_school": "Arizona State",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Bruce Kinseth",
    "winner_school": "Iowa",
    "loser": "Bill Vollrath",
    "loser_school": "Penn State",
    "result": "MD 19-5"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Max Lorenzo",
    "winner_school": "William & Mary",
    "loser": "Kirk Sinet",
    "loser_school": "South Dakota State",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Scott Bliss",
    "winner_school": "Oregon",
    "loser": "John Stallings",
    "loser_school": "Auburn",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Tim Jefferies",
    "winner_school": "Arizona State",
    "loser": "Bruce Solomon",
    "loser_school": "Ohio State",
    "result": "MD 10-1"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Dave Musselman",
    "winner_school": "Arizona",
    "loser": "Bill Vollrath",
    "loser_school": "Penn State",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 429,
    "winner": "Scott Bliss",
    "winner_school": "Oregon",
    "loser": "Max Lorenzo",
    "loser_school": "William & Mary",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 430,
    "winner": "Tim Jefferies",
    "winner_school": "Arizona State",
    "loser": "Dave Musselman",
    "loser_school": "Arizona",
    "result": "Fall 3:42"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Mark Churella",
    "winner_school": "Michigan",
    "loser": "Dave Schultz",
    "loser_school": "Oklahoma State",
    "result": "Dec 13-10"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Bruce Kinseth",
    "winner_school": "Iowa",
    "loser": "Joe Zuspann",
    "loser_school": "Iowa State",
    "result": "Dec 9-4"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "Joe Zuspann",
    "winner_school": "Iowa State",
    "loser": "Scott Bliss",
    "loser_school": "Oregon",
    "result": "Fall 5:21"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Dave Schultz",
    "winner_school": "Oklahoma State",
    "loser": "Tim Jefferies",
    "loser_school": "Arizona State",
    "result": "Dec 9-6"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Tim Jefferies",
    "winner_school": "Arizona State",
    "loser": "Scott Bliss",
    "loser_school": "Oregon",
    "result": "MD 9-0"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Dave Schultz",
    "winner_school": "Oklahoma State",
    "loser": "Joe Zuspann",
    "loser_school": "Iowa State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Mark Churella",
    "winner_school": "Michigan",
    "loser": "Bruce Kinseth",
    "loser_school": "Iowa",
    "result": "Fall 3:09"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Kelly Ward",
    "winner_school": "Iowa State",
    "loser": "Lamont Roth",
    "loser_school": "Montana",
    "result": "MD 13-4"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Lee Spiegel",
    "winner_school": "Rhode Island",
    "loser": "Jim Rebischke",
    "loser_school": "Wyoming",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Dale Gilbert",
    "winner_school": "Clarion",
    "loser": "Jeff Fitch",
    "loser_school": "Indiana",
    "result": "Fall 1:43"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Gary Baker",
    "loser_school": "Oklahoma",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Dan Hollemback",
    "winner_school": "Oregon",
    "loser": "Gary Drewry",
    "loser_school": "William & Mary",
    "result": "Fall 3:00"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Dave Becker",
    "winner_school": "Penn State",
    "loser": "Jerry Young",
    "loser_school": "Virginia",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Lee Kemp",
    "winner_school": "Wisconsin",
    "loser": "William Smith",
    "loser_school": "Morgan State",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Jeff Cutler",
    "winner_school": "Florida",
    "loser": "Dave Hansen",
    "loser_school": "Brigham Young",
    "result": "Dec 16-9"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Mike Burgher",
    "winner_school": "UCLA",
    "loser": "Lee Spiegel",
    "loser_school": "Rhode Island",
    "result": "Fall 7:02"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Rick Armstrong",
    "winner_school": "SUNY-Cortland",
    "loser": "Arthur Jones",
    "loser_school": "Tennessee",
    "result": "Fall 6:08"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Kelly Ward",
    "winner_school": "Iowa State",
    "loser": "Roy Glenn",
    "loser_school": "California-Berkeley",
    "result": "MD 18-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Mark Stevenson",
    "winner_school": "Iowa",
    "loser": "Doug Oliver",
    "loser_school": "Rutgers",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Gary Bentrim",
    "winner_school": "Northern Iowa",
    "loser": "Bob Erickson",
    "loser_school": "Utah State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Harold Ritchie",
    "winner_school": "Missouri",
    "loser": "Tony Parris",
    "loser_school": "Chattanooga",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Brian Rodgers",
    "winner_school": "Navy",
    "loser": "Gilden McColm",
    "loser_school": "Illinois State",
    "result": "MD 14-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Robert Kiddy",
    "winner_school": "Cal Poly",
    "loser": "Joe Brugger",
    "loser_school": "Lafayette",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Ron Michaels",
    "winner_school": "Kent State",
    "loser": "Court Vining",
    "loser_school": "Nebraska",
    "result": "Fall 3:49"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "John Janiak",
    "winner_school": "Syracuse",
    "loser": "Tobey Matney",
    "loser_school": "Cleveland State",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 256,
    "winner": "Roy Glenn",
    "winner_school": "California-Berkeley",
    "loser": "Lamont Roth",
    "loser_school": "Montana",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Dale Gilbert",
    "loser_school": "Clarion",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Dave Becker",
    "winner_school": "Penn State",
    "loser": "Dan Hollemback",
    "loser_school": "Oregon",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Lee Kemp",
    "winner_school": "Wisconsin",
    "loser": "Jeff Cutler",
    "loser_school": "Florida",
    "result": "Fall 6:46"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Mike Burgher",
    "winner_school": "UCLA",
    "loser": "Rick Armstrong",
    "loser_school": "SUNY-Cortland",
    "result": "Fall 4:17"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Kelly Ward",
    "winner_school": "Iowa State",
    "loser": "Mark Stevenson",
    "loser_school": "Iowa",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Gary Bentrim",
    "winner_school": "Northern Iowa",
    "loser": "Harold Ritchie",
    "loser_school": "Missouri",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Brian Rodgers",
    "winner_school": "Navy",
    "loser": "Robert Kiddy",
    "loser_school": "Cal Poly",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Ron Michaels",
    "winner_school": "Kent State",
    "loser": "John Janiak",
    "loser_school": "Syracuse",
    "result": "Dec 10-7"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 281,
    "winner": "Dan Hollemback",
    "winner_school": "Oregon",
    "loser": "Jerry Young",
    "loser_school": "Virginia",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 282,
    "winner": "William Smith",
    "winner_school": "Morgan State",
    "loser": "Jeff Cutler",
    "loser_school": "Florida",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 283,
    "winner": "Mark Stevenson",
    "winner_school": "Iowa",
    "loser": "Roy Glenn",
    "loser_school": "California-Berkeley",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 284,
    "winner": "John Janiak",
    "winner_school": "Syracuse",
    "loser": "Court Vining",
    "loser_school": "Nebraska",
    "result": "Fall 1:47"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Dave Becker",
    "winner_school": "Penn State",
    "loser": "Dan Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Lee Kemp",
    "winner_school": "Wisconsin",
    "loser": "Mike Burgher",
    "loser_school": "UCLA",
    "result": "MD 13-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Kelly Ward",
    "winner_school": "Iowa State",
    "loser": "Gary Bentrim",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Ron Michaels",
    "winner_school": "Kent State",
    "loser": "Brian Rodgers",
    "loser_school": "Navy",
    "result": "MD 16-6"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Dan Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Dan Hollemback",
    "loser_school": "Oregon",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "William Smith",
    "winner_school": "Morgan State",
    "loser": "Mike Burgher",
    "loser_school": "UCLA",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Mark Stevenson",
    "winner_school": "Iowa",
    "loser": "Gary Bentrim",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "John Janiak",
    "winner_school": "Syracuse",
    "loser": "Brian Rodgers",
    "loser_school": "Navy",
    "result": "Dec 5-0"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 431,
    "winner": "William Smith",
    "winner_school": "Morgan State",
    "loser": "Dan Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 432,
    "winner": "John Janiak",
    "winner_school": "Syracuse",
    "loser": "Mark Stevenson",
    "loser_school": "Iowa",
    "result": "Dec 1-0"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Lee Kemp",
    "winner_school": "Wisconsin",
    "loser": "Dave Becker",
    "loser_school": "Penn State",
    "result": "Fall 7:20"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Kelly Ward",
    "winner_school": "Iowa State",
    "loser": "Ron Michaels",
    "loser_school": "Kent State",
    "result": "Fall 7:24"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Ron Michaels",
    "winner_school": "Kent State",
    "loser": "William Smith",
    "loser_school": "Morgan State",
    "result": "Fall 2:43"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "John Janiak",
    "winner_school": "Syracuse",
    "loser": "Dave Becker",
    "loser_school": "Penn State",
    "result": "Dec 2-1"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Dave Becker",
    "winner_school": "Penn State",
    "loser": "William Smith",
    "loser_school": "Morgan State",
    "result": "MD 10-2"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "John Janiak",
    "winner_school": "Syracuse",
    "loser": "Ron Michaels",
    "loser_school": "Kent State",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Lee Kemp",
    "winner_school": "Wisconsin",
    "loser": "Kelly Ward",
    "loser_school": "Iowa State",
    "result": "Dec 10-8"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Greg Fronczak",
    "winner_school": "William & Mary",
    "loser": "Russ Pickering",
    "loser_school": "Miami Ohio",
    "result": "Dec 10-9"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1007,
    "winner": "Paul Martin",
    "winner_school": "Oklahoma State",
    "loser": "Russ Weglarz",
    "loser_school": "Northwestern",
    "result": "Dec 15-8"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 2007,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "Dave Pacheco",
    "loser_school": "Idaho State",
    "result": "Fall 1:52"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Ron Varga",
    "winner_school": "Cleveland State",
    "loser": "Kent Weyand",
    "loser_school": "North Carolina",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Keith Poolman",
    "winner_school": "Northern Iowa",
    "loser": "Jim Vargo",
    "loser_school": "East Stroudsburg",
    "result": "Dec 17-12"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Brian Parlet",
    "winner_school": "Augustana SD",
    "loser": "Greg Fronczak",
    "loser_school": "William & Mary",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Brad Hansen",
    "winner_school": "Brigham Young",
    "loser": "Bryan Neitenbach",
    "loser_school": "Colorado",
    "result": "Fall 5:46"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Scott Heaton",
    "winner_school": "Cal Poly",
    "loser": "Ken Berry",
    "loser_school": "Hiram",
    "result": "Fall 1:54"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Ken Schneider",
    "winner_school": "California-Berkeley",
    "loser": "Dom Macchia",
    "loser_school": "Rhode Island",
    "result": "Fall 2:08"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Paul Martin",
    "winner_school": "Oklahoma State",
    "loser": "Kevin Colabucci",
    "loser_school": "Maryland",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Mike Burford",
    "winner_school": "Drake",
    "loser": "Mark Harris",
    "loser_school": "Utah State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "Dennis Graham",
    "loser_school": "Portland State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Gene Clemons",
    "winner_school": "Wilkes",
    "loser": "Joe Elinsky",
    "loser_school": "Auburn",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Jeff Parker",
    "winner_school": "Louisiana State",
    "loser": "Mike James",
    "loser_school": "Washington State",
    "result": "Fall 1:46"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Rob DiSerafino",
    "winner_school": "Rider",
    "loser": "Dave Evans",
    "loser_school": "Wisconsin",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Jim Weir",
    "winner_school": "John Carroll",
    "loser": "Craig Cody",
    "loser_school": "Appalachian State",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Colin Kilrain",
    "winner_school": "Lehigh",
    "loser": "Richard Evans",
    "loser_school": "Washington",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Ashley Swift",
    "winner_school": "Penn State",
    "loser": "Dave Miller",
    "loser_school": "Missouri",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Keith Stearns",
    "winner_school": "Oklahoma",
    "loser": "Doug Hutsell",
    "loser_school": "Indiana",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 257,
    "winner": "Dennis Graham",
    "winner_school": "Portland State",
    "loser": "Dave Pacheco",
    "loser_school": "Idaho State",
    "result": "Fall 4:24"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 1257,
    "winner": "Kevin Colabucci",
    "winner_school": "Maryland",
    "loser": "Russ Weglarz",
    "loser_school": "Northwestern",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Ron Varga",
    "winner_school": "Cleveland State",
    "loser": "Keith Poolman",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Brad Hansen",
    "winner_school": "Brigham Young",
    "loser": "Brian Parlet",
    "loser_school": "Augustana SD",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Scott Heaton",
    "winner_school": "Cal Poly",
    "loser": "Ken Schneider",
    "loser_school": "California-Berkeley",
    "result": "Fall 1:29"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Paul Martin",
    "winner_school": "Oklahoma State",
    "loser": "Mike Burford",
    "loser_school": "Drake",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "Gene Clemons",
    "loser_school": "Wilkes",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Jeff Parker",
    "winner_school": "Louisiana State",
    "loser": "Rob DiSerafino",
    "loser_school": "Rider",
    "result": "Fall 3:28"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Jim Weir",
    "winner_school": "John Carroll",
    "loser": "Colin Kilrain",
    "loser_school": "Lehigh",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Keith Stearns",
    "winner_school": "Oklahoma",
    "loser": "Ashley Swift",
    "loser_school": "Penn State",
    "result": "MD 9-1"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 285,
    "winner": "Brian Parlet",
    "winner_school": "Augustana SD",
    "loser": "Bryan Neitenbach",
    "loser_school": "Colorado",
    "result": "MD 10-0"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 286,
    "winner": "Mike Burford",
    "winner_school": "Drake",
    "loser": "Kevin Colabucci",
    "loser_school": "Maryland",
    "result": "MD 12-4"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 287,
    "winner": "Gene Clemons",
    "winner_school": "Wilkes",
    "loser": "Dennis Graham",
    "loser_school": "Portland State",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 288,
    "winner": "Doug Hutsell",
    "winner_school": "Indiana",
    "loser": "Ashley Swift",
    "loser_school": "Penn State",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Brad Hansen",
    "winner_school": "Brigham Young",
    "loser": "Ron Varga",
    "loser_school": "Cleveland State",
    "result": "Fall 3:24"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Paul Martin",
    "winner_school": "Oklahoma State",
    "loser": "Scott Heaton",
    "loser_school": "Cal Poly",
    "result": "Dec 8-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "Jeff Parker",
    "loser_school": "Louisiana State",
    "result": "Fall 7:44"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Keith Stearns",
    "winner_school": "Oklahoma",
    "loser": "Jim Weir",
    "loser_school": "John Carroll",
    "result": "Dec 6-1 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Brian Parlet",
    "winner_school": "Augustana SD",
    "loser": "Ron Varga",
    "loser_school": "Cleveland State",
    "result": "Fall 5:34"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Scott Heaton",
    "winner_school": "Cal Poly",
    "loser": "Mike Burford",
    "loser_school": "Drake",
    "result": "Fall 2:46"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "Gene Clemons",
    "winner_school": "Wilkes",
    "loser": "Jeff Parker",
    "loser_school": "Louisiana State",
    "result": "MD 15-6"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Jim Weir",
    "winner_school": "John Carroll",
    "loser": "Doug Hutsell",
    "loser_school": "Indiana",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 433,
    "winner": "Scott Heaton",
    "winner_school": "Cal Poly",
    "loser": "Brian Parlet",
    "loser_school": "Augustana SD",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 434,
    "winner": "Jim Weir",
    "winner_school": "John Carroll",
    "loser": "Gene Clemons",
    "loser_school": "Wilkes",
    "result": "Dec 7-6"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Paul Martin",
    "winner_school": "Oklahoma State",
    "loser": "Brad Hansen",
    "loser_school": "Brigham Young",
    "result": "Dec 8-7"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Keith Stearns",
    "winner_school": "Oklahoma",
    "loser": "Mike DeAnna",
    "loser_school": "Iowa",
    "result": "Dec 5-1 TB"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Scott Heaton",
    "winner_school": "Cal Poly",
    "loser": "Mike DeAnna",
    "loser_school": "Iowa",
    "result": "Dec 9-6"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "Jim Weir",
    "winner_school": "John Carroll",
    "loser": "Brad Hansen",
    "loser_school": "Brigham Young",
    "result": "MD 16-6"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Brad Hansen",
    "winner_school": "Brigham Young",
    "loser": "Mike DeAnna",
    "loser_school": "Iowa",
    "result": "Fall 2:31"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Scott Heaton",
    "winner_school": "Cal Poly",
    "loser": "Jim Weir",
    "loser_school": "John Carroll",
    "result": "MD 14-4"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Keith Stearns",
    "winner_school": "Oklahoma",
    "loser": "Paul Martin",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "Craig Belunes",
    "winner_school": "Rutgers",
    "loser": "Pete Lucas",
    "loser_school": "Portland State",
    "result": "Dec 6-5"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1008,
    "winner": "Eric Moll",
    "winner_school": "Louisiana State",
    "loser": "Steve Draper",
    "loser_school": "California-Berkeley",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Jim Ellis",
    "winner_school": "Michigan State",
    "loser": "Pat Martorella",
    "loser_school": "Hofstra",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Charles Gadson",
    "winner_school": "Iowa State",
    "loser": "Paul Petrella",
    "loser_school": "Baldwin Wallace",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Greg Stevens",
    "winner_school": "Iowa",
    "loser": "Craig Belunes",
    "loser_school": "Rutgers",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Bob Jones",
    "winner_school": "Long Beach State",
    "loser": "Vic Northrup",
    "loser_school": "East Carolina",
    "result": "Fall 4:36"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Randy Besaw",
    "winner_school": "Oregon",
    "loser": "Kevin Edwards",
    "loser_school": "Utah",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Keith Ely",
    "winner_school": "Princeton",
    "loser": "Bob Stas",
    "loser_school": "Kent State",
    "result": "MD 19-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Mark Lieberman",
    "winner_school": "Lehigh",
    "loser": "Steve Fraser",
    "loser_school": "Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Tom Flanagan",
    "winner_school": "Chattanooga",
    "loser": "Rob Dreger",
    "loser_school": "Notre Dame",
    "result": "Fall 3:41"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Rory Needs",
    "winner_school": "Brigham Young",
    "loser": "Clint Haislip",
    "loser_school": "Rhode Island",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Eric Wais",
    "winner_school": "Oklahoma State",
    "loser": "Rick Drury",
    "loser_school": "Clemson",
    "result": "Fall 3:52"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Mike Decker",
    "winner_school": "Northern Colorado",
    "loser": "Karki Darsaw",
    "loser_school": "Missouri",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Mark Hattendorf",
    "winner_school": "SIU-Edwardsville",
    "loser": "Dom DiGioacchino",
    "loser_school": "Bloomsburg",
    "result": "Fall 4:52"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Don Shuler",
    "winner_school": "Arizona State",
    "loser": "Jim Kleinhans",
    "loser_school": "Wisconsin",
    "result": "Fall 3:55"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Bill Teutsch",
    "winner_school": "Florida",
    "loser": "Les Steidl",
    "loser_school": "Cleveland State",
    "result": "Fall 4:31"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Al Manning",
    "winner_school": "Ball State",
    "loser": "Dan Pfautz",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Eric Moll",
    "winner_school": "Louisiana State",
    "loser": "Marty Ryan",
    "loser_school": "Oregon State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Charles Gadson",
    "winner_school": "Iowa State",
    "loser": "Jim Ellis",
    "loser_school": "Michigan State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Greg Stevens",
    "winner_school": "Iowa",
    "loser": "Bob Jones",
    "loser_school": "Long Beach State",
    "result": "MD 21-6"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Keith Ely",
    "winner_school": "Princeton",
    "loser": "Randy Besaw",
    "loser_school": "Oregon",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Mark Lieberman",
    "winner_school": "Lehigh",
    "loser": "Tom Flanagan",
    "loser_school": "Chattanooga",
    "result": "Fall 0:47"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Eric Wais",
    "winner_school": "Oklahoma State",
    "loser": "Rory Needs",
    "loser_school": "Brigham Young",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Mark Hattendorf",
    "winner_school": "SIU-Edwardsville",
    "loser": "Mike Decker",
    "loser_school": "Northern Colorado",
    "result": "Dec 15-11"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Don Shuler",
    "winner_school": "Arizona State",
    "loser": "Bill Teutsch",
    "loser_school": "Florida",
    "result": "MD 20-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Eric Moll",
    "winner_school": "Louisiana State",
    "loser": "Al Manning",
    "loser_school": "Ball State",
    "result": "Dec 8-0 TB"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 289,
    "winner": "Paul Petrella",
    "winner_school": "Baldwin Wallace",
    "loser": "Jim Ellis",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 290,
    "winner": "Steve Fraser",
    "winner_school": "Michigan",
    "loser": "Tom Flanagan",
    "loser_school": "Chattanooga",
    "result": "Fall 5:16"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 291,
    "winner": "Rory Needs",
    "winner_school": "Brigham Young",
    "loser": "Rick Drury",
    "loser_school": "Clemson",
    "result": "Fall 3:25"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 292,
    "winner": "Bill Teutsch",
    "winner_school": "Florida",
    "loser": "Jim Kleinhans",
    "loser_school": "Wisconsin",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Charles Gadson",
    "winner_school": "Iowa State",
    "loser": "Greg Stevens",
    "loser_school": "Iowa",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Mark Lieberman",
    "winner_school": "Lehigh",
    "loser": "Keith Ely",
    "loser_school": "Princeton",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Eric Wais",
    "winner_school": "Oklahoma State",
    "loser": "Mark Hattendorf",
    "loser_school": "SIU-Edwardsville",
    "result": "Fall 4:38"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Don Shuler",
    "winner_school": "Arizona State",
    "loser": "Eric Moll",
    "loser_school": "Louisiana State",
    "result": "MD 12-3"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "Greg Stevens",
    "winner_school": "Iowa",
    "loser": "Paul Petrella",
    "loser_school": "Baldwin Wallace",
    "result": "Dec 2-0"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Steve Fraser",
    "winner_school": "Michigan",
    "loser": "Keith Ely",
    "loser_school": "Princeton",
    "result": "Dec 6-1"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "Mark Hattendorf",
    "winner_school": "SIU-Edwardsville",
    "loser": "Rory Needs",
    "loser_school": "Brigham Young",
    "result": "Fall 6:44 SV"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Bill Teutsch",
    "winner_school": "Florida",
    "loser": "Eric Moll",
    "loser_school": "Louisiana State",
    "result": "Dec 6-1"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 435,
    "winner": "Steve Fraser",
    "winner_school": "Michigan",
    "loser": "Greg Stevens",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 436,
    "winner": "Bill Teutsch",
    "winner_school": "Florida",
    "loser": "Mark Hattendorf",
    "loser_school": "SIU-Edwardsville",
    "result": "MD 10-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Mark Lieberman",
    "winner_school": "Lehigh",
    "loser": "Charles Gadson",
    "loser_school": "Iowa State",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Eric Wais",
    "winner_school": "Oklahoma State",
    "loser": "Don Shuler",
    "loser_school": "Arizona State",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Don Shuler",
    "winner_school": "Arizona State",
    "loser": "Steve Fraser",
    "loser_school": "Michigan",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Charles Gadson",
    "winner_school": "Iowa State",
    "loser": "Bill Teutsch",
    "loser_school": "Florida",
    "result": "Dec 4-1"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Bill Teutsch",
    "winner_school": "Florida",
    "loser": "Steve Fraser",
    "loser_school": "Michigan",
    "result": "Fall 3:36"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Charles Gadson",
    "winner_school": "Iowa State",
    "loser": "Don Shuler",
    "loser_school": "Arizona State",
    "result": "Dec 9-8"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Mark Lieberman",
    "winner_school": "Lehigh",
    "loser": "Eric Wais",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-1"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 9,
    "winner": "Bill Bailey",
    "winner_school": "Pittsburgh",
    "loser": "Pete Houghtailing",
    "loser_school": "Kent State",
    "result": "Dec 11-4"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 1009,
    "winner": "Kelly Wilson",
    "winner_school": "Wyoming",
    "loser": "Bob McNally",
    "loser_school": "New Hampshire",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Kirk Myers",
    "winner_school": "Northern Iowa",
    "loser": "Al Marzano",
    "loser_school": "Northwestern",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "George Mink",
    "winner_school": "Nebraska",
    "loser": "Mark Miller",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Scott Morton",
    "loser_school": "Montana",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Don Brown",
    "winner_school": "Oregon",
    "loser": "Sam Sallitt",
    "loser_school": "Penn State",
    "result": "Fall 1:55"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Brian Gaffney",
    "winner_school": "Florida",
    "loser": "Carmel Morina",
    "loser_school": "Temple",
    "result": "Fall 1:56"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Frank Santana",
    "winner_school": "Iowa State",
    "loser": "Duane Harris",
    "loser_school": "San Jose State",
    "result": "Fall 1:30"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Bill Bailey",
    "winner_school": "Pittsburgh",
    "loser": "Jermiah Gagnon",
    "loser_school": "Marshall",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Robin Ayres",
    "winner_school": "Eastern Illinois",
    "loser": "Greg Larson",
    "loser_school": "Delaware",
    "result": "Fall 3:13"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Eric Woolsey",
    "winner_school": "Humboldt State",
    "loser": "Kelly Wilson",
    "loser_school": "Wyoming",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Ron Jeidy",
    "winner_school": "Wisconsin",
    "loser": "Fred Bohna",
    "loser_school": "UCLA",
    "result": "Dec 15-9"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Dan Severn",
    "winner_school": "Arizona State",
    "loser": "Bud Palmer",
    "loser_school": "Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Steve Day",
    "winner_school": "Illinois State",
    "loser": "Billy King",
    "loser_school": "Alabama",
    "result": "Fall 4:51"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Joe Lidowski",
    "winner_school": "NC State",
    "loser": "Dave Gregrow",
    "loser_school": "Wilkes",
    "result": "Dec 16-9"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Brian Thomas",
    "loser_school": "Ball State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Gene Wais",
    "winner_school": "Cal Poly",
    "loser": "Jim Graham",
    "loser_school": "Illinois",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Daryl Monasmith",
    "winner_school": "Oklahoma State",
    "loser": "Aurel Balaianu",
    "loser_school": "Hofstra",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Kirk Myers",
    "winner_school": "Northern Iowa",
    "loser": "George Mink",
    "loser_school": "Nebraska",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Don Brown",
    "loser_school": "Oregon",
    "result": "Fall 7:10"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Frank Santana",
    "winner_school": "Iowa State",
    "loser": "Brian Gaffney",
    "loser_school": "Florida",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Bill Bailey",
    "winner_school": "Pittsburgh",
    "loser": "Robin Ayres",
    "loser_school": "Eastern Illinois",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Ron Jeidy",
    "winner_school": "Wisconsin",
    "loser": "Eric Woolsey",
    "loser_school": "Humboldt State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Dan Severn",
    "winner_school": "Arizona State",
    "loser": "Steve Day",
    "loser_school": "Illinois State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Joe Lidowski",
    "loser_school": "NC State",
    "result": "Fall 5:43"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Daryl Monasmith",
    "winner_school": "Oklahoma State",
    "loser": "Gene Wais",
    "loser_school": "Cal Poly",
    "result": "MD 27-8"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 293,
    "winner": "George Mink",
    "winner_school": "Nebraska",
    "loser": "Al Marzano",
    "loser_school": "Northwestern",
    "result": "MD 11-3"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 294,
    "winner": "Brian Gaffney",
    "winner_school": "Florida",
    "loser": "Duane Harris",
    "loser_school": "San Jose State",
    "result": "Fall 5:46"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 295,
    "winner": "Fred Bohna",
    "winner_school": "UCLA",
    "loser": "Eric Woolsey",
    "loser_school": "Humboldt State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 296,
    "winner": "Aurel Balaianu",
    "winner_school": "Hofstra",
    "loser": "Gene Wais",
    "loser_school": "Cal Poly",
    "result": "MD 11-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Kirk Myers",
    "winner_school": "Northern Iowa",
    "loser": "Howard Harris",
    "loser_school": "Oregon State",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Frank Santana",
    "winner_school": "Iowa State",
    "loser": "Bill Bailey",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Ron Jeidy",
    "winner_school": "Wisconsin",
    "loser": "Dan Severn",
    "loser_school": "Arizona State",
    "result": "Dec 11-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Daryl Monasmith",
    "winner_school": "Oklahoma State",
    "loser": "Mike Brown",
    "loser_school": "Lehigh",
    "result": "Dec 8-7"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "George Mink",
    "loser_school": "Nebraska",
    "result": "Fall 2:13"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "Bill Bailey",
    "winner_school": "Pittsburgh",
    "loser": "Brian Gaffney",
    "loser_school": "Florida",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Fred Bohna",
    "winner_school": "UCLA",
    "loser": "Dan Severn",
    "loser_school": "Arizona State",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Aurel Balaianu",
    "loser_school": "Hofstra",
    "result": "Fall 4:46"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 437,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Bill Bailey",
    "loser_school": "Pittsburgh",
    "result": "MD 12-2"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 438,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Fred Bohna",
    "loser_school": "UCLA",
    "result": "MD 13-3"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Frank Santana",
    "winner_school": "Iowa State",
    "loser": "Kirk Myers",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Ron Jeidy",
    "winner_school": "Wisconsin",
    "loser": "Daryl Monasmith",
    "loser_school": "Oklahoma State",
    "result": "MD 16-6"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Daryl Monasmith",
    "winner_school": "Oklahoma State",
    "loser": "Howard Harris",
    "loser_school": "Oregon State",
    "result": "Dec 8-5"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Kirk Myers",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Howard Harris",
    "winner_school": "Oregon State",
    "loser": "Kirk Myers",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-6"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Mike Brown",
    "winner_school": "Lehigh",
    "loser": "Daryl Monasmith",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Ron Jeidy",
    "winner_school": "Wisconsin",
    "loser": "Frank Santana",
    "loser_school": "Iowa State",
    "result": "DEF"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 10,
    "winner": "Jeff Blatnick",
    "winner_school": "Springfield",
    "loser": "James Mitchell",
    "loser_school": "Arizona State",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 155,
    "winner": "Bob Golic",
    "winner_school": "Notre Dame",
    "loser": "Tom Waldon",
    "loser_school": "Iowa State",
    "result": "Fall 1:44"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 156,
    "winner": "Barry Bennett",
    "winner_school": "Concordia MN",
    "loser": "Mike Engwall",
    "loser_school": "Arizona",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 157,
    "winner": "Mark Stepanovich",
    "winner_school": "Pittsburgh",
    "loser": "George Atiyeh",
    "loser_school": "Louisiana State",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Jerry Anderson",
    "winner_school": "Drake",
    "loser": "Nick Mygas",
    "loser_school": "Navy",
    "result": "Fall 7:43"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 159,
    "winner": "Steve Bennett",
    "winner_school": "Michigan",
    "loser": "D.T. Joyner",
    "loser_school": "East Carolina",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 160,
    "winner": "Mitch Hull",
    "winner_school": "Wisconsin",
    "loser": "Mel Sharp",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 161,
    "winner": "Jeff Blatnick",
    "winner_school": "Springfield",
    "loser": "George Moskowitz",
    "loser_school": "California-Berkeley",
    "result": "Fall 2:57"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Jimmy Jackson",
    "winner_school": "Oklahoma State",
    "loser": "Ralph Zigner",
    "loser_school": "Chattanooga",
    "result": "Fall 1:21"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Jesse Ponce",
    "winner_school": "Idaho State",
    "loser": "John Allen",
    "loser_school": "Massachusetts",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 164,
    "winner": "Harold Smith",
    "winner_school": "Kentucky",
    "loser": "Ralph Kuehn",
    "loser_school": "San Jose State",
    "result": "Fall 0:38"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 165,
    "winner": "Gary Peterson",
    "winner_school": "Brigham Young",
    "loser": "Jerry Fultz",
    "loser_school": "Ohio",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 166,
    "winner": "Jeff Gilman",
    "winner_school": "Missouri",
    "loser": "Jim Becker",
    "loser_school": "Minnesota",
    "result": "Fall 3:41"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "John Bowlsby",
    "winner_school": "Iowa",
    "loser": "Bob Tunstall",
    "loser_school": "Maryland",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 168,
    "winner": "Tim Payne",
    "winner_school": "Cleveland State",
    "loser": "Mike Rotunda",
    "loser_school": "Syracuse",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 169,
    "winner": "John Sefter",
    "winner_school": "Princeton",
    "loser": "Mike Garrison",
    "loser_school": "Washington",
    "result": "Fall 4:58"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 170,
    "winner": "David Jack",
    "winner_school": "Cal Poly",
    "loser": "Dave Pletcher",
    "loser_school": "Lafayette",
    "result": "Fall 2:49"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Bob Golic",
    "winner_school": "Notre Dame",
    "loser": "Barry Bennett",
    "loser_school": "Concordia MN",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Jerry Anderson",
    "winner_school": "Drake",
    "loser": "Mark Stepanovich",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Mitch Hull",
    "winner_school": "Wisconsin",
    "loser": "Steve Bennett",
    "loser_school": "Michigan",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Jimmy Jackson",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Blatnick",
    "loser_school": "Springfield",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Harold Smith",
    "winner_school": "Kentucky",
    "loser": "Jesse Ponce",
    "loser_school": "Idaho State",
    "result": "Fall 6:07"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Gary Peterson",
    "winner_school": "Brigham Young",
    "loser": "Jeff Gilman",
    "loser_school": "Missouri",
    "result": "Fall 6:02"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "John Bowlsby",
    "winner_school": "Iowa",
    "loser": "Tim Payne",
    "loser_school": "Cleveland State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "John Sefter",
    "winner_school": "Princeton",
    "loser": "David Jack",
    "loser_school": "Cal Poly",
    "result": "Dec 5-0"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 297,
    "winner": "Barry Bennett",
    "winner_school": "Concordia MN",
    "loser": "Tom Waldon",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 298,
    "winner": "Jeff Blatnick",
    "winner_school": "Springfield",
    "loser": "Ralph Zigner",
    "loser_school": "Chattanooga",
    "result": "Fall 3:48"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 299,
    "winner": "Jerry Fultz",
    "winner_school": "Ohio",
    "loser": "Jeff Gilman",
    "loser_school": "Missouri",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 300,
    "winner": "David Jack",
    "winner_school": "Cal Poly",
    "loser": "Mike Garrison",
    "loser_school": "Washington",
    "result": "Fall 1:50"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Bob Golic",
    "winner_school": "Notre Dame",
    "loser": "Jerry Anderson",
    "loser_school": "Drake",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Jimmy Jackson",
    "winner_school": "Oklahoma State",
    "loser": "Mitch Hull",
    "loser_school": "Wisconsin",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Gary Peterson",
    "winner_school": "Brigham Young",
    "loser": "Harold Smith",
    "loser_school": "Kentucky",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "John Sefter",
    "winner_school": "Princeton",
    "loser": "John Bowlsby",
    "loser_school": "Iowa",
    "result": "Dec 6-0"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 417,
    "winner": "Jerry Anderson",
    "winner_school": "Drake",
    "loser": "Barry Bennett",
    "loser_school": "Concordia MN",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 418,
    "winner": "Jeff Blatnick",
    "winner_school": "Springfield",
    "loser": "Mitch Hull",
    "loser_school": "Wisconsin",
    "result": "Dec 3-1"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 419,
    "winner": "Harold Smith",
    "winner_school": "Kentucky",
    "loser": "Jerry Fultz",
    "loser_school": "Ohio",
    "result": "Fall 1:59"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 420,
    "winner": "John Bowlsby",
    "winner_school": "Iowa",
    "loser": "David Jack",
    "loser_school": "Cal Poly",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 439,
    "winner": "Jeff Blatnick",
    "winner_school": "Springfield",
    "loser": "Jerry Anderson",
    "loser_school": "Drake",
    "result": "MD 9-0"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 440,
    "winner": "John Bowlsby",
    "winner_school": "Iowa",
    "loser": "Harold Smith",
    "loser_school": "Kentucky",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Jimmy Jackson",
    "winner_school": "Oklahoma State",
    "loser": "Bob Golic",
    "loser_school": "Notre Dame",
    "result": "Dec 11-5"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "John Sefter",
    "winner_school": "Princeton",
    "loser": "Gary Peterson",
    "loser_school": "Brigham Young",
    "result": "Dec 10-6"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 499,
    "winner": "Gary Peterson",
    "winner_school": "Brigham Young",
    "loser": "Jeff Blatnick",
    "loser_school": "Springfield",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 500,
    "winner": "Bob Golic",
    "winner_school": "Notre Dame",
    "loser": "John Bowlsby",
    "loser_school": "Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "John Bowlsby",
    "winner_school": "Iowa",
    "loser": "Jeff Blatnick",
    "loser_school": "Springfield",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Bob Golic",
    "winner_school": "Notre Dame",
    "loser": "Gary Peterson",
    "loser_school": "Brigham Young",
    "result": "Fall 5:48"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Jimmy Jackson",
    "winner_school": "Oklahoma State",
    "loser": "John Sefter",
    "loser_school": "Princeton",
    "result": "Fall 1:12"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
