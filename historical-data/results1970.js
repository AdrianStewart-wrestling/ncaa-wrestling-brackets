// 1970 NCAA Division I Wrestling Championships (3/26/1970 to 3/28/1970 at Northwestern). Weight classes 118-275. Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1970 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1970-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Joe Orta",
    "winner_school": "Nebraska",
    "loser": "Dave Kopolow",
    "loser_school": "Stanford",
    "result": "Dec 8-6"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1001,
    "winner": "Frank Romano",
    "winner_school": "Ohio State",
    "loser": "Dick Lowenstine",
    "loser_school": "Eastern Kentucky",
    "result": "Dec 10-4"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 2001,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Dave Weber",
    "loser_school": "Penn State",
    "result": "Dec 7-2"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 3001,
    "winner": "Mike Cachero",
    "winner_school": "Oklahoma",
    "loser": "Don Fay",
    "loser_school": "Lock Haven",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 4001,
    "winner": "Jim Fiore",
    "winner_school": "Temple",
    "loser": "Stan Diamond",
    "loser_school": "Indiana State",
    "result": "MD 13-5"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 5001,
    "winner": "Jerry Hoddy",
    "winner_school": "Michigan",
    "loser": "John Smith",
    "loser_school": "Ball State",
    "result": "Dec 9-3"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 6001,
    "winner": "Dan Sherman",
    "winner_school": "Iowa",
    "loser": "George Trygg",
    "loser_school": "Louisiana State",
    "result": "Fall 7:11"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 7001,
    "winner": "Kirt Donaldson",
    "winner_school": "Air Force",
    "loser": "Lou Curra",
    "loser_school": "Old Dominion",
    "result": "Fall 4:28"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Ed Brown",
    "winner_school": "Buffalo",
    "loser": "Gordon Yamamoto",
    "loser_school": "California-Berkeley",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Greg Schmidt",
    "winner_school": "South Dakota State",
    "loser": "Steve Lampe",
    "loser_school": "Iowa State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Kirt Donaldson",
    "winner_school": "Air Force",
    "loser": "Mark Massery",
    "loser_school": "Northwestern",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Greg Johnson",
    "winner_school": "Michigan State",
    "loser": "Joe Orta",
    "loser_school": "Nebraska",
    "result": "MD 17-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Mike Downer",
    "winner_school": "Washington",
    "loser": "Tom Schuler",
    "loser_school": "Navy",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Ron Oglesby",
    "winner_school": "Winona State",
    "loser": "Dave Reynolds",
    "loser_school": "Massachusetts",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Larry Baltezore",
    "loser_school": "Army",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Dan Sherman",
    "winner_school": "Iowa",
    "loser": "Gil Keith",
    "loser_school": "Brigham Young",
    "result": "MD 17-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Ray Stapp",
    "winner_school": "Oklahoma State",
    "loser": "Frank Romano",
    "loser_school": "Ohio State",
    "result": "Fall 4:55"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Jim Fiore",
    "winner_school": "Temple",
    "loser": "Joe Zychowicz",
    "loser_school": "Ohio",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Mike Cachero",
    "winner_school": "Oklahoma",
    "loser": "Chuck Rossetti",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "John Meikle",
    "winner_school": "UCLA",
    "loser": "Glen Rievley",
    "loser_school": "Tennessee",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Jerry Hoddy",
    "winner_school": "Michigan",
    "loser": "Don Williams",
    "loser_school": "Drake",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Sam Arishita",
    "winner_school": "Utah",
    "loser": "Kim Hatcher",
    "loser_school": "Virginia",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Dale Brumit",
    "winner_school": "Arizona",
    "loser": "Terry Hall",
    "loser_school": "Cal Poly",
    "result": "MD 18-8"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Andy Matviak",
    "winner_school": "Wilkes",
    "loser": "Dave Kalams",
    "loser_school": "Oregon State",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Greg Schmidt",
    "winner_school": "South Dakota State",
    "loser": "Ed Brown",
    "loser_school": "Buffalo",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Greg Johnson",
    "winner_school": "Michigan State",
    "loser": "Kirt Donaldson",
    "loser_school": "Air Force",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Ron Oglesby",
    "winner_school": "Winona State",
    "loser": "Mike Downer",
    "loser_school": "Washington",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Dan Sherman",
    "loser_school": "Iowa",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Ray Stapp",
    "winner_school": "Oklahoma State",
    "loser": "Jim Fiore",
    "loser_school": "Temple",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Mike Cachero",
    "winner_school": "Oklahoma",
    "loser": "John Meikle",
    "loser_school": "UCLA",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Jerry Hoddy",
    "winner_school": "Michigan",
    "loser": "Sam Arishita",
    "loser_school": "Utah",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Dale Brumit",
    "winner_school": "Arizona",
    "loser": "Andy Matviak",
    "loser_school": "Wilkes",
    "result": "Dec 16-10"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Greg Johnson",
    "winner_school": "Michigan State",
    "loser": "Greg Schmidt",
    "loser_school": "South Dakota State",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Ron Oglesby",
    "loser_school": "Winona State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Ray Stapp",
    "winner_school": "Oklahoma State",
    "loser": "Mike Cachero",
    "loser_school": "Oklahoma",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Jerry Hoddy",
    "winner_school": "Michigan",
    "loser": "Dale Brumit",
    "loser_school": "Arizona",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Greg Johnson",
    "winner_school": "Michigan State",
    "loser": "John Miller",
    "loser_school": "Oregon",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Ray Stapp",
    "winner_school": "Oklahoma State",
    "loser": "Jerry Hoddy",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Greg Schmidt",
    "winner_school": "South Dakota State",
    "loser": "Jerry Hoddy",
    "loser_school": "Michigan",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Mike Cachero",
    "winner_school": "Oklahoma",
    "loser": "John Miller",
    "loser_school": "Oregon",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Greg Johnson",
    "winner_school": "Michigan State",
    "loser": "Ray Stapp",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsA",
    "weight": "118",
    "bout": 261,
    "winner": "Kirt Donaldson",
    "winner_school": "Air Force",
    "loser": "Joe Orta",
    "loser_school": "Nebraska",
    "result": "Fall 4:42"
  },
  {
    "round": "RepConsA",
    "weight": "118",
    "bout": 262,
    "winner": "Frank Romano",
    "winner_school": "Ohio State",
    "loser": "Jim Fiore",
    "loser_school": "Temple",
    "result": "Dec 9-3"
  },
  {
    "round": "RepConsB",
    "weight": "118",
    "bout": 381,
    "winner": "Greg Schmidt",
    "winner_school": "South Dakota State",
    "loser": "Kirt Donaldson",
    "loser_school": "Air Force",
    "result": "Dec 7-1"
  },
  {
    "round": "RepConsB",
    "weight": "118",
    "bout": 382,
    "winner": "Mike Cachero",
    "winner_school": "Oklahoma",
    "loser": "Frank Romano",
    "loser_school": "Ohio State",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "118",
    "bout": 421,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Greg Schmidt",
    "loser_school": "South Dakota State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "118",
    "bout": 422,
    "winner": "Mike Cachero",
    "winner_school": "Oklahoma",
    "loser": "Jerry Hoddy",
    "loser_school": "Michigan",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Mike Tello",
    "winner_school": "Northern Michigan",
    "loser": "Ron Webber",
    "loser_school": "Northern Illinois",
    "result": "Dec 2-1"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "Ed Maze",
    "winner_school": "Texas-El Paso",
    "loser": "Rich Pinkerman",
    "loser_school": "Nebraska",
    "result": "Fall 4:01"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2002,
    "winner": "Alan Maestas",
    "winner_school": "Kansas State",
    "loser": "Glenn Anderson",
    "loser_school": "Cal Poly",
    "result": "Fall 7:59"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 3002,
    "winner": "Jerry Corwin",
    "winner_school": "Portland State",
    "loser": "Bob Mason",
    "loser_school": "Ohio",
    "result": "MD 15-5"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 4002,
    "winner": "John Marfia",
    "winner_school": "Wilkes",
    "loser": "Cesar Vasquez",
    "loser_school": "California-Berkeley",
    "result": "Fall 4:48"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 5002,
    "winner": "Tim Cech",
    "winner_school": "Michigan",
    "loser": "Ken Donaldson",
    "loser_school": "Air Force",
    "result": "Dec 11-10"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 6002,
    "winner": "Tom Abercrombie",
    "winner_school": "Oklahoma",
    "loser": "Shane Foley",
    "loser_school": "Lock Haven",
    "result": "Dec 9-6"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 7002,
    "winner": "Chuck Chambers",
    "winner_school": "Brigham Young",
    "loser": "Dave Oland",
    "loser_school": "Winona State",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 8002,
    "winner": "Lew Mason",
    "winner_school": "Navy",
    "loser": "Dave Barrett",
    "loser_school": "Missouri",
    "result": "MD 9-0"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 9002,
    "winner": "Dwayne Keller",
    "winner_school": "Oklahoma State",
    "loser": "Mike Milkovich",
    "loser_school": "Kent State",
    "result": "Fall 6:54"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Roger Weigel",
    "winner_school": "Oregon State",
    "loser": "Fred Wenger",
    "loser_school": "SIU-Carbondale",
    "result": "Fall 6:56"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Howard Kingry",
    "winner_school": "Northwestern",
    "loser": "Stew Pruzansky",
    "loser_school": "Fairleigh Dickinson",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Tom Bentz",
    "winner_school": "Iowa",
    "loser": "Tom Abercrombie",
    "loser_school": "Oklahoma",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Bill Krum",
    "winner_school": "Iowa State",
    "loser": "Mike Tello",
    "loser_school": "Northern Michigan",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Reynaldo Contreras",
    "winner_school": "Fresno State",
    "loser": "Floyd Johnson",
    "loser_school": "Colorado State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "John Marfia",
    "winner_school": "Wilkes",
    "loser": "Charles O'Boyle",
    "loser_school": "Louisiana State",
    "result": "Fall 3:17"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Dale Murdock",
    "winner_school": "Clarion",
    "loser": "Chuck Chambers",
    "loser_school": "Brigham Young",
    "result": "Fall 7:38"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Dwayne Keller",
    "winner_school": "Oklahoma State",
    "loser": "Mike Johnson",
    "loser_school": "Colorado",
    "result": "Fall 6:40"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Randy Berg",
    "winner_school": "Washington",
    "loser": "Lon Hicks",
    "loser_school": "Michigan State",
    "result": "Fall 4:47"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Ed Maze",
    "winner_school": "Texas-El Paso",
    "loser": "Gary Christianson",
    "loser_school": "Drake",
    "result": "Fall 1:33"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Tim Cech",
    "winner_school": "Michigan",
    "loser": "Jason Schar",
    "loser_school": "Oregon",
    "result": "Fall 9:47 SV"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Rich Meyer",
    "winner_school": "Lehigh",
    "loser": "Ron Cruys",
    "loser_school": "West Chester",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Lew Mason",
    "winner_school": "Navy",
    "loser": "Jim Adams",
    "loser_school": "Temple",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Jerry Corwin",
    "winner_school": "Portland State",
    "loser": "Rick Poulson",
    "loser_school": "Marquette",
    "result": "Dec 6-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Randy Payne",
    "winner_school": "Pittsburgh",
    "loser": "Alan Maestas",
    "loser_school": "Kansas State",
    "result": "Fall 7:58"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Larry Wagner",
    "winner_school": "Northern Colorado",
    "loser": "Geoff Gray",
    "loser_school": "Indiana State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Roger Weigel",
    "winner_school": "Oregon State",
    "loser": "Howard Kingry",
    "loser_school": "Northwestern",
    "result": "Fall 4:01"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Bill Krum",
    "winner_school": "Iowa State",
    "loser": "Tom Bentz",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "John Marfia",
    "winner_school": "Wilkes",
    "loser": "Reynaldo Contreras",
    "loser_school": "Fresno State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Dwayne Keller",
    "winner_school": "Oklahoma State",
    "loser": "Dale Murdock",
    "loser_school": "Clarion",
    "result": "MD 21-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Ed Maze",
    "winner_school": "Texas-El Paso",
    "loser": "Randy Berg",
    "loser_school": "Washington",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Rich Meyer",
    "winner_school": "Lehigh",
    "loser": "Tim Cech",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Lew Mason",
    "winner_school": "Navy",
    "loser": "Jerry Corwin",
    "loser_school": "Portland State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Randy Payne",
    "winner_school": "Pittsburgh",
    "loser": "Larry Wagner",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Roger Weigel",
    "winner_school": "Oregon State",
    "loser": "Bill Krum",
    "loser_school": "Iowa State",
    "result": "Fall 4:40"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Dwayne Keller",
    "winner_school": "Oklahoma State",
    "loser": "John Marfia",
    "loser_school": "Wilkes",
    "result": "MD 10-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Rich Meyer",
    "winner_school": "Lehigh",
    "loser": "Ed Maze",
    "loser_school": "Texas-El Paso",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "Randy Payne",
    "winner_school": "Pittsburgh",
    "loser": "Lew Mason",
    "loser_school": "Navy",
    "result": "Dec 7-6"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Dwayne Keller",
    "winner_school": "Oklahoma State",
    "loser": "Roger Weigel",
    "loser_school": "Oregon State",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Randy Payne",
    "winner_school": "Pittsburgh",
    "loser": "Rich Meyer",
    "loser_school": "Lehigh",
    "result": "Fall 5:48"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Rich Meyer",
    "winner_school": "Lehigh",
    "loser": "Mike Milkovich",
    "loser_school": "Kent State",
    "result": "Dec 10-3"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "Roger Weigel",
    "winner_school": "Oregon State",
    "loser": "Larry Wagner",
    "loser_school": "Northern Colorado",
    "result": "MD 9-0"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Dwayne Keller",
    "winner_school": "Oklahoma State",
    "loser": "Randy Payne",
    "loser_school": "Pittsburgh",
    "result": "MD 8-0"
  },
  {
    "round": "RepConsP",
    "weight": "126",
    "bout": 252,
    "winner": "Mike Milkovich",
    "winner_school": "Kent State",
    "loser": "Mike Johnson",
    "loser_school": "Colorado",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsA",
    "weight": "126",
    "bout": 263,
    "winner": "Mike Milkovich",
    "winner_school": "Kent State",
    "loser": "Dale Murdock",
    "loser_school": "Clarion",
    "result": "Dec 7-3"
  },
  {
    "round": "RepConsA",
    "weight": "126",
    "bout": 264,
    "winner": "Larry Wagner",
    "winner_school": "Northern Colorado",
    "loser": "Alan Maestas",
    "loser_school": "Kansas State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "126",
    "bout": 383,
    "winner": "Mike Milkovich",
    "winner_school": "Kent State",
    "loser": "John Marfia",
    "loser_school": "Wilkes",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsB",
    "weight": "126",
    "bout": 384,
    "winner": "Larry Wagner",
    "winner_school": "Northern Colorado",
    "loser": "Lew Mason",
    "loser_school": "Navy",
    "result": "Dec 7-1"
  },
  {
    "round": "RepConsC",
    "weight": "126",
    "bout": 423,
    "winner": "Roger Weigel",
    "winner_school": "Oregon State",
    "loser": "Mike Milkovich",
    "loser_school": "Kent State",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "126",
    "bout": 424,
    "winner": "Larry Wagner",
    "winner_school": "Northern Colorado",
    "loser": "Rich Meyer",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Joe Carstensen",
    "winner_school": "Iowa",
    "loser": "Mike Barrett",
    "loser_school": "Louisiana State",
    "result": "Fall 7:18"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Brian Schmidt",
    "winner_school": "West Chester",
    "loser": "Jim Barrett",
    "loser_school": "Kansas State",
    "result": "Dec 5-1"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 2003,
    "winner": "Dana Balum",
    "winner_school": "Penn State",
    "loser": "Garry Miller",
    "loser_school": "Cincinnati",
    "result": "MD 13-1"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3003,
    "winner": "Ron Junko",
    "winner_school": "Toledo",
    "loser": "Terry Wright",
    "loser_school": "Oklahoma",
    "result": "MD 11-3"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 4003,
    "winner": "Larry Rippey",
    "winner_school": "Lock Haven",
    "loser": "Pete Edwards",
    "loser_school": "Winona State",
    "result": "MD 16-4"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 5003,
    "winner": "Phil Parker",
    "winner_school": "Iowa State",
    "loser": "Glenn Dunham",
    "loser_school": "Temple",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Darrell Keller",
    "winner_school": "Oklahoma State",
    "loser": "Bucky Wheeler",
    "loser_school": "Drake",
    "result": "Fall 5:27"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Ron Junko",
    "winner_school": "Toledo",
    "loser": "Dave Wylie",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Dale Stahl",
    "winner_school": "Navy",
    "loser": "Bill Martinez",
    "loser_school": "Colorado State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Brian Schmidt",
    "winner_school": "West Chester",
    "loser": "Scott Stever",
    "loser_school": "Buffalo",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Tom Milkovich",
    "winner_school": "Michigan State",
    "loser": "Scott Lewis",
    "loser_school": "Oregon State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Larry Rippey",
    "winner_school": "Lock Haven",
    "loser": "Marv Reiland",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Steve Garner",
    "winner_school": "Princeton",
    "loser": "Pete Medley",
    "loser_school": "California-Berkeley",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Bob Kawa",
    "winner_school": "Utah",
    "loser": "Sheldon Zablow",
    "loser_school": "Virginia",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Joe Carstensen",
    "winner_school": "Iowa",
    "loser": "Kai Hansen",
    "loser_school": "Ball State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Wydell Boyd",
    "winner_school": "Northwestern",
    "loser": "Shelly Goldberg",
    "loser_school": "Massachusetts",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Dana Balum",
    "winner_school": "Penn State",
    "loser": "Doug Erickson",
    "loser_school": "Nebraska",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Stan Zeamer",
    "winner_school": "Northwest Missouri",
    "loser": "Richard Bacon",
    "loser_school": "Western Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Phil Parker",
    "winner_school": "Iowa State",
    "loser": "Glen Takahashi",
    "loser_school": "Brigham Young",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Dave Waters",
    "winner_school": "Lehigh",
    "loser": "Everette Barnard",
    "loser_school": "Indiana",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Ron Plasman",
    "winner_school": "Miami Ohio",
    "loser": "Jim Cook",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Bob Bergen",
    "winner_school": "Portland State",
    "loser": "Bill Baker",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Darrell Keller",
    "winner_school": "Oklahoma State",
    "loser": "Ron Junko",
    "loser_school": "Toledo",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Dale Stahl",
    "winner_school": "Navy",
    "loser": "Brian Schmidt",
    "loser_school": "West Chester",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Tom Milkovich",
    "winner_school": "Michigan State",
    "loser": "Larry Rippey",
    "loser_school": "Lock Haven",
    "result": "Fall 3:15"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Bob Kawa",
    "winner_school": "Utah",
    "loser": "Steve Garner",
    "loser_school": "Princeton",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Joe Carstensen",
    "winner_school": "Iowa",
    "loser": "Wydell Boyd",
    "loser_school": "Northwestern",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Stan Zeamer",
    "winner_school": "Northwest Missouri",
    "loser": "Dana Balum",
    "loser_school": "Penn State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Phil Parker",
    "winner_school": "Iowa State",
    "loser": "Dave Waters",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Bob Bergen",
    "winner_school": "Portland State",
    "loser": "Ron Plasman",
    "loser_school": "Miami Ohio",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Darrell Keller",
    "winner_school": "Oklahoma State",
    "loser": "Dale Stahl",
    "loser_school": "Navy",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Tom Milkovich",
    "winner_school": "Michigan State",
    "loser": "Bob Kawa",
    "loser_school": "Utah",
    "result": "Dec 10-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Joe Carstensen",
    "winner_school": "Iowa",
    "loser": "Stan Zeamer",
    "loser_school": "Northwest Missouri",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Phil Parker",
    "winner_school": "Iowa State",
    "loser": "Bob Bergen",
    "loser_school": "Portland State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Darrell Keller",
    "winner_school": "Oklahoma State",
    "loser": "Tom Milkovich",
    "loser_school": "Michigan State",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Joe Carstensen",
    "winner_school": "Iowa",
    "loser": "Phil Parker",
    "loser_school": "Iowa State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Wydell Boyd",
    "winner_school": "Northwestern",
    "loser": "Ron Junko",
    "loser_school": "Toledo",
    "result": "Dec 5-4"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Phil Parker",
    "winner_school": "Iowa State",
    "loser": "Tom Milkovich",
    "loser_school": "Michigan State",
    "result": "Dec 6-1"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Darrell Keller",
    "winner_school": "Oklahoma State",
    "loser": "Joe Carstensen",
    "loser_school": "Iowa",
    "result": "MD 12-2"
  },
  {
    "round": "RepConsP",
    "weight": "134",
    "bout": 1253,
    "winner": "Kai Hansen",
    "winner_school": "Ball State",
    "loser": "Mike Barrett",
    "loser_school": "Louisiana State",
    "result": "Dec 7-0"
  },
  {
    "round": "RepConsA",
    "weight": "134",
    "bout": 265,
    "winner": "Ron Junko",
    "winner_school": "Toledo",
    "loser": "Bucky Wheeler",
    "loser_school": "Drake",
    "result": "Dec 7-0"
  },
  {
    "round": "RepConsA",
    "weight": "134",
    "bout": 266,
    "winner": "Wydell Boyd",
    "winner_school": "Northwestern",
    "loser": "Kai Hansen",
    "loser_school": "Ball State",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsB",
    "weight": "134",
    "bout": 385,
    "winner": "Ron Junko",
    "winner_school": "Toledo",
    "loser": "Dale Stahl",
    "loser_school": "Navy",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsB",
    "weight": "134",
    "bout": 386,
    "winner": "Wydell Boyd",
    "winner_school": "Northwestern",
    "loser": "Stan Zeamer",
    "loser_school": "Northwest Missouri",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "134",
    "bout": 425,
    "winner": "Tom Milkovich",
    "winner_school": "Michigan State",
    "loser": "Ron Junko",
    "loser_school": "Toledo",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsC",
    "weight": "134",
    "bout": 426,
    "winner": "Phil Parker",
    "winner_school": "Iowa State",
    "loser": "Wydell Boyd",
    "loser_school": "Northwestern",
    "result": "MD 12-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Dick Keefe",
    "winner_school": "Penn State",
    "loser": "Mike Clark",
    "loser_school": "Bowling Green",
    "result": "MD 9-1"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "Russell Reid",
    "winner_school": "Virginia Tech",
    "loser": "Tom Keeley",
    "loser_school": "Western Michigan",
    "result": "Fall 6:00"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 2004,
    "winner": "Gary Pelcl",
    "winner_school": "Minnesota",
    "loser": "Greg Morgan",
    "loser_school": "Ohio",
    "result": "Dec 10-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 3004,
    "winner": "Dan Milkovich",
    "winner_school": "Kent State",
    "loser": "Bud Smeltz",
    "loser_school": "Pittsburgh",
    "result": "Dec 12-6"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4004,
    "winner": "Dale Richter",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Lloyd Keaser",
    "loser_school": "Navy",
    "result": "Dec 7-6"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 5004,
    "winner": "Wayne Bright",
    "winner_school": "Old Dominion",
    "loser": "Lyle Cook",
    "loser_school": "Kansas State",
    "result": "MD 12-0"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 6004,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Gary Baker",
    "loser_school": "Drake",
    "result": "MD 19-6"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 7004,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Larry Hulburt",
    "loser_school": "Central Michigan",
    "result": "Fall 3:11"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 8004,
    "winner": "Mark King",
    "winner_school": "Michigan",
    "loser": "Murray Neeper",
    "loser_school": "Indiana PA",
    "result": "Dec 7-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 9004,
    "winner": "Tom Lotko",
    "winner_school": "Nebraska",
    "loser": "John Direnzo",
    "loser_school": "Long Island",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Larry Johnson",
    "winner_school": "Western State",
    "loser": "Terry Wells",
    "loser_school": "Iowa",
    "result": "Fall 6:03"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Wayne Bright",
    "winner_school": "Old Dominion",
    "loser": "Ron Kenworthy",
    "loser_school": "Brigham Young",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Dale Richter",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Dave Thomas",
    "loser_school": "Stanford",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Dan Milkovich",
    "winner_school": "Kent State",
    "loser": "Roger Peterson",
    "loser_school": "Washington State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Alray Johnson",
    "winner_school": "West Chester",
    "loser": "Sam Bessinger",
    "loser_school": "Utah State",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Bill Beakley",
    "winner_school": "Oklahoma",
    "loser": "Vince Testone",
    "loser_school": "SIU-Carbondale",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Gary Pelcl",
    "winner_school": "Minnesota",
    "loser": "John Pegues",
    "loser_school": "Virginia",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Steve Welter",
    "loser_school": "Indiana State",
    "result": "Fall 5:28"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Mark King",
    "winner_school": "Michigan",
    "loser": "Warren Gamble",
    "loser_school": "Ball State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Larry Owings",
    "winner_school": "Washington",
    "loser": "Russell Reid",
    "loser_school": "Virginia Tech",
    "result": "Fall 5:12"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Dan Silbaugh",
    "winner_school": "Wyoming",
    "loser": "Dick Keefe",
    "loser_school": "Penn State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Doug Campbell",
    "winner_school": "Oklahoma State",
    "loser": "Dan Marano",
    "loser_school": "Duke",
    "result": "Fall 1:12"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Jim Ventura",
    "loser_school": "Oregon",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Bill James",
    "winner_school": "Army",
    "loser": "Tom Lotko",
    "loser_school": "Nebraska",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Terry Moore",
    "winner_school": "Portland State",
    "loser": "Mike Reynolds",
    "loser_school": "Air Force",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Steve Buttrey",
    "winner_school": "Northwestern",
    "loser": "Herb Campbell",
    "loser_school": "Lehigh",
    "result": "Dec 6-4 TB"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Wayne Bright",
    "winner_school": "Old Dominion",
    "loser": "Larry Johnson",
    "loser_school": "Western State",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Dale Richter",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Dan Milkovich",
    "loser_school": "Kent State",
    "result": "Fall 6:13"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Bill Beakley",
    "winner_school": "Oklahoma",
    "loser": "Alray Johnson",
    "loser_school": "West Chester",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Gary Pelcl",
    "loser_school": "Minnesota",
    "result": "Fall 4:29"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Larry Owings",
    "winner_school": "Washington",
    "loser": "Mark King",
    "loser_school": "Michigan",
    "result": "Fall 1:30"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Dan Silbaugh",
    "winner_school": "Wyoming",
    "loser": "Doug Campbell",
    "loser_school": "Oklahoma State",
    "result": "Fall 3:39"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Bill James",
    "loser_school": "Army",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Terry Moore",
    "winner_school": "Portland State",
    "loser": "Steve Buttrey",
    "loser_school": "Northwestern",
    "result": "MD 24-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Wayne Bright",
    "winner_school": "Old Dominion",
    "loser": "Dale Richter",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Bill Beakley",
    "loser_school": "Oklahoma",
    "result": "Fall 2:27"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Larry Owings",
    "winner_school": "Washington",
    "loser": "Dan Silbaugh",
    "loser_school": "Wyoming",
    "result": "Fall 6:02"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Terry Moore",
    "loser_school": "Portland State",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Wayne Bright",
    "loser_school": "Old Dominion",
    "result": "Fall 6:33"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Larry Owings",
    "winner_school": "Washington",
    "loser": "Keith Lowrance",
    "loser_school": "Michigan State",
    "result": "Fall 3:29"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Bill Beakley",
    "winner_school": "Oklahoma",
    "loser": "Dan Silbaugh",
    "loser_school": "Wyoming",
    "result": "Dec 8-1"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Wayne Bright",
    "loser_school": "Old Dominion",
    "result": "Dec 1-0"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Larry Owings",
    "winner_school": "Washington",
    "loser": "Dan Gable",
    "loser_school": "Iowa State",
    "result": "Dec 13-11"
  },
  {
    "round": "RepConsP",
    "weight": "142",
    "bout": 254,
    "winner": "Larry Hulburt",
    "winner_school": "Central Michigan",
    "loser": "Steve Welter",
    "loser_school": "Indiana State",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsA",
    "weight": "142",
    "bout": 267,
    "winner": "Gary Pelcl",
    "winner_school": "Minnesota",
    "loser": "Larry Hulburt",
    "loser_school": "Central Michigan",
    "result": "MD 10-0"
  },
  {
    "round": "RepConsA",
    "weight": "142",
    "bout": 268,
    "winner": "Mark King",
    "winner_school": "Michigan",
    "loser": "Russell Reid",
    "loser_school": "Virginia Tech",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsB",
    "weight": "142",
    "bout": 387,
    "winner": "Bill Beakley",
    "winner_school": "Oklahoma",
    "loser": "Gary Pelcl",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "142",
    "bout": 388,
    "winner": "Dan Silbaugh",
    "winner_school": "Wyoming",
    "loser": "Mark King",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "142",
    "bout": 427,
    "winner": "Wayne Bright",
    "winner_school": "Old Dominion",
    "loser": "Bill Beakley",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "142",
    "bout": 428,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Dan Silbaugh",
    "loser_school": "Wyoming",
    "result": "Dec 9-2"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Carl Evans",
    "winner_school": "Ball State",
    "loser": "Leandro Torres",
    "loser_school": "Cal Poly",
    "result": "Dec 8-4"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Edward Thompson",
    "winner_school": "Bloomsburg",
    "loser": "Mike Cookas",
    "loser_school": "Northern Illinois",
    "result": "Dec 9-7"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Paul Sheridan",
    "winner_school": "Utah",
    "loser": "Lee Gardner",
    "loser_school": "Cal Poly-Pomona",
    "result": "Dec 11-4"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 3005,
    "winner": "Lane Headrick",
    "winner_school": "Michigan",
    "loser": "A.J. Capelli",
    "loser_school": "Marquette",
    "result": "MD 9-0"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 4005,
    "winner": "Brad Zemmel",
    "winner_school": "Missouri",
    "loser": "Jim Callard",
    "loser_school": "Air Force",
    "result": "Dec 7-6"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5005,
    "winner": "Don Yahn",
    "winner_school": "Iowa",
    "loser": "Tim Shade",
    "loser_school": "Idaho State",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 6005,
    "winner": "Bob Tomasovic",
    "winner_school": "Oregon State",
    "loser": "Don Weck",
    "loser_school": "SUNY-Maritime College",
    "result": "Dec 12-10"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 7005,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Leonard Smith",
    "loser_school": "Stanford",
    "result": "MD 14-2"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 8005,
    "winner": "Tom Minkel",
    "winner_school": "Central Michigan",
    "loser": "Larry Taylor",
    "loser_school": "Louisiana State",
    "result": "Fall 5:33"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 9005,
    "winner": "Carl Adams",
    "winner_school": "Iowa State",
    "loser": "Craig Wollitz",
    "loser_school": "UCLA",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Clyde Smith",
    "winner_school": "Northwestern",
    "loser": "Chris Samuelson",
    "loser_school": "Drake",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Stan Dziedzic",
    "winner_school": "Slippery Rock",
    "loser": "Lane Headrick",
    "loser_school": "Michigan",
    "result": "Fall 2:37"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Clyde Frantz",
    "winner_school": "Penn State",
    "loser": "Dwight Mitchell",
    "loser_school": "Eastern Kentucky",
    "result": "Fall 5:28"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Bob Tscholl",
    "winner_school": "Ohio",
    "loser": "Paul Sheridan",
    "loser_school": "Utah",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Mark Malley",
    "winner_school": "Michigan State",
    "loser": "Jim Hanson",
    "loser_school": "Notre Dame",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Brad Zemmel",
    "winner_school": "Missouri",
    "loser": "Bruce McCampbell",
    "loser_school": "California-Santa Barbar",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Edward Thompson",
    "winner_school": "Bloomsburg",
    "loser": "Curt Callahan",
    "loser_school": "Maryland",
    "result": "Fall 7:45"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Jay Arneson",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Carl Evans",
    "winner_school": "Ball State",
    "loser": "Todd Stevenson",
    "loser_school": "Indiana PA",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Carl Adams",
    "winner_school": "Iowa State",
    "loser": "John Sattler",
    "loser_school": "Navy",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Bob Tomasovic",
    "winner_school": "Oregon State",
    "loser": "Tom Meier",
    "loser_school": "Nebraska",
    "result": "Fall 2:57"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Gary Drury",
    "winner_school": "Purdue",
    "loser": "Bill Harris",
    "loser_school": "California-Berkeley",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Lyle Ballew",
    "winner_school": "Washington",
    "loser": "Don Yahn",
    "loser_school": "Iowa",
    "result": "Fall 3:56"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Rondo Fehlberg",
    "winner_school": "Brigham Young",
    "loser": "Dennis Buford",
    "loser_school": "Western Michigan",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Bob Ferraro",
    "winner_school": "Indiana State",
    "loser": "Tom Minkel",
    "loser_school": "Central Michigan",
    "result": "Fall 10:46 SV"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Ted Adams",
    "winner_school": "Wyoming",
    "loser": "Richard Casey",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Stan Dziedzic",
    "winner_school": "Slippery Rock",
    "loser": "Clyde Smith",
    "loser_school": "Northwestern",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Clyde Frantz",
    "winner_school": "Penn State",
    "loser": "Bob Tscholl",
    "loser_school": "Ohio",
    "result": "Fall 6:07"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Mark Malley",
    "winner_school": "Michigan State",
    "loser": "Brad Zemmel",
    "loser_school": "Missouri",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Edward Thompson",
    "loser_school": "Bloomsburg",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Carl Adams",
    "winner_school": "Iowa State",
    "loser": "Carl Evans",
    "loser_school": "Ball State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Bob Tomasovic",
    "winner_school": "Oregon State",
    "loser": "Gary Drury",
    "loser_school": "Purdue",
    "result": "Fall 5:50"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Lyle Ballew",
    "winner_school": "Washington",
    "loser": "Rondo Fehlberg",
    "loser_school": "Brigham Young",
    "result": "Fall 7:59"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Bob Ferraro",
    "winner_school": "Indiana State",
    "loser": "Ted Adams",
    "loser_school": "Wyoming",
    "result": "Fall 3:31"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Stan Dziedzic",
    "winner_school": "Slippery Rock",
    "loser": "Clyde Frantz",
    "loser_school": "Penn State",
    "result": "Dec 12-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Mark Malley",
    "loser_school": "Michigan State",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Bob Tomasovic",
    "winner_school": "Oregon State",
    "loser": "Carl Adams",
    "loser_school": "Iowa State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Bob Ferraro",
    "winner_school": "Indiana State",
    "loser": "Lyle Ballew",
    "loser_school": "Washington",
    "result": "Fall 2:51"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Stan Dziedzic",
    "loser_school": "Slippery Rock",
    "result": "Dec 9-5"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Bob Ferraro",
    "winner_school": "Indiana State",
    "loser": "Bob Tomasovic",
    "loser_school": "Oregon State",
    "result": "MD 17-2"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Tom Minkel",
    "winner_school": "Central Michigan",
    "loser": "Jay Arneson",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Stan Dziedzic",
    "winner_school": "Slippery Rock",
    "loser": "Bob Tomasovic",
    "loser_school": "Oregon State",
    "result": "MD 10-2"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Bob Ferraro",
    "loser_school": "Indiana State",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsP",
    "weight": "150",
    "bout": 255,
    "winner": "Jay Arneson",
    "winner_school": "Oklahoma State",
    "loser": "Leonard Smith",
    "loser_school": "Stanford",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsA",
    "weight": "150",
    "bout": 269,
    "winner": "Jay Arneson",
    "winner_school": "Oklahoma State",
    "loser": "Edward Thompson",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-5"
  },
  {
    "round": "RepConsA",
    "weight": "150",
    "bout": 270,
    "winner": "Tom Minkel",
    "winner_school": "Central Michigan",
    "loser": "Ted Adams",
    "loser_school": "Wyoming",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsB",
    "weight": "150",
    "bout": 389,
    "winner": "Jay Arneson",
    "winner_school": "Oklahoma State",
    "loser": "Mark Malley",
    "loser_school": "Michigan State",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsB",
    "weight": "150",
    "bout": 390,
    "winner": "Tom Minkel",
    "winner_school": "Central Michigan",
    "loser": "Lyle Ballew",
    "loser_school": "Washington",
    "result": "Dec 7-3"
  },
  {
    "round": "RepConsC",
    "weight": "150",
    "bout": 429,
    "winner": "Stan Dziedzic",
    "winner_school": "Slippery Rock",
    "loser": "Jay Arneson",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-3"
  },
  {
    "round": "RepConsC",
    "weight": "150",
    "bout": 430,
    "winner": "Bob Tomasovic",
    "winner_school": "Oregon State",
    "loser": "Tom Minkel",
    "loser_school": "Central Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Jim Mazzitelli",
    "winner_school": "Drake",
    "loser": "Doug Saffle",
    "loser_school": "Ohio State",
    "result": "Dec 7-2"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Ron Becker",
    "winner_school": "Western Michigan",
    "loser": "Don Stone",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Bill Bell",
    "winner_school": "Texas-El Paso",
    "loser": "Bill Hitesman",
    "loser_school": "Winona State",
    "result": "Fall 4:51"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 3006,
    "winner": "Jerry Ford",
    "winner_school": "Air Force",
    "loser": "Bill Warren",
    "loser_school": "Miami Ohio",
    "result": "Dec 4-0"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 4006,
    "winner": "Jerry Lee",
    "winner_school": "Iowa",
    "loser": "Hajime Shinjo",
    "loser_school": "Washington",
    "result": "MD 14-6"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 5006,
    "winner": "Mark Faller",
    "winner_school": "Harvard",
    "loser": "Curt Bourg",
    "loser_school": "Missouri",
    "result": "Dec 6-5"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6006,
    "winner": "Bruce Trammel",
    "winner_school": "Ohio",
    "loser": "Joe Neff",
    "loser_school": "Eastern Kentucky",
    "result": "Fall 4:02"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Kim Snider",
    "winner_school": "Oregon State",
    "loser": "Bob Boeck",
    "loser_school": "Northern Iowa",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Jerry Lee",
    "winner_school": "Iowa",
    "loser": "Bill Stauffer",
    "loser_school": "Hofstra",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Bill Laursen",
    "winner_school": "Northwestern",
    "loser": "Tom Young",
    "loser_school": "Massachusetts",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Mark Faller",
    "winner_school": "Harvard",
    "loser": "Greg Giordano",
    "loser_school": "William & Mary",
    "result": "Fall 3:06"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Joe George",
    "winner_school": "Nebraska",
    "loser": "Les Bressler",
    "loser_school": "Clarion",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Dave Martin",
    "winner_school": "Iowa State",
    "loser": "Jerry Ford",
    "loser_school": "Air Force",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Bob Kuhn",
    "winner_school": "Pittsburgh",
    "loser": "Steve Metro",
    "loser_school": "Louisiana State",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Bill Bell",
    "winner_school": "Texas-El Paso",
    "loser": "Larry Winnard",
    "loser_school": "Oklahoma State",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Bruce Trammel",
    "winner_school": "Ohio",
    "loser": "James Axtell",
    "loser_school": "Minnesota",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Jerald Meisner",
    "winner_school": "Buffalo",
    "loser": "Rich Cunningham",
    "loser_school": "Cal Poly-Pomona",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Don Dixon",
    "winner_school": "SUNY-Maritime College",
    "loser": "Ron Becker",
    "loser_school": "Western Michigan",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Steve Dildine",
    "winner_school": "Alabama",
    "loser": "Ken Kline",
    "loser_school": "Indiana PA",
    "result": "MD 27-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Dennis Brand",
    "winner_school": "Oklahoma",
    "loser": "Chris Kopczynski",
    "loser_school": "Washington State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Tom Quinn",
    "winner_school": "Michigan",
    "loser": "Dan Layton",
    "loser_school": "Indiana State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Rick Radman",
    "winner_school": "Michigan State",
    "loser": "Jim Mazzitelli",
    "loser_school": "Drake",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Charles Shepherd",
    "winner_school": "Utah",
    "loser": "Dave Wieland",
    "loser_school": "Kansas State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Kim Snider",
    "winner_school": "Oregon State",
    "loser": "Jerry Lee",
    "loser_school": "Iowa",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Bill Laursen",
    "winner_school": "Northwestern",
    "loser": "Mark Faller",
    "loser_school": "Harvard",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Dave Martin",
    "winner_school": "Iowa State",
    "loser": "Joe George",
    "loser_school": "Nebraska",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Bob Kuhn",
    "winner_school": "Pittsburgh",
    "loser": "Bill Bell",
    "loser_school": "Texas-El Paso",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Bruce Trammel",
    "winner_school": "Ohio",
    "loser": "Jerald Meisner",
    "loser_school": "Buffalo",
    "result": "MD 16-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Don Dixon",
    "winner_school": "SUNY-Maritime College",
    "loser": "Steve Dildine",
    "loser_school": "Alabama",
    "result": "Fall 2:50"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Tom Quinn",
    "winner_school": "Michigan",
    "loser": "Dennis Brand",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Charles Shepherd",
    "winner_school": "Utah",
    "loser": "Rick Radman",
    "loser_school": "Michigan State",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Kim Snider",
    "winner_school": "Oregon State",
    "loser": "Bill Laursen",
    "loser_school": "Northwestern",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Dave Martin",
    "winner_school": "Iowa State",
    "loser": "Bob Kuhn",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Bruce Trammel",
    "winner_school": "Ohio",
    "loser": "Don Dixon",
    "loser_school": "SUNY-Maritime College",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Charles Shepherd",
    "winner_school": "Utah",
    "loser": "Tom Quinn",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Dave Martin",
    "winner_school": "Iowa State",
    "loser": "Kim Snider",
    "loser_school": "Oregon State",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Bruce Trammel",
    "winner_school": "Ohio",
    "loser": "Charles Shepherd",
    "loser_school": "Utah",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Charles Shepherd",
    "winner_school": "Utah",
    "loser": "Bob Kuhn",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-7"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Kim Snider",
    "winner_school": "Oregon State",
    "loser": "James Axtell",
    "loser_school": "Minnesota",
    "result": "Dec 6-5"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Dave Martin",
    "winner_school": "Iowa State",
    "loser": "Bruce Trammel",
    "loser_school": "Ohio",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsP",
    "weight": "158",
    "bout": 1256,
    "winner": "James Axtell",
    "winner_school": "Minnesota",
    "loser": "Joe Neff",
    "loser_school": "Eastern Kentucky",
    "result": "MD 9-0"
  },
  {
    "round": "RepConsA",
    "weight": "158",
    "bout": 271,
    "winner": "Jerry Ford",
    "winner_school": "Air Force",
    "loser": "Joe George",
    "loser_school": "Nebraska",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsA",
    "weight": "158",
    "bout": 272,
    "winner": "James Axtell",
    "winner_school": "Minnesota",
    "loser": "Jerald Meisner",
    "loser_school": "Buffalo",
    "result": "Dec 8-2"
  },
  {
    "round": "RepConsB",
    "weight": "158",
    "bout": 391,
    "winner": "Bob Kuhn",
    "winner_school": "Pittsburgh",
    "loser": "Jerry Ford",
    "loser_school": "Air Force",
    "result": "Fall 2:30"
  },
  {
    "round": "RepConsB",
    "weight": "158",
    "bout": 392,
    "winner": "James Axtell",
    "winner_school": "Minnesota",
    "loser": "Don Dixon",
    "loser_school": "SUNY-Maritime College",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "RepConsC",
    "weight": "158",
    "bout": 431,
    "winner": "Kim Snider",
    "winner_school": "Oregon State",
    "loser": "Bob Kuhn",
    "loser_school": "Pittsburgh",
    "result": "Dec 14-7"
  },
  {
    "round": "RepConsC",
    "weight": "158",
    "bout": 432,
    "winner": "James Axtell",
    "winner_school": "Minnesota",
    "loser": "Charles Shepherd",
    "loser_school": "Utah",
    "result": "Dec 2-0"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Jack Bentz",
    "winner_school": "Lehigh",
    "loser": "Skip Bellock",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-6"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1007,
    "winner": "Al Handy",
    "winner_school": "Texas-El Paso",
    "loser": "Jack Black",
    "loser_school": "Air Force",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 2007,
    "winner": "Tim Dodge",
    "winner_school": "Augustana Illinois",
    "loser": "Gary West",
    "loser_school": "Oregon",
    "result": "Dec 1-0"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 3007,
    "winner": "Jim Vandehey",
    "winner_school": "Oregon State",
    "loser": "Ted Hart",
    "loser_school": "Western State",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 4007,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "John Bedtke",
    "loser_school": "Winona State",
    "result": "MD 18-2"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 5007,
    "winner": "Scott Tennis",
    "winner_school": "Utah",
    "loser": "Mark Goldberg",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 6007,
    "winner": "Bruce Hosta",
    "winner_school": "Ohio",
    "loser": "Terry Crenshaw",
    "loser_school": "Stanford",
    "result": "Fall 6:53"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Dick Freeman",
    "loser_school": "Indiana State",
    "result": "Fall 7:15"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Don Marostica",
    "winner_school": "Colorado State",
    "loser": "Bruce Hosta",
    "loser_school": "Ohio",
    "result": "Fall 5:53"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Mike Roberts",
    "winner_school": "Auburn",
    "loser": "Cliff Gessner",
    "loser_school": "Buffalo",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Bruce Kirkpatrick",
    "winner_school": "Illinois",
    "loser": "Tim Dodge",
    "loser_school": "Augustana Illinois",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "John Caccia",
    "winner_school": "Idaho State",
    "loser": "Jack Harris",
    "loser_school": "Oklahoma",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Scott Tennis",
    "winner_school": "Utah",
    "loser": "Ken Latimer",
    "loser_school": "Washington",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Phil Bode",
    "winner_school": "Louisiana State",
    "loser": "Leo Kocher",
    "loser_school": "Northwestern",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Don Cramer",
    "loser_school": "Gettysburg",
    "result": "Fall 2:14"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Andy Matter",
    "winner_school": "Penn State",
    "loser": "Al Handy",
    "loser_school": "Texas-El Paso",
    "result": "MD 16-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "John Lightner",
    "winner_school": "Oklahoma State",
    "loser": "Pat North",
    "loser_school": "Northern Illinois",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Jim Vandehey",
    "winner_school": "Oregon State",
    "loser": "Santo Ricotta",
    "loser_school": "Clarion",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Sam Spring",
    "winner_school": "Montana State",
    "loser": "Jerry Munson",
    "loser_school": "Nebraska",
    "result": "Fall 4:24"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Phil Henning",
    "winner_school": "Iowa",
    "loser": "Jack Bentz",
    "loser_school": "Lehigh",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Mike Crandall",
    "winner_school": "Cornell",
    "loser": "Jim Broncatello",
    "loser_school": "Cal Poly-Pomona",
    "result": "Fall 4:24"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Aaron Holloway",
    "winner_school": "SIU-Carbondale",
    "loser": "Mike Beaman",
    "loser_school": "Drake",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Pat Karslake",
    "winner_school": "Michigan State",
    "loser": "Steve Welch",
    "loser_school": "California-Berkeley",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Don Marostica",
    "loser_school": "Colorado State",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Bruce Kirkpatrick",
    "winner_school": "Illinois",
    "loser": "Mike Roberts",
    "loser_school": "Auburn",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "John Caccia",
    "winner_school": "Idaho State",
    "loser": "Scott Tennis",
    "loser_school": "Utah",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Phil Bode",
    "loser_school": "Louisiana State",
    "result": "Fall 4:58"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "John Lightner",
    "winner_school": "Oklahoma State",
    "loser": "Andy Matter",
    "loser_school": "Penn State",
    "result": "Fall 6:42"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Jim Vandehey",
    "winner_school": "Oregon State",
    "loser": "Sam Spring",
    "loser_school": "Montana State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Phil Henning",
    "winner_school": "Iowa",
    "loser": "Mike Crandall",
    "loser_school": "Cornell",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Pat Karslake",
    "winner_school": "Michigan State",
    "loser": "Aaron Holloway",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Bruce Kirkpatrick",
    "loser_school": "Illinois",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "John Caccia",
    "loser_school": "Idaho State",
    "result": "MD 14-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Jim Vandehey",
    "winner_school": "Oregon State",
    "loser": "John Lightner",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Phil Henning",
    "winner_school": "Iowa",
    "loser": "Pat Karslake",
    "loser_school": "Michigan State",
    "result": "Dec 9-7"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Jesse Rawls",
    "loser_school": "Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Phil Henning",
    "winner_school": "Iowa",
    "loser": "Jim Vandehey",
    "loser_school": "Oregon State",
    "result": "Dec 8-7"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Jim Vandehey",
    "winner_school": "Oregon State",
    "loser": "Jesse Rawls",
    "loser_school": "Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Pat Karslake",
    "winner_school": "Michigan State",
    "loser": "John Caccia",
    "loser_school": "Idaho State",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Phil Henning",
    "loser_school": "Iowa",
    "result": "Dec 8-7"
  },
  {
    "round": "RepConsP",
    "weight": "167",
    "bout": 257,
    "winner": "Don Cramer",
    "winner_school": "Gettysburg",
    "loser": "John Bedtke",
    "loser_school": "Winona State",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 273,
    "winner": "Don Cramer",
    "winner_school": "Gettysburg",
    "loser": "Phil Bode",
    "loser_school": "Louisiana State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 274,
    "winner": "Jack Bentz",
    "winner_school": "Lehigh",
    "loser": "Mike Crandall",
    "loser_school": "Cornell",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "John Caccia",
    "winner_school": "Idaho State",
    "loser": "Don Cramer",
    "loser_school": "Gettysburg",
    "result": "Fall 2:33"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Pat Karslake",
    "winner_school": "Michigan State",
    "loser": "Jack Bentz",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "John Caccia",
    "winner_school": "Idaho State",
    "loser": "Jesse Rawls",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Pat Karslake",
    "winner_school": "Michigan State",
    "loser": "Jim Vandehey",
    "loser_school": "Oregon State",
    "result": "MD 11-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "Rich Simmons",
    "winner_school": "Cal Poly",
    "loser": "Scott Moyer",
    "loser_school": "William & Mary",
    "result": "Dec 6-0"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1008,
    "winner": "Ben Welch",
    "winner_school": "Navy",
    "loser": "Jim Torsell",
    "loser_school": "St. Francis PA",
    "result": "Fall 4:59"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 2008,
    "winner": "Gerald Winnard",
    "winner_school": "Oklahoma State",
    "loser": "Dale Jensen",
    "loser_school": "Wisconsin-Superior",
    "result": "Fall 4:40"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 3008,
    "winner": "Ben Cooper",
    "winner_school": "SIU-Carbondale",
    "loser": "Bill Bragg",
    "loser_school": "Colorado",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 4008,
    "winner": "John Byrd",
    "winner_school": "Missouri",
    "loser": "Bruce Buckbee",
    "loser_school": "Massachusetts",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 5008,
    "winner": "Ray Ritacco",
    "winner_school": "Army",
    "loser": "Therlon Harris",
    "loser_school": "Michigan",
    "result": "Dec UTB"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 6008,
    "winner": "Mark Frankel",
    "winner_school": "Purdue",
    "loser": "Frank Lyman",
    "loser_school": "Hofstra",
    "result": "Dec 9-5"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 7008,
    "winner": "Jim Crumley",
    "winner_school": "Oregon State",
    "loser": "Craig Tritch",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-2"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8008,
    "winner": "Floyd Hitchcock",
    "winner_school": "Bloomsburg",
    "loser": "Bill Murdock",
    "loser_school": "Washington",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Steve DeVries",
    "winner_school": "Iowa",
    "loser": "Dale Seavey",
    "loser_school": "Oregon",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Ben Cooper",
    "winner_school": "SIU-Carbondale",
    "loser": "Henry Shaffer",
    "loser_school": "Clarion",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Don Trapp",
    "winner_school": "South Dakota State",
    "loser": "Ray Williams",
    "loser_school": "Stanford",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Mark Frankel",
    "winner_school": "Purdue",
    "loser": "Tom Gambill",
    "loser_school": "Auburn",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Steve Shields",
    "winner_school": "Lehigh",
    "loser": "Larry Wollschlager",
    "loser_school": "Texas-El Paso",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Floyd Hitchcock",
    "winner_school": "Bloomsburg",
    "loser": "Dan Newhard",
    "loser_school": "Penn State",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "John Byrd",
    "winner_school": "Missouri",
    "loser": "Brian Cawley",
    "loser_school": "West Chester",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Chuck Jean",
    "winner_school": "Iowa State",
    "loser": "Ray Ritacco",
    "loser_school": "Army",
    "result": "Fall 3:11"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Jim Crumley",
    "winner_school": "Oregon State",
    "loser": "Keith Koziczkowski",
    "loser_school": "Marquette",
    "result": "MD 23-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Tom Corbin",
    "winner_school": "Oklahoma",
    "loser": "Marc Baretz",
    "loser_school": "Temple",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Gerald Winnard",
    "winner_school": "Oklahoma State",
    "loser": "Bruce Bennett",
    "loser_school": "Louisiana State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Russ Johnson",
    "winner_school": "Ohio",
    "loser": "Tom Rogish",
    "loser_school": "Indiana PA",
    "result": "Fall 4:52"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Ben Welch",
    "winner_school": "Navy",
    "loser": "Jim Haug",
    "loser_school": "Nebraska",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Paul Hatling",
    "winner_school": "San Jose State",
    "loser": "Dennis Alf",
    "loser_school": "Wyoming",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Bill Pauss",
    "winner_school": "Northwestern",
    "loser": "Rich Simmons",
    "loser_school": "Cal Poly",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Gerald Malecek",
    "winner_school": "Michigan State",
    "loser": "Vince Paolano",
    "loser_school": "Syracuse",
    "result": "Fall 8:24 SV"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Ben Cooper",
    "winner_school": "SIU-Carbondale",
    "loser": "Steve DeVries",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Don Trapp",
    "winner_school": "South Dakota State",
    "loser": "Mark Frankel",
    "loser_school": "Purdue",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Steve Shields",
    "winner_school": "Lehigh",
    "loser": "Floyd Hitchcock",
    "loser_school": "Bloomsburg",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Chuck Jean",
    "winner_school": "Iowa State",
    "loser": "John Byrd",
    "loser_school": "Missouri",
    "result": "Fall 1:10"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Jim Crumley",
    "winner_school": "Oregon State",
    "loser": "Tom Corbin",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Russ Johnson",
    "winner_school": "Ohio",
    "loser": "Gerald Winnard",
    "loser_school": "Oklahoma State",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Ben Welch",
    "winner_school": "Navy",
    "loser": "Paul Hatling",
    "loser_school": "San Jose State",
    "result": "Fall 3:13"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Gerald Malecek",
    "winner_school": "Michigan State",
    "loser": "Bill Pauss",
    "loser_school": "Northwestern",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Ben Cooper",
    "winner_school": "SIU-Carbondale",
    "loser": "Don Trapp",
    "loser_school": "South Dakota State",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Chuck Jean",
    "winner_school": "Iowa State",
    "loser": "Steve Shields",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Jim Crumley",
    "winner_school": "Oregon State",
    "loser": "Russ Johnson",
    "loser_school": "Ohio",
    "result": "MD 18-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Gerald Malecek",
    "winner_school": "Michigan State",
    "loser": "Ben Welch",
    "loser_school": "Navy",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Chuck Jean",
    "winner_school": "Iowa State",
    "loser": "Ben Cooper",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Jim Crumley",
    "winner_school": "Oregon State",
    "loser": "Gerald Malecek",
    "loser_school": "Michigan State",
    "result": "Dec 8-7"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Steve Shields",
    "winner_school": "Lehigh",
    "loser": "Tom Corbin",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Ben Cooper",
    "winner_school": "SIU-Carbondale",
    "loser": "Gerald Malecek",
    "loser_school": "Michigan State",
    "result": "Dec 6-3"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Chuck Jean",
    "winner_school": "Iowa State",
    "loser": "Jim Crumley",
    "loser_school": "Oregon State",
    "result": "Dec 8-6"
  },
  {
    "round": "RepConsP",
    "weight": "177",
    "bout": 1258,
    "winner": "Craig Tritch",
    "winner_school": "Pittsburgh",
    "loser": "Keith Koziczkowski",
    "loser_school": "Marquette",
    "result": "MD 14-6"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 275,
    "winner": "Ray Ritacco",
    "winner_school": "Army",
    "loser": "John Byrd",
    "loser_school": "Missouri",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 276,
    "winner": "Tom Corbin",
    "winner_school": "Oklahoma",
    "loser": "Craig Tritch",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-4"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Steve Shields",
    "winner_school": "Lehigh",
    "loser": "Ray Ritacco",
    "loser_school": "Army",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Tom Corbin",
    "winner_school": "Oklahoma",
    "loser": "Russ Johnson",
    "loser_school": "Ohio",
    "result": "Dec 6-1 TB"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Ben Cooper",
    "winner_school": "SIU-Carbondale",
    "loser": "Steve Shields",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Gerald Malecek",
    "winner_school": "Michigan State",
    "loser": "Tom Corbin",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 9,
    "winner": "John High",
    "winner_school": "Penn State",
    "loser": "Mike Brundage",
    "loser_school": "Oklahoma",
    "result": "MD 14-4"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 1009,
    "winner": "Mark Kane",
    "winner_school": "Navy",
    "loser": "Chuck Arnold",
    "loser_school": "Northwestern",
    "result": "MD 12-0"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 2009,
    "winner": "Russ Hellickson",
    "winner_school": "Wisconsin",
    "loser": "Rich Jenson",
    "loser_school": "Louisiana State",
    "result": "Fall 5:17"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 3009,
    "winner": "Scott Christie",
    "winner_school": "Lehigh",
    "loser": "Mike Cerqua",
    "loser_school": "Purdue",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Emil Deliere",
    "winner_school": "Princeton",
    "loser": "Bruce Davis",
    "loser_school": "New Mexico",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Ron Emenheiser",
    "winner_school": "Gettysburg",
    "loser": "Kal Tuinstra",
    "loser_school": "Drake",
    "result": "Fall 3:41"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Regan Beers",
    "winner_school": "SUNY-Brockport",
    "loser": "Larry Paull",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Russ Hellickson",
    "winner_school": "Wisconsin",
    "loser": "Joe Green",
    "loser_school": "Bowling Green",
    "result": "Fall 4:57"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Jack Harpin",
    "winner_school": "Colorado",
    "loser": "Steve Willis",
    "loser_school": "Duke",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "John High",
    "winner_school": "Penn State",
    "loser": "Frank Lucio",
    "loser_school": "California-Berkeley",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Bob Rust",
    "winner_school": "Syracuse",
    "loser": "Ben Dew",
    "loser_school": "Weber State",
    "result": "Dec 14-9"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Ben Peterson",
    "winner_school": "Iowa State",
    "loser": "Scott Christie",
    "loser_school": "Lehigh",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Bill Knippel",
    "winner_school": "Nebraska",
    "loser": "Mark Kane",
    "loser_school": "Navy",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Mike Latimer",
    "winner_school": "Washington State",
    "loser": "Greg Voutyras",
    "loser_school": "Ohio",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Geoff Baum",
    "winner_school": "Oklahoma State",
    "loser": "Paul Zander",
    "loser_school": "Iowa",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Mike Fiorini",
    "winner_school": "Illinois State",
    "loser": "Bill Allen",
    "loser_school": "Washington",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Jim Caramanna",
    "winner_school": "Pittsburgh",
    "loser": "Gene Hansen",
    "loser_school": "Fresno State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Henk Schenk",
    "winner_school": "Oregon State",
    "loser": "Dave Pottruck",
    "loser_school": "Penn",
    "result": "Fall 7:09"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Bryan Hage",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Ron Tacha",
    "loser_school": "Kansas State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Jack Zindel",
    "winner_school": "Michigan State",
    "loser": "Bob Knudsen",
    "loser_school": "Missouri",
    "result": "Fall 4:41"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Emil Deliere",
    "winner_school": "Princeton",
    "loser": "Ron Emenheiser",
    "loser_school": "Gettysburg",
    "result": "MD 20-6"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Russ Hellickson",
    "winner_school": "Wisconsin",
    "loser": "Regan Beers",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "John High",
    "winner_school": "Penn State",
    "loser": "Jack Harpin",
    "loser_school": "Colorado",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Bob Rust",
    "winner_school": "Syracuse",
    "loser": "Ben Peterson",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Mike Latimer",
    "winner_school": "Washington State",
    "loser": "Bill Knippel",
    "loser_school": "Nebraska",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Geoff Baum",
    "winner_school": "Oklahoma State",
    "loser": "Mike Fiorini",
    "loser_school": "Illinois State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Henk Schenk",
    "winner_school": "Oregon State",
    "loser": "Jim Caramanna",
    "loser_school": "Pittsburgh",
    "result": "Fall 4:20"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Jack Zindel",
    "winner_school": "Michigan State",
    "loser": "Bryan Hage",
    "loser_school": "Minnesota State-Mankato",
    "result": "MD 13-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Emil Deliere",
    "winner_school": "Princeton",
    "loser": "Russ Hellickson",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Bob Rust",
    "winner_school": "Syracuse",
    "loser": "John High",
    "loser_school": "Penn State",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Geoff Baum",
    "winner_school": "Oklahoma State",
    "loser": "Mike Latimer",
    "loser_school": "Washington State",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Jack Zindel",
    "winner_school": "Michigan State",
    "loser": "Henk Schenk",
    "loser_school": "Oregon State",
    "result": "Dec 9-5"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Bob Rust",
    "winner_school": "Syracuse",
    "loser": "Emil Deliere",
    "loser_school": "Princeton",
    "result": "MD 10-2"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Geoff Baum",
    "winner_school": "Oklahoma State",
    "loser": "Jack Zindel",
    "loser_school": "Michigan State",
    "result": "Dec 8-2 TB"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Paul Zander",
    "winner_school": "Iowa",
    "loser": "Emil Deliere",
    "loser_school": "Princeton",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Jack Zindel",
    "winner_school": "Michigan State",
    "loser": "Ben Peterson",
    "loser_school": "Iowa State",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Geoff Baum",
    "winner_school": "Oklahoma State",
    "loser": "Bob Rust",
    "loser_school": "Syracuse",
    "result": "MD 9-1"
  },
  {
    "round": "RepConsA",
    "weight": "190",
    "bout": 277,
    "winner": "Ben Peterson",
    "winner_school": "Iowa State",
    "loser": "Ben Dew",
    "loser_school": "Weber State",
    "result": "MD 10-0"
  },
  {
    "round": "RepConsA",
    "weight": "190",
    "bout": 278,
    "winner": "Paul Zander",
    "winner_school": "Iowa",
    "loser": "Mike Fiorini",
    "loser_school": "Illinois State",
    "result": "Dec 7-3"
  },
  {
    "round": "RepConsB",
    "weight": "190",
    "bout": 397,
    "winner": "Ben Peterson",
    "winner_school": "Iowa State",
    "loser": "John High",
    "loser_school": "Penn State",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "190",
    "bout": 398,
    "winner": "Paul Zander",
    "winner_school": "Iowa",
    "loser": "Mike Latimer",
    "loser_school": "Washington State",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "190",
    "bout": 437,
    "winner": "Ben Peterson",
    "winner_school": "Iowa State",
    "loser": "Emil Deliere",
    "loser_school": "Princeton",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "190",
    "bout": 438,
    "winner": "Jack Zindel",
    "winner_school": "Michigan State",
    "loser": "Paul Zander",
    "loser_school": "Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 10,
    "winner": "Tom Walter",
    "winner_school": "Kent State",
    "loser": "Bob Galbreath",
    "loser_school": "Drake",
    "result": "Fall 2:53"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 1010,
    "winner": "Bill Galler",
    "winner_school": "Northwestern",
    "loser": "Dan Widmer",
    "loser_school": "UCLA",
    "result": "DEF"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 2010,
    "winner": "Dave Joyner",
    "winner_school": "Penn State",
    "loser": "Marty Weikart",
    "loser_school": "Delaware",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 155,
    "winner": "Wayne Karney",
    "winner_school": "Portland State",
    "loser": "Ed Newman",
    "loser_school": "Duke",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 156,
    "winner": "Fred Boeger",
    "winner_school": "Colorado State",
    "loser": "Tim Kennedy",
    "loser_school": "Louisiana State",
    "result": "Fall 4:38"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 157,
    "winner": "Bill Emendorfer",
    "winner_school": "Tennessee",
    "loser": "Ken Tams",
    "loser_school": "Brigham Young",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Bill Galler",
    "winner_school": "Northwestern",
    "loser": "Charles Dressel",
    "loser_school": "Princeton",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 159,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Mike Edwards",
    "loser_school": "Iowa",
    "result": "Fall 0:29"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 160,
    "winner": "Mike Jacques",
    "winner_school": "New York University",
    "loser": "Dan Walgate",
    "loser_school": "Buffalo",
    "result": "Fall 6:44"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 161,
    "winner": "Bill Osborne",
    "winner_school": "Indiana State",
    "loser": "Don Carden",
    "loser_school": "Temple",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Henry Muller",
    "winner_school": "Oregon",
    "loser": "Dave Joyner",
    "loser_school": "Penn State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Tom Walter",
    "winner_school": "Kent State",
    "loser": "Keith Burchett",
    "loser_school": "Nebraska",
    "result": "Fall 0:23"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 164,
    "winner": "Jerry Sherk",
    "winner_school": "Oklahoma State",
    "loser": "John Griffith",
    "loser_school": "Air Force",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 165,
    "winner": "Vic Mittleberg",
    "winner_school": "Michigan State",
    "loser": "Kent Gardner",
    "loser_school": "West Chester",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 166,
    "winner": "Frank Walsh",
    "winner_school": "Brown",
    "loser": "Phil Gustafson",
    "loser_school": "Notre Dame",
    "result": "Fall 7:19"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "Gary Leinberger",
    "winner_school": "Lehigh",
    "loser": "Eric Swanson",
    "loser_school": "California-Berkeley",
    "result": "Dec 15-9"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 168,
    "winner": "Dick Schumacher",
    "winner_school": "East Stroudsburg",
    "loser": "Rick Bolhouse",
    "loser_school": "Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 169,
    "winner": "Bill Luttrell",
    "winner_school": "Oklahoma",
    "loser": "Ron Bleck",
    "loser_school": "Wisconsin-Superior",
    "result": "Fall 6:51"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 170,
    "winner": "Greg Wojciechowski",
    "winner_school": "Toledo",
    "loser": "Geary Murdock",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Wayne Karney",
    "winner_school": "Portland State",
    "loser": "Fred Boeger",
    "loser_school": "Colorado State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Bill Galler",
    "winner_school": "Northwestern",
    "loser": "Bill Emendorfer",
    "loser_school": "Tennessee",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Mike Jacques",
    "loser_school": "New York University",
    "result": "Fall 0:54"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Henry Muller",
    "winner_school": "Oregon",
    "loser": "Bill Osborne",
    "loser_school": "Indiana State",
    "result": "Fall 3:04"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Tom Walter",
    "winner_school": "Kent State",
    "loser": "Jerry Sherk",
    "loser_school": "Oklahoma State",
    "result": "Fall 1:13"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Vic Mittleberg",
    "winner_school": "Michigan State",
    "loser": "Frank Walsh",
    "loser_school": "Brown",
    "result": "MD 26-10"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Dick Schumacher",
    "winner_school": "East Stroudsburg",
    "loser": "Gary Leinberger",
    "loser_school": "Lehigh",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Greg Wojciechowski",
    "winner_school": "Toledo",
    "loser": "Bill Luttrell",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Wayne Karney",
    "winner_school": "Portland State",
    "loser": "Bill Galler",
    "loser_school": "Northwestern",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Henry Muller",
    "loser_school": "Oregon",
    "result": "MD 12-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Vic Mittleberg",
    "winner_school": "Michigan State",
    "loser": "Tom Walter",
    "loser_school": "Kent State",
    "result": "Fall 7:13"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Greg Wojciechowski",
    "winner_school": "Toledo",
    "loser": "Dick Schumacher",
    "loser_school": "East Stroudsburg",
    "result": "MD 12-4"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Wayne Karney",
    "loser_school": "Portland State",
    "result": "Dec 8-1"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Greg Wojciechowski",
    "winner_school": "Toledo",
    "loser": "Vic Mittleberg",
    "loser_school": "Michigan State",
    "result": "Dec 5-1 TB"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "Dick Schumacher",
    "winner_school": "East Stroudsburg",
    "loser": "Mike Edwards",
    "loser_school": "Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Wayne Karney",
    "winner_school": "Portland State",
    "loser": "Vic Mittleberg",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Greg Wojciechowski",
    "loser_school": "Toledo",
    "result": "Dec 9-2"
  },
  {
    "round": "RepConsA",
    "weight": "UNL",
    "bout": 279,
    "winner": "Mike Edwards",
    "winner_school": "Iowa",
    "loser": "Mike Jacques",
    "loser_school": "New York University",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsA",
    "weight": "UNL",
    "bout": 280,
    "winner": "Bill Luttrell",
    "winner_school": "Oklahoma",
    "loser": "Geary Murdock",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 399,
    "winner": "Mike Edwards",
    "winner_school": "Iowa",
    "loser": "Henry Muller",
    "loser_school": "Oregon",
    "result": "Dec 8-3"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 400,
    "winner": "Dick Schumacher",
    "winner_school": "East Stroudsburg",
    "loser": "Bill Luttrell",
    "loser_school": "Oklahoma",
    "result": "MD 12-3"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Wayne Karney",
    "winner_school": "Portland State",
    "loser": "Mike Edwards",
    "loser_school": "Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Vic Mittleberg",
    "winner_school": "Michigan State",
    "loser": "Dick Schumacher",
    "loser_school": "East Stroudsburg",
    "result": "Dec 7-3 TB"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
