// 1975 NCAA Division I Wrestling Championships (3/13/1975 to 3/15/1975 at Princeton). Weight classes 118-275. Consolation: SEMIFINALIST WRESTLEBACK (rounds SfConsR1-R4).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1975 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1975-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Jim Blair",
    "winner_school": "East Carolina",
    "loser": "Billy Martin",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-5"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1001,
    "winner": "Mark Costello",
    "winner_school": "Navy",
    "loser": "Jim Bissell",
    "loser_school": "Michigan State",
    "result": "Dec 9-4"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 2001,
    "winner": "Pete Morelli",
    "winner_school": "Clarion",
    "loser": "Bill Murphy",
    "loser_school": "Weber State",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 3001,
    "winner": "Nick Gallo",
    "winner_school": "Hofstra",
    "loser": "Ralph Davis",
    "loser_school": "Oregon",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Shawn Garel",
    "winner_school": "Oklahoma",
    "loser": "Mark Costello",
    "loser_school": "Navy",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Eric Waters",
    "winner_school": "Penn",
    "loser": "John Price",
    "loser_school": "Utah State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Mark DiGirolamo",
    "winner_school": "Cal Poly",
    "loser": "Steve Breece",
    "loser_school": "North Carolina",
    "result": "MD 22-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Pete Morelli",
    "winner_school": "Clarion",
    "loser": "Andy Daniels",
    "loser_school": "Ohio",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Steve Stalnaker",
    "winner_school": "Tennessee",
    "loser": "Steve Pivac",
    "loser_school": "Colorado State",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Jack Spates",
    "winner_school": "Slippery Rock",
    "loser": "Pat Plourd",
    "loser_school": "Oregon State",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Kevin Roesch",
    "winner_school": "Princeton",
    "loser": "Garrett Headley",
    "loser_school": "Kentucky",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Myron Shapiro",
    "loser_school": "Toledo",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Nabil Guketlov",
    "winner_school": "Montclair State",
    "loser": "Wayne Packer",
    "loser_school": "Penn State",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Jeff Lambert",
    "winner_school": "Boston University",
    "loser": "Paul Schonauer",
    "loser_school": "Miami Ohio",
    "result": "Fall 3:38"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Mike McArthur",
    "winner_school": "Minnesota",
    "loser": "Jim Blair",
    "loser_school": "East Carolina",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Rich Molina",
    "winner_school": "CSU Bakersfield",
    "loser": "Don Meeker",
    "loser_school": "Wyoming",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Jim Brown",
    "winner_school": "Michigan",
    "loser": "Dave McLain",
    "loser_school": "Washington",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Erv Gonzalez",
    "winner_school": "Northern Colorado",
    "loser": "Jim Haines",
    "loser_school": "Wisconsin",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Nick Gallo",
    "winner_school": "Hofstra",
    "loser": "Ed Knecht",
    "loser_school": "Northern Arizona",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Lance Leonhardt",
    "winner_school": "Lehigh",
    "loser": "Bruce Geier",
    "loser_school": "Utah",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Shawn Garel",
    "winner_school": "Oklahoma",
    "loser": "Eric Waters",
    "loser_school": "Penn",
    "result": "M FOR"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Mark DiGirolamo",
    "winner_school": "Cal Poly",
    "loser": "Pete Morelli",
    "loser_school": "Clarion",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Jack Spates",
    "winner_school": "Slippery Rock",
    "loser": "Steve Stalnaker",
    "loser_school": "Tennessee",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Kevin Roesch",
    "loser_school": "Princeton",
    "result": "MD 19-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Nabil Guketlov",
    "winner_school": "Montclair State",
    "loser": "Jeff Lambert",
    "loser_school": "Boston University",
    "result": "MD 26-9"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Mike McArthur",
    "winner_school": "Minnesota",
    "loser": "Rich Molina",
    "loser_school": "CSU Bakersfield",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Jim Brown",
    "winner_school": "Michigan",
    "loser": "Erv Gonzalez",
    "loser_school": "Northern Colorado",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Nick Gallo",
    "winner_school": "Hofstra",
    "loser": "Lance Leonhardt",
    "loser_school": "Lehigh",
    "result": "Fall 6:05"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Mark Costello",
    "winner_school": "Navy",
    "loser": "Eric Waters",
    "loser_school": "Penn",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Myron Shapiro",
    "winner_school": "Toledo",
    "loser": "Kevin Roesch",
    "loser_school": "Princeton",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Wayne Packer",
    "winner_school": "Penn State",
    "loser": "Jeff Lambert",
    "loser_school": "Boston University",
    "result": "Dec 8-1 TB"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Erv Gonzalez",
    "winner_school": "Northern Colorado",
    "loser": "Dave McLain",
    "loser_school": "Washington",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Shawn Garel",
    "winner_school": "Oklahoma",
    "loser": "Mark DiGirolamo",
    "loser_school": "Cal Poly",
    "result": "MD 15-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "Mike Land",
    "winner_school": "Iowa State",
    "loser": "Jack Spates",
    "loser_school": "Slippery Rock",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Nabil Guketlov",
    "winner_school": "Montclair State",
    "loser": "Mike McArthur",
    "loser_school": "Minnesota",
    "result": "Dec 11-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Jim Brown",
    "winner_school": "Michigan",
    "loser": "Nick Gallo",
    "loser_school": "Hofstra",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Mark DiGirolamo",
    "winner_school": "Cal Poly",
    "loser": "Mark Costello",
    "loser_school": "Navy",
    "result": "Dec 8-7"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Myron Shapiro",
    "winner_school": "Toledo",
    "loser": "Jack Spates",
    "loser_school": "Slippery Rock",
    "result": "Dec 7-3"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Wayne Packer",
    "winner_school": "Penn State",
    "loser": "Mike McArthur",
    "loser_school": "Minnesota",
    "result": "M FOR"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Nick Gallo",
    "winner_school": "Hofstra",
    "loser": "Erv Gonzalez",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Myron Shapiro",
    "winner_school": "Toledo",
    "loser": "Mark DiGirolamo",
    "loser_school": "Cal Poly",
    "result": "MD 11-3"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Nick Gallo",
    "winner_school": "Hofstra",
    "loser": "Wayne Packer",
    "loser_school": "Penn State",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Shawn Garel",
    "winner_school": "Oklahoma",
    "loser": "Mike Land",
    "loser_school": "Iowa State",
    "result": "Dec 8-6"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Jim Brown",
    "winner_school": "Michigan",
    "loser": "Nabil Guketlov",
    "loser_school": "Montclair State",
    "result": "Dec 7-0"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Myron Shapiro",
    "winner_school": "Toledo",
    "loser": "Nabil Guketlov",
    "loser_school": "Montclair State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Nick Gallo",
    "winner_school": "Hofstra",
    "loser": "Mike Land",
    "loser_school": "Iowa State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Nabil Guketlov",
    "winner_school": "Montclair State",
    "loser": "Mike Land",
    "loser_school": "Iowa State",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Myron Shapiro",
    "winner_school": "Toledo",
    "loser": "Nick Gallo",
    "loser_school": "Hofstra",
    "result": "MD 17-7"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Shawn Garel",
    "winner_school": "Oklahoma",
    "loser": "Jim Brown",
    "loser_school": "Michigan",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Chico Lutes",
    "winner_school": "Indiana State",
    "loser": "Lonnie Parker",
    "loser_school": "Northern Illinois",
    "result": "Fall 2:28"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "John Powell",
    "winner_school": "Oklahoma State",
    "loser": "Mike Beck",
    "loser_school": "Navy",
    "result": "Dec 5-2"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2002,
    "winner": "Joe Corso",
    "winner_school": "Purdue",
    "loser": "Gary Harnisch",
    "loser_school": "Nebraska",
    "result": "Fall 7:07"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 3002,
    "winner": "Joe Kittel",
    "winner_school": "Oregon State",
    "loser": "Mike Dalheimer",
    "loser_school": "St. Cloud State",
    "result": "Dec 11-4"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 4002,
    "winner": "Bernie Kleiman",
    "winner_school": "Portland State",
    "loser": "Bill Racich",
    "loser_school": "West Chester",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 5002,
    "winner": "Bob Antonacci",
    "winner_school": "Iowa State",
    "loser": "Denny Monroe",
    "loser_school": "East Carolina",
    "result": "Fall 4:46"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 6002,
    "winner": "Jack Reinwand",
    "winner_school": "Wisconsin",
    "loser": "Rick Torres",
    "loser_school": "Cal Poly",
    "result": "Dec 10-5"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 7002,
    "winner": "Tom Turnbull",
    "winner_school": "Clarion",
    "loser": "Marty Hutsell",
    "loser_school": "Indiana",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Bob Antonacci",
    "winner_school": "Iowa State",
    "loser": "Joe Sade",
    "loser_school": "Oregon",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Bob Dalton",
    "winner_school": "Miami Ohio",
    "loser": "Dave Wendall",
    "loser_school": "Virginia",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Paul Fehlberg",
    "winner_school": "Brigham Young",
    "loser": "Marty Lynn",
    "loser_school": "Lehigh",
    "result": "MD 17-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Toshi Oonishi",
    "winner_school": "Washington",
    "loser": "George Bryant",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Kenny Nelson",
    "winner_school": "Oklahoma",
    "loser": "Bernie Kleiman",
    "loser_school": "Portland State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Pat Milkovich",
    "winner_school": "Michigan State",
    "loser": "Craig Helmuth",
    "loser_school": "Gettysburg",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Scott Pucino",
    "winner_school": "Rhode Island",
    "loser": "Joe Kittel",
    "loser_school": "Oregon State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "John Powell",
    "winner_school": "Oklahoma State",
    "loser": "Phil Bayouth",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Jack Reinwand",
    "winner_school": "Wisconsin",
    "loser": "Mark Honess",
    "loser_school": "Slippery Rock",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Jim Hicks",
    "winner_school": "William & Mary",
    "loser": "Dave Hopkins",
    "loser_school": "Ohio",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Jimmy Carr",
    "winner_school": "Kentucky",
    "loser": "Greg Filipos",
    "loser_school": "Maryland",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Tom Turnbull",
    "winner_school": "Clarion",
    "loser": "Jack Eustice",
    "loser_school": "Minnesota State-Mankato",
    "result": "Fall 4:14"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "John Fritz",
    "winner_school": "Penn State",
    "loser": "Alex Gonzales",
    "loser_school": "San Francisco State",
    "result": "Fall 3:05"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Mike Isom",
    "winner_school": "Weber State",
    "loser": "Jim Mendoza",
    "loser_school": "UCLA",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Joe Corso",
    "winner_school": "Purdue",
    "loser": "Randy Schutte",
    "loser_school": "Princeton",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Bob Anderson",
    "winner_school": "Colorado State",
    "loser": "Chico Lutes",
    "loser_school": "Indiana State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 252,
    "winner": "Mark Honess",
    "winner_school": "Slippery Rock",
    "loser": "Rick Torres",
    "loser_school": "Cal Poly",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Bob Antonacci",
    "winner_school": "Iowa State",
    "loser": "Bob Dalton",
    "loser_school": "Miami Ohio",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Toshi Oonishi",
    "winner_school": "Washington",
    "loser": "Paul Fehlberg",
    "loser_school": "Brigham Young",
    "result": "Fall 3:40"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Pat Milkovich",
    "winner_school": "Michigan State",
    "loser": "Kenny Nelson",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Scott Pucino",
    "winner_school": "Rhode Island",
    "loser": "John Powell",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Jack Reinwand",
    "winner_school": "Wisconsin",
    "loser": "Jim Hicks",
    "loser_school": "William & Mary",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Jimmy Carr",
    "winner_school": "Kentucky",
    "loser": "Tom Turnbull",
    "loser_school": "Clarion",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "John Fritz",
    "winner_school": "Penn State",
    "loser": "Mike Isom",
    "loser_school": "Weber State",
    "result": "Fall 0:58"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Joe Corso",
    "winner_school": "Purdue",
    "loser": "Bob Anderson",
    "loser_school": "Colorado State",
    "result": "Fall 7:50"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 265,
    "winner": "George Bryant",
    "winner_school": "Pittsburgh",
    "loser": "Paul Fehlberg",
    "loser_school": "Brigham Young",
    "result": "Dec 8-7"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 266,
    "winner": "Kenny Nelson",
    "winner_school": "Oklahoma",
    "loser": "Craig Helmuth",
    "loser_school": "Gettysburg",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 267,
    "winner": "Mark Honess",
    "winner_school": "Slippery Rock",
    "loser": "Jim Hicks",
    "loser_school": "William & Mary",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 268,
    "winner": "Alex Gonzales",
    "winner_school": "San Francisco State",
    "loser": "Mike Isom",
    "loser_school": "Weber State",
    "result": "Fall 3:09"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Toshi Oonishi",
    "winner_school": "Washington",
    "loser": "Bob Antonacci",
    "loser_school": "Iowa State",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Pat Milkovich",
    "winner_school": "Michigan State",
    "loser": "Scott Pucino",
    "loser_school": "Rhode Island",
    "result": "MD 14-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Jack Reinwand",
    "winner_school": "Wisconsin",
    "loser": "Jimmy Carr",
    "loser_school": "Kentucky",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "John Fritz",
    "winner_school": "Penn State",
    "loser": "Joe Corso",
    "loser_school": "Purdue",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Bob Antonacci",
    "winner_school": "Iowa State",
    "loser": "George Bryant",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Kenny Nelson",
    "winner_school": "Oklahoma",
    "loser": "Scott Pucino",
    "loser_school": "Rhode Island",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Jimmy Carr",
    "winner_school": "Kentucky",
    "loser": "Mark Honess",
    "loser_school": "Slippery Rock",
    "result": "Fall 3:28"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Joe Corso",
    "winner_school": "Purdue",
    "loser": "Alex Gonzales",
    "loser_school": "San Francisco State",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 423,
    "winner": "Bob Antonacci",
    "winner_school": "Iowa State",
    "loser": "Kenny Nelson",
    "loser_school": "Oklahoma",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 424,
    "winner": "Joe Corso",
    "winner_school": "Purdue",
    "loser": "Jimmy Carr",
    "loser_school": "Kentucky",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Pat Milkovich",
    "winner_school": "Michigan State",
    "loser": "Toshi Oonishi",
    "loser_school": "Washington",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "John Fritz",
    "winner_school": "Penn State",
    "loser": "Jack Reinwand",
    "loser_school": "Wisconsin",
    "result": "Dec 10-3"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "Jack Reinwand",
    "winner_school": "Wisconsin",
    "loser": "Bob Antonacci",
    "loser_school": "Iowa State",
    "result": "MD 12-4"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Joe Corso",
    "winner_school": "Purdue",
    "loser": "Toshi Oonishi",
    "loser_school": "Washington",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Bob Antonacci",
    "winner_school": "Iowa State",
    "loser": "Toshi Oonishi",
    "loser_school": "Washington",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "Joe Corso",
    "winner_school": "Purdue",
    "loser": "Jack Reinwand",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "John Fritz",
    "winner_school": "Penn State",
    "loser": "Pat Milkovich",
    "loser_school": "Michigan State",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Mark Belknap",
    "winner_school": "William & Mary",
    "loser": "Glen Mitchell",
    "loser_school": "Ohio",
    "result": "Fall 4:33"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Mike McGonigal",
    "winner_school": "Virginia",
    "loser": "Tony Jennings",
    "loser_school": "Nebraska",
    "result": "Dec 7-6"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 2003,
    "winner": "Don Rohn",
    "winner_school": "Clarion",
    "loser": "Vince Tundo",
    "loser_school": "Montclair State",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3003,
    "winner": "Mike Frick",
    "winner_school": "Lehigh",
    "loser": "Tim Jefferies",
    "loser_school": "Arizona State",
    "result": "Dec 14-8"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 4003,
    "winner": "Ron Boucher",
    "winner_school": "Oregon State",
    "loser": "Tom Bauer",
    "loser_school": "Navy",
    "result": "MD 16-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Steve Barrett",
    "winner_school": "Oklahoma State",
    "loser": "Brad McCrory",
    "loser_school": "Michigan",
    "result": "Fall 2:41"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Dennis Brighton",
    "winner_school": "Michigan State",
    "loser": "Dave Martin",
    "loser_school": "Indiana State",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Mark Hawald",
    "winner_school": "John Carroll",
    "loser": "Mark Sanderson",
    "loser_school": "Brigham Young",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Mike Frick",
    "winner_school": "Lehigh",
    "loser": "Sam Komar",
    "loser_school": "Indiana",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Jim Young",
    "winner_school": "Buffalo",
    "loser": "Randy Nielsen",
    "loser_school": "Iowa State",
    "result": "Dec 14-8"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Mark Belknap",
    "winner_school": "William & Mary",
    "loser": "Carl Slocum",
    "loser_school": "Northern Colorado",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Mike McGonigal",
    "winner_school": "Virginia",
    "loser": "Steve Dick",
    "loser_school": "San Jose State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Brad Jacot",
    "winner_school": "Washington",
    "loser": "Jeff Condon",
    "loser_school": "Slippery Rock",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Brian Beatson",
    "winner_school": "Oklahoma",
    "loser": "Milan Yakovich",
    "loser_school": "Kent State",
    "result": "MD 17-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Lloyd Ford",
    "winner_school": "Colorado State",
    "loser": "Larry Pruitt",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Steve Pilcher",
    "winner_school": "UCLA",
    "loser": "Don Rohn",
    "loser_school": "Clarion",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Sev Popolizio",
    "winner_school": "Boston University",
    "loser": "John Schutte",
    "loser_school": "Louisiana State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Jim Miller",
    "winner_school": "Northern Iowa",
    "loser": "Shuichi Shoji",
    "loser_school": "Oregon",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Steve Hunte",
    "winner_school": "Iowa",
    "loser": "Jack Schoonover",
    "loser_school": "Army",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Kurt Mock",
    "winner_school": "Kentucky",
    "loser": "Ron Boucher",
    "loser_school": "Oregon State",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Rande Stottlemyer",
    "winner_school": "Pittsburgh",
    "loser": "Pat Quinlan",
    "loser_school": "Central Michigan",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "134",
    "bout": 253,
    "winner": "Carl Slocum",
    "winner_school": "Northern Colorado",
    "loser": "Glen Mitchell",
    "loser_school": "Ohio",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "134",
    "bout": 1253,
    "winner": "Tim Jefferies",
    "winner_school": "Arizona State",
    "loser": "Sam Komar",
    "loser_school": "Indiana",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Steve Barrett",
    "winner_school": "Oklahoma State",
    "loser": "Dennis Brighton",
    "loser_school": "Michigan State",
    "result": "MD 17-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Mike Frick",
    "winner_school": "Lehigh",
    "loser": "Mark Hawald",
    "loser_school": "John Carroll",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Mark Belknap",
    "winner_school": "William & Mary",
    "loser": "Jim Young",
    "loser_school": "Buffalo",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Brad Jacot",
    "winner_school": "Washington",
    "loser": "Mike McGonigal",
    "loser_school": "Virginia",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Brian Beatson",
    "winner_school": "Oklahoma",
    "loser": "Lloyd Ford",
    "loser_school": "Colorado State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Sev Popolizio",
    "winner_school": "Boston University",
    "loser": "Steve Pilcher",
    "loser_school": "UCLA",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Jim Miller",
    "winner_school": "Northern Iowa",
    "loser": "Steve Hunte",
    "loser_school": "Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Rande Stottlemyer",
    "winner_school": "Pittsburgh",
    "loser": "Kurt Mock",
    "loser_school": "Kentucky",
    "result": "MD 14-5"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 269,
    "winner": "Mark Hawald",
    "winner_school": "John Carroll",
    "loser": "Tim Jefferies",
    "loser_school": "Arizona State",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 270,
    "winner": "Jim Young",
    "winner_school": "Buffalo",
    "loser": "Carl Slocum",
    "loser_school": "Northern Colorado",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 271,
    "winner": "Lloyd Ford",
    "winner_school": "Colorado State",
    "loser": "Milan Yakovich",
    "loser_school": "Kent State",
    "result": "MD 14-2"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 272,
    "winner": "Shuichi Shoji",
    "winner_school": "Oregon",
    "loser": "Steve Hunte",
    "loser_school": "Iowa",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Mike Frick",
    "winner_school": "Lehigh",
    "loser": "Steve Barrett",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Mark Belknap",
    "winner_school": "William & Mary",
    "loser": "Brad Jacot",
    "loser_school": "Washington",
    "result": "Dec 9-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Brian Beatson",
    "winner_school": "Oklahoma",
    "loser": "Sev Popolizio",
    "loser_school": "Boston University",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Jim Miller",
    "winner_school": "Northern Iowa",
    "loser": "Rande Stottlemyer",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-7"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "Steve Barrett",
    "winner_school": "Oklahoma State",
    "loser": "Mark Hawald",
    "loser_school": "John Carroll",
    "result": "Dec 9-3"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Brad Jacot",
    "winner_school": "Washington",
    "loser": "Jim Young",
    "loser_school": "Buffalo",
    "result": "Dec 6-1"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Lloyd Ford",
    "winner_school": "Colorado State",
    "loser": "Sev Popolizio",
    "loser_school": "Boston University",
    "result": "Dec 3-1"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Rande Stottlemyer",
    "winner_school": "Pittsburgh",
    "loser": "Shuichi Shoji",
    "loser_school": "Oregon",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 425,
    "winner": "Steve Barrett",
    "winner_school": "Oklahoma State",
    "loser": "Brad Jacot",
    "loser_school": "Washington",
    "result": "Dec 6-5"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 426,
    "winner": "Rande Stottlemyer",
    "winner_school": "Pittsburgh",
    "loser": "Lloyd Ford",
    "loser_school": "Colorado State",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Mike Frick",
    "winner_school": "Lehigh",
    "loser": "Mark Belknap",
    "loser_school": "William & Mary",
    "result": "Dec 11-7"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Brian Beatson",
    "winner_school": "Oklahoma",
    "loser": "Jim Miller",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "Jim Miller",
    "winner_school": "Northern Iowa",
    "loser": "Steve Barrett",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Mark Belknap",
    "winner_school": "William & Mary",
    "loser": "Rande Stottlemyer",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-0"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Steve Barrett",
    "winner_school": "Oklahoma State",
    "loser": "Rande Stottlemyer",
    "loser_school": "Pittsburgh",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Mark Belknap",
    "winner_school": "William & Mary",
    "loser": "Jim Miller",
    "loser_school": "Northern Iowa",
    "result": "M FOR"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Mike Frick",
    "winner_school": "Lehigh",
    "loser": "Brian Beatson",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "John Trudgeon",
    "winner_school": "William & Mary",
    "loser": "Jeff Howell",
    "loser_school": "Boise State",
    "result": "Dec 9-7"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "Ken Snyder",
    "winner_school": "Northern Iowa",
    "loser": "Larry Johnson",
    "loser_school": "Portland State",
    "result": "Fall 3:53"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 2004,
    "winner": "John Hanshaw",
    "winner_school": "Arizona",
    "loser": "Pat McKillen",
    "loser_school": "Notre Dame",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 3004,
    "winner": "Alan Housner",
    "winner_school": "Purdue",
    "loser": "Guy Bercier",
    "loser_school": "Boston University",
    "result": "Fall 7:19"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4004,
    "winner": "Steve Sanderson",
    "winner_school": "Brigham Young",
    "loser": "Guy Reeps",
    "loser_school": "Hofstra",
    "result": "MD 17-4"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 5004,
    "winner": "Brad Smith",
    "winner_school": "Iowa",
    "loser": "Tim Vogel",
    "loser_school": "Missouri",
    "result": "Fall 6:03"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 6004,
    "winner": "Andy DiSabato",
    "winner_school": "Ohio State",
    "loser": "Tyler Campbell",
    "loser_school": "Indiana State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Alan Housner",
    "winner_school": "Purdue",
    "loser": "Bruce Randall",
    "loser_school": "Kansas State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Scott Casper",
    "winner_school": "Connecticut",
    "loser": "Dan Elliott",
    "loser_school": "Oregon State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Dennis Underkoffler",
    "winner_school": "Princeton",
    "loser": "Dan Godbehere",
    "loser_school": "Wyoming",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Dean Dixon",
    "winner_school": "Oregon",
    "loser": "Pat Sculley",
    "loser_school": "Lehigh",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Steve Sanderson",
    "winner_school": "Brigham Young",
    "loser": "John Trudgeon",
    "loser_school": "William & Mary",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Steve Randall",
    "winner_school": "Oklahoma State",
    "loser": "Gus Malavite",
    "loser_school": "Ohio",
    "result": "Fall 1:17"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Larry Reed",
    "winner_school": "Northern Colorado",
    "loser": "Andy DiSabato",
    "loser_school": "Ohio State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Jim Bennett",
    "winner_school": "Yale",
    "loser": "John Martellucci",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Ken Snyder",
    "winner_school": "Northern Iowa",
    "loser": "Gene Costello",
    "loser_school": "Slippery Rock",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Paull McNutt",
    "winner_school": "NC State",
    "loser": "Tim Granowitz",
    "loser_school": "Florida",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Rodger Warner",
    "winner_school": "Cal Poly",
    "loser": "Marco Teran",
    "loser_school": "Ball State",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Ken Krebs",
    "winner_school": "Stanford",
    "loser": "Harvey Dalton",
    "loser_school": "Western State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Andre Allen",
    "winner_school": "Northwestern",
    "loser": "Brent Jacinto",
    "loser_school": "California-Berkeley",
    "result": "Fall 1:11"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Tom Marriott",
    "winner_school": "East Carolina",
    "loser": "Brad Dodds",
    "loser_school": "North Dakota State",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Brad Smith",
    "winner_school": "Iowa",
    "loser": "Bill Korth",
    "loser_school": "Pittsburgh",
    "result": "Fall 2:47"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "John Hanshaw",
    "winner_school": "Arizona",
    "loser": "Kevin Young",
    "loser_school": "Oklahoma",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 254,
    "winner": "Bruce Randall",
    "winner_school": "Kansas State",
    "loser": "Guy Bercier",
    "loser_school": "Boston University",
    "result": "MD 10-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 1254,
    "winner": "Gene Costello",
    "winner_school": "Slippery Rock",
    "loser": "Larry Johnson",
    "loser_school": "Portland State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Alan Housner",
    "winner_school": "Purdue",
    "loser": "Scott Casper",
    "loser_school": "Connecticut",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Dean Dixon",
    "winner_school": "Oregon",
    "loser": "Dennis Underkoffler",
    "loser_school": "Princeton",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Steve Randall",
    "winner_school": "Oklahoma State",
    "loser": "Steve Sanderson",
    "loser_school": "Brigham Young",
    "result": "Fall 4:38"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Jim Bennett",
    "winner_school": "Yale",
    "loser": "Larry Reed",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Ken Snyder",
    "winner_school": "Northern Iowa",
    "loser": "Paull McNutt",
    "loser_school": "NC State",
    "result": "MD 18-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Rodger Warner",
    "winner_school": "Cal Poly",
    "loser": "Ken Krebs",
    "loser_school": "Stanford",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Andre Allen",
    "winner_school": "Northwestern",
    "loser": "Tom Marriott",
    "loser_school": "East Carolina",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Brad Smith",
    "winner_school": "Iowa",
    "loser": "John Hanshaw",
    "loser_school": "Arizona",
    "result": "Dec 2-1"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 273,
    "winner": "Scott Casper",
    "winner_school": "Connecticut",
    "loser": "Bruce Randall",
    "loser_school": "Kansas State",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 274,
    "winner": "Larry Reed",
    "winner_school": "Northern Colorado",
    "loser": "John Martellucci",
    "loser_school": "SUNY-Brockport",
    "result": "MD 10-1"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 275,
    "winner": "Gene Costello",
    "winner_school": "Slippery Rock",
    "loser": "Paull McNutt",
    "loser_school": "NC State",
    "result": "Dec 7-3"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 276,
    "winner": "Brent Jacinto",
    "winner_school": "California-Berkeley",
    "loser": "Tom Marriott",
    "loser_school": "East Carolina",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Alan Housner",
    "winner_school": "Purdue",
    "loser": "Dean Dixon",
    "loser_school": "Oregon",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Jim Bennett",
    "winner_school": "Yale",
    "loser": "Steve Randall",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Ken Snyder",
    "winner_school": "Northern Iowa",
    "loser": "Rodger Warner",
    "loser_school": "Cal Poly",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Andre Allen",
    "winner_school": "Northwestern",
    "loser": "Brad Smith",
    "loser_school": "Iowa",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Dean Dixon",
    "winner_school": "Oregon",
    "loser": "Scott Casper",
    "loser_school": "Connecticut",
    "result": "Fall 4:19"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "Steve Randall",
    "winner_school": "Oklahoma State",
    "loser": "Larry Reed",
    "loser_school": "Northern Colorado",
    "result": "MD 12-2"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "Rodger Warner",
    "winner_school": "Cal Poly",
    "loser": "Gene Costello",
    "loser_school": "Slippery Rock",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Brad Smith",
    "winner_school": "Iowa",
    "loser": "Brent Jacinto",
    "loser_school": "California-Berkeley",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 427,
    "winner": "Steve Randall",
    "winner_school": "Oklahoma State",
    "loser": "Dean Dixon",
    "loser_school": "Oregon",
    "result": "Dec 6-5"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 428,
    "winner": "Rodger Warner",
    "winner_school": "Cal Poly",
    "loser": "Brad Smith",
    "loser_school": "Iowa",
    "result": "Fall 0:40"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Jim Bennett",
    "winner_school": "Yale",
    "loser": "Alan Housner",
    "loser_school": "Purdue",
    "result": "Dec 7-6"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Andre Allen",
    "winner_school": "Northwestern",
    "loser": "Ken Snyder",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "Steve Randall",
    "winner_school": "Oklahoma State",
    "loser": "Ken Snyder",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Rodger Warner",
    "winner_school": "Cal Poly",
    "loser": "Alan Housner",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Ken Snyder",
    "winner_school": "Northern Iowa",
    "loser": "Alan Housner",
    "loser_school": "Purdue",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Rodger Warner",
    "winner_school": "Cal Poly",
    "loser": "Steve Randall",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-7"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Jim Bennett",
    "winner_school": "Yale",
    "loser": "Andre Allen",
    "loser_school": "Northwestern",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Charles Becks",
    "winner_school": "John Carroll",
    "loser": "Doug Weaver",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Jody Sloan",
    "winner_school": "Wyoming",
    "loser": "Don Meyer",
    "loser_school": "West Chester",
    "result": "Dec 4-3"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Chris Horpel",
    "winner_school": "Stanford",
    "loser": "Mett Bacharach",
    "loser_school": "Virginia",
    "result": "MD 15-5"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 3005,
    "winner": "Pete Galea",
    "winner_school": "Iowa State",
    "loser": "Bill Davis",
    "loser_school": "Clarion",
    "result": "Fall 7:26"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 4005,
    "winner": "John Althans",
    "winner_school": "Navy",
    "loser": "Steve Hitchcock",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5005,
    "winner": "Buddy Walker",
    "winner_school": "Tennessee",
    "loser": "Chris Messina",
    "loser_school": "Slippery Rock",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Paul Martin",
    "winner_school": "Oklahoma State",
    "loser": "John Althans",
    "loser_school": "Navy",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Buddy Walker",
    "winner_school": "Tennessee",
    "loser": "Dave Young",
    "loser_school": "Utah",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Roye Oliver",
    "winner_school": "Arizona State",
    "loser": "George Way",
    "loser_school": "Lock Haven",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Chris Horpel",
    "winner_school": "Stanford",
    "loser": "Steve Rodriguez",
    "loser_school": "Michigan State",
    "result": "Fall 0:51"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Randy Watts",
    "winner_school": "Bloomsburg",
    "loser": "Tom Calhoun",
    "loser_school": "Ball State",
    "result": "Fall 4:42"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Chuck Yagla",
    "winner_school": "Iowa",
    "loser": "Mark Black",
    "loser_school": "UCLA",
    "result": "Fall 7:23"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Randy Watson",
    "winner_school": "Boise State",
    "loser": "Paul Thorpe",
    "loser_school": "East Carolina",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Ken Wilson",
    "winner_school": "Syracuse",
    "loser": "Steve Whedbee",
    "loser_school": "California-Berkeley",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Doug Ziebart",
    "winner_school": "Oregon State",
    "loser": "Charles Becks",
    "loser_school": "John Carroll",
    "result": "MD 24-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Gary Martin",
    "winner_school": "Western Michigan",
    "loser": "Mike McGough",
    "loser_school": "Fresno State",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Pete Galea",
    "winner_school": "Iowa State",
    "loser": "Larry Sullivan",
    "loser_school": "Miami Ohio",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Steve Daniels",
    "winner_school": "Portland State",
    "loser": "Tony Peraza",
    "loser_school": "SUNY-Potsdam",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Lee Kemp",
    "winner_school": "Wisconsin",
    "loser": "Mike Taylor",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Doug Hassig",
    "winner_school": "Nebraska",
    "loser": "Tom Kryzak",
    "loser_school": "Boston University",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Pete Dombrowski",
    "winner_school": "Northwestern",
    "loser": "Gary Kessel",
    "loser_school": "East Stroudsburg",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Frank Peck",
    "winner_school": "Oklahoma",
    "loser": "Jody Sloan",
    "loser_school": "Wyoming",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 255,
    "winner": "Bill Davis",
    "winner_school": "Clarion",
    "loser": "Larry Sullivan",
    "loser_school": "Miami Ohio",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Paul Martin",
    "winner_school": "Oklahoma State",
    "loser": "Buddy Walker",
    "loser_school": "Tennessee",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Chris Horpel",
    "winner_school": "Stanford",
    "loser": "Roye Oliver",
    "loser_school": "Arizona State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Chuck Yagla",
    "winner_school": "Iowa",
    "loser": "Randy Watts",
    "loser_school": "Bloomsburg",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Ken Wilson",
    "winner_school": "Syracuse",
    "loser": "Randy Watson",
    "loser_school": "Boise State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Doug Ziebart",
    "winner_school": "Oregon State",
    "loser": "Gary Martin",
    "loser_school": "Western Michigan",
    "result": "MD 14-0"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Pete Galea",
    "winner_school": "Iowa State",
    "loser": "Steve Daniels",
    "loser_school": "Portland State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Lee Kemp",
    "winner_school": "Wisconsin",
    "loser": "Doug Hassig",
    "loser_school": "Nebraska",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Pete Dombrowski",
    "winner_school": "Northwestern",
    "loser": "Frank Peck",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 277,
    "winner": "John Althans",
    "winner_school": "Navy",
    "loser": "Buddy Walker",
    "loser_school": "Tennessee",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 278,
    "winner": "Randy Watts",
    "winner_school": "Bloomsburg",
    "loser": "Mark Black",
    "loser_school": "UCLA",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 279,
    "winner": "Steve Daniels",
    "winner_school": "Portland State",
    "loser": "Bill Davis",
    "loser_school": "Clarion",
    "result": "Fall 1:49"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 280,
    "winner": "Mike Taylor",
    "winner_school": "SIU-Edwardsville",
    "loser": "Doug Hassig",
    "loser_school": "Nebraska",
    "result": "Fall 5:45"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Paul Martin",
    "winner_school": "Oklahoma State",
    "loser": "Chris Horpel",
    "loser_school": "Stanford",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Chuck Yagla",
    "winner_school": "Iowa",
    "loser": "Ken Wilson",
    "loser_school": "Syracuse",
    "result": "Fall 5:53"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Pete Galea",
    "winner_school": "Iowa State",
    "loser": "Doug Ziebart",
    "loser_school": "Oregon State",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Lee Kemp",
    "winner_school": "Wisconsin",
    "loser": "Pete Dombrowski",
    "loser_school": "Northwestern",
    "result": "Dec 3-1"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Chris Horpel",
    "winner_school": "Stanford",
    "loser": "John Althans",
    "loser_school": "Navy",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Randy Watts",
    "winner_school": "Bloomsburg",
    "loser": "Ken Wilson",
    "loser_school": "Syracuse",
    "result": "Fall 1:43"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Doug Ziebart",
    "winner_school": "Oregon State",
    "loser": "Steve Daniels",
    "loser_school": "Portland State",
    "result": "MD 9-0"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Mike Taylor",
    "winner_school": "SIU-Edwardsville",
    "loser": "Pete Dombrowski",
    "loser_school": "Northwestern",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 429,
    "winner": "Randy Watts",
    "winner_school": "Bloomsburg",
    "loser": "Chris Horpel",
    "loser_school": "Stanford",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 430,
    "winner": "Doug Ziebart",
    "winner_school": "Oregon State",
    "loser": "Mike Taylor",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 9-7"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Chuck Yagla",
    "winner_school": "Iowa",
    "loser": "Paul Martin",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Lee Kemp",
    "winner_school": "Wisconsin",
    "loser": "Pete Galea",
    "loser_school": "Iowa State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "Pete Galea",
    "winner_school": "Iowa State",
    "loser": "Randy Watts",
    "loser_school": "Bloomsburg",
    "result": "MD 8-0"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Paul Martin",
    "winner_school": "Oklahoma State",
    "loser": "Doug Ziebart",
    "loser_school": "Oregon State",
    "result": "Dec 3-0"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Doug Ziebart",
    "winner_school": "Oregon State",
    "loser": "Randy Watts",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-0"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Paul Martin",
    "winner_school": "Oklahoma State",
    "loser": "Pete Galea",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Chuck Yagla",
    "winner_school": "Iowa",
    "loser": "Lee Kemp",
    "loser_school": "Wisconsin",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Tom Cavanaugh",
    "winner_school": "Cleveland State",
    "loser": "Bruce Wilson",
    "loser_school": "Toledo",
    "result": "Dec 6-1"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Dave Chandler",
    "winner_school": "Boise State",
    "loser": "Bruce Lynn",
    "loser_school": "Cal Poly",
    "result": "Fall 4:57"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Ethan Reeve",
    "winner_school": "Tennessee",
    "loser": "Jeff Savage",
    "loser_school": "Utah",
    "result": "Fall 6:56"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Dave Chandler",
    "winner_school": "Boise State",
    "loser": "Rick Peifer",
    "loser_school": "Slippery Rock",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Wally Clark",
    "winner_school": "Long Beach State",
    "loser": "Tim Shoemaker",
    "loser_school": "Ohio",
    "result": "Fall 5:23"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Mark Evenhus",
    "winner_school": "Oregon State",
    "loser": "Rick Clarke",
    "loser_school": "Dartmouth",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "John Janiak",
    "winner_school": "Syracuse",
    "loser": "Kevin Kramer",
    "loser_school": "Oregon",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Ethan Reeve",
    "winner_school": "Tennessee",
    "loser": "Dave Becker",
    "loser_school": "Penn State",
    "result": "Fall 7:22"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Larry Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Cliff Howlett",
    "loser_school": "Drake",
    "result": "Fall 6:53"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Mike Miller",
    "winner_school": "Washington",
    "loser": "Tyrone Neal",
    "loser_school": "Maryland",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Nils Deacon",
    "winner_school": "Lehigh",
    "loser": "Mike Metting",
    "loser_school": "Bowling Green",
    "result": "Fall 4:04"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Dennis Whimpey",
    "winner_school": "Brigham Young",
    "loser": "Dale Midkiff",
    "loser_school": "Arizona State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Dave Hauser",
    "winner_school": "Tampa",
    "loser": "Steve Zawacki",
    "loser_school": "Wyoming",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Dan Holm",
    "winner_school": "Iowa",
    "loser": "Gene Ashley",
    "loser_school": "Wilkes",
    "result": "MD 18-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Dan Brink",
    "winner_school": "Michigan",
    "loser": "Craig Artist",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Rod Kilgore",
    "winner_school": "Oklahoma",
    "loser": "Steve Lawinger",
    "loser_school": "Wisconsin",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Marty Schwartz",
    "winner_school": "Yale",
    "loser": "Pete Ackerman",
    "loser_school": "Rider",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Jon Jackson",
    "winner_school": "Oklahoma State",
    "loser": "Bill Miron",
    "loser_school": "Princeton",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Paul Berry",
    "winner_school": "Missouri",
    "loser": "Tom Cavanaugh",
    "loser_school": "Cleveland State",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Dave Chandler",
    "winner_school": "Boise State",
    "loser": "Wally Clark",
    "loser_school": "Long Beach State",
    "result": "Fall 7:23"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "John Janiak",
    "winner_school": "Syracuse",
    "loser": "Mark Evenhus",
    "loser_school": "Oregon State",
    "result": "MD 18-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Larry Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Ethan Reeve",
    "loser_school": "Tennessee",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Mike Miller",
    "winner_school": "Washington",
    "loser": "Nils Deacon",
    "loser_school": "Lehigh",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Dave Hauser",
    "winner_school": "Tampa",
    "loser": "Dennis Whimpey",
    "loser_school": "Brigham Young",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Dan Holm",
    "winner_school": "Iowa",
    "loser": "Dan Brink",
    "loser_school": "Michigan",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Rod Kilgore",
    "winner_school": "Oklahoma",
    "loser": "Marty Schwartz",
    "loser_school": "Yale",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Paul Berry",
    "winner_school": "Missouri",
    "loser": "Jon Jackson",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 281,
    "winner": "Kevin Kramer",
    "winner_school": "Oregon",
    "loser": "Mark Evenhus",
    "loser_school": "Oregon State",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 282,
    "winner": "Ethan Reeve",
    "winner_school": "Tennessee",
    "loser": "Cliff Howlett",
    "loser_school": "Drake",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 283,
    "winner": "Dan Brink",
    "winner_school": "Michigan",
    "loser": "Gene Ashley",
    "loser_school": "Wilkes",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 284,
    "winner": "Steve Lawinger",
    "winner_school": "Wisconsin",
    "loser": "Marty Schwartz",
    "loser_school": "Yale",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "John Janiak",
    "winner_school": "Syracuse",
    "loser": "Dave Chandler",
    "loser_school": "Boise State",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Larry Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Mike Miller",
    "loser_school": "Washington",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Dan Holm",
    "winner_school": "Iowa",
    "loser": "Dave Hauser",
    "loser_school": "Tampa",
    "result": "Fall 4:19"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Rod Kilgore",
    "winner_school": "Oklahoma",
    "loser": "Paul Berry",
    "loser_school": "Missouri",
    "result": "Dec 9-3"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Dave Chandler",
    "winner_school": "Boise State",
    "loser": "Kevin Kramer",
    "loser_school": "Oregon",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "Ethan Reeve",
    "winner_school": "Tennessee",
    "loser": "Mike Miller",
    "loser_school": "Washington",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Dan Brink",
    "winner_school": "Michigan",
    "loser": "Dave Hauser",
    "loser_school": "Tampa",
    "result": "M FOR"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Paul Berry",
    "winner_school": "Missouri",
    "loser": "Steve Lawinger",
    "loser_school": "Wisconsin",
    "result": "Fall 2:36"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 431,
    "winner": "Dave Chandler",
    "winner_school": "Boise State",
    "loser": "Ethan Reeve",
    "loser_school": "Tennessee",
    "result": "Fall 1:50"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 432,
    "winner": "Dan Brink",
    "winner_school": "Michigan",
    "loser": "Paul Berry",
    "loser_school": "Missouri",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "John Janiak",
    "winner_school": "Syracuse",
    "loser": "Larry Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 11-8"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Dan Holm",
    "winner_school": "Iowa",
    "loser": "Rod Kilgore",
    "loser_school": "Oklahoma",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Rod Kilgore",
    "winner_school": "Oklahoma",
    "loser": "Dave Chandler",
    "loser_school": "Boise State",
    "result": "Dec 5-0"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Larry Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Dan Brink",
    "loser_school": "Michigan",
    "result": "MD 14-1"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Dave Chandler",
    "winner_school": "Boise State",
    "loser": "Dan Brink",
    "loser_school": "Michigan",
    "result": "MD 19-1"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Larry Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Rod Kilgore",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Dan Holm",
    "winner_school": "Iowa",
    "loser": "John Janiak",
    "loser_school": "Syracuse",
    "result": "Dec 7-6"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Mark Hansen",
    "winner_school": "Brigham Young",
    "loser": "Jim Weisenfluh",
    "loser_school": "Wilkes",
    "result": "Fall 4:49"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1007,
    "winner": "Steve Wenker",
    "winner_school": "St. Cloud State",
    "loser": "Dan Wagemann",
    "loser_school": "Iowa",
    "result": "Dec 10-3"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 2007,
    "winner": "Jeff Callard",
    "winner_school": "Oklahoma",
    "loser": "Jim McDuffie",
    "loser_school": "Hofstra",
    "result": "Fall 3:35"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Joe Carr",
    "winner_school": "Kentucky",
    "loser": "Fred DeLeon",
    "loser_school": "UCLA",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Steve Wenker",
    "winner_school": "St. Cloud State",
    "loser": "Ted Petty",
    "loser_school": "Rutgers",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Ken Moore",
    "winner_school": "Central Michigan",
    "loser": "Lloyd Teasley",
    "loser_school": "San Francisco State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Jerry Villecco",
    "winner_school": "Penn State",
    "loser": "Dennis Graham",
    "loser_school": "Portland State",
    "result": "Fall 5:50"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Tim Jenks",
    "winner_school": "Syracuse",
    "loser": "Paul Reed",
    "loser_school": "Wyoming",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Ron Ray",
    "winner_school": "Oklahoma State",
    "loser": "Steve Hogg",
    "loser_school": "Maryland",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Mark Hansen",
    "winner_school": "Brigham Young",
    "loser": "Mark Weisen",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Duane Stutzman",
    "winner_school": "Oregon",
    "loser": "Jim Ledbetter",
    "loser_school": "Illinois State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Dave Froehlich",
    "winner_school": "Northwestern",
    "loser": "George O'Korn",
    "loser_school": "Pittsburgh",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Joe DiFeo",
    "winner_school": "Kent State",
    "loser": "Lonnie Seufer",
    "loser_school": "Colorado State",
    "result": "Dec 16-11"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Jeff Callard",
    "winner_school": "Oklahoma",
    "loser": "Fred Nix",
    "loser_school": "Washington State",
    "result": "Fall 2:50"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Mark Johnson",
    "winner_school": "Michigan",
    "loser": "Rick Nelson",
    "loser_school": "Western Illinois",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Cliff Hatch",
    "winner_school": "Cal Poly",
    "loser": "Kevin Young",
    "loser_school": "Dartmouth",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Ron Whitcomb",
    "winner_school": "East Carolina",
    "loser": "Mark Field",
    "loser_school": "Colorado",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Bernie Barrile",
    "winner_school": "Purdue",
    "loser": "Leif Grunseth",
    "loser_school": "California-Berkeley",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Jack Ravier",
    "winner_school": "Ohio",
    "loser": "Mark Lieberman",
    "loser_school": "Lehigh",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Joe Carr",
    "winner_school": "Kentucky",
    "loser": "Steve Wenker",
    "loser_school": "St. Cloud State",
    "result": "Fall 7:55"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Jerry Villecco",
    "winner_school": "Penn State",
    "loser": "Ken Moore",
    "loser_school": "Central Michigan",
    "result": "Fall 3:34"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Ron Ray",
    "winner_school": "Oklahoma State",
    "loser": "Tim Jenks",
    "loser_school": "Syracuse",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Duane Stutzman",
    "winner_school": "Oregon",
    "loser": "Mark Hansen",
    "loser_school": "Brigham Young",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Dave Froehlich",
    "winner_school": "Northwestern",
    "loser": "Joe DiFeo",
    "loser_school": "Kent State",
    "result": "Fall 7:04"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Jeff Callard",
    "winner_school": "Oklahoma",
    "loser": "Mark Johnson",
    "loser_school": "Michigan",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Cliff Hatch",
    "winner_school": "Cal Poly",
    "loser": "Ron Whitcomb",
    "loser_school": "East Carolina",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Bernie Barrile",
    "winner_school": "Purdue",
    "loser": "Jack Ravier",
    "loser_school": "Ohio",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 285,
    "winner": "Dennis Graham",
    "winner_school": "Portland State",
    "loser": "Ken Moore",
    "loser_school": "Central Michigan",
    "result": "Fall 3:39"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 286,
    "winner": "Steve Hogg",
    "winner_school": "Maryland",
    "loser": "Tim Jenks",
    "loser_school": "Syracuse",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 287,
    "winner": "Mark Johnson",
    "winner_school": "Michigan",
    "loser": "Jim McDuffie",
    "loser_school": "Hofstra",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 288,
    "winner": "Ron Whitcomb",
    "winner_school": "East Carolina",
    "loser": "Kevin Young",
    "loser_school": "Dartmouth",
    "result": "Dec 12-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Jerry Villecco",
    "winner_school": "Penn State",
    "loser": "Joe Carr",
    "loser_school": "Kentucky",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Ron Ray",
    "winner_school": "Oklahoma State",
    "loser": "Duane Stutzman",
    "loser_school": "Oregon",
    "result": "MD 15-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Jeff Callard",
    "winner_school": "Oklahoma",
    "loser": "Dave Froehlich",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Cliff Hatch",
    "winner_school": "Cal Poly",
    "loser": "Bernie Barrile",
    "loser_school": "Purdue",
    "result": "Dec 9-4"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Joe Carr",
    "winner_school": "Kentucky",
    "loser": "Dennis Graham",
    "loser_school": "Portland State",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Duane Stutzman",
    "winner_school": "Oregon",
    "loser": "Steve Hogg",
    "loser_school": "Maryland",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "Dave Froehlich",
    "winner_school": "Northwestern",
    "loser": "Mark Johnson",
    "loser_school": "Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Bernie Barrile",
    "winner_school": "Purdue",
    "loser": "Ron Whitcomb",
    "loser_school": "East Carolina",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 433,
    "winner": "Joe Carr",
    "winner_school": "Kentucky",
    "loser": "Duane Stutzman",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 434,
    "winner": "Bernie Barrile",
    "winner_school": "Purdue",
    "loser": "Dave Froehlich",
    "loser_school": "Northwestern",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Ron Ray",
    "winner_school": "Oklahoma State",
    "loser": "Jerry Villecco",
    "loser_school": "Penn State",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Cliff Hatch",
    "winner_school": "Cal Poly",
    "loser": "Jeff Callard",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Joe Carr",
    "winner_school": "Kentucky",
    "loser": "Jeff Callard",
    "loser_school": "Oklahoma",
    "result": "Dec 10-6"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "Bernie Barrile",
    "winner_school": "Purdue",
    "loser": "Jerry Villecco",
    "loser_school": "Penn State",
    "result": "Dec 9-4"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Jeff Callard",
    "winner_school": "Oklahoma",
    "loser": "Jerry Villecco",
    "loser_school": "Penn State",
    "result": "MD 14-3"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Joe Carr",
    "winner_school": "Kentucky",
    "loser": "Bernie Barrile",
    "loser_school": "Purdue",
    "result": "Dec 6-2"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Ron Ray",
    "winner_school": "Oklahoma State",
    "loser": "Cliff Hatch",
    "loser_school": "Cal Poly",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "Ed Janvier",
    "winner_school": "Delaware",
    "loser": "Buck Davis",
    "loser_school": "Oregon",
    "result": "Dec 6-4"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1008,
    "winner": "Bob Steele",
    "winner_school": "Wyoming",
    "loser": "Dick Erickson",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 2008,
    "winner": "Brady Hall",
    "winner_school": "UCLA",
    "loser": "Kevin Johnson",
    "loser_school": "Maryland",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 3008,
    "winner": "Russ Paulsen",
    "winner_school": "Utah State",
    "loser": "Mike Radford",
    "loser_school": "East Carolina",
    "result": "Dec 10-8"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 4008,
    "winner": "Bruce Young",
    "winner_school": "Arizona State",
    "loser": "Craig Evans",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Willie Gadson",
    "winner_school": "Iowa State",
    "loser": "Scott Klippert",
    "loser_school": "Northwestern",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Bruce Young",
    "winner_school": "Arizona State",
    "loser": "Brad Bowman",
    "loser_school": "John Carroll",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Dave Gaunt",
    "winner_school": "Indiana State",
    "loser": "Steve Scheib",
    "loser_school": "Bloomsburg",
    "result": "Dec 14-8"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Brady Hall",
    "winner_school": "UCLA",
    "loser": "Stu Moyer",
    "loser_school": "Ball State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Bob Ankney",
    "winner_school": "Central Michigan",
    "loser": "Mark Uselman",
    "loser_school": "Brigham Young",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Chris Campbell",
    "winner_school": "Iowa",
    "loser": "Ken Goodrow",
    "loser_school": "Navy",
    "result": "MD 19-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Rudy Fiorvanti",
    "winner_school": "Hofstra",
    "loser": "Bob Steele",
    "loser_school": "Wyoming",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Sythell Thompson",
    "winner_school": "Cal Poly",
    "loser": "Les Steidl",
    "loser_school": "Cleveland State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Bill Shuffstall",
    "winner_school": "Slippery Rock",
    "loser": "Gary Christensen",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Mike Dillenburg",
    "winner_school": "Oregon State",
    "loser": "Sam Allen",
    "loser_school": "Louisiana State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Russ Paulsen",
    "winner_school": "Utah State",
    "loser": "Mark Neumann",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Bill Reinbolt",
    "winner_school": "Ohio State",
    "loser": "Steve Campbell",
    "loser_school": "Air Force",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Mike Lieberman",
    "winner_school": "Lehigh",
    "loser": "Rick Hale",
    "loser_school": "California-Berkeley",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Dave McQuaig",
    "winner_school": "Oklahoma State",
    "loser": "Mark Jones",
    "loser_school": "Boston University",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Ed Janvier",
    "winner_school": "Delaware",
    "loser": "Jim Paulsen",
    "loser_school": "Missouri",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Jerry White",
    "winner_school": "Penn State",
    "loser": "Jody Chesbrough",
    "loser_school": "Miami Ohio",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Willie Gadson",
    "winner_school": "Iowa State",
    "loser": "Bruce Young",
    "loser_school": "Arizona State",
    "result": "Fall 6:08"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Dave Gaunt",
    "winner_school": "Indiana State",
    "loser": "Brady Hall",
    "loser_school": "UCLA",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Chris Campbell",
    "winner_school": "Iowa",
    "loser": "Bob Ankney",
    "loser_school": "Central Michigan",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Sythell Thompson",
    "winner_school": "Cal Poly",
    "loser": "Rudy Fiorvanti",
    "loser_school": "Hofstra",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Bill Shuffstall",
    "winner_school": "Slippery Rock",
    "loser": "Mike Dillenburg",
    "loser_school": "Oregon State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Bill Reinbolt",
    "winner_school": "Ohio State",
    "loser": "Russ Paulsen",
    "loser_school": "Utah State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Mike Lieberman",
    "winner_school": "Lehigh",
    "loser": "Dave McQuaig",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Ed Janvier",
    "winner_school": "Delaware",
    "loser": "Jerry White",
    "loser_school": "Penn State",
    "result": "Dec 9-3"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 289,
    "winner": "Scott Klippert",
    "winner_school": "Northwestern",
    "loser": "Bruce Young",
    "loser_school": "Arizona State",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 290,
    "winner": "Bob Ankney",
    "winner_school": "Central Michigan",
    "loser": "Ken Goodrow",
    "loser_school": "Navy",
    "result": "Dec 6-5"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 291,
    "winner": "Mike Dillenburg",
    "winner_school": "Oregon State",
    "loser": "Gary Christensen",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 8-5"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 292,
    "winner": "Dave McQuaig",
    "winner_school": "Oklahoma State",
    "loser": "Rick Hale",
    "loser_school": "California-Berkeley",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Willie Gadson",
    "winner_school": "Iowa State",
    "loser": "Dave Gaunt",
    "loser_school": "Indiana State",
    "result": "Dec 5-0 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Chris Campbell",
    "winner_school": "Iowa",
    "loser": "Sythell Thompson",
    "loser_school": "Cal Poly",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Bill Shuffstall",
    "winner_school": "Slippery Rock",
    "loser": "Bill Reinbolt",
    "loser_school": "Ohio State",
    "result": "Dec 10-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Mike Lieberman",
    "winner_school": "Lehigh",
    "loser": "Ed Janvier",
    "loser_school": "Delaware",
    "result": "Dec 9-2"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "Scott Klippert",
    "winner_school": "Northwestern",
    "loser": "Dave Gaunt",
    "loser_school": "Indiana State",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Sythell Thompson",
    "winner_school": "Cal Poly",
    "loser": "Bob Ankney",
    "loser_school": "Central Michigan",
    "result": "Dec 7-3 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "Mike Dillenburg",
    "winner_school": "Oregon State",
    "loser": "Bill Reinbolt",
    "loser_school": "Ohio State",
    "result": "Dec 3-1"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Dave McQuaig",
    "winner_school": "Oklahoma State",
    "loser": "Ed Janvier",
    "loser_school": "Delaware",
    "result": "Fall 0:29"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 435,
    "winner": "Scott Klippert",
    "winner_school": "Northwestern",
    "loser": "Sythell Thompson",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 436,
    "winner": "Dave McQuaig",
    "winner_school": "Oklahoma State",
    "loser": "Mike Dillenburg",
    "loser_school": "Oregon State",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Chris Campbell",
    "winner_school": "Iowa",
    "loser": "Willie Gadson",
    "loser_school": "Iowa State",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Mike Lieberman",
    "winner_school": "Lehigh",
    "loser": "Bill Shuffstall",
    "loser_school": "Slippery Rock",
    "result": "Dec 12-7"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Scott Klippert",
    "winner_school": "Northwestern",
    "loser": "Bill Shuffstall",
    "loser_school": "Slippery Rock",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Willie Gadson",
    "winner_school": "Iowa State",
    "loser": "Dave McQuaig",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Dave McQuaig",
    "winner_school": "Oklahoma State",
    "loser": "Bill Shuffstall",
    "loser_school": "Slippery Rock",
    "result": "Dec 11-4"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Willie Gadson",
    "winner_school": "Iowa State",
    "loser": "Scott Klippert",
    "loser_school": "Northwestern",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Mike Lieberman",
    "winner_school": "Lehigh",
    "loser": "Chris Campbell",
    "loser_school": "Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 9,
    "winner": "Charles Wright",
    "winner_school": "Buffalo",
    "loser": "Ted Smith",
    "loser_school": "Miami Ohio",
    "result": "Fall 4:58"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 1009,
    "winner": "Henry Jackson",
    "winner_school": "Florida",
    "loser": "Tom Swoyer",
    "loser_school": "Drake",
    "result": "MD 10-2"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 2009,
    "winner": "Rich Calderon",
    "winner_school": "Washington",
    "loser": "Kevin Quigley",
    "loser_school": "Ohio State",
    "result": "Dec 6-5"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 3009,
    "winner": "Greg Stevens",
    "winner_school": "Iowa",
    "loser": "Don McCorkel",
    "loser_school": "Lehigh",
    "result": "Fall 5:45"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Brad Rheingans",
    "winner_school": "North Dakota State",
    "loser": "Henry Jackson",
    "loser_school": "Florida",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Fred Bohna",
    "winner_school": "UCLA",
    "loser": "Charles Wright",
    "loser_school": "Buffalo",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Kurt Kuehl",
    "winner_school": "Minnesota State-Mankato",
    "loser": "John Govea",
    "loser_school": "Stanford",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Neal Brendel",
    "winner_school": "Yale",
    "loser": "Wes Hines",
    "loser_school": "Oregon",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Bill McCrady",
    "winner_school": "Brigham Young",
    "loser": "Denny St. Clair",
    "loser_school": "Penn State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Al Nacin",
    "winner_school": "Iowa State",
    "loser": "Scott Wickard",
    "loser_school": "Michigan State",
    "result": "Dec 14-9"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Dave Goodier",
    "winner_school": "New Mexico",
    "loser": "Bill Voliva",
    "loser_school": "Virginia",
    "result": "Fall 1:21"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Mark Tiffany",
    "winner_school": "Northern Illinois",
    "loser": "Frank Czarnecki",
    "loser_school": "Illinois State",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Bob Orwig",
    "winner_school": "Air Force",
    "loser": "Brent Wissenback",
    "loser_school": "Humboldt State",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Rick Dixon",
    "winner_school": "William & Mary",
    "loser": "Dan McCullough",
    "loser_school": "Oklahoma",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Laurent Soucie",
    "winner_school": "Wisconsin",
    "loser": "Rick Jones",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Frank Savegnago",
    "winner_school": "SIU-Edwardsville",
    "loser": "Al Manning",
    "loser_school": "Ball State",
    "result": "Fall 3:29"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Rich Calderon",
    "winner_school": "Washington",
    "loser": "Bill Bailey",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Bob Johnson",
    "winner_school": "Nebraska",
    "loser": "Tad Sargent",
    "loser_school": "Rhode Island",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Greg Stevens",
    "winner_school": "Iowa",
    "loser": "Shane Coburn",
    "loser_school": "Boise State",
    "result": "Fall 2:11"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Roy Baker",
    "winner_school": "Delaware",
    "loser": "Jim Kysar",
    "loser_school": "Wyoming",
    "result": "MD 13-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "190",
    "bout": 259,
    "winner": "Don McCorkel",
    "winner_school": "Lehigh",
    "loser": "Shane Coburn",
    "loser_school": "Boise State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Brad Rheingans",
    "winner_school": "North Dakota State",
    "loser": "Fred Bohna",
    "loser_school": "UCLA",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Neal Brendel",
    "winner_school": "Yale",
    "loser": "Kurt Kuehl",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Al Nacin",
    "winner_school": "Iowa State",
    "loser": "Bill McCrady",
    "loser_school": "Brigham Young",
    "result": "MD 16-0"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Mark Tiffany",
    "winner_school": "Northern Illinois",
    "loser": "Dave Goodier",
    "loser_school": "New Mexico",
    "result": "Fall 5:48"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Bob Orwig",
    "winner_school": "Air Force",
    "loser": "Rick Dixon",
    "loser_school": "William & Mary",
    "result": "Fall 6:33"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Laurent Soucie",
    "winner_school": "Wisconsin",
    "loser": "Frank Savegnago",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Rich Calderon",
    "winner_school": "Washington",
    "loser": "Bob Johnson",
    "loser_school": "Nebraska",
    "result": "Fall 6:56"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Greg Stevens",
    "winner_school": "Iowa",
    "loser": "Roy Baker",
    "loser_school": "Delaware",
    "result": "Dec 3-1"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 293,
    "winner": "Fred Bohna",
    "winner_school": "UCLA",
    "loser": "Henry Jackson",
    "loser_school": "Florida",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 294,
    "winner": "Scott Wickard",
    "winner_school": "Michigan State",
    "loser": "Bill McCrady",
    "loser_school": "Brigham Young",
    "result": "Dec 6-1"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 295,
    "winner": "Frank Savegnago",
    "winner_school": "SIU-Edwardsville",
    "loser": "Rick Jones",
    "loser_school": "Oklahoma State",
    "result": "Fall 5:51"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 296,
    "winner": "Don McCorkel",
    "winner_school": "Lehigh",
    "loser": "Roy Baker",
    "loser_school": "Delaware",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Brad Rheingans",
    "winner_school": "North Dakota State",
    "loser": "Neal Brendel",
    "loser_school": "Yale",
    "result": "Fall 6:05"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Al Nacin",
    "winner_school": "Iowa State",
    "loser": "Mark Tiffany",
    "loser_school": "Northern Illinois",
    "result": "Fall 4:24"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Laurent Soucie",
    "winner_school": "Wisconsin",
    "loser": "Bob Orwig",
    "loser_school": "Air Force",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Greg Stevens",
    "winner_school": "Iowa",
    "loser": "Rich Calderon",
    "loser_school": "Washington",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "Neal Brendel",
    "winner_school": "Yale",
    "loser": "Fred Bohna",
    "loser_school": "UCLA",
    "result": "Dec 6-1"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "Mark Tiffany",
    "winner_school": "Northern Illinois",
    "loser": "Scott Wickard",
    "loser_school": "Michigan State",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Bob Orwig",
    "winner_school": "Air Force",
    "loser": "Frank Savegnago",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Don McCorkel",
    "winner_school": "Lehigh",
    "loser": "Rich Calderon",
    "loser_school": "Washington",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 437,
    "winner": "Mark Tiffany",
    "winner_school": "Northern Illinois",
    "loser": "Neal Brendel",
    "loser_school": "Yale",
    "result": "MD 16-8"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 438,
    "winner": "Bob Orwig",
    "winner_school": "Air Force",
    "loser": "Don McCorkel",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Al Nacin",
    "winner_school": "Iowa State",
    "loser": "Brad Rheingans",
    "loser_school": "North Dakota State",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Greg Stevens",
    "winner_school": "Iowa",
    "loser": "Laurent Soucie",
    "loser_school": "Wisconsin",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Laurent Soucie",
    "winner_school": "Wisconsin",
    "loser": "Mark Tiffany",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Brad Rheingans",
    "winner_school": "North Dakota State",
    "loser": "Bob Orwig",
    "loser_school": "Air Force",
    "result": "Dec 4-1"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Bob Orwig",
    "winner_school": "Air Force",
    "loser": "Mark Tiffany",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-1"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Laurent Soucie",
    "winner_school": "Wisconsin",
    "loser": "Brad Rheingans",
    "loser_school": "North Dakota State",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Al Nacin",
    "winner_school": "Iowa State",
    "loser": "Greg Stevens",
    "loser_school": "Iowa",
    "result": "Dec 8-4"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 10,
    "winner": "Mark Cole",
    "winner_school": "Arizona State",
    "loser": "Dennis Fenton",
    "loser_school": "Massachusetts",
    "result": "Fall 4:19"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 1010,
    "winner": "Joel Puleo",
    "winner_school": "Duke",
    "loser": "Randy Omvig",
    "loser_school": "Northern Iowa",
    "result": "MD 13-5"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 2010,
    "winner": "Terry DeStito",
    "winner_school": "Lehigh",
    "loser": "Don Wilson",
    "loser_school": "Montana State",
    "result": "Dec 6-1"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 3010,
    "winner": "Chuck Coryea",
    "winner_school": "Clarion",
    "loser": "Vic Henderson",
    "loser_school": "California-Berkeley",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 4010,
    "winner": "Greg Gibson",
    "winner_school": "Oregon",
    "loser": "Rob Whisman",
    "loser_school": "Iowa State",
    "result": "MD 10-0"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 5010,
    "winner": "John Bowlsby",
    "winner_school": "Iowa",
    "loser": "Joe Bertolone",
    "loser_school": "John Carroll",
    "result": "Fall 4:04"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 155,
    "winner": "Don Mayorga",
    "winner_school": "Hofstra",
    "loser": "Mark Cole",
    "loser_school": "Arizona State",
    "result": "Fall 1:31"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 156,
    "winner": "John Bowlsby",
    "winner_school": "Iowa",
    "loser": "Tom Higgins",
    "loser_school": "NC State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 157,
    "winner": "Milt Seals",
    "winner_school": "New Mexico",
    "loser": "Dalfin Blaske",
    "loser_school": "North Dakota State",
    "result": "Fall 4:39"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Chuck Coryea",
    "winner_school": "Clarion",
    "loser": "Gene Santole",
    "loser_school": "Bucknell",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 159,
    "winner": "Mark Stepanovich",
    "winner_school": "Navy",
    "loser": "Kevin Pancratz",
    "loser_school": "Illinois",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 160,
    "winner": "Larry Bielenberg",
    "winner_school": "Oregon State",
    "loser": "Mitch Marsciano",
    "loser_school": "Michigan",
    "result": "Fall 4:20"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 161,
    "winner": "Willie Bryant",
    "winner_school": "East Carolina",
    "loser": "Al Nuytten",
    "loser_school": "Air Force",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Bill Kalkbrenner",
    "winner_school": "Oklahoma",
    "loser": "Gerry Anthony",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Fall 2:47"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Gary Peterson",
    "winner_school": "Brigham Young",
    "loser": "Mark Bittick",
    "loser_school": "Boise State",
    "result": "Fall 3:36"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 164,
    "winner": "Dave Rodhe",
    "winner_school": "Kent State",
    "loser": "Jimmy Jackson",
    "loser_school": "Oklahoma State",
    "result": "Fall 5:12"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 165,
    "winner": "Greg Gibson",
    "winner_school": "Oregon",
    "loser": "Mike Murburg",
    "loser_school": "Princeton",
    "result": "Fall 7:20"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 166,
    "winner": "Jerry Anderson",
    "winner_school": "Drake",
    "loser": "Reggie Williams",
    "loser_school": "Dartmouth",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "Terry DeStito",
    "winner_school": "Lehigh",
    "loser": "Bob Walker",
    "loser_school": "Alabama",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 168,
    "winner": "Bruce Conger",
    "winner_school": "Nebraska",
    "loser": "Jim Schuster",
    "loser_school": "Lock Haven",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 169,
    "winner": "Larry Avery",
    "winner_school": "Michigan State",
    "loser": "Ken Stewart",
    "loser_school": "Yale",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 170,
    "winner": "Joel Puleo",
    "winner_school": "Duke",
    "loser": "Jim Feucht",
    "loser_school": "Miami Ohio",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsPrelims",
    "weight": "UNL",
    "bout": 260,
    "winner": "Rob Whisman",
    "winner_school": "Iowa State",
    "loser": "Mike Murburg",
    "loser_school": "Princeton",
    "result": "M FOR"
  },
  {
    "round": "ConsPrelims",
    "weight": "UNL",
    "bout": 1260,
    "winner": "Joe Bertolone",
    "winner_school": "John Carroll",
    "loser": "Tom Higgins",
    "loser_school": "NC State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "John Bowlsby",
    "winner_school": "Iowa",
    "loser": "Don Mayorga",
    "loser_school": "Hofstra",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Milt Seals",
    "winner_school": "New Mexico",
    "loser": "Chuck Coryea",
    "loser_school": "Clarion",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Larry Bielenberg",
    "winner_school": "Oregon State",
    "loser": "Mark Stepanovich",
    "loser_school": "Navy",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Bill Kalkbrenner",
    "winner_school": "Oklahoma",
    "loser": "Willie Bryant",
    "loser_school": "East Carolina",
    "result": "Fall 2:52"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Gary Peterson",
    "winner_school": "Brigham Young",
    "loser": "Dave Rodhe",
    "loser_school": "Kent State",
    "result": "MD 21-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Greg Gibson",
    "winner_school": "Oregon",
    "loser": "Jerry Anderson",
    "loser_school": "Drake",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Terry DeStito",
    "winner_school": "Lehigh",
    "loser": "Bruce Conger",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Larry Avery",
    "winner_school": "Michigan State",
    "loser": "Joel Puleo",
    "loser_school": "Duke",
    "result": "Dec 5-0"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 297,
    "winner": "Don Mayorga",
    "winner_school": "Hofstra",
    "loser": "Joe Bertolone",
    "loser_school": "John Carroll",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 298,
    "winner": "Mitch Marsciano",
    "winner_school": "Michigan",
    "loser": "Mark Stepanovich",
    "loser_school": "Navy",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 299,
    "winner": "Rob Whisman",
    "winner_school": "Iowa State",
    "loser": "Jerry Anderson",
    "loser_school": "Drake",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 300,
    "winner": "Ken Stewart",
    "winner_school": "Yale",
    "loser": "Joel Puleo",
    "loser_school": "Duke",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "John Bowlsby",
    "winner_school": "Iowa",
    "loser": "Milt Seals",
    "loser_school": "New Mexico",
    "result": "MD 17-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Larry Bielenberg",
    "winner_school": "Oregon State",
    "loser": "Bill Kalkbrenner",
    "loser_school": "Oklahoma",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Greg Gibson",
    "winner_school": "Oregon",
    "loser": "Gary Peterson",
    "loser_school": "Brigham Young",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Larry Avery",
    "winner_school": "Michigan State",
    "loser": "Terry DeStito",
    "loser_school": "Lehigh",
    "result": "Dec 6-1 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 417,
    "winner": "Milt Seals",
    "winner_school": "New Mexico",
    "loser": "Don Mayorga",
    "loser_school": "Hofstra",
    "result": "Fall 3:22"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 418,
    "winner": "Bill Kalkbrenner",
    "winner_school": "Oklahoma",
    "loser": "Mitch Marsciano",
    "loser_school": "Michigan",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 419,
    "winner": "Gary Peterson",
    "winner_school": "Brigham Young",
    "loser": "Rob Whisman",
    "loser_school": "Iowa State",
    "result": "Fall 4:42"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 420,
    "winner": "Terry DeStito",
    "winner_school": "Lehigh",
    "loser": "Ken Stewart",
    "loser_school": "Yale",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 439,
    "winner": "Bill Kalkbrenner",
    "winner_school": "Oklahoma",
    "loser": "Milt Seals",
    "loser_school": "New Mexico",
    "result": "Fall 3:07"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 440,
    "winner": "Terry DeStito",
    "winner_school": "Lehigh",
    "loser": "Gary Peterson",
    "loser_school": "Brigham Young",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Larry Bielenberg",
    "winner_school": "Oregon State",
    "loser": "John Bowlsby",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Greg Gibson",
    "winner_school": "Oregon",
    "loser": "Larry Avery",
    "loser_school": "Michigan State",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 499,
    "winner": "Bill Kalkbrenner",
    "winner_school": "Oklahoma",
    "loser": "Larry Avery",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 500,
    "winner": "John Bowlsby",
    "winner_school": "Iowa",
    "loser": "Terry DeStito",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "Terry DeStito",
    "winner_school": "Lehigh",
    "loser": "Larry Avery",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "John Bowlsby",
    "winner_school": "Iowa",
    "loser": "Bill Kalkbrenner",
    "loser_school": "Oklahoma",
    "result": "Fall 4:41"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Larry Bielenberg",
    "winner_school": "Oregon State",
    "loser": "Greg Gibson",
    "loser_school": "Oregon",
    "result": "Dec 8-2"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
