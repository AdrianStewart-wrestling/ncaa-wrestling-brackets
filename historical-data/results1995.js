// 1995 NCAA Division I Wrestling Championships (3/16/1995 to 3/18/1995 at Iowa). Weight classes 118-275. Consolation: QUARTERFINAL WRESTLEBACK (rounds WbConsR1-R5).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1995 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1995-provenance.js
const resultData = [
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "John Noble",
    "winner_school": "Ohio",
    "loser": "Mike Orris",
    "loser_school": "Appalachian State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Jerred Kelso",
    "winner_school": "Oklahoma State",
    "loser": "Brandon Paulson",
    "loser_school": "Minnesota",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Mike Mena",
    "winner_school": "Iowa",
    "loser": "Shawn Knapik",
    "loser_school": "Central Connecticut",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Stephen Herishen",
    "winner_school": "Manhattan",
    "loser": "Lindsay Durlacher",
    "loser_school": "Illinois",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Eric Ivins",
    "winner_school": "Oklahoma",
    "loser": "David Pena",
    "loser_school": "Eastern Illinois",
    "result": "Fall 2:43"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Ken Rossi",
    "winner_school": "James Madison",
    "loser": "Can Tran",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 6:05"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Alfonso Cruz",
    "winner_school": "Iowa State",
    "loser": "Sheldon Thomas",
    "loser_school": "Clarion",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Sean Kim",
    "winner_school": "Fresno State",
    "loser": "Jeff Cervone",
    "loser_school": "Syracuse",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Kevin Roberts",
    "winner_school": "Oregon",
    "loser": "Gary Baker",
    "loser_school": "Penn",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Brett Bingham",
    "winner_school": "Boise State",
    "loser": "Mike Miller",
    "loser_school": "NC State",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Jeff Mirabella",
    "winner_school": "Northwestern",
    "loser": "Brian Maksimowski",
    "loser_school": "Central Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Kelvin Jackson",
    "winner_school": "Michigan State",
    "loser": "Matt Roth",
    "loser_school": "Virginia",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Brad Canoyer",
    "winner_school": "Nebraska",
    "loser": "Dennis Kitko",
    "loser_school": "Cornell",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Matt Hanutke",
    "winner_school": "Wisconsin",
    "loser": "Pete Rinella",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Brad Silimperi",
    "winner_school": "Lock Haven",
    "loser": "Damon Bryant",
    "loser_school": "Howard",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Danny Felix",
    "winner_school": "Arizona State",
    "loser": "Shawn Conyers",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Jerred Kelso",
    "winner_school": "Oklahoma State",
    "loser": "John Noble",
    "loser_school": "Ohio",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Mike Mena",
    "winner_school": "Iowa",
    "loser": "Stephen Herishen",
    "loser_school": "Manhattan",
    "result": "TF 20-5 6:21"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Eric Ivins",
    "winner_school": "Oklahoma",
    "loser": "Ken Rossi",
    "loser_school": "James Madison",
    "result": "Fall 4:43"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "Alfonso Cruz",
    "winner_school": "Iowa State",
    "loser": "Sean Kim",
    "loser_school": "Fresno State",
    "result": "Dec 14-12"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Brett Bingham",
    "winner_school": "Boise State",
    "loser": "Kevin Roberts",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Kelvin Jackson",
    "winner_school": "Michigan State",
    "loser": "Jeff Mirabella",
    "loser_school": "Northwestern",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Matt Hanutke",
    "winner_school": "Wisconsin",
    "loser": "Brad Canoyer",
    "loser_school": "Nebraska",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Danny Felix",
    "winner_school": "Arizona State",
    "loser": "Brad Silimperi",
    "loser_school": "Lock Haven",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Brandon Paulson",
    "winner_school": "Minnesota",
    "loser": "John Noble",
    "loser_school": "Ohio",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Shawn Knapik",
    "winner_school": "Central Connecticut",
    "loser": "Stephen Herishen",
    "loser_school": "Manhattan",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "David Pena",
    "winner_school": "Eastern Illinois",
    "loser": "Ken Rossi",
    "loser_school": "James Madison",
    "result": "TF 17-2 6:00"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Sheldon Thomas",
    "winner_school": "Clarion",
    "loser": "Sean Kim",
    "loser_school": "Fresno State",
    "result": "Dec 5-0"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 265,
    "winner": "Kevin Roberts",
    "winner_school": "Oregon",
    "loser": "Mike Miller",
    "loser_school": "NC State",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 266,
    "winner": "Jeff Mirabella",
    "winner_school": "Northwestern",
    "loser": "Matt Roth",
    "loser_school": "Virginia",
    "result": "MD 10-2"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 267,
    "winner": "Brad Canoyer",
    "winner_school": "Nebraska",
    "loser": "Pete Rinella",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 268,
    "winner": "Brad Silimperi",
    "winner_school": "Lock Haven",
    "loser": "Shawn Conyers",
    "loser_school": "Ohio State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Mike Mena",
    "winner_school": "Iowa",
    "loser": "Jerred Kelso",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "Eric Ivins",
    "winner_school": "Oklahoma",
    "loser": "Alfonso Cruz",
    "loser_school": "Iowa State",
    "result": "FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Kelvin Jackson",
    "winner_school": "Michigan State",
    "loser": "Brett Bingham",
    "loser_school": "Boise State",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Matt Hanutke",
    "winner_school": "Wisconsin",
    "loser": "Danny Felix",
    "loser_school": "Arizona State",
    "result": "Dec 4-3 SV"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Brandon Paulson",
    "winner_school": "Minnesota",
    "loser": "Shawn Knapik",
    "loser_school": "Central Connecticut",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Sheldon Thomas",
    "winner_school": "Clarion",
    "loser": "David Pena",
    "loser_school": "Eastern Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Kevin Roberts",
    "winner_school": "Oregon",
    "loser": "Jeff Mirabella",
    "loser_school": "Northwestern",
    "result": "MD 9-0"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Brad Canoyer",
    "winner_school": "Nebraska",
    "loser": "Brad Silimperi",
    "loser_school": "Lock Haven",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Danny Felix",
    "winner_school": "Arizona State",
    "loser": "Brandon Paulson",
    "loser_school": "Minnesota",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Sheldon Thomas",
    "winner_school": "Clarion",
    "loser": "Brett Bingham",
    "loser_school": "Boise State",
    "result": "Dec 8-1"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 423,
    "winner": "Kevin Roberts",
    "winner_school": "Oregon",
    "loser": "Alfonso Cruz",
    "loser_school": "Iowa State",
    "result": "FOR"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 424,
    "winner": "Brad Canoyer",
    "winner_school": "Nebraska",
    "loser": "Jerred Kelso",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-2"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Eric Ivins",
    "winner_school": "Oklahoma",
    "loser": "Mike Mena",
    "loser_school": "Iowa",
    "result": "Dec 11-6"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Kelvin Jackson",
    "winner_school": "Michigan State",
    "loser": "Matt Hanutke",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Sheldon Thomas",
    "winner_school": "Clarion",
    "loser": "Danny Felix",
    "loser_school": "Arizona State",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Brad Canoyer",
    "winner_school": "Nebraska",
    "loser": "Kevin Roberts",
    "loser_school": "Oregon",
    "result": "MD 9-0"
  },
  {
    "round": "WbConsR5",
    "weight": "118",
    "bout": 501,
    "winner": "Mike Mena",
    "winner_school": "Iowa",
    "loser": "Sheldon Thomas",
    "loser_school": "Clarion",
    "result": "Dec 7-2"
  },
  {
    "round": "WbConsR5",
    "weight": "118",
    "bout": 502,
    "winner": "Matt Hanutke",
    "winner_school": "Wisconsin",
    "loser": "Brad Canoyer",
    "loser_school": "Nebraska",
    "result": "Dec 5-1"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 521,
    "winner": "Danny Felix",
    "winner_school": "Arizona State",
    "loser": "Kevin Roberts",
    "loser_school": "Oregon",
    "result": "DEF"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Sheldon Thomas",
    "winner_school": "Clarion",
    "loser": "Brad Canoyer",
    "loser_school": "Nebraska",
    "result": "MD 12-1"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Mike Mena",
    "winner_school": "Iowa",
    "loser": "Matt Hanutke",
    "loser_school": "Wisconsin",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Kelvin Jackson",
    "winner_school": "Michigan State",
    "loser": "Eric Ivins",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Troy Spencer",
    "winner_school": "Edinboro",
    "loser": "Jeremy Ensrud",
    "loser_school": "Oregon",
    "result": "TF 15-0 6:49"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "Justin Martin",
    "winner_school": "Wyoming",
    "loser": "Jason Solomon",
    "loser_school": "Northern Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2002,
    "winner": "Tim Harris",
    "winner_school": "Minnesota",
    "loser": "Coby Wright",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 13-10"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 3002,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Erik Gustafson",
    "loser_school": "Eastern Illinois",
    "result": "Fall 1:46"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Jason Kobrynich",
    "loser_school": "East Stroudsburg",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Tom Koch",
    "winner_school": "Lehigh",
    "loser": "Chris Heckel",
    "loser_school": "Duke",
    "result": "Dec 13-10"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Brian Bolton",
    "winner_school": "Michigan State",
    "loser": "David Barden",
    "loser_school": "Chattanooga",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Chad Jesko",
    "winner_school": "Pittsburgh",
    "loser": "Eric Jetton",
    "loser_school": "Wisconsin",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Troy Spencer",
    "winner_school": "Edinboro",
    "loser": "Scott Murray",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Aaron Mickiewicz",
    "loser_school": "VMI",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Brandon Howe",
    "winner_school": "Michigan",
    "loser": "Mike Clayton",
    "loser_school": "Navy",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Shawn Enright",
    "winner_school": "Ohio",
    "loser": "Wayne Jackson",
    "loser_school": "NC State",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Sanshiro Abe",
    "winner_school": "Penn State",
    "loser": "Justin Martin",
    "loser_school": "Wyoming",
    "result": "MD 22-8"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Ray Weis",
    "winner_school": "Oklahoma State",
    "loser": "Jason Mutarelli",
    "loser_school": "Virginia",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Matt Finacchio",
    "winner_school": "George Mason",
    "loser": "Jason Clark",
    "loser_school": "Clarion",
    "result": "Fall 3:18"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Glenn Nieradka",
    "winner_school": "Oregon State",
    "loser": "Mark DiStefano",
    "loser_school": "Rider",
    "result": "Fall 2:10"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Tim Harris",
    "winner_school": "Minnesota",
    "loser": "Clevans Robinson",
    "loser_school": "Coppin State",
    "result": "Fall 4:21"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Brad Rozanski",
    "winner_school": "Bloomsburg",
    "loser": "Kevin Haynes",
    "loser_school": "Illinois State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Brian Stewart",
    "winner_school": "Illinois",
    "loser": "Matt Cano",
    "loser_school": "Stanford",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Steve Baer",
    "winner_school": "Nebraska",
    "loser": "Jim Schopf",
    "loser_school": "Millersville",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 252,
    "winner": "Erik Gustafson",
    "winner_school": "Eastern Illinois",
    "loser": "Jason Kobrynich",
    "loser_school": "East Stroudsburg",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 1252,
    "winner": "Coby Wright",
    "winner_school": "CSU Bakersfield",
    "loser": "Clevans Robinson",
    "loser_school": "Coppin State",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Tom Koch",
    "loser_school": "Lehigh",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Brian Bolton",
    "winner_school": "Michigan State",
    "loser": "Chad Jesko",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Troy Spencer",
    "loser_school": "Edinboro",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Shawn Enright",
    "winner_school": "Ohio",
    "loser": "Brandon Howe",
    "loser_school": "Michigan",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Sanshiro Abe",
    "winner_school": "Penn State",
    "loser": "Ray Weis",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Matt Finacchio",
    "winner_school": "George Mason",
    "loser": "Glenn Nieradka",
    "loser_school": "Oregon State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Tim Harris",
    "winner_school": "Minnesota",
    "loser": "Brad Rozanski",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Steve Baer",
    "winner_school": "Nebraska",
    "loser": "Brian Stewart",
    "loser_school": "Illinois",
    "result": "Dec 9-6"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 269,
    "winner": "Tom Koch",
    "winner_school": "Lehigh",
    "loser": "Erik Gustafson",
    "loser_school": "Eastern Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 270,
    "winner": "David Barden",
    "winner_school": "Chattanooga",
    "loser": "Chad Jesko",
    "loser_school": "Pittsburgh",
    "result": "MD 10-2"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 271,
    "winner": "Aaron Mickiewicz",
    "winner_school": "VMI",
    "loser": "Troy Spencer",
    "loser_school": "Edinboro",
    "result": "Dec 7-2"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 272,
    "winner": "Wayne Jackson",
    "winner_school": "NC State",
    "loser": "Brandon Howe",
    "loser_school": "Michigan",
    "result": "MD 8-0"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 273,
    "winner": "Ray Weis",
    "winner_school": "Oklahoma State",
    "loser": "Justin Martin",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 274,
    "winner": "Glenn Nieradka",
    "winner_school": "Oregon State",
    "loser": "Jason Clark",
    "loser_school": "Clarion",
    "result": "Fall 0:54"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 275,
    "winner": "Coby Wright",
    "winner_school": "CSU Bakersfield",
    "loser": "Brad Rozanski",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 276,
    "winner": "Jim Schopf",
    "winner_school": "Millersville",
    "loser": "Brian Stewart",
    "loser_school": "Illinois",
    "result": "Dec 1-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Brian Bolton",
    "loser_school": "Michigan State",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Shawn Enright",
    "loser_school": "Ohio",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Sanshiro Abe",
    "winner_school": "Penn State",
    "loser": "Matt Finacchio",
    "loser_school": "George Mason",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "Steve Baer",
    "winner_school": "Nebraska",
    "loser": "Tim Harris",
    "loser_school": "Minnesota",
    "result": "Fall 6:35"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Tom Koch",
    "winner_school": "Lehigh",
    "loser": "David Barden",
    "loser_school": "Chattanooga",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Wayne Jackson",
    "winner_school": "NC State",
    "loser": "Aaron Mickiewicz",
    "loser_school": "VMI",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Glenn Nieradka",
    "winner_school": "Oregon State",
    "loser": "Ray Weis",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-0"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Jim Schopf",
    "winner_school": "Millersville",
    "loser": "Coby Wright",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 425,
    "winner": "Tim Harris",
    "winner_school": "Minnesota",
    "loser": "Tom Koch",
    "loser_school": "Lehigh",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 426,
    "winner": "Matt Finacchio",
    "winner_school": "George Mason",
    "loser": "Wayne Jackson",
    "loser_school": "NC State",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 427,
    "winner": "Glenn Nieradka",
    "winner_school": "Oregon State",
    "loser": "Shawn Enright",
    "loser_school": "Ohio",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 428,
    "winner": "Brian Bolton",
    "winner_school": "Michigan State",
    "loser": "Jim Schopf",
    "loser_school": "Millersville",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Dwight Hinson",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Sanshiro Abe",
    "winner_school": "Penn State",
    "loser": "Steve Baer",
    "loser_school": "Nebraska",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "Tim Harris",
    "winner_school": "Minnesota",
    "loser": "Matt Finacchio",
    "loser_school": "George Mason",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "WbConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Glenn Nieradka",
    "winner_school": "Oregon State",
    "loser": "Brian Bolton",
    "loser_school": "Michigan State",
    "result": "Fall 1:49"
  },
  {
    "round": "WbConsR5",
    "weight": "126",
    "bout": 503,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Tim Harris",
    "loser_school": "Minnesota",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR5",
    "weight": "126",
    "bout": 504,
    "winner": "Glenn Nieradka",
    "winner_school": "Oregon State",
    "loser": "Steve Baer",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 522,
    "winner": "Brian Bolton",
    "winner_school": "Michigan State",
    "loser": "Matt Finacchio",
    "loser_school": "George Mason",
    "result": "Dec 9-6"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Steve Baer",
    "winner_school": "Nebraska",
    "loser": "Tim Harris",
    "loser_school": "Minnesota",
    "result": "MD 8-0"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Glenn Nieradka",
    "loser_school": "Oregon State",
    "result": "Dec 10-8"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Sanshiro Abe",
    "loser_school": "Penn State",
    "result": "Dec 6-4"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Jim Johnson",
    "winner_school": "Ohio State",
    "loser": "Tony DeAnda",
    "loser_school": "Nebraska",
    "result": "Dec 12-7"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Scott Bitely",
    "winner_school": "Central Michigan",
    "loser": "Willie Stravino",
    "loser_school": "George Mason",
    "result": "Fall 4:07"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 2003,
    "winner": "Jason Nase",
    "winner_school": "Rider",
    "loser": "Adam Mickiewicz",
    "loser_school": "VMI",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Scott Bitely",
    "winner_school": "Central Michigan",
    "loser": "Brian Leitzel",
    "loser_school": "Lock Haven",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "T.J. Jaworsky",
    "winner_school": "North Carolina",
    "loser": "Emilio Nardone",
    "loser_school": "Seton Hall",
    "result": "Fall 1:32"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Frank Laccone",
    "winner_school": "Purdue",
    "loser": "Jody Staylor",
    "loser_school": "Old Dominion",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "J.J. Fasnacht",
    "winner_school": "Pittsburgh",
    "loser": "Blake Tompkins",
    "loser_school": "Oregon",
    "result": "TF 17-2 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Steve Feckanin",
    "winner_school": "Edinboro",
    "loser": "Jason Nase",
    "loser_school": "Rider",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Ryan Nunamaker",
    "loser_school": "NC State",
    "result": "TF 21-6 5:00"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Tony Pariano",
    "winner_school": "Northwestern",
    "loser": "Dan Beerman",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Steve St. John",
    "winner_school": "Arizona State",
    "loser": "Jared Ezzell",
    "loser_school": "Georgia State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Steve Caruso",
    "winner_school": "Bucknell",
    "loser": "Jim Johnson",
    "loser_school": "Ohio State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Babak Mohammadi",
    "winner_school": "Oregon State",
    "loser": "Jason Davids",
    "loser_school": "Minnesota",
    "result": "Dec 15-10"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Cody Tate",
    "winner_school": "Iowa State",
    "loser": "Jimmy Aguirre",
    "loser_school": "Stanford",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "DeWayne Zinkin",
    "winner_school": "Fresno State",
    "loser": "Jed Kramer",
    "loser_school": "Michigan State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "John McCumber",
    "winner_school": "Lehigh",
    "loser": "Khalil Abdul-Malik",
    "loser_school": "William & Mary",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Eric Kimble",
    "winner_school": "Ohio",
    "loser": "Jon Vaughn",
    "loser_school": "Illinois",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Tom Tomeo",
    "winner_school": "Clarion",
    "loser": "Charlie Morgan",
    "loser_school": "Morgan State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Steven Schmidt",
    "winner_school": "Oklahoma State",
    "loser": "Mike Yancosky",
    "loser_school": "Cornell",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "T.J. Jaworsky",
    "winner_school": "North Carolina",
    "loser": "Scott Bitely",
    "loser_school": "Central Michigan",
    "result": "Fall 4:14"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Frank Laccone",
    "winner_school": "Purdue",
    "loser": "J.J. Fasnacht",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Steve Feckanin",
    "loser_school": "Edinboro",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Steve St. John",
    "winner_school": "Arizona State",
    "loser": "Tony Pariano",
    "loser_school": "Northwestern",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Babak Mohammadi",
    "winner_school": "Oregon State",
    "loser": "Steve Caruso",
    "loser_school": "Bucknell",
    "result": "TF 22-5"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "DeWayne Zinkin",
    "winner_school": "Fresno State",
    "loser": "Cody Tate",
    "loser_school": "Iowa State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Eric Kimble",
    "winner_school": "Ohio",
    "loser": "John McCumber",
    "loser_school": "Lehigh",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Steven Schmidt",
    "winner_school": "Oklahoma State",
    "loser": "Tom Tomeo",
    "loser_school": "Clarion",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 277,
    "winner": "Scott Bitely",
    "winner_school": "Central Michigan",
    "loser": "Emilio Nardone",
    "loser_school": "Seton Hall",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 278,
    "winner": "J.J. Fasnacht",
    "winner_school": "Pittsburgh",
    "loser": "Jody Staylor",
    "loser_school": "Old Dominion",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 279,
    "winner": "Steve Feckanin",
    "winner_school": "Edinboro",
    "loser": "Ryan Nunamaker",
    "loser_school": "NC State",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 280,
    "winner": "Tony Pariano",
    "winner_school": "Northwestern",
    "loser": "Jared Ezzell",
    "loser_school": "Georgia State",
    "result": "MD 13-3"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 281,
    "winner": "Jason Davids",
    "winner_school": "Minnesota",
    "loser": "Steve Caruso",
    "loser_school": "Bucknell",
    "result": "Fall 0:18"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 282,
    "winner": "Cody Tate",
    "winner_school": "Iowa State",
    "loser": "Jed Kramer",
    "loser_school": "Michigan State",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 283,
    "winner": "Jon Vaughn",
    "winner_school": "Illinois",
    "loser": "John McCumber",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 284,
    "winner": "Mike Yancosky",
    "winner_school": "Cornell",
    "loser": "Tom Tomeo",
    "loser_school": "Clarion",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "T.J. Jaworsky",
    "winner_school": "North Carolina",
    "loser": "Frank Laccone",
    "loser_school": "Purdue",
    "result": "Fall 0:37"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Steve St. John",
    "winner_school": "Arizona State",
    "loser": "Mark Ironside",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Babak Mohammadi",
    "winner_school": "Oregon State",
    "loser": "DeWayne Zinkin",
    "loser_school": "Fresno State",
    "result": "Dec 11-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Eric Kimble",
    "winner_school": "Ohio",
    "loser": "Steven Schmidt",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "J.J. Fasnacht",
    "winner_school": "Pittsburgh",
    "loser": "Scott Bitely",
    "loser_school": "Central Michigan",
    "result": "Dec 13-7"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Tony Pariano",
    "winner_school": "Northwestern",
    "loser": "Steve Feckanin",
    "loser_school": "Edinboro",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Jason Davids",
    "winner_school": "Minnesota",
    "loser": "Cody Tate",
    "loser_school": "Iowa State",
    "result": "Dec 7-2"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Mike Yancosky",
    "winner_school": "Cornell",
    "loser": "Jon Vaughn",
    "loser_school": "Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 429,
    "winner": "J.J. Fasnacht",
    "winner_school": "Pittsburgh",
    "loser": "Steven Schmidt",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-4 SV"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 430,
    "winner": "DeWayne Zinkin",
    "winner_school": "Fresno State",
    "loser": "Tony Pariano",
    "loser_school": "Northwestern",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 431,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Jason Davids",
    "loser_school": "Minnesota",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 432,
    "winner": "Frank Laccone",
    "winner_school": "Purdue",
    "loser": "Mike Yancosky",
    "loser_school": "Cornell",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "T.J. Jaworsky",
    "winner_school": "North Carolina",
    "loser": "Steve St. John",
    "loser_school": "Arizona State",
    "result": "Dec 8-1"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Babak Mohammadi",
    "winner_school": "Oregon State",
    "loser": "Eric Kimble",
    "loser_school": "Ohio",
    "result": "Dec 8-7"
  },
  {
    "round": "WbConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "DeWayne Zinkin",
    "winner_school": "Fresno State",
    "loser": "J.J. Fasnacht",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Frank Laccone",
    "loser_school": "Purdue",
    "result": "MD 17-7"
  },
  {
    "round": "WbConsR5",
    "weight": "134",
    "bout": 505,
    "winner": "Steve St. John",
    "winner_school": "Arizona State",
    "loser": "DeWayne Zinkin",
    "loser_school": "Fresno State",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR5",
    "weight": "134",
    "bout": 506,
    "winner": "Eric Kimble",
    "winner_school": "Ohio",
    "loser": "Mark Ironside",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "134",
    "bout": 523,
    "winner": "Frank Laccone",
    "winner_school": "Purdue",
    "loser": "J.J. Fasnacht",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "DeWayne Zinkin",
    "winner_school": "Fresno State",
    "loser": "Mark Ironside",
    "loser_school": "Iowa",
    "result": "Dec 8-7"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Steve St. John",
    "winner_school": "Arizona State",
    "loser": "Eric Kimble",
    "loser_school": "Ohio",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "T.J. Jaworsky",
    "winner_school": "North Carolina",
    "loser": "Babak Mohammadi",
    "loser_school": "Oregon State",
    "result": "Dec 13-6"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Gonz Medina",
    "winner_school": "Penn",
    "loser": "Jason Guyton",
    "loser_school": "Howard",
    "result": "Fall 7:40 SV"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "John Hughes",
    "winner_school": "Penn State",
    "loser": "Brendan Buckley",
    "loser_school": "Clemson",
    "result": "Fall 4:02"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Gerry Abas",
    "winner_school": "Fresno State",
    "loser": "Gonz Medina",
    "loser_school": "Penn",
    "result": "MD 20-10"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Tony DeSouza",
    "winner_school": "CSU Bakersfield",
    "loser": "Phil Judge",
    "loser_school": "Michigan State",
    "result": "Dec 9-7 SV"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Scott Reyna",
    "winner_school": "Oklahoma State",
    "loser": "Paul Collier",
    "loser_school": "Brown",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Jason Gregersen",
    "winner_school": "Wyoming",
    "loser": "Charlie Branch",
    "loser_school": "VMI",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Jamie Kyriazis",
    "winner_school": "Syracuse",
    "loser": "Francis Dunn",
    "loser_school": "Rider",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Bill Zadick",
    "winner_school": "Iowa",
    "loser": "David Wright",
    "loser_school": "Central Michigan",
    "result": "MD 24-10"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Roger Chandler",
    "winner_school": "Indiana",
    "loser": "Kurt Kyle",
    "loser_school": "Navy",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Kenny Liddell",
    "winner_school": "Missouri",
    "loser": "Ryan Lord",
    "loser_school": "Wisconsin",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "John Hughes",
    "winner_school": "Penn State",
    "loser": "Jay Jackson",
    "loser_school": "Stanford",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Dave Leonardis",
    "winner_school": "North Carolina",
    "loser": "Eric Siebert",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Jude Arena",
    "winner_school": "James Madison",
    "loser": "Derek Mountsier",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Mike Krafchick",
    "winner_school": "Virginia",
    "loser": "Mike Rogers",
    "loser_school": "Lock Haven",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Kevin Bracken",
    "winner_school": "Illinois State",
    "loser": "Mike Eierman",
    "loser_school": "Nebraska",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Tom Shifflet",
    "winner_school": "Edinboro",
    "loser": "Wade Rogers",
    "loser_school": "Seton Hall",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Keith Taylor",
    "winner_school": "West Virginia",
    "loser": "Cory Sonnen",
    "loser_school": "Oregon",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Dan Carcelli",
    "winner_school": "Cleveland State",
    "loser": "Rob McMinn",
    "loser_school": "Arizona State",
    "result": "Dec 10-9"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 254,
    "winner": "Brendan Buckley",
    "winner_school": "Clemson",
    "loser": "Jay Jackson",
    "loser_school": "Stanford",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Gerry Abas",
    "winner_school": "Fresno State",
    "loser": "Tony DeSouza",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Scott Reyna",
    "winner_school": "Oklahoma State",
    "loser": "Jason Gregersen",
    "loser_school": "Wyoming",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Bill Zadick",
    "winner_school": "Iowa",
    "loser": "Jamie Kyriazis",
    "loser_school": "Syracuse",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Kenny Liddell",
    "winner_school": "Missouri",
    "loser": "Roger Chandler",
    "loser_school": "Indiana",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "John Hughes",
    "winner_school": "Penn State",
    "loser": "Dave Leonardis",
    "loser_school": "North Carolina",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Mike Krafchick",
    "winner_school": "Virginia",
    "loser": "Jude Arena",
    "loser_school": "James Madison",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Tom Shifflet",
    "winner_school": "Edinboro",
    "loser": "Kevin Bracken",
    "loser_school": "Illinois State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Dan Carcelli",
    "winner_school": "Cleveland State",
    "loser": "Keith Taylor",
    "loser_school": "West Virginia",
    "result": "MD 10-0"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 285,
    "winner": "Tony DeSouza",
    "winner_school": "CSU Bakersfield",
    "loser": "Gonz Medina",
    "loser_school": "Penn",
    "result": "MD 13-3"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 286,
    "winner": "Jason Gregersen",
    "winner_school": "Wyoming",
    "loser": "Paul Collier",
    "loser_school": "Brown",
    "result": "Fall 3:01"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 287,
    "winner": "Jamie Kyriazis",
    "winner_school": "Syracuse",
    "loser": "David Wright",
    "loser_school": "Central Michigan",
    "result": "MD 14-4"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 288,
    "winner": "Roger Chandler",
    "winner_school": "Indiana",
    "loser": "Ryan Lord",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 289,
    "winner": "Brendan Buckley",
    "winner_school": "Clemson",
    "loser": "Dave Leonardis",
    "loser_school": "North Carolina",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 290,
    "winner": "Jude Arena",
    "winner_school": "James Madison",
    "loser": "Mike Rogers",
    "loser_school": "Lock Haven",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 291,
    "winner": "Wade Rogers",
    "winner_school": "Seton Hall",
    "loser": "Kevin Bracken",
    "loser_school": "Illinois State",
    "result": "MD 21-10"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 292,
    "winner": "Rob McMinn",
    "winner_school": "Arizona State",
    "loser": "Keith Taylor",
    "loser_school": "West Virginia",
    "result": "Dec 10-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Gerry Abas",
    "winner_school": "Fresno State",
    "loser": "Scott Reyna",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Bill Zadick",
    "winner_school": "Iowa",
    "loser": "Kenny Liddell",
    "loser_school": "Missouri",
    "result": "Fall 4:59"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "John Hughes",
    "winner_school": "Penn State",
    "loser": "Mike Krafchick",
    "loser_school": "Virginia",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Tom Shifflet",
    "winner_school": "Edinboro",
    "loser": "Dan Carcelli",
    "loser_school": "Cleveland State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Tony DeSouza",
    "winner_school": "CSU Bakersfield",
    "loser": "Jason Gregersen",
    "loser_school": "Wyoming",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "Roger Chandler",
    "winner_school": "Indiana",
    "loser": "Jamie Kyriazis",
    "loser_school": "Syracuse",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "Jude Arena",
    "winner_school": "James Madison",
    "loser": "Brendan Buckley",
    "loser_school": "Clemson",
    "result": "MD 9-1"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Rob McMinn",
    "winner_school": "Arizona State",
    "loser": "Wade Rogers",
    "loser_school": "Seton Hall",
    "result": "Fall 2:22"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 433,
    "winner": "Dan Carcelli",
    "winner_school": "Cleveland State",
    "loser": "Tony DeSouza",
    "loser_school": "CSU Bakersfield",
    "result": "MD 11-2"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 434,
    "winner": "Roger Chandler",
    "winner_school": "Indiana",
    "loser": "Mike Krafchick",
    "loser_school": "Virginia",
    "result": "Dec 7-0"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 435,
    "winner": "Kenny Liddell",
    "winner_school": "Missouri",
    "loser": "Jude Arena",
    "loser_school": "James Madison",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 436,
    "winner": "Scott Reyna",
    "winner_school": "Oklahoma State",
    "loser": "Rob McMinn",
    "loser_school": "Arizona State",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Gerry Abas",
    "winner_school": "Fresno State",
    "loser": "Bill Zadick",
    "loser_school": "Iowa",
    "result": "Dec 8-7"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "John Hughes",
    "winner_school": "Penn State",
    "loser": "Tom Shifflet",
    "loser_school": "Edinboro",
    "result": "Dec 2-1"
  },
  {
    "round": "WbConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "Dan Carcelli",
    "winner_school": "Cleveland State",
    "loser": "Roger Chandler",
    "loser_school": "Indiana",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "WbConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Kenny Liddell",
    "winner_school": "Missouri",
    "loser": "Scott Reyna",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR5",
    "weight": "142",
    "bout": 507,
    "winner": "Dan Carcelli",
    "winner_school": "Cleveland State",
    "loser": "Bill Zadick",
    "loser_school": "Iowa",
    "result": "Fall 3:45"
  },
  {
    "round": "WbConsR5",
    "weight": "142",
    "bout": 508,
    "winner": "Tom Shifflet",
    "winner_school": "Edinboro",
    "loser": "Kenny Liddell",
    "loser_school": "Missouri",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 524,
    "winner": "Scott Reyna",
    "winner_school": "Oklahoma State",
    "loser": "Roger Chandler",
    "loser_school": "Indiana",
    "result": "Dec 8-5"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Bill Zadick",
    "winner_school": "Iowa",
    "loser": "Kenny Liddell",
    "loser_school": "Missouri",
    "result": "MD 11-3"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Tom Shifflet",
    "winner_school": "Edinboro",
    "loser": "Dan Carcelli",
    "loser_school": "Cleveland State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "John Hughes",
    "winner_school": "Penn State",
    "loser": "Gerry Abas",
    "loser_school": "Fresno State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Rod Peddy",
    "winner_school": "Boston University",
    "loser": "Chris Sabo",
    "loser_school": "Oklahoma State",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Lincoln McIlravy",
    "winner_school": "Iowa",
    "loser": "Ryan Cummings",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:10"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Scott Norton",
    "winner_school": "Oregon",
    "loser": "Jeff Liberman",
    "loser_school": "Syracuse",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Rick Monge",
    "winner_school": "Ohio State",
    "loser": "Simon Weaver",
    "loser_school": "Brown",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Jeff Theiler",
    "winner_school": "Arizona State",
    "loser": "Chad Carlson",
    "loser_school": "Minnesota",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Tod Surmon",
    "winner_school": "Stanford",
    "loser": "Jeremy Ingram",
    "loser_school": "VMI",
    "result": "Fall 2:13"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Fred Rodriguez",
    "winner_school": "Georgia State",
    "loser": "Troy Charney",
    "loser_school": "NC State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Brent Shiver",
    "winner_school": "Northwestern",
    "loser": "Jody Clark",
    "loser_school": "Clarion",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Chris Bono",
    "winner_school": "Iowa State",
    "loser": "Patrick Flynn",
    "loser_school": "Maryland",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Tim Cano",
    "winner_school": "Cal Poly",
    "loser": "Rob Fieo",
    "loser_school": "Drexel",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Steve Marianetti",
    "winner_school": "Illinois",
    "loser": "Joe Calhoun",
    "loser_school": "Ohio",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Steve Cassidy",
    "winner_school": "Lehigh",
    "loser": "Pete Ventresca",
    "loser_school": "Lock Haven",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Marc Taylor",
    "winner_school": "North Carolina",
    "loser": "Mike Mason",
    "loser_school": "West Virginia",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "David Steele",
    "loser_school": "George Mason",
    "result": "TF 17-2 6:59"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Lincoln McIlravy",
    "winner_school": "Iowa",
    "loser": "Rod Peddy",
    "loser_school": "Boston University",
    "result": "Fall 6:25"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Scott Norton",
    "winner_school": "Oregon",
    "loser": "Rick Monge",
    "loser_school": "Ohio State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Jeff Theiler",
    "winner_school": "Arizona State",
    "loser": "Tod Surmon",
    "loser_school": "Stanford",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Chad Bailey",
    "winner_school": "Michigan State",
    "loser": "Fred Rodriguez",
    "loser_school": "Georgia State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Chris Bono",
    "winner_school": "Iowa State",
    "loser": "Brent Shiver",
    "loser_school": "Northwestern",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Steve Marianetti",
    "winner_school": "Illinois",
    "loser": "Tim Cano",
    "loser_school": "Cal Poly",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Marc Taylor",
    "winner_school": "North Carolina",
    "loser": "Steve Cassidy",
    "loser_school": "Lehigh",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "Shilo Mathill",
    "loser_school": "Wyoming",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 293,
    "winner": "Rod Peddy",
    "winner_school": "Boston University",
    "loser": "Ryan Cummings",
    "loser_school": "Northern Iowa",
    "result": "Fall 4:50"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 294,
    "winner": "Rick Monge",
    "winner_school": "Ohio State",
    "loser": "Jeff Liberman",
    "loser_school": "Syracuse",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 295,
    "winner": "Chad Carlson",
    "winner_school": "Minnesota",
    "loser": "Tod Surmon",
    "loser_school": "Stanford",
    "result": "Dec 7-2"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 297,
    "winner": "Brent Shiver",
    "winner_school": "Northwestern",
    "loser": "Patrick Flynn",
    "loser_school": "Maryland",
    "result": "Dec 7-2"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 298,
    "winner": "Tim Cano",
    "winner_school": "Cal Poly",
    "loser": "Joe Calhoun",
    "loser_school": "Ohio",
    "result": "Dec 11-6"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 299,
    "winner": "Steve Cassidy",
    "winner_school": "Lehigh",
    "loser": "Mike Mason",
    "loser_school": "West Virginia",
    "result": "MD 10-1"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 300,
    "winner": "Shilo Mathill",
    "winner_school": "Wyoming",
    "loser": "David Steele",
    "loser_school": "George Mason",
    "result": "Fall 3:21"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Lincoln McIlravy",
    "winner_school": "Iowa",
    "loser": "Scott Norton",
    "loser_school": "Oregon",
    "result": "TF 24-9 5:39"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Jeff Theiler",
    "winner_school": "Arizona State",
    "loser": "Chad Bailey",
    "loser_school": "Michigan State",
    "result": "MD 16-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Steve Marianetti",
    "winner_school": "Illinois",
    "loser": "Chris Bono",
    "loser_school": "Iowa State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "Marc Taylor",
    "loser_school": "North Carolina",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Rick Monge",
    "winner_school": "Ohio State",
    "loser": "Rod Peddy",
    "loser_school": "Boston University",
    "result": "MD 14-1"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Chad Carlson",
    "winner_school": "Minnesota",
    "loser": "Fred Rodriguez",
    "loser_school": "Georgia State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Tim Cano",
    "winner_school": "Cal Poly",
    "loser": "Brent Shiver",
    "loser_school": "Northwestern",
    "result": "MD 15-7"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Steve Cassidy",
    "winner_school": "Lehigh",
    "loser": "Shilo Mathill",
    "loser_school": "Wyoming",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 437,
    "winner": "Marc Taylor",
    "winner_school": "North Carolina",
    "loser": "Rick Monge",
    "loser_school": "Ohio State",
    "result": "Fall 1:48"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 438,
    "winner": "Chris Bono",
    "winner_school": "Iowa State",
    "loser": "Chad Carlson",
    "loser_school": "Minnesota",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 439,
    "winner": "Chad Bailey",
    "winner_school": "Michigan State",
    "loser": "Tim Cano",
    "loser_school": "Cal Poly",
    "result": "Dec 15-8"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 440,
    "winner": "Steve Cassidy",
    "winner_school": "Lehigh",
    "loser": "Scott Norton",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Lincoln McIlravy",
    "winner_school": "Iowa",
    "loser": "Jeff Theiler",
    "loser_school": "Arizona State",
    "result": "Dec 9-5"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Steve Marianetti",
    "winner_school": "Illinois",
    "loser": "Temoer Terry",
    "loser_school": "Nebraska",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "Chris Bono",
    "winner_school": "Iowa State",
    "loser": "Marc Taylor",
    "loser_school": "North Carolina",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Steve Cassidy",
    "winner_school": "Lehigh",
    "loser": "Chad Bailey",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR5",
    "weight": "150",
    "bout": 509,
    "winner": "Jeff Theiler",
    "winner_school": "Arizona State",
    "loser": "Chris Bono",
    "loser_school": "Iowa State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "WbConsR5",
    "weight": "150",
    "bout": 510,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "Steve Cassidy",
    "loser_school": "Lehigh",
    "result": "Dec 11-7"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 525,
    "winner": "Chad Bailey",
    "winner_school": "Michigan State",
    "loser": "Marc Taylor",
    "loser_school": "North Carolina",
    "result": "Dec 7-3"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Chris Bono",
    "winner_school": "Iowa State",
    "loser": "Steve Cassidy",
    "loser_school": "Lehigh",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Jeff Theiler",
    "winner_school": "Arizona State",
    "loser": "Temoer Terry",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Steve Marianetti",
    "winner_school": "Illinois",
    "loser": "Lincoln McIlravy",
    "loser_school": "Iowa",
    "result": "Dec 13-10"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Mike Collins",
    "winner_school": "Missouri",
    "loser": "Earl Walker",
    "loser_school": "Boston University",
    "result": "Dec 7-5"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Joe Burke",
    "winner_school": "Seton Hall",
    "loser": "Chris Walter",
    "loser_school": "Wisconsin",
    "result": "Dec 10-4"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Hardell Moore",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Catrabone",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Joe Burke",
    "winner_school": "Seton Hall",
    "loser": "Brandon Alderman",
    "loser_school": "Wyoming",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Clark Conover",
    "winner_school": "Cal Poly",
    "loser": "Mike Migliaccio",
    "loser_school": "Miami Ohio",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Eric Smith",
    "winner_school": "Ohio State",
    "loser": "Shawn Tripoli",
    "loser_school": "Central Connecticut",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Matt Suter",
    "winner_school": "Arizona State",
    "loser": "Scott Goodale",
    "loser_school": "Lock Haven",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Hardell Moore",
    "winner_school": "Oklahoma State",
    "loser": "Gill Journey",
    "loser_school": "Chicago State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Jason Kraft",
    "winner_school": "Nebraska",
    "loser": "John McClain",
    "loser_school": "Indiana",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Mickey Ritter",
    "winner_school": "CSU Bakersfield",
    "loser": "Joe Stanton",
    "loser_school": "UNC Greensboro",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Dan Wirnsberger",
    "winner_school": "Michigan State",
    "loser": "Kevin Johnson",
    "loser_school": "VMI",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Mike Collins",
    "winner_school": "Missouri",
    "loser": "Bruce Hainan",
    "loser_school": "Duquesne",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "John Withrow",
    "winner_school": "Pittsburgh",
    "loser": "Glenn Pritzlaff",
    "loser_school": "Penn State",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Ernest Benion",
    "winner_school": "Illinois",
    "loser": "Dan Kjeldgaard",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Mike VanOss",
    "winner_school": "Maryland",
    "loser": "Matt Marciniak",
    "loser_school": "Army",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Dwight Gardner",
    "winner_school": "Ohio",
    "loser": "Tivon Abel",
    "loser_school": "Brown",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Tony Robie",
    "winner_school": "Edinboro",
    "loser": "Barry Weldon",
    "loser_school": "Iowa State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Daryl Weber",
    "winner_school": "Iowa",
    "loser": "Josh Stanley",
    "loser_school": "Drexel",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Alfonzo Tucker",
    "winner_school": "Fresno State",
    "loser": "Mike Chase",
    "loser_school": "North Carolina",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 256,
    "winner": "Chris Walter",
    "winner_school": "Wisconsin",
    "loser": "Brandon Alderman",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 1256,
    "winner": "Bruce Hainan",
    "winner_school": "Duquesne",
    "loser": "Earl Walker",
    "loser_school": "Boston University",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Joe Burke",
    "winner_school": "Seton Hall",
    "loser": "Clark Conover",
    "loser_school": "Cal Poly",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Eric Smith",
    "winner_school": "Ohio State",
    "loser": "Matt Suter",
    "loser_school": "Arizona State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Jason Kraft",
    "winner_school": "Nebraska",
    "loser": "Hardell Moore",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Dan Wirnsberger",
    "winner_school": "Michigan State",
    "loser": "Mickey Ritter",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Mike Collins",
    "winner_school": "Missouri",
    "loser": "John Withrow",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Ernest Benion",
    "winner_school": "Illinois",
    "loser": "Mike VanOss",
    "loser_school": "Maryland",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Tony Robie",
    "winner_school": "Edinboro",
    "loser": "Dwight Gardner",
    "loser_school": "Ohio",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Daryl Weber",
    "winner_school": "Iowa",
    "loser": "Alfonzo Tucker",
    "loser_school": "Fresno State",
    "result": "Dec 10-6"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 301,
    "winner": "Chris Walter",
    "winner_school": "Wisconsin",
    "loser": "Clark Conover",
    "loser_school": "Cal Poly",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 302,
    "winner": "Matt Suter",
    "winner_school": "Arizona State",
    "loser": "Shawn Tripoli",
    "loser_school": "Central Connecticut",
    "result": "Fall 1:34"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 303,
    "winner": "Hardell Moore",
    "winner_school": "Oklahoma State",
    "loser": "John McClain",
    "loser_school": "Indiana",
    "result": "Dec 5-3 TB"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 304,
    "winner": "Kevin Johnson",
    "winner_school": "VMI",
    "loser": "Mickey Ritter",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 10-3"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 305,
    "winner": "John Withrow",
    "winner_school": "Pittsburgh",
    "loser": "Bruce Hainan",
    "loser_school": "Duquesne",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 306,
    "winner": "Dan Kjeldgaard",
    "winner_school": "Northern Iowa",
    "loser": "Mike VanOss",
    "loser_school": "Maryland",
    "result": "Fall 4:26"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 307,
    "winner": "Barry Weldon",
    "winner_school": "Iowa State",
    "loser": "Dwight Gardner",
    "loser_school": "Ohio",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 308,
    "winner": "Alfonzo Tucker",
    "winner_school": "Fresno State",
    "loser": "Josh Stanley",
    "loser_school": "Drexel",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Eric Smith",
    "winner_school": "Ohio State",
    "loser": "Joe Burke",
    "loser_school": "Seton Hall",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Dan Wirnsberger",
    "winner_school": "Michigan State",
    "loser": "Jason Kraft",
    "loser_school": "Nebraska",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Ernest Benion",
    "winner_school": "Illinois",
    "loser": "Mike Collins",
    "loser_school": "Missouri",
    "result": "Dec 11-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Tony Robie",
    "winner_school": "Edinboro",
    "loser": "Daryl Weber",
    "loser_school": "Iowa",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Matt Suter",
    "winner_school": "Arizona State",
    "loser": "Chris Walter",
    "loser_school": "Wisconsin",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "Kevin Johnson",
    "winner_school": "VMI",
    "loser": "Hardell Moore",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "John Withrow",
    "winner_school": "Pittsburgh",
    "loser": "Dan Kjeldgaard",
    "loser_school": "Northern Iowa",
    "result": "Fall 1:32"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Barry Weldon",
    "winner_school": "Iowa State",
    "loser": "Alfonzo Tucker",
    "loser_school": "Fresno State",
    "result": "MD 8-0"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 441,
    "winner": "Daryl Weber",
    "winner_school": "Iowa",
    "loser": "Matt Suter",
    "loser_school": "Arizona State",
    "result": "MD 13-4"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 442,
    "winner": "Mike Collins",
    "winner_school": "Missouri",
    "loser": "Kevin Johnson",
    "loser_school": "VMI",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 443,
    "winner": "John Withrow",
    "winner_school": "Pittsburgh",
    "loser": "Jason Kraft",
    "loser_school": "Nebraska",
    "result": "MD 9-0"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 444,
    "winner": "Joe Burke",
    "winner_school": "Seton Hall",
    "loser": "Barry Weldon",
    "loser_school": "Iowa State",
    "result": "Dec 1-0"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Dan Wirnsberger",
    "winner_school": "Michigan State",
    "loser": "Eric Smith",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Ernest Benion",
    "winner_school": "Illinois",
    "loser": "Tony Robie",
    "loser_school": "Edinboro",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "WbConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Daryl Weber",
    "winner_school": "Iowa",
    "loser": "Mike Collins",
    "loser_school": "Missouri",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Joe Burke",
    "winner_school": "Seton Hall",
    "loser": "John Withrow",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-0"
  },
  {
    "round": "WbConsR5",
    "weight": "158",
    "bout": 511,
    "winner": "Eric Smith",
    "winner_school": "Ohio State",
    "loser": "Daryl Weber",
    "loser_school": "Iowa",
    "result": "DEF"
  },
  {
    "round": "WbConsR5",
    "weight": "158",
    "bout": 512,
    "winner": "Joe Burke",
    "winner_school": "Seton Hall",
    "loser": "Tony Robie",
    "loser_school": "Edinboro",
    "result": "Dec 8-4 SV"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 526,
    "winner": "John Withrow",
    "winner_school": "Pittsburgh",
    "loser": "Mike Collins",
    "loser_school": "Missouri",
    "result": "Dec 8-6"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Tony Robie",
    "winner_school": "Edinboro",
    "loser": "Daryl Weber",
    "loser_school": "Iowa",
    "result": "Fall 1:19"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Joe Burke",
    "winner_school": "Seton Hall",
    "loser": "Eric Smith",
    "loser_school": "Ohio State",
    "result": "M FOR"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Ernest Benion",
    "winner_school": "Illinois",
    "loser": "Dan Wirnsberger",
    "loser_school": "Michigan State",
    "result": "Dec 6-5"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Chad Biggert",
    "winner_school": "Michigan",
    "loser": "Brandon Slay",
    "loser_school": "Penn",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1007,
    "winner": "Erik Josephson",
    "winner_school": "Nebraska",
    "loser": "Melvin Yates",
    "loser_school": "Howard",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 2007,
    "winner": "Charles Burton",
    "winner_school": "Boise State",
    "loser": "Chris Todd",
    "loser_school": "Old Dominion",
    "result": "Dec 8-1"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 3007,
    "winner": "Zac Taylor",
    "winner_school": "Minnesota",
    "loser": "Brad Alderman",
    "loser_school": "Wyoming",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Romy O'Daniel",
    "winner_school": "Army",
    "loser": "Zac Taylor",
    "loser_school": "Minnesota",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Charles Gary",
    "winner_school": "Illinois",
    "loser": "Bryan Matusic",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Ken Johnson",
    "winner_school": "NC State",
    "loser": "Rob MacArthur",
    "loser_school": "Georgia State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Markus Mollica",
    "winner_school": "Arizona State",
    "loser": "Jason Wedgbury",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Charles Burton",
    "winner_school": "Boise State",
    "loser": "Ryan Edmundson",
    "loser_school": "Indiana",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Jason Sexton",
    "winner_school": "Missouri",
    "loser": "Barry Jarvis",
    "loser_school": "Miami Ohio",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Howie Miller",
    "winner_school": "Virginia",
    "loser": "Neal Mason",
    "loser_school": "Cal Poly",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Matt Nerem",
    "winner_school": "Iowa",
    "loser": "Paul Antonio",
    "loser_school": "Clarion",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Scott Hage",
    "winner_school": "West Virginia",
    "loser": "Erik Josephson",
    "loser_school": "Nebraska",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Mark Branch",
    "winner_school": "Oklahoma State",
    "loser": "Joel Morissette",
    "loser_school": "Michigan State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Rick Hepp",
    "winner_school": "Lehigh",
    "loser": "Jason Streeter",
    "loser_school": "Fresno State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Chad Renner",
    "winner_school": "Oregon State",
    "loser": "Tim Fix",
    "loser_school": "Eastern Illinois",
    "result": "TF 22-6 6:00"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Chad Biggert",
    "winner_school": "Michigan",
    "loser": "Rob Reaves",
    "loser_school": "Citadel",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Lou Cerchio",
    "winner_school": "Seton Hall",
    "loser": "Zach Randall",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Stan Banks",
    "winner_school": "North Carolina",
    "loser": "Sam Neider",
    "loser_school": "Northwestern",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Kemal Pegram",
    "winner_school": "Lock Haven",
    "loser": "Jason Prokopchak",
    "loser_school": "Bucknell",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 257,
    "winner": "Ryan Edmundson",
    "winner_school": "Indiana",
    "loser": "Chris Todd",
    "loser_school": "Old Dominion",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Romy O'Daniel",
    "winner_school": "Army",
    "loser": "Charles Gary",
    "loser_school": "Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Markus Mollica",
    "winner_school": "Arizona State",
    "loser": "Ken Johnson",
    "loser_school": "NC State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Charles Burton",
    "winner_school": "Boise State",
    "loser": "Jason Sexton",
    "loser_school": "Missouri",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Matt Nerem",
    "winner_school": "Iowa",
    "loser": "Howie Miller",
    "loser_school": "Virginia",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Mark Branch",
    "winner_school": "Oklahoma State",
    "loser": "Scott Hage",
    "loser_school": "West Virginia",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Chad Renner",
    "winner_school": "Oregon State",
    "loser": "Rick Hepp",
    "loser_school": "Lehigh",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Lou Cerchio",
    "winner_school": "Seton Hall",
    "loser": "Chad Biggert",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Stan Banks",
    "winner_school": "North Carolina",
    "loser": "Kemal Pegram",
    "loser_school": "Lock Haven",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 309,
    "winner": "Charles Gary",
    "winner_school": "Illinois",
    "loser": "Zac Taylor",
    "loser_school": "Minnesota",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 310,
    "winner": "Jason Wedgbury",
    "winner_school": "Northern Iowa",
    "loser": "Ken Johnson",
    "loser_school": "NC State",
    "result": "Dec 10-6"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 311,
    "winner": "Jason Sexton",
    "winner_school": "Missouri",
    "loser": "Ryan Edmundson",
    "loser_school": "Indiana",
    "result": "MD 9-1"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 312,
    "winner": "Paul Antonio",
    "winner_school": "Clarion",
    "loser": "Howie Miller",
    "loser_school": "Virginia",
    "result": "MD 12-2"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 313,
    "winner": "Joel Morissette",
    "winner_school": "Michigan State",
    "loser": "Scott Hage",
    "loser_school": "West Virginia",
    "result": "Dec 8-7"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 314,
    "winner": "Rick Hepp",
    "winner_school": "Lehigh",
    "loser": "Tim Fix",
    "loser_school": "Eastern Illinois",
    "result": "Fall 3:57"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 315,
    "winner": "Chad Biggert",
    "winner_school": "Michigan",
    "loser": "Zach Randall",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 316,
    "winner": "Sam Neider",
    "winner_school": "Northwestern",
    "loser": "Kemal Pegram",
    "loser_school": "Lock Haven",
    "result": "Fall 5:49"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Markus Mollica",
    "winner_school": "Arizona State",
    "loser": "Romy O'Daniel",
    "loser_school": "Army",
    "result": "MD 12-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Matt Nerem",
    "winner_school": "Iowa",
    "loser": "Charles Burton",
    "loser_school": "Boise State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Mark Branch",
    "winner_school": "Oklahoma State",
    "loser": "Chad Renner",
    "loser_school": "Oregon State",
    "result": "Dec 11-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Stan Banks",
    "winner_school": "North Carolina",
    "loser": "Lou Cerchio",
    "loser_school": "Seton Hall",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Charles Gary",
    "winner_school": "Illinois",
    "loser": "Jason Wedgbury",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Jason Sexton",
    "winner_school": "Missouri",
    "loser": "Paul Antonio",
    "loser_school": "Clarion",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "Rick Hepp",
    "winner_school": "Lehigh",
    "loser": "Joel Morissette",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Chad Biggert",
    "winner_school": "Michigan",
    "loser": "Sam Neider",
    "loser_school": "Northwestern",
    "result": "Dec 10-4"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 445,
    "winner": "Lou Cerchio",
    "winner_school": "Seton Hall",
    "loser": "Charles Gary",
    "loser_school": "Illinois",
    "result": "MD 8-0"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 446,
    "winner": "Chad Renner",
    "winner_school": "Oregon State",
    "loser": "Jason Sexton",
    "loser_school": "Missouri",
    "result": "Fall 3:14"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 447,
    "winner": "Rick Hepp",
    "winner_school": "Lehigh",
    "loser": "Charles Burton",
    "loser_school": "Boise State",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 448,
    "winner": "Chad Biggert",
    "winner_school": "Michigan",
    "loser": "Romy O'Daniel",
    "loser_school": "Army",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Markus Mollica",
    "winner_school": "Arizona State",
    "loser": "Matt Nerem",
    "loser_school": "Iowa",
    "result": "Dec 12-5"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Mark Branch",
    "winner_school": "Oklahoma State",
    "loser": "Stan Banks",
    "loser_school": "North Carolina",
    "result": "Dec 12-7"
  },
  {
    "round": "WbConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Chad Renner",
    "winner_school": "Oregon State",
    "loser": "Lou Cerchio",
    "loser_school": "Seton Hall",
    "result": "Dec 11-5"
  },
  {
    "round": "WbConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "Rick Hepp",
    "winner_school": "Lehigh",
    "loser": "Chad Biggert",
    "loser_school": "Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR5",
    "weight": "167",
    "bout": 513,
    "winner": "Chad Renner",
    "winner_school": "Oregon State",
    "loser": "Matt Nerem",
    "loser_school": "Iowa",
    "result": "Dec 9-5"
  },
  {
    "round": "WbConsR5",
    "weight": "167",
    "bout": 514,
    "winner": "Stan Banks",
    "winner_school": "North Carolina",
    "loser": "Rick Hepp",
    "loser_school": "Lehigh",
    "result": "Dec 12-7 SV"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 527,
    "winner": "Lou Cerchio",
    "winner_school": "Seton Hall",
    "loser": "Chad Biggert",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Rick Hepp",
    "winner_school": "Lehigh",
    "loser": "Matt Nerem",
    "loser_school": "Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Stan Banks",
    "winner_school": "North Carolina",
    "loser": "Chad Renner",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Markus Mollica",
    "winner_school": "Arizona State",
    "loser": "Mark Branch",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Les Gutches",
    "winner_school": "Oregon State",
    "loser": "Dan Colace",
    "loser_school": "Missouri",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Mitch Clark",
    "winner_school": "Ohio State",
    "loser": "Jason Geris",
    "loser_school": "Fresno State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Pat Lynch",
    "winner_school": "Georgia State",
    "loser": "Kenny Mbah",
    "loser_school": "Nebraska",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Mike Geurin",
    "winner_school": "Lock Haven",
    "loser": "Rob Barlow",
    "loser_school": "George Mason",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Reese Andy",
    "winner_school": "Wyoming",
    "loser": "Mark Smith",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Erich Harvey",
    "winner_school": "Michigan State",
    "loser": "Chuck Haas",
    "loser_school": "Seton Hall",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Ray Brinzer",
    "winner_school": "Iowa",
    "loser": "Carlos Eason",
    "loser_school": "Cornell",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Jevon Herman",
    "winner_school": "Illinois",
    "loser": "Seth Meyerson",
    "loser_school": "Appalachian State",
    "result": "Fall 5:54"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Doug Zembiec",
    "winner_school": "Navy",
    "loser": "John Koss",
    "loser_school": "West Virginia",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Derek Scott",
    "winner_school": "CSU Bakersfield",
    "loser": "Marc Papa",
    "loser_school": "Maryland",
    "result": "TF 19-4 5:41"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Quincey Clark",
    "winner_school": "Oklahoma",
    "loser": "Mike Vakos",
    "loser_school": "Illinois State",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Aaron Simpson",
    "winner_school": "Arizona State",
    "loser": "Ben Barton",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Ben Lehrfeld",
    "winner_school": "Northern Illinois",
    "loser": "Gage Short",
    "loser_school": "Virginia",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Brett Colombini",
    "winner_school": "Minnesota",
    "loser": "Jim Straight",
    "loser_school": "Edinboro",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Bob Ferraro",
    "winner_school": "Bucknell",
    "loser": "John Shelton",
    "loser_school": "Central Michigan",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Les Gutches",
    "winner_school": "Oregon State",
    "loser": "Mitch Clark",
    "loser_school": "Ohio State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Mike Geurin",
    "winner_school": "Lock Haven",
    "loser": "Pat Lynch",
    "loser_school": "Georgia State",
    "result": "Dec 6-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Reese Andy",
    "winner_school": "Wyoming",
    "loser": "Erich Harvey",
    "loser_school": "Michigan State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Ray Brinzer",
    "winner_school": "Iowa",
    "loser": "Jevon Herman",
    "loser_school": "Illinois",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Doug Zembiec",
    "winner_school": "Navy",
    "loser": "Derek Scott",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Quincey Clark",
    "winner_school": "Oklahoma",
    "loser": "Aaron Simpson",
    "loser_school": "Arizona State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Brett Colombini",
    "winner_school": "Minnesota",
    "loser": "Ben Lehrfeld",
    "loser_school": "Northern Illinois",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Rohan Gardner",
    "winner_school": "Northwestern",
    "loser": "Bob Ferraro",
    "loser_school": "Bucknell",
    "result": "Fall 2:36"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 317,
    "winner": "Dan Colace",
    "winner_school": "Missouri",
    "loser": "Mitch Clark",
    "loser_school": "Ohio State",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 318,
    "winner": "Pat Lynch",
    "winner_school": "Georgia State",
    "loser": "Rob Barlow",
    "loser_school": "George Mason",
    "result": "Fall 4:52"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 319,
    "winner": "Erich Harvey",
    "winner_school": "Michigan State",
    "loser": "Mark Smith",
    "loser_school": "Oklahoma State",
    "result": "Fall 1:21"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 320,
    "winner": "Carlos Eason",
    "winner_school": "Cornell",
    "loser": "Jevon Herman",
    "loser_school": "Illinois",
    "result": "Dec 8-6"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 321,
    "winner": "John Koss",
    "winner_school": "West Virginia",
    "loser": "Derek Scott",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 9-6"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 322,
    "winner": "Aaron Simpson",
    "winner_school": "Arizona State",
    "loser": "Mike Vakos",
    "loser_school": "Illinois State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 323,
    "winner": "Jim Straight",
    "winner_school": "Edinboro",
    "loser": "Ben Lehrfeld",
    "loser_school": "Northern Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Les Gutches",
    "winner_school": "Oregon State",
    "loser": "Mike Geurin",
    "loser_school": "Lock Haven",
    "result": "TF 18-3 7:00"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Ray Brinzer",
    "winner_school": "Iowa",
    "loser": "Reese Andy",
    "loser_school": "Wyoming",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Quincey Clark",
    "winner_school": "Oklahoma",
    "loser": "Doug Zembiec",
    "loser_school": "Navy",
    "result": "Fall 4:27"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Brett Colombini",
    "winner_school": "Minnesota",
    "loser": "Rohan Gardner",
    "loser_school": "Northwestern",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "Pat Lynch",
    "winner_school": "Georgia State",
    "loser": "Dan Colace",
    "loser_school": "Missouri",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Erich Harvey",
    "winner_school": "Michigan State",
    "loser": "Carlos Eason",
    "loser_school": "Cornell",
    "result": "Fall 3:56"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "John Koss",
    "winner_school": "West Virginia",
    "loser": "Aaron Simpson",
    "loser_school": "Arizona State",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Bob Ferraro",
    "winner_school": "Bucknell",
    "loser": "Jim Straight",
    "loser_school": "Edinboro",
    "result": "Dec 7-2"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 449,
    "winner": "Rohan Gardner",
    "winner_school": "Northwestern",
    "loser": "Pat Lynch",
    "loser_school": "Georgia State",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 450,
    "winner": "Doug Zembiec",
    "winner_school": "Navy",
    "loser": "Erich Harvey",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 451,
    "winner": "Reese Andy",
    "winner_school": "Wyoming",
    "loser": "John Koss",
    "loser_school": "West Virginia",
    "result": "Dec 11-5"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 452,
    "winner": "Bob Ferraro",
    "winner_school": "Bucknell",
    "loser": "Mike Geurin",
    "loser_school": "Lock Haven",
    "result": "Dec 1-0"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Les Gutches",
    "winner_school": "Oregon State",
    "loser": "Ray Brinzer",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Quincey Clark",
    "winner_school": "Oklahoma",
    "loser": "Brett Colombini",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Rohan Gardner",
    "winner_school": "Northwestern",
    "loser": "Doug Zembiec",
    "loser_school": "Navy",
    "result": "Dec 8-1"
  },
  {
    "round": "WbConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Reese Andy",
    "winner_school": "Wyoming",
    "loser": "Bob Ferraro",
    "loser_school": "Bucknell",
    "result": "Dec 4-3 SV"
  },
  {
    "round": "WbConsR5",
    "weight": "177",
    "bout": 515,
    "winner": "Ray Brinzer",
    "winner_school": "Iowa",
    "loser": "Rohan Gardner",
    "loser_school": "Northwestern",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR5",
    "weight": "177",
    "bout": 516,
    "winner": "Brett Colombini",
    "winner_school": "Minnesota",
    "loser": "Reese Andy",
    "loser_school": "Wyoming",
    "result": "DEF"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 528,
    "winner": "Bob Ferraro",
    "winner_school": "Bucknell",
    "loser": "Doug Zembiec",
    "loser_school": "Navy",
    "result": "Dec 2-1 SV"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Rohan Gardner",
    "winner_school": "Northwestern",
    "loser": "Reese Andy",
    "loser_school": "Wyoming",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Ray Brinzer",
    "winner_school": "Iowa",
    "loser": "Brett Colombini",
    "loser_school": "Minnesota",
    "result": "MD 9-1"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Les Gutches",
    "winner_school": "Oregon State",
    "loser": "Quincey Clark",
    "loser_school": "Oklahoma",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Jehad Hamdan",
    "winner_school": "Michigan",
    "loser": "Lonny Rivera",
    "loser_school": "Cleveland State",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Nick Szerlip",
    "winner_school": "Columbia",
    "loser": "Daryk Moistner",
    "loser_school": "Chattanooga",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Chad Flack",
    "winner_school": "Oregon State",
    "loser": "Darrin Vincent",
    "loser_school": "Boston University",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Joel Sharratt",
    "winner_school": "Iowa",
    "loser": "Humphrey Atiemo",
    "loser_school": "Maryland",
    "result": "Fall 2:09"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Jassen Froehlich",
    "winner_school": "CSU Bakersfield",
    "loser": "Ian Hearn",
    "loser_school": "Central Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Jacob Scott",
    "winner_school": "American",
    "loser": "Aaron Strobel",
    "loser_school": "Clemson",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Jerry Brooks",
    "winner_school": "Campbell",
    "loser": "Demond Rodez",
    "loser_school": "Northern Illinois",
    "result": "Fall 0:27"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Tony Llanusa",
    "winner_school": "North Carolina",
    "loser": "Paul Fitzpatrick",
    "loser_school": "Brown",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Bryan Stout",
    "winner_school": "Clarion",
    "loser": "Dan Lashley",
    "loser_school": "Cal Poly",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "John Harrison",
    "loser_school": "Air Force",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Rich Evans",
    "winner_school": "Drexel",
    "loser": "Steve Rusk",
    "loser_school": "Illinois",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Jason Robison",
    "winner_school": "Edinboro",
    "loser": "Lalo Moz",
    "loser_school": "Fresno State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "J.J. McGrew",
    "winner_school": "Oklahoma State",
    "loser": "Jeremy Goeden",
    "loser_school": "Minnesota",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Jehad Hamdan",
    "winner_school": "Michigan",
    "loser": "Nick Szerlip",
    "loser_school": "Columbia",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Joel Sharratt",
    "winner_school": "Iowa",
    "loser": "Chad Flack",
    "loser_school": "Oregon State",
    "result": "MD 18-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Jacob Scott",
    "winner_school": "American",
    "loser": "Jassen Froehlich",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "John Kading",
    "winner_school": "Oklahoma",
    "loser": "Jerry Brooks",
    "loser_school": "Campbell",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Bryan Stout",
    "winner_school": "Clarion",
    "loser": "Tony Llanusa",
    "loser_school": "North Carolina",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Emilio Collins",
    "winner_school": "Michigan State",
    "loser": "Ryan Tobin",
    "loser_school": "Nebraska",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Jason Robison",
    "winner_school": "Edinboro",
    "loser": "Rich Evans",
    "loser_school": "Drexel",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "J.J. McGrew",
    "winner_school": "Oklahoma State",
    "loser": "Ben Nachtrieb",
    "loser_school": "Indiana",
    "result": "MD 18-10"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 325,
    "winner": "Lonny Rivera",
    "winner_school": "Cleveland State",
    "loser": "Nick Szerlip",
    "loser_school": "Columbia",
    "result": "MD 14-6"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 326,
    "winner": "Chad Flack",
    "winner_school": "Oregon State",
    "loser": "Humphrey Atiemo",
    "loser_school": "Maryland",
    "result": "MD 12-2"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 327,
    "winner": "Jassen Froehlich",
    "winner_school": "CSU Bakersfield",
    "loser": "Aaron Strobel",
    "loser_school": "Clemson",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 329,
    "winner": "Dan Lashley",
    "winner_school": "Cal Poly",
    "loser": "Tony Llanusa",
    "loser_school": "North Carolina",
    "result": "Dec 11-9 SV"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 331,
    "winner": "Lalo Moz",
    "winner_school": "Fresno State",
    "loser": "Rich Evans",
    "loser_school": "Drexel",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 332,
    "winner": "Jeremy Goeden",
    "winner_school": "Minnesota",
    "loser": "Ben Nachtrieb",
    "loser_school": "Indiana",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Joel Sharratt",
    "winner_school": "Iowa",
    "loser": "Jehad Hamdan",
    "loser_school": "Michigan",
    "result": "Fall 4:42"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "John Kading",
    "winner_school": "Oklahoma",
    "loser": "Jacob Scott",
    "loser_school": "American",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Emilio Collins",
    "winner_school": "Michigan State",
    "loser": "Bryan Stout",
    "loser_school": "Clarion",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "J.J. McGrew",
    "winner_school": "Oklahoma State",
    "loser": "Jason Robison",
    "loser_school": "Edinboro",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "Lonny Rivera",
    "winner_school": "Cleveland State",
    "loser": "Chad Flack",
    "loser_school": "Oregon State",
    "result": "TF 16-0 4:09"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "Jassen Froehlich",
    "winner_school": "CSU Bakersfield",
    "loser": "Jerry Brooks",
    "loser_school": "Campbell",
    "result": "MD 13-1"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "Dan Lashley",
    "loser_school": "Cal Poly",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Jeremy Goeden",
    "winner_school": "Minnesota",
    "loser": "Lalo Moz",
    "loser_school": "Fresno State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 453,
    "winner": "Jason Robison",
    "winner_school": "Edinboro",
    "loser": "Lonny Rivera",
    "loser_school": "Cleveland State",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 454,
    "winner": "Bryan Stout",
    "winner_school": "Clarion",
    "loser": "Jassen Froehlich",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 1-0"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 455,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "Jacob Scott",
    "loser_school": "American",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 456,
    "winner": "Jehad Hamdan",
    "winner_school": "Michigan",
    "loser": "Jeremy Goeden",
    "loser_school": "Minnesota",
    "result": "Fall 6:37 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Joel Sharratt",
    "winner_school": "Iowa",
    "loser": "John Kading",
    "loser_school": "Oklahoma",
    "result": "Dec 7-2"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "J.J. McGrew",
    "winner_school": "Oklahoma State",
    "loser": "Emilio Collins",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Bryan Stout",
    "winner_school": "Clarion",
    "loser": "Jason Robison",
    "loser_school": "Edinboro",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Jehad Hamdan",
    "winner_school": "Michigan",
    "loser": "Ryan Tobin",
    "loser_school": "Nebraska",
    "result": "Fall 3:58"
  },
  {
    "round": "WbConsR5",
    "weight": "190",
    "bout": 517,
    "winner": "Bryan Stout",
    "winner_school": "Clarion",
    "loser": "John Kading",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR5",
    "weight": "190",
    "bout": 518,
    "winner": "Emilio Collins",
    "winner_school": "Michigan State",
    "loser": "Jehad Hamdan",
    "loser_school": "Michigan",
    "result": "MD 10-2"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 529,
    "winner": "Jason Robison",
    "winner_school": "Edinboro",
    "loser": "Ryan Tobin",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "John Kading",
    "winner_school": "Oklahoma",
    "loser": "Jehad Hamdan",
    "loser_school": "Michigan",
    "result": "Fall 1:57"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Emilio Collins",
    "winner_school": "Michigan State",
    "loser": "Bryan Stout",
    "loser_school": "Clarion",
    "result": "Dec 5-1"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "J.J. McGrew",
    "winner_school": "Oklahoma State",
    "loser": "Joel Sharratt",
    "loser_school": "Iowa",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 155,
    "winner": "Darin Priesendorf",
    "winner_school": "Fresno State",
    "loser": "Jamie Huntington",
    "loser_school": "Drexel",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 156,
    "winner": "Kerry McCoy",
    "winner_school": "Penn State",
    "loser": "Dion Reed",
    "loser_school": "Boston University",
    "result": "Fall 4:57"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 157,
    "winner": "Nick Hall",
    "winner_school": "Old Dominion",
    "loser": "Shawn Stipich",
    "loser_school": "Boise State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 158,
    "winner": "Jeremy Lay",
    "winner_school": "Missouri",
    "loser": "Matt Eckerman",
    "loser_school": "Duke",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 159,
    "winner": "Brian Keck",
    "winner_school": "Bloomsburg",
    "loser": "Erik Stroner",
    "loser_school": "Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 160,
    "winner": "Justin Greenlee",
    "winner_school": "Northern Iowa",
    "loser": "Airron Richardson",
    "loser_school": "Michigan",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 161,
    "winner": "Dan Payne",
    "winner_school": "Clarion",
    "loser": "Nathan Sullivan",
    "loser_school": "Oregon",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 162,
    "winner": "Jason Gleasman",
    "winner_school": "Syracuse",
    "loser": "Pat Wiltanger",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-4 TB"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 163,
    "winner": "Bill Closson",
    "winner_school": "Lehigh",
    "loser": "Jim Guttridge",
    "loser_school": "Illinois State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 164,
    "winner": "Justin Harty",
    "winner_school": "North Carolina",
    "loser": "Javier Posa",
    "loser_school": "Oklahoma",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 165,
    "winner": "Tolly Thompson",
    "winner_school": "Nebraska",
    "loser": "David Helms",
    "loser_school": "Miami Ohio",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 166,
    "winner": "Seth Brady",
    "winner_school": "Illinois",
    "loser": "Duke Howell",
    "loser_school": "Appalachian State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 167,
    "winner": "Reynold Gardner",
    "winner_school": "Oregon State",
    "loser": "Angelo Borzio",
    "loser_school": "East Stroudsburg",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 168,
    "winner": "Dan Hicks",
    "winner_school": "Navy",
    "loser": "Jerry McCoy",
    "loser_school": "California PA",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 169,
    "winner": "Jeff Walter",
    "winner_school": "Wisconsin",
    "loser": "Paschal Duru",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 243,
    "winner": "Kerry McCoy",
    "winner_school": "Penn State",
    "loser": "Darin Priesendorf",
    "loser_school": "Fresno State",
    "result": "TF 19-4 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 244,
    "winner": "Jeremy Lay",
    "winner_school": "Missouri",
    "loser": "Nick Hall",
    "loser_school": "Old Dominion",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 245,
    "winner": "Justin Greenlee",
    "winner_school": "Northern Iowa",
    "loser": "Brian Keck",
    "loser_school": "Bloomsburg",
    "result": "Fall 3:39"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 246,
    "winner": "Dan Payne",
    "winner_school": "Clarion",
    "loser": "Jason Gleasman",
    "loser_school": "Syracuse",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 247,
    "winner": "Justin Harty",
    "winner_school": "North Carolina",
    "loser": "Bill Closson",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 248,
    "winner": "Tolly Thompson",
    "winner_school": "Nebraska",
    "loser": "Seth Brady",
    "loser_school": "Illinois",
    "result": "Dec 16-11"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 249,
    "winner": "Dan Hicks",
    "winner_school": "Navy",
    "loser": "Reynold Gardner",
    "loser_school": "Oregon State",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 250,
    "winner": "Billy Pierce",
    "winner_school": "Minnesota",
    "loser": "Jeff Walter",
    "loser_school": "Wisconsin",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 333,
    "winner": "Dion Reed",
    "winner_school": "Boston University",
    "loser": "Darin Priesendorf",
    "loser_school": "Fresno State",
    "result": "Dec 9-7"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 334,
    "winner": "Nick Hall",
    "winner_school": "Old Dominion",
    "loser": "Matt Eckerman",
    "loser_school": "Duke",
    "result": "Dec 2-0"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 335,
    "winner": "Airron Richardson",
    "winner_school": "Michigan",
    "loser": "Brian Keck",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 336,
    "winner": "Jason Gleasman",
    "winner_school": "Syracuse",
    "loser": "Nathan Sullivan",
    "loser_school": "Oregon",
    "result": "Dec 4-0"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 337,
    "winner": "Javier Posa",
    "winner_school": "Oklahoma",
    "loser": "Bill Closson",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 338,
    "winner": "Seth Brady",
    "winner_school": "Illinois",
    "loser": "David Helms",
    "loser_school": "Miami Ohio",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 339,
    "winner": "Jerry McCoy",
    "winner_school": "California PA",
    "loser": "Reynold Gardner",
    "loser_school": "Oregon State",
    "result": "MD 12-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 377,
    "winner": "Kerry McCoy",
    "winner_school": "Penn State",
    "loser": "Jeremy Lay",
    "loser_school": "Missouri",
    "result": "MD 11-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 378,
    "winner": "Justin Greenlee",
    "winner_school": "Northern Iowa",
    "loser": "Dan Payne",
    "loser_school": "Clarion",
    "result": "Fall 1:06"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 379,
    "winner": "Tolly Thompson",
    "winner_school": "Nebraska",
    "loser": "Justin Harty",
    "loser_school": "North Carolina",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 380,
    "winner": "Billy Pierce",
    "winner_school": "Minnesota",
    "loser": "Dan Hicks",
    "loser_school": "Navy",
    "result": "Dec 5-3 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 417,
    "winner": "Nick Hall",
    "winner_school": "Old Dominion",
    "loser": "Dion Reed",
    "loser_school": "Boston University",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 418,
    "winner": "Jason Gleasman",
    "winner_school": "Syracuse",
    "loser": "Airron Richardson",
    "loser_school": "Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 419,
    "winner": "Seth Brady",
    "winner_school": "Illinois",
    "loser": "Javier Posa",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 420,
    "winner": "Jeff Walter",
    "winner_school": "Wisconsin",
    "loser": "Jerry McCoy",
    "loser_school": "California PA",
    "result": "MD 10-2"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 457,
    "winner": "Nick Hall",
    "winner_school": "Old Dominion",
    "loser": "Dan Hicks",
    "loser_school": "Navy",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 458,
    "winner": "Justin Harty",
    "winner_school": "North Carolina",
    "loser": "Jason Gleasman",
    "loser_school": "Syracuse",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 459,
    "winner": "Dan Payne",
    "winner_school": "Clarion",
    "loser": "Seth Brady",
    "loser_school": "Illinois",
    "result": "Dec 8-6"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 460,
    "winner": "Jeff Walter",
    "winner_school": "Wisconsin",
    "loser": "Jeremy Lay",
    "loser_school": "Missouri",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 479,
    "winner": "Justin Greenlee",
    "winner_school": "Northern Iowa",
    "loser": "Kerry McCoy",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 480,
    "winner": "Tolly Thompson",
    "winner_school": "Nebraska",
    "loser": "Billy Pierce",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR4",
    "weight": "275",
    "bout": 499,
    "winner": "Nick Hall",
    "winner_school": "Old Dominion",
    "loser": "Justin Harty",
    "loser_school": "North Carolina",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR4",
    "weight": "275",
    "bout": 500,
    "winner": "Jeff Walter",
    "winner_school": "Wisconsin",
    "loser": "Dan Payne",
    "loser_school": "Clarion",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR5",
    "weight": "275",
    "bout": 519,
    "winner": "Kerry McCoy",
    "winner_school": "Penn State",
    "loser": "Nick Hall",
    "loser_school": "Old Dominion",
    "result": "DEF"
  },
  {
    "round": "WbConsR5",
    "weight": "275",
    "bout": 520,
    "winner": "Jeff Walter",
    "winner_school": "Wisconsin",
    "loser": "Billy Pierce",
    "loser_school": "Minnesota",
    "result": "Dec 2-0"
  },
  {
    "round": "7thPlace",
    "weight": "275",
    "bout": 530,
    "winner": "Dan Payne",
    "winner_school": "Clarion",
    "loser": "Justin Harty",
    "loser_school": "North Carolina",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "5thPlace",
    "weight": "275",
    "bout": 540,
    "winner": "Nick Hall",
    "winner_school": "Old Dominion",
    "loser": "Billy Pierce",
    "loser_school": "Minnesota",
    "result": "Dec 3-0"
  },
  {
    "round": "3rdPlace",
    "weight": "275",
    "bout": 550,
    "winner": "Kerry McCoy",
    "winner_school": "Penn State",
    "loser": "Jeff Walter",
    "loser_school": "Wisconsin",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "275",
    "bout": 560,
    "winner": "Tolly Thompson",
    "winner_school": "Nebraska",
    "loser": "Justin Greenlee",
    "loser_school": "Northern Iowa",
    "result": "MD 8-0"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
