// 1984 NCAA Division I Wrestling Championships (3/8/1984 to 3/10/1984 at Meadowlands, NJ). Weight classes 118-275. Consolation: SEMIFINALIST WRESTLEBACK (rounds SfConsR1-R4).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1984 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1984-provenance.js
const resultData = [
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Brad Anderson",
    "winner_school": "Brigham Young",
    "loser": "Matt Campbell",
    "loser_school": "Nebraska",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Mike Clevenger",
    "winner_school": "Louisiana State",
    "loser": "Joe Spinazzola",
    "loser_school": "Missouri",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Tracy Yeates",
    "winner_school": "Boise State",
    "loser": "Steve Brown",
    "loser_school": "Eastern Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Wayne Jackson",
    "winner_school": "Michigan State",
    "loser": "Ed Giese",
    "loser_school": "Minnesota",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Charlie Heard",
    "winner_school": "Chattanooga",
    "loser": "Jim Lefebvre",
    "loser_school": "Arizona State",
    "result": "MD 32-12"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Dave Crisanti",
    "winner_school": "Princeton",
    "loser": "Mike Duhigg",
    "loser_school": "Old Dominion",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Pablo Saenz",
    "winner_school": "Fresno State",
    "loser": "Kirk Hoffman",
    "loser_school": "Clemson",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Bob Hallman",
    "winner_school": "Northern Iowa",
    "loser": "Bruce Garner",
    "loser_school": "New Mexico",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Chip McArdle",
    "winner_school": "North Carolina",
    "loser": "Mike Price",
    "loser_school": "Rider",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Jamie Wise",
    "winner_school": "Oregon State",
    "loser": "Chuck Jones",
    "loser_school": "Appalachian State",
    "result": "Fall 1:59"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Jim Peters",
    "winner_school": "Navy",
    "loser": "Dane Tussel",
    "loser_school": "Ohio State",
    "result": "Fall 2:56"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Carl DeStefanis",
    "winner_school": "Penn State",
    "loser": "Alfred Castro",
    "loser_school": "Utah State",
    "result": "MD 23-11"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Tony Cotroneo",
    "loser_school": "Syracuse",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Steven Gliva",
    "winner_school": "Augsburg",
    "loser": "Dave Beaulieu",
    "loser_school": "New Hampshire",
    "result": "Fall 2:25"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Mark Perry",
    "winner_school": "Oklahoma State",
    "loser": "Marc Sodano",
    "loser_school": "Wilkes",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Mike Romero",
    "loser_school": "Southern Oregon",
    "result": "MD 18-4"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Mike Clevenger",
    "winner_school": "Louisiana State",
    "loser": "Brad Anderson",
    "loser_school": "Brigham Young",
    "result": "Fall 2:42"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Wayne Jackson",
    "winner_school": "Michigan State",
    "loser": "Tracy Yeates",
    "loser_school": "Boise State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Charlie Heard",
    "winner_school": "Chattanooga",
    "loser": "Dave Crisanti",
    "loser_school": "Princeton",
    "result": "Dec 12-11"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "Bob Hallman",
    "winner_school": "Northern Iowa",
    "loser": "Pablo Saenz",
    "loser_school": "Fresno State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Jamie Wise",
    "winner_school": "Oregon State",
    "loser": "Chip McArdle",
    "loser_school": "North Carolina",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Carl DeStefanis",
    "winner_school": "Penn State",
    "loser": "Jim Peters",
    "loser_school": "Navy",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Steven Gliva",
    "loser_school": "Augsburg",
    "result": "MD 20-8"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Mark Perry",
    "winner_school": "Oklahoma State",
    "loser": "Ricky Bonomo",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Joe Spinazzola",
    "winner_school": "Missouri",
    "loser": "Brad Anderson",
    "loser_school": "Brigham Young",
    "result": "Dec 3-1"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Bruce Garner",
    "winner_school": "New Mexico",
    "loser": "Pablo Saenz",
    "loser_school": "Fresno State",
    "result": "MD 14-6"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Jim Peters",
    "winner_school": "Navy",
    "loser": "Alfred Castro",
    "loser_school": "Utah State",
    "result": "Dec 9-2"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Marc Sodano",
    "loser_school": "Wilkes",
    "result": "Dec 15-14"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Mike Clevenger",
    "winner_school": "Louisiana State",
    "loser": "Wayne Jackson",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "Bob Hallman",
    "winner_school": "Northern Iowa",
    "loser": "Charlie Heard",
    "loser_school": "Chattanooga",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Carl DeStefanis",
    "winner_school": "Penn State",
    "loser": "Jamie Wise",
    "loser_school": "Oregon State",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Mark Perry",
    "winner_school": "Oklahoma State",
    "loser": "Tim Riley",
    "loser_school": "Iowa",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Joe Spinazzola",
    "winner_school": "Missouri",
    "loser": "Wayne Jackson",
    "loser_school": "Michigan State",
    "result": "Fall 5:38"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Charlie Heard",
    "winner_school": "Chattanooga",
    "loser": "Bruce Garner",
    "loser_school": "New Mexico",
    "result": "MD 22-9"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Jim Peters",
    "winner_school": "Navy",
    "loser": "Jamie Wise",
    "loser_school": "Oregon State",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Ricky Bonomo",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Joe Spinazzola",
    "winner_school": "Missouri",
    "loser": "Charlie Heard",
    "loser_school": "Chattanooga",
    "result": "DQ"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Jim Peters",
    "loser_school": "Navy",
    "result": "MD 17-5"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Bob Hallman",
    "winner_school": "Northern Iowa",
    "loser": "Mike Clevenger",
    "loser_school": "Louisiana State",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Carl DeStefanis",
    "winner_school": "Penn State",
    "loser": "Mark Perry",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Joe Spinazzola",
    "winner_school": "Missouri",
    "loser": "Mark Perry",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-6"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Mike Clevenger",
    "winner_school": "Louisiana State",
    "loser": "Tim Riley",
    "loser_school": "Iowa",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 521,
    "winner": "Charlie Heard",
    "winner_school": "Chattanooga",
    "loser": "Jim Peters",
    "loser_school": "Navy",
    "result": "MD 30-8"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Mark Perry",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Mike Clevenger",
    "winner_school": "Louisiana State",
    "loser": "Joe Spinazzola",
    "loser_school": "Missouri",
    "result": "Dec 7-1"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Carl DeStefanis",
    "winner_school": "Penn State",
    "loser": "Bob Hallman",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Kevin Darkus",
    "winner_school": "Iowa State",
    "loser": "Gary Bairos",
    "loser_school": "Arizona State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Rocky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Chris Davis",
    "loser_school": "Illinois",
    "result": "Fall 5:38"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Mark Trizzino",
    "winner_school": "Iowa",
    "loser": "Robert Beck",
    "loser_school": "Eastern Michigan",
    "result": "Fall 3:47"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Paul Kreimeyer",
    "winner_school": "Northern Iowa",
    "loser": "Chris Lee",
    "loser_school": "Massachusetts",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Mark Zimmer",
    "winner_school": "Oklahoma",
    "loser": "Joe Downey",
    "loser_school": "Hofstra",
    "result": "MD 24-8"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Orlando Caceres",
    "winner_school": "College of New Jersey",
    "loser": "Patrick McCarthy",
    "loser_school": "Miami Ohio",
    "result": "Fall 2:15"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Don Haddad",
    "winner_school": "Colorado State",
    "loser": "Stan Armstrong",
    "loser_school": "Boise State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Kevin Darkus",
    "winner_school": "Iowa State",
    "loser": "John Loomis",
    "loser_school": "CSU Bakersfield",
    "result": "MD 19-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Albert Perez",
    "winner_school": "San Jose State",
    "loser": "Dave Marquis",
    "loser_school": "Navy",
    "result": "Fall 6:08"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Tony Russo",
    "winner_school": "Maryland",
    "loser": "Mike Rizzo",
    "loser_school": "Bucknell",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Don Stevens",
    "winner_school": "SIU-Edwardsville",
    "loser": "John Munno",
    "loser_school": "VMI",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Joe McFarland",
    "winner_school": "Michigan",
    "loser": "Wade Hughes",
    "loser_school": "George Washington",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Joe Ismay",
    "winner_school": "Fresno State",
    "loser": "Dale Mills",
    "loser_school": "Syracuse",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "John Smith",
    "winner_school": "Oklahoma State",
    "loser": "John Aumiller",
    "loser_school": "North Carolina",
    "result": "Fall 1:03"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Dan Foldesy",
    "winner_school": "Cleveland State",
    "loser": "Doug Billig",
    "loser_school": "Wilkes",
    "result": "MD 21-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Al Morgan",
    "winner_school": "Missouri",
    "loser": "Gene Spellman",
    "loser_school": "Wisconsin",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Rob Johnson",
    "loser_school": "Louisiana State",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 252,
    "winner": "John Loomis",
    "winner_school": "CSU Bakersfield",
    "loser": "Gary Bairos",
    "loser_school": "Arizona State",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Mark Trizzino",
    "winner_school": "Iowa",
    "loser": "Rocky Bonomo",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Mark Zimmer",
    "winner_school": "Oklahoma",
    "loser": "Paul Kreimeyer",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Orlando Caceres",
    "winner_school": "College of New Jersey",
    "loser": "Don Haddad",
    "loser_school": "Colorado State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Kevin Darkus",
    "winner_school": "Iowa State",
    "loser": "Albert Perez",
    "loser_school": "San Jose State",
    "result": "Fall 2:39"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Don Stevens",
    "winner_school": "SIU-Edwardsville",
    "loser": "Tony Russo",
    "loser_school": "Maryland",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Joe McFarland",
    "winner_school": "Michigan",
    "loser": "Joe Ismay",
    "loser_school": "Fresno State",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Dan Foldesy",
    "winner_school": "Cleveland State",
    "loser": "John Smith",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Al Morgan",
    "loser_school": "Missouri",
    "result": "Dec 8-5"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 265,
    "winner": "Rocky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Robert Beck",
    "loser_school": "Eastern Michigan",
    "result": "MD 13-3"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 266,
    "winner": "John Loomis",
    "winner_school": "CSU Bakersfield",
    "loser": "Albert Perez",
    "loser_school": "San Jose State",
    "result": "MD 12-4"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 267,
    "winner": "Wade Hughes",
    "winner_school": "George Washington",
    "loser": "Joe Ismay",
    "loser_school": "Fresno State",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 268,
    "winner": "Rob Johnson",
    "winner_school": "Louisiana State",
    "loser": "Al Morgan",
    "loser_school": "Missouri",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Mark Trizzino",
    "winner_school": "Iowa",
    "loser": "Mark Zimmer",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Kevin Darkus",
    "winner_school": "Iowa State",
    "loser": "Orlando Caceres",
    "loser_school": "College of New Jersey",
    "result": "MD 13-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Joe McFarland",
    "winner_school": "Michigan",
    "loser": "Don Stevens",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Dan Foldesy",
    "loser_school": "Cleveland State",
    "result": "Dec 8-6"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Mark Zimmer",
    "winner_school": "Oklahoma",
    "loser": "Rocky Bonomo",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "John Loomis",
    "winner_school": "CSU Bakersfield",
    "loser": "Orlando Caceres",
    "loser_school": "College of New Jersey",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Don Stevens",
    "winner_school": "SIU-Edwardsville",
    "loser": "Wade Hughes",
    "loser_school": "George Washington",
    "result": "Fall 6:52 SV"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Rob Johnson",
    "winner_school": "Louisiana State",
    "loser": "Dan Foldesy",
    "loser_school": "Cleveland State",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 423,
    "winner": "John Loomis",
    "winner_school": "CSU Bakersfield",
    "loser": "Mark Zimmer",
    "loser_school": "Oklahoma",
    "result": "Dec 13-8"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 424,
    "winner": "Rob Johnson",
    "winner_school": "Louisiana State",
    "loser": "Don Stevens",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 12-9"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Kevin Darkus",
    "winner_school": "Iowa State",
    "loser": "Mark Trizzino",
    "loser_school": "Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Joe McFarland",
    "winner_school": "Michigan",
    "loser": "Rich Santoro",
    "loser_school": "Lehigh",
    "result": "MD 19-4"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "John Loomis",
    "winner_school": "CSU Bakersfield",
    "loser": "Rich Santoro",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Mark Trizzino",
    "winner_school": "Iowa",
    "loser": "Rob Johnson",
    "loser_school": "Louisiana State",
    "result": "Dec 9-5"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 522,
    "winner": "Mark Zimmer",
    "winner_school": "Oklahoma",
    "loser": "Don Stevens",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 11-5"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Rob Johnson",
    "loser_school": "Louisiana State",
    "result": "Dec 11-7"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "John Loomis",
    "winner_school": "CSU Bakersfield",
    "loser": "Mark Trizzino",
    "loser_school": "Iowa",
    "result": "Fall 4:59"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Kevin Darkus",
    "winner_school": "Iowa State",
    "loser": "Joe McFarland",
    "loser_school": "Michigan",
    "result": "Dec 9-6"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Clint Burke",
    "winner_school": "Oklahoma",
    "loser": "Vinnie Maeri",
    "loser_school": "Drexel",
    "result": "MD 17-2"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Mike Enzien",
    "winner_school": "Boston University",
    "loser": "Steve Slade",
    "loser_school": "Idaho State",
    "result": "Dec 11-7"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 2003,
    "winner": "Pat Hughes",
    "winner_school": "Springfield",
    "loser": "Jim Edwards",
    "loser_school": "Louisiana State",
    "result": "Dec 15-13"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "John Parr",
    "winner_school": "Virginia",
    "loser": "Marty Lucas",
    "loser_school": "Kent State",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Scott Lynch",
    "winner_school": "Penn State",
    "loser": "Doug Castellari",
    "loser_school": "Temple",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Terry Lauver",
    "winner_school": "Shippensburg",
    "loser": "Mark Ciccarello",
    "loser_school": "Clarion",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Bob Siegwarth",
    "winner_school": "Washington State",
    "loser": "Tom Riley",
    "loser_school": "Arizona State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Don Stuckly",
    "winner_school": "Purdue",
    "loser": "Pat Hughes",
    "loser_school": "Springfield",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Clar Anderson",
    "winner_school": "Oklahoma State",
    "loser": "John Thorn",
    "loser_school": "Iowa State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Nick King",
    "winner_school": "Yale",
    "loser": "Mike Enzien",
    "loser_school": "Boston University",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Jim Jordan",
    "winner_school": "Wisconsin",
    "loser": "Ralph Harrison",
    "loser_school": "New Mexico",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Jody Taylor",
    "winner_school": "Clemson",
    "loser": "Craig Dellorso",
    "loser_school": "Navy",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Clint Burke",
    "winner_school": "Oklahoma",
    "loser": "Don Parsley",
    "loser_school": "Lock Haven",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Jim Mason",
    "winner_school": "Michigan State",
    "loser": "Charlie Winchock",
    "loser_school": "Rutgers",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Mark Townsley",
    "winner_school": "Miami Ohio",
    "loser": "John Vega",
    "loser_school": "Fresno State",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Chris DeLong",
    "winner_school": "Cal Poly",
    "loser": "Jeff Bradley",
    "loser_school": "Stanford",
    "result": "MD 17-0"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Greg Randall",
    "winner_school": "Iowa",
    "loser": "Ted DiPasquale",
    "loser_school": "Hofstra",
    "result": "Fall 5:36"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Chris Campbell",
    "winner_school": "Indiana State",
    "loser": "Steve Markey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Pat McMahon",
    "winner_school": "Augustana Illinois",
    "loser": "Chris Marisette",
    "loser_school": "Nebraska",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "134",
    "bout": 253,
    "winner": "Don Parsley",
    "winner_school": "Lock Haven",
    "loser": "Vinnie Maeri",
    "loser_school": "Drexel",
    "result": "Fall 4:16"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Scott Lynch",
    "winner_school": "Penn State",
    "loser": "John Parr",
    "loser_school": "Virginia",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Terry Lauver",
    "winner_school": "Shippensburg",
    "loser": "Bob Siegwarth",
    "loser_school": "Washington State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Clar Anderson",
    "winner_school": "Oklahoma State",
    "loser": "Don Stuckly",
    "loser_school": "Purdue",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Jim Jordan",
    "winner_school": "Wisconsin",
    "loser": "Nick King",
    "loser_school": "Yale",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Clint Burke",
    "winner_school": "Oklahoma",
    "loser": "Jody Taylor",
    "loser_school": "Clemson",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Jim Mason",
    "winner_school": "Michigan State",
    "loser": "Mark Townsley",
    "loser_school": "Miami Ohio",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Greg Randall",
    "winner_school": "Iowa",
    "loser": "Chris DeLong",
    "loser_school": "Cal Poly",
    "result": "Dec 16-14"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Chris Campbell",
    "winner_school": "Indiana State",
    "loser": "Pat McMahon",
    "loser_school": "Augustana Illinois",
    "result": "Dec 12-5"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 269,
    "winner": "Doug Castellari",
    "winner_school": "Temple",
    "loser": "John Parr",
    "loser_school": "Virginia",
    "result": "Dec 14-7"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 270,
    "winner": "Don Stuckly",
    "winner_school": "Purdue",
    "loser": "John Thorn",
    "loser_school": "Iowa State",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 271,
    "winner": "Jody Taylor",
    "winner_school": "Clemson",
    "loser": "Don Parsley",
    "loser_school": "Lock Haven",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 272,
    "winner": "Chris DeLong",
    "winner_school": "Cal Poly",
    "loser": "Ted DiPasquale",
    "loser_school": "Hofstra",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Scott Lynch",
    "winner_school": "Penn State",
    "loser": "Terry Lauver",
    "loser_school": "Shippensburg",
    "result": "Dec 10-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Clar Anderson",
    "winner_school": "Oklahoma State",
    "loser": "Jim Jordan",
    "loser_school": "Wisconsin",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Clint Burke",
    "winner_school": "Oklahoma",
    "loser": "Jim Mason",
    "loser_school": "Michigan State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Greg Randall",
    "winner_school": "Iowa",
    "loser": "Chris Campbell",
    "loser_school": "Indiana State",
    "result": "MD 21-4"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "Doug Castellari",
    "winner_school": "Temple",
    "loser": "Terry Lauver",
    "loser_school": "Shippensburg",
    "result": "Dec 9-4"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Jim Jordan",
    "winner_school": "Wisconsin",
    "loser": "Don Stuckly",
    "loser_school": "Purdue",
    "result": "MD 15-4"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Jim Mason",
    "winner_school": "Michigan State",
    "loser": "Jody Taylor",
    "loser_school": "Clemson",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Chris DeLong",
    "winner_school": "Cal Poly",
    "loser": "Chris Campbell",
    "loser_school": "Indiana State",
    "result": "MD 15-0"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 425,
    "winner": "Jim Jordan",
    "winner_school": "Wisconsin",
    "loser": "Doug Castellari",
    "loser_school": "Temple",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 426,
    "winner": "Chris DeLong",
    "winner_school": "Cal Poly",
    "loser": "Jim Mason",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Scott Lynch",
    "winner_school": "Penn State",
    "loser": "Clar Anderson",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-8"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Greg Randall",
    "winner_school": "Iowa",
    "loser": "Clint Burke",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "Clint Burke",
    "winner_school": "Oklahoma",
    "loser": "Jim Jordan",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Chris DeLong",
    "winner_school": "Cal Poly",
    "loser": "Clar Anderson",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "134",
    "bout": 523,
    "winner": "Jim Mason",
    "winner_school": "Michigan State",
    "loser": "Doug Castellari",
    "loser_school": "Temple",
    "result": "Dec 10-3"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Clar Anderson",
    "winner_school": "Oklahoma State",
    "loser": "Jim Jordan",
    "loser_school": "Wisconsin",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Clint Burke",
    "winner_school": "Oklahoma",
    "loser": "Chris DeLong",
    "loser_school": "Cal Poly",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Scott Lynch",
    "winner_school": "Penn State",
    "loser": "Greg Randall",
    "loser_school": "Iowa",
    "result": "Dec 13-6"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Jesse Reyes",
    "winner_school": "CSU Bakersfield",
    "loser": "Bruce Swierczewski",
    "loser_school": "Northern Illinois",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Mike Baker",
    "winner_school": "New Mexico",
    "loser": "Darrel Creps",
    "loser_school": "Ohio State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Joe Gibbons",
    "winner_school": "Iowa State",
    "loser": "Wes Beckwith",
    "loser_school": "Massachusetts",
    "result": "MD 32-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Peter Yozzo",
    "winner_school": "Lehigh",
    "loser": "Boyd Goodpaster",
    "loser_school": "Portland State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "John Giura",
    "winner_school": "Wisconsin",
    "loser": "John Cecala",
    "loser_school": "Old Dominion",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Colin Coffey",
    "winner_school": "Rider",
    "loser": "David Barnes",
    "loser_school": "San Jose State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Cliff Berger",
    "winner_school": "Oregon State",
    "loser": "Joey McKenna",
    "loser_school": "Clemson",
    "result": "Dec 13-12"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Jesse Reyes",
    "winner_school": "CSU Bakersfield",
    "loser": "Don Schleicher",
    "loser_school": "Navy",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Eric Childs",
    "winner_school": "Penn State",
    "loser": "Maurice Brown",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Darrin Higgins",
    "winner_school": "Oklahoma",
    "loser": "Mark Terrill",
    "loser_school": "Louisiana State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Luke Skove",
    "winner_school": "Oklahoma State",
    "loser": "Dave Lundskog",
    "loser_school": "Weber State",
    "result": "Dec 15-10"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Bob Richards",
    "winner_school": "Cleveland State",
    "loser": "Doug Wells",
    "loser_school": "Air Force",
    "result": "MD 19-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Scott Turner",
    "winner_school": "NC State",
    "loser": "Scott Wiggen",
    "loser_school": "Stanford",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Jeff Kerber",
    "winner_school": "Iowa",
    "loser": "Dave Gable",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Nate Winner",
    "winner_school": "Southern Oregon",
    "loser": "William Taylor",
    "loser_school": "Nebraska",
    "result": "Fall 5:58"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "John Orr",
    "winner_school": "Princeton",
    "loser": "John Ehrenberge",
    "loser_school": "VMI",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Dan Pantaleo",
    "winner_school": "Olivet",
    "loser": "Alan Weber",
    "loser_school": "Purdue",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 254,
    "winner": "Don Schleicher",
    "winner_school": "Navy",
    "loser": "Bruce Swierczewski",
    "loser_school": "Northern Illinois",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Joe Gibbons",
    "winner_school": "Iowa State",
    "loser": "Mike Baker",
    "loser_school": "New Mexico",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "John Giura",
    "winner_school": "Wisconsin",
    "loser": "Peter Yozzo",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Colin Coffey",
    "winner_school": "Rider",
    "loser": "Cliff Berger",
    "loser_school": "Oregon State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Jesse Reyes",
    "winner_school": "CSU Bakersfield",
    "loser": "Eric Childs",
    "loser_school": "Penn State",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Luke Skove",
    "winner_school": "Oklahoma State",
    "loser": "Darrin Higgins",
    "loser_school": "Oklahoma",
    "result": "MD 19-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Bob Richards",
    "winner_school": "Cleveland State",
    "loser": "Scott Turner",
    "loser_school": "NC State",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Jeff Kerber",
    "winner_school": "Iowa",
    "loser": "Nate Winner",
    "loser_school": "Southern Oregon",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "John Orr",
    "winner_school": "Princeton",
    "loser": "Dan Pantaleo",
    "loser_school": "Olivet",
    "result": "MD 15-4"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 273,
    "winner": "Mike Baker",
    "winner_school": "New Mexico",
    "loser": "Wes Beckwith",
    "loser_school": "Massachusetts",
    "result": "Dec 13-11"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 274,
    "winner": "Eric Childs",
    "winner_school": "Penn State",
    "loser": "Don Schleicher",
    "loser_school": "Navy",
    "result": "Dec 9-4"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 275,
    "winner": "Dave Lundskog",
    "winner_school": "Weber State",
    "loser": "Darrin Higgins",
    "loser_school": "Oklahoma",
    "result": "MD 13-3"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 276,
    "winner": "Dan Pantaleo",
    "winner_school": "Olivet",
    "loser": "John Ehrenberge",
    "loser_school": "VMI",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Joe Gibbons",
    "winner_school": "Iowa State",
    "loser": "John Giura",
    "loser_school": "Wisconsin",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Jesse Reyes",
    "winner_school": "CSU Bakersfield",
    "loser": "Colin Coffey",
    "loser_school": "Rider",
    "result": "MD 17-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Luke Skove",
    "winner_school": "Oklahoma State",
    "loser": "Bob Richards",
    "loser_school": "Cleveland State",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "John Orr",
    "winner_school": "Princeton",
    "loser": "Jeff Kerber",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "John Giura",
    "winner_school": "Wisconsin",
    "loser": "Mike Baker",
    "loser_school": "New Mexico",
    "result": "MD 12-2"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "Eric Childs",
    "winner_school": "Penn State",
    "loser": "Colin Coffey",
    "loser_school": "Rider",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "Dave Lundskog",
    "winner_school": "Weber State",
    "loser": "Bob Richards",
    "loser_school": "Cleveland State",
    "result": "Dec 10-6"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Jeff Kerber",
    "winner_school": "Iowa",
    "loser": "Dan Pantaleo",
    "loser_school": "Olivet",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 427,
    "winner": "John Giura",
    "winner_school": "Wisconsin",
    "loser": "Eric Childs",
    "loser_school": "Penn State",
    "result": "DEF"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 428,
    "winner": "Jeff Kerber",
    "winner_school": "Iowa",
    "loser": "Dave Lundskog",
    "loser_school": "Weber State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Jesse Reyes",
    "winner_school": "CSU Bakersfield",
    "loser": "Joe Gibbons",
    "loser_school": "Iowa State",
    "result": "Fall 5:28"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "John Orr",
    "winner_school": "Princeton",
    "loser": "Luke Skove",
    "loser_school": "Oklahoma State",
    "result": "Dec 16-13"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "John Giura",
    "winner_school": "Wisconsin",
    "loser": "Luke Skove",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Joe Gibbons",
    "winner_school": "Iowa State",
    "loser": "Jeff Kerber",
    "loser_school": "Iowa",
    "result": "Dec 10-3"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 524,
    "winner": "Eric Childs",
    "winner_school": "Penn State",
    "loser": "Dave Lundskog",
    "loser_school": "Weber State",
    "result": "Dec 4-1"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Luke Skove",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Kerber",
    "loser_school": "Iowa",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "John Giura",
    "winner_school": "Wisconsin",
    "loser": "Joe Gibbons",
    "loser_school": "Iowa State",
    "result": "Dec 9-2"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Jesse Reyes",
    "winner_school": "CSU Bakersfield",
    "loser": "John Orr",
    "loser_school": "Princeton",
    "result": "MD 19-11"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Jim Farina",
    "winner_school": "Iowa State",
    "loser": "Ron Bussey",
    "loser_school": "College of New Jersey",
    "result": "Dec 10-5"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "John Sonderegger",
    "winner_school": "Missouri",
    "loser": "Ben Walker",
    "loser_school": "VMI",
    "result": "Dec 8-7"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Mike Langlais",
    "winner_school": "North Dakota State",
    "loser": "Mike Dotson",
    "loser_school": "Washington State",
    "result": "Dec 22-15"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 3005,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Glen Lanham",
    "loser_school": "Tennessee",
    "result": "Fall 5:37"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Eddie Urbano",
    "winner_school": "Arizona State",
    "loser": "Doug Reifsteck",
    "loser_school": "Indiana State",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Ben Ward",
    "winner_school": "Old Dominion",
    "loser": "John Feldhacker",
    "loser_school": "Chattanooga",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Steve Martinez",
    "winner_school": "Minnesota",
    "loser": "Tim Draper",
    "loser_school": "Utah State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Chris Mondragon",
    "winner_school": "NC State",
    "loser": "Ken Lynch",
    "loser_school": "Yale",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "John Sonderegger",
    "winner_school": "Missouri",
    "loser": "Allan Childers",
    "loser_school": "Kent State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Charles Root",
    "winner_school": "Michigan State",
    "loser": "Chris Joy",
    "loser_school": "Boston University",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Kevin Bianchi",
    "loser_school": "Navy",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Jude Skove",
    "winner_school": "Ohio State",
    "loser": "Scott Cardwell",
    "loser_school": "Oregon State",
    "result": "Fall 2:41"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Wes Gasner",
    "winner_school": "Wyoming",
    "loser": "Dan Bicandi",
    "loser_school": "Boise State",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Darren Abel",
    "winner_school": "Oklahoma",
    "loser": "Mike Langlais",
    "loser_school": "North Dakota State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Ken Nellis",
    "winner_school": "Clarion",
    "loser": "Allen Pascual",
    "loser_school": "Rider",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Jim Farina",
    "winner_school": "Iowa State",
    "loser": "Mike Bossi",
    "loser_school": "Massachusetts",
    "result": "MD 17-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Marty Kistler",
    "winner_school": "Iowa",
    "loser": "Tony Gentile",
    "loser_school": "James Madison",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Pat Welch",
    "winner_school": "Cornell",
    "loser": "Dave Holler",
    "loser_school": "Illinois State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Lex Roy",
    "winner_school": "Louisiana State",
    "loser": "Jeff Schumacher",
    "loser_school": "North Dakota",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Chris Bevilacqua",
    "winner_school": "Penn State",
    "loser": "Shea Kennedy",
    "loser_school": "Augsburg",
    "result": "MD 19-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 255,
    "winner": "Kevin Bianchi",
    "winner_school": "Navy",
    "loser": "Glen Lanham",
    "loser_school": "Tennessee",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Eddie Urbano",
    "winner_school": "Arizona State",
    "loser": "Ben Ward",
    "loser_school": "Old Dominion",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Steve Martinez",
    "winner_school": "Minnesota",
    "loser": "Chris Mondragon",
    "loser_school": "NC State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "John Sonderegger",
    "winner_school": "Missouri",
    "loser": "Charles Root",
    "loser_school": "Michigan State",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Jude Skove",
    "loser_school": "Ohio State",
    "result": "Fall 6:02"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Darren Abel",
    "winner_school": "Oklahoma",
    "loser": "Wes Gasner",
    "loser_school": "Wyoming",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Jim Farina",
    "winner_school": "Iowa State",
    "loser": "Ken Nellis",
    "loser_school": "Clarion",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Marty Kistler",
    "winner_school": "Iowa",
    "loser": "Pat Welch",
    "loser_school": "Cornell",
    "result": "Fall 4:14"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Chris Bevilacqua",
    "winner_school": "Penn State",
    "loser": "Lex Roy",
    "loser_school": "Louisiana State",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 277,
    "winner": "Ben Ward",
    "winner_school": "Old Dominion",
    "loser": "Doug Reifsteck",
    "loser_school": "Indiana State",
    "result": "Dec 8-5"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 278,
    "winner": "Jude Skove",
    "winner_school": "Ohio State",
    "loser": "Kevin Bianchi",
    "loser_school": "Navy",
    "result": "Dec 6-1"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 279,
    "winner": "Mike Langlais",
    "winner_school": "North Dakota State",
    "loser": "Wes Gasner",
    "loser_school": "Wyoming",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 280,
    "winner": "Pat Welch",
    "winner_school": "Cornell",
    "loser": "Tony Gentile",
    "loser_school": "James Madison",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Eddie Urbano",
    "winner_school": "Arizona State",
    "loser": "Steve Martinez",
    "loser_school": "Minnesota",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "John Sonderegger",
    "loser_school": "Missouri",
    "result": "Fall 3:47"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Darren Abel",
    "winner_school": "Oklahoma",
    "loser": "Jim Farina",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Marty Kistler",
    "winner_school": "Iowa",
    "loser": "Chris Bevilacqua",
    "loser_school": "Penn State",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Ben Ward",
    "winner_school": "Old Dominion",
    "loser": "Steve Martinez",
    "loser_school": "Minnesota",
    "result": "MD 14-4"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "John Sonderegger",
    "winner_school": "Missouri",
    "loser": "Jude Skove",
    "loser_school": "Ohio State",
    "result": "Fall 3:35"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Mike Langlais",
    "winner_school": "North Dakota State",
    "loser": "Jim Farina",
    "loser_school": "Iowa State",
    "result": "MD 10-1"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Chris Bevilacqua",
    "winner_school": "Penn State",
    "loser": "Pat Welch",
    "loser_school": "Cornell",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 429,
    "winner": "John Sonderegger",
    "winner_school": "Missouri",
    "loser": "Ben Ward",
    "loser_school": "Old Dominion",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 430,
    "winner": "Mike Langlais",
    "winner_school": "North Dakota State",
    "loser": "Chris Bevilacqua",
    "loser_school": "Penn State",
    "result": "Dec 17-14"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Eddie Urbano",
    "loser_school": "Arizona State",
    "result": "Dec 11-5"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Marty Kistler",
    "winner_school": "Iowa",
    "loser": "Darren Abel",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "John Sonderegger",
    "winner_school": "Missouri",
    "loser": "Darren Abel",
    "loser_school": "Oklahoma",
    "result": "Fall 2:51"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Eddie Urbano",
    "winner_school": "Arizona State",
    "loser": "Mike Langlais",
    "loser_school": "North Dakota State",
    "result": "Dec 14-7"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 525,
    "winner": "Ben Ward",
    "winner_school": "Old Dominion",
    "loser": "Chris Bevilacqua",
    "loser_school": "Penn State",
    "result": "MD 11-3"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Darren Abel",
    "winner_school": "Oklahoma",
    "loser": "Mike Langlais",
    "loser_school": "North Dakota State",
    "result": "Dec 9-5"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Eddie Urbano",
    "winner_school": "Arizona State",
    "loser": "John Sonderegger",
    "loser_school": "Missouri",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Marty Kistler",
    "loser_school": "Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Alphonso Phillips",
    "winner_school": "Washington State",
    "loser": "Kevin Glynn",
    "loser_school": "Northern Arizona",
    "result": "MD 16-2"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Don Cox",
    "loser_school": "South Dakota State",
    "result": "MD 13-3"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Darryl Pope",
    "winner_school": "San Jose State",
    "loser": "Bob Glaberman",
    "loser_school": "College of New Jersey",
    "result": "Fall 6:59"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 3006,
    "winner": "Bill Dykeman",
    "winner_school": "Oklahoma State",
    "loser": "Curtis Luttrell",
    "loser_school": "New Mexico",
    "result": "Dec 7-3"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 4006,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Mike Gerdes",
    "loser_school": "Illinois State",
    "result": "MD 23-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Johnny Johnson",
    "winner_school": "Oklahoma",
    "loser": "Doug Anderson",
    "loser_school": "Missouri",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Bruce Arvold",
    "winner_school": "Augsburg",
    "loser": "John Davis",
    "loser_school": "Morgan State",
    "result": "Dec 15-14"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Tad Wilson",
    "winner_school": "North Carolina",
    "loser": "Dave Yale",
    "loser_school": "New Hampshire",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Darryl Pope",
    "winner_school": "San Jose State",
    "loser": "Paul Salyers",
    "loser_school": "Central Michigan",
    "result": "MD 19-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "William White",
    "loser_school": "Syracuse",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Dave Lilovich",
    "winner_school": "Purdue",
    "loser": "Bill Tate",
    "loser_school": "Iowa State",
    "result": "Fall 0:45"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Greg Evans",
    "loser_school": "Minnesota",
    "result": "MD 19-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "John Barrett",
    "winner_school": "St. Cloud State",
    "loser": "Chris Aragona",
    "loser_school": "William & Mary",
    "result": "Fall 5:43"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Doug Buckwalter",
    "winner_school": "Lock Haven",
    "loser": "Tom Jamicky",
    "loser_school": "Wilkes",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Chris Bodine",
    "winner_school": "Arizona State",
    "loser": "Alphonso Phillips",
    "loser_school": "Washington State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Dave Grant",
    "winner_school": "Northern Iowa",
    "loser": "Norm Dahm",
    "loser_school": "Southwest Missouri",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Bill Dykeman",
    "winner_school": "Oklahoma State",
    "loser": "Fred Allan",
    "loser_school": "Brigham Young",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Terry Jones",
    "winner_school": "Oregon State",
    "loser": "Steve Swan",
    "loser_school": "Appalachian State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "Ernie Vatch",
    "loser_school": "Northern Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Steve Romesburg",
    "winner_school": "Rider",
    "loser": "Buddy Kerr",
    "loser_school": "Virginia",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Mark Schmitz",
    "winner_school": "Wisconsin",
    "loser": "Rick Stageberg",
    "loser_school": "Virginia Tech",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 256,
    "winner": "Curtis Luttrell",
    "winner_school": "New Mexico",
    "loser": "Fred Allan",
    "loser_school": "Brigham Young",
    "result": "Fall 5:38"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 1256,
    "winner": "Mike Gerdes",
    "winner_school": "Illinois State",
    "loser": "Greg Evans",
    "loser_school": "Minnesota",
    "result": "Dec 9-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Johnny Johnson",
    "winner_school": "Oklahoma",
    "loser": "Bruce Arvold",
    "loser_school": "Augsburg",
    "result": "Dec 18-16"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Darryl Pope",
    "winner_school": "San Jose State",
    "loser": "Tad Wilson",
    "loser_school": "North Carolina",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Dave Lilovich",
    "loser_school": "Purdue",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "John Barrett",
    "loser_school": "St. Cloud State",
    "result": "Fall 6:40"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Doug Buckwalter",
    "winner_school": "Lock Haven",
    "loser": "Chris Bodine",
    "loser_school": "Arizona State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Bill Dykeman",
    "winner_school": "Oklahoma State",
    "loser": "Dave Grant",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "Terry Jones",
    "loser_school": "Oregon State",
    "result": "Fall 2:22"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Mark Schmitz",
    "winner_school": "Wisconsin",
    "loser": "Steve Romesburg",
    "loser_school": "Rider",
    "result": "Dec 12-5"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 281,
    "winner": "Bruce Arvold",
    "winner_school": "Augsburg",
    "loser": "Doug Anderson",
    "loser_school": "Missouri",
    "result": "MD 12-4"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 282,
    "winner": "Mike Gerdes",
    "winner_school": "Illinois State",
    "loser": "John Barrett",
    "loser_school": "St. Cloud State",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 283,
    "winner": "Dave Grant",
    "winner_school": "Northern Iowa",
    "loser": "Curtis Luttrell",
    "loser_school": "New Mexico",
    "result": "MD 13-5"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 284,
    "winner": "Rick Stageberg",
    "winner_school": "Virginia Tech",
    "loser": "Steve Romesburg",
    "loser_school": "Rider",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Johnny Johnson",
    "winner_school": "Oklahoma",
    "loser": "Darryl Pope",
    "loser_school": "San Jose State",
    "result": "Dec 10-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Greg Elinsky",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Bill Dykeman",
    "winner_school": "Oklahoma State",
    "loser": "Doug Buckwalter",
    "loser_school": "Lock Haven",
    "result": "Dec 9-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Mark Schmitz",
    "winner_school": "Wisconsin",
    "loser": "Kevin Jackson",
    "loser_school": "Louisiana State",
    "result": "MD 13-4"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Darryl Pope",
    "winner_school": "San Jose State",
    "loser": "Bruce Arvold",
    "loser_school": "Augsburg",
    "result": "Dec 10-6"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Mike Gerdes",
    "loser_school": "Illinois State",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Dave Grant",
    "winner_school": "Northern Iowa",
    "loser": "Doug Buckwalter",
    "loser_school": "Lock Haven",
    "result": "Dec 6-3 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "Rick Stageberg",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 431,
    "winner": "Darryl Pope",
    "winner_school": "San Jose State",
    "loser": "Greg Elinsky",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 432,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "Dave Grant",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Johnny Johnson",
    "loser_school": "Oklahoma",
    "result": "Dec 10-3"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Mark Schmitz",
    "winner_school": "Wisconsin",
    "loser": "Bill Dykeman",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Bill Dykeman",
    "winner_school": "Oklahoma State",
    "loser": "Darryl Pope",
    "loser_school": "San Jose State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "Johnny Johnson",
    "loser_school": "Oklahoma",
    "result": "Dec 7-6"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 526,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Dave Grant",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Darryl Pope",
    "winner_school": "San Jose State",
    "loser": "Johnny Johnson",
    "loser_school": "Oklahoma",
    "result": "Dec 9-2"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "Bill Dykeman",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Mark Schmitz",
    "loser_school": "Wisconsin",
    "result": "Dec 9-5"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Lindley Kistler",
    "winner_school": "Iowa",
    "loser": "John Bott",
    "loser_school": "Rider",
    "result": "MD 9-0"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1007,
    "winner": "Jim Reilly",
    "winner_school": "Lehigh",
    "loser": "Scott McQuaide",
    "loser_school": "Massachusetts",
    "result": "MD 14-2"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 2007,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Jon Hampton",
    "loser_school": "Appalachian State",
    "result": "Fall 6:12"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 3007,
    "winner": "Randy Kaiser",
    "winner_school": "Miami Ohio",
    "loser": "Dan Romero",
    "loser_school": "Cal Poly",
    "result": "Dec 12-7"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 4007,
    "winner": "Jay Winward",
    "winner_school": "Weber State",
    "loser": "Mark Litts",
    "loser_school": "Clemson",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Eric Brugel",
    "winner_school": "Penn State",
    "loser": "Neil Alton",
    "loser_school": "West Chester",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Sylvester Carver",
    "winner_school": "Fresno State",
    "loser": "Steve Porter",
    "loser_school": "Washington State",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Greg Sargis",
    "winner_school": "Michigan State",
    "loser": "Mike Van Arsdale",
    "loser_school": "Iowa State",
    "result": "Fall 4:25"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Jim Reilly",
    "winner_school": "Lehigh",
    "loser": "Sean McCarthy",
    "loser_school": "Indiana State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Chris Edmond",
    "winner_school": "Tennessee",
    "loser": "Randy Kaiser",
    "loser_school": "Miami Ohio",
    "result": "Dec 13-10"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Bill Gaffney",
    "winner_school": "North Carolina",
    "loser": "Ron Whitman",
    "loser_school": "Wyoming",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Gregg Fatool",
    "loser_school": "NC State",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Monte Wilcox",
    "winner_school": "Louisiana State",
    "loser": "Pat Gibson",
    "loser_school": "Oregon State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Jim Reich",
    "winner_school": "Navy",
    "loser": "Randy Wirtjess",
    "loser_school": "Idaho State",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Shepard Pittman",
    "winner_school": "Missouri",
    "loser": "Jay Winward",
    "loser_school": "Weber State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Chris Casey",
    "winner_school": "Augustana Illinois",
    "loser": "Tim Jones",
    "loser_school": "Northern Michigan",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Lindley Kistler",
    "winner_school": "Iowa",
    "loser": "Greg Williams",
    "loser_school": "Utah State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Mike Degenova",
    "winner_school": "Temple",
    "loser": "Dave Cornemann",
    "loser_school": "South Dakota State",
    "result": "MD 22-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Jeff Jelic",
    "winner_school": "Pittsburgh",
    "loser": "Rudy Isom",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Darrell Gholar",
    "winner_school": "Minnesota",
    "loser": "Jay Llewellyn",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Melvin Douglas",
    "winner_school": "Oklahoma",
    "loser": "John Hanlon",
    "loser_school": "Boston College",
    "result": "MD 35-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 257,
    "winner": "Greg Williams",
    "winner_school": "Utah State",
    "loser": "John Bott",
    "loser_school": "Rider",
    "result": "MD 10-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 1257,
    "winner": "Gregg Fatool",
    "winner_school": "NC State",
    "loser": "Jon Hampton",
    "loser_school": "Appalachian State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Sylvester Carver",
    "winner_school": "Fresno State",
    "loser": "Eric Brugel",
    "loser_school": "Penn State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Jim Reilly",
    "winner_school": "Lehigh",
    "loser": "Greg Sargis",
    "loser_school": "Michigan State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Chris Edmond",
    "winner_school": "Tennessee",
    "loser": "Bill Gaffney",
    "loser_school": "North Carolina",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Monte Wilcox",
    "loser_school": "Louisiana State",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Shepard Pittman",
    "winner_school": "Missouri",
    "loser": "Jim Reich",
    "loser_school": "Navy",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Lindley Kistler",
    "winner_school": "Iowa",
    "loser": "Chris Casey",
    "loser_school": "Augustana Illinois",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Jeff Jelic",
    "winner_school": "Pittsburgh",
    "loser": "Mike Degenova",
    "loser_school": "Temple",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Melvin Douglas",
    "winner_school": "Oklahoma",
    "loser": "Darrell Gholar",
    "loser_school": "Minnesota",
    "result": "Dec 7-1"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 285,
    "winner": "Eric Brugel",
    "winner_school": "Penn State",
    "loser": "Steve Porter",
    "loser_school": "Washington State",
    "result": "MD 20-7"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 286,
    "winner": "Monte Wilcox",
    "winner_school": "Louisiana State",
    "loser": "Gregg Fatool",
    "loser_school": "NC State",
    "result": "MD 19-6"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 287,
    "winner": "Greg Williams",
    "winner_school": "Utah State",
    "loser": "Chris Casey",
    "loser_school": "Augustana Illinois",
    "result": "Dec 10-3"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 288,
    "winner": "Rudy Isom",
    "winner_school": "Wisconsin",
    "loser": "Mike Degenova",
    "loser_school": "Temple",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Sylvester Carver",
    "winner_school": "Fresno State",
    "loser": "Jim Reilly",
    "loser_school": "Lehigh",
    "result": "Dec 10-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Chris Edmond",
    "loser_school": "Tennessee",
    "result": "Fall 6:52"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Lindley Kistler",
    "winner_school": "Iowa",
    "loser": "Shepard Pittman",
    "loser_school": "Missouri",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Jeff Jelic",
    "winner_school": "Pittsburgh",
    "loser": "Melvin Douglas",
    "loser_school": "Oklahoma",
    "result": "FOR"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Eric Brugel",
    "winner_school": "Penn State",
    "loser": "Jim Reilly",
    "loser_school": "Lehigh",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Chris Edmond",
    "winner_school": "Tennessee",
    "loser": "Monte Wilcox",
    "loser_school": "Louisiana State",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "Greg Williams",
    "winner_school": "Utah State",
    "loser": "Shepard Pittman",
    "loser_school": "Missouri",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Rudy Isom",
    "winner_school": "Wisconsin",
    "loser": "Melvin Douglas",
    "loser_school": "Oklahoma",
    "result": "FOR"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 433,
    "winner": "Chris Edmond",
    "winner_school": "Tennessee",
    "loser": "Eric Brugel",
    "loser_school": "Penn State",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 434,
    "winner": "Rudy Isom",
    "winner_school": "Wisconsin",
    "loser": "Greg Williams",
    "loser_school": "Utah State",
    "result": "Dec 1-0"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Sylvester Carver",
    "loser_school": "Fresno State",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Lindley Kistler",
    "winner_school": "Iowa",
    "loser": "Jeff Jelic",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Chris Edmond",
    "winner_school": "Tennessee",
    "loser": "Jeff Jelic",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "Sylvester Carver",
    "winner_school": "Fresno State",
    "loser": "Rudy Isom",
    "loser_school": "Wisconsin",
    "result": "Dec 4-2"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 527,
    "winner": "Greg Williams",
    "winner_school": "Utah State",
    "loser": "Eric Brugel",
    "loser_school": "Penn State",
    "result": "Fall 1:53"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Jeff Jelic",
    "winner_school": "Pittsburgh",
    "loser": "Rudy Isom",
    "loser_school": "Wisconsin",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Sylvester Carver",
    "winner_school": "Fresno State",
    "loser": "Chris Edmond",
    "loser_school": "Tennessee",
    "result": "MD 18-1"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Lindley Kistler",
    "loser_school": "Iowa",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Matt Dulka",
    "winner_school": "Cleveland State",
    "loser": "Tim Curry",
    "loser_school": "Navy",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "Robert Wyndham",
    "loser_school": "Citadel",
    "result": "Fall 5:46"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Jeff Wilson",
    "winner_school": "Stanford",
    "loser": "Tim Cooper",
    "loser_school": "Tennessee",
    "result": "MD 14-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Bob Harr",
    "winner_school": "Penn State",
    "loser": "Tod Praska",
    "loser_school": "Idaho State",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Tom Pillari",
    "winner_school": "SUNY-Binghampton",
    "loser": "Gary Nivens",
    "loser_school": "Clemson",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Mark Cody",
    "winner_school": "Missouri",
    "loser": "Dave Dewalt",
    "loser_school": "Delaware",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Alan Lauchner",
    "loser_school": "Oklahoma State",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Dennis Limmex",
    "winner_school": "Wisconsin",
    "loser": "Todd Darbyshire",
    "loser_school": "Ohio State",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Tom Kolopus",
    "winner_school": "Arizona State",
    "loser": "Scott Glacobbe",
    "loser_school": "Old Dominion",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Doug Dake",
    "winner_school": "Kent State",
    "loser": "Maynard Pelletier",
    "loser_school": "Maine",
    "result": "Fall 2:54"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Marvin Jones",
    "winner_school": "San Jose State",
    "loser": "Marc DeGennaro",
    "loser_school": "Franklin and Marshall",
    "result": "Fall 6:58"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Mike Foy",
    "winner_school": "Minnesota",
    "loser": "John Zito",
    "loser_school": "Syracuse",
    "result": "Fall 1:07"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Booker Benford",
    "winner_school": "SIU-Edwardsville",
    "loser": "Dave Vurik",
    "loser_school": "New Mexico",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Matt Dulka",
    "winner_school": "Cleveland State",
    "loser": "Russ Hanson",
    "loser_school": "Southern Oregon",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "Jeff Wilson",
    "loser_school": "Stanford",
    "result": "MD 20-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Bob Harr",
    "winner_school": "Penn State",
    "loser": "Tom Pillari",
    "loser_school": "SUNY-Binghampton",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Mark Cody",
    "loser_school": "Missouri",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Jim Scherr",
    "winner_school": "Nebraska",
    "loser": "Dennis Limmex",
    "loser_school": "Wisconsin",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Tom Kolopus",
    "winner_school": "Arizona State",
    "loser": "Doug Dake",
    "loser_school": "Kent State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Marvin Jones",
    "winner_school": "San Jose State",
    "loser": "Mike Foy",
    "loser_school": "Minnesota",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Booker Benford",
    "winner_school": "SIU-Edwardsville",
    "loser": "Roger Sayles",
    "loser_school": "Cal Poly",
    "result": "Fall 3:53"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 289,
    "winner": "Jeff Wilson",
    "winner_school": "Stanford",
    "loser": "Robert Wyndham",
    "loser_school": "Citadel",
    "result": "MD 18-0"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 290,
    "winner": "Mark Cody",
    "winner_school": "Missouri",
    "loser": "Alan Lauchner",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 292,
    "winner": "Roger Sayles",
    "winner_school": "Cal Poly",
    "loser": "Dave Vurik",
    "loser_school": "New Mexico",
    "result": "Fall 5:28"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "Matt Dulka",
    "loser_school": "Cleveland State",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Bob Harr",
    "loser_school": "Penn State",
    "result": "MD 17-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Jim Scherr",
    "winner_school": "Nebraska",
    "loser": "Tom Kolopus",
    "loser_school": "Arizona State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Booker Benford",
    "winner_school": "SIU-Edwardsville",
    "loser": "Marvin Jones",
    "loser_school": "San Jose State",
    "result": "Fall 5:46"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "Jeff Wilson",
    "winner_school": "Stanford",
    "loser": "Matt Dulka",
    "loser_school": "Cleveland State",
    "result": "Dec 14-9"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Bob Harr",
    "winner_school": "Penn State",
    "loser": "Mark Cody",
    "loser_school": "Missouri",
    "result": "Dec 9-7"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "Dennis Limmex",
    "winner_school": "Wisconsin",
    "loser": "Tom Kolopus",
    "loser_school": "Arizona State",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Marvin Jones",
    "winner_school": "San Jose State",
    "loser": "Roger Sayles",
    "loser_school": "Cal Poly",
    "result": "Fall 4:59"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 435,
    "winner": "Bob Harr",
    "winner_school": "Penn State",
    "loser": "Jeff Wilson",
    "loser_school": "Stanford",
    "result": "Dec 12-9"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 436,
    "winner": "Dennis Limmex",
    "winner_school": "Wisconsin",
    "loser": "Marvin Jones",
    "loser_school": "San Jose State",
    "result": "Dec 13-6"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Dan Chaid",
    "loser_school": "Oklahoma",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Jim Scherr",
    "winner_school": "Nebraska",
    "loser": "Booker Benford",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Booker Benford",
    "winner_school": "SIU-Edwardsville",
    "loser": "Bob Harr",
    "loser_school": "Penn State",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "Dennis Limmex",
    "loser_school": "Wisconsin",
    "result": "DEF"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 528,
    "winner": "Jeff Wilson",
    "winner_school": "Stanford",
    "loser": "Marvin Jones",
    "loser_school": "San Jose State",
    "result": "Dec 7-6"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Bob Harr",
    "winner_school": "Penn State",
    "loser": "Dennis Limmex",
    "loser_school": "Wisconsin",
    "result": "DEF"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Booker Benford",
    "winner_school": "SIU-Edwardsville",
    "loser": "Dan Chaid",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Jim Scherr",
    "winner_school": "Nebraska",
    "loser": "Duane Goldman",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 9,
    "winner": "Joe Glowacki",
    "winner_school": "Rutgers",
    "loser": "Nick D'Angelo",
    "loser_school": "John Carroll",
    "result": "Dec 9-7"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 1009,
    "winner": "Jim Baumgardner",
    "winner_school": "Oregon State",
    "loser": "Larry Cox",
    "loser_school": "Temple",
    "result": "MD 18-10"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 2009,
    "winner": "Jim Dicker",
    "winner_school": "Lafayette",
    "loser": "Jay Stainback",
    "loser_school": "North Carolina-Pembroke",
    "result": "Fall 3:39"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 3009,
    "winner": "Doug Morse",
    "winner_school": "SUNY-Oswego",
    "loser": "Wilbur Wolf",
    "loser_school": "West Virginia",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Bob Kopecky",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Mike Porcelli",
    "loser_school": "Iowa State",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Jim Beichner",
    "winner_school": "Clarion",
    "loser": "John Heropoulos",
    "loser_school": "Slippery Rock",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Tod Giles",
    "winner_school": "Boston University",
    "loser": "Rocco Llace",
    "loser_school": "Louisiana State",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Pete Bush",
    "winner_school": "Iowa",
    "loser": "Dave Palmer",
    "loser_school": "Oklahoma",
    "result": "Fall 2:57"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Bill Scherr",
    "winner_school": "Nebraska",
    "loser": "Doug Morse",
    "loser_school": "SUNY-Oswego",
    "result": "MD 26-8"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Ernie Badger",
    "winner_school": "SIU-Edwardsville",
    "loser": "Jeff Weatherman",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "John McFadden",
    "winner_school": "Bloomsburg",
    "loser": "Jim Dicker",
    "loser_school": "Lafayette",
    "result": "Dec 17-13"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Paul Diekel",
    "winner_school": "Lehigh",
    "loser": "Ryan Western",
    "loser_school": "Weber State",
    "result": "Fall 6:10"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Bob Shriner",
    "winner_school": "North Carolina",
    "loser": "Dan Hartman",
    "loser_school": "Western Illinois",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Jim Baumgardner",
    "winner_school": "Oregon State",
    "loser": "Ron Hansen",
    "loser_school": "Brigham Young",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Mike Davies",
    "winner_school": "Arizona State",
    "loser": "John Connelly",
    "loser_school": "NC State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Andy Tsarnas",
    "winner_school": "San Jose State",
    "loser": "Joe Glowacki",
    "loser_school": "Rutgers",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Eli Blazeff",
    "winner_school": "Michigan State",
    "loser": "Kurt Honis",
    "loser_school": "Syracuse",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "John Bauman",
    "winner_school": "Boise State",
    "loser": "Kent Vanderloon",
    "loser_school": "Central Michigan",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Karl Lynes",
    "winner_school": "Oklahoma State",
    "loser": "Kirk Trost",
    "loser_school": "Michigan",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Gerry Volm",
    "winner_school": "Rider",
    "loser": "Brad Steward",
    "loser_school": "Oregon",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "190",
    "bout": 259,
    "winner": "Ron Hansen",
    "winner_school": "Brigham Young",
    "loser": "Larry Cox",
    "loser_school": "Temple",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Jim Beichner",
    "winner_school": "Clarion",
    "loser": "Bob Kopecky",
    "loser_school": "Nevada-Las Vegas",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Tod Giles",
    "winner_school": "Boston University",
    "loser": "Pete Bush",
    "loser_school": "Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Bill Scherr",
    "winner_school": "Nebraska",
    "loser": "Ernie Badger",
    "loser_school": "SIU-Edwardsville",
    "result": "Fall 4:59"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Paul Diekel",
    "winner_school": "Lehigh",
    "loser": "John McFadden",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Jim Baumgardner",
    "winner_school": "Oregon State",
    "loser": "Bob Shriner",
    "loser_school": "North Carolina",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Andy Tsarnas",
    "winner_school": "San Jose State",
    "loser": "Mike Davies",
    "loser_school": "Arizona State",
    "result": "Fall 3:47"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Eli Blazeff",
    "winner_school": "Michigan State",
    "loser": "John Bauman",
    "loser_school": "Boise State",
    "result": "MD 16-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Karl Lynes",
    "winner_school": "Oklahoma State",
    "loser": "Gerry Volm",
    "loser_school": "Rider",
    "result": "Dec 15-8"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 293,
    "winner": "John Heropoulos",
    "winner_school": "Slippery Rock",
    "loser": "Bob Kopecky",
    "loser_school": "Nevada-Las Vegas",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 294,
    "winner": "Doug Morse",
    "winner_school": "SUNY-Oswego",
    "loser": "Ernie Badger",
    "loser_school": "SIU-Edwardsville",
    "result": "Fall 3:39"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 295,
    "winner": "Bob Shriner",
    "winner_school": "North Carolina",
    "loser": "Ron Hansen",
    "loser_school": "Brigham Young",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 296,
    "winner": "Kurt Honis",
    "winner_school": "Syracuse",
    "loser": "John Bauman",
    "loser_school": "Boise State",
    "result": "Fall 3:12"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Jim Beichner",
    "winner_school": "Clarion",
    "loser": "Tod Giles",
    "loser_school": "Boston University",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Bill Scherr",
    "winner_school": "Nebraska",
    "loser": "Paul Diekel",
    "loser_school": "Lehigh",
    "result": "Fall 2:42"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Jim Baumgardner",
    "winner_school": "Oregon State",
    "loser": "Andy Tsarnas",
    "loser_school": "San Jose State",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Eli Blazeff",
    "winner_school": "Michigan State",
    "loser": "Karl Lynes",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "Tod Giles",
    "winner_school": "Boston University",
    "loser": "John Heropoulos",
    "loser_school": "Slippery Rock",
    "result": "Dec 6-2"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "Paul Diekel",
    "winner_school": "Lehigh",
    "loser": "Doug Morse",
    "loser_school": "SUNY-Oswego",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Bob Shriner",
    "winner_school": "North Carolina",
    "loser": "Andy Tsarnas",
    "loser_school": "San Jose State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Karl Lynes",
    "winner_school": "Oklahoma State",
    "loser": "Kurt Honis",
    "loser_school": "Syracuse",
    "result": "Dec 10-4"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 437,
    "winner": "Paul Diekel",
    "winner_school": "Lehigh",
    "loser": "Tod Giles",
    "loser_school": "Boston University",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 438,
    "winner": "Karl Lynes",
    "winner_school": "Oklahoma State",
    "loser": "Bob Shriner",
    "loser_school": "North Carolina",
    "result": "Fall 3:34"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Bill Scherr",
    "winner_school": "Nebraska",
    "loser": "Jim Beichner",
    "loser_school": "Clarion",
    "result": "MD 20-6"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Jim Baumgardner",
    "winner_school": "Oregon State",
    "loser": "Eli Blazeff",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Eli Blazeff",
    "winner_school": "Michigan State",
    "loser": "Paul Diekel",
    "loser_school": "Lehigh",
    "result": "Dec 9-6"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Karl Lynes",
    "winner_school": "Oklahoma State",
    "loser": "Jim Beichner",
    "loser_school": "Clarion",
    "result": "Dec 8-4"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 529,
    "winner": "Bob Shriner",
    "winner_school": "North Carolina",
    "loser": "Tod Giles",
    "loser_school": "Boston University",
    "result": "DEF"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Jim Beichner",
    "winner_school": "Clarion",
    "loser": "Paul Diekel",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Eli Blazeff",
    "winner_school": "Michigan State",
    "loser": "Karl Lynes",
    "loser_school": "Oklahoma State",
    "result": "MD 8-0"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Bill Scherr",
    "winner_school": "Nebraska",
    "loser": "Jim Baumgardner",
    "loser_school": "Oregon State",
    "result": "MD 13-4"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 10,
    "winner": "Mike Connors",
    "winner_school": "St. Lawrence",
    "loser": "David Besser",
    "loser_school": "Appalachian State",
    "result": "Fall 6:33"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 1010,
    "winner": "Bill Hyman",
    "winner_school": "Temple",
    "loser": "Duane Clark",
    "loser_school": "Eastern Illinois",
    "result": "Dec 10-5"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 2010,
    "winner": "Andy Schwab",
    "winner_school": "Syracuse",
    "loser": "Matt Ghaffari",
    "loser_school": "Cleveland State",
    "result": "Dec 6-1 TB"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 3010,
    "winner": "Tab Thacker",
    "winner_school": "NC State",
    "loser": "Wendall Ellis",
    "loser_school": "Washington State",
    "result": "Fall 2:26"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 155,
    "winner": "Rick Petersen",
    "winner_school": "Lock Haven",
    "loser": "Arnie Bagley",
    "loser_school": "Idaho State",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 156,
    "winner": "Darryl Peterson",
    "winner_school": "Iowa State",
    "loser": "Mike Mondale",
    "loser_school": "Oregon State",
    "result": "Fall 3:48"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 157,
    "winner": "Kahlan O'Hara",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Perry Kauffman",
    "loser_school": "Oklahoma State",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Mike Holcomb",
    "winner_school": "Miami Ohio",
    "loser": "Walt Dunayczan",
    "loser_school": "Michigan",
    "result": "Fall 6:23"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 159,
    "winner": "Andy Schwab",
    "winner_school": "Syracuse",
    "loser": "Henry Williams",
    "loser_school": "Brigham Young",
    "result": "Fall 4:59"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 160,
    "winner": "Jamie Webber",
    "winner_school": "Louisiana State",
    "loser": "Nick Zonfrelli",
    "loser_school": "Hofstra",
    "result": "Fall 6:17"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 161,
    "winner": "Tab Thacker",
    "winner_school": "NC State",
    "loser": "Bill Lingenfelser",
    "loser_school": "Wyoming",
    "result": "Fall 1:07"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Mike Blaske",
    "winner_school": "CSU Bakersfield",
    "loser": "Terry Maki",
    "loser_school": "Air Force",
    "result": "MD 24-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Mike Potts",
    "winner_school": "Michigan State",
    "loser": "Mark Tatum",
    "loser_school": "Oklahoma",
    "result": "Fall 1:03"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 164,
    "winner": "Bill Hyman",
    "winner_school": "Temple",
    "loser": "Matt Boyle",
    "loser_school": "Yale",
    "result": "Fall 1:08"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 165,
    "winner": "Morris Johnson",
    "winner_school": "San Francisco State",
    "loser": "Jeff Green",
    "loser_school": "Morgan State",
    "result": "Fall 1:29"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 166,
    "winner": "Mike Connors",
    "winner_school": "St. Lawrence",
    "loser": "Al Jenson",
    "loser_school": "Minnesota",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "Rick Brunot",
    "winner_school": "Youngstown State",
    "loser": "Steve Sefter",
    "loser_school": "Penn State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 168,
    "winner": "John Kriebs",
    "winner_school": "Northern Iowa",
    "loser": "Steve Nelson",
    "loser_school": "Illinois",
    "result": "MD 16-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 169,
    "winner": "Rod Severn",
    "winner_school": "Arizona State",
    "loser": "Darryl White",
    "loser_school": "Maryland",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 170,
    "winner": "Gary Albright",
    "winner_school": "Nebraska",
    "loser": "Tim Pangonas",
    "loser_school": "Bucknell",
    "result": "Fall 1:29"
  },
  {
    "round": "ConsPrelims",
    "weight": "UNL",
    "bout": 260,
    "winner": "Matt Boyle",
    "winner_school": "Yale",
    "loser": "Duane Clark",
    "loser_school": "Eastern Illinois",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "UNL",
    "bout": 1260,
    "winner": "Wendall Ellis",
    "winner_school": "Washington State",
    "loser": "Bill Lingenfelser",
    "loser_school": "Wyoming",
    "result": "Fall 3:37"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Rick Petersen",
    "winner_school": "Lock Haven",
    "loser": "Darryl Peterson",
    "loser_school": "Iowa State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Mike Holcomb",
    "winner_school": "Miami Ohio",
    "loser": "Kahlan O'Hara",
    "loser_school": "Nevada-Las Vegas",
    "result": "MD 17-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Jamie Webber",
    "winner_school": "Louisiana State",
    "loser": "Andy Schwab",
    "loser_school": "Syracuse",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Tab Thacker",
    "winner_school": "NC State",
    "loser": "Mike Blaske",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Bill Hyman",
    "winner_school": "Temple",
    "loser": "Mike Potts",
    "loser_school": "Michigan State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Morris Johnson",
    "winner_school": "San Francisco State",
    "loser": "Mike Connors",
    "loser_school": "St. Lawrence",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "John Kriebs",
    "winner_school": "Northern Iowa",
    "loser": "Rick Brunot",
    "loser_school": "Youngstown State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Gary Albright",
    "winner_school": "Nebraska",
    "loser": "Rod Severn",
    "loser_school": "Arizona State",
    "result": "Fall 6:16"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 297,
    "winner": "Kahlan O'Hara",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Walt Dunayczan",
    "loser_school": "Michigan",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 298,
    "winner": "Mike Blaske",
    "winner_school": "CSU Bakersfield",
    "loser": "Wendall Ellis",
    "loser_school": "Washington State",
    "result": "Dec 10-8"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 299,
    "winner": "Mike Potts",
    "winner_school": "Michigan State",
    "loser": "Matt Boyle",
    "loser_school": "Yale",
    "result": "Fall 2:21"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 300,
    "winner": "Rod Severn",
    "winner_school": "Arizona State",
    "loser": "Tim Pangonas",
    "loser_school": "Bucknell",
    "result": "MD 13-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Mike Holcomb",
    "winner_school": "Miami Ohio",
    "loser": "Rick Petersen",
    "loser_school": "Lock Haven",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Tab Thacker",
    "winner_school": "NC State",
    "loser": "Jamie Webber",
    "loser_school": "Louisiana State",
    "result": "Fall 2:09"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Bill Hyman",
    "winner_school": "Temple",
    "loser": "Morris Johnson",
    "loser_school": "San Francisco State",
    "result": "MD 14-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Gary Albright",
    "winner_school": "Nebraska",
    "loser": "John Kriebs",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:40"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 417,
    "winner": "Kahlan O'Hara",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Rick Petersen",
    "loser_school": "Lock Haven",
    "result": "Dec 12-5"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 418,
    "winner": "Mike Blaske",
    "winner_school": "CSU Bakersfield",
    "loser": "Jamie Webber",
    "loser_school": "Louisiana State",
    "result": "MD 10-0"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 419,
    "winner": "Mike Potts",
    "winner_school": "Michigan State",
    "loser": "Morris Johnson",
    "loser_school": "San Francisco State",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 420,
    "winner": "John Kriebs",
    "winner_school": "Northern Iowa",
    "loser": "Rod Severn",
    "loser_school": "Arizona State",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 439,
    "winner": "Kahlan O'Hara",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Mike Blaske",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 10-6"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 440,
    "winner": "John Kriebs",
    "winner_school": "Northern Iowa",
    "loser": "Mike Potts",
    "loser_school": "Michigan State",
    "result": "Fall 1:09"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Tab Thacker",
    "winner_school": "NC State",
    "loser": "Mike Holcomb",
    "loser_school": "Miami Ohio",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Gary Albright",
    "winner_school": "Nebraska",
    "loser": "Bill Hyman",
    "loser_school": "Temple",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 499,
    "winner": "Bill Hyman",
    "winner_school": "Temple",
    "loser": "Kahlan O'Hara",
    "loser_school": "Nevada-Las Vegas",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 500,
    "winner": "Mike Holcomb",
    "winner_school": "Miami Ohio",
    "loser": "John Kriebs",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "UNL",
    "bout": 530,
    "winner": "Mike Blaske",
    "winner_school": "CSU Bakersfield",
    "loser": "Mike Potts",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "Kahlan O'Hara",
    "winner_school": "Nevada-Las Vegas",
    "loser": "John Kriebs",
    "loser_school": "Northern Iowa",
    "result": "Fall 1:51"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Mike Holcomb",
    "winner_school": "Miami Ohio",
    "loser": "Bill Hyman",
    "loser_school": "Temple",
    "result": "Dec 4-0"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Tab Thacker",
    "winner_school": "NC State",
    "loser": "Gary Albright",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
