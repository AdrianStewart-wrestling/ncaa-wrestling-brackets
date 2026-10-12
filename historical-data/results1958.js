// 1958 NCAA Division I Wrestling Championships (3/28/1958 to 3/29/1958 at Wyoming). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1958 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1958-provenance.js
const resultData = [
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Charles Prunty",
    "winner_school": "Minnesota",
    "loser": "Keith Shrock",
    "loser_school": "Lewis & Clark",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "Juno Uyematsu",
    "loser_school": "Utah State",
    "result": "Fall 5:59"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Frank Altman",
    "winner_school": "Iowa State",
    "loser": "Dante Shapiro",
    "loser_school": "Carleton",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Larry Guldberg",
    "winner_school": "Northern Iowa",
    "loser": "Art McCall",
    "loser_school": "Temple",
    "result": "Dec 10-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Gene Williams",
    "winner_school": "Western State",
    "loser": "Charles Prunty",
    "loser_school": "Minnesota",
    "result": "Dec 9-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "Jack Thamert",
    "loser_school": "Minnesota State-Mankato",
    "result": "Fall 5:22"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Bob Taylor",
    "winner_school": "Oklahoma State",
    "loser": "Frank Altman",
    "loser_school": "Iowa State",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Ray Osborne",
    "winner_school": "Maryland",
    "loser": "Larry Guldberg",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "Gene Williams",
    "loser_school": "Western State",
    "result": "Fall 6:40"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Bob Taylor",
    "winner_school": "Oklahoma State",
    "loser": "Ray Osborne",
    "loser_school": "Maryland",
    "result": "Dec UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Gene Williams",
    "winner_school": "Western State",
    "loser": "Frank Altman",
    "loser_school": "Iowa State",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "Bob Taylor",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-3"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Juno Uyematsu",
    "winner_school": "Utah State",
    "loser": "Jack Thamert",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Gene Williams",
    "winner_school": "Western State",
    "loser": "Juno Uyematsu",
    "loser_school": "Utah State",
    "result": "Dec 9-4"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Frank Altman",
    "winner_school": "Iowa State",
    "loser": "Ray Osborne",
    "loser_school": "Maryland",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "Ray Haney",
    "winner_school": "Maryland",
    "loser": "George Munnich",
    "loser_school": "Kings Point",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Larry Moser",
    "winner_school": "Iowa",
    "loser": "Sal Archuleta",
    "loser_school": "Colorado",
    "result": "FOR"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Bob Herald",
    "winner_school": "Oklahoma State",
    "loser": "Alvin Christie",
    "loser_school": "Portland State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "John Johnston",
    "winner_school": "Penn State",
    "loser": "Jim Miller",
    "loser_school": "Kansas State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Ray Haney",
    "winner_school": "Maryland",
    "loser": "John Wager",
    "loser_school": "Toledo",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Paul Powell",
    "winner_school": "Pittsburgh",
    "loser": "Harold Simonek",
    "loser_school": "Cal Poly",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Don Bernard",
    "winner_school": "Iowa State",
    "loser": "Dick Mueller",
    "loser_school": "Minnesota",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Joel Neuschwander",
    "winner_school": "Oregon State",
    "loser": "Leonard Shelton",
    "loser_school": "Oklahoma",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Frank Jordan",
    "winner_school": "Northern Colorado",
    "loser": "Dave Auble",
    "loser_school": "Cornell",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Bob Herald",
    "winner_school": "Oklahoma State",
    "loser": "Larry Moser",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "John Johnston",
    "winner_school": "Penn State",
    "loser": "Ray Haney",
    "loser_school": "Maryland",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Paul Powell",
    "winner_school": "Pittsburgh",
    "loser": "Don Bernard",
    "loser_school": "Iowa State",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Joel Neuschwander",
    "winner_school": "Oregon State",
    "loser": "Frank Jordan",
    "loser_school": "Northern Colorado",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Bob Herald",
    "winner_school": "Oklahoma State",
    "loser": "John Johnston",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Paul Powell",
    "winner_school": "Pittsburgh",
    "loser": "Joel Neuschwander",
    "loser_school": "Oregon State",
    "result": "Dec 9-4"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "John Johnston",
    "winner_school": "Penn State",
    "loser": "Don Bernard",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Paul Powell",
    "winner_school": "Pittsburgh",
    "loser": "Bob Herald",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-4"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Larry Moser",
    "winner_school": "Iowa",
    "loser": "Alvin Christie",
    "loser_school": "Portland State",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Don Bernard",
    "winner_school": "Iowa State",
    "loser": "Harold Simonek",
    "loser_school": "Cal Poly",
    "result": "Fall 9:56 SV"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "John Johnston",
    "winner_school": "Penn State",
    "loser": "Larry Moser",
    "loser_school": "Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Don Bernard",
    "winner_school": "Iowa State",
    "loser": "Joel Neuschwander",
    "loser_school": "Oregon State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 46,
    "winner": "John Kelly",
    "winner_school": "Iowa",
    "loser": "Joe Dewey",
    "loser_school": "Brigham Young",
    "result": "Fall 5:24"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "Lynn Griffith",
    "winner_school": "Western State",
    "loser": "Allen Cutsforth",
    "loser_school": "Cornell Iowa",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Ted Pierce",
    "winner_school": "Oklahoma State",
    "loser": "Rex Whitlach",
    "loser_school": "Illinois",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Dale Madden",
    "winner_school": "Wyoming",
    "loser": "Jim Stone",
    "loser_school": "Washington State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Carmon Molino",
    "winner_school": "Cornell",
    "loser": "John Kelly",
    "loser_school": "Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Max Pearson",
    "winner_school": "Michigan",
    "loser": "Garth Rogers",
    "loser_school": "Colorado",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Lynn Griffith",
    "loser_school": "Western State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Ted Pierce",
    "winner_school": "Oklahoma State",
    "loser": "Clarence McNair",
    "loser_school": "Kent State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Jerry Headington",
    "loser_school": "Utah",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Vic DeFelice",
    "winner_school": "Pittsburgh",
    "loser": "John Vovos",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Don Stroud",
    "winner_school": "Michigan State",
    "loser": "Dick VanAuken",
    "loser_school": "Maryland",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Carmon Molino",
    "winner_school": "Cornell",
    "loser": "Dale Madden",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Max Pearson",
    "winner_school": "Michigan",
    "loser": "Stan Abel",
    "loser_school": "Oklahoma",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Ted Pierce",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Vic DeFelice",
    "winner_school": "Pittsburgh",
    "loser": "Don Stroud",
    "loser_school": "Michigan State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Max Pearson",
    "winner_school": "Michigan",
    "loser": "Carmon Molino",
    "loser_school": "Cornell",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Vic DeFelice",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Ted Pierce",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Max Pearson",
    "loser_school": "Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Garth Rogers",
    "loser_school": "Colorado",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Ted Pierce",
    "winner_school": "Oklahoma State",
    "loser": "Jerry Headington",
    "loser_school": "Utah",
    "result": "Dec 8-2"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Carmon Molino",
    "loser_school": "Cornell",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Ted Pierce",
    "winner_school": "Oklahoma State",
    "loser": "Vic DeFelice",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 62,
    "winner": "Lee Grubbs",
    "winner_school": "SIU-Carbondale",
    "loser": "Dick Storch",
    "loser_school": "Carleton",
    "result": "Fall 8:48"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 64,
    "winner": "Guy Guccione",
    "winner_school": "Penn State",
    "loser": "Ben Lloyd",
    "loser_school": "Utah",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Shelby Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Tom Winder",
    "loser_school": "Cornell Iowa",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 67,
    "winner": "Dick Santoro",
    "winner_school": "Lehigh",
    "loser": "Don Morrison",
    "loser_school": "Indiana",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 71,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Wilbur Bauer",
    "loser_school": "Portland State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Dean Corner",
    "winner_school": "Iowa State",
    "loser": "Bill Morris",
    "loser_school": "Utah State",
    "result": "Fall 2:49"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Gene Luttrell",
    "winner_school": "Iowa",
    "loser": "Lee Grubbs",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Joe Hammaker",
    "winner_school": "Lock Haven",
    "loser": "Guy Guccione",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Shelby Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Jerry Lane",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Dick Santoro",
    "winner_school": "Lehigh",
    "loser": "Joe Heller",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Carl Scott",
    "winner_school": "Wyoming",
    "loser": "Kent Chamberlain",
    "loser_school": "Brigham Young",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Max Mitchell",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Tom Hall",
    "winner_school": "Cal Poly",
    "loser": "Tim Boudreaux",
    "loser_school": "Beloit",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Dean Corner",
    "winner_school": "Iowa State",
    "loser": "Gene Luttrell",
    "loser_school": "Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Shelby Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Joe Hammaker",
    "loser_school": "Lock Haven",
    "result": "MD 14-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Dick Santoro",
    "winner_school": "Lehigh",
    "loser": "Carl Scott",
    "loser_school": "Wyoming",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Tom Hall",
    "loser_school": "Cal Poly",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Shelby Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Dean Corner",
    "loser_school": "Iowa State",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Dick Santoro",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Dick Santoro",
    "winner_school": "Lehigh",
    "loser": "Joe Hammaker",
    "loser_school": "Lock Haven",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Shelby Wilson",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-9"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 267,
    "winner": "Jerry Lane",
    "winner_school": "Northern Iowa",
    "loser": "Tom Winder",
    "loser_school": "Cornell Iowa",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 268,
    "winner": "Wilbur Bauer",
    "winner_school": "Portland State",
    "loser": "Max Mitchell",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-3"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Joe Hammaker",
    "winner_school": "Lock Haven",
    "loser": "Jerry Lane",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Tom Hall",
    "winner_school": "Cal Poly",
    "loser": "Wilbur Bauer",
    "loser_school": "Portland State",
    "result": "Fall 1:39"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Joe Hammaker",
    "winner_school": "Lock Haven",
    "loser": "Dean Corner",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Dick Santoro",
    "winner_school": "Lehigh",
    "loser": "Tom Hall",
    "loser_school": "Cal Poly",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 78,
    "winner": "Jack Anderson",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Jim Cooper",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 80,
    "winner": "Nick Biondi",
    "winner_school": "Maryland",
    "loser": "Charles Douglas",
    "loser_school": "Northern Colorado",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 82,
    "winner": "Earl Dearing",
    "winner_school": "Oregon",
    "loser": "Jerry Knight",
    "loser_school": "Utah",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 83,
    "winner": "Joe Gratto",
    "winner_school": "Lehigh",
    "loser": "Howard Reminick",
    "loser_school": "Toledo",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 85,
    "winner": "Pete Jones",
    "winner_school": "Wyoming",
    "loser": "Marvin Vandevender",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 87,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Jerry Canfield",
    "loser_school": "Cal Poly",
    "result": "Fall 3:30"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Werner Holzer",
    "winner_school": "Illinois",
    "loser": "Larry Gregory",
    "loser_school": "Oklahoma",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Dick Vincent",
    "winner_school": "Cornell",
    "loser": "Jack Anderson",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Nick Biondi",
    "winner_school": "Maryland",
    "loser": "Charles Patton",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Earl Dearing",
    "winner_school": "Oregon",
    "loser": "Simon Roberts",
    "loser_school": "Iowa",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Joe Gratto",
    "winner_school": "Lehigh",
    "loser": "Lyle Neville",
    "loser_school": "Colorado",
    "result": "Fall 7:06"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Pete Jones",
    "winner_school": "Wyoming",
    "loser": "Henry Shaw",
    "loser_school": "Lock Haven",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Jim Miller",
    "loser_school": "Carleton",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Nick Petronka",
    "winner_school": "Indiana",
    "loser": "Phil Kresge",
    "loser_school": "Brigham Young",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Dick Vincent",
    "winner_school": "Cornell",
    "loser": "Werner Holzer",
    "loser_school": "Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Earl Dearing",
    "winner_school": "Oregon",
    "loser": "Nick Biondi",
    "loser_school": "Maryland",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Joe Gratto",
    "winner_school": "Lehigh",
    "loser": "Pete Jones",
    "loser_school": "Wyoming",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Nick Petronka",
    "loser_school": "Indiana",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Dick Vincent",
    "winner_school": "Cornell",
    "loser": "Earl Dearing",
    "loser_school": "Oregon",
    "result": "Fall 9:57 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Joe Gratto",
    "loser_school": "Lehigh",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Jack Anderson",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Nick Petronka",
    "loser_school": "Indiana",
    "result": "Dec 5-0"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Dick Vincent",
    "loser_school": "Cornell",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 270,
    "winner": "Jerry Canfield",
    "winner_school": "Cal Poly",
    "loser": "Jim Miller",
    "loser_school": "Carleton",
    "result": "Fall 3:38"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "Jack Anderson",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Werner Holzer",
    "loser_school": "Illinois",
    "result": "Dec 7-6"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Nick Petronka",
    "winner_school": "Indiana",
    "loser": "Jerry Canfield",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Jack Anderson",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Earl Dearing",
    "loser_school": "Oregon",
    "result": "MD 10-0"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Nick Petronka",
    "winner_school": "Indiana",
    "loser": "Joe Gratto",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 92,
    "winner": "Dick Heaton",
    "winner_school": "Northern Iowa",
    "loser": "Everett McGlothlin",
    "loser_school": "Montana State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 94,
    "winner": "Ken Schless",
    "winner_school": "Utah State",
    "loser": "Bill Reiners",
    "loser_school": "Knox",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 96,
    "winner": "Sid Terry",
    "winner_school": "Oklahoma",
    "loser": "Jim Wirtz",
    "loser_school": "Colorado State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 97,
    "winner": "Dick Beattie",
    "winner_school": "Oklahoma State",
    "loser": "Gusav Gleiter",
    "loser_school": "South Dakota State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 98,
    "winner": "Stan Lampe",
    "winner_school": "Colorado",
    "loser": "Tom Halford",
    "loser_school": "Iowa",
    "result": "Fall 3:24"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 99,
    "winner": "Jim Beaton",
    "winner_school": "Oregon",
    "loser": "Jim Gass",
    "loser_school": "Cornell Iowa",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 101,
    "winner": "John Doyle",
    "winner_school": "Kansas State",
    "loser": "Jim Reifsteck",
    "loser_school": "Minnesota",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 103,
    "winner": "Burt Burger",
    "winner_school": "Springfield",
    "loser": "Dick Godfrey",
    "loser_school": "Utah",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 105,
    "winner": "Bill Gabbard",
    "winner_school": "Illinois",
    "loser": "John Driscoll",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Dick Heaton",
    "winner_school": "Northern Iowa",
    "loser": "George Gray",
    "loser_school": "Penn State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Steve Friedman",
    "winner_school": "Cornell",
    "loser": "Ken Schless",
    "loser_school": "Utah State",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Sid Terry",
    "winner_school": "Oklahoma",
    "loser": "Bon Moser",
    "loser_school": "Michigan State",
    "result": "Fall 2:17"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Dick Beattie",
    "winner_school": "Oklahoma State",
    "loser": "Stan Lampe",
    "loser_school": "Colorado",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Jim Beaton",
    "winner_school": "Oregon",
    "loser": "Carl Goodwin",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "John Doyle",
    "winner_school": "Kansas State",
    "loser": "Dave Johnson",
    "loser_school": "Pittsburgh",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Fred Brownlee",
    "winner_school": "Wyoming",
    "loser": "Burt Burger",
    "loser_school": "Springfield",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Dale Ketelsen",
    "winner_school": "Iowa State",
    "loser": "Bill Gabbard",
    "loser_school": "Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Dick Heaton",
    "winner_school": "Northern Iowa",
    "loser": "Steve Friedman",
    "loser_school": "Cornell",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Dick Beattie",
    "winner_school": "Oklahoma State",
    "loser": "Sid Terry",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Jim Beaton",
    "winner_school": "Oregon",
    "loser": "John Doyle",
    "loser_school": "Kansas State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Dale Ketelsen",
    "winner_school": "Iowa State",
    "loser": "Fred Brownlee",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Dick Beattie",
    "winner_school": "Oklahoma State",
    "loser": "Dick Heaton",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-1 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Dale Ketelsen",
    "winner_school": "Iowa State",
    "loser": "Jim Beaton",
    "loser_school": "Oregon",
    "result": "Dec 7-1"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Bill Gabbard",
    "winner_school": "Illinois",
    "loser": "Dick Heaton",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Dick Beattie",
    "winner_school": "Oklahoma State",
    "loser": "Dale Ketelsen",
    "loser_school": "Iowa State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 271,
    "winner": "Stan Lampe",
    "winner_school": "Colorado",
    "loser": "Gusav Gleiter",
    "loser_school": "South Dakota State",
    "result": "Dec 7-4"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Stan Lampe",
    "winner_school": "Colorado",
    "loser": "Sid Terry",
    "loser_school": "Oklahoma",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Bill Gabbard",
    "winner_school": "Illinois",
    "loser": "Fred Brownlee",
    "loser_school": "Wyoming",
    "result": "Dec 2-1 SV"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Dick Heaton",
    "winner_school": "Northern Iowa",
    "loser": "Stan Lampe",
    "loser_school": "Colorado",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Bill Gabbard",
    "winner_school": "Illinois",
    "loser": "Jim Beaton",
    "loser_school": "Oregon",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Dick Swerdfeger",
    "winner_school": "Colorado Mines",
    "loser": "Bernard Sullivan",
    "loser_school": "Oklahoma",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Fred Pitzner",
    "winner_school": "Dartmouth",
    "loser": "Gerry Gienger",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Ray McGuire",
    "winner_school": "Northern Colorado",
    "loser": "Ken Spagnola",
    "loser_school": "San Jose State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Duane Murty",
    "winner_school": "Oklahoma State",
    "loser": "Gary Burdick",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Jim Ferguson",
    "winner_school": "Michigan State",
    "loser": "Ken Koenig",
    "loser_school": "Kent State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Dick Swerdfeger",
    "winner_school": "Colorado Mines",
    "loser": "Bob Foster",
    "loser_school": "Harvard",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Dick Ballinger",
    "winner_school": "Wyoming",
    "loser": "Alex Skirpan",
    "loser_school": "Pittsburgh",
    "result": "Fall 4:09"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Bill Wright",
    "winner_school": "Minnesota",
    "loser": "Fred Pitzner",
    "loser_school": "Dartmouth",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Ellie Watkins",
    "winner_school": "Iowa State",
    "loser": "Ray McGuire",
    "loser_school": "Northern Colorado",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Roy Minter",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Bob Riehm",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Duane Murty",
    "winner_school": "Oklahoma State",
    "loser": "George Krupicka",
    "loser_school": "Oregon",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Ralph DiMuccio",
    "winner_school": "Springfield",
    "loser": "Fred Ford",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Jim Ferguson",
    "winner_school": "Michigan State",
    "loser": "Dick Swerdfeger",
    "loser_school": "Colorado Mines",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Dick Ballinger",
    "winner_school": "Wyoming",
    "loser": "Bill Wright",
    "loser_school": "Minnesota",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Roy Minter",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Ellie Watkins",
    "loser_school": "Iowa State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Duane Murty",
    "winner_school": "Oklahoma State",
    "loser": "Ralph DiMuccio",
    "loser_school": "Springfield",
    "result": "Dec 9-3"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Dick Ballinger",
    "winner_school": "Wyoming",
    "loser": "Jim Ferguson",
    "loser_school": "Michigan State",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Duane Murty",
    "winner_school": "Oklahoma State",
    "loser": "Roy Minter",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Jim Ferguson",
    "winner_school": "Michigan State",
    "loser": "Roy Minter",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Duane Murty",
    "winner_school": "Oklahoma State",
    "loser": "Dick Ballinger",
    "loser_school": "Wyoming",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 274,
    "winner": "George Krupicka",
    "winner_school": "Oregon",
    "loser": "Gary Burdick",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "Bill Wright",
    "winner_school": "Minnesota",
    "loser": "Alex Skirpan",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-6"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "George Krupicka",
    "winner_school": "Oregon",
    "loser": "Ralph DiMuccio",
    "loser_school": "Springfield",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Jim Ferguson",
    "winner_school": "Michigan State",
    "loser": "Bill Wright",
    "loser_school": "Minnesota",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Roy Minter",
    "winner_school": "Minnesota State-Mankato",
    "loser": "George Krupicka",
    "loser_school": "Oregon",
    "result": "Dec 1-0 SV"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Pete Davidson",
    "winner_school": "Lehigh",
    "loser": "Glenn Payne",
    "loser_school": "Utah",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Frank Powell",
    "winner_school": "Iowa State",
    "loser": "Lee Ramage",
    "loser_school": "Utah State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Russ Camilleri",
    "winner_school": "San Jose State",
    "loser": "John Nowlin",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Bob Benson",
    "winner_school": "Lock Haven",
    "loser": "Tom Burruss",
    "loser_school": "Virginia Tech",
    "result": "Fall 7:06"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Gary Kurdelmeier",
    "winner_school": "Iowa",
    "loser": "Ed Rath",
    "loser_school": "Colorado State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Merv Miller",
    "winner_school": "Cornell Iowa",
    "loser": "Pete Davidson",
    "loser_school": "Lehigh",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Dick Dean",
    "winner_school": "Maryland",
    "loser": "Al Blanshan",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Frank Powell",
    "winner_school": "Iowa State",
    "loser": "Wes Metzler",
    "loser_school": "Wyoming",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Tim Woodin",
    "winner_school": "Michigan State",
    "loser": "Russ Camilleri",
    "loser_school": "San Jose State",
    "result": "Fall 5:04"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Gary Haller",
    "winner_school": "Kansas State",
    "loser": "George Alfredson",
    "loser_school": "South Dakota State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "John Dustin",
    "winner_school": "Oregon State",
    "loser": "Bob Benson",
    "loser_school": "Lock Haven",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Frank Fiore",
    "winner_school": "Kent State",
    "loser": "Colbert Pepper",
    "loser_school": "Northern Colorado",
    "result": "Dec 9-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Gary Kurdelmeier",
    "winner_school": "Iowa",
    "loser": "Merv Miller",
    "loser_school": "Cornell Iowa",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Frank Powell",
    "winner_school": "Iowa State",
    "loser": "Dick Dean",
    "loser_school": "Maryland",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Tim Woodin",
    "winner_school": "Michigan State",
    "loser": "Gary Haller",
    "loser_school": "Kansas State",
    "result": "Fall 3:52"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "John Dustin",
    "winner_school": "Oregon State",
    "loser": "Frank Fiore",
    "loser_school": "Kent State",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Gary Kurdelmeier",
    "winner_school": "Iowa",
    "loser": "Frank Powell",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Tim Woodin",
    "winner_school": "Michigan State",
    "loser": "John Dustin",
    "loser_school": "Oregon State",
    "result": "Dec 3-0"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Frank Powell",
    "winner_school": "Iowa State",
    "loser": "John Dustin",
    "loser_school": "Oregon State",
    "result": "Dec 6-0"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Gary Kurdelmeier",
    "winner_school": "Iowa",
    "loser": "Tim Woodin",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Ed Rath",
    "winner_school": "Colorado State",
    "loser": "Merv Miller",
    "loser_school": "Cornell Iowa",
    "result": "Fall 5:31"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Russ Camilleri",
    "winner_school": "San Jose State",
    "loser": "Gary Haller",
    "loser_school": "Kansas State",
    "result": "Fall 4:46"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Frank Powell",
    "winner_school": "Iowa State",
    "loser": "Ed Rath",
    "loser_school": "Colorado State",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "John Dustin",
    "winner_school": "Oregon State",
    "loser": "Russ Camilleri",
    "loser_school": "San Jose State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 146,
    "winner": "Dave Dunlop",
    "winner_school": "Cornell",
    "loser": "Ellis Jensen",
    "loser_school": "South Dakota State",
    "result": "Fall 2:32"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Dick Kubes",
    "winner_school": "Minnesota State-Mankato",
    "loser": "John Sullivan",
    "loser_school": "Utah State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Pete Newell",
    "winner_school": "Colgate",
    "loser": "Vaughn Green",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Pete Veldman",
    "winner_school": "Minnesota",
    "loser": "Lyle Brownlee",
    "loser_school": "Wyoming",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Adnan Kaisy",
    "winner_school": "Oklahoma State",
    "loser": "Dave Dunlop",
    "loser_school": "Cornell",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Roger Pohlman",
    "winner_school": "Iowa State",
    "loser": "Bob Lee",
    "loser_school": "Utah",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "George Adams",
    "winner_school": "Colorado",
    "loser": "Delmec Scales",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Ken Maidlow",
    "winner_school": "Michigan State",
    "loser": "Gene White",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 242,
    "winner": "Jim Craig",
    "winner_school": "Iowa",
    "loser": "Bob Burge",
    "loser_school": "Colorado State",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Pete Newell",
    "winner_school": "Colgate",
    "loser": "Dick Kubes",
    "loser_school": "Minnesota State-Mankato",
    "result": "Fall 8:56"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Adnan Kaisy",
    "winner_school": "Oklahoma State",
    "loser": "Pete Veldman",
    "loser_school": "Minnesota",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Roger Pohlman",
    "winner_school": "Iowa State",
    "loser": "George Adams",
    "loser_school": "Colorado",
    "result": "Dec 1-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Ken Maidlow",
    "winner_school": "Michigan State",
    "loser": "Jim Craig",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Pete Newell",
    "winner_school": "Colgate",
    "loser": "Adnan Kaisy",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-0 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Ken Maidlow",
    "winner_school": "Michigan State",
    "loser": "Roger Pohlman",
    "loser_school": "Iowa State",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Jim Craig",
    "winner_school": "Iowa",
    "loser": "Adnan Kaisy",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Ken Maidlow",
    "winner_school": "Michigan State",
    "loser": "Pete Newell",
    "loser_school": "Colgate",
    "result": "Fall 4:52"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Vaughn Green",
    "winner_school": "Northern Colorado",
    "loser": "Dick Kubes",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Jim Craig",
    "winner_school": "Iowa",
    "loser": "Gene White",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Adnan Kaisy",
    "winner_school": "Oklahoma State",
    "loser": "Vaughn Green",
    "loser_school": "Northern Colorado",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Jim Craig",
    "winner_school": "Iowa",
    "loser": "Roger Pohlman",
    "loser_school": "Iowa State",
    "result": "Dec 1-0 SV"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "John Baum",
    "winner_school": "Michigan State",
    "loser": "Pat Lovell",
    "loser_school": "Cal Poly",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Earl Lynn",
    "winner_school": "Oklahoma State",
    "loser": "Herm Sieck",
    "loser_school": "Cornell Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Bob Norman",
    "winner_school": "Illinois",
    "loser": "Bob Steinke",
    "loser_school": "Utah State",
    "result": "Fall 7:36"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Barron Bremner",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Walter Goltl",
    "winner_school": "Northern Colorado",
    "loser": "Joe Dougherty",
    "loser_school": "Maryland",
    "result": "Fall 5:55"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Dan Brand",
    "winner_school": "Nebraska",
    "loser": "Marvin Kay",
    "loser_school": "Colorado Mines",
    "result": "Fall 6:53"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Dave Hanks",
    "winner_school": "Brigham Young",
    "loser": "John Baum",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Bob Norman",
    "winner_school": "Illinois",
    "loser": "Earl Lynn",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Walter Goltl",
    "loser_school": "Northern Colorado",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Dan Brand",
    "winner_school": "Nebraska",
    "loser": "Les Nader",
    "loser_school": "Kent State",
    "result": "Fall 7:19"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Bob Norman",
    "winner_school": "Illinois",
    "loser": "Dave Hanks",
    "loser_school": "Brigham Young",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Dan Brand",
    "loser_school": "Nebraska",
    "result": "Dec 2-0 SV"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Earl Lynn",
    "winner_school": "Oklahoma State",
    "loser": "Dan Brand",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Bob Norman",
    "winner_school": "Illinois",
    "loser": "Gordon Roesler",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 399,
    "winner": "Earl Lynn",
    "winner_school": "Oklahoma State",
    "loser": "Bob Steinke",
    "loser_school": "Utah State",
    "result": "Fall 5:46"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 400,
    "winner": "Walter Goltl",
    "winner_school": "Northern Colorado",
    "loser": "Barron Bremner",
    "loser_school": "Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Earl Lynn",
    "winner_school": "Oklahoma State",
    "loser": "Dave Hanks",
    "loser_school": "Brigham Young",
    "result": "Dec 7-3"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Dan Brand",
    "winner_school": "Nebraska",
    "loser": "Walter Goltl",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-3"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
