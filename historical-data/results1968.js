// 1968 NCAA Division I Wrestling Championships (3/21/1968 to 3/23/1968 at Penn State). Weight classes 115-UNL (11). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1968 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1968-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "115",
    "bout": 1,
    "winner": "Bruce Balmat",
    "winner_school": "Penn State",
    "loser": "Andy Matviak",
    "loser_school": "Wilkes",
    "result": "MD 16-8"
  },
  {
    "round": "Prelims",
    "weight": "115",
    "bout": 1001,
    "winner": "Frank Carrozza",
    "winner_school": "West Chester",
    "loser": "Gail Sloss",
    "loser_school": "Iowa",
    "result": "Fall 7:42"
  },
  {
    "round": "Prelims",
    "weight": "115",
    "bout": 2001,
    "winner": "Al Hinds",
    "winner_school": "Arizona",
    "loser": "Ray Day",
    "loser_school": "Clarion",
    "result": "MD 11-2"
  },
  {
    "round": "Prelims",
    "weight": "115",
    "bout": 3001,
    "winner": "Ken Melchior",
    "winner_school": "Lock Haven",
    "loser": "Bob Terrill",
    "loser_school": "Maryland",
    "result": "Fall 6:37"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 11,
    "winner": "Bruce Unangst",
    "winner_school": "Pittsburgh",
    "loser": "Peter Achilles",
    "loser_school": "Colgate",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 12,
    "winner": "Balvino Irizarry",
    "winner_school": "Utah",
    "loser": "Darrell Mazzari",
    "loser_school": "Marquette",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 13,
    "winner": "Dave Keller",
    "winner_school": "Toledo",
    "loser": "Tom Abercrombie",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 14,
    "winner": "Mike Schmauss",
    "winner_school": "Iowa State",
    "loser": "Ed Dumas",
    "loser_school": "Northwestern",
    "result": "Fall 6:55"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 15,
    "winner": "Gordon Yamamoto",
    "winner_school": "California-Berkeley",
    "loser": "Ron Guzman",
    "loser_school": "Lehigh",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 16,
    "winner": "Ken Melchior",
    "winner_school": "Lock Haven",
    "loser": "Frank Romano",
    "loser_school": "Ohio State",
    "result": "Fall 7:14"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 17,
    "winner": "Dave Unik",
    "winner_school": "Ohio",
    "loser": "L.Q. Starling",
    "loser_school": "San Jose State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 18,
    "winner": "Al Hinds",
    "winner_school": "Arizona",
    "loser": "Mike Kocevar",
    "loser_school": "Shippensburg",
    "result": "Fall 2:33"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 19,
    "winner": "Wayne Boyd",
    "winner_school": "Temple",
    "loser": "John Morley",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 20,
    "winner": "Greg Schmidt",
    "winner_school": "South Dakota State",
    "loser": "Frank Coco",
    "loser_school": "East Stroudsburg",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 21,
    "winner": "Frank Carrozza",
    "winner_school": "West Chester",
    "loser": "Jerry Martinez",
    "loser_school": "Northern Colorado",
    "result": "MD 18-9"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 22,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Rich Tamble",
    "loser_school": "Adams State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 23,
    "winner": "Chuck Henry",
    "winner_school": "Brigham Young",
    "loser": "Bruce Balmat",
    "loser_school": "Penn State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 24,
    "winner": "Bob Shines",
    "winner_school": "Arizona State",
    "loser": "Jon Shurbert",
    "loser_school": "Virginia",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 25,
    "winner": "Tommy Green",
    "winner_school": "Oklahoma State",
    "loser": "Phil Conti",
    "loser_school": "Navy",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 26,
    "winner": "Sergio Gonzales",
    "winner_school": "UCLA",
    "loser": "George Hoddy",
    "loser_school": "Michigan State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "Balvino Irizarry",
    "winner_school": "Utah",
    "loser": "Bruce Unangst",
    "loser_school": "Pittsburgh",
    "result": "Dec 13-12"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Dave Keller",
    "winner_school": "Toledo",
    "loser": "Mike Schmauss",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Ken Melchior",
    "winner_school": "Lock Haven",
    "loser": "Gordon Yamamoto",
    "loser_school": "California-Berkeley",
    "result": "Fall 5:27"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Dave Unik",
    "winner_school": "Ohio",
    "loser": "Al Hinds",
    "loser_school": "Arizona",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Wayne Boyd",
    "winner_school": "Temple",
    "loser": "Greg Schmidt",
    "loser_school": "South Dakota State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Frank Carrozza",
    "loser_school": "West Chester",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Chuck Henry",
    "winner_school": "Brigham Young",
    "loser": "Bob Shines",
    "loser_school": "Arizona State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 178,
    "winner": "Sergio Gonzales",
    "winner_school": "UCLA",
    "loser": "Tommy Green",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Dave Keller",
    "winner_school": "Toledo",
    "loser": "Balvino Irizarry",
    "loser_school": "Utah",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Ken Melchior",
    "winner_school": "Lock Haven",
    "loser": "Dave Unik",
    "loser_school": "Ohio",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Wayne Boyd",
    "loser_school": "Temple",
    "result": "MD 11-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Sergio Gonzales",
    "winner_school": "UCLA",
    "loser": "Chuck Henry",
    "loser_school": "Brigham Young",
    "result": "Fall 7:09"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Ken Melchior",
    "winner_school": "Lock Haven",
    "loser": "Dave Keller",
    "loser_school": "Toledo",
    "result": "Dec 10-6"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Sergio Gonzales",
    "winner_school": "UCLA",
    "loser": "John Miller",
    "loser_school": "Oregon",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "115",
    "bout": 531,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Dave Unik",
    "loser_school": "Ohio",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Tommy Green",
    "winner_school": "Oklahoma State",
    "loser": "Dave Keller",
    "loser_school": "Toledo",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Ken Melchior",
    "winner_school": "Lock Haven",
    "loser": "Sergio Gonzales",
    "loser_school": "UCLA",
    "result": "Dec 9-3"
  },
  {
    "round": "RepConsP",
    "weight": "115",
    "bout": 251,
    "winner": "Bob Terrill",
    "winner_school": "Maryland",
    "loser": "Frank Romano",
    "loser_school": "Ohio State",
    "result": "Fall 0:52"
  },
  {
    "round": "RepConsA",
    "weight": "115",
    "bout": 261,
    "winner": "Bob Terrill",
    "winner_school": "Maryland",
    "loser": "Gordon Yamamoto",
    "loser_school": "California-Berkeley",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsA",
    "weight": "115",
    "bout": 262,
    "winner": "Tommy Green",
    "winner_school": "Oklahoma State",
    "loser": "George Hoddy",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Dave Unik",
    "winner_school": "Ohio",
    "loser": "Bob Terrill",
    "loser_school": "Maryland",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Tommy Green",
    "winner_school": "Oklahoma State",
    "loser": "Chuck Henry",
    "loser_school": "Brigham Young",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Dave Keller",
    "winner_school": "Toledo",
    "loser": "Dave Unik",
    "loser_school": "Ohio",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Tommy Green",
    "winner_school": "Oklahoma State",
    "loser": "John Miller",
    "loser_school": "Oregon",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 27,
    "winner": "Tom Greenwood",
    "winner_school": "Marquette",
    "loser": "Mike Jarrell",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 28,
    "winner": "Stan Keeley",
    "winner_school": "Oklahoma",
    "loser": "Jon Wood",
    "loser_school": "Citadel",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 29,
    "winner": "Scott Evans",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Ted Levine",
    "loser_school": "Fairleigh Dickinson",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 30,
    "winner": "Tim McCall",
    "winner_school": "Indiana",
    "loser": "Steve Bryant",
    "loser_school": "East Stroudsburg",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 31,
    "winner": "Rick Sanders",
    "winner_school": "Portland State",
    "loser": "Harry Weinhofer",
    "loser_school": "Penn State",
    "result": "Fall 3:25"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 33,
    "winner": "Rich Meyer",
    "winner_school": "Lehigh",
    "loser": "Gary Hetherington",
    "loser_school": "Western Michigan",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "Gary Wallman",
    "winner_school": "Iowa State",
    "loser": "Bob Pavelko",
    "loser_school": "Air Force",
    "result": "Fall 3:20"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 35,
    "winner": "Gary Burger",
    "winner_school": "Navy",
    "loser": "Sam King",
    "loser_school": "Cal Poly",
    "result": "Fall 5:13"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 36,
    "winner": "Bob Kawa",
    "winner_school": "Utah",
    "loser": "Wayne Watson",
    "loser_school": "Northwestern",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 37,
    "winner": "Bill DeSario",
    "winner_school": "SUNY-Cortland",
    "loser": "Bill Komoloske",
    "loser_school": "Colorado",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 38,
    "winner": "Steve Rubin",
    "winner_school": "Michigan",
    "loser": "Jerry Reshetar",
    "loser_school": "Drake",
    "result": "Fall 1:52"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 39,
    "winner": "Scott Patten",
    "winner_school": "Army",
    "loser": "Mike McGilliard",
    "loser_school": "Michigan State",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 40,
    "winner": "Dwayne Keller",
    "winner_school": "Oklahoma State",
    "loser": "Ron Vallance",
    "loser_school": "UCLA",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 41,
    "winner": "Ted Parker",
    "winner_school": "Indiana State",
    "loser": "Mike Milkovich",
    "loser_school": "Kent State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Stan Keeley",
    "winner_school": "Oklahoma",
    "loser": "Tom Greenwood",
    "loser_school": "Marquette",
    "result": "Fall 1:23"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Tim McCall",
    "winner_school": "Indiana",
    "loser": "Scott Evans",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Rick Sanders",
    "winner_school": "Portland State",
    "loser": "Tom Bentz",
    "loser_school": "Iowa",
    "result": "Fall 1:50"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Gary Wallman",
    "winner_school": "Iowa State",
    "loser": "Rich Meyer",
    "loser_school": "Lehigh",
    "result": "Fall 6:26"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Gary Burger",
    "winner_school": "Navy",
    "loser": "Bob Kawa",
    "loser_school": "Utah",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Bill DeSario",
    "winner_school": "SUNY-Cortland",
    "loser": "Steve Rubin",
    "loser_school": "Michigan",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Dwayne Keller",
    "winner_school": "Oklahoma State",
    "loser": "Scott Patten",
    "loser_school": "Army",
    "result": "Fall 3:18"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Ted Parker",
    "winner_school": "Indiana State",
    "loser": "Richard Shildt",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Tim McCall",
    "winner_school": "Indiana",
    "loser": "Stan Keeley",
    "loser_school": "Oklahoma",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Rick Sanders",
    "winner_school": "Portland State",
    "loser": "Gary Wallman",
    "loser_school": "Iowa State",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Bill DeSario",
    "winner_school": "SUNY-Cortland",
    "loser": "Gary Burger",
    "loser_school": "Navy",
    "result": "Fall 7:38"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Dwayne Keller",
    "winner_school": "Oklahoma State",
    "loser": "Ted Parker",
    "loser_school": "Indiana State",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Rick Sanders",
    "winner_school": "Portland State",
    "loser": "Tim McCall",
    "loser_school": "Indiana",
    "result": "MD 12-2"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Dwayne Keller",
    "winner_school": "Oklahoma State",
    "loser": "Bill DeSario",
    "loser_school": "SUNY-Cortland",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "123",
    "bout": 532,
    "winner": "Ted Parker",
    "winner_school": "Indiana State",
    "loser": "Gary Wallman",
    "loser_school": "Iowa State",
    "result": "Dec 7-2"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Tim McCall",
    "winner_school": "Indiana",
    "loser": "Bill DeSario",
    "loser_school": "SUNY-Cortland",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Dwayne Keller",
    "winner_school": "Oklahoma State",
    "loser": "Rick Sanders",
    "loser_school": "Portland State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 263,
    "winner": "Harry Weinhofer",
    "winner_school": "Penn State",
    "loser": "Tom Bentz",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 264,
    "winner": "Ron Vallance",
    "winner_school": "UCLA",
    "loser": "Scott Patten",
    "loser_school": "Army",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Gary Wallman",
    "winner_school": "Iowa State",
    "loser": "Harry Weinhofer",
    "loser_school": "Penn State",
    "result": "Dec 7-0"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Ted Parker",
    "winner_school": "Indiana State",
    "loser": "Ron Vallance",
    "loser_school": "UCLA",
    "result": "MD 8-0"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Tim McCall",
    "winner_school": "Indiana",
    "loser": "Gary Wallman",
    "loser_school": "Iowa State",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Bill DeSario",
    "winner_school": "SUNY-Cortland",
    "loser": "Ted Parker",
    "loser_school": "Indiana State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "Prelims",
    "weight": "130",
    "bout": 3,
    "winner": "Ned Bushong",
    "winner_school": "East Stroudsburg",
    "loser": "Roger Young",
    "loser_school": "Ohio State",
    "result": "MD 19-4"
  },
  {
    "round": "Prelims",
    "weight": "130",
    "bout": 1003,
    "winner": "George Stover",
    "winner_school": "Virginia Tech",
    "loser": "Curt Grabfelder",
    "loser_school": "Bloomsburg",
    "result": "Dec 13-9"
  },
  {
    "round": "Prelims",
    "weight": "130",
    "bout": 2003,
    "winner": "Len Groom",
    "winner_school": "Northern Colorado",
    "loser": "Roy Williams",
    "loser_school": "Kent State",
    "result": "MD 16-5"
  },
  {
    "round": "Prelims",
    "weight": "130",
    "bout": 3003,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Steve Comiskey",
    "loser_school": "Navy",
    "result": "MD 16-2"
  },
  {
    "round": "Prelims",
    "weight": "130",
    "bout": 4003,
    "winner": "Rick Poulson",
    "winner_school": "Marquette",
    "loser": "Gregg Erickson",
    "loser_school": "MIT",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 43,
    "winner": "John Hahn",
    "winner_school": "UCLA",
    "loser": "Bill Germann",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 44,
    "winner": "Len Groom",
    "winner_school": "Northern Colorado",
    "loser": "Jim Hull",
    "loser_school": "Coast Guard",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 45,
    "winner": "Douglas Smith",
    "winner_school": "Washington",
    "loser": "Mike Mullady",
    "loser_school": "Army",
    "result": "Dec 14-10"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 46,
    "winner": "Dick Mailloux",
    "winner_school": "Oregon",
    "loser": "Ned Bushong",
    "loser_school": "East Stroudsburg",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 47,
    "winner": "Dennis Crowe",
    "winner_school": "Oklahoma State",
    "loser": "Pete Henning",
    "loser_school": "Lehigh",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 48,
    "winner": "Gerry Smith",
    "winner_school": "South Dakota State",
    "loser": "Felix Sanchez",
    "loser_school": "Air Force",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 49,
    "winner": "Jim Arnoult",
    "winner_school": "Maryland",
    "loser": "Larry Wagner",
    "loser_school": "Arizona State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "David McGuire",
    "winner_school": "Oklahoma",
    "loser": "Bill Martinez",
    "loser_school": "Colorado State",
    "result": "MD 20-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Mike McAdams",
    "winner_school": "Brigham Young",
    "loser": "Rick Poulson",
    "loser_school": "Marquette",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 52,
    "winner": "Jim Pace",
    "winner_school": "NC State",
    "loser": "George Gesualdo",
    "loser_school": "Fairleigh Dickinson",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 53,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "John Walter",
    "loser_school": "SUNY-Oswego",
    "result": "Fall 5:32"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 54,
    "winner": "Wes Caine",
    "winner_school": "Northern Illinois",
    "loser": "Paul Daube",
    "loser_school": "Shippensburg",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 55,
    "winner": "Pete Nord",
    "winner_school": "Colorado",
    "loser": "George Stover",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 56,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Wally Clark",
    "loser_school": "Penn State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 57,
    "winner": "Ed Jackson",
    "winner_school": "North Central Illinois",
    "loser": "Lou Hudson",
    "loser_school": "Michigan",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 58,
    "winner": "Glen Younger",
    "winner_school": "Western State",
    "loser": "Ken Furnkranz",
    "loser_school": "SUNY-Cortland",
    "result": "MD 16-6"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "John Hahn",
    "winner_school": "UCLA",
    "loser": "Len Groom",
    "loser_school": "Northern Colorado",
    "result": "Fall 6:13"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Douglas Smith",
    "winner_school": "Washington",
    "loser": "Dick Mailloux",
    "loser_school": "Oregon",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Dennis Crowe",
    "winner_school": "Oklahoma State",
    "loser": "Gerry Smith",
    "loser_school": "South Dakota State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "David McGuire",
    "winner_school": "Oklahoma",
    "loser": "Jim Arnoult",
    "loser_school": "Maryland",
    "result": "Fall 4:52"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Mike McAdams",
    "winner_school": "Brigham Young",
    "loser": "Jim Pace",
    "loser_school": "NC State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Wes Caine",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Pete Nord",
    "winner_school": "Colorado",
    "loser": "Keith Lowrance",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Glen Younger",
    "winner_school": "Western State",
    "loser": "Ed Jackson",
    "loser_school": "North Central Illinois",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "John Hahn",
    "winner_school": "UCLA",
    "loser": "Douglas Smith",
    "loser_school": "Washington",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "David McGuire",
    "winner_school": "Oklahoma",
    "loser": "Dennis Crowe",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Mike McAdams",
    "loser_school": "Brigham Young",
    "result": "Fall 7:01"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Pete Nord",
    "winner_school": "Colorado",
    "loser": "Glen Younger",
    "loser_school": "Western State",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "David McGuire",
    "winner_school": "Oklahoma",
    "loser": "John Hahn",
    "loser_school": "UCLA",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Pete Nord",
    "loser_school": "Colorado",
    "result": "Fall 7:40"
  },
  {
    "round": "5thPlace",
    "weight": "130",
    "bout": 533,
    "winner": "Pete Nord",
    "winner_school": "Colorado",
    "loser": "John Hahn",
    "loser_school": "UCLA",
    "result": "Dec 1-0"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Mike McAdams",
    "winner_school": "Brigham Young",
    "loser": "Dennis Crowe",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "David McGuire",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsP",
    "weight": "130",
    "bout": 1253,
    "winner": "Steve Comiskey",
    "winner_school": "Navy",
    "loser": "John Walter",
    "loser_school": "SUNY-Oswego",
    "result": "Fall 4:22"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 265,
    "winner": "Jim Arnoult",
    "winner_school": "Maryland",
    "loser": "Bill Martinez",
    "loser_school": "Colorado State",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 266,
    "winner": "Steve Comiskey",
    "winner_school": "Navy",
    "loser": "Wes Caine",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Dennis Crowe",
    "winner_school": "Oklahoma State",
    "loser": "Jim Arnoult",
    "loser_school": "Maryland",
    "result": "Dec 8-2"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Mike McAdams",
    "winner_school": "Brigham Young",
    "loser": "Steve Comiskey",
    "loser_school": "Navy",
    "result": "Dec 7-6"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Dennis Crowe",
    "winner_school": "Oklahoma State",
    "loser": "John Hahn",
    "loser_school": "UCLA",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Mike McAdams",
    "winner_school": "Brigham Young",
    "loser": "Pete Nord",
    "loser_school": "Colorado",
    "result": "Dec 2-1"
  },
  {
    "round": "Prelims",
    "weight": "137",
    "bout": 4,
    "winner": "Dale Anderson",
    "winner_school": "Michigan State",
    "loser": "Jay Leeman",
    "loser_school": "Lehigh",
    "result": "Fall 7:15"
  },
  {
    "round": "Prelims",
    "weight": "137",
    "bout": 1004,
    "winner": "Randy Stine",
    "winner_school": "Clarion",
    "loser": "Jeff Batchelor",
    "loser_school": "Brigham Young",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "Prelims",
    "weight": "137",
    "bout": 2004,
    "winner": "James Lentz",
    "winner_school": "Indiana",
    "loser": "Dennis O'Brien",
    "loser_school": "Marquette",
    "result": "Fall 4:46"
  },
  {
    "round": "Prelims",
    "weight": "137",
    "bout": 3004,
    "winner": "Marty Willigan",
    "winner_school": "Hofstra",
    "loser": "Geoff Henson",
    "loser_school": "Michigan",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 59,
    "winner": "Mike Stanley",
    "winner_school": "Adams State",
    "loser": "Kevin Gilead",
    "loser_school": "Maryland",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 60,
    "winner": "Marty Willigan",
    "winner_school": "Hofstra",
    "loser": "Marty Dickey",
    "loser_school": "Iowa State",
    "result": "Fall 6:32"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 61,
    "winner": "Dave Pruzansky",
    "winner_school": "Temple",
    "loser": "Don Roberts",
    "loser_school": "RIT",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 62,
    "winner": "Ron Otto",
    "winner_school": "MacMurray State",
    "loser": "John Homiak",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 63,
    "winner": "Jim Purdy",
    "winner_school": "East Stroudsburg",
    "loser": "Steve Povolac",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 64,
    "winner": "Jack Dunn",
    "winner_school": "Northwestern",
    "loser": "Mike Fitzgerald",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 5-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 65,
    "winner": "Ron Russo",
    "winner_school": "Bloomsburg",
    "loser": "Terry Habecker",
    "loser_school": "Ithaca",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Dale Anderson",
    "winner_school": "Michigan State",
    "loser": "Dave Kling",
    "loser_school": "Indiana PA",
    "result": "Fall 3:32"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 67,
    "winner": "Randy Stine",
    "winner_school": "Clarion",
    "loser": "Dick Humphreys",
    "loser_school": "Indiana State",
    "result": "FOR"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 68,
    "winner": "Ray Murphy",
    "winner_school": "Oklahoma State",
    "loser": "Bruce Shultz",
    "loser_school": "Washington",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 69,
    "winner": "Masaru Yatabe",
    "winner_school": "Portland State",
    "loser": "Alan Merrill",
    "loser_school": "Oregon",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 70,
    "winner": "Ron Lemmon",
    "winner_school": "Utah",
    "loser": "Joe Carstensen",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 71,
    "winner": "James Lentz",
    "winner_school": "Indiana",
    "loser": "Bill McBeth",
    "loser_school": "Army",
    "result": "Fall 1:05"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 72,
    "winner": "John Jadlocki",
    "winner_school": "Lock Haven",
    "loser": "Dave Spinda",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 73,
    "winner": "Art Holland",
    "winner_school": "Arizona State",
    "loser": "Steve Bishko",
    "loser_school": "MIT",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 74,
    "winner": "Pete Vanderlofske",
    "winner_school": "Navy",
    "loser": "Gary Stoner",
    "loser_school": "Western Michigan",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Marty Willigan",
    "winner_school": "Hofstra",
    "loser": "Mike Stanley",
    "loser_school": "Adams State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Dave Pruzansky",
    "winner_school": "Temple",
    "loser": "Ron Otto",
    "loser_school": "MacMurray State",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Jack Dunn",
    "winner_school": "Northwestern",
    "loser": "Jim Purdy",
    "loser_school": "East Stroudsburg",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Dale Anderson",
    "winner_school": "Michigan State",
    "loser": "Ron Russo",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Ray Murphy",
    "winner_school": "Oklahoma State",
    "loser": "Randy Stine",
    "loser_school": "Clarion",
    "result": "Fall 7:08"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Masaru Yatabe",
    "winner_school": "Portland State",
    "loser": "Ron Lemmon",
    "loser_school": "Utah",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "James Lentz",
    "winner_school": "Indiana",
    "loser": "John Jadlocki",
    "loser_school": "Lock Haven",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Pete Vanderlofske",
    "winner_school": "Navy",
    "loser": "Art Holland",
    "loser_school": "Arizona State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Marty Willigan",
    "winner_school": "Hofstra",
    "loser": "Dave Pruzansky",
    "loser_school": "Temple",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Dale Anderson",
    "winner_school": "Michigan State",
    "loser": "Jack Dunn",
    "loser_school": "Northwestern",
    "result": "MD 13-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Masaru Yatabe",
    "winner_school": "Portland State",
    "loser": "Ray Murphy",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Pete Vanderlofske",
    "winner_school": "Navy",
    "loser": "James Lentz",
    "loser_school": "Indiana",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Dale Anderson",
    "winner_school": "Michigan State",
    "loser": "Marty Willigan",
    "loser_school": "Hofstra",
    "result": "Dec 9-2"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Masaru Yatabe",
    "winner_school": "Portland State",
    "loser": "Pete Vanderlofske",
    "loser_school": "Navy",
    "result": "Dec 5-2"
  },
  {
    "round": "5thPlace",
    "weight": "137",
    "bout": 534,
    "winner": "Ray Murphy",
    "winner_school": "Oklahoma State",
    "loser": "Ron Russo",
    "loser_school": "Bloomsburg",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Pete Vanderlofske",
    "winner_school": "Navy",
    "loser": "Marty Willigan",
    "loser_school": "Hofstra",
    "result": "Dec 7-0"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Dale Anderson",
    "winner_school": "Michigan State",
    "loser": "Masaru Yatabe",
    "loser_school": "Portland State",
    "result": "Dec 9-5"
  },
  {
    "round": "RepConsP",
    "weight": "137",
    "bout": 254,
    "winner": "Jay Leeman",
    "winner_school": "Lehigh",
    "loser": "Dave Kling",
    "loser_school": "Indiana PA",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 267,
    "winner": "Ron Russo",
    "winner_school": "Bloomsburg",
    "loser": "Jay Leeman",
    "loser_school": "Lehigh",
    "result": "MD 16-4"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 268,
    "winner": "Ron Lemmon",
    "winner_school": "Utah",
    "loser": "Alan Merrill",
    "loser_school": "Oregon",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Ron Russo",
    "winner_school": "Bloomsburg",
    "loser": "Jack Dunn",
    "loser_school": "Northwestern",
    "result": "Dec 9-5"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Ray Murphy",
    "winner_school": "Oklahoma State",
    "loser": "Ron Lemmon",
    "loser_school": "Utah",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Marty Willigan",
    "winner_school": "Hofstra",
    "loser": "Ron Russo",
    "loser_school": "Bloomsburg",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Pete Vanderlofske",
    "winner_school": "Navy",
    "loser": "Ray Murphy",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-6"
  },
  {
    "round": "Prelims",
    "weight": "145",
    "bout": 5,
    "winner": "Katsumi Suzuki",
    "winner_school": "Oklahoma State",
    "loser": "Todd Stevenson",
    "loser_school": "Indiana PA",
    "result": "Fall 6:30"
  },
  {
    "round": "Prelims",
    "weight": "145",
    "bout": 1005,
    "winner": "Kent Wyatt",
    "winner_school": "Cal Poly",
    "loser": "Jim Moore",
    "loser_school": "Washington",
    "result": "Dec 10-4"
  },
  {
    "round": "Prelims",
    "weight": "145",
    "bout": 2005,
    "winner": "Phil Frey",
    "winner_school": "Oregon State",
    "loser": "Bob Pavlasek",
    "loser_school": "Ohio",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 75,
    "winner": "Felix Salinas",
    "winner_school": "Arizona State",
    "loser": "John DeMarco",
    "loser_school": "West Chester",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 76,
    "winner": "Russ McAdams",
    "winner_school": "Brigham Young",
    "loser": "Clarence Seal",
    "loser_school": "Portland State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 77,
    "winner": "Kent Webster",
    "winner_school": "Maryland",
    "loser": "Steve Baribeau",
    "loser_school": "Army",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 78,
    "winner": "Dale Bahr",
    "winner_school": "Iowa State",
    "loser": "Vince Fitz",
    "loser_school": "Penn State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 79,
    "winner": "Gerry McDonald",
    "winner_school": "East Stroudsburg",
    "loser": "Mike Couch",
    "loser_school": "NC State",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 80,
    "winner": "Dale Carr",
    "winner_school": "Michigan State",
    "loser": "Luther Gartrell",
    "loser_school": "North Carolina",
    "result": "Fall 7:40"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 81,
    "winner": "Don Henderson",
    "winner_school": "Air Force",
    "loser": "Dan Mudd",
    "loser_school": "Indiana",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 82,
    "winner": "Phil Frey",
    "winner_school": "Oregon State",
    "loser": "Mel Crider",
    "loser_school": "Northern Colorado",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 83,
    "winner": "Katsumi Suzuki",
    "winner_school": "Oklahoma State",
    "loser": "Steve Warren",
    "loser_school": "California-Berkeley",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 84,
    "winner": "Jerry Bond",
    "winner_school": "Northern Iowa",
    "loser": "Bob Ferraro",
    "loser_school": "Indiana State",
    "result": "FOR"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 85,
    "winner": "Kent Wyatt",
    "winner_school": "Cal Poly",
    "loser": "John Terboss",
    "loser_school": "Syracuse",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 86,
    "winner": "Ed Steers",
    "winner_school": "Citadel",
    "loser": "Ken Warner",
    "loser_school": "Shippensburg",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 87,
    "winner": "Rog Jehlicka",
    "winner_school": "Winona State",
    "loser": "John Maxham",
    "loser_school": "MIT",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 88,
    "winner": "Joe Wells",
    "winner_school": "Iowa",
    "loser": "Conrad Metcalf",
    "loser_school": "Colorado",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 89,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Dale Stahl",
    "loser_school": "Navy",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 90,
    "winner": "Wayne Carlson",
    "winner_school": "Utah State",
    "loser": "Steve Buttrey",
    "loser_school": "Northwestern",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 203,
    "winner": "Russ McAdams",
    "winner_school": "Brigham Young",
    "loser": "Felix Salinas",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 204,
    "winner": "Dale Bahr",
    "winner_school": "Iowa State",
    "loser": "Kent Webster",
    "loser_school": "Maryland",
    "result": "Fall 5:45"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 205,
    "winner": "Dale Carr",
    "winner_school": "Michigan State",
    "loser": "Gerry McDonald",
    "loser_school": "East Stroudsburg",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 206,
    "winner": "Phil Frey",
    "winner_school": "Oregon State",
    "loser": "Don Henderson",
    "loser_school": "Air Force",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 207,
    "winner": "Katsumi Suzuki",
    "winner_school": "Oklahoma State",
    "loser": "Jerry Bond",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 208,
    "winner": "Kent Wyatt",
    "winner_school": "Cal Poly",
    "loser": "Ed Steers",
    "loser_school": "Citadel",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 209,
    "winner": "Joe Wells",
    "winner_school": "Iowa",
    "loser": "Rog Jehlicka",
    "loser_school": "Winona State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 210,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Wayne Carlson",
    "loser_school": "Utah State",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 357,
    "winner": "Dale Bahr",
    "winner_school": "Iowa State",
    "loser": "Russ McAdams",
    "loser_school": "Brigham Young",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 358,
    "winner": "Dale Carr",
    "winner_school": "Michigan State",
    "loser": "Phil Frey",
    "loser_school": "Oregon State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 359,
    "winner": "Kent Wyatt",
    "winner_school": "Cal Poly",
    "loser": "Katsumi Suzuki",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 360,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Joe Wells",
    "loser_school": "Iowa",
    "result": "MD 15-4"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 469,
    "winner": "Dale Bahr",
    "winner_school": "Iowa State",
    "loser": "Dale Carr",
    "loser_school": "Michigan State",
    "result": "Dec 14-11"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 470,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Kent Wyatt",
    "loser_school": "Cal Poly",
    "result": "Dec 7-2"
  },
  {
    "round": "5thPlace",
    "weight": "145",
    "bout": 535,
    "winner": "Russ McAdams",
    "winner_school": "Brigham Young",
    "loser": "Wayne Carlson",
    "loser_school": "Utah State",
    "result": "Dec 6-0"
  },
  {
    "round": "3rdPlace",
    "weight": "145",
    "bout": 545,
    "winner": "Kent Wyatt",
    "winner_school": "Cal Poly",
    "loser": "Dale Carr",
    "loser_school": "Michigan State",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "Finals",
    "weight": "145",
    "bout": 555,
    "winner": "Dale Bahr",
    "winner_school": "Iowa State",
    "loser": "Mike Grant",
    "loser_school": "Oklahoma",
    "result": "Fall 2:29"
  },
  {
    "round": "RepConsA",
    "weight": "145",
    "bout": 269,
    "winner": "Vince Fitz",
    "winner_school": "Penn State",
    "loser": "Kent Webster",
    "loser_school": "Maryland",
    "result": "Dec 9-2"
  },
  {
    "round": "RepConsA",
    "weight": "145",
    "bout": 270,
    "winner": "Wayne Carlson",
    "winner_school": "Utah State",
    "loser": "Dale Stahl",
    "loser_school": "Navy",
    "result": "Dec 7-3"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 389,
    "winner": "Russ McAdams",
    "winner_school": "Brigham Young",
    "loser": "Vince Fitz",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 390,
    "winner": "Wayne Carlson",
    "winner_school": "Utah State",
    "loser": "Joe Wells",
    "loser_school": "Iowa",
    "result": "Dec 7-0"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 429,
    "winner": "Dale Carr",
    "winner_school": "Michigan State",
    "loser": "Russ McAdams",
    "loser_school": "Brigham Young",
    "result": "Dec 11-7"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 430,
    "winner": "Kent Wyatt",
    "winner_school": "Cal Poly",
    "loser": "Wayne Carlson",
    "loser_school": "Utah State",
    "result": "Dec 6-2"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 6,
    "winner": "Joe Gerst",
    "winner_school": "Bloomsburg",
    "loser": "Bob Hall",
    "loser_school": "Minnesota State-Moorhead",
    "result": "MD 14-5"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 1006,
    "winner": "Alex Roberts",
    "winner_school": "Georgia Tech",
    "loser": "Pete Sandberg",
    "loser_school": "Winona State",
    "result": "Fall 6:42"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 2006,
    "winner": "Bob Abraham",
    "winner_school": "Penn State",
    "loser": "Doug Niebel",
    "loser_school": "Clarion",
    "result": "Dec 2-0"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 3006,
    "winner": "Duane Dobson",
    "winner_school": "Nebraska",
    "loser": "Don Horton",
    "loser_school": "Air Force",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 4006,
    "winner": "Steve Alexander",
    "winner_school": "Temple",
    "loser": "Clay McEldowney",
    "loser_school": "Princeton",
    "result": "Dec 10-6"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 5006,
    "winner": "Jim Blacksmith",
    "winner_school": "Lock Haven",
    "loser": "Charles Marshall",
    "loser_school": "Illinois",
    "result": "Dec 5-1"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 6006,
    "winner": "Russ Schneider",
    "winner_school": "Northwestern",
    "loser": "Mike Mazzitelli",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-0"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 7006,
    "winner": "John Kent",
    "winner_school": "Navy",
    "loser": "Dave Berman",
    "loser_school": "Hofstra",
    "result": "MD 10-0"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 8006,
    "winner": "Len Borchers",
    "winner_school": "Stanford",
    "loser": "Norm Hawkins",
    "loser_school": "MIT",
    "result": "MD 11-2"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 9006,
    "winner": "Gobel Kline",
    "winner_school": "Maryland",
    "loser": "Jeff Thiel",
    "loser_school": "William & Mary",
    "result": "MD 11-1"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 10006,
    "winner": "Kim Snider",
    "winner_school": "Oregon State",
    "loser": "Gary Rushing",
    "loser_school": "Arizona",
    "result": "Dec 9-7"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 11006,
    "winner": "Dave Martin",
    "winner_school": "Iowa State",
    "loser": "Tom Muir",
    "loser_school": "Lehigh",
    "result": "MD 12-1"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 12006,
    "winner": "Charles Shepherd",
    "winner_school": "Utah",
    "loser": "Ron Ouellet",
    "loser_school": "Michigan State",
    "result": "Dec 7-0"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 13006,
    "winner": "John Finch",
    "winner_school": "Cal Poly",
    "loser": "Dave Nerothin",
    "loser_school": "Gustavus Adolphus",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 91,
    "winner": "Howard Hall",
    "winner_school": "Brigham Young",
    "loser": "John Sustersic",
    "loser_school": "Miami Ohio",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 92,
    "winner": "Curt Alder",
    "winner_school": "UCLA",
    "loser": "Steve Alexander",
    "loser_school": "Temple",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 93,
    "winner": "Russ Schneider",
    "winner_school": "Northwestern",
    "loser": "Marshall Gruver",
    "loser_school": "Shippensburg",
    "result": "Fall 1:30"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 94,
    "winner": "Duane Dobson",
    "winner_school": "Nebraska",
    "loser": "Bob Emerick",
    "loser_school": "Ball State",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 95,
    "winner": "Parker Sneed",
    "winner_school": "Oklahoma State",
    "loser": "John Finch",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 96,
    "winner": "Jim Clair",
    "winner_school": "Franklin and Marshall",
    "loser": "Bob Abraham",
    "loser_school": "Penn State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 97,
    "winner": "Wayne Wells",
    "winner_school": "Oklahoma",
    "loser": "Alex Roberts",
    "loser_school": "Georgia Tech",
    "result": "Fall 7:17"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 98,
    "winner": "Gary Neist",
    "winner_school": "Luther",
    "loser": "Charles Shepherd",
    "loser_school": "Utah",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 99,
    "winner": "Len Borchers",
    "winner_school": "Stanford",
    "loser": "Stan Dziedzic",
    "loser_school": "Indiana State",
    "result": "Fall 3:11"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 100,
    "winner": "Dave Martin",
    "winner_school": "Iowa State",
    "loser": "Richard Casey",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 101,
    "winner": "Gobel Kline",
    "winner_school": "Maryland",
    "loser": "John Mulada",
    "loser_school": "SUNY-Cortland",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 102,
    "winner": "Joe Gerst",
    "winner_school": "Bloomsburg",
    "loser": "Lonny Gallagher",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 103,
    "winner": "Jim Blacksmith",
    "winner_school": "Lock Haven",
    "loser": "Mark Hoffman",
    "loser_school": "Army",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 104,
    "winner": "John Kent",
    "winner_school": "Navy",
    "loser": "Tom Hochfelder",
    "loser_school": "Ithaca",
    "result": "Fall 6:09"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 105,
    "winner": "John Burt",
    "winner_school": "Ohio State",
    "loser": "Kim Snider",
    "loser_school": "Oregon State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 106,
    "winner": "Phil Henning",
    "winner_school": "Iowa",
    "loser": "Dan Rossi",
    "loser_school": "East Stroudsburg",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 211,
    "winner": "Howard Hall",
    "winner_school": "Brigham Young",
    "loser": "Curt Alder",
    "loser_school": "UCLA",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 212,
    "winner": "Russ Schneider",
    "winner_school": "Northwestern",
    "loser": "Duane Dobson",
    "loser_school": "Nebraska",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 213,
    "winner": "Parker Sneed",
    "winner_school": "Oklahoma State",
    "loser": "Jim Clair",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 214,
    "winner": "Wayne Wells",
    "winner_school": "Oklahoma",
    "loser": "Gary Neist",
    "loser_school": "Luther",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 215,
    "winner": "Len Borchers",
    "winner_school": "Stanford",
    "loser": "Dave Martin",
    "loser_school": "Iowa State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 216,
    "winner": "Gobel Kline",
    "winner_school": "Maryland",
    "loser": "Joe Gerst",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 217,
    "winner": "John Kent",
    "winner_school": "Navy",
    "loser": "Jim Blacksmith",
    "loser_school": "Lock Haven",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 218,
    "winner": "John Burt",
    "winner_school": "Ohio State",
    "loser": "Phil Henning",
    "loser_school": "Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 361,
    "winner": "Russ Schneider",
    "winner_school": "Northwestern",
    "loser": "Howard Hall",
    "loser_school": "Brigham Young",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 362,
    "winner": "Wayne Wells",
    "winner_school": "Oklahoma",
    "loser": "Parker Sneed",
    "loser_school": "Oklahoma State",
    "result": "Fall 6:11"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 363,
    "winner": "Gobel Kline",
    "winner_school": "Maryland",
    "loser": "Len Borchers",
    "loser_school": "Stanford",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 364,
    "winner": "John Kent",
    "winner_school": "Navy",
    "loser": "John Burt",
    "loser_school": "Ohio State",
    "result": "Dec 7-5"
  },
  {
    "round": "SemiFinals",
    "weight": "152",
    "bout": 471,
    "winner": "Wayne Wells",
    "winner_school": "Oklahoma",
    "loser": "Russ Schneider",
    "loser_school": "Northwestern",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "152",
    "bout": 472,
    "winner": "John Kent",
    "winner_school": "Navy",
    "loser": "Gobel Kline",
    "loser_school": "Maryland",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "5thPlace",
    "weight": "152",
    "bout": 536,
    "winner": "Parker Sneed",
    "winner_school": "Oklahoma State",
    "loser": "Jim Blacksmith",
    "loser_school": "Lock Haven",
    "result": "Dec 8-2"
  },
  {
    "round": "3rdPlace",
    "weight": "152",
    "bout": 546,
    "winner": "Russ Schneider",
    "winner_school": "Northwestern",
    "loser": "Gobel Kline",
    "loser_school": "Maryland",
    "result": "Dec 6-1"
  },
  {
    "round": "Finals",
    "weight": "152",
    "bout": 556,
    "winner": "Wayne Wells",
    "winner_school": "Oklahoma",
    "loser": "John Kent",
    "loser_school": "Navy",
    "result": "MD 14-4"
  },
  {
    "round": "RepConsP",
    "weight": "152",
    "bout": 1256,
    "winner": "Dave Berman",
    "winner_school": "Hofstra",
    "loser": "Tom Hochfelder",
    "loser_school": "Ithaca",
    "result": "Dec 8-4"
  },
  {
    "round": "RepConsA",
    "weight": "152",
    "bout": 271,
    "winner": "Alex Roberts",
    "winner_school": "Georgia Tech",
    "loser": "Gary Neist",
    "loser_school": "Luther",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsA",
    "weight": "152",
    "bout": 272,
    "winner": "Jim Blacksmith",
    "winner_school": "Lock Haven",
    "loser": "Dave Berman",
    "loser_school": "Hofstra",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsB",
    "weight": "152",
    "bout": 391,
    "winner": "Parker Sneed",
    "winner_school": "Oklahoma State",
    "loser": "Alex Roberts",
    "loser_school": "Georgia Tech",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "152",
    "bout": 392,
    "winner": "Jim Blacksmith",
    "winner_school": "Lock Haven",
    "loser": "John Burt",
    "loser_school": "Ohio State",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "152",
    "bout": 431,
    "winner": "Russ Schneider",
    "winner_school": "Northwestern",
    "loser": "Parker Sneed",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "152",
    "bout": 432,
    "winner": "Gobel Kline",
    "winner_school": "Maryland",
    "loser": "Jim Blacksmith",
    "loser_school": "Lock Haven",
    "result": "Dec 6-5"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 7,
    "winner": "Cleo McGlory",
    "winner_school": "Oklahoma",
    "loser": "Mike Nardotti",
    "loser_school": "Army",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 107,
    "winner": "Jack Bentz",
    "winner_school": "Lehigh",
    "loser": "George Hicks",
    "loser_school": "NC State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 108,
    "winner": "Jerry Stone",
    "winner_school": "Oklahoma State",
    "loser": "Jim Hodge",
    "loser_school": "Washington",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 109,
    "winner": "Bob Devore",
    "winner_school": "East Stroudsburg",
    "loser": "Richard Davis",
    "loser_school": "UCLA",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 110,
    "winner": "Jim Alexander",
    "winner_school": "Northern Colorado",
    "loser": "Bob Christianson",
    "loser_school": "Navy",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 111,
    "winner": "Fred Stehman",
    "winner_school": "Michigan",
    "loser": "Bill Osborn",
    "loser_school": "Brigham Young",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 112,
    "winner": "Joe Wiendl",
    "winner_school": "Wilkes",
    "loser": "Joel Haan",
    "loser_school": "Maryland",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 113,
    "winner": "Don Ekleberry",
    "winner_school": "Toledo",
    "loser": "Luther Blair",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 114,
    "winner": "Cleo McGlory",
    "winner_school": "Oklahoma",
    "loser": "Bob Hobson",
    "loser_school": "William & Mary",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 115,
    "winner": "Matt Kline",
    "winner_school": "Penn State",
    "loser": "Dave Sherman",
    "loser_school": "SUNY-Cortland",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 116,
    "winner": "Ray Wicks",
    "winner_school": "Winona State",
    "loser": "Pat Karslake",
    "loser_school": "Michigan State",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 117,
    "winner": "Jerry Chaplin",
    "winner_school": "Oregon State",
    "loser": "Robin Stebbins",
    "loser_school": "Wesleyan",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 118,
    "winner": "Jack Klingaman",
    "winner_school": "Lock Haven",
    "loser": "Gary Richards",
    "loser_school": "Kansas State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 119,
    "winner": "Reg Wicks",
    "winner_school": "Iowa State",
    "loser": "Dick Willoughby",
    "loser_school": "MIT",
    "result": "Fall 1:41"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 120,
    "winner": "Otto Zeman",
    "winner_school": "Northwestern",
    "loser": "Ken Biles",
    "loser_school": "West Chester",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 121,
    "winner": "Rich Mihal",
    "winner_school": "Iowa",
    "loser": "John Helter",
    "loser_school": "Shippensburg",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 122,
    "winner": "Dan Thurlow",
    "winner_school": "Colorado State",
    "loser": "Neal Skaar",
    "loser_school": "Luther",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 219,
    "winner": "Jerry Stone",
    "winner_school": "Oklahoma State",
    "loser": "Jack Bentz",
    "loser_school": "Lehigh",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 220,
    "winner": "Jim Alexander",
    "winner_school": "Northern Colorado",
    "loser": "Bob Devore",
    "loser_school": "East Stroudsburg",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 221,
    "winner": "Joe Wiendl",
    "winner_school": "Wilkes",
    "loser": "Fred Stehman",
    "loser_school": "Michigan",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 222,
    "winner": "Cleo McGlory",
    "winner_school": "Oklahoma",
    "loser": "Don Ekleberry",
    "loser_school": "Toledo",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 223,
    "winner": "Matt Kline",
    "winner_school": "Penn State",
    "loser": "Ray Wicks",
    "loser_school": "Winona State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 224,
    "winner": "Jerry Chaplin",
    "winner_school": "Oregon State",
    "loser": "Jack Klingaman",
    "loser_school": "Lock Haven",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 225,
    "winner": "Reg Wicks",
    "winner_school": "Iowa State",
    "loser": "Otto Zeman",
    "loser_school": "Northwestern",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 226,
    "winner": "Dan Thurlow",
    "winner_school": "Colorado State",
    "loser": "Rich Mihal",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 365,
    "winner": "Jim Alexander",
    "winner_school": "Northern Colorado",
    "loser": "Jerry Stone",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 366,
    "winner": "Cleo McGlory",
    "winner_school": "Oklahoma",
    "loser": "Joe Wiendl",
    "loser_school": "Wilkes",
    "result": "MD 21-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 367,
    "winner": "Matt Kline",
    "winner_school": "Penn State",
    "loser": "Jerry Chaplin",
    "loser_school": "Oregon State",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 368,
    "winner": "Reg Wicks",
    "winner_school": "Iowa State",
    "loser": "Dan Thurlow",
    "loser_school": "Colorado State",
    "result": "Dec 7-1"
  },
  {
    "round": "SemiFinals",
    "weight": "160",
    "bout": 473,
    "winner": "Cleo McGlory",
    "winner_school": "Oklahoma",
    "loser": "Jim Alexander",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-2"
  },
  {
    "round": "SemiFinals",
    "weight": "160",
    "bout": 474,
    "winner": "Reg Wicks",
    "winner_school": "Iowa State",
    "loser": "Matt Kline",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "160",
    "bout": 537,
    "winner": "Otto Zeman",
    "winner_school": "Northwestern",
    "loser": "Mike Nardotti",
    "loser_school": "Army",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "160",
    "bout": 547,
    "winner": "Jim Alexander",
    "winner_school": "Northern Colorado",
    "loser": "Matt Kline",
    "loser_school": "Penn State",
    "result": "Dec 11-8"
  },
  {
    "round": "Finals",
    "weight": "160",
    "bout": 557,
    "winner": "Reg Wicks",
    "winner_school": "Iowa State",
    "loser": "Cleo McGlory",
    "loser_school": "Oklahoma",
    "result": "Dec 7-5"
  },
  {
    "round": "RepConsP",
    "weight": "160",
    "bout": 257,
    "winner": "Mike Nardotti",
    "winner_school": "Army",
    "loser": "Bob Hobson",
    "loser_school": "William & Mary",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsA",
    "weight": "160",
    "bout": 273,
    "winner": "Mike Nardotti",
    "winner_school": "Army",
    "loser": "Don Ekleberry",
    "loser_school": "Toledo",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsA",
    "weight": "160",
    "bout": 274,
    "winner": "Otto Zeman",
    "winner_school": "Northwestern",
    "loser": "Dick Willoughby",
    "loser_school": "MIT",
    "result": "Fall 1:42"
  },
  {
    "round": "RepConsB",
    "weight": "160",
    "bout": 393,
    "winner": "Mike Nardotti",
    "winner_school": "Army",
    "loser": "Joe Wiendl",
    "loser_school": "Wilkes",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "RepConsB",
    "weight": "160",
    "bout": 394,
    "winner": "Otto Zeman",
    "winner_school": "Northwestern",
    "loser": "Dan Thurlow",
    "loser_school": "Colorado State",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsC",
    "weight": "160",
    "bout": 433,
    "winner": "Jim Alexander",
    "winner_school": "Northern Colorado",
    "loser": "Mike Nardotti",
    "loser_school": "Army",
    "result": "Fall 4:52"
  },
  {
    "round": "RepConsC",
    "weight": "160",
    "bout": 434,
    "winner": "Matt Kline",
    "winner_school": "Penn State",
    "loser": "Otto Zeman",
    "loser_school": "Northwestern",
    "result": "Dec 5-2"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 8,
    "winner": "Don Apodoca",
    "winner_school": "Adams State",
    "loser": "Rick Ortega",
    "loser_school": "New Mexico",
    "result": "MD 9-0"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1008,
    "winner": "Dick Heinzelman",
    "winner_school": "Wisconsin",
    "loser": "Scott Curzi",
    "loser_school": "William & Mary",
    "result": "MD 14-6"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 2008,
    "winner": "Gene Denisar",
    "winner_school": "Indiana",
    "loser": "Bob Funk",
    "loser_school": "Penn State",
    "result": "Fall 3:38"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 3008,
    "winner": "Bob Rust",
    "winner_school": "Syracuse",
    "loser": "Santo Ricotta",
    "loser_school": "Clarion",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 123,
    "winner": "Tom McEwan",
    "winner_school": "Yale",
    "loser": "Gary Hebenstreit",
    "loser_school": "Air Force",
    "result": "Fall 6:15"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 124,
    "winner": "Seth Norton",
    "winner_school": "Northwestern",
    "loser": "Al Nicusanti",
    "loser_school": "Lehigh",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 125,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "John McNitt",
    "loser_school": "South Dakota State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 126,
    "winner": "Jim Vandehey",
    "winner_school": "Oregon State",
    "loser": "Bob Rust",
    "loser_school": "Syracuse",
    "result": "M FOR"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 127,
    "winner": "Pete Cornell",
    "winner_school": "Michigan",
    "loser": "Ben Harry",
    "loser_school": "NC State",
    "result": "Fall 7:22"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 128,
    "winner": "Gene Denisar",
    "winner_school": "Indiana",
    "loser": "Bill Elder",
    "loser_school": "East Stroudsburg",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 129,
    "winner": "Mike Gallego",
    "winner_school": "Fresno State",
    "loser": "Barry Ritchey",
    "loser_school": "Shippensburg",
    "result": "Fall 4:47"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 130,
    "winner": "Steve Roshek",
    "winner_school": "Utah",
    "loser": "Don Ryland",
    "loser_school": "Minnesota State-Mankato",
    "result": "MD 18-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 131,
    "winner": "Dick Heinzelman",
    "winner_school": "Wisconsin",
    "loser": "Dale French",
    "loser_school": "Northern Colorado",
    "result": "Fall 3:24"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 132,
    "winner": "Lamoin Merkley",
    "winner_school": "Central Washington",
    "loser": "Rod Ott",
    "loser_school": "Michigan State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 133,
    "winner": "Bob McDaniel",
    "winner_school": "Oklahoma",
    "loser": "George Ross",
    "loser_school": "Bowling Green",
    "result": "MD 17-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 134,
    "winner": "Ben Cooper",
    "winner_school": "SIU-Carbondale",
    "loser": "Joe O'Donnell",
    "loser_school": "Tennessee",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 135,
    "winner": "Russ Sill",
    "winner_school": "Iowa",
    "loser": "John Woods",
    "loser_school": "Cal Poly",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 136,
    "winner": "Ray Wallace",
    "winner_school": "Washington",
    "loser": "Walt Price",
    "loser_school": "MIT",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 137,
    "winner": "Bob Ahrens",
    "winner_school": "Navy",
    "loser": "John Dinger",
    "loser_school": "Army",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 138,
    "winner": "Bob Drebenstedt",
    "winner_school": "Oklahoma State",
    "loser": "Don Apodoca",
    "loser_school": "Adams State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 227,
    "winner": "Seth Norton",
    "winner_school": "Northwestern",
    "loser": "Tom McEwan",
    "loser_school": "Yale",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 228,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Jim Vandehey",
    "loser_school": "Oregon State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 229,
    "winner": "Pete Cornell",
    "winner_school": "Michigan",
    "loser": "Gene Denisar",
    "loser_school": "Indiana",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 230,
    "winner": "Mike Gallego",
    "winner_school": "Fresno State",
    "loser": "Steve Roshek",
    "loser_school": "Utah",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 231,
    "winner": "Lamoin Merkley",
    "winner_school": "Central Washington",
    "loser": "Dick Heinzelman",
    "loser_school": "Wisconsin",
    "result": "Fall 5:24"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 232,
    "winner": "Bob McDaniel",
    "winner_school": "Oklahoma",
    "loser": "Ben Cooper",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 233,
    "winner": "Ray Wallace",
    "winner_school": "Washington",
    "loser": "Russ Sill",
    "loser_school": "Iowa",
    "result": "Fall 6:04"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 234,
    "winner": "Bob Drebenstedt",
    "winner_school": "Oklahoma State",
    "loser": "Bob Ahrens",
    "loser_school": "Navy",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 369,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Seth Norton",
    "loser_school": "Northwestern",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 370,
    "winner": "Mike Gallego",
    "winner_school": "Fresno State",
    "loser": "Pete Cornell",
    "loser_school": "Michigan",
    "result": "Fall 4:59"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 371,
    "winner": "Lamoin Merkley",
    "winner_school": "Central Washington",
    "loser": "Bob McDaniel",
    "loser_school": "Oklahoma",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 372,
    "winner": "Bob Drebenstedt",
    "winner_school": "Oklahoma State",
    "loser": "Ray Wallace",
    "loser_school": "Washington",
    "result": "Dec 6-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 475,
    "winner": "Mike Gallego",
    "winner_school": "Fresno State",
    "loser": "Jason Smith",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 476,
    "winner": "Lamoin Merkley",
    "winner_school": "Central Washington",
    "loser": "Bob Drebenstedt",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 538,
    "winner": "Pete Cornell",
    "winner_school": "Michigan",
    "loser": "Rod Ott",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 548,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Bob Drebenstedt",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 558,
    "winner": "Mike Gallego",
    "winner_school": "Fresno State",
    "loser": "Lamoin Merkley",
    "loser_school": "Central Washington",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 275,
    "winner": "Steve Roshek",
    "winner_school": "Utah",
    "loser": "Barry Ritchey",
    "loser_school": "Shippensburg",
    "result": "Fall 5:22"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 276,
    "winner": "Rod Ott",
    "winner_school": "Michigan State",
    "loser": "Dick Heinzelman",
    "loser_school": "Wisconsin",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 395,
    "winner": "Pete Cornell",
    "winner_school": "Michigan",
    "loser": "Steve Roshek",
    "loser_school": "Utah",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 396,
    "winner": "Rod Ott",
    "winner_school": "Michigan State",
    "loser": "Bob McDaniel",
    "loser_school": "Oklahoma",
    "result": "Dec 1-0"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 435,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Pete Cornell",
    "loser_school": "Michigan",
    "result": "Fall 4:55"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 436,
    "winner": "Bob Drebenstedt",
    "winner_school": "Oklahoma State",
    "loser": "Rod Ott",
    "loser_school": "Michigan State",
    "result": "Dec 2-0"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 9,
    "winner": "Dick Thompson",
    "winner_school": "Arizona State",
    "loser": "Lee Castner",
    "loser_school": "Syracuse",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1009,
    "winner": "Verlyn Strellner",
    "winner_school": "Iowa",
    "loser": "Bill Waterman",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 139,
    "winner": "Ben Welch",
    "winner_school": "Navy",
    "loser": "Charles Locke",
    "loser_school": "Washington",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 140,
    "winner": "Bob Justice",
    "winner_school": "Colorado",
    "loser": "Walt Podgurski",
    "loser_school": "Miami Ohio",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 141,
    "winner": "Jim Harter",
    "winner_school": "Army",
    "loser": "Marc Beem",
    "loser_school": "Princeton",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 142,
    "winner": "Kerry Keith",
    "winner_school": "Davidson",
    "loser": "Phil Liller",
    "loser_school": "Penn State",
    "result": "Fall 1:43"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 143,
    "winner": "Dave Labosky",
    "winner_school": "Penn",
    "loser": "Jim Morthaler",
    "loser_school": "Coast Guard",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 144,
    "winner": "Al Bulow",
    "winner_school": "SIU-Carbondale",
    "loser": "Tom Blankenship",
    "loser_school": "Indiana",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 145,
    "winner": "Fred Fozzard",
    "winner_school": "Oklahoma State",
    "loser": "Tom Kruse",
    "loser_school": "Ohio State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 146,
    "winner": "Verlyn Strellner",
    "winner_school": "Iowa",
    "loser": "Paul Allen",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 147,
    "winner": "Joe Green",
    "winner_school": "Bowling Green",
    "loser": "Dick Thompson",
    "loser_school": "Arizona State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 148,
    "winner": "Charles Shivers",
    "winner_school": "Oklahoma",
    "loser": "Dave Jones",
    "loser_school": "Bloomsburg",
    "result": "Fall 5:52"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 149,
    "winner": "Mike Bradley",
    "winner_school": "Michigan State",
    "loser": "Rich Whittington",
    "loser_school": "UCLA",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 150,
    "winner": "Ken Bos",
    "winner_school": "Cal Poly",
    "loser": "Harry Gaylor",
    "loser_school": "Nebraska",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 151,
    "winner": "Harry Surplus",
    "winner_school": "Washington State",
    "loser": "Roy Resavage",
    "loser_school": "Temple",
    "result": "Fall 6:48"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 152,
    "winner": "Dick Minekime",
    "winner_school": "Cornell",
    "loser": "Fred Priester",
    "loser_school": "North Carolina",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 153,
    "winner": "Larry Amundson",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Bill Pauss",
    "loser_school": "Northwestern",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 154,
    "winner": "Alan Detwiler",
    "winner_school": "East Stroudsburg",
    "loser": "Bob Carlson",
    "loser_school": "Utah State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 235,
    "winner": "Bob Justice",
    "winner_school": "Colorado",
    "loser": "Ben Welch",
    "loser_school": "Navy",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 236,
    "winner": "Jim Harter",
    "winner_school": "Army",
    "loser": "Kerry Keith",
    "loser_school": "Davidson",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 237,
    "winner": "Al Bulow",
    "winner_school": "SIU-Carbondale",
    "loser": "Dave Labosky",
    "loser_school": "Penn",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 238,
    "winner": "Fred Fozzard",
    "winner_school": "Oklahoma State",
    "loser": "Verlyn Strellner",
    "loser_school": "Iowa",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 239,
    "winner": "Charles Shivers",
    "winner_school": "Oklahoma",
    "loser": "Joe Green",
    "loser_school": "Bowling Green",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 240,
    "winner": "Mike Bradley",
    "winner_school": "Michigan State",
    "loser": "Ken Bos",
    "loser_school": "Cal Poly",
    "result": "Dec 14-10"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 241,
    "winner": "Dick Minekime",
    "winner_school": "Cornell",
    "loser": "Harry Surplus",
    "loser_school": "Washington State",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 242,
    "winner": "Larry Amundson",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Alan Detwiler",
    "loser_school": "East Stroudsburg",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 373,
    "winner": "Bob Justice",
    "winner_school": "Colorado",
    "loser": "Jim Harter",
    "loser_school": "Army",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 374,
    "winner": "Fred Fozzard",
    "winner_school": "Oklahoma State",
    "loser": "Al Bulow",
    "loser_school": "SIU-Carbondale",
    "result": "Fall 5:35"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 375,
    "winner": "Charles Shivers",
    "winner_school": "Oklahoma",
    "loser": "Mike Bradley",
    "loser_school": "Michigan State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 376,
    "winner": "Larry Amundson",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Dick Minekime",
    "loser_school": "Cornell",
    "result": "MD 11-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 477,
    "winner": "Bob Justice",
    "winner_school": "Colorado",
    "loser": "Fred Fozzard",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 478,
    "winner": "Larry Amundson",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Charles Shivers",
    "loser_school": "Oklahoma",
    "result": "Dec 5-0"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 539,
    "winner": "Dick Minekime",
    "winner_school": "Cornell",
    "loser": "Walt Podgurski",
    "loser_school": "Miami Ohio",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 549,
    "winner": "Fred Fozzard",
    "winner_school": "Oklahoma State",
    "loser": "Charles Shivers",
    "loser_school": "Oklahoma",
    "result": "Fall 4:50"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 559,
    "winner": "Bob Justice",
    "winner_school": "Colorado",
    "loser": "Larry Amundson",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 277,
    "winner": "Walt Podgurski",
    "winner_school": "Miami Ohio",
    "loser": "Ben Welch",
    "loser_school": "Navy",
    "result": "Dec 8-3"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 278,
    "winner": "Bill Pauss",
    "winner_school": "Northwestern",
    "loser": "Alan Detwiler",
    "loser_school": "East Stroudsburg",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 397,
    "winner": "Walt Podgurski",
    "winner_school": "Miami Ohio",
    "loser": "Jim Harter",
    "loser_school": "Army",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 398,
    "winner": "Dick Minekime",
    "winner_school": "Cornell",
    "loser": "Bill Pauss",
    "loser_school": "Northwestern",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 437,
    "winner": "Fred Fozzard",
    "winner_school": "Oklahoma State",
    "loser": "Walt Podgurski",
    "loser_school": "Miami Ohio",
    "result": "Fall 3:26"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 438,
    "winner": "Charles Shivers",
    "winner_school": "Oklahoma",
    "loser": "Dick Minekime",
    "loser_school": "Cornell",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 155,
    "winner": "Tom Kline",
    "winner_school": "Cal Poly",
    "loser": "Terry Faulk",
    "loser_school": "Miami Ohio",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 156,
    "winner": "Herman Pettigrew",
    "winner_school": "Ashland",
    "loser": "John Salisbury",
    "loser_school": "California-Berkeley",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 157,
    "winner": "John Schneider",
    "winner_school": "Michigan State",
    "loser": "John Wagoner",
    "loser_school": "Shippensburg",
    "result": "Fall 1:54"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 158,
    "winner": "Jim Duschen",
    "winner_school": "Iowa State",
    "loser": "Julian McPhillips",
    "loser_school": "Princeton",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 159,
    "winner": "Rich Lorenzo",
    "winner_school": "Penn State",
    "loser": "Russ Hellickson",
    "loser_school": "Wisconsin",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 160,
    "winner": "Peter Naff",
    "winner_school": "Oklahoma State",
    "loser": "Aaron Malinsky",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 161,
    "winner": "Gene Detwiler",
    "winner_school": "Colgate",
    "loser": "Dan Kraft",
    "loser_school": "Northwestern",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 162,
    "winner": "Terry Hoover",
    "winner_school": "Pittsburgh",
    "loser": "Bill Henderson",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 163,
    "winner": "Nick Carollo",
    "winner_school": "Adams State",
    "loser": "Bruce Landrey",
    "loser_school": "Oklahoma",
    "result": "Fall 3:24"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 164,
    "winner": "Gary Seymour",
    "winner_school": "Arizona State",
    "loser": "Charles Amato",
    "loser_school": "NC State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 165,
    "winner": "Tim Wilmarth",
    "winner_school": "Oregon",
    "loser": "Chris Feder",
    "loser_school": "C.W. Post",
    "result": "Fall 7:53"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 166,
    "winner": "Bob Metz",
    "winner_school": "Lock Haven",
    "loser": "Jack Thrasher",
    "loser_school": "Air Force",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 167,
    "winner": "Terry Crenshaw",
    "winner_school": "Stanford",
    "loser": "Ron Moen",
    "loser_school": "Winona State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 168,
    "winner": "Marc Baretz",
    "winner_school": "Temple",
    "loser": "John Newmeister",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 169,
    "winner": "Gary Cook",
    "winner_school": "East Stroudsburg",
    "loser": "Terry Allen",
    "loser_school": "Navy",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 170,
    "winner": "Gene Libal",
    "winner_school": "Nebraska",
    "loser": "Monty McDaniel",
    "loser_school": "Indiana",
    "result": "Fall 7:11"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 243,
    "winner": "Tom Kline",
    "winner_school": "Cal Poly",
    "loser": "Herman Pettigrew",
    "loser_school": "Ashland",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 244,
    "winner": "John Schneider",
    "winner_school": "Michigan State",
    "loser": "Jim Duschen",
    "loser_school": "Iowa State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 245,
    "winner": "Rich Lorenzo",
    "winner_school": "Penn State",
    "loser": "Peter Naff",
    "loser_school": "Oklahoma State",
    "result": "Fall 5:03"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 246,
    "winner": "Gene Detwiler",
    "winner_school": "Colgate",
    "loser": "Terry Hoover",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 247,
    "winner": "Nick Carollo",
    "winner_school": "Adams State",
    "loser": "Gary Seymour",
    "loser_school": "Arizona State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 248,
    "winner": "Tim Wilmarth",
    "winner_school": "Oregon",
    "loser": "Bob Metz",
    "loser_school": "Lock Haven",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 249,
    "winner": "Terry Crenshaw",
    "winner_school": "Stanford",
    "loser": "Marc Baretz",
    "loser_school": "Temple",
    "result": "Fall 4:31"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 250,
    "winner": "Gary Cook",
    "winner_school": "East Stroudsburg",
    "loser": "Gene Libal",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 377,
    "winner": "Tom Kline",
    "winner_school": "Cal Poly",
    "loser": "John Schneider",
    "loser_school": "Michigan State",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 378,
    "winner": "Rich Lorenzo",
    "winner_school": "Penn State",
    "loser": "Gene Detwiler",
    "loser_school": "Colgate",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 379,
    "winner": "Nick Carollo",
    "winner_school": "Adams State",
    "loser": "Tim Wilmarth",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 380,
    "winner": "Gary Cook",
    "winner_school": "East Stroudsburg",
    "loser": "Terry Crenshaw",
    "loser_school": "Stanford",
    "result": "MD 8-0"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 479,
    "winner": "Tom Kline",
    "winner_school": "Cal Poly",
    "loser": "Rich Lorenzo",
    "loser_school": "Penn State",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 480,
    "winner": "Nick Carollo",
    "winner_school": "Adams State",
    "loser": "Gary Cook",
    "loser_school": "East Stroudsburg",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "5thPlace",
    "weight": "191",
    "bout": 540,
    "winner": "John Schneider",
    "winner_school": "Michigan State",
    "loser": "Gary Seymour",
    "loser_school": "Arizona State",
    "result": "Dec 2-1"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 550,
    "winner": "Gary Cook",
    "winner_school": "East Stroudsburg",
    "loser": "Rich Lorenzo",
    "loser_school": "Penn State",
    "result": "Dec 8-3"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 560,
    "winner": "Nick Carollo",
    "winner_school": "Adams State",
    "loser": "Tom Kline",
    "loser_school": "Cal Poly",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "RepConsA",
    "weight": "191",
    "bout": 279,
    "winner": "Herman Pettigrew",
    "winner_school": "Ashland",
    "loser": "Terry Faulk",
    "loser_school": "Miami Ohio",
    "result": "Dec 10-8"
  },
  {
    "round": "RepConsA",
    "weight": "191",
    "bout": 280,
    "winner": "Gary Seymour",
    "winner_school": "Arizona State",
    "loser": "Bruce Landrey",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 399,
    "winner": "John Schneider",
    "winner_school": "Michigan State",
    "loser": "Herman Pettigrew",
    "loser_school": "Ashland",
    "result": "Dec 10-4"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 400,
    "winner": "Gary Seymour",
    "winner_school": "Arizona State",
    "loser": "Tim Wilmarth",
    "loser_school": "Oregon",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 439,
    "winner": "Rich Lorenzo",
    "winner_school": "Penn State",
    "loser": "John Schneider",
    "loser_school": "Michigan State",
    "result": "MD 13-3"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 440,
    "winner": "Gary Cook",
    "winner_school": "East Stroudsburg",
    "loser": "Gary Seymour",
    "loser_school": "Arizona State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 172,
    "winner": "Tom Beeson",
    "winner_school": "Western State",
    "loser": "Bill Galler",
    "loser_school": "Northwestern",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 173,
    "winner": "Dick Seloover",
    "winner_school": "SIU-Carbondale",
    "loser": "Lowell Bryan",
    "loser_school": "Davidson",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 174,
    "winner": "Fred Andree",
    "winner_school": "MIT",
    "loser": "Kent Osboe",
    "loser_school": "Northern Iowa",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 176,
    "winner": "Tom Walter",
    "winner_school": "Kent State",
    "loser": "Mark Kane",
    "loser_school": "Navy",
    "result": "Fall 5:40"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 177,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Joe Kutniewski",
    "loser_school": "Fairleigh Dickinson",
    "result": "Fall 1:04"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 178,
    "winner": "Marty Weikart",
    "winner_school": "Delaware",
    "loser": "Tom Kusleika",
    "loser_school": "Adams State",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 179,
    "winner": "Dale Stearns",
    "winner_school": "Iowa",
    "loser": "Roger Brown",
    "loser_school": "New Mexico",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 180,
    "winner": "Paul Elzey",
    "winner_school": "Toledo",
    "loser": "John Ward",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 181,
    "winner": "Jeff Smith",
    "winner_school": "Michigan State",
    "loser": "Ralph Sonntag",
    "loser_school": "Maryland",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 183,
    "winner": "Henry Muller",
    "winner_school": "Oregon",
    "loser": "John Bierie",
    "loser_school": "Air Force",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 185,
    "winner": "Dick Schumacher",
    "winner_school": "East Stroudsburg",
    "loser": "Tony Truitt",
    "loser_school": "Pittsburgh",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 251,
    "winner": "Mike Kelly",
    "winner_school": "Indiana State",
    "loser": "Tom Beeson",
    "loser_school": "Western State",
    "result": "MD 17-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 252,
    "winner": "Fred Andree",
    "winner_school": "MIT",
    "loser": "Dick Seloover",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 253,
    "winner": "Al Borkowski",
    "winner_school": "Northwest Missouri",
    "loser": "Tom Walter",
    "loser_school": "Kent State",
    "result": "Fall 6:07"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 254,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Marty Weikart",
    "loser_school": "Delaware",
    "result": "Fall 2:49"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 255,
    "winner": "Paul Elzey",
    "winner_school": "Toledo",
    "loser": "Dale Stearns",
    "loser_school": "Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 256,
    "winner": "Jeff Smith",
    "winner_school": "Michigan State",
    "loser": "Don Holtry",
    "loser_school": "Utah State",
    "result": "Fall 4:45"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 257,
    "winner": "Dave Porter",
    "winner_school": "Michigan",
    "loser": "Henry Muller",
    "loser_school": "Oregon",
    "result": "Fall 3:57"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 258,
    "winner": "Dick Schumacher",
    "winner_school": "East Stroudsburg",
    "loser": "Oliver Kenen",
    "loser_school": "Princeton",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 381,
    "winner": "Fred Andree",
    "winner_school": "MIT",
    "loser": "Mike Kelly",
    "loser_school": "Indiana State",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 382,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Al Borkowski",
    "loser_school": "Northwest Missouri",
    "result": "MD 13-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 383,
    "winner": "Jeff Smith",
    "winner_school": "Michigan State",
    "loser": "Paul Elzey",
    "loser_school": "Toledo",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 384,
    "winner": "Dave Porter",
    "winner_school": "Michigan",
    "loser": "Dick Schumacher",
    "loser_school": "East Stroudsburg",
    "result": "Fall 4:29"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 481,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Fred Andree",
    "loser_school": "MIT",
    "result": "Fall 2:45"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 482,
    "winner": "Dave Porter",
    "winner_school": "Michigan",
    "loser": "Jeff Smith",
    "loser_school": "Michigan State",
    "result": "Dec 7-1"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 541,
    "winner": "Dick Schumacher",
    "winner_school": "East Stroudsburg",
    "loser": "Al Borkowski",
    "loser_school": "Northwest Missouri",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 551,
    "winner": "Jeff Smith",
    "winner_school": "Michigan State",
    "loser": "Fred Andree",
    "loser_school": "MIT",
    "result": "Dec 4-0"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 561,
    "winner": "Dave Porter",
    "winner_school": "Michigan",
    "loser": "Jess Lewis",
    "loser_school": "Oregon State",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsA",
    "weight": "UNL",
    "bout": 281,
    "winner": "Marty Weikart",
    "winner_school": "Delaware",
    "loser": "Joe Kutniewski",
    "loser_school": "Fairleigh Dickinson",
    "result": "MD 11-2"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 401,
    "winner": "Al Borkowski",
    "winner_school": "Northwest Missouri",
    "loser": "Marty Weikart",
    "loser_school": "Delaware",
    "result": "Fall 1:49"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 402,
    "winner": "Dick Schumacher",
    "winner_school": "East Stroudsburg",
    "loser": "Henry Muller",
    "loser_school": "Oregon",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 441,
    "winner": "Fred Andree",
    "winner_school": "MIT",
    "loser": "Al Borkowski",
    "loser_school": "Northwest Missouri",
    "result": "Dec 9-5"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 442,
    "winner": "Jeff Smith",
    "winner_school": "Michigan State",
    "loser": "Dick Schumacher",
    "loser_school": "East Stroudsburg",
    "result": "MD 8-0"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
