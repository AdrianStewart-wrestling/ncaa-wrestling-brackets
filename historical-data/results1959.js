// 1959 NCAA Division I Wrestling Championships (At Iowa). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1959 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1959-provenance.js
const resultData = [
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 18,
    "winner": "Don Huff",
    "winner_school": "Northern Colorado",
    "loser": "John Dooley",
    "loser_school": "Kansas State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 19,
    "winner": "Dick Wilson",
    "winner_school": "Toledo",
    "loser": "Regan Wright",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "Andy Fitch",
    "winner_school": "Yale",
    "loser": "Fred Lamb",
    "loser_school": "Indiana",
    "result": "Fall 3:55"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Mitsi Tamura",
    "winner_school": "Oregon State",
    "loser": "Fred Rittschoff",
    "loser_school": "Wisconsin",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Bob Taylor",
    "winner_school": "Oklahoma State",
    "loser": "Don Webster",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Don Huff",
    "winner_school": "Northern Colorado",
    "loser": "Ray Osborne",
    "loser_school": "Maryland",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Dick Wilson",
    "winner_school": "Toledo",
    "loser": "Bill Seery",
    "loser_school": "Colorado Mines",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "Jack Thamert",
    "winner_school": "Minnesota State",
    "loser": "Mike Grandstaff",
    "loser_school": "Virginia Tech",
    "result": "Fall 6:31"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Larry Moser",
    "winner_school": "Iowa",
    "loser": "Larry Goldberg",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 178,
    "winner": "Dick Williams",
    "winner_school": "Western State",
    "loser": "Jim Whitmer",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Andy Fitch",
    "winner_school": "Yale",
    "loser": "Mitsi Tamura",
    "loser_school": "Oregon State",
    "result": "Fall 6:58"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Bob Taylor",
    "winner_school": "Oklahoma State",
    "loser": "Don Huff",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Dick Wilson",
    "winner_school": "Toledo",
    "loser": "Jack Thamert",
    "loser_school": "Minnesota State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Larry Moser",
    "winner_school": "Iowa",
    "loser": "Dick Williams",
    "loser_school": "Western State",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Andy Fitch",
    "winner_school": "Yale",
    "loser": "Bob Taylor",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Dick Wilson",
    "winner_school": "Toledo",
    "loser": "Larry Moser",
    "loser_school": "Iowa",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Bob Taylor",
    "winner_school": "Oklahoma State",
    "loser": "Jack Thamert",
    "loser_school": "Minnesota State",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Andy Fitch",
    "winner_school": "Yale",
    "loser": "Dick Wilson",
    "loser_school": "Toledo",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "RepConsA",
    "weight": "115",
    "bout": 262,
    "winner": "Regan Wright",
    "winner_school": "Oklahoma",
    "loser": "Bill Seery",
    "loser_school": "Colorado Mines",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Mitsi Tamura",
    "winner_school": "Oregon State",
    "loser": "Fred Lamb",
    "loser_school": "Indiana",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Jack Thamert",
    "winner_school": "Minnesota State",
    "loser": "Regan Wright",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Bob Taylor",
    "winner_school": "Oklahoma State",
    "loser": "Mitsi Tamura",
    "loser_school": "Oregon State",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Jack Thamert",
    "winner_school": "Minnesota State",
    "loser": "Larry Moser",
    "loser_school": "Iowa",
    "result": "M FOR"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 28,
    "winner": "Jim Stagg",
    "winner_school": "Bowling Green",
    "loser": "Loren Wiesmer",
    "loser_school": "South Dakota State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 30,
    "winner": "Vince Garcia",
    "winner_school": "Iowa",
    "loser": "Cleon Cassel",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 32,
    "winner": "Doug Bingham",
    "winner_school": "Utah",
    "loser": "Jim Bledsoe",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "DuWayne Miller",
    "winner_school": "Oklahoma",
    "loser": "Ed Fletcher",
    "loser_school": "Oregon State",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 35,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Max Hawkins",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 37,
    "winner": "Ron Andrews",
    "winner_school": "Minnesota",
    "loser": "Bob Bowman",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 39,
    "winner": "Walt Martinez",
    "winner_school": "Western State",
    "loser": "Russ McClatchey",
    "loser_school": "Cornell Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Dave Auble",
    "winner_school": "Cornell",
    "loser": "Jim Stagg",
    "loser_school": "Bowling Green",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Vince Garcia",
    "winner_school": "Iowa",
    "loser": "Frank Jordan",
    "loser_school": "Northern Colorado",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Doug Bingham",
    "winner_school": "Utah",
    "loser": "Jim Garman",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "DuWayne Miller",
    "winner_school": "Oklahoma",
    "loser": "Maynard Nelson",
    "loser_school": "Minnesota State",
    "result": "Fall 5:44"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Stan Henderson",
    "loser_school": "Purdue",
    "result": "Fall 8:21"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Gary Hoagland",
    "winner_school": "Portland State",
    "loser": "Ron Andrews",
    "loser_school": "Minnesota",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Herb Karcher",
    "winner_school": "Wyoming",
    "loser": "Walt Martinez",
    "loser_school": "Western State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Dick VanAuken",
    "winner_school": "Maryland",
    "loser": "Dennis Friedericks",
    "loser_school": "Iowa State",
    "result": "Fall 7:03"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Dave Auble",
    "winner_school": "Cornell",
    "loser": "Vince Garcia",
    "loser_school": "Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Doug Bingham",
    "winner_school": "Utah",
    "loser": "DuWayne Miller",
    "loser_school": "Oklahoma",
    "result": "Dec 9-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Gary Hoagland",
    "loser_school": "Portland State",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Herb Karcher",
    "winner_school": "Wyoming",
    "loser": "Dick VanAuken",
    "loser_school": "Maryland",
    "result": "Dec 9-7"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Dave Auble",
    "winner_school": "Cornell",
    "loser": "Doug Bingham",
    "loser_school": "Utah",
    "result": "Dec 8-5"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Herb Karcher",
    "loser_school": "Wyoming",
    "result": "Dec 8-2"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Vince Garcia",
    "winner_school": "Iowa",
    "loser": "Herb Karcher",
    "loser_school": "Wyoming",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Dave Auble",
    "winner_school": "Cornell",
    "loser": "Larry Lauchle",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-4"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 264,
    "winner": "Max Hawkins",
    "winner_school": "Oklahoma State",
    "loser": "Stan Henderson",
    "loser_school": "Purdue",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Vince Garcia",
    "winner_school": "Iowa",
    "loser": "Jim Stagg",
    "loser_school": "Bowling Green",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Max Hawkins",
    "winner_school": "Oklahoma State",
    "loser": "Gary Hoagland",
    "loser_school": "Portland State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Vince Garcia",
    "winner_school": "Iowa",
    "loser": "Doug Bingham",
    "loser_school": "Utah",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Herb Karcher",
    "winner_school": "Wyoming",
    "loser": "Max Hawkins",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 46,
    "winner": "Leon Harbold",
    "winner_school": "Lehigh",
    "loser": "Norm Young",
    "loser_school": "Michigan State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 48,
    "winner": "Glen Hasse",
    "winner_school": "Colorado Mines",
    "loser": "Ray Haney",
    "loser_school": "Maryland",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Jerry Lane",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Dale Madden",
    "winner_school": "Wyoming",
    "loser": "Don Satchell",
    "loser_school": "Portland State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 55,
    "winner": "Lynn Griffith",
    "winner_school": "Western State",
    "loser": "Tom Chesbro",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Clarence McNair",
    "winner_school": "Kent State",
    "loser": "Dale Sullivan",
    "loser_school": "Bloomsburg",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Leon Harbold",
    "winner_school": "Lehigh",
    "loser": "Garth Rogers",
    "loser_school": "Colorado",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Dave Camaione",
    "winner_school": "Ohio State",
    "loser": "Glen Hasse",
    "loser_school": "Colorado Mines",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Lannie Bryant",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Dale Madden",
    "winner_school": "Wyoming",
    "loser": "Dick Storch",
    "loser_school": "Carleton",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Bill Taylor",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Lynn Griffith",
    "winner_school": "Western State",
    "loser": "Richard Waite",
    "loser_school": "Minnesota",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Brandon Glover",
    "winner_school": "Virginia Tech",
    "loser": "Dave Frame",
    "loser_school": "Minnesota State",
    "result": "MD 11-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Clarence McNair",
    "winner_school": "Kent State",
    "loser": "Leon Harbold",
    "loser_school": "Lehigh",
    "result": "MD 16-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Dave Camaione",
    "loser_school": "Ohio State",
    "result": "Dec 11-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Dale Madden",
    "loser_school": "Wyoming",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Brandon Glover",
    "winner_school": "Virginia Tech",
    "loser": "Lynn Griffith",
    "loser_school": "Western State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Clarence McNair",
    "loser_school": "Kent State",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Brandon Glover",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-0"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Brandon Glover",
    "winner_school": "Virginia Tech",
    "loser": "Clarence McNair",
    "loser_school": "Kent State",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Les Anderson",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 265,
    "winner": "Lannie Bryant",
    "winner_school": "Northern Colorado",
    "loser": "Jerry Lane",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Dave Camaione",
    "winner_school": "Ohio State",
    "loser": "Lannie Bryant",
    "loser_school": "Northern Colorado",
    "result": "Dec 10-3"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Dale Madden",
    "winner_school": "Wyoming",
    "loser": "Bill Taylor",
    "loser_school": "Cornell Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Clarence McNair",
    "winner_school": "Kent State",
    "loser": "Dave Camaione",
    "loser_school": "Ohio State",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Brandon Glover",
    "winner_school": "Virginia Tech",
    "loser": "Dale Madden",
    "loser_school": "Wyoming",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 60,
    "winner": "Gene Luttrell",
    "winner_school": "Iowa",
    "loser": "Harry Romig",
    "loser_school": "Lycoming",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 61,
    "winner": "Perrin Henderson",
    "winner_school": "North Carolina",
    "loser": "John Rollins",
    "loser_school": "Central Michigan",
    "result": "Dec 6-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 62,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Wilbur Bauer",
    "loser_school": "Portland State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 64,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Dick McCory",
    "loser_school": "Purdue",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 65,
    "winner": "Don Woehrle",
    "winner_school": "Northwestern",
    "loser": "Lance Masters",
    "loser_school": "DePauw",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Lyle Neville",
    "winner_school": "Colorado",
    "loser": "Tom Hall",
    "loser_school": "Cal Poly",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 67,
    "winner": "Paul Pinnt",
    "winner_school": "Colorado Mines",
    "loser": "Joe Heller",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 68,
    "winner": "Shelby Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Dick Rimple",
    "loser_school": "Bloomsburg",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 69,
    "winner": "Charles Coffee",
    "winner_school": "Minnesota",
    "loser": "Bill Corn",
    "loser_school": "Western State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 71,
    "winner": "Dick Zboray",
    "winner_school": "Indiana",
    "loser": "Carl Scott",
    "loser_school": "Wyoming",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 73,
    "winner": "Dick Santoro",
    "winner_school": "Lehigh",
    "loser": "Ron Youngbauer",
    "loser_school": "Minnesota State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Ramon West",
    "winner_school": "RIT",
    "loser": "Gene Luttrell",
    "loser_school": "Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Perrin Henderson",
    "loser_school": "North Carolina",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Dick Frankenberger",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Don Woehrle",
    "winner_school": "Northwestern",
    "loser": "Lyle Neville",
    "loser_school": "Colorado",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Shelby Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Paul Pinnt",
    "loser_school": "Colorado Mines",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Charles Coffee",
    "winner_school": "Minnesota",
    "loser": "Pat Semary",
    "loser_school": "Kent State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Dick Zboray",
    "winner_school": "Indiana",
    "loser": "Larry Word",
    "loser_school": "Kansas State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Dick Santoro",
    "winner_school": "Lehigh",
    "loser": "Henry Shaw",
    "loser_school": "Lock Haven",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Ramon West",
    "loser_school": "RIT",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Don Woehrle",
    "loser_school": "Northwestern",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Shelby Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Charles Coffee",
    "loser_school": "Minnesota",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Dick Zboray",
    "winner_school": "Indiana",
    "loser": "Dick Santoro",
    "loser_school": "Lehigh",
    "result": "Dec 2-0"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Paul Aubrey",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Shelby Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Dick Zboray",
    "loser_school": "Indiana",
    "result": "MD 16-2"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Charles Coffee",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Shelby Wilson",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-3"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 267,
    "winner": "Wilbur Bauer",
    "winner_school": "Portland State",
    "loser": "Perrin Henderson",
    "loser_school": "North Carolina",
    "result": "MD 9-0"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 268,
    "winner": "Paul Pinnt",
    "winner_school": "Colorado Mines",
    "loser": "Dick Rimple",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Wilbur Bauer",
    "winner_school": "Portland State",
    "loser": "Ramon West",
    "loser_school": "RIT",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Charles Coffee",
    "winner_school": "Minnesota",
    "loser": "Paul Pinnt",
    "loser_school": "Colorado Mines",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Wilbur Bauer",
    "loser_school": "Portland State",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Charles Coffee",
    "winner_school": "Minnesota",
    "loser": "Dick Zboray",
    "loser_school": "Indiana",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 76,
    "winner": "Bill Berry",
    "winner_school": "Washington State",
    "loser": "Bob Tallman",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 78,
    "winner": "Bob Bubb",
    "winner_school": "Pittsburgh",
    "loser": "Jerry Huffman",
    "loser_school": "RIT",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 80,
    "winner": "John Noble",
    "winner_school": "Harvard",
    "loser": "Brian Kenyon",
    "loser_school": "Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 82,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Ralph Clark",
    "loser_school": "Lock Haven",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 83,
    "winner": "Bob Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Charles Patton",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 85,
    "winner": "Harold Thompson",
    "winner_school": "Nebraska",
    "loser": "Don Mall",
    "loser_school": "San Jose State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 87,
    "winner": "Bill Peterson",
    "winner_school": "Cornell Iowa",
    "loser": "Jim Hoppel",
    "loser_school": "Bowling Green",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 89,
    "winner": "Jerry Frude",
    "winner_school": "Wyoming",
    "loser": "Sam Minor",
    "loser_school": "Penn State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Bill Berry",
    "winner_school": "Washington State",
    "loser": "Barney Bales",
    "loser_school": "Colorado",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Bob Bubb",
    "winner_school": "Pittsburgh",
    "loser": "Bob Pac",
    "loser_school": "Lycoming",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Werner Holzer",
    "winner_school": "Illinois",
    "loser": "John Noble",
    "loser_school": "Harvard",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Neil DeLozier",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Bob Wilson",
    "winner_school": "Oklahoma State",
    "loser": "John Driscoll",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Gary Riter",
    "winner_school": "Colorado State",
    "loser": "Harold Thompson",
    "loser_school": "Nebraska",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Bill Peterson",
    "winner_school": "Cornell Iowa",
    "loser": "Clair Gard",
    "loser_school": "Kansas State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Jerry Frude",
    "winner_school": "Wyoming",
    "loser": "Jim Innis",
    "loser_school": "Wisconsin",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Bob Bubb",
    "winner_school": "Pittsburgh",
    "loser": "Bill Berry",
    "loser_school": "Washington State",
    "result": "Dec 10-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Werner Holzer",
    "loser_school": "Illinois",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Bob Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Gary Riter",
    "loser_school": "Colorado State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Jerry Frude",
    "winner_school": "Wyoming",
    "loser": "Bill Peterson",
    "loser_school": "Cornell Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Bob Bubb",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-1"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Jerry Frude",
    "winner_school": "Wyoming",
    "loser": "Bob Wilson",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-8"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Bob Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Bob Bubb",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-1"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Jerry Frude",
    "loser_school": "Wyoming",
    "result": "Dec 9-3"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 269,
    "winner": "Ralph Clark",
    "winner_school": "Lock Haven",
    "loser": "Neil DeLozier",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 270,
    "winner": "Sam Minor",
    "winner_school": "Penn State",
    "loser": "Jim Innis",
    "loser_school": "Wisconsin",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "Ralph Clark",
    "winner_school": "Lock Haven",
    "loser": "Werner Holzer",
    "loser_school": "Illinois",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Sam Minor",
    "winner_school": "Penn State",
    "loser": "Bill Peterson",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Bob Bubb",
    "winner_school": "Pittsburgh",
    "loser": "Ralph Clark",
    "loser_school": "Lock Haven",
    "result": "Dec 2-1 SV"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Bob Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Sam Minor",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 92,
    "winner": "Art Kraft",
    "winner_school": "Northwestern",
    "loser": "Frank Hankin",
    "loser_school": "Utah",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 93,
    "winner": "Al Gibbons",
    "winner_school": "Carleton",
    "loser": "Brad Tate",
    "loser_school": "Adams State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 94,
    "winner": "Fritz Fivian",
    "winner_school": "Oregon State",
    "loser": "Gerald Ray",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 96,
    "winner": "Bob Rohm",
    "winner_school": "Bloomsburg",
    "loser": "Ron Fretheim",
    "loser_school": "Luther",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 97,
    "winner": "Tom Robinson",
    "winner_school": "Purdue",
    "loser": "Dick Besnier",
    "loser_school": "Maryland",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 98,
    "winner": "Dick Beattie",
    "winner_school": "Oklahoma State",
    "loser": "Jim Gass",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 99,
    "winner": "Harry Schlieff",
    "winner_school": "Minnesota",
    "loser": "Dave Abraham",
    "loser_school": "Colorado",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 100,
    "winner": "Tom Gabbard",
    "winner_school": "Illinois",
    "loser": "Buddy Snyder",
    "loser_school": "Wyoming",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 101,
    "winner": "Sid Terry",
    "winner_school": "Oklahoma",
    "loser": "Bob Gaskill",
    "loser_school": "Colorado State",
    "result": "Fall 5:11"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 103,
    "winner": "Ellie Watkins",
    "winner_school": "Iowa State",
    "loser": "John Kreamer",
    "loser_school": "Lock Haven",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 105,
    "winner": "Herman Ayres",
    "winner_school": "SIU-Carbondale",
    "loser": "Francis Flesner",
    "loser_school": "South Dakota State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Art Kraft",
    "winner_school": "Northwestern",
    "loser": "Steve Friedman",
    "loser_school": "Cornell",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Fritz Fivian",
    "winner_school": "Oregon State",
    "loser": "Al Gibbons",
    "loser_school": "Carleton",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Bob Rohm",
    "winner_school": "Bloomsburg",
    "loser": "Burt Burger",
    "loser_school": "Springfield",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Dick Beattie",
    "winner_school": "Oklahoma State",
    "loser": "Tom Robinson",
    "loser_school": "Purdue",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Harry Schlieff",
    "winner_school": "Minnesota",
    "loser": "Tom Gabbard",
    "loser_school": "Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Sid Terry",
    "winner_school": "Oklahoma",
    "loser": "Bob Oury",
    "loser_school": "Wheaton",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Ellie Watkins",
    "winner_school": "Iowa State",
    "loser": "Joe Mullins",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Thad Turner",
    "winner_school": "Lehigh",
    "loser": "Herman Ayres",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Art Kraft",
    "winner_school": "Northwestern",
    "loser": "Fritz Fivian",
    "loser_school": "Oregon State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Dick Beattie",
    "winner_school": "Oklahoma State",
    "loser": "Bob Rohm",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Sid Terry",
    "winner_school": "Oklahoma",
    "loser": "Harry Schlieff",
    "loser_school": "Minnesota",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Ellie Watkins",
    "winner_school": "Iowa State",
    "loser": "Thad Turner",
    "loser_school": "Lehigh",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Dick Beattie",
    "winner_school": "Oklahoma State",
    "loser": "Art Kraft",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Sid Terry",
    "winner_school": "Oklahoma",
    "loser": "Ellie Watkins",
    "loser_school": "Iowa State",
    "result": "Dec 5-4 SV"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Ellie Watkins",
    "winner_school": "Iowa State",
    "loser": "Art Kraft",
    "loser_school": "Northwestern",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Dick Beattie",
    "winner_school": "Oklahoma State",
    "loser": "Sid Terry",
    "loser_school": "Oklahoma",
    "result": "Dec 8-5"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 271,
    "winner": "Jim Gass",
    "winner_school": "Cornell Iowa",
    "loser": "Tom Robinson",
    "loser_school": "Purdue",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 272,
    "winner": "Bob Gaskill",
    "winner_school": "Colorado State",
    "loser": "Bob Oury",
    "loser_school": "Wheaton",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Jim Gass",
    "winner_school": "Cornell Iowa",
    "loser": "Bob Rohm",
    "loser_school": "Bloomsburg",
    "result": "Fall 5:46"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Bob Gaskill",
    "winner_school": "Colorado State",
    "loser": "Harry Schlieff",
    "loser_school": "Minnesota",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Art Kraft",
    "winner_school": "Northwestern",
    "loser": "Jim Gass",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Ellie Watkins",
    "winner_school": "Iowa State",
    "loser": "Bob Gaskill",
    "loser_school": "Colorado State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Jim Ferguson",
    "winner_school": "Michigan State",
    "loser": "George Gray",
    "loser_school": "Penn State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Lowell Glynn",
    "winner_school": "Minnesota State",
    "loser": "Ken Koenig",
    "loser_school": "Kent State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Bob Foster",
    "winner_school": "Harvard",
    "loser": "Bill Koehen",
    "loser_school": "Minnesota",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Jerry Allen",
    "winner_school": "Kansas State",
    "loser": "Norm Hoffman",
    "loser_school": "California-Berkeley",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Tom Alberts",
    "winner_school": "Pittsburgh",
    "loser": "Fred Redeker",
    "loser_school": "Indiana",
    "result": "Fall 2:58"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Ed Hamer",
    "winner_school": "Lehigh",
    "loser": "Tom Green",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Jim Ferguson",
    "winner_school": "Michigan State",
    "loser": "Verl Castro",
    "loser_school": "Utah",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Lowell Glynn",
    "winner_school": "Minnesota State",
    "loser": "Dennis Fitzgerald",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Duane Murty",
    "winner_school": "Oklahoma State",
    "loser": "Bob Foster",
    "loser_school": "Harvard",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Dick Ballinger",
    "winner_school": "Wyoming",
    "loser": "Jerry Allen",
    "loser_school": "Kansas State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Don Conway",
    "winner_school": "Oregon State",
    "loser": "Vince Gonino",
    "loser_school": "Ohio State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Tom Alberts",
    "winner_school": "Pittsburgh",
    "loser": "Bob Godwin",
    "loser_school": "DePauw",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Dick Dean",
    "winner_school": "Maryland",
    "loser": "Tom Miller",
    "loser_school": "Yale",
    "result": "Dec 9-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Ed Hamer",
    "winner_school": "Lehigh",
    "loser": "Jim Ferguson",
    "loser_school": "Michigan State",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Duane Murty",
    "winner_school": "Oklahoma State",
    "loser": "Lowell Glynn",
    "loser_school": "Minnesota State",
    "result": "MD 13-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Dick Ballinger",
    "winner_school": "Wyoming",
    "loser": "Don Conway",
    "loser_school": "Oregon State",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Tom Alberts",
    "winner_school": "Pittsburgh",
    "loser": "Dick Dean",
    "loser_school": "Maryland",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Ed Hamer",
    "winner_school": "Lehigh",
    "loser": "Duane Murty",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Tom Alberts",
    "winner_school": "Pittsburgh",
    "loser": "Dick Ballinger",
    "loser_school": "Wyoming",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Duane Murty",
    "winner_school": "Oklahoma State",
    "loser": "Dick Ballinger",
    "loser_school": "Wyoming",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Ed Hamer",
    "winner_school": "Lehigh",
    "loser": "Tom Alberts",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 274,
    "winner": "Fred Redeker",
    "winner_school": "Indiana",
    "loser": "Bob Godwin",
    "loser_school": "DePauw",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "Jim Ferguson",
    "winner_school": "Michigan State",
    "loser": "Tom Green",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Dick Dean",
    "winner_school": "Maryland",
    "loser": "Fred Redeker",
    "loser_school": "Indiana",
    "result": "Fall 5:40"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Duane Murty",
    "winner_school": "Oklahoma State",
    "loser": "Jim Ferguson",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Dick Ballinger",
    "winner_school": "Wyoming",
    "loser": "Dick Dean",
    "loser_school": "Maryland",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Al Blanshan",
    "winner_school": "Minnesota State",
    "loser": "Ron Meleney",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Bruce Campbell",
    "winner_school": "Oklahoma State",
    "loser": "John McCray",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Jim Craig",
    "winner_school": "Iowa",
    "loser": "Merv Miller",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Ed Rath",
    "winner_school": "Colorado State",
    "loser": "Karl Fink",
    "loser_school": "Michigan",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Roy Conrad",
    "winner_school": "Northern Illinois",
    "loser": "George Ihnat",
    "loser_school": "Indiana",
    "result": "Fall 3:45"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Al Blanshan",
    "winner_school": "Minnesota State",
    "loser": "Ross Smith",
    "loser_school": "Adams State",
    "result": "Fall 5:42"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Tom Trousil",
    "winner_school": "Illinois",
    "loser": "Frank Fiore",
    "loser_school": "Kent State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Bill Wright",
    "winner_school": "Minnesota",
    "loser": "Bruce Campbell",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Jim Craig",
    "winner_school": "Iowa",
    "loser": "Greg Ruth",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Lyle Brownlee",
    "winner_school": "Wyoming",
    "loser": "Hardy Will",
    "loser_school": "Yale",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Ed Rath",
    "winner_school": "Colorado State",
    "loser": "Don Meyers",
    "loser_school": "Colorado Mines",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "George Goodner",
    "winner_school": "Oklahoma",
    "loser": "John Daily",
    "loser_school": "Akron",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Al Blanshan",
    "winner_school": "Minnesota State",
    "loser": "Roy Conrad",
    "loser_school": "Northern Illinois",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Bill Wright",
    "winner_school": "Minnesota",
    "loser": "Tom Trousil",
    "loser_school": "Illinois",
    "result": "MD 9-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Jim Craig",
    "winner_school": "Iowa",
    "loser": "Lyle Brownlee",
    "loser_school": "Wyoming",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Ed Rath",
    "winner_school": "Colorado State",
    "loser": "George Goodner",
    "loser_school": "Oklahoma",
    "result": "Dec 8-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Al Blanshan",
    "winner_school": "Minnesota State",
    "loser": "Bill Wright",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Jim Craig",
    "winner_school": "Iowa",
    "loser": "Ed Rath",
    "loser_school": "Colorado State",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Bill Wright",
    "winner_school": "Minnesota",
    "loser": "Ed Rath",
    "loser_school": "Colorado State",
    "result": "Dec 6-0"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Jim Craig",
    "winner_school": "Iowa",
    "loser": "Al Blanshan",
    "loser_school": "Minnesota State",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 275,
    "winner": "Ron Meleney",
    "winner_school": "Iowa State",
    "loser": "Ross Smith",
    "loser_school": "Adams State",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 276,
    "winner": "Greg Ruth",
    "winner_school": "Lehigh",
    "loser": "Merv Miller",
    "loser_school": "Cornell Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Ron Meleney",
    "winner_school": "Iowa State",
    "loser": "Roy Conrad",
    "loser_school": "Northern Illinois",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Greg Ruth",
    "winner_school": "Lehigh",
    "loser": "Lyle Brownlee",
    "loser_school": "Wyoming",
    "result": "Dec 8-3"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Bill Wright",
    "winner_school": "Minnesota",
    "loser": "Ron Meleney",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Ed Rath",
    "winner_school": "Colorado State",
    "loser": "Greg Ruth",
    "loser_school": "Lehigh",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 146,
    "winner": "Tim Woodin",
    "winner_school": "Michigan State",
    "loser": "David Campbell",
    "loser_school": "Oklahoma",
    "result": "Fall 2:58"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Dave Dunlop",
    "winner_school": "Cornell",
    "loser": "LaVerne Dykema",
    "loser_school": "Minnesota",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Adnan Kaisy",
    "winner_school": "Oklahoma State",
    "loser": "John Matney",
    "loser_school": "North Carolina",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Dick Sherrill",
    "winner_school": "Yale",
    "loser": "Mike Pacilio",
    "loser_school": "Gettysburg",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Tim Woodin",
    "winner_school": "Michigan State",
    "loser": "Charles Peterson",
    "loser_school": "Pacific",
    "result": "Fall 4:26"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Art Baker",
    "winner_school": "Syracuse",
    "loser": "Roger Pohlman",
    "loser_school": "Iowa State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "Marion Rushing",
    "winner_school": "SIU-Carbondale",
    "loser": "Tony Stevens",
    "loser_school": "Cornell Iowa",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Harold Brownstein",
    "winner_school": "Illinois",
    "loser": "Howard Colling",
    "loser_school": "Wyoming",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 242,
    "winner": "Gordon Trapp",
    "winner_school": "Iowa",
    "loser": "Benedict Motis",
    "loser_school": "South Dakota State",
    "result": "MD 15-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Adnan Kaisy",
    "winner_school": "Oklahoma State",
    "loser": "Dave Dunlop",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Tim Woodin",
    "winner_school": "Michigan State",
    "loser": "Dick Sherrill",
    "loser_school": "Yale",
    "result": "Fall 7:09"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Art Baker",
    "winner_school": "Syracuse",
    "loser": "Marion Rushing",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Gordon Trapp",
    "winner_school": "Iowa",
    "loser": "Harold Brownstein",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Tim Woodin",
    "winner_school": "Michigan State",
    "loser": "Adnan Kaisy",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Art Baker",
    "winner_school": "Syracuse",
    "loser": "Gordon Trapp",
    "loser_school": "Iowa",
    "result": "Dec 9-6"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Gordon Trapp",
    "winner_school": "Iowa",
    "loser": "Adnan Kaisy",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Art Baker",
    "winner_school": "Syracuse",
    "loser": "Tim Woodin",
    "loser_school": "Michigan State",
    "result": "Dec 9-5"
  },
  {
    "round": "RepConsA",
    "weight": "191",
    "bout": 277,
    "winner": "David Campbell",
    "winner_school": "Oklahoma",
    "loser": "Charles Peterson",
    "loser_school": "Pacific",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "David Campbell",
    "winner_school": "Oklahoma",
    "loser": "Dick Sherrill",
    "loser_school": "Yale",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Roger Pohlman",
    "winner_school": "Iowa State",
    "loser": "Marion Rushing",
    "loser_school": "SIU-Carbondale",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Adnan Kaisy",
    "winner_school": "Oklahoma State",
    "loser": "David Campbell",
    "loser_school": "Oklahoma",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Gordon Trapp",
    "winner_school": "Iowa",
    "loser": "Roger Pohlman",
    "loser_school": "Iowa State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Ted Ellis",
    "winner_school": "Oklahoma State",
    "loser": "Harry Jacobs",
    "loser_school": "Bradley",
    "result": "Fall 3:32"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "John Oberly",
    "winner_school": "Penn State",
    "loser": "Dale Lewis",
    "loser_school": "Oklahoma",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Tom Doyle",
    "winner_school": "Northwest Missouri",
    "loser": "Bob Salata",
    "loser_school": "Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Don Darter",
    "winner_school": "Kansas State",
    "loser": "Frank Ruvolo",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Ted Ellis",
    "winner_school": "Oklahoma State",
    "loser": "Frank Kurtenbach",
    "loser_school": "South Dakota State",
    "result": "Fall 5:04"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Walter Goltl",
    "winner_school": "Northern Colorado",
    "loser": "Wade Doerfler",
    "loser_school": "Pacific",
    "result": "Fall 6:21"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Gary Grouwinkel",
    "winner_school": "Iowa",
    "loser": "Dave Enslow",
    "loser_school": "Washington",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Bob Marella",
    "winner_school": "Ithaca",
    "loser": "Pete Veldman",
    "loser_school": "Minnesota",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Jan Schwitters",
    "winner_school": "Iowa State",
    "loser": "Bob Wynne",
    "loser_school": "Harvard",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "John Oberly",
    "winner_school": "Penn State",
    "loser": "Tom Doyle",
    "loser_school": "Northwest Missouri",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Ted Ellis",
    "winner_school": "Oklahoma State",
    "loser": "Don Darter",
    "loser_school": "Kansas State",
    "result": "Fall 2:20"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Walter Goltl",
    "winner_school": "Northern Colorado",
    "loser": "Gary Grouwinkel",
    "loser_school": "Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Bob Marella",
    "winner_school": "Ithaca",
    "loser": "Jan Schwitters",
    "loser_school": "Iowa State",
    "result": "MD 11-1"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Ted Ellis",
    "winner_school": "Oklahoma State",
    "loser": "John Oberly",
    "loser_school": "Penn State",
    "result": "Fall 2:30"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Bob Marella",
    "winner_school": "Ithaca",
    "loser": "Walter Goltl",
    "loser_school": "Northern Colorado",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Walter Goltl",
    "winner_school": "Northern Colorado",
    "loser": "Don Darter",
    "loser_school": "Kansas State",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Ted Ellis",
    "winner_school": "Oklahoma State",
    "loser": "Bob Marella",
    "loser_school": "Ithaca",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "RepConsA",
    "weight": "UNL",
    "bout": 279,
    "winner": "Harry Jacobs",
    "winner_school": "Bradley",
    "loser": "Frank Kurtenbach",
    "loser_school": "South Dakota State",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 399,
    "winner": "Don Darter",
    "winner_school": "Kansas State",
    "loser": "Harry Jacobs",
    "loser_school": "Bradley",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 400,
    "winner": "Pete Veldman",
    "winner_school": "Minnesota",
    "loser": "Jan Schwitters",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Don Darter",
    "winner_school": "Kansas State",
    "loser": "John Oberly",
    "loser_school": "Penn State",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Walter Goltl",
    "winner_school": "Northern Colorado",
    "loser": "Pete Veldman",
    "loser_school": "Minnesota",
    "result": "Dec 3-0"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
