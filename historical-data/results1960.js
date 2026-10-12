// 1960 NCAA Division I Wrestling Championships (At Maryland). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1960 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1960-provenance.js
const resultData = [
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "John Dooley",
    "winner_school": "Kansas State",
    "loser": "Fred Lamb",
    "loser_school": "Indiana",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Mitsi Tamura",
    "winner_school": "Oregon State",
    "loser": "Bob Campana",
    "loser_school": "Springfield",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Dick Wilson",
    "winner_school": "Toledo",
    "loser": "Fran McCann",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Dale Confer",
    "winner_school": "Penn State",
    "loser": "Bill McNiel",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Jack Thamert",
    "winner_school": "Minnesota State",
    "loser": "Bob Moore",
    "loser_school": "Ohio State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Bob Pierce",
    "loser_school": "Delaware",
    "result": "Fall 8:44"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Dennis Friedericks",
    "winner_school": "Iowa State",
    "loser": "Fred Rittschoff",
    "loser_school": "Wisconsin",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Mitsi Tamura",
    "winner_school": "Oregon State",
    "loser": "John Dooley",
    "loser_school": "Kansas State",
    "result": "Dec 1-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Dick Wilson",
    "winner_school": "Toledo",
    "loser": "Dale Confer",
    "loser_school": "Penn State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Jack Thamert",
    "loser_school": "Minnesota State",
    "result": "Dec 13-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Dennis Friedericks",
    "winner_school": "Iowa State",
    "loser": "Bob Hogan",
    "loser_school": "Rutgers",
    "result": "Dec 8-1"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Dick Wilson",
    "winner_school": "Toledo",
    "loser": "Mitsi Tamura",
    "loser_school": "Oregon State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Dennis Friedericks",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Dennis Friedericks",
    "winner_school": "Iowa State",
    "loser": "Mitsi Tamura",
    "loser_school": "Oregon State",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Dick Wilson",
    "loser_school": "Toledo",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Dale Confer",
    "winner_school": "Penn State",
    "loser": "Fran McCann",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-1"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Jack Thamert",
    "winner_school": "Minnesota State",
    "loser": "Bob Pierce",
    "loser_school": "Delaware",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Mitsi Tamura",
    "winner_school": "Oregon State",
    "loser": "Dale Confer",
    "loser_school": "Penn State",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Dennis Friedericks",
    "winner_school": "Iowa State",
    "loser": "Jack Thamert",
    "loser_school": "Minnesota State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 30,
    "winner": "Jim Bledsoe",
    "winner_school": "SIU-Carbondale",
    "loser": "Dave Gates",
    "loser_school": "Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 32,
    "winner": "Tony Macias",
    "winner_school": "Oklahoma",
    "loser": "Dave Frame",
    "loser_school": "Minnesota State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "Don Webster",
    "winner_school": "Iowa State",
    "loser": "Gerry Sachsel",
    "loser_school": "Notre Dame",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 35,
    "winner": "George Hobbs",
    "winner_school": "Michigan State",
    "loser": "Cleon Cassel",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 39,
    "winner": "Dave Hansen",
    "winner_school": "Wyoming",
    "loser": "Jerry Mayberry",
    "loser_school": "Washington",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Tom Tisone",
    "winner_school": "Colorado Mines",
    "loser": "Jerry Lane",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Jim Bledsoe",
    "winner_school": "SIU-Carbondale",
    "loser": "Doug Bingham",
    "loser_school": "Utah",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Tony Macias",
    "winner_school": "Oklahoma",
    "loser": "Tony Scordo",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Dave Auble",
    "winner_school": "Cornell",
    "loser": "Don Webster",
    "loser_school": "Iowa State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Dave Camaione",
    "winner_school": "Ohio State",
    "loser": "George Hobbs",
    "loser_school": "Michigan State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Rick Martin",
    "winner_school": "Pittsburgh",
    "loser": "Jerry Perez",
    "loser_school": "Oregon State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Dave Hansen",
    "winner_school": "Wyoming",
    "loser": "Dick VanAuken",
    "loser_school": "Maryland",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Masaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Fred Leich",
    "loser_school": "Rutgers",
    "result": "MD 16-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Jim Bledsoe",
    "winner_school": "SIU-Carbondale",
    "loser": "Tom Tisone",
    "loser_school": "Colorado Mines",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Dave Auble",
    "winner_school": "Cornell",
    "loser": "Tony Macias",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Dave Camaione",
    "winner_school": "Ohio State",
    "loser": "Rick Martin",
    "loser_school": "Pittsburgh",
    "result": "Dec 11-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Masaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Dave Hansen",
    "loser_school": "Wyoming",
    "result": "MD 13-4"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Dave Auble",
    "winner_school": "Cornell",
    "loser": "Jim Bledsoe",
    "loser_school": "SIU-Carbondale",
    "result": "MD 12-4"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Masaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Dave Camaione",
    "loser_school": "Ohio State",
    "result": "Dec 9-5 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Dave Hansen",
    "winner_school": "Wyoming",
    "loser": "Tony Macias",
    "loser_school": "Oklahoma",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Dave Auble",
    "winner_school": "Cornell",
    "loser": "Masaaki Hatta",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-5"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Tony Macias",
    "winner_school": "Oklahoma",
    "loser": "Don Webster",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Dave Hansen",
    "winner_school": "Wyoming",
    "loser": "Fred Leich",
    "loser_school": "Rutgers",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Tony Macias",
    "winner_school": "Oklahoma",
    "loser": "Jim Bledsoe",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Dave Hansen",
    "winner_school": "Wyoming",
    "loser": "Dave Camaione",
    "loser_school": "Ohio State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 46,
    "winner": "Joe DiBella",
    "winner_school": "Coast Guard",
    "loser": "John McCrillis",
    "loser_school": "Iowa State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "Al DeLeon",
    "winner_school": "Minnesota State",
    "loser": "Jim Valentine",
    "loser_school": "Ithaca",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "John Kelly",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Ramon West",
    "winner_school": "RIT",
    "loser": "Doug Baillie",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Gary Hoagland",
    "winner_school": "Portland State",
    "loser": "Joe DiBella",
    "loser_school": "Coast Guard",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Ron Hutcherson",
    "winner_school": "Indiana",
    "loser": "Bill Corn",
    "loser_school": "Western State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Al DeLeon",
    "loser_school": "Minnesota State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Frank Freeman",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Jerry Headington",
    "winner_school": "Utah",
    "loser": "Gordon Danks",
    "loser_school": "Penn State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Lannie Bryant",
    "winner_school": "Northern Colorado",
    "loser": "Ed Cliatt",
    "loser_school": "Maryland",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Norm Young",
    "winner_school": "Michigan State",
    "loser": "Bill Kehrig",
    "loser_school": "Lycoming",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Ramon West",
    "winner_school": "RIT",
    "loser": "Gary Hoagland",
    "loser_school": "Portland State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Ron Hutcherson",
    "loser_school": "Indiana",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Jerry Headington",
    "loser_school": "Utah",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Norm Young",
    "winner_school": "Michigan State",
    "loser": "Lannie Bryant",
    "loser_school": "Northern Colorado",
    "result": "Fall 8:37"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Ramon West",
    "loser_school": "RIT",
    "result": "Dec 9-4"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Norm Young",
    "loser_school": "Michigan State",
    "result": "Dec 4-0"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "John Kelly",
    "winner_school": "Iowa",
    "loser": "Ron Hutcherson",
    "loser_school": "Indiana",
    "result": "M FOR"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Stan Abel",
    "winner_school": "Oklahoma",
    "loser": "Larry Lauchle",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 266,
    "winner": "John Kelly",
    "winner_school": "Iowa",
    "loser": "Frank Freeman",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Ron Hutcherson",
    "winner_school": "Indiana",
    "loser": "Al DeLeon",
    "loser_school": "Minnesota State",
    "result": "Dec 10-9"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "John Kelly",
    "winner_school": "Iowa",
    "loser": "Jerry Headington",
    "loser_school": "Utah",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Ron Hutcherson",
    "winner_school": "Indiana",
    "loser": "Ramon West",
    "loser_school": "RIT",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "John Kelly",
    "winner_school": "Iowa",
    "loser": "Norm Young",
    "loser_school": "Michigan State",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 60,
    "winner": "Bill Taylor",
    "winner_school": "Cornell Iowa",
    "loser": "Doug Wilson",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 62,
    "winner": "Mike Leta",
    "winner_school": "Rutgers",
    "loser": "Harry Romig",
    "loser_school": "Lycoming",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 64,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Al Bamforth",
    "loser_school": "VMI",
    "result": "Fall 6:22"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Daryl Kelvington",
    "winner_school": "Pittsburgh",
    "loser": "Carl Scott",
    "loser_school": "Wyoming",
    "result": "Fall 7:38"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 67,
    "winner": "Jim Brainerd",
    "winner_school": "Northern Iowa",
    "loser": "Ron Youngbauer",
    "loser_school": "Minnesota State",
    "result": "Fall 7:08"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 69,
    "winner": "Tom Van Ness",
    "winner_school": "Maryland",
    "loser": "Dennis Lucy",
    "loser_school": "Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 71,
    "winner": "Dick Zboray",
    "winner_school": "Indiana",
    "loser": "Gerald Whitfield",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Bill Taylor",
    "winner_school": "Cornell Iowa",
    "loser": "Jerry Huffman",
    "loser_school": "RIT",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Mike Leta",
    "winner_school": "Rutgers",
    "loser": "Charles Coffee",
    "loser_school": "Minnesota",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Harold Rowe",
    "loser_school": "Knox",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Daryl Kelvington",
    "winner_school": "Pittsburgh",
    "loser": "Stan Reed",
    "loser_school": "Virginia",
    "result": "Fall 7:24"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Lester Austin",
    "winner_school": "Syracuse",
    "loser": "Jim Brainerd",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Pat Semary",
    "winner_school": "Kent State",
    "loser": "Tom Van Ness",
    "loser_school": "Maryland",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Guy Guccione",
    "winner_school": "Penn State",
    "loser": "Dick Zboray",
    "loser_school": "Indiana",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Larry Word",
    "winner_school": "Kansas State",
    "loser": "Dick Rimple",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Mike Leta",
    "winner_school": "Rutgers",
    "loser": "Bill Taylor",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Daryl Kelvington",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Lester Austin",
    "winner_school": "Syracuse",
    "loser": "Pat Semary",
    "loser_school": "Kent State",
    "result": "Fall 2:29"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Guy Guccione",
    "winner_school": "Penn State",
    "loser": "Larry Word",
    "loser_school": "Kansas State",
    "result": "Dec 12-5"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Mike Leta",
    "loser_school": "Rutgers",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Lester Austin",
    "winner_school": "Syracuse",
    "loser": "Guy Guccione",
    "loser_school": "Penn State",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Mike Leta",
    "winner_school": "Rutgers",
    "loser": "Pat Semary",
    "loser_school": "Kent State",
    "result": "Dec 6-4"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Les Anderson",
    "winner_school": "Iowa State",
    "loser": "Lester Austin",
    "loser_school": "Syracuse",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 267,
    "winner": "Harold Rowe",
    "winner_school": "Knox",
    "loser": "Al Bamforth",
    "loser_school": "VMI",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Daryl Kelvington",
    "winner_school": "Pittsburgh",
    "loser": "Harold Rowe",
    "loser_school": "Knox",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Pat Semary",
    "winner_school": "Kent State",
    "loser": "Jim Brainerd",
    "loser_school": "Northern Iowa",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Mike Leta",
    "winner_school": "Rutgers",
    "loser": "Daryl Kelvington",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-3"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Pat Semary",
    "winner_school": "Kent State",
    "loser": "Guy Guccione",
    "loser_school": "Penn State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 76,
    "winner": "Dom Fatta",
    "winner_school": "Purdue",
    "loser": "Bill Peterson",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 78,
    "winner": "John Zolikoff",
    "winner_school": "Pittsburgh",
    "loser": "Larry Gregory",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 80,
    "winner": "Doug Ryan",
    "winner_school": "Ohio",
    "loser": "James Estabrook",
    "loser_school": "Harvard",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 81,
    "winner": "Bill Berry",
    "winner_school": "Washington State",
    "loser": "John Lindemann",
    "loser_school": "Minnesota State",
    "result": "Fall 7:11"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 82,
    "winner": "Del Rossberg",
    "winner_school": "Iowa",
    "loser": "Dick Besnier",
    "loser_school": "Maryland",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 83,
    "winner": "Jerry Frude",
    "winner_school": "Wyoming",
    "loser": "Jim Hoppel",
    "loser_school": "Bowling Green",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 85,
    "winner": "Sam Minor",
    "winner_school": "Penn State",
    "loser": "Brian Kane",
    "loser_school": "VMI",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 87,
    "winner": "Ralph Clark",
    "winner_school": "Lock Haven",
    "loser": "Bob McSwain",
    "loser_school": "North Carolina",
    "result": "Fall 2:49"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 89,
    "winner": "Tom Grifa",
    "winner_school": "Rutgers",
    "loser": "Grant Jordan",
    "loser_school": "San Diego State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Dom Fatta",
    "winner_school": "Purdue",
    "loser": "Neil DeLozier",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Toby Zweygardt",
    "winner_school": "Oregon State",
    "loser": "John Zolikoff",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Doug Ryan",
    "loser_school": "Ohio",
    "result": "Fall 7:19"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Del Rossberg",
    "winner_school": "Iowa",
    "loser": "Bill Berry",
    "loser_school": "Washington State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Jerry Frude",
    "winner_school": "Wyoming",
    "loser": "Bob Gunst",
    "loser_school": "Lehigh",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Sam Minor",
    "winner_school": "Penn State",
    "loser": "Clair Gard",
    "loser_school": "Kansas State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Ralph Clark",
    "winner_school": "Lock Haven",
    "loser": "Bob Wilson",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Tom Grifa",
    "winner_school": "Rutgers",
    "loser": "Bob Gras",
    "loser_school": "Fairleigh Dickinson",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Dom Fatta",
    "winner_school": "Purdue",
    "loser": "Toby Zweygardt",
    "loser_school": "Oregon State",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Del Rossberg",
    "loser_school": "Iowa",
    "result": "Fall 8:50"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Jerry Frude",
    "winner_school": "Wyoming",
    "loser": "Sam Minor",
    "loser_school": "Penn State",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Ralph Clark",
    "winner_school": "Lock Haven",
    "loser": "Tom Grifa",
    "loser_school": "Rutgers",
    "result": "Dec 9-5"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Dom Fatta",
    "loser_school": "Purdue",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Jerry Frude",
    "winner_school": "Wyoming",
    "loser": "Ralph Clark",
    "loser_school": "Lock Haven",
    "result": "Dec 9-4"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Ralph Clark",
    "winner_school": "Lock Haven",
    "loser": "Dom Fatta",
    "loser_school": "Purdue",
    "result": "Dec 6-3"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Jerry Frude",
    "loser_school": "Wyoming",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 270,
    "winner": "Jim Hoppel",
    "winner_school": "Bowling Green",
    "loser": "Bob Gunst",
    "loser_school": "Lehigh",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "Doug Ryan",
    "winner_school": "Ohio",
    "loser": "Del Rossberg",
    "loser_school": "Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Sam Minor",
    "winner_school": "Penn State",
    "loser": "Jim Hoppel",
    "loser_school": "Bowling Green",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Dom Fatta",
    "winner_school": "Purdue",
    "loser": "Doug Ryan",
    "loser_school": "Ohio",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Ralph Clark",
    "winner_school": "Lock Haven",
    "loser": "Sam Minor",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 92,
    "winner": "Al Marion",
    "winner_school": "Cornell",
    "loser": "Don Namroz",
    "loser_school": "Ball State",
    "result": "Fall 7:57"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 93,
    "winner": "Bob Davis",
    "winner_school": "West Chester",
    "loser": "Bill Daniels",
    "loser_school": "VMI",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 94,
    "winner": "Autry Ehler",
    "winner_school": "Portland State",
    "loser": "Jim Lightner",
    "loser_school": "Coast Guard",
    "result": "Fall 3:40"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 95,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Harry Schlieff",
    "loser_school": "Minnesota",
    "result": "Fall 4:21"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 96,
    "winner": "Sid Terry",
    "winner_school": "Oklahoma",
    "loser": "Ray Guzak",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 97,
    "winner": "Frank Hankin",
    "winner_school": "Utah",
    "loser": "Leon Gridley",
    "loser_school": "SUNY-Oswego",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 98,
    "winner": "Art Kraft",
    "winner_school": "Northwestern",
    "loser": "Gerry Rinker",
    "loser_school": "Rutgers",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 99,
    "winner": "Gene Kerin",
    "winner_school": "Maryland",
    "loser": "Bob Dake",
    "loser_school": "Bowling Green",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 100,
    "winner": "Joe Mullins",
    "winner_school": "Iowa",
    "loser": "Monte Peterson",
    "loser_school": "Minnesota State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 101,
    "winner": "Thad Turner",
    "winner_school": "Lehigh",
    "loser": "Francis Flesner",
    "loser_school": "South Dakota State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 102,
    "winner": "Walter Parker",
    "winner_school": "Cornell Iowa",
    "loser": "Roger Tavenner",
    "loser_school": "Michigan State",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 103,
    "winner": "Ron Meleney",
    "winner_school": "Iowa State",
    "loser": "Bob Rohm",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 104,
    "winner": "Fritz Fivian",
    "winner_school": "Oregon State",
    "loser": "Dick Zoyhofski",
    "loser_school": "RIT",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 105,
    "winner": "Bob Marshall",
    "winner_school": "Purdue",
    "loser": "Bob Johnson",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Al Marion",
    "winner_school": "Cornell",
    "loser": "Dick Harris",
    "loser_school": "Grinnell",
    "result": "Fall 5:07"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Autry Ehler",
    "winner_school": "Portland State",
    "loser": "Bob Davis",
    "loser_school": "West Chester",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Sid Terry",
    "loser_school": "Oklahoma",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Art Kraft",
    "winner_school": "Northwestern",
    "loser": "Frank Hankin",
    "loser_school": "Utah",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Joe Mullins",
    "winner_school": "Iowa",
    "loser": "Gene Kerin",
    "loser_school": "Maryland",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Thad Turner",
    "winner_school": "Lehigh",
    "loser": "Walter Parker",
    "loser_school": "Cornell Iowa",
    "result": "Fall 4:26"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Fritz Fivian",
    "winner_school": "Oregon State",
    "loser": "Ron Meleney",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Bob Marshall",
    "winner_school": "Purdue",
    "loser": "George Brown",
    "loser_school": "Denison",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Autry Ehler",
    "winner_school": "Portland State",
    "loser": "Al Marion",
    "loser_school": "Cornell",
    "result": "Fall 7:10"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Art Kraft",
    "winner_school": "Northwestern",
    "loser": "Ron Pifer",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Thad Turner",
    "winner_school": "Lehigh",
    "loser": "Joe Mullins",
    "loser_school": "Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Bob Marshall",
    "winner_school": "Purdue",
    "loser": "Fritz Fivian",
    "loser_school": "Oregon State",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Art Kraft",
    "winner_school": "Northwestern",
    "loser": "Autry Ehler",
    "loser_school": "Portland State",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Thad Turner",
    "winner_school": "Lehigh",
    "loser": "Bob Marshall",
    "loser_school": "Purdue",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Bob Marshall",
    "winner_school": "Purdue",
    "loser": "Ron Pifer",
    "loser_school": "Penn State",
    "result": "Dec 5-1"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Art Kraft",
    "winner_school": "Northwestern",
    "loser": "Thad Turner",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 271,
    "winner": "Frank Hankin",
    "winner_school": "Utah",
    "loser": "Gerry Rinker",
    "loser_school": "Rutgers",
    "result": "DEF"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 272,
    "winner": "Francis Flesner",
    "winner_school": "South Dakota State",
    "loser": "Walter Parker",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Frank Hankin",
    "loser_school": "Utah",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Joe Mullins",
    "winner_school": "Iowa",
    "loser": "Francis Flesner",
    "loser_school": "South Dakota State",
    "result": "Dec 9-5"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Autry Ehler",
    "loser_school": "Portland State",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Bob Marshall",
    "winner_school": "Purdue",
    "loser": "Joe Mullins",
    "loser_school": "Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Gary Wilson",
    "winner_school": "Northern Colorado",
    "loser": "Dick Schaeffer",
    "loser_school": "Moravian",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "John Kreamer",
    "winner_school": "Lock Haven",
    "loser": "Don Haefele",
    "loser_school": "Rochester",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Bob Koehen",
    "winner_school": "Minnesota",
    "loser": "Bill Rischell",
    "loser_school": "Maryland",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Dick Ballinger",
    "winner_school": "Wyoming",
    "loser": "Jerry Slattery",
    "loser_school": "Minnesota State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Henry Barone",
    "winner_school": "Penn State",
    "loser": "Bob Million",
    "loser_school": "Ball State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Joe Friedel",
    "winner_school": "West Chester",
    "loser": "Bill DeButts",
    "loser_school": "Virginia",
    "result": "Fall 8:21"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "Bill Russell",
    "loser_school": "North Carolina",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Dennis Fitzgerald",
    "winner_school": "Michigan",
    "loser": "Dick Bartlett",
    "loser_school": "VMI",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Tom Miller",
    "winner_school": "Yale",
    "loser": "Dave Neal",
    "loser_school": "Carleton",
    "result": "MD 20-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Gary Wilson",
    "winner_school": "Northern Colorado",
    "loser": "Carl Skuba",
    "loser_school": "Rutgers",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "John Kreamer",
    "winner_school": "Lock Haven",
    "loser": "Sydney Walston",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Bob Koehen",
    "winner_school": "Minnesota",
    "loser": "Tim Butler",
    "loser_school": "Oklahoma",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Dick Ballinger",
    "winner_school": "Wyoming",
    "loser": "Henry Barone",
    "loser_school": "Penn State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Joe Friedel",
    "winner_school": "West Chester",
    "loser": "Mike Ferguson",
    "loser_school": "Cornell Iowa",
    "result": "Fall 3:15"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "Dave Angell",
    "loser_school": "Lehigh",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Dennis Fitzgerald",
    "winner_school": "Michigan",
    "loser": "John Sterner",
    "loser_school": "South Dakota State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Tom Miller",
    "winner_school": "Yale",
    "loser": "Walt Sanders",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Gary Wilson",
    "winner_school": "Northern Colorado",
    "loser": "John Kreamer",
    "loser_school": "Lock Haven",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Dick Ballinger",
    "winner_school": "Wyoming",
    "loser": "Bob Koehen",
    "loser_school": "Minnesota",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "Joe Friedel",
    "loser_school": "West Chester",
    "result": "Dec 13-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Dennis Fitzgerald",
    "winner_school": "Michigan",
    "loser": "Tom Miller",
    "loser_school": "Yale",
    "result": "MD 11-1"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Dick Ballinger",
    "winner_school": "Wyoming",
    "loser": "Gary Wilson",
    "loser_school": "Northern Colorado",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "Dennis Fitzgerald",
    "loser_school": "Michigan",
    "result": "Dec 7-4"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Dennis Fitzgerald",
    "winner_school": "Michigan",
    "loser": "Bob Koehen",
    "loser_school": "Minnesota",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Dick Ballinger",
    "winner_school": "Wyoming",
    "loser": "Ronnie Clinton",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 273,
    "winner": "Jerry Slattery",
    "winner_school": "Minnesota State",
    "loser": "Henry Barone",
    "loser_school": "Penn State",
    "result": "Dec 1-0"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 274,
    "winner": "Dave Angell",
    "winner_school": "Lehigh",
    "loser": "Bill Russell",
    "loser_school": "North Carolina",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "Bob Koehen",
    "winner_school": "Minnesota",
    "loser": "Jerry Slattery",
    "loser_school": "Minnesota State",
    "result": "WIN-NP"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Dave Angell",
    "winner_school": "Lehigh",
    "loser": "Joe Friedel",
    "loser_school": "West Chester",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Bob Koehen",
    "winner_school": "Minnesota",
    "loser": "Gary Wilson",
    "loser_school": "Northern Colorado",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Dennis Fitzgerald",
    "winner_school": "Michigan",
    "loser": "Dave Angell",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "George Ihnat",
    "winner_school": "Indiana",
    "loser": "Jergen Begala",
    "loser_school": "Kent State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Tony Vuocolo",
    "winner_school": "Pittsburgh",
    "loser": "Larry Meyer",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Bruce Campbell",
    "winner_school": "Oklahoma State",
    "loser": "Jack Smith",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Roy Conrad",
    "winner_school": "Northern Illinois",
    "loser": "Mike Sterner",
    "loser_school": "South Dakota State",
    "result": "Fall 1:49"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Tony Stevens",
    "winner_school": "Cornell Iowa",
    "loser": "Tony Matulonis",
    "loser_school": "Maryland",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Ralph DiMuccio",
    "winner_school": "Springfield",
    "loser": "Calvin Roulson",
    "loser_school": "Iowa",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Lyle Brownlee",
    "winner_school": "Wyoming",
    "loser": "Hardy Will",
    "loser_school": "Yale",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "George Ihnat",
    "winner_school": "Indiana",
    "loser": "Bill Yates",
    "loser_school": "University of the South",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Tony Vuocolo",
    "winner_school": "Pittsburgh",
    "loser": "John Narcisco",
    "loser_school": "Rutgers",
    "result": "Fall 8:52"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Bruce Campbell",
    "winner_school": "Oklahoma State",
    "loser": "Bill Koehen",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Roy Conrad",
    "winner_school": "Northern Illinois",
    "loser": "Phil Myer",
    "loser_school": "Penn State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "David Campbell",
    "winner_school": "Oklahoma",
    "loser": "Tony Stevens",
    "loser_school": "Cornell Iowa",
    "result": "Fall 5:34"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Ralph DiMuccio",
    "winner_school": "Springfield",
    "loser": "Jim Detrixhe",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Lyle Brownlee",
    "winner_school": "Wyoming",
    "loser": "Bob Eckley",
    "loser_school": "Waynesburg",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Al Rushatz",
    "winner_school": "Army",
    "loser": "Jerry Conners",
    "loser_school": "VMI",
    "result": "MD 12-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "George Ihnat",
    "winner_school": "Indiana",
    "loser": "Tony Vuocolo",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Roy Conrad",
    "winner_school": "Northern Illinois",
    "loser": "Bruce Campbell",
    "loser_school": "Oklahoma State",
    "result": "Fall 4:08"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "David Campbell",
    "winner_school": "Oklahoma",
    "loser": "Ralph DiMuccio",
    "loser_school": "Springfield",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Al Rushatz",
    "winner_school": "Army",
    "loser": "Lyle Brownlee",
    "loser_school": "Wyoming",
    "result": "MD 9-1"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Roy Conrad",
    "winner_school": "Northern Illinois",
    "loser": "George Ihnat",
    "loser_school": "Indiana",
    "result": "Fall 2:24"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "David Campbell",
    "winner_school": "Oklahoma",
    "loser": "Al Rushatz",
    "loser_school": "Army",
    "result": "MD 15-3"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Al Rushatz",
    "winner_school": "Army",
    "loser": "Bruce Campbell",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Roy Conrad",
    "winner_school": "Northern Illinois",
    "loser": "David Campbell",
    "loser_school": "Oklahoma",
    "result": "Dec 14-13"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 275,
    "winner": "Mike Sterner",
    "winner_school": "South Dakota State",
    "loser": "Phil Myer",
    "loser_school": "Penn State",
    "result": "MD 11-2"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Bruce Campbell",
    "winner_school": "Oklahoma State",
    "loser": "Mike Sterner",
    "loser_school": "South Dakota State",
    "result": "Dec 9-5"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Ralph DiMuccio",
    "winner_school": "Springfield",
    "loser": "Tony Stevens",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Bruce Campbell",
    "winner_school": "Oklahoma State",
    "loser": "George Ihnat",
    "loser_school": "Indiana",
    "result": "Dec 9-8"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Al Rushatz",
    "winner_school": "Army",
    "loser": "Ralph DiMuccio",
    "loser_school": "Springfield",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 146,
    "winner": "Gordon Trapp",
    "winner_school": "Iowa",
    "loser": "Bob Smith",
    "loser_school": "St. Lawrence",
    "result": "Fall 7:29"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 147,
    "winner": "Charlie Moore",
    "winner_school": "Lehigh",
    "loser": "Mario DeStefano",
    "loser_school": "Springfield",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Jack Stanbro",
    "winner_school": "Ithaca",
    "loser": "Hank Poniatowski",
    "loser_school": "Maryland",
    "result": "Fall 7:54"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Dick Sherrill",
    "winner_school": "Yale",
    "loser": "Dick Kohlhafer",
    "loser_school": "Baltimore",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Fred Olm",
    "winner_school": "Michigan",
    "loser": "Don Cory",
    "loser_school": "Rutgers",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Gordon Trapp",
    "winner_school": "Iowa",
    "loser": "Dick Keeler",
    "loser_school": "Long Beach State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Art Giorgini",
    "winner_school": "Brown",
    "loser": "Charlie Moore",
    "loser_school": "Lehigh",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "George Goodner",
    "winner_school": "Oklahoma",
    "loser": "John Trojan",
    "loser_school": "Penn State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Paul Eckley",
    "winner_school": "Waynesburg",
    "loser": "Howard Colling",
    "loser_school": "Wyoming",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 242,
    "winner": "Jerald Williams",
    "winner_school": "Oklahoma State",
    "loser": "Thomas Hall",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Jack Stanbro",
    "winner_school": "Ithaca",
    "loser": "Dick Sherrill",
    "loser_school": "Yale",
    "result": "Dec 9-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Gordon Trapp",
    "winner_school": "Iowa",
    "loser": "Fred Olm",
    "loser_school": "Michigan",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "George Goodner",
    "winner_school": "Oklahoma",
    "loser": "Art Giorgini",
    "loser_school": "Brown",
    "result": "Fall 8:41"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Paul Eckley",
    "winner_school": "Waynesburg",
    "loser": "Jerald Williams",
    "loser_school": "Oklahoma State",
    "result": "Fall 7:22"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Jack Stanbro",
    "winner_school": "Ithaca",
    "loser": "Gordon Trapp",
    "loser_school": "Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "George Goodner",
    "winner_school": "Oklahoma",
    "loser": "Paul Eckley",
    "loser_school": "Waynesburg",
    "result": "Dec 11-5"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Paul Eckley",
    "winner_school": "Waynesburg",
    "loser": "Gordon Trapp",
    "loser_school": "Iowa",
    "result": "MD 10-1"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "George Goodner",
    "winner_school": "Oklahoma",
    "loser": "Jack Stanbro",
    "loser_school": "Ithaca",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Dick Sherrill",
    "winner_school": "Yale",
    "loser": "Hank Poniatowski",
    "loser_school": "Maryland",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Art Giorgini",
    "winner_school": "Brown",
    "loser": "John Trojan",
    "loser_school": "Penn State",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Gordon Trapp",
    "winner_school": "Iowa",
    "loser": "Dick Sherrill",
    "loser_school": "Yale",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Paul Eckley",
    "winner_school": "Waynesburg",
    "loser": "Art Giorgini",
    "loser_school": "Brown",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Ken Klaus",
    "winner_school": "RIT",
    "loser": "Pat Lovell",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Garry Stensland",
    "winner_school": "Oregon",
    "loser": "Wayland Blake",
    "loser_school": "Minnesota State",
    "result": "Fall 6:39"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Sherwyn Thorson",
    "winner_school": "Iowa",
    "loser": "Warren Dawson",
    "loser_school": "Wyoming",
    "result": "Fall 4:58"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "John Baum",
    "winner_school": "Michigan State",
    "loser": "Jim Sierk",
    "loser_school": "Rutgers",
    "result": "Fall 1:54"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Rory Weber",
    "winner_school": "Northwestern",
    "loser": "Dale Kuhns",
    "loser_school": "Army",
    "result": "Fall 2:39"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Fred Wright",
    "winner_school": "Cornell Iowa",
    "loser": "Ken Klaus",
    "loser_school": "RIT",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Dale Lewis",
    "winner_school": "Oklahoma",
    "loser": "Bob Hacker",
    "loser_school": "Maryland",
    "result": "Fall 5:59"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Garry Stensland",
    "winner_school": "Oregon",
    "loser": "Bill Wood",
    "loser_school": "Brown",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Sherwyn Thorson",
    "winner_school": "Iowa",
    "loser": "John Oberly",
    "loser_school": "Penn State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Jan Schwitters",
    "winner_school": "Iowa State",
    "loser": "Joe Farmer",
    "loser_school": "SUNY-Oswego",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "John Baum",
    "winner_school": "Michigan State",
    "loser": "Frank Kurtenbach",
    "loser_school": "South Dakota State",
    "result": "Fall 5:48"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Jim Raschke",
    "winner_school": "Nebraska",
    "loser": "Bob Asack",
    "loser_school": "Columbia",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Rory Weber",
    "winner_school": "Northwestern",
    "loser": "Fred Wright",
    "loser_school": "Cornell Iowa",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Dale Lewis",
    "winner_school": "Oklahoma",
    "loser": "Garry Stensland",
    "loser_school": "Oregon",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Sherwyn Thorson",
    "winner_school": "Iowa",
    "loser": "Jan Schwitters",
    "loser_school": "Iowa State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "John Baum",
    "winner_school": "Michigan State",
    "loser": "Jim Raschke",
    "loser_school": "Nebraska",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Dale Lewis",
    "winner_school": "Oklahoma",
    "loser": "Rory Weber",
    "loser_school": "Northwestern",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Sherwyn Thorson",
    "winner_school": "Iowa",
    "loser": "John Baum",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "John Oberly",
    "winner_school": "Penn State",
    "loser": "Rory Weber",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Dale Lewis",
    "winner_school": "Oklahoma",
    "loser": "Sherwyn Thorson",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsA",
    "weight": "UNL",
    "bout": 280,
    "winner": "John Oberly",
    "winner_school": "Penn State",
    "loser": "Warren Dawson",
    "loser_school": "Wyoming",
    "result": "Fall 2:58"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 399,
    "winner": "Garry Stensland",
    "winner_school": "Oregon",
    "loser": "Bob Hacker",
    "loser_school": "Maryland",
    "result": "Fall 3:59"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 400,
    "winner": "John Oberly",
    "winner_school": "Penn State",
    "loser": "Jan Schwitters",
    "loser_school": "Iowa State",
    "result": "MD 9-0"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Rory Weber",
    "winner_school": "Northwestern",
    "loser": "Garry Stensland",
    "loser_school": "Oregon",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "John Oberly",
    "winner_school": "Penn State",
    "loser": "John Baum",
    "loser_school": "Michigan State",
    "result": "MD 11-0"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
