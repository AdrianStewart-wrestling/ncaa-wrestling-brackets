// 1969 NCAA Division I Wrestling Championships (3/27/1969 to 3/29/1969 at Brigham Young). Weight classes 115-UNL (11). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1969 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1969-provenance.js
const resultData = [
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 12,
    "winner": "Stan Diamond",
    "winner_school": "Indiana State",
    "loser": "Lonnie Parker",
    "loser_school": "William & Mary",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 13,
    "winner": "John Morley",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Jerry Hoddy",
    "loser_school": "Michigan",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 14,
    "winner": "Ed Brown",
    "winner_school": "Buffalo",
    "loser": "Balvino Irizarry",
    "loser_school": "Utah",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 15,
    "winner": "Terry Hall",
    "winner_school": "Cal Poly",
    "loser": "Ed Dumas",
    "loser_school": "Northwestern",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 16,
    "winner": "Jerry Reshetar",
    "winner_school": "Drake",
    "loser": "Joe Orta",
    "loser_school": "Nebraska",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 17,
    "winner": "Don Fay",
    "winner_school": "Lock Haven",
    "loser": "Lee Garoian",
    "loser_school": "Oregon State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 18,
    "winner": "Gordon Yamamoto",
    "winner_school": "California-Berkeley",
    "loser": "Dave Laroche",
    "loser_school": "Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 19,
    "winner": "Frank Romano",
    "winner_school": "Ohio State",
    "loser": "Jan Gitcho",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 20,
    "winner": "Ray Stapp",
    "winner_school": "Oklahoma State",
    "loser": "Ted Pease",
    "loser_school": "East Stroudsburg",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 21,
    "winner": "Bob Shines",
    "winner_school": "Arizona State",
    "loser": "Ted Levine",
    "loser_school": "Fairleigh Dickinson",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 22,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Greg Schmidt",
    "loser_school": "South Dakota State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 23,
    "winner": "Chuck Henry",
    "winner_school": "Brigham Young",
    "loser": "Dave Keller",
    "loser_school": "Toledo",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 24,
    "winner": "Jim Fiore",
    "winner_school": "Temple",
    "loser": "Mike Doyle",
    "loser_school": "Colorado",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 25,
    "winner": "Steve Lampe",
    "winner_school": "Iowa State",
    "loser": "Art Stone",
    "loser_school": "San Jose State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "Sergio Gonzales",
    "winner_school": "UCLA",
    "loser": "Stan Diamond",
    "loser_school": "Indiana State",
    "result": "Fall 4:48"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "John Morley",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Ed Brown",
    "loser_school": "Buffalo",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Terry Hall",
    "winner_school": "Cal Poly",
    "loser": "Jerry Reshetar",
    "loser_school": "Drake",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Don Fay",
    "winner_school": "Lock Haven",
    "loser": "Gordon Yamamoto",
    "loser_school": "California-Berkeley",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Ray Stapp",
    "winner_school": "Oklahoma State",
    "loser": "Frank Romano",
    "loser_school": "Ohio State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Bob Shines",
    "loser_school": "Arizona State",
    "result": "Dec 12-11"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Jim Fiore",
    "winner_school": "Temple",
    "loser": "Chuck Henry",
    "loser_school": "Brigham Young",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 178,
    "winner": "Steve Lampe",
    "winner_school": "Iowa State",
    "loser": "Gary Bissell",
    "loser_school": "Michigan State",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Sergio Gonzales",
    "winner_school": "UCLA",
    "loser": "John Morley",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Terry Hall",
    "winner_school": "Cal Poly",
    "loser": "Don Fay",
    "loser_school": "Lock Haven",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Ray Stapp",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Steve Lampe",
    "winner_school": "Iowa State",
    "loser": "Jim Fiore",
    "loser_school": "Temple",
    "result": "MD 10-2"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Sergio Gonzales",
    "winner_school": "UCLA",
    "loser": "Terry Hall",
    "loser_school": "Cal Poly",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Steve Lampe",
    "loser_school": "Iowa State",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "5thPlace",
    "weight": "115",
    "bout": 531,
    "winner": "John Morley",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Steve Lampe",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Terry Hall",
    "winner_school": "Cal Poly",
    "loser": "Ray Stapp",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "John Miller",
    "winner_school": "Oregon",
    "loser": "Sergio Gonzales",
    "loser_school": "UCLA",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "RepConsA",
    "weight": "115",
    "bout": 262,
    "winner": "Greg Schmidt",
    "winner_school": "South Dakota State",
    "loser": "Bob Shines",
    "loser_school": "Arizona State",
    "result": "Fall 2:58"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "John Morley",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Stan Diamond",
    "loser_school": "Indiana State",
    "result": "Fall 8:56 SV"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Ray Stapp",
    "winner_school": "Oklahoma State",
    "loser": "Greg Schmidt",
    "loser_school": "South Dakota State",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Terry Hall",
    "winner_school": "Cal Poly",
    "loser": "John Morley",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Ray Stapp",
    "winner_school": "Oklahoma State",
    "loser": "Steve Lampe",
    "loser_school": "Iowa State",
    "result": "MD 12-2"
  },
  {
    "round": "Prelims",
    "weight": "123",
    "bout": 2,
    "winner": "Mike Watson",
    "winner_school": "Buffalo",
    "loser": "Mark Lavato",
    "loser_school": "Utah",
    "result": "MD 12-4"
  },
  {
    "round": "Prelims",
    "weight": "123",
    "bout": 1002,
    "winner": "Paul Betts",
    "winner_school": "Arizona",
    "loser": "Jon Wood",
    "loser_school": "Citadel",
    "result": "Fall 3:37"
  },
  {
    "round": "Prelims",
    "weight": "123",
    "bout": 2002,
    "winner": "Mike Schmauss",
    "winner_school": "Iowa State",
    "loser": "Stew Pruzansky",
    "loser_school": "Fairleigh Dickinson",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "123",
    "bout": 3002,
    "winner": "Lew Mason",
    "winner_school": "Navy",
    "loser": "Scott Clark",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 27,
    "winner": "Dick Kilpatrick",
    "winner_school": "Montana State",
    "loser": "Terry Magoon",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 28,
    "winner": "Frank Nichols",
    "winner_school": "Minnesota",
    "loser": "Charles O'Boyle",
    "loser_school": "Louisiana State",
    "result": "MD 24-3"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 29,
    "winner": "Wayne Fehlberg",
    "winner_school": "Brigham Young",
    "loser": "John Walter",
    "loser_school": "SUNY-Oswego",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 30,
    "winner": "Mike Schmauss",
    "winner_school": "Iowa State",
    "loser": "Felix Sanchez",
    "loser_school": "Air Force",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 31,
    "winner": "Steve Cavanaugh",
    "winner_school": "Missouri",
    "loser": "Carlos Fontanez",
    "loser_school": "Adams State",
    "result": "Fall 7:06"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 32,
    "winner": "Paul Betts",
    "winner_school": "Arizona",
    "loser": "Glenn Parke",
    "loser_school": "Illinois",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 33,
    "winner": "Stan Keeley",
    "winner_school": "Oklahoma",
    "loser": "Randy Berg",
    "loser_school": "Washington",
    "result": "Dec 13-12"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "Lew Mason",
    "winner_school": "Navy",
    "loser": "Al Takahashi",
    "loser_school": "Idaho State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 35,
    "winner": "Mike Watson",
    "winner_school": "Buffalo",
    "loser": "Mike A. Jones",
    "loser_school": "Oregon State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 36,
    "winner": "Ken Melchior",
    "winner_school": "Lock Haven",
    "loser": "Tim Cech",
    "loser_school": "Michigan",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 37,
    "winner": "Wes Caine",
    "winner_school": "Northern Illinois",
    "loser": "Marv Landes",
    "loser_school": "Kansas State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 38,
    "winner": "Mike McGilliard",
    "winner_school": "Michigan State",
    "loser": "Paul Soriano",
    "loser_school": "Wyoming",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 39,
    "winner": "Tom Bentz",
    "winner_school": "Iowa",
    "loser": "Jess Sandoval",
    "loser_school": "UCLA",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 40,
    "winner": "Ron Thrasher",
    "winner_school": "Oklahoma State",
    "loser": "James Lambson",
    "loser_school": "Arizona State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 41,
    "winner": "Dave Waters",
    "winner_school": "Lehigh",
    "loser": "Dave Moore",
    "loser_school": "Long Beach State",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 42,
    "winner": "Wayne Boyd",
    "winner_school": "Temple",
    "loser": "Bill Komoloske",
    "loser_school": "Colorado",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Frank Nichols",
    "winner_school": "Minnesota",
    "loser": "Dick Kilpatrick",
    "loser_school": "Montana State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Mike Schmauss",
    "winner_school": "Iowa State",
    "loser": "Wayne Fehlberg",
    "loser_school": "Brigham Young",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Steve Cavanaugh",
    "winner_school": "Missouri",
    "loser": "Paul Betts",
    "loser_school": "Arizona",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Stan Keeley",
    "winner_school": "Oklahoma",
    "loser": "Lew Mason",
    "loser_school": "Navy",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Ken Melchior",
    "winner_school": "Lock Haven",
    "loser": "Mike Watson",
    "loser_school": "Buffalo",
    "result": "Fall 4:15"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Wes Caine",
    "winner_school": "Northern Illinois",
    "loser": "Mike McGilliard",
    "loser_school": "Michigan State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Ron Thrasher",
    "winner_school": "Oklahoma State",
    "loser": "Tom Bentz",
    "loser_school": "Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Wayne Boyd",
    "winner_school": "Temple",
    "loser": "Dave Waters",
    "loser_school": "Lehigh",
    "result": "MD 13-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Mike Schmauss",
    "winner_school": "Iowa State",
    "loser": "Frank Nichols",
    "loser_school": "Minnesota",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Stan Keeley",
    "winner_school": "Oklahoma",
    "loser": "Steve Cavanaugh",
    "loser_school": "Missouri",
    "result": "MD 11-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Wes Caine",
    "winner_school": "Northern Illinois",
    "loser": "Ken Melchior",
    "loser_school": "Lock Haven",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Wayne Boyd",
    "winner_school": "Temple",
    "loser": "Ron Thrasher",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Stan Keeley",
    "winner_school": "Oklahoma",
    "loser": "Mike Schmauss",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Wayne Boyd",
    "winner_school": "Temple",
    "loser": "Wes Caine",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "5thPlace",
    "weight": "123",
    "bout": 532,
    "winner": "Mike Schmauss",
    "winner_school": "Iowa State",
    "loser": "Wes Caine",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Randy Berg",
    "winner_school": "Washington",
    "loser": "Dave Waters",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Wayne Boyd",
    "winner_school": "Temple",
    "loser": "Stan Keeley",
    "loser_school": "Oklahoma",
    "result": "Fall 7:20"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 263,
    "winner": "Randy Berg",
    "winner_school": "Washington",
    "loser": "Lew Mason",
    "loser_school": "Navy",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 264,
    "winner": "Dave Waters",
    "winner_school": "Lehigh",
    "loser": "Bill Komoloske",
    "loser_school": "Colorado",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Randy Berg",
    "winner_school": "Washington",
    "loser": "Steve Cavanaugh",
    "loser_school": "Missouri",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Dave Waters",
    "winner_school": "Lehigh",
    "loser": "Ron Thrasher",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Randy Berg",
    "winner_school": "Washington",
    "loser": "Mike Schmauss",
    "loser_school": "Iowa State",
    "result": "MD 10-1"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Dave Waters",
    "winner_school": "Lehigh",
    "loser": "Wes Caine",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-0"
  },
  {
    "round": "Prelims",
    "weight": "130",
    "bout": 3,
    "winner": "John Hahn",
    "winner_school": "UCLA",
    "loser": "Phil Parker",
    "loser_school": "Iowa State",
    "result": "Dec 13-7"
  },
  {
    "round": "Prelims",
    "weight": "130",
    "bout": 1003,
    "winner": "Len Groom",
    "winner_school": "Northern Colorado",
    "loser": "Glenn Anderson",
    "loser_school": "California-Berkeley",
    "result": "MD 11-2"
  },
  {
    "round": "Prelims",
    "weight": "130",
    "bout": 2003,
    "winner": "Larry Owings",
    "winner_school": "Washington",
    "loser": "Jim Pace",
    "loser_school": "NC State",
    "result": "Fall 3:15"
  },
  {
    "round": "Prelims",
    "weight": "130",
    "bout": 3003,
    "winner": "Jim Cook",
    "winner_school": "SIU-Carbondale",
    "loser": "Dan Silbaugh",
    "loser_school": "Wyoming",
    "result": "Dec 7-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 43,
    "winner": "Reid Lamphere",
    "winner_school": "Minnesota",
    "loser": "Scott Weaver",
    "loser_school": "Air Force",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 44,
    "winner": "Don Briggs",
    "winner_school": "Iowa",
    "loser": "Dale Stahl",
    "loser_school": "Navy",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 45,
    "winner": "Ed Jackson",
    "winner_school": "North Central Illinois",
    "loser": "Rudy Griego",
    "loser_school": "New Mexico",
    "result": "Fall 1:44"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 46,
    "winner": "Larry Owings",
    "winner_school": "Washington",
    "loser": "Mike McAdams",
    "loser_school": "Brigham Young",
    "result": "Fall 5:19"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 47,
    "winner": "Bryan McGann",
    "winner_school": "SUNY-Oswego",
    "loser": "Al Rivera",
    "loser_school": "Long Beach State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 48,
    "winner": "David McGuire",
    "winner_school": "Oklahoma",
    "loser": "Alan Uyeda",
    "loser_school": "Princeton",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 49,
    "winner": "Shane Foley",
    "winner_school": "Lock Haven",
    "loser": "Ron Junko",
    "loser_school": "Toledo",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "Mike Riley",
    "winner_school": "Oklahoma State",
    "loser": "Jim Cook",
    "loser_school": "SIU-Carbondale",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Len Groom",
    "winner_school": "Northern Colorado",
    "loser": "Mike Milkovich",
    "loser_school": "Kent State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 52,
    "winner": "Everette Barnard",
    "winner_school": "Indiana",
    "loser": "Russell Reid",
    "loser_school": "Virginia Tech",
    "result": "Fall 2:32"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 53,
    "winner": "Marv Reiland",
    "winner_school": "Northern Iowa",
    "loser": "Alan Maestas",
    "loser_school": "Kansas State",
    "result": "Fall 4:00"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 54,
    "winner": "John Belknap",
    "winner_school": "Michigan",
    "loser": "Del Lockhart",
    "loser_school": "Colorado",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 55,
    "winner": "John Hahn",
    "winner_school": "UCLA",
    "loser": "Fred Kemp",
    "loser_school": "Hofstra",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 56,
    "winner": "Bob Kawa",
    "winner_school": "Utah",
    "loser": "Bob Rodriguez",
    "loser_school": "Idaho State",
    "result": "Fall 2:20"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 57,
    "winner": "Mike Ellis",
    "winner_school": "Michigan State",
    "loser": "Roger Weigel",
    "loser_school": "Oregon State",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 58,
    "winner": "Tom Best",
    "winner_school": "East Stroudsburg",
    "loser": "Wayne Sigimoto",
    "loser_school": "Weber State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Reid Lamphere",
    "winner_school": "Minnesota",
    "loser": "Don Briggs",
    "loser_school": "Iowa",
    "result": "Dec 15-11"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Larry Owings",
    "winner_school": "Washington",
    "loser": "Ed Jackson",
    "loser_school": "North Central Illinois",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "David McGuire",
    "winner_school": "Oklahoma",
    "loser": "Bryan McGann",
    "loser_school": "SUNY-Oswego",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Mike Riley",
    "winner_school": "Oklahoma State",
    "loser": "Shane Foley",
    "loser_school": "Lock Haven",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Len Groom",
    "winner_school": "Northern Colorado",
    "loser": "Everette Barnard",
    "loser_school": "Indiana",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Marv Reiland",
    "winner_school": "Northern Iowa",
    "loser": "John Belknap",
    "loser_school": "Michigan",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "John Hahn",
    "winner_school": "UCLA",
    "loser": "Bob Kawa",
    "loser_school": "Utah",
    "result": "MD 18-8"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Tom Best",
    "winner_school": "East Stroudsburg",
    "loser": "Mike Ellis",
    "loser_school": "Michigan State",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Reid Lamphere",
    "winner_school": "Minnesota",
    "loser": "Larry Owings",
    "loser_school": "Washington",
    "result": "Dec 14-12"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "David McGuire",
    "winner_school": "Oklahoma",
    "loser": "Mike Riley",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Len Groom",
    "winner_school": "Northern Colorado",
    "loser": "Marv Reiland",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "John Hahn",
    "winner_school": "UCLA",
    "loser": "Tom Best",
    "loser_school": "East Stroudsburg",
    "result": "MD 20-4"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "David McGuire",
    "winner_school": "Oklahoma",
    "loser": "Reid Lamphere",
    "loser_school": "Minnesota",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Len Groom",
    "winner_school": "Northern Colorado",
    "loser": "John Hahn",
    "loser_school": "UCLA",
    "result": "Dec 10-6"
  },
  {
    "round": "5thPlace",
    "weight": "130",
    "bout": 533,
    "winner": "Mike Riley",
    "winner_school": "Oklahoma State",
    "loser": "Marv Reiland",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "John Hahn",
    "winner_school": "UCLA",
    "loser": "Reid Lamphere",
    "loser_school": "Minnesota",
    "result": "MD 15-7"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "David McGuire",
    "winner_school": "Oklahoma",
    "loser": "Len Groom",
    "loser_school": "Northern Colorado",
    "result": "Fall 4:32"
  },
  {
    "round": "RepConsP",
    "weight": "130",
    "bout": 1253,
    "winner": "Mike Milkovich",
    "winner_school": "Kent State",
    "loser": "Glenn Anderson",
    "loser_school": "California-Berkeley",
    "result": "Dec 11-5"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 265,
    "winner": "Bryan McGann",
    "winner_school": "SUNY-Oswego",
    "loser": "Alan Uyeda",
    "loser_school": "Princeton",
    "result": "Dec 8-3"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 266,
    "winner": "Everette Barnard",
    "winner_school": "Indiana",
    "loser": "Mike Milkovich",
    "loser_school": "Kent State",
    "result": "Fall 3:44"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Mike Riley",
    "winner_school": "Oklahoma State",
    "loser": "Bryan McGann",
    "loser_school": "SUNY-Oswego",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Marv Reiland",
    "winner_school": "Northern Iowa",
    "loser": "Everette Barnard",
    "loser_school": "Indiana",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Reid Lamphere",
    "winner_school": "Minnesota",
    "loser": "Mike Riley",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-3"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "John Hahn",
    "winner_school": "UCLA",
    "loser": "Marv Reiland",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-4"
  },
  {
    "round": "Prelims",
    "weight": "137",
    "bout": 4,
    "winner": "Terry Habecker",
    "winner_school": "Ithaca",
    "loser": "John Wadas",
    "loser_school": "Long Beach State",
    "result": "Fall 6:56"
  },
  {
    "round": "Prelims",
    "weight": "137",
    "bout": 1004,
    "winner": "Randy Stine",
    "winner_school": "Clarion",
    "loser": "Glen Takahashi",
    "loser_school": "Brigham Young",
    "result": "Dec 5-2"
  },
  {
    "round": "Prelims",
    "weight": "137",
    "bout": 2004,
    "winner": "Paul Stehman",
    "winner_school": "Northwest Missouri",
    "loser": "Larry Rippey",
    "loser_school": "Lock Haven",
    "result": "DEF"
  },
  {
    "round": "Prelims",
    "weight": "137",
    "bout": 3004,
    "winner": "Bob Hawkins",
    "winner_school": "Oregon State",
    "loser": "Pat Bolger",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "137",
    "bout": 4004,
    "winner": "Marty Willigan",
    "winner_school": "Hofstra",
    "loser": "Dave Librande",
    "loser_school": "Alabama",
    "result": "Fall 5:39"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 59,
    "winner": "Joe Carstensen",
    "winner_school": "Iowa",
    "loser": "Tom Ventes",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 60,
    "winner": "Steve Comiskey",
    "winner_school": "Navy",
    "loser": "Dan Smith",
    "loser_school": "Ball State",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 61,
    "winner": "Ron Russo",
    "winner_school": "Bloomsburg",
    "loser": "Dave Kling",
    "loser_school": "Indiana PA",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 62,
    "winner": "Dominic Cusimano",
    "winner_school": "California-Berkeley",
    "loser": "Randy Stine",
    "loser_school": "Clarion",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 63,
    "winner": "Dick Humphreys",
    "winner_school": "Indiana State",
    "loser": "Ron Lemmon",
    "loser_school": "Utah",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 64,
    "winner": "Jim Byrnes",
    "winner_school": "Army",
    "loser": "David Greenburg",
    "loser_school": "George Washington",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 65,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Mike Rubin",
    "loser_school": "Michigan",
    "result": "Fall 4:09"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "George Stover",
    "winner_school": "Virginia Tech",
    "loser": "Terry Habecker",
    "loser_school": "Ithaca",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 67,
    "winner": "Marty Willigan",
    "winner_school": "Hofstra",
    "loser": "Bob Hawkins",
    "loser_school": "Oregon State",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 68,
    "winner": "Dale Dittmar",
    "winner_school": "Colorado",
    "loser": "Victor Romero",
    "loser_school": "New Mexico",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 69,
    "winner": "Harlan Hankins",
    "winner_school": "Colorado State",
    "loser": "Steve Buttrey",
    "loser_school": "Northwestern",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 70,
    "winner": "Jim Moore",
    "winner_school": "Washington",
    "loser": "John Pegues",
    "loser_school": "Virginia",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 71,
    "winner": "Paul Stehman",
    "winner_school": "Northwest Missouri",
    "loser": "Dennis O'Brien",
    "loser_school": "Marquette",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 72,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Mike Rogers",
    "loser_school": "Northern Colorado",
    "result": "Dec 14-11"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 73,
    "winner": "James McDougal",
    "winner_school": "Kansas State",
    "loser": "James Dayton",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 74,
    "winner": "Gordon Levy",
    "winner_school": "Adams State",
    "loser": "Ron White",
    "loser_school": "Penn",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Steve Comiskey",
    "winner_school": "Navy",
    "loser": "Joe Carstensen",
    "loser_school": "Iowa",
    "result": "Dec 13-10"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Ron Russo",
    "winner_school": "Bloomsburg",
    "loser": "Dominic Cusimano",
    "loser_school": "California-Berkeley",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Dick Humphreys",
    "winner_school": "Indiana State",
    "loser": "Jim Byrnes",
    "loser_school": "Army",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "George Stover",
    "loser_school": "Virginia Tech",
    "result": "Fall 3:46"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Marty Willigan",
    "winner_school": "Hofstra",
    "loser": "Dale Dittmar",
    "loser_school": "Colorado",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Jim Moore",
    "winner_school": "Washington",
    "loser": "Harlan Hankins",
    "loser_school": "Colorado State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Paul Stehman",
    "loser_school": "Northwest Missouri",
    "result": "MD 17-8"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Gordon Levy",
    "winner_school": "Adams State",
    "loser": "James McDougal",
    "loser_school": "Kansas State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Ron Russo",
    "winner_school": "Bloomsburg",
    "loser": "Steve Comiskey",
    "loser_school": "Navy",
    "result": "Dec 12-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Dick Humphreys",
    "loser_school": "Indiana State",
    "result": "Fall 4:31"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Marty Willigan",
    "winner_school": "Hofstra",
    "loser": "Jim Moore",
    "loser_school": "Washington",
    "result": "Fall 5:32"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Gordon Levy",
    "loser_school": "Adams State",
    "result": "MD 11-2"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Ron Russo",
    "loser_school": "Bloomsburg",
    "result": "Fall 4:16"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Marty Willigan",
    "winner_school": "Hofstra",
    "loser": "Keith Lowrance",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "137",
    "bout": 534,
    "winner": "Bob Hawkins",
    "winner_school": "Oregon State",
    "loser": "Dick Humphreys",
    "loser_school": "Indiana State",
    "result": "MD 8-0"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Ron Russo",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Dan Gable",
    "winner_school": "Iowa State",
    "loser": "Marty Willigan",
    "loser_school": "Hofstra",
    "result": "Fall 4:17"
  },
  {
    "round": "RepConsP",
    "weight": "137",
    "bout": 1254,
    "winner": "Bob Hawkins",
    "winner_school": "Oregon State",
    "loser": "Dave Librande",
    "loser_school": "Alabama",
    "result": "M FOR"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 267,
    "winner": "Mike Rubin",
    "winner_school": "Michigan",
    "loser": "George Stover",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 268,
    "winner": "Bob Hawkins",
    "winner_school": "Oregon State",
    "loser": "Dale Dittmar",
    "loser_school": "Colorado",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Dick Humphreys",
    "winner_school": "Indiana State",
    "loser": "Mike Rubin",
    "loser_school": "Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Bob Hawkins",
    "winner_school": "Oregon State",
    "loser": "Jim Moore",
    "loser_school": "Washington",
    "result": "Dec 8-4"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Ron Russo",
    "winner_school": "Bloomsburg",
    "loser": "Dick Humphreys",
    "loser_school": "Indiana State",
    "result": "Dec 12-8"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Keith Lowrance",
    "winner_school": "Michigan State",
    "loser": "Bob Hawkins",
    "loser_school": "Oregon State",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 75,
    "winner": "Dave Pruzansky",
    "winner_school": "Temple",
    "loser": "Steve Warren",
    "loser_school": "California-Berkeley",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 76,
    "winner": "Bruce Shultz",
    "winner_school": "Washington",
    "loser": "Kermit Morrison",
    "loser_school": "Idaho State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 77,
    "winner": "Conrad Metcalf",
    "winner_school": "Colorado",
    "loser": "Dick Ford",
    "loser_school": "Washington State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 78,
    "winner": "James Lentz",
    "winner_school": "Indiana",
    "loser": "Curt Callahan",
    "loser_school": "Maryland",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 79,
    "winner": "Mike Fitzgerald",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Dennis Rott",
    "loser_school": "Illinois",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 80,
    "winner": "Phil Frey",
    "winner_school": "Oregon State",
    "loser": "Roger Virgil",
    "loser_school": "Adams State",
    "result": "Fall 6:29"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 81,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Jeff Winderlin",
    "loser_school": "Utah",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 82,
    "winner": "John Sattler",
    "winner_school": "Navy",
    "loser": "Bill Saye",
    "loser_school": "Ohio",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 83,
    "winner": "Don Yahn",
    "winner_school": "Iowa",
    "loser": "Pete Sandberg",
    "loser_school": "Winona State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 84,
    "winner": "Clyde Frantz",
    "winner_school": "Penn State",
    "loser": "Randy Noah",
    "loser_school": "Oregon",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 85,
    "winner": "Art Holland",
    "winner_school": "Arizona State",
    "loser": "Paul Brodmerkel",
    "loser_school": "Lock Haven",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 86,
    "winner": "Ray Murphy",
    "winner_school": "Oklahoma State",
    "loser": "Bill McBeth",
    "loser_school": "Army",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 87,
    "winner": "Clarence Seal",
    "winner_school": "Portland State",
    "loser": "Mike Cookas",
    "loser_school": "Northern Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 88,
    "winner": "Howard Hall",
    "winner_school": "Brigham Young",
    "loser": "Eric Greenburg",
    "loser_school": "Syracuse",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 89,
    "winner": "Duane Olson",
    "winner_school": "Iowa State",
    "loser": "Bob Freeman",
    "loser_school": "Massachusetts",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 90,
    "winner": "John Abajace",
    "winner_school": "Michigan State",
    "loser": "Steve Johnson",
    "loser_school": "Cal Poly",
    "result": "Fall 4:38"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 203,
    "winner": "Dave Pruzansky",
    "winner_school": "Temple",
    "loser": "Bruce Shultz",
    "loser_school": "Washington",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 204,
    "winner": "Conrad Metcalf",
    "winner_school": "Colorado",
    "loser": "James Lentz",
    "loser_school": "Indiana",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 205,
    "winner": "Phil Frey",
    "winner_school": "Oregon State",
    "loser": "Mike Fitzgerald",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 206,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "John Sattler",
    "loser_school": "Navy",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 207,
    "winner": "Clyde Frantz",
    "winner_school": "Penn State",
    "loser": "Don Yahn",
    "loser_school": "Iowa",
    "result": "Fall 3:46"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 208,
    "winner": "Ray Murphy",
    "winner_school": "Oklahoma State",
    "loser": "Art Holland",
    "loser_school": "Arizona State",
    "result": "MD 18-4"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 209,
    "winner": "Clarence Seal",
    "winner_school": "Portland State",
    "loser": "Howard Hall",
    "loser_school": "Brigham Young",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 210,
    "winner": "John Abajace",
    "winner_school": "Michigan State",
    "loser": "Duane Olson",
    "loser_school": "Iowa State",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 357,
    "winner": "Conrad Metcalf",
    "winner_school": "Colorado",
    "loser": "Dave Pruzansky",
    "loser_school": "Temple",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 358,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Phil Frey",
    "loser_school": "Oregon State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 359,
    "winner": "Ray Murphy",
    "winner_school": "Oklahoma State",
    "loser": "Clyde Frantz",
    "loser_school": "Penn State",
    "result": "Dec 12-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 360,
    "winner": "Clarence Seal",
    "winner_school": "Portland State",
    "loser": "John Abajace",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 469,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Conrad Metcalf",
    "loser_school": "Colorado",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 470,
    "winner": "Ray Murphy",
    "winner_school": "Oklahoma State",
    "loser": "Clarence Seal",
    "loser_school": "Portland State",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "145",
    "bout": 535,
    "winner": "Conrad Metcalf",
    "winner_school": "Colorado",
    "loser": "Clarence Seal",
    "loser_school": "Portland State",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "145",
    "bout": 545,
    "winner": "Clyde Frantz",
    "winner_school": "Penn State",
    "loser": "Phil Frey",
    "loser_school": "Oregon State",
    "result": "Dec 1-0"
  },
  {
    "round": "Finals",
    "weight": "145",
    "bout": 555,
    "winner": "Mike Grant",
    "winner_school": "Oklahoma",
    "loser": "Ray Murphy",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsA",
    "weight": "145",
    "bout": 269,
    "winner": "John Sattler",
    "winner_school": "Navy",
    "loser": "Jeff Winderlin",
    "loser_school": "Utah",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsA",
    "weight": "145",
    "bout": 270,
    "winner": "Bill McBeth",
    "winner_school": "Army",
    "loser": "Art Holland",
    "loser_school": "Arizona State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 389,
    "winner": "Phil Frey",
    "winner_school": "Oregon State",
    "loser": "John Sattler",
    "loser_school": "Navy",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 390,
    "winner": "Clyde Frantz",
    "winner_school": "Penn State",
    "loser": "Bill McBeth",
    "loser_school": "Army",
    "result": "Fall 5:06"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 429,
    "winner": "Phil Frey",
    "winner_school": "Oregon State",
    "loser": "Conrad Metcalf",
    "loser_school": "Colorado",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 430,
    "winner": "Clyde Frantz",
    "winner_school": "Penn State",
    "loser": "Clarence Seal",
    "loser_school": "Portland State",
    "result": "MD 9-0"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 6,
    "winner": "John Eagleton",
    "winner_school": "Oklahoma",
    "loser": "George Fredericks",
    "loser_school": "New Mexico",
    "result": "MD 14-2"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 1006,
    "winner": "Bob Christianson",
    "winner_school": "Navy",
    "loser": "Don Horton",
    "loser_school": "Air Force",
    "result": "Dec 3-0"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 2006,
    "winner": "Kim Snider",
    "winner_school": "Oregon State",
    "loser": "Otto Zeman",
    "loser_school": "Northwestern",
    "result": "Dec 7-2"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 3006,
    "winner": "Tim Shade",
    "winner_school": "Idaho State",
    "loser": "Mike Mazzitelli",
    "loser_school": "Northern Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "152",
    "bout": 4006,
    "winner": "Don Stahlman",
    "winner_school": "New Hampshire",
    "loser": "Harold Dahm",
    "loser_school": "Washington",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 91,
    "winner": "Rich Mihal",
    "winner_school": "Iowa",
    "loser": "Jay Arneson",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 92,
    "winner": "Allen Dunn",
    "winner_school": "UCLA",
    "loser": "Tim Shade",
    "loser_school": "Idaho State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 93,
    "winner": "Edward Thompson",
    "winner_school": "Bloomsburg",
    "loser": "Chris Samuelson",
    "loser_school": "Drake",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 94,
    "winner": "Carl Adams",
    "winner_school": "Iowa State",
    "loser": "Bob Christianson",
    "loser_school": "Navy",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 95,
    "winner": "Richard Casey",
    "winner_school": "SIU-Carbondale",
    "loser": "Tom Cooper",
    "loser_school": "Montana",
    "result": "Fall 3:38"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 96,
    "winner": "Bruce Trammel",
    "winner_school": "Ohio",
    "loser": "Dan Thurlow",
    "loser_school": "Colorado State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 97,
    "winner": "Len Borchers",
    "winner_school": "Stanford",
    "loser": "Sam Uhrick",
    "loser_school": "Western State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 98,
    "winner": "James Tanniehill",
    "winner_school": "Winona State",
    "loser": "John Eagleton",
    "loser_school": "Oklahoma",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 99,
    "winner": "Kim Snider",
    "winner_school": "Oregon State",
    "loser": "Bill Osborn",
    "loser_school": "Brigham Young",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 100,
    "winner": "Ralph Stansbury",
    "winner_school": "Long Beach State",
    "loser": "Phil Hutchinson",
    "loser_school": "Colorado",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 101,
    "winner": "Mel Crider",
    "winner_school": "Northern Colorado",
    "loser": "Felix Salinas",
    "loser_school": "Arizona State",
    "result": "Fall 7:23"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 102,
    "winner": "Gobel Kline",
    "winner_school": "Maryland",
    "loser": "Mark Hoffman",
    "loser_school": "Army",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 103,
    "winner": "Carl Ragland",
    "winner_school": "Old Dominion",
    "loser": "Don Stahlman",
    "loser_school": "New Hampshire",
    "result": "Fall 3:59"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 104,
    "winner": "Bob Ferraro",
    "winner_school": "Indiana State",
    "loser": "Ron Ouellet",
    "loser_school": "Michigan State",
    "result": "Fall 7:55"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 105,
    "winner": "John Finch",
    "winner_school": "Cal Poly",
    "loser": "Greg Giordano",
    "loser_school": "William & Mary",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 106,
    "winner": "Charles Shepherd",
    "winner_school": "Utah",
    "loser": "Brad Zemmel",
    "loser_school": "Missouri",
    "result": "Fall 8:50 SV"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 211,
    "winner": "Rich Mihal",
    "winner_school": "Iowa",
    "loser": "Allen Dunn",
    "loser_school": "UCLA",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 212,
    "winner": "Carl Adams",
    "winner_school": "Iowa State",
    "loser": "Edward Thompson",
    "loser_school": "Bloomsburg",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 213,
    "winner": "Bruce Trammel",
    "winner_school": "Ohio",
    "loser": "Richard Casey",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 214,
    "winner": "James Tanniehill",
    "winner_school": "Winona State",
    "loser": "Len Borchers",
    "loser_school": "Stanford",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 215,
    "winner": "Kim Snider",
    "winner_school": "Oregon State",
    "loser": "Ralph Stansbury",
    "loser_school": "Long Beach State",
    "result": "Fall 4:25"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 216,
    "winner": "Gobel Kline",
    "winner_school": "Maryland",
    "loser": "Mel Crider",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 217,
    "winner": "Bob Ferraro",
    "winner_school": "Indiana State",
    "loser": "Carl Ragland",
    "loser_school": "Old Dominion",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 218,
    "winner": "Charles Shepherd",
    "winner_school": "Utah",
    "loser": "John Finch",
    "loser_school": "Cal Poly",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 361,
    "winner": "Rich Mihal",
    "winner_school": "Iowa",
    "loser": "Carl Adams",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 362,
    "winner": "James Tanniehill",
    "winner_school": "Winona State",
    "loser": "Bruce Trammel",
    "loser_school": "Ohio",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 363,
    "winner": "Gobel Kline",
    "winner_school": "Maryland",
    "loser": "Kim Snider",
    "loser_school": "Oregon State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 364,
    "winner": "Bob Ferraro",
    "winner_school": "Indiana State",
    "loser": "Charles Shepherd",
    "loser_school": "Utah",
    "result": "Fall 7:45"
  },
  {
    "round": "SemiFinals",
    "weight": "152",
    "bout": 471,
    "winner": "Rich Mihal",
    "winner_school": "Iowa",
    "loser": "James Tanniehill",
    "loser_school": "Winona State",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "152",
    "bout": 472,
    "winner": "Gobel Kline",
    "winner_school": "Maryland",
    "loser": "Bob Ferraro",
    "loser_school": "Indiana State",
    "result": "Dec 4-0"
  },
  {
    "round": "5thPlace",
    "weight": "152",
    "bout": 536,
    "winner": "Carl Adams",
    "winner_school": "Iowa State",
    "loser": "Kim Snider",
    "loser_school": "Oregon State",
    "result": "Fall 3:32"
  },
  {
    "round": "3rdPlace",
    "weight": "152",
    "bout": 546,
    "winner": "James Tanniehill",
    "winner_school": "Winona State",
    "loser": "Bob Ferraro",
    "loser_school": "Indiana State",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "152",
    "bout": 556,
    "winner": "Gobel Kline",
    "winner_school": "Maryland",
    "loser": "Rich Mihal",
    "loser_school": "Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsA",
    "weight": "152",
    "bout": 271,
    "winner": "Jay Arneson",
    "winner_school": "Oklahoma State",
    "loser": "Allen Dunn",
    "loser_school": "UCLA",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "RepConsA",
    "weight": "152",
    "bout": 272,
    "winner": "Mark Hoffman",
    "winner_school": "Army",
    "loser": "Mel Crider",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsB",
    "weight": "152",
    "bout": 391,
    "winner": "Carl Adams",
    "winner_school": "Iowa State",
    "loser": "Jay Arneson",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "152",
    "bout": 392,
    "winner": "Kim Snider",
    "winner_school": "Oregon State",
    "loser": "Mark Hoffman",
    "loser_school": "Army",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsC",
    "weight": "152",
    "bout": 431,
    "winner": "James Tanniehill",
    "winner_school": "Winona State",
    "loser": "Carl Adams",
    "loser_school": "Iowa State",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsC",
    "weight": "152",
    "bout": 432,
    "winner": "Bob Ferraro",
    "winner_school": "Indiana State",
    "loser": "Kim Snider",
    "loser_school": "Oregon State",
    "result": "Dec 8-1"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 7,
    "winner": "Joe Wells",
    "winner_school": "Iowa",
    "loser": "Leonard Smith",
    "loser_school": "Stanford",
    "result": "Dec 7-0"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 1007,
    "winner": "Tom Duke",
    "winner_school": "SIU-Carbondale",
    "loser": "Scott Tennis",
    "loser_school": "Utah",
    "result": "Dec 2-0"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 2007,
    "winner": "Curt Alder",
    "winner_school": "UCLA",
    "loser": "Mark Faller",
    "loser_school": "Harvard",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 3007,
    "winner": "Jim Guyer",
    "winner_school": "Northern Iowa",
    "loser": "Phil McCartney",
    "loser_school": "Toledo",
    "result": "MD 11-0"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 4007,
    "winner": "Walt Strosser",
    "winner_school": "Temple",
    "loser": "Ron Diehl",
    "loser_school": "Air Force",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 5007,
    "winner": "Seth Norton",
    "winner_school": "Northwestern",
    "loser": "Tom Holliday",
    "loser_school": "Auburn",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 6007,
    "winner": "Bob Ahrens",
    "winner_school": "Navy",
    "loser": "Ray Wallace",
    "loser_school": "Washington",
    "result": "Dec 8-1"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 7007,
    "winner": "Doug Niebel",
    "winner_school": "Clarion",
    "loser": "Dave Pollard",
    "loser_school": "Cal Poly-Pomona",
    "result": "MD 12-2"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 8007,
    "winner": "Tom Muir",
    "winner_school": "Michigan State",
    "loser": "James West",
    "loser_school": "Cal State-Los Angeles",
    "result": "MD 9-1"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 9007,
    "winner": "Gary Rushing",
    "winner_school": "Arizona",
    "loser": "Jim Gildersleeve",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 11-4"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 10007,
    "winner": "Dan Layton",
    "winner_school": "Indiana State",
    "loser": "Judd Humphreys",
    "loser_school": "Brigham Young",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 11007,
    "winner": "Jim Mazzitelli",
    "winner_school": "Drake",
    "loser": "Steve Craycraft",
    "loser_school": "Miami Ohio",
    "result": "MD 11-0"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 12007,
    "winner": "Bob Tomasovic",
    "winner_school": "Oregon State",
    "loser": "Vern Hall",
    "loser_school": "Idaho State",
    "result": "Fall 6:20"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 13007,
    "winner": "Bill Stauffer",
    "winner_school": "Hofstra",
    "loser": "Gary Hill",
    "loser_school": "Wyoming",
    "result": "Fall 4:52"
  },
  {
    "round": "Prelims",
    "weight": "160",
    "bout": 14007,
    "winner": "Rich Bacastow",
    "winner_school": "Lehigh",
    "loser": "Gary Ramstetter",
    "loser_school": "San Jose State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 107,
    "winner": "Rick Thompson",
    "winner_school": "Missouri",
    "loser": "Walt Strosser",
    "loser_school": "Temple",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 108,
    "winner": "Jim Alexander",
    "winner_school": "Northern Colorado",
    "loser": "Bob Ahrens",
    "loser_school": "Navy",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 109,
    "winner": "Gary Rushing",
    "winner_school": "Arizona",
    "loser": "Tom Divine",
    "loser_school": "California-Berkeley",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 110,
    "winner": "Bill Stauffer",
    "winner_school": "Hofstra",
    "loser": "Mike Ferrin",
    "loser_school": "Weber State",
    "result": "Fall 5:32"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 111,
    "winner": "Cleo McGlory",
    "winner_school": "Oklahoma",
    "loser": "Doug Niebel",
    "loser_school": "Clarion",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 112,
    "winner": "Jim Guyer",
    "winner_school": "Northern Iowa",
    "loser": "Tom Quinn",
    "loser_school": "Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 113,
    "winner": "Bob Tomasovic",
    "winner_school": "Oregon State",
    "loser": "Val Landes",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 114,
    "winner": "Joe Wells",
    "winner_school": "Iowa",
    "loser": "Mike Nardotti",
    "loser_school": "Army",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 115,
    "winner": "Curt Alder",
    "winner_school": "UCLA",
    "loser": "Brad Williamson",
    "loser_school": "Colorado",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 116,
    "winner": "Joe Wiendl",
    "winner_school": "Wilkes",
    "loser": "Jim Mazzitelli",
    "loser_school": "Drake",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 117,
    "winner": "Richard Arnold",
    "winner_school": "Cal Poly",
    "loser": "Dan Layton",
    "loser_school": "Indiana State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 118,
    "winner": "Seth Norton",
    "winner_school": "Northwestern",
    "loser": "Al Handy",
    "loser_school": "Texas-El Paso",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 119,
    "winner": "Tom Muir",
    "winner_school": "Michigan State",
    "loser": "Joel Haan",
    "loser_school": "Maryland",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 120,
    "winner": "Gary Richards",
    "winner_school": "Kansas State",
    "loser": "Tom Duke",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 121,
    "winner": "Rich Bacastow",
    "winner_school": "Lehigh",
    "loser": "Bob Hobson",
    "loser_school": "William & Mary",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 122,
    "winner": "Dave Martin",
    "winner_school": "Iowa State",
    "loser": "Bob Griscom",
    "loser_school": "West Chester",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 219,
    "winner": "Rick Thompson",
    "winner_school": "Missouri",
    "loser": "Jim Alexander",
    "loser_school": "Northern Colorado",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 220,
    "winner": "Gary Rushing",
    "winner_school": "Arizona",
    "loser": "Bill Stauffer",
    "loser_school": "Hofstra",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 221,
    "winner": "Cleo McGlory",
    "winner_school": "Oklahoma",
    "loser": "Jim Guyer",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 222,
    "winner": "Joe Wells",
    "winner_school": "Iowa",
    "loser": "Bob Tomasovic",
    "loser_school": "Oregon State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 223,
    "winner": "Joe Wiendl",
    "winner_school": "Wilkes",
    "loser": "Curt Alder",
    "loser_school": "UCLA",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 224,
    "winner": "Seth Norton",
    "winner_school": "Northwestern",
    "loser": "Richard Arnold",
    "loser_school": "Cal Poly",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 225,
    "winner": "Tom Muir",
    "winner_school": "Michigan State",
    "loser": "Gary Richards",
    "loser_school": "Kansas State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 226,
    "winner": "Dave Martin",
    "winner_school": "Iowa State",
    "loser": "Rich Bacastow",
    "loser_school": "Lehigh",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 365,
    "winner": "Gary Rushing",
    "winner_school": "Arizona",
    "loser": "Rick Thompson",
    "loser_school": "Missouri",
    "result": "Dec 5-1 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 366,
    "winner": "Cleo McGlory",
    "winner_school": "Oklahoma",
    "loser": "Joe Wells",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 367,
    "winner": "Joe Wiendl",
    "winner_school": "Wilkes",
    "loser": "Seth Norton",
    "loser_school": "Northwestern",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 368,
    "winner": "Dave Martin",
    "winner_school": "Iowa State",
    "loser": "Tom Muir",
    "loser_school": "Michigan State",
    "result": "Dec 6-0"
  },
  {
    "round": "SemiFinals",
    "weight": "160",
    "bout": 473,
    "winner": "Cleo McGlory",
    "winner_school": "Oklahoma",
    "loser": "Gary Rushing",
    "loser_school": "Arizona",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "160",
    "bout": 474,
    "winner": "Dave Martin",
    "winner_school": "Iowa State",
    "loser": "Joe Wiendl",
    "loser_school": "Wilkes",
    "result": "Dec 4-0"
  },
  {
    "round": "5thPlace",
    "weight": "160",
    "bout": 537,
    "winner": "Joe Wiendl",
    "winner_school": "Wilkes",
    "loser": "Doug Niebel",
    "loser_school": "Clarion",
    "result": "Fall 1:15"
  },
  {
    "round": "3rdPlace",
    "weight": "160",
    "bout": 547,
    "winner": "Gary Rushing",
    "winner_school": "Arizona",
    "loser": "Tom Muir",
    "loser_school": "Michigan State",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "160",
    "bout": 557,
    "winner": "Cleo McGlory",
    "winner_school": "Oklahoma",
    "loser": "Dave Martin",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsA",
    "weight": "160",
    "bout": 273,
    "winner": "Doug Niebel",
    "winner_school": "Clarion",
    "loser": "Jim Guyer",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-6"
  },
  {
    "round": "RepConsA",
    "weight": "160",
    "bout": 274,
    "winner": "Bob Griscom",
    "winner_school": "West Chester",
    "loser": "Rich Bacastow",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsB",
    "weight": "160",
    "bout": 393,
    "winner": "Doug Niebel",
    "winner_school": "Clarion",
    "loser": "Joe Wells",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsB",
    "weight": "160",
    "bout": 394,
    "winner": "Tom Muir",
    "winner_school": "Michigan State",
    "loser": "Bob Griscom",
    "loser_school": "West Chester",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsC",
    "weight": "160",
    "bout": 433,
    "winner": "Gary Rushing",
    "winner_school": "Arizona",
    "loser": "Doug Niebel",
    "loser_school": "Clarion",
    "result": "Dec 8-7"
  },
  {
    "round": "RepConsC",
    "weight": "160",
    "bout": 434,
    "winner": "Tom Muir",
    "winner_school": "Michigan State",
    "loser": "Joe Wiendl",
    "loser_school": "Wilkes",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 8,
    "winner": "Peter Naff",
    "winner_school": "Oklahoma State",
    "loser": "Pat Karslake",
    "loser_school": "Michigan State",
    "result": "Dec 5-1"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1008,
    "winner": "John Amicucci",
    "winner_school": "SUNY-Maritime College",
    "loser": "Bill Hitesman",
    "loser_school": "Winona State",
    "result": "Fall 4:53"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 2008,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Jim Sukle",
    "loser_school": "Utah",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 123,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Steve Metro",
    "loser_school": "Louisiana State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 124,
    "winner": "Rick Sicilia",
    "winner_school": "Washington State",
    "loser": "Tom Potts",
    "loser_school": "Princeton",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 125,
    "winner": "Larry Laush",
    "winner_school": "Oklahoma",
    "loser": "Merrill Cook",
    "loser_school": "Brigham Young",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 126,
    "winner": "Mike Beaman",
    "winner_school": "Drake",
    "loser": "Rick Ortega",
    "loser_school": "New Mexico",
    "result": "Fall 6:13"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 127,
    "winner": "Bob Underwood",
    "winner_school": "SIU-Carbondale",
    "loser": "Jim Broncatello",
    "loser_school": "Cal Poly-Pomona",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 128,
    "winner": "Ben Welch",
    "winner_school": "Navy",
    "loser": "Pat North",
    "loser_school": "Northern Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 129,
    "winner": "Randy Umberger",
    "winner_school": "Maryland",
    "loser": "John Magoteaux",
    "loser_school": "Idaho State",
    "result": "Fall 4:01"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 130,
    "winner": "John Woods",
    "winner_school": "Cal Poly",
    "loser": "John Amicucci",
    "loser_school": "SUNY-Maritime College",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 131,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Jim Vandehey",
    "loser_school": "Oregon State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 132,
    "winner": "Bob Metz",
    "winner_school": "Lock Haven",
    "loser": "Walt Thatcher",
    "loser_school": "San Jose State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 133,
    "winner": "Steve DeVries",
    "winner_school": "Iowa",
    "loser": "Dave Wieland",
    "loser_school": "Kansas State",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 134,
    "winner": "Mark Goldberg",
    "winner_school": "Hofstra",
    "loser": "Gary West",
    "loser_school": "Oregon",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 135,
    "winner": "Jack Bentz",
    "winner_school": "Lehigh",
    "loser": "Peter Naff",
    "loser_school": "Oklahoma State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 136,
    "winner": "Bill Laursen",
    "winner_school": "Northwestern",
    "loser": "Brian Cawley",
    "loser_school": "West Chester",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 137,
    "winner": "Jim Scrabeck",
    "winner_school": "Air Force",
    "loser": "Greg Smith",
    "loser_school": "Army",
    "result": "Fall 6:54"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 138,
    "winner": "Don Marostica",
    "winner_school": "Colorado State",
    "loser": "Neil Cebell",
    "loser_school": "Washington",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 227,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Rick Sicilia",
    "loser_school": "Washington State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 228,
    "winner": "Larry Laush",
    "winner_school": "Oklahoma",
    "loser": "Mike Beaman",
    "loser_school": "Drake",
    "result": "Fall 5:32"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 229,
    "winner": "Ben Welch",
    "winner_school": "Navy",
    "loser": "Bob Underwood",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 230,
    "winner": "John Woods",
    "winner_school": "Cal Poly",
    "loser": "Randy Umberger",
    "loser_school": "Maryland",
    "result": "Dec 9-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 231,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Bob Metz",
    "loser_school": "Lock Haven",
    "result": "Fall 1:20"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 232,
    "winner": "Steve DeVries",
    "winner_school": "Iowa",
    "loser": "Mark Goldberg",
    "loser_school": "Hofstra",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 233,
    "winner": "Bill Laursen",
    "winner_school": "Northwestern",
    "loser": "Jack Bentz",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 234,
    "winner": "Don Marostica",
    "winner_school": "Colorado State",
    "loser": "Jim Scrabeck",
    "loser_school": "Air Force",
    "result": "Dec 6-1 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 369,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Larry Laush",
    "loser_school": "Oklahoma",
    "result": "Dec 9-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 370,
    "winner": "John Woods",
    "winner_school": "Cal Poly",
    "loser": "Ben Welch",
    "loser_school": "Navy",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 371,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Steve DeVries",
    "loser_school": "Iowa",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 372,
    "winner": "Bill Laursen",
    "winner_school": "Northwestern",
    "loser": "Don Marostica",
    "loser_school": "Colorado State",
    "result": "Dec 19-12"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 475,
    "winner": "John Woods",
    "winner_school": "Cal Poly",
    "loser": "Jesse Rawls",
    "loser_school": "Michigan",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 476,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "Bill Laursen",
    "loser_school": "Northwestern",
    "result": "Dec 9-3"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 538,
    "winner": "Ben Welch",
    "winner_school": "Navy",
    "loser": "Bill Laursen",
    "loser_school": "Northwestern",
    "result": "Dec 6-2"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 548,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Jim Vandehey",
    "loser_school": "Oregon State",
    "result": "MD 12-3"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 558,
    "winner": "Jason Smith",
    "winner_school": "Iowa State",
    "loser": "John Woods",
    "loser_school": "Cal Poly",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsP",
    "weight": "167",
    "bout": 1258,
    "winner": "Jim Vandehey",
    "winner_school": "Oregon State",
    "loser": "Jim Sukle",
    "loser_school": "Utah",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 275,
    "winner": "John Amicucci",
    "winner_school": "SUNY-Maritime College",
    "loser": "Randy Umberger",
    "loser_school": "Maryland",
    "result": "Dec 9-4"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 276,
    "winner": "Jim Vandehey",
    "winner_school": "Oregon State",
    "loser": "Bob Metz",
    "loser_school": "Lock Haven",
    "result": "MD 11-0"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 395,
    "winner": "Ben Welch",
    "winner_school": "Navy",
    "loser": "John Amicucci",
    "loser_school": "SUNY-Maritime College",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 396,
    "winner": "Jim Vandehey",
    "winner_school": "Oregon State",
    "loser": "Steve DeVries",
    "loser_school": "Iowa",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 435,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Ben Welch",
    "loser_school": "Navy",
    "result": "Dec 1-0"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 436,
    "winner": "Jim Vandehey",
    "winner_school": "Oregon State",
    "loser": "Bill Laursen",
    "loser_school": "Northwestern",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 9,
    "winner": "Charles Shivers",
    "winner_school": "Oklahoma",
    "loser": "Tom Gambill",
    "loser_school": "Auburn",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 139,
    "winner": "Chuck Jean",
    "winner_school": "Iowa State",
    "loser": "Larry Wollschlager",
    "loser_school": "Texas-El Paso",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 140,
    "winner": "Charles Bishop",
    "winner_school": "Long Beach State",
    "loser": "Ray Millward",
    "loser_school": "Idaho State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 141,
    "winner": "John Sorochinsky",
    "winner_school": "Brigham Young",
    "loser": "Kerry Keith",
    "loser_school": "Davidson",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 142,
    "winner": "Dave Labosky",
    "winner_school": "Penn",
    "loser": "Tom Lees",
    "loser_school": "Washington State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 143,
    "winner": "Verlyn Strellner",
    "winner_school": "Iowa",
    "loser": "Ed Bannat",
    "loser_school": "Navy",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 144,
    "winner": "Harry Bell",
    "winner_school": "Buffalo",
    "loser": "Kemper Chafin",
    "loser_school": "UC Davis",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 145,
    "winner": "Mike Patterson",
    "winner_school": "Northern Colorado",
    "loser": "Frank Calka",
    "loser_school": "Marquette",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 146,
    "winner": "Charles Shivers",
    "winner_school": "Oklahoma",
    "loser": "Bill Halsey",
    "loser_school": "UCLA",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 147,
    "winner": "Ben Cooper",
    "winner_school": "SIU-Carbondale",
    "loser": "Bob Gemignani",
    "loser_school": "Air Force",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 148,
    "winner": "Pete Cornell",
    "winner_school": "Michigan",
    "loser": "Tim Nichols",
    "loser_school": "Princeton",
    "result": "Fall 6:32"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 149,
    "winner": "Glen Engle",
    "winner_school": "Adams State",
    "loser": "Walt Podgurski",
    "loser_school": "Miami Ohio",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 150,
    "winner": "Ken Bos",
    "winner_school": "Cal Poly",
    "loser": "John Dinger",
    "loser_school": "Army",
    "result": "Fall 6:30"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 151,
    "winner": "Jack Zindel",
    "winner_school": "Michigan State",
    "loser": "Dick Wright",
    "loser_school": "Portland State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 152,
    "winner": "Jim Blackford",
    "winner_school": "Oregon State",
    "loser": "Gary Lehr",
    "loser_school": "SUNY-Oneonta",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 153,
    "winner": "Gerald Winnard",
    "winner_school": "Oklahoma State",
    "loser": "Bob Rust",
    "loser_school": "Syracuse",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 154,
    "winner": "Steve Roshek",
    "winner_school": "Utah",
    "loser": "Ron Tacha",
    "loser_school": "Kansas State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 235,
    "winner": "Chuck Jean",
    "winner_school": "Iowa State",
    "loser": "Charles Bishop",
    "loser_school": "Long Beach State",
    "result": "Fall 7:50"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 236,
    "winner": "John Sorochinsky",
    "winner_school": "Brigham Young",
    "loser": "Dave Labosky",
    "loser_school": "Penn",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 237,
    "winner": "Verlyn Strellner",
    "winner_school": "Iowa",
    "loser": "Harry Bell",
    "loser_school": "Buffalo",
    "result": "Fall 4:35"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 238,
    "winner": "Charles Shivers",
    "winner_school": "Oklahoma",
    "loser": "Mike Patterson",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 239,
    "winner": "Pete Cornell",
    "winner_school": "Michigan",
    "loser": "Ben Cooper",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 240,
    "winner": "Ken Bos",
    "winner_school": "Cal Poly",
    "loser": "Glen Engle",
    "loser_school": "Adams State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 241,
    "winner": "Jack Zindel",
    "winner_school": "Michigan State",
    "loser": "Jim Blackford",
    "loser_school": "Oregon State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 242,
    "winner": "Steve Roshek",
    "winner_school": "Utah",
    "loser": "Gerald Winnard",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 373,
    "winner": "Chuck Jean",
    "winner_school": "Iowa State",
    "loser": "John Sorochinsky",
    "loser_school": "Brigham Young",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 374,
    "winner": "Verlyn Strellner",
    "winner_school": "Iowa",
    "loser": "Charles Shivers",
    "loser_school": "Oklahoma",
    "result": "Fall 3:29"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 375,
    "winner": "Pete Cornell",
    "winner_school": "Michigan",
    "loser": "Ken Bos",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 376,
    "winner": "Jack Zindel",
    "winner_school": "Michigan State",
    "loser": "Steve Roshek",
    "loser_school": "Utah",
    "result": "Dec 8-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 477,
    "winner": "Chuck Jean",
    "winner_school": "Iowa State",
    "loser": "Verlyn Strellner",
    "loser_school": "Iowa",
    "result": "MD 13-4"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 478,
    "winner": "Pete Cornell",
    "winner_school": "Michigan",
    "loser": "Jack Zindel",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 539,
    "winner": "John Sorochinsky",
    "winner_school": "Brigham Young",
    "loser": "Jack Zindel",
    "loser_school": "Michigan State",
    "result": "Dec 9-8"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 549,
    "winner": "Verlyn Strellner",
    "winner_school": "Iowa",
    "loser": "Ken Bos",
    "loser_school": "Cal Poly",
    "result": "Dec 6-4"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 559,
    "winner": "Chuck Jean",
    "winner_school": "Iowa State",
    "loser": "Pete Cornell",
    "loser_school": "Michigan",
    "result": "Fall 7:25"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 277,
    "winner": "Charles Bishop",
    "winner_school": "Long Beach State",
    "loser": "Larry Wollschlager",
    "loser_school": "Texas-El Paso",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 278,
    "winner": "Ben Cooper",
    "winner_school": "SIU-Carbondale",
    "loser": "Tim Nichols",
    "loser_school": "Princeton",
    "result": "Dec 7-1"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 397,
    "winner": "John Sorochinsky",
    "winner_school": "Brigham Young",
    "loser": "Charles Bishop",
    "loser_school": "Long Beach State",
    "result": "Fall 4:53"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 398,
    "winner": "Ken Bos",
    "winner_school": "Cal Poly",
    "loser": "Ben Cooper",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 437,
    "winner": "Verlyn Strellner",
    "winner_school": "Iowa",
    "loser": "John Sorochinsky",
    "loser_school": "Brigham Young",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 438,
    "winner": "Ken Bos",
    "winner_school": "Cal Poly",
    "loser": "Jack Zindel",
    "loser_school": "Michigan State",
    "result": "Dec 14-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 155,
    "winner": "Joe Sperry",
    "winner_school": "Colorado State",
    "loser": "Ron House",
    "loser_school": "Eastern Kentucky",
    "result": "Fall 7:36"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 156,
    "winner": "Geoff Baum",
    "winner_school": "Oklahoma State",
    "loser": "Tim Wilmarth",
    "loser_school": "Oregon",
    "result": "Dec 5-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 157,
    "winner": "Gene Labal",
    "winner_school": "Nebraska",
    "loser": "Paul Gillespie",
    "loser_school": "Brigham Young",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 158,
    "winner": "Russ Hellickson",
    "winner_school": "Wisconsin",
    "loser": "Mike Ward",
    "loser_school": "Weber State",
    "result": "Fall 3:33"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 159,
    "winner": "Tom Kruse",
    "winner_school": "Ohio State",
    "loser": "Dave Pottruck",
    "loser_school": "Penn",
    "result": "Dec 14-8"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 160,
    "winner": "Tom Kline",
    "winner_school": "Cal Poly",
    "loser": "Joe Davis",
    "loser_school": "Utah",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 161,
    "winner": "Bob Buehler",
    "winner_school": "San Francisco State",
    "loser": "Gary Leinberger",
    "loser_school": "Lehigh",
    "result": "MD 21-8"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 162,
    "winner": "Hank Hawkins",
    "winner_school": "Lock Haven",
    "loser": "John Crow",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 163,
    "winner": "John Schneider",
    "winner_school": "Michigan State",
    "loser": "George Zguris",
    "loser_school": "Massachusetts",
    "result": "Fall 1:14"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 164,
    "winner": "Gary Salapa",
    "winner_school": "Ohio",
    "loser": "Jack Thrasher",
    "loser_school": "Air Force",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 165,
    "winner": "Robert Grimes",
    "winner_school": "San Diego State",
    "loser": "Carlton Tanaka",
    "loser_school": "Idaho State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 166,
    "winner": "Chris Feder",
    "winner_school": "C.W. Post",
    "loser": "Mike Latimer",
    "loser_school": "Washington State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 167,
    "winner": "John Salisbury",
    "winner_school": "California-Berkeley",
    "loser": "Charles Amato",
    "loser_school": "NC State",
    "result": "Fall 6:30"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 168,
    "winner": "Mike Donivan",
    "winner_school": "Oregon State",
    "loser": "Mark Kane",
    "loser_school": "Navy",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 169,
    "winner": "Jim Duschen",
    "winner_school": "Iowa State",
    "loser": "Vince Paolano",
    "loser_school": "Syracuse",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 170,
    "winner": "Paul Zander",
    "winner_school": "Iowa",
    "loser": "Dan Wintersteen",
    "loser_school": "Ball State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 243,
    "winner": "Geoff Baum",
    "winner_school": "Oklahoma State",
    "loser": "Joe Sperry",
    "loser_school": "Colorado State",
    "result": "Fall 5:00"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 244,
    "winner": "Russ Hellickson",
    "winner_school": "Wisconsin",
    "loser": "Gene Labal",
    "loser_school": "Nebraska",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 245,
    "winner": "Tom Kline",
    "winner_school": "Cal Poly",
    "loser": "Tom Kruse",
    "loser_school": "Ohio State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 246,
    "winner": "Bob Buehler",
    "winner_school": "San Francisco State",
    "loser": "Hank Hawkins",
    "loser_school": "Lock Haven",
    "result": "Fall 7:45"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 247,
    "winner": "John Schneider",
    "winner_school": "Michigan State",
    "loser": "Gary Salapa",
    "loser_school": "Ohio",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 248,
    "winner": "Robert Grimes",
    "winner_school": "San Diego State",
    "loser": "Chris Feder",
    "loser_school": "C.W. Post",
    "result": "Fall 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 249,
    "winner": "John Salisbury",
    "winner_school": "California-Berkeley",
    "loser": "Mike Donivan",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 250,
    "winner": "Jim Duschen",
    "winner_school": "Iowa State",
    "loser": "Paul Zander",
    "loser_school": "Iowa",
    "result": "MD 11-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 377,
    "winner": "Geoff Baum",
    "winner_school": "Oklahoma State",
    "loser": "Russ Hellickson",
    "loser_school": "Wisconsin",
    "result": "MD 11-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 378,
    "winner": "Tom Kline",
    "winner_school": "Cal Poly",
    "loser": "Bob Buehler",
    "loser_school": "San Francisco State",
    "result": "Dec 12-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 379,
    "winner": "Robert Grimes",
    "winner_school": "San Diego State",
    "loser": "John Schneider",
    "loser_school": "Michigan State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 380,
    "winner": "Jim Duschen",
    "winner_school": "Iowa State",
    "loser": "John Salisbury",
    "loser_school": "California-Berkeley",
    "result": "Fall 6:34"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 479,
    "winner": "Tom Kline",
    "winner_school": "Cal Poly",
    "loser": "Geoff Baum",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 480,
    "winner": "Robert Grimes",
    "winner_school": "San Diego State",
    "loser": "Jim Duschen",
    "loser_school": "Iowa State",
    "result": "Fall 7:21"
  },
  {
    "round": "5thPlace",
    "weight": "191",
    "bout": 540,
    "winner": "Jim Duschen",
    "winner_school": "Iowa State",
    "loser": "Geoff Baum",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 550,
    "winner": "Bob Buehler",
    "winner_school": "San Francisco State",
    "loser": "John Schneider",
    "loser_school": "Michigan State",
    "result": "Fall 3:38"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 560,
    "winner": "Tom Kline",
    "winner_school": "Cal Poly",
    "loser": "Robert Grimes",
    "loser_school": "San Diego State",
    "result": "Dec 8-4"
  },
  {
    "round": "RepConsA",
    "weight": "191",
    "bout": 279,
    "winner": "Tom Kruse",
    "winner_school": "Ohio State",
    "loser": "Joe Davis",
    "loser_school": "Utah",
    "result": "Fall 2:51"
  },
  {
    "round": "RepConsA",
    "weight": "191",
    "bout": 280,
    "winner": "Carlton Tanaka",
    "winner_school": "Idaho State",
    "loser": "Chris Feder",
    "loser_school": "C.W. Post",
    "result": "Dec 8-7"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 399,
    "winner": "Bob Buehler",
    "winner_school": "San Francisco State",
    "loser": "Tom Kruse",
    "loser_school": "Ohio State",
    "result": "MD 16-0"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 400,
    "winner": "John Schneider",
    "winner_school": "Michigan State",
    "loser": "Carlton Tanaka",
    "loser_school": "Idaho State",
    "result": "MD 14-4"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 439,
    "winner": "Bob Buehler",
    "winner_school": "San Francisco State",
    "loser": "Geoff Baum",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 440,
    "winner": "John Schneider",
    "winner_school": "Michigan State",
    "loser": "Jim Duschen",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 172,
    "winner": "Kent Osboe",
    "winner_school": "Northern Iowa",
    "loser": "Ken Oyer",
    "loser_school": "Fresno State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 173,
    "winner": "Ralph Sonntag",
    "winner_school": "Maryland",
    "loser": "Ken Tams",
    "loser_school": "Brigham Young",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 174,
    "winner": "James McCue",
    "winner_school": "Bloomsburg",
    "loser": "Bill Luttrell",
    "loser_school": "Oklahoma",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 176,
    "winner": "Ralph Cindrich",
    "winner_school": "Pittsburgh",
    "loser": "Al Blanshan",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 177,
    "winner": "Dan Kraft",
    "winner_school": "Northwestern",
    "loser": "Pat Mudron",
    "loser_school": "Notre Dame",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 178,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Tom Walter",
    "loser_school": "Kent State",
    "result": "Fall 1:00"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 179,
    "winner": "Wayne Beske",
    "winner_school": "Iowa State",
    "loser": "Roger Brown",
    "loser_school": "New Mexico",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 180,
    "winner": "Jeff Smith",
    "winner_school": "Michigan State",
    "loser": "Bob Knudsen",
    "loser_school": "Missouri",
    "result": "Fall 2:36"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 181,
    "winner": "Kal Tuinstra",
    "winner_school": "Drake",
    "loser": "Charles Dressel",
    "loser_school": "Princeton",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 182,
    "winner": "John Imrie",
    "winner_school": "Harvard",
    "loser": "Rick Cahill",
    "loser_school": "Arizona State",
    "result": "Fall 7:52"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 183,
    "winner": "John Ward",
    "winner_school": "Oklahoma State",
    "loser": "Darrell Brown",
    "loser_school": "Idaho State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 185,
    "winner": "Dale Stearns",
    "winner_school": "Iowa",
    "loser": "Tommy Lyons",
    "loser_school": "Georgia",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 251,
    "winner": "Kent Osboe",
    "winner_school": "Northern Iowa",
    "loser": "Dick Schumacher",
    "loser_school": "East Stroudsburg",
    "result": "Fall 3:32"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 252,
    "winner": "Ralph Sonntag",
    "winner_school": "Maryland",
    "loser": "James McCue",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 253,
    "winner": "Ralph Cindrich",
    "winner_school": "Pittsburgh",
    "loser": "Frank Holtry",
    "loser_school": "Utah",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 254,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Dan Kraft",
    "loser_school": "Northwestern",
    "result": "Fall 0:53"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 255,
    "winner": "Jeff Smith",
    "winner_school": "Michigan State",
    "loser": "Wayne Beske",
    "loser_school": "Iowa State",
    "result": "Fall 2:21"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 256,
    "winner": "John Imrie",
    "winner_school": "Harvard",
    "loser": "Kal Tuinstra",
    "loser_school": "Drake",
    "result": "Fall 4:06"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 257,
    "winner": "John Ward",
    "winner_school": "Oklahoma State",
    "loser": "Joe Shetzler",
    "loser_school": "Delaware",
    "result": "Fall 6:57"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 258,
    "winner": "Dale Stearns",
    "winner_school": "Iowa",
    "loser": "Henry Muller",
    "loser_school": "Oregon",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 381,
    "winner": "Kent Osboe",
    "winner_school": "Northern Iowa",
    "loser": "Ralph Sonntag",
    "loser_school": "Maryland",
    "result": "Fall 2:41"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 382,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Ralph Cindrich",
    "loser_school": "Pittsburgh",
    "result": "Fall 3:14"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 383,
    "winner": "Jeff Smith",
    "winner_school": "Michigan State",
    "loser": "John Imrie",
    "loser_school": "Harvard",
    "result": "Fall 1:11"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 384,
    "winner": "John Ward",
    "winner_school": "Oklahoma State",
    "loser": "Dale Stearns",
    "loser_school": "Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 481,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Kent Osboe",
    "loser_school": "Northern Iowa",
    "result": "MD 17-4"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 482,
    "winner": "Jeff Smith",
    "winner_school": "Michigan State",
    "loser": "John Ward",
    "loser_school": "Oklahoma State",
    "result": "Fall 3:42"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 541,
    "winner": "Wayne Beske",
    "winner_school": "Iowa State",
    "loser": "Kent Osboe",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 551,
    "winner": "John Ward",
    "winner_school": "Oklahoma State",
    "loser": "Ralph Cindrich",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-0"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 561,
    "winner": "Jess Lewis",
    "winner_school": "Oregon State",
    "loser": "Jeff Smith",
    "loser_school": "Michigan State",
    "result": "Dec 7-1"
  },
  {
    "round": "RepConsA",
    "weight": "UNL",
    "bout": 281,
    "winner": "Tom Walter",
    "winner_school": "Kent State",
    "loser": "Dan Kraft",
    "loser_school": "Northwestern",
    "result": "Fall 3:10"
  },
  {
    "round": "RepConsA",
    "weight": "UNL",
    "bout": 282,
    "winner": "Wayne Beske",
    "winner_school": "Iowa State",
    "loser": "Bob Knudsen",
    "loser_school": "Missouri",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 401,
    "winner": "Ralph Cindrich",
    "winner_school": "Pittsburgh",
    "loser": "Tom Walter",
    "loser_school": "Kent State",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 402,
    "winner": "Wayne Beske",
    "winner_school": "Iowa State",
    "loser": "John Imrie",
    "loser_school": "Harvard",
    "result": "Dec 9-3"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 441,
    "winner": "Ralph Cindrich",
    "winner_school": "Pittsburgh",
    "loser": "Kent Osboe",
    "loser_school": "Northern Iowa",
    "result": "MD 11-3"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 442,
    "winner": "John Ward",
    "winner_school": "Oklahoma State",
    "loser": "Wayne Beske",
    "loser_school": "Iowa State",
    "result": "Fall 1:01"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
