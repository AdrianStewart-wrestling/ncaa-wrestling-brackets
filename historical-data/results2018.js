const resultData = [
  {
    round: "Prelims",
    weight: "125",
    bout: 1,
    winner: "Alonzo Allen",
    winner_school: "Tennessee-Chattanooga",
    loser: "Sergio Mendez",
    loser_school: "Cal State Bakersfield",
    result: "Dec 10-9"
  },
  {
    round: "Prelims",
    weight: "133",
    bout: 2,
    winner: "Cam Sykora",
    winner_school: "North Dakota State",
    loser: "Cameron Kelly",
    loser_school: "Ohio",
    result: "MD 11-3"
  },
  {
    round: "Prelims",
    weight: "141",
    bout: 3,
    winner: "Vincent Turk",
    winner_school: "Iowa",
    loser: "Kyle Shoop",
    loser_school: "Lock Haven",
    result: "MD 12-2"
  },
  {
    round: "Prelims",
    weight: "149",
    bout: 4,
    winner: "Steve Bleise",
    winner_school: "Minnesota",
    loser: "Eleazar Deluca",
    loser_school: "Rutgers",
    result: "Dec 5-3"
  },
  {
    round: "Prelims",
    weight: "157",
    bout: 5,
    winner: "Larry Early",
    winner_school: "Old Dominion",
    loser: "Tyler Marinelli",
    loser_school: "Gardner-Webb",
    result: "Dec 7-4"
  },
  {
    round: "Prelims",
    weight: "165",
    bout: 6,
    winner: "Gordon Wolf",
    winner_school: "Lehigh",
    loser: "May Bethea",
    loser_school: "Penn",
    result: "Dec 13-8"
  },
  {
    round: "Prelims",
    weight: "174",
    bout: 7,
    winner: "Tyrel White",
    winner_school: "Columbia",
    loser: "Ben Harvey",
    loser_school: "Army",
    result: "Dec 8-1"
  },
  {
    round: "Prelims",
    weight: "184",
    bout: 8,
    winner: "Brandon Krone",
    winner_school: "Minnesota",
    loser: "Alan Clothier",
    loser_school: "Appalachian State",
    result: "Dec 10-6"
  },
  {
    round: "Prelims",
    weight: "197",
    bout: 9,
    winner: "Kyle Conel",
    winner_school: "Kent State",
    loser: "Randall Diabe",
    loser_school: "Appalachian State",
    result: "Dec 3-2"
  },
  {
    round: "Prelims",
    weight: "285",
    bout: 10,
    winner: "Jeramy Sweany",
    winner_school: "Cornell",
    loser: "Brett Dempsey",
    loser_school: "American",
    result: "Dec 9-4"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 11,
    winner: "Darian Cruz",
    winner_school: "Lehigh",
    loser: "RayVon Foley",
    loser_school: "Michigan State",
    result: "Dec 7-4"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 12,
    winner: "Drew Mattin",
    winner_school: "Michigan",
    loser: "Jacob Schwarm",
    loser_school: "Northern Iowa",
    result: "Fall 3:50"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 13,
    winner: "Ronnie Bresser",
    winner_school: "Oregon State",
    loser: "Elijah Oliver",
    loser_school: "Indiana",
    result: "Dec 5-4"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 14,
    winner: "Ethan Lizak",
    winner_school: "Minnesota",
    loser: "Barlow McGhee",
    loser_school: "Missouri",
    result: "MD 11-0"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 15,
    winner: "Sean Fausz",
    winner_school: "NC State",
    loser: "Michael McGee",
    loser_school: "Old Dominion",
    result: "TB-1 8-5"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 16,
    winner: "Louie Hayes",
    winner_school: "Virginia",
    loser: "Paul Bianchi",
    loser_school: "North Dakota State",
    result: "MD 14-1"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 17,
    winner: "Zeke Moisey",
    winner_school: "West Virginia",
    loser: "Kyle Norstrem",
    loser_school: "Virginia Tech",
    result: "Dec 10-7"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 18,
    winner: "Nick Suriano",
    winner_school: "Rutgers",
    loser: "Gerald (JR) Wert",
    loser_school: "Rider",
    result: "TF-1.5 4:45 (17-0)"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 19,
    winner: "Spencer Lee",
    winner_school: "Iowa",
    loser: "Alonzo Allen",
    loser_school: "Tennessee-Chattanooga",
    result: "TF-1.5 1:41 (18-0)"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 20,
    winner: "Luke Welch",
    winner_school: "Purdue",
    loser: "Connor Brown",
    loser_school: "South Dakota State",
    result: "Dec 10-5"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 21,
    winner: "Sean Russell",
    winner_school: "Edinboro",
    loser: "Gage Curry",
    loser_school: "American",
    result: "MD 16-3"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 22,
    winner: "Nicholas Piccininni",
    winner_school: "Oklahoma State",
    loser: "Travis Piotrowski",
    loser_school: "Illinois",
    result: "Fall 1:47"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 23,
    winner: "Taylor LaMont",
    winner_school: "Utah Valley",
    loser: "Brock Hudkins",
    loser_school: "Northern Illnois",
    result: "Dec 3-2"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 24,
    winner: "Sebastian Rivera",
    winner_school: "Northwestern",
    loser: "Ibrahim Bunduka",
    loser_school: "George Mason",
    result: "MD 14-3"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 25,
    winner: "Ryan Millhof",
    winner_school: "Arizona State",
    loser: "Christian Moody",
    loser_school: "Oklahoma",
    result: "Dec 4-3"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 26,
    winner: "Nathan Tomasello",
    winner_school: "Ohio State",
    loser: "Gabe Townsell",
    loser_school: "Stanford",
    result: "Fall 2:19"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 27,
    winner: "Seth Gross",
    winner_school: "South Dakota State",
    loser: "Matthew Schmitt",
    loser_school: "West Virginia",
    result: "MD 15-2"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 28,
    winner: "Mitch McKee",
    winner_school: "Minnesota",
    loser: "Joshua Finesilver",
    loser_school: "Duke",
    result: "Dec 11-6"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 29,
    winner: "Dennis Gustafson",
    winner_school: "Virginia Tech",
    loser: "Charles Tucker",
    loser_school: "Cornell",
    result: "Dec 4-1"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 30,
    winner: "Montorie Bridges",
    winner_school: "Wyoming",
    loser: "Ben Thornton",
    loser_school: "Purdue",
    result: "MD 16-3"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 31,
    winner: "Tariq Wilson",
    winner_school: "NC State",
    loser: "John Erneste",
    loser_school: "Missouri",
    result: "Dec 8-3"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 32,
    winner: "Rico Montoya",
    winner_school: "Northern Colorado",
    loser: "Josh Terao",
    loser_school: "American",
    result: "Dec 10-5"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 33,
    winner: "Bryan Lantry",
    winner_school: "Buffalo",
    loser: "Colin Valdiviez",
    loser_school: "Northwestern",
    result: "Dec 4-1"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 34,
    winner: "Kaid Brock",
    winner_school: "Oklahoma State",
    loser: "Dylan Duncan",
    loser_school: "Illinois",
    result: "Dec 7-4"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 35,
    winner: "Luke Pletcher",
    winner_school: "Ohio State",
    loser: "Mason Pengilly",
    loser_school: "Stanford",
    result: "Dec 2-1"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 36,
    winner: "Korbin Myers",
    winner_school: "Edinboro",
    loser: "Scott Delvecchio",
    loser_school: "Rutgers",
    result: "Dec 4-0"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 37,
    winner: "Dom Forys",
    winner_school: "Pittsburgh",
    loser: "Corey Keener",
    loser_school: "Penn State",
    result: "Fall 4:57"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 38,
    winner: "Scott Parker",
    winner_school: "Lehigh",
    loser: "Cam Sykora",
    loser_school: "North Dakota State",
    result: "TB-1 2-1"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 39,
    winner: "Austin DeSanto",
    winner_school: "Drexel",
    loser: "John Muldoon",
    loser_school: "Southern Illinois",
    result: "M. For."
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 40,
    winner: "Jack Mueller",
    winner_school: "Virginia",
    loser: "Sean Nickell",
    loser_school: "Cal State Bakersfield",
    result: "TF-1.5 6:00 (17-1)"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 41,
    winner: "Anthony Tutolo",
    winner_school: "Kent State",
    loser: "Ali Naser",
    loser_school: "Arizona State",
    result: "Dec 5-2"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 42,
    winner: "Stevan Micic",
    winner_school: "Michigan",
    loser: "Zachary Sherman",
    loser_school: "North Carolina",
    result: "MD 16-5"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 43,
    winner: "Bryce Meredith",
    winner_school: "Wyoming",
    loser: "Colton Schilling",
    loser_school: "California Poly",
    result: "Dec 5-1"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 44,
    winner: "Vincent Turk",
    winner_school: "Iowa",
    loser: "Cole Weaver",
    loser_school: "Indiana",
    result: "Dec 4-3"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 45,
    winner: "Sa`Derian Perry",
    winner_school: "Eastern Michigan",
    loser: "Josh Alber",
    loser_school: "Northern Iowa",
    result: "Dec 11-5"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 46,
    winner: "Ryan Diehl",
    winner_school: "Maryland",
    loser: "Nick Lee",
    loser_school: "Penn State",
    result: "Fall 2:13"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 47,
    winner: "Kevin Jack",
    winner_school: "NC State",
    loser: "Russell Rohlfing",
    loser_school: "Cal State Bakersfield",
    result: "MD 10-0"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 48,
    winner: "Tyler Smith",
    winner_school: "Bucknell",
    loser: "Brent Moore",
    loser_school: "Virginia Tech",
    result: "Dec 7-0"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 49,
    winner: "Luke Karam",
    winner_school: "Lehigh",
    loser: "Tejon Anthony",
    loser_school: "George Mason",
    result: "Dec 5-4"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 50,
    winner: "Joey McKenna",
    winner_school: "Ohio State",
    loser: "Alex Madrigal",
    loser_school: "Old Dominion",
    result: "TF-1.5 5:20 (16-1)"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 51,
    winner: "Yianni Diakomihalis",
    winner_school: "Cornell",
    loser: "Nick Zanetta",
    loser_school: "Pittsburgh",
    result: "MD 10-1"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 52,
    winner: "Nicholas Gil",
    winner_school: "Navy",
    loser: "Irvin Enriquez",
    loser_school: "Appalachian State",
    result: "Dec 9-6"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 53,
    winner: "Michael Carr",
    winner_school: "Illinois",
    loser: "Henry Pohlmeyer",
    loser_school: "South Dakota State",
    result: "Dec 8-1"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 54,
    winner: "Dean Heil",
    winner_school: "Oklahoma State",
    loser: "Evan Cheek",
    loser_school: "Cleveland State University",
    result: "Dec 4-2"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 55,
    winner: "Brock Zacherl",
    winner_school: "Clarion",
    loser: "Chad Red",
    loser_school: "Nebraska",
    result: "Dec 4-2"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 56,
    winner: "Mason Smith",
    winner_school: "Central Michigan",
    loser: "Thomas Thorn",
    loser_school: "Minnesota",
    result: "Dec 3-0"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 57,
    winner: "Eli Stickley",
    winner_school: "Wisconsin",
    loser: "Nate Limmex",
    loser_school: "Purdue",
    result: "Dec 3-2"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 58,
    winner: "Jaydin Eierman",
    winner_school: "Missouri",
    loser: "Austin Headlee",
    loser_school: "North Carolina",
    result: "Dec 12-6"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 59,
    winner: "Zain Retherford",
    winner_school: "Penn State",
    loser: "Kyle Springer",
    loser_school: "Eastern Michigan",
    result: "TF-1.5 7:00 (16-1)"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 60,
    winner: "Alfred Bannister",
    winner_school: "Maryland",
    loser: "Sam Turner",
    loser_school: "Wyoming",
    result: "TB-1 4-3"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 61,
    winner: "Max Thomsen",
    winner_school: "Northern Iowa",
    loser: "Khristian Olivas",
    loser_school: "Fresno State",
    result: "MD 13-5"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 62,
    winner: "Boo Lewallen",
    winner_school: "Oklahoma State",
    loser: "Davion Jeffries",
    loser_school: "Oklahoma",
    result: "Dec 7-3"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 63,
    winner: "Ke-Shawn Hayes",
    winner_school: "Ohio State",
    loser: "Malik Amine",
    loser_school: "Michigan",
    result: "TB-1 6-5"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 64,
    winner: "Ryan Blees",
    winner_school: "Virginia Tech",
    loser: "Michael Sprague",
    loser_school: "American",
    result: "TB-1 4-3"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 65,
    winner: "Jarrett Degen",
    winner_school: "Iowa State",
    loser: "Colton McCrystal",
    loser_school: "Nebraska",
    result: "Dec 9-5"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 66,
    winner: "Troy Heilmann",
    winner_school: "North Carolina",
    loser: "Tyshawn Williams",
    loser_school: "Southern Illinois",
    result: "MD 9-0"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 67,
    winner: "Grant Leeth",
    winner_school: "Missouri",
    loser: "Steve Bleise",
    loser_school: "Minnesota",
    result: "Dec 11-7"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 68,
    winner: "Beau Donahue",
    winner_school: "NC State",
    loser: "Cole Martin",
    loser_school: "Wisconsin",
    result: "SV-2 4-2"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 69,
    winner: "Matthew Kolodzik",
    winner_school: "Princeton",
    loser: "Taylor Ortz",
    loser_school: "Clarion",
    result: "Dec 8-2"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 70,
    winner: "Justin Oliver",
    winner_school: "Central Michigan",
    loser: "Sam Krivus",
    loser_school: "Virginia",
    result: "Dec 3-1"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 71,
    winner: "Ryan Deakin",
    winner_school: "Northwestern",
    loser: "Frank Garcia",
    loser_school: "Binghamton",
    result: "Dec 7-0"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 72,
    winner: "Jason Tsirtis",
    winner_school: "Arizona State",
    loser: "Dane Robbins",
    loser_school: "Air Force",
    result: "TB-1 2-1"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 73,
    winner: "Ronald Perry",
    winner_school: "Lock Haven",
    loser: "Cortlandt Schuyler",
    loser_school: "Lehigh",
    result: "MD 11-3"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 74,
    winner: "Brandon Sorensen",
    winner_school: "Iowa",
    loser: "Jared Prince",
    loser_school: "Navy",
    result: "Dec 11-6"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 75,
    winner: "Hayden Hidlay",
    winner_school: "NC State",
    loser: "Garett Hammond",
    loser_school: "Drexel",
    result: "MD 13-5"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 76,
    winner: "Taleb Rahmani",
    winner_school: "Pittsburgh",
    loser: "Mike D`Angelo",
    loser_school: "Princeton",
    result: "Fall 5:53"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 77,
    winner: "Archie Colgan",
    winner_school: "Wyoming",
    loser: "Hunter Willits",
    loser_school: "Oregon State",
    result: "SV-1 3-1"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 78,
    winner: "Tyler Berger",
    winner_school: "Nebraska",
    loser: "Joseph Velliquette",
    loser_school: "Penn",
    result: "Dec 9-3"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 79,
    winner: "Alec Pantaleo",
    winner_school: "Michigan",
    loser: "Ian Brown",
    loser_school: "Lehigh",
    result: "MD 12-4"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 80,
    winner: "Mitchell Finesilver",
    winner_school: "Duke",
    loser: "Casey Sparkman",
    loser_school: "Kent State",
    result: "MD 12-3"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 81,
    winner: "Luke Zilverberg",
    winner_school: "South Dakota State",
    loser: "Justin Staudenmayer",
    loser_school: "Brown",
    result: "Dec 6-1"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 82,
    winner: "Joshua Shields",
    winner_school: "Arizona State",
    loser: "Jake Short",
    loser_school: "Minnesota",
    result: "Dec 4-3"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 83,
    winner: "Jason Nolf",
    winner_school: "Penn State",
    loser: "Colin Heffernan",
    loser_school: "Central Michigan",
    result: "TF-1.5 7:00 (22-7)"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 84,
    winner: "Andrew Crone",
    winner_school: "Wisconsin",
    loser: "Larry Early",
    loser_school: "Old Dominion",
    result: "Fall 6:46"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 85,
    winner: "Paul Fox",
    winner_school: "Stanford",
    loser: "Clayton Ream",
    loser_school: "North Dakota State",
    result: "Dec 4-2"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 86,
    winner: "Michael Kemerer",
    winner_school: "Iowa",
    loser: "Coleman Hammond",
    loser_school: "Cal State Bakersfield",
    result: "Fall 1:38"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 87,
    winner: "Micah Jordan",
    winner_school: "Ohio State",
    loser: "Luke Weiland",
    loser_school: "Army",
    result: "MD 14-5"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 88,
    winner: "Markus Scheidel",
    winner_school: "Columbia",
    loser: "Andrew Shomers",
    loser_school: "Edinboro",
    result: "Dec 6-4"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 89,
    winner: "John Van Brill",
    winner_school: "Rutgers",
    loser: "Alex Klucker",
    loser_school: "Lock Haven",
    result: "Fall 4:21"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 90,
    winner: "Kennedy Monday",
    winner_school: "North Carolina",
    loser: "Joseph Lavallee",
    loser_school: "Missouri",
    result: "Dec 8-6"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 91,
    winner: "Isaiah Martinez",
    winner_school: "Illinois",
    loser: "Zachary Carson",
    loser_school: "Eastern Michigan",
    result: "TF-1.5 4:21 (20-5)"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 92,
    winner: "Jonathon Chavez",
    winner_school: "Cornell",
    loser: "Andrew Atkinson",
    loser_school: "Virginia",
    result: "MD 14-3"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 93,
    winner: "Chance Marsteller",
    winner_school: "Lock Haven",
    loser: "Bryce Martin",
    loser_school: "Indiana",
    result: "MD 9-1"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 94,
    winner: "Jonathan Viruet",
    winner_school: "Brown",
    loser: "Chandler Rogers",
    loser_school: "Oklahoma State",
    result: "Dec 6-5"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 95,
    winner: "Alex Marinelli",
    winner_school: "Iowa",
    loser: "Jacob Morrissey",
    loser_school: "Purdue",
    result: "Fall 6:20"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 96,
    winner: "Nicholas Wanzek",
    winner_school: "Minnesota",
    loser: "Keilan Torres",
    loser_school: "Northern Colorado",
    result: "Fall 6:55"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 97,
    winner: "Te`shan Campbell",
    winner_school: "Ohio State",
    loser: "Dawaylon Barnes",
    loser_school: "Oklahoma",
    result: "Dec 4-2"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 98,
    winner: "Chad Walsh",
    winner_school: "Rider",
    loser: "Gordon Wolf",
    loser_school: "Lehigh",
    result: "MD 17-6"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 99,
    winner: "Vincenzo Joseph",
    winner_school: "Penn State",
    loser: "Jonathan Schleifer",
    loser_school: "Princeton",
    result: "MD 15-4"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 100,
    winner: "Branson Ashworth",
    winner_school: "Wyoming",
    loser: "Connor Flynn",
    loser_school: "Missouri",
    result: "Dec 5-2"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 101,
    winner: "Isaiah White",
    winner_school: "Nebraska",
    loser: "Demetrius Romero",
    loser_school: "Utah Valley",
    result: "Dec 9-4"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 102,
    winner: "Richie Lewis",
    winner_school: "Rutgers",
    loser: "Quentin Perez",
    loser_school: "Campbell University",
    result: "MD 14-5"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 103,
    winner: "Logan Massa",
    winner_school: "Michigan",
    loser: "Nate Higgins",
    loser_school: "Southern Illinois",
    result: "MD 16-5"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 104,
    winner: "Evan Wick",
    winner_school: "Wisconsin",
    loser: "Drew Daniels",
    loser_school: "Navy",
    result: "Dec 11-4"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 105,
    winner: "Anthony Valencia",
    winner_school: "Arizona State",
    loser: "Andrew Fogarty",
    loser_school: "North Dakota State",
    result: "MD 13-4"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 106,
    winner: "David McFadden",
    winner_school: "Virginia Tech",
    loser: "Zach Finesilver",
    loser_school: "Duke",
    result: "Dec 4-0"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 107,
    winner: "Zahid Valencia",
    winner_school: "Arizona State",
    loser: "Matthew Finesilver",
    loser_school: "Duke",
    result: "MD 14-4"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 108,
    winner: "Christian Brucki",
    winner_school: "Central Michigan",
    loser: "Seldon Wright",
    loser_school: "Old Dominion",
    result: "MD 10-2"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 109,
    winner: "Keaton Subjeck",
    winner_school: "Stanford",
    loser: "Devin Skatzka",
    loser_school: "Indiana",
    result: "Dec 8-4"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 110,
    winner: "Jadaen Bernstein",
    winner_school: "Navy",
    loser: "Ty Schoffstall",
    loser_school: "Edinboro",
    result: "Dec 8-4"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 111,
    winner: "Myles Amine",
    winner_school: "Michigan",
    loser: "Tyrel White",
    loser_school: "Columbia",
    result: "Dec 6-0"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 112,
    winner: "Forrest Przybysz",
    winner_school: "Appalachian State",
    loser: "Ryan Christensen",
    loser_school: "Wisconsin",
    result: "Dec 7-2"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 113,
    winner: "Jacobe Smith",
    winner_school: "Oklahoma State",
    loser: "Joseph Gunther",
    loser_school: "Iowa",
    result: "MD 13-2"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 114,
    winner: "Jordan Kutler",
    winner_school: "Lehigh",
    loser: "Josef Johnson",
    loser_school: "Harvard",
    result: "Dec 2-0"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 115,
    winner: "Daniel Lewis",
    winner_school: "Missouri",
    loser: "Dean Sherry",
    loser_school: "Rider",
    result: "Fall 1:02"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 116,
    winner: "Yoanse Mejias",
    winner_school: "Oklahoma",
    loser: "Daniel Bullard",
    loser_school: "NC State",
    result: "SV-1 6-4"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 117,
    winner: "David Kocer",
    winner_school: "South Dakota State",
    loser: "Kimball Bastian",
    loser_school: "Utah Valley",
    result: "Dec 3-1"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 118,
    winner: "Bo Jordan",
    winner_school: "Ohio State",
    loser: "Brandon Womack",
    loser_school: "Cornell",
    result: "SV-1 4-2"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 119,
    winner: "Taylor Lujan",
    winner_school: "Northern Iowa",
    loser: "Will Schany",
    loser_school: "Virginia",
    result: "Dec 5-3"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 120,
    winner: "Ethan Ramos",
    winner_school: "North Carolina",
    loser: "Hunter Bolen",
    loser_school: "Virginia Tech",
    result: "Dec 7-3"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 121,
    winner: "Dylan Lydy",
    winner_school: "Purdue",
    loser: "Johnny Sebastian",
    loser_school: "Northwestern",
    result: "TB-1 6-2"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 122,
    winner: "Mark Hall",
    winner_school: "Penn State",
    loser: "Austin Rose",
    loser_school: "Drexel",
    result: "MD 12-2"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 123,
    winner: "Bo Nickal",
    winner_school: "Penn State",
    loser: "Martin Mueller",
    loser_school: "South Dakota State",
    result: "MD 16-4"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 124,
    winner: "Jordan Ellingwood",
    winner_school: "Central Michigan",
    loser: "Kayne MacCallum",
    loser_school: "Eastern Michigan",
    result: "Dec 12-5"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 125,
    winner: "Maxwell Dean",
    winner_school: "Cornell",
    loser: "Dylan Gabel",
    loser_school: "Northern Colorado",
    result: "MD 11-3"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 126,
    winner: "Drew Foster",
    winner_school: "Northern Iowa",
    loser: "Kordell Norfleet",
    loser_school: "Arizona State",
    result: "Dec 6-1"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 127,
    winner: "Domenic Abounader",
    winner_school: "Michigan",
    loser: "Brandon Krone",
    loser_school: "Minnesota",
    result: "Dec 4-0"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 128,
    winner: "Corey Hazel",
    winner_school: "Lock Haven",
    loser: "Bryce Carr",
    loser_school: "Tennessee-Chattanooga",
    result: "TB-1 6-3"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 129,
    winner: "Steven Schneider",
    winner_school: "Binghamton",
    loser: "Joe Heyob",
    loser_school: "Penn",
    result: "Dec 4-1"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 130,
    winner: "Pete Renda",
    winner_school: "NC State",
    loser: "Keegan Moore",
    loser_school: "Oklahoma State",
    result: "Dec 9-2"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 131,
    winner: "Ryan Preisch",
    winner_school: "Lehigh",
    loser: "Greg Bulsak",
    loser_school: "Clarion",
    result: "Dec 5-1"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 132,
    winner: "Nick Gravina",
    winner_school: "Rutgers",
    loser: "Christian LaFragola",
    loser_school: "Brown",
    result: "Dec 6-0"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 133,
    winner: "Ricky Robertson",
    winner_school: "Wisconsin",
    loser: "Alexander DeCiantis",
    loser_school: "Drexel",
    result: "MD 13-2"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 134,
    winner: "Zack zavatsky",
    winner_school: "Virginia Tech",
    loser: "Michael Coleman",
    loser_school: "Navy",
    result: "Dec 9-2"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 135,
    winner: "Taylor Venz",
    winner_school: "Nebraska",
    loser: "Chaz Polson",
    loser_school: "Wyoming",
    result: "TF-1.5 6:49 (17-1)"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 136,
    winner: "Chip Ness",
    winner_school: "North Carolina",
    loser: "Emory Parker",
    loser_school: "Illinois",
    result: "Dec 4-3"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 137,
    winner: "Mitchell Bowman",
    winner_school: "Iowa",
    loser: "Canten Marriott",
    loser_school: "Missouri",
    result: "MD 10-2"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 138,
    winner: "Myles Martin",
    winner_school: "Ohio State",
    loser: "Bryce Gorman",
    loser_school: "Northern Illnois",
    result: "TF-1.5 7:00 (24-9)"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 139,
    winner: "Kollin Moore",
    winner_school: "Ohio State",
    loser: "Tanner Orndorff",
    loser_school: "Utah Valley",
    result: "Dec 12-8"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 140,
    winner: "Patrick Brucki",
    winner_school: "Princeton",
    loser: "Christian Brunner",
    loser_school: "Purdue",
    result: "Dec 8-6"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 141,
    winner: "Kyle Conel",
    winner_school: "Kent State",
    loser: "Preston Weigel",
    loser_school: "Oklahoma State",
    result: "Dec 5-0"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 142,
    winner: "Nate Rotert",
    winner_school: "South Dakota State",
    loser: "Hunter Ritter",
    loser_school: "Wisconsin",
    result: "Dec 6-2"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 143,
    winner: "Shakur Rasheed",
    winner_school: "Penn State",
    loser: "Sawyer Root",
    loser_school: "The Citadel",
    result: "MD 13-5"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 144,
    winner: "Daniel Chaid",
    winner_school: "North Carolina",
    loser: "Stephen Loiseau",
    loser_school: "Drexel",
    result: "MD 12-4"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 145,
    winner: "Jeric Kasunic",
    winner_school: "American",
    loser: "Dustin Conti",
    loser_school: "Clarion",
    result: "Dec 5-2"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 146,
    winner: "Michael Macchiavello",
    winner_school: "NC State",
    loser: "Thomas Lane",
    loser_school: "California Poly",
    result: "MD 13-4"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 147,
    winner: "Jared Haught",
    winner_school: "Virginia Tech",
    loser: "Jacob Seely",
    loser_school: "Northern Colorado",
    result: "MD 11-2"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 148,
    winner: "Cash Wilcke",
    winner_school: "Iowa",
    loser: "Eric Schultz",
    loser_school: "Nebraska",
    result: "Dec 4-3"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 149,
    winner: "Nathan Traxler",
    winner_school: "Stanford",
    loser: "Corey Griego",
    loser_school: "Oregon State",
    result: "Dec 9-3"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 150,
    winner: "William Miklus",
    winner_school: "Missouri",
    loser: "Jacob Holschlag",
    loser_school: "Northern Iowa",
    result: "Dec 7-3"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 151,
    winner: "Frank Mattiace",
    winner_school: "Penn",
    loser: "Rocco Caywood",
    loser_school: "Army",
    result: "Dec 5-4"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 152,
    winner: "Chris Weiler",
    winner_school: "Lehigh",
    loser: "Scottie Boykin",
    loser_school: "Tennessee-Chattanooga",
    result: "Dec 4-1"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 153,
    winner: "Matt Williams",
    winner_school: "Cal State Bakersfield",
    loser: "Jordan Atienza",
    loser_school: "Central Michigan",
    result: "Fall 2:16"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 154,
    winner: "Ben Darmstadt",
    winner_school: "Cornell",
    loser: "Jacob Smith",
    loser_school: "West Virginia",
    result: "Dec 3-0"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 155,
    winner: "Kyle Snyder",
    winner_school: "Ohio State",
    loser: "Ryan Solomon",
    loser_school: "Pittsburgh",
    result: "MD 15-5"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 156,
    winner: "Jere Heino",
    winner_school: "Campbell University",
    loser: "Matt Stencel",
    loser_school: "Central Michigan",
    result: "Dec 8-3"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 157,
    winner: "Derek White",
    winner_school: "Oklahoma State",
    loser: "Dustin Dennison",
    loser_school: "Utah Valley",
    result: "Dec 6-1"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 158,
    winner: "Tanner Hall",
    winner_school: "Arizona State",
    loser: "Garrett Ryan",
    loser_school: "Columbia",
    result: "Dec 4-0"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 159,
    winner: "Samuel Stoll",
    winner_school: "Iowa",
    loser: "Antonio Pelusi",
    loser_school: "Franklin & Marshall",
    result: "Fall 2:25"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 160,
    winner: "Youssif Hemida",
    winner_school: "Maryland",
    loser: "Tyler Love",
    loser_school: "Virginia",
    result: "MD 9-1"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 161,
    winner: "Shawn Streck",
    winner_school: "Purdue",
    loser: "William Miller",
    loser_school: "Edinboro",
    result: "Dec 11-5"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 162,
    winner: "Jacob Kasper",
    winner_school: "Duke",
    loser: "Aj Nevills",
    loser_school: "Fresno State",
    result: "Fall 6:28"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 163,
    winner: "Nick Nevills",
    winner_school: "Penn State",
    loser: "Stephen Suglio",
    loser_school: "Kent State",
    result: "Fall 5:24"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 164,
    winner: "Michael Boykin",
    winner_school: "NC State",
    loser: "Gage Hutchison",
    loser_school: "Eastern Michigan",
    result: "Fall 0:53"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 165,
    winner: "Mike Hughes",
    winner_school: "Hofstra",
    loser: "Jake Gunning",
    loser_school: "Buffalo",
    result: "Dec 6-0"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 166,
    winner: "Amar Dhesi",
    winner_school: "Oregon State",
    loser: "Andrew Dunn",
    loser_school: "Virginia Tech",
    result: "Dec 6-1"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 167,
    winner: "Nathan Butler",
    winner_school: "Stanford",
    loser: "Jeramy Sweany",
    loser_school: "Cornell",
    result: "TF-1.5 5:56 (15-0)"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 168,
    winner: "Jordan Wood",
    winner_school: "Lehigh",
    loser: "Cory Gilliland-Daniel",
    loser_school: "North Carolina",
    result: "Dec 2-0"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 169,
    winner: "Thomas Haines",
    winner_school: "Lock Haven",
    loser: "Conan Jennings",
    loser_school: "Northwestern",
    result: "Dec 7-2"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 170,
    winner: "Adam Coon",
    winner_school: "Michigan",
    loser: "Matt Voss",
    loser_school: "George Mason",
    result: "MD 12-3"
  },
  {
    round: "ConsPrelims",
    weight: "125",
    bout: 171,
    winner: "Sergio Mendez",
    winner_school: "Cal State Bakersfield",
    loser: "RayVon Foley",
    loser_school: "Michigan State",
    result: "Dec 12-9"
  },
  {
    round: "ConsPrelims",
    weight: "133",
    bout: 172,
    winner: "Ben Thornton",
    winner_school: "Purdue",
    loser: "Cameron Kelly",
    loser_school: "Ohio",
    result: "Dec 5-3"
  },
  {
    round: "ConsPrelims",
    weight: "141",
    bout: 173,
    winner: "Kyle Shoop",
    winner_school: "Lock Haven",
    loser: "Irvin Enriquez",
    loser_school: "Appalachian State",
    result: "TF-1.5 5:46 (16-0)"
  },
  {
    round: "ConsPrelims",
    weight: "149",
    bout: 174,
    winner: "Eleazar Deluca",
    winner_school: "Rutgers",
    loser: "Kyle Springer",
    loser_school: "Eastern Michigan",
    result: "Dec 3-2"
  },
  {
    round: "ConsPrelims",
    weight: "157",
    bout: 175,
    winner: "Mike D`Angelo",
    winner_school: "Princeton",
    loser: "Tyler Marinelli",
    loser_school: "Gardner-Webb",
    result: "Fall 3:55"
  },
  {
    round: "ConsPrelims",
    weight: "165",
    bout: 176,
    winner: "Zach Finesilver",
    winner_school: "Duke",
    loser: "May Bethea",
    loser_school: "Penn",
    result: "Dec 11-4"
  },
  {
    round: "ConsPrelims",
    weight: "174",
    bout: 177,
    winner: "Ben Harvey",
    winner_school: "Army",
    loser: "Will Schany",
    loser_school: "Virginia",
    result: "Dec 7-5"
  },
  {
    round: "ConsPrelims",
    weight: "184",
    bout: 178,
    winner: "Chaz Polson",
    winner_school: "Wyoming",
    loser: "Alan Clothier",
    loser_school: "Appalachian State",
    result: "Dec 8-5"
  },
  {
    round: "ConsPrelims",
    weight: "197",
    bout: 179,
    winner: "Randall Diabe",
    winner_school: "Appalachian State",
    loser: "Corey Griego",
    loser_school: "Oregon State",
    result: "Dec 8-4"
  },
  {
    round: "ConsPrelims",
    weight: "285",
    bout: 180,
    winner: "Antonio Pelusi",
    winner_school: "Franklin & Marshall",
    loser: "Brett Dempsey",
    loser_school: "American",
    result: "Dec 9-6"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 181,
    winner: "Darian Cruz",
    winner_school: "Lehigh",
    loser: "Drew Mattin",
    loser_school: "Michigan",
    result: "Dec 1-0"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 182,
    winner: "Ronnie Bresser",
    winner_school: "Oregon State",
    loser: "Ethan Lizak",
    loser_school: "Minnesota",
    result: "SV-1 4-2"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 183,
    winner: "Louie Hayes",
    winner_school: "Virginia",
    loser: "Sean Fausz",
    loser_school: "NC State",
    result: "SV-1 10-4"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 184,
    winner: "Nick Suriano",
    winner_school: "Rutgers",
    loser: "Zeke Moisey",
    loser_school: "West Virginia",
    result: "Fall 2:58"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 185,
    winner: "Spencer Lee",
    winner_school: "Iowa",
    loser: "Luke Welch",
    loser_school: "Purdue",
    result: "TF-1.5 3:59 (18-0)"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 186,
    winner: "Nicholas Piccininni",
    winner_school: "Oklahoma State",
    loser: "Sean Russell",
    loser_school: "Edinboro",
    result: "Dec 6-3"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 187,
    winner: "Taylor LaMont",
    winner_school: "Utah Valley",
    loser: "Sebastian Rivera",
    loser_school: "Northwestern",
    result: "Dec 6-5"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 188,
    winner: "Nathan Tomasello",
    winner_school: "Ohio State",
    loser: "Ryan Millhof",
    loser_school: "Arizona State",
    result: "Default 5:00"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 189,
    winner: "Seth Gross",
    winner_school: "South Dakota State",
    loser: "Mitch McKee",
    loser_school: "Minnesota",
    result: "MD 13-5"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 190,
    winner: "Montorie Bridges",
    winner_school: "Wyoming",
    loser: "Dennis Gustafson",
    loser_school: "Virginia Tech",
    result: "Dec 4-1"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 191,
    winner: "Tariq Wilson",
    winner_school: "NC State",
    loser: "Rico Montoya",
    loser_school: "Northern Colorado",
    result: "Dec 7-1"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 192,
    winner: "Kaid Brock",
    winner_school: "Oklahoma State",
    loser: "Bryan Lantry",
    loser_school: "Buffalo",
    result: "Dec 10-3"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 193,
    winner: "Luke Pletcher",
    winner_school: "Ohio State",
    loser: "Korbin Myers",
    loser_school: "Edinboro",
    result: "Dec 4-3"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 194,
    winner: "Scott Parker",
    winner_school: "Lehigh",
    loser: "Dom Forys",
    loser_school: "Pittsburgh",
    result: "Dec 7-5"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 195,
    winner: "Austin DeSanto",
    winner_school: "Drexel",
    loser: "Jack Mueller",
    loser_school: "Virginia",
    result: "MD 16-8"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 196,
    winner: "Stevan Micic",
    winner_school: "Michigan",
    loser: "Anthony Tutolo",
    loser_school: "Kent State",
    result: "MD 12-3"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 197,
    winner: "Bryce Meredith",
    winner_school: "Wyoming",
    loser: "Vincent Turk",
    loser_school: "Iowa",
    result: "Dec 5-2"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 198,
    winner: "Sa`Derian Perry",
    winner_school: "Eastern Michigan",
    loser: "Ryan Diehl",
    loser_school: "Maryland",
    result: "Dec 12-6"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 199,
    winner: "Tyler Smith",
    winner_school: "Bucknell",
    loser: "Kevin Jack",
    loser_school: "NC State",
    result: "SV-1 6-4"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 200,
    winner: "Joey McKenna",
    winner_school: "Ohio State",
    loser: "Luke Karam",
    loser_school: "Lehigh",
    result: "TF-1.5 5:18 (15-0)"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 201,
    winner: "Yianni Diakomihalis",
    winner_school: "Cornell",
    loser: "Nicholas Gil",
    loser_school: "Navy",
    result: "MD 13-4"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 202,
    winner: "Dean Heil",
    winner_school: "Oklahoma State",
    loser: "Michael Carr",
    loser_school: "Illinois",
    result: "Dec 6-2"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 203,
    winner: "Brock Zacherl",
    winner_school: "Clarion",
    loser: "Mason Smith",
    loser_school: "Central Michigan",
    result: "Dec 4-3"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 204,
    winner: "Jaydin Eierman",
    winner_school: "Missouri",
    loser: "Eli Stickley",
    loser_school: "Wisconsin",
    result: "Fall 0:31"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 205,
    winner: "Zain Retherford",
    winner_school: "Penn State",
    loser: "Alfred Bannister",
    loser_school: "Maryland",
    result: "Fall 2:29"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 206,
    winner: "Boo Lewallen",
    winner_school: "Oklahoma State",
    loser: "Max Thomsen",
    loser_school: "Northern Iowa",
    result: "Dec 10-6"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 207,
    winner: "Ke-Shawn Hayes",
    winner_school: "Ohio State",
    loser: "Ryan Blees",
    loser_school: "Virginia Tech",
    result: "Dec 12-6"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 208,
    winner: "Troy Heilmann",
    winner_school: "North Carolina",
    loser: "Jarrett Degen",
    loser_school: "Iowa State",
    result: "Dec 7-5"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 209,
    winner: "Grant Leeth",
    winner_school: "Missouri",
    loser: "Beau Donahue",
    loser_school: "NC State",
    result: "SV-1 3-1"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 210,
    winner: "Matthew Kolodzik",
    winner_school: "Princeton",
    loser: "Justin Oliver",
    loser_school: "Central Michigan",
    result: "Dec 3-2"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 211,
    winner: "Jason Tsirtis",
    winner_school: "Arizona State",
    loser: "Ryan Deakin",
    loser_school: "Northwestern",
    result: "Dec 4-3"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 212,
    winner: "Ronald Perry",
    winner_school: "Lock Haven",
    loser: "Brandon Sorensen",
    loser_school: "Iowa",
    result: "Dec 3-2"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 213,
    winner: "Hayden Hidlay",
    winner_school: "NC State",
    loser: "Taleb Rahmani",
    loser_school: "Pittsburgh",
    result: "Dec 4-2"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 214,
    winner: "Tyler Berger",
    winner_school: "Nebraska",
    loser: "Archie Colgan",
    loser_school: "Wyoming",
    result: "TB-1 2-1"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 215,
    winner: "Alec Pantaleo",
    winner_school: "Michigan",
    loser: "Mitchell Finesilver",
    loser_school: "Duke",
    result: "Dec 3-2"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 216,
    winner: "Luke Zilverberg",
    winner_school: "South Dakota State",
    loser: "Joshua Shields",
    loser_school: "Arizona State",
    result: "Dec 9-6"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 217,
    winner: "Jason Nolf",
    winner_school: "Penn State",
    loser: "Andrew Crone",
    loser_school: "Wisconsin",
    result: "Dec 6-1"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 218,
    winner: "Michael Kemerer",
    winner_school: "Iowa",
    loser: "Paul Fox",
    loser_school: "Stanford",
    result: "Fall 4:52"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 219,
    winner: "Micah Jordan",
    winner_school: "Ohio State",
    loser: "Markus Scheidel",
    loser_school: "Columbia",
    result: "Fall 3:10"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 220,
    winner: "John Van Brill",
    winner_school: "Rutgers",
    loser: "Kennedy Monday",
    loser_school: "North Carolina",
    result: "Dec 10-7"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 221,
    winner: "Isaiah Martinez",
    winner_school: "Illinois",
    loser: "Jonathon Chavez",
    loser_school: "Cornell",
    result: "Dec 10-5"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 222,
    winner: "Chance Marsteller",
    winner_school: "Lock Haven",
    loser: "Jonathan Viruet",
    loser_school: "Brown",
    result: "Dec 5-3"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 223,
    winner: "Alex Marinelli",
    winner_school: "Iowa",
    loser: "Nicholas Wanzek",
    loser_school: "Minnesota",
    result: "Fall 6:15"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 224,
    winner: "Chad Walsh",
    winner_school: "Rider",
    loser: "Te`shan Campbell",
    loser_school: "Ohio State",
    result: "MD 8-0"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 225,
    winner: "Vincenzo Joseph",
    winner_school: "Penn State",
    loser: "Branson Ashworth",
    loser_school: "Wyoming",
    result: "Dec 3-1"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 226,
    winner: "Isaiah White",
    winner_school: "Nebraska",
    loser: "Richie Lewis",
    loser_school: "Rutgers",
    result: "SV-1 3-1"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 227,
    winner: "Evan Wick",
    winner_school: "Wisconsin",
    loser: "Logan Massa",
    loser_school: "Michigan",
    result: "Dec 9-6"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 228,
    winner: "David McFadden",
    winner_school: "Virginia Tech",
    loser: "Anthony Valencia",
    loser_school: "Arizona State",
    result: "MD 14-3"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 229,
    winner: "Zahid Valencia",
    winner_school: "Arizona State",
    loser: "Christian Brucki",
    loser_school: "Central Michigan",
    result: "MD 18-5"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 230,
    winner: "Jadaen Bernstein",
    winner_school: "Navy",
    loser: "Keaton Subjeck",
    loser_school: "Stanford",
    result: "SV-1 12-10"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 231,
    winner: "Myles Amine",
    winner_school: "Michigan",
    loser: "Forrest Przybysz",
    loser_school: "Appalachian State",
    result: "TF-1.5 7:00 (18-3)"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 232,
    winner: "Jordan Kutler",
    winner_school: "Lehigh",
    loser: "Jacobe Smith",
    loser_school: "Oklahoma State",
    result: "Dec 4-2"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 233,
    winner: "Daniel Lewis",
    winner_school: "Missouri",
    loser: "Yoanse Mejias",
    loser_school: "Oklahoma",
    result: "MD 8-0"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 234,
    winner: "Bo Jordan",
    winner_school: "Ohio State",
    loser: "David Kocer",
    loser_school: "South Dakota State",
    result: "MD 11-3"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 235,
    winner: "Taylor Lujan",
    winner_school: "Northern Iowa",
    loser: "Ethan Ramos",
    loser_school: "North Carolina",
    result: "Dec 16-12"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 236,
    winner: "Mark Hall",
    winner_school: "Penn State",
    loser: "Dylan Lydy",
    loser_school: "Purdue",
    result: "TF-1.5 6:54 (21-3)"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 237,
    winner: "Bo Nickal",
    winner_school: "Penn State",
    loser: "Jordan Ellingwood",
    loser_school: "Central Michigan",
    result: "Dec 10-4"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 238,
    winner: "Maxwell Dean",
    winner_school: "Cornell",
    loser: "Drew Foster",
    loser_school: "Northern Iowa",
    result: "Dec 6-0"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 239,
    winner: "Domenic Abounader",
    winner_school: "Michigan",
    loser: "Corey Hazel",
    loser_school: "Lock Haven",
    result: "Dec 11-10"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 240,
    winner: "Pete Renda",
    winner_school: "NC State",
    loser: "Steven Schneider",
    loser_school: "Binghamton",
    result: "MD 9-0"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 241,
    winner: "Ryan Preisch",
    winner_school: "Lehigh",
    loser: "Nick Gravina",
    loser_school: "Rutgers",
    result: "Dec 3-2"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 242,
    winner: "Zack zavatsky",
    winner_school: "Virginia Tech",
    loser: "Ricky Robertson",
    loser_school: "Wisconsin",
    result: "Dec 9-6"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 243,
    winner: "Chip Ness",
    winner_school: "North Carolina",
    loser: "Taylor Venz",
    loser_school: "Nebraska",
    result: "Dec 11-6"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 244,
    winner: "Myles Martin",
    winner_school: "Ohio State",
    loser: "Mitchell Bowman",
    loser_school: "Iowa",
    result: "MD 17-5"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 245,
    winner: "Kollin Moore",
    winner_school: "Ohio State",
    loser: "Patrick Brucki",
    loser_school: "Princeton",
    result: "MD 14-4"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 246,
    winner: "Kyle Conel",
    winner_school: "Kent State",
    loser: "Nate Rotert",
    loser_school: "South Dakota State",
    result: "Dec 8-2"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 247,
    winner: "Shakur Rasheed",
    winner_school: "Penn State",
    loser: "Daniel Chaid",
    loser_school: "North Carolina",
    result: "MD 14-3"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 248,
    winner: "Michael Macchiavello",
    winner_school: "NC State",
    loser: "Jeric Kasunic",
    loser_school: "American",
    result: "MD 16-5"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 249,
    winner: "Jared Haught",
    winner_school: "Virginia Tech",
    loser: "Cash Wilcke",
    loser_school: "Iowa",
    result: "Dec 5-3"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 250,
    winner: "William Miklus",
    winner_school: "Missouri",
    loser: "Nathan Traxler",
    loser_school: "Stanford",
    result: "Dec 2-0"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 251,
    winner: "Chris Weiler",
    winner_school: "Lehigh",
    loser: "Frank Mattiace",
    loser_school: "Penn",
    result: "Dec 6-4"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 252,
    winner: "Ben Darmstadt",
    winner_school: "Cornell",
    loser: "Matt Williams",
    loser_school: "Cal State Bakersfield",
    result: "MD 15-4"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 253,
    winner: "Kyle Snyder",
    winner_school: "Ohio State",
    loser: "Jere Heino",
    loser_school: "Campbell University",
    result: "TF-1.5 6:41 (23-8)"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 254,
    winner: "Derek White",
    winner_school: "Oklahoma State",
    loser: "Tanner Hall",
    loser_school: "Arizona State",
    result: "TB-1 6-4"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 255,
    winner: "Youssif Hemida",
    winner_school: "Maryland",
    loser: "Samuel Stoll",
    loser_school: "Iowa",
    result: "Dec 7-2"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 256,
    winner: "Jacob Kasper",
    winner_school: "Duke",
    loser: "Shawn Streck",
    loser_school: "Purdue",
    result: "SV-1 4-2"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 257,
    winner: "Nick Nevills",
    winner_school: "Penn State",
    loser: "Michael Boykin",
    loser_school: "NC State",
    result: "TB-2 5-4"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 258,
    winner: "Amar Dhesi",
    winner_school: "Oregon State",
    loser: "Mike Hughes",
    loser_school: "Hofstra",
    result: "Fall 3:37"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 259,
    winner: "Nathan Butler",
    winner_school: "Stanford",
    loser: "Jordan Wood",
    loser_school: "Lehigh",
    result: "SV-1 3-1"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 260,
    winner: "Adam Coon",
    winner_school: "Michigan",
    loser: "Thomas Haines",
    loser_school: "Lock Haven",
    result: "Fall 1:47"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 261,
    winner: "Sergio Mendez",
    winner_school: "Cal State Bakersfield",
    loser: "Jacob Schwarm",
    loser_school: "Northern Iowa",
    result: "Fall 6:23"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 262,
    winner: "Elijah Oliver",
    winner_school: "Indiana",
    loser: "Barlow McGhee",
    loser_school: "Missouri",
    result: "Dec 8-1"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 263,
    winner: "Michael McGee",
    winner_school: "Old Dominion",
    loser: "Paul Bianchi",
    loser_school: "North Dakota State",
    result: "Dec 7-4"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 264,
    winner: "Kyle Norstrem",
    winner_school: "Virginia Tech",
    loser: "Gerald (JR) Wert",
    loser_school: "Rider",
    result: "Dec 9-7"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 265,
    winner: "Connor Brown",
    winner_school: "South Dakota State",
    loser: "Alonzo Allen",
    loser_school: "Tennessee-Chattanooga",
    result: "Dec 16-11"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 266,
    winner: "Travis Piotrowski",
    winner_school: "Illinois",
    loser: "Gage Curry",
    loser_school: "American",
    result: "MD 9-1"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 267,
    winner: "Brock Hudkins",
    winner_school: "Northern Illnois",
    loser: "Ibrahim Bunduka",
    loser_school: "George Mason",
    result: "Fall 2:21"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 268,
    winner: "Gabe Townsell",
    winner_school: "Stanford",
    loser: "Christian Moody",
    loser_school: "Oklahoma",
    result: "Dec 9-7"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 269,
    winner: "Matthew Schmitt",
    winner_school: "West Virginia",
    loser: "Joshua Finesilver",
    loser_school: "Duke",
    result: "MD 19-8"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 270,
    winner: "Charles Tucker",
    winner_school: "Cornell",
    loser: "Ben Thornton",
    loser_school: "Purdue",
    result: "Dec 10-4"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 271,
    winner: "John Erneste",
    winner_school: "Missouri",
    loser: "Josh Terao",
    loser_school: "American",
    result: "Fall 5:29"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 272,
    winner: "Colin Valdiviez",
    winner_school: "Northwestern",
    loser: "Dylan Duncan",
    loser_school: "Illinois",
    result: "Dec 7-5"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 273,
    winner: "Scott Delvecchio",
    winner_school: "Rutgers",
    loser: "Mason Pengilly",
    loser_school: "Stanford",
    result: "Dec 8-4"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 274,
    winner: "Corey Keener",
    winner_school: "Penn State",
    loser: "Cam Sykora",
    loser_school: "North Dakota State",
    result: "Dec 9-7"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 275,
    winner: "Sean Nickell",
    winner_school: "Cal State Bakersfield",
    loser: "John Muldoon",
    loser_school: "Southern Illinois",
    result: "For."
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 276,
    winner: "Zachary Sherman",
    winner_school: "North Carolina",
    loser: "Ali Naser",
    loser_school: "Arizona State",
    result: "SV-1 4-2"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 277,
    winner: "Cole Weaver",
    winner_school: "Indiana",
    loser: "Colton Schilling",
    loser_school: "California Poly",
    result: "Dec 7-6"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 278,
    winner: "Nick Lee",
    winner_school: "Penn State",
    loser: "Josh Alber",
    loser_school: "Northern Iowa",
    result: "Dec 7-3"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 279,
    winner: "Brent Moore",
    winner_school: "Virginia Tech",
    loser: "Russell Rohlfing",
    loser_school: "Cal State Bakersfield",
    result: "MD 8-0"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 280,
    winner: "Tejon Anthony",
    winner_school: "George Mason",
    loser: "Alex Madrigal",
    loser_school: "Old Dominion",
    result: "Dec 9-4"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 281,
    winner: "Nick Zanetta",
    winner_school: "Pittsburgh",
    loser: "Kyle Shoop",
    loser_school: "Lock Haven",
    result: "MD 10-1"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 282,
    winner: "Henry Pohlmeyer",
    winner_school: "South Dakota State",
    loser: "Evan Cheek",
    loser_school: "Cleveland State University",
    result: "Fall 5:49"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 283,
    winner: "Chad Red",
    winner_school: "Nebraska",
    loser: "Thomas Thorn",
    loser_school: "Minnesota",
    result: "Dec 8-3"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 284,
    winner: "Nate Limmex",
    winner_school: "Purdue",
    loser: "Austin Headlee",
    loser_school: "North Carolina",
    result: "MD 14-2"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 285,
    winner: "Eleazar Deluca",
    winner_school: "Rutgers",
    loser: "Sam Turner",
    loser_school: "Wyoming",
    result: "Dec 5-3"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 286,
    winner: "Khristian Olivas",
    winner_school: "Fresno State",
    loser: "Davion Jeffries",
    loser_school: "Oklahoma",
    result: "Dec 11-9"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 287,
    winner: "Malik Amine",
    winner_school: "Michigan",
    loser: "Michael Sprague",
    loser_school: "American",
    result: "Dec 7-6"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 288,
    winner: "Colton McCrystal",
    winner_school: "Nebraska",
    loser: "Tyshawn Williams",
    loser_school: "Southern Illinois",
    result: "Dec 5-2"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 289,
    winner: "Steve Bleise",
    winner_school: "Minnesota",
    loser: "Cole Martin",
    loser_school: "Wisconsin",
    result: "Dec 6-3"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 290,
    winner: "Sam Krivus",
    winner_school: "Virginia",
    loser: "Taylor Ortz",
    loser_school: "Clarion",
    result: "Dec 3-2"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 291,
    winner: "Frank Garcia",
    winner_school: "Binghamton",
    loser: "Dane Robbins",
    loser_school: "Air Force",
    result: "SV-1 7-5"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 292,
    winner: "Cortlandt Schuyler",
    winner_school: "Lehigh",
    loser: "Jared Prince",
    loser_school: "Navy",
    result: "Dec 4-3"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 293,
    winner: "Garett Hammond",
    winner_school: "Drexel",
    loser: "Mike D`Angelo",
    loser_school: "Princeton",
    result: "Fall 1:38"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 294,
    winner: "Joseph Velliquette",
    winner_school: "Penn",
    loser: "Hunter Willits",
    loser_school: "Oregon State",
    result: "Dec 6-1"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 295,
    winner: "Ian Brown",
    winner_school: "Lehigh",
    loser: "Casey Sparkman",
    loser_school: "Kent State",
    result: "SV-1 3-1"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 296,
    winner: "Jake Short",
    winner_school: "Minnesota",
    loser: "Justin Staudenmayer",
    loser_school: "Brown",
    result: "Dec 5-2"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 297,
    winner: "Larry Early",
    winner_school: "Old Dominion",
    loser: "Colin Heffernan",
    loser_school: "Central Michigan",
    result: "Dec 3-1"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 298,
    winner: "Clayton Ream",
    winner_school: "North Dakota State",
    loser: "Coleman Hammond",
    loser_school: "Cal State Bakersfield",
    result: "Dec 12-5"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 299,
    winner: "Luke Weiland",
    winner_school: "Army",
    loser: "Andrew Shomers",
    loser_school: "Edinboro",
    result: "MD 9-1"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 300,
    winner: "Joseph Lavallee",
    winner_school: "Missouri",
    loser: "Alex Klucker",
    loser_school: "Lock Haven",
    result: "Fall 1:14"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 301,
    winner: "Andrew Atkinson",
    winner_school: "Virginia",
    loser: "Zachary Carson",
    loser_school: "Eastern Michigan",
    result: "Fall 6:53"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 302,
    winner: "Chandler Rogers",
    winner_school: "Oklahoma State",
    loser: "Bryce Martin",
    loser_school: "Indiana",
    result: "TF-1.5 4:40 (16-1)"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 303,
    winner: "Keilan Torres",
    winner_school: "Northern Colorado",
    loser: "Jacob Morrissey",
    loser_school: "Purdue",
    result: "Fall 1:44"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 304,
    winner: "Gordon Wolf",
    winner_school: "Lehigh",
    loser: "Dawaylon Barnes",
    loser_school: "Oklahoma",
    result: "Dec 7-3"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 305,
    winner: "Connor Flynn",
    winner_school: "Missouri",
    loser: "Jonathan Schleifer",
    loser_school: "Princeton",
    result: "SV-1 5-3"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 306,
    winner: "Demetrius Romero",
    winner_school: "Utah Valley",
    loser: "Quentin Perez",
    loser_school: "Campbell University",
    result: "MD 14-4"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 307,
    winner: "Drew Daniels",
    winner_school: "Navy",
    loser: "Nate Higgins",
    loser_school: "Southern Illinois",
    result: "Dec 5-4"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 308,
    winner: "Andrew Fogarty",
    winner_school: "North Dakota State",
    loser: "Zach Finesilver",
    loser_school: "Duke",
    result: "Dec 5-1"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 309,
    winner: "Matthew Finesilver",
    winner_school: "Duke",
    loser: "Seldon Wright",
    loser_school: "Old Dominion",
    result: "Dec 4-1"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 310,
    winner: "Ty Schoffstall",
    winner_school: "Edinboro",
    loser: "Devin Skatzka",
    loser_school: "Indiana",
    result: "MD 13-5"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 311,
    winner: "Ryan Christensen",
    winner_school: "Wisconsin",
    loser: "Tyrel White",
    loser_school: "Columbia",
    result: "Dec 8-1"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 312,
    winner: "Josef Johnson",
    winner_school: "Harvard",
    loser: "Joseph Gunther",
    loser_school: "Iowa",
    result: "Dec 3-1"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 313,
    winner: "Daniel Bullard",
    winner_school: "NC State",
    loser: "Dean Sherry",
    loser_school: "Rider",
    result: "TF-1.5 3:34 (18-0)"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 314,
    winner: "Kimball Bastian",
    winner_school: "Utah Valley",
    loser: "Brandon Womack",
    loser_school: "Cornell",
    result: "Dec 8-5"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 315,
    winner: "Ben Harvey",
    winner_school: "Army",
    loser: "Hunter Bolen",
    loser_school: "Virginia Tech",
    result: "Dec 6-4"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 316,
    winner: "Johnny Sebastian",
    winner_school: "Northwestern",
    loser: "Austin Rose",
    loser_school: "Drexel",
    result: "Dec 6-1"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 317,
    winner: "Kayne MacCallum",
    winner_school: "Eastern Michigan",
    loser: "Martin Mueller",
    loser_school: "South Dakota State",
    result: "Dec 4-3"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 318,
    winner: "Dylan Gabel",
    winner_school: "Northern Colorado",
    loser: "Kordell Norfleet",
    loser_school: "Arizona State",
    result: "Dec 6-4"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 319,
    winner: "Bryce Carr",
    winner_school: "Tennessee-Chattanooga",
    loser: "Brandon Krone",
    loser_school: "Minnesota",
    result: "Dec 7-1"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 320,
    winner: "Joe Heyob",
    winner_school: "Penn",
    loser: "Keegan Moore",
    loser_school: "Oklahoma State",
    result: "Fall 3:32"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 321,
    winner: "Christian LaFragola",
    winner_school: "Brown",
    loser: "Greg Bulsak",
    loser_school: "Clarion",
    result: "Dec 7-6"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 322,
    winner: "Michael Coleman",
    winner_school: "Navy",
    loser: "Alexander DeCiantis",
    loser_school: "Drexel",
    result: "Dec 7-2"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 323,
    winner: "Emory Parker",
    winner_school: "Illinois",
    loser: "Chaz Polson",
    loser_school: "Wyoming",
    result: "MD 17-3"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 324,
    winner: "Canten Marriott",
    winner_school: "Missouri",
    loser: "Bryce Gorman",
    loser_school: "Northern Illnois",
    result: "Dec 6-0"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 325,
    winner: "Christian Brunner",
    winner_school: "Purdue",
    loser: "Tanner Orndorff",
    loser_school: "Utah Valley",
    result: "MD 10-1"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 326,
    winner: "Hunter Ritter",
    winner_school: "Wisconsin",
    loser: "Preston Weigel",
    loser_school: "Oklahoma State",
    result: "M. For."
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 327,
    winner: "Stephen Loiseau",
    winner_school: "Drexel",
    loser: "Sawyer Root",
    loser_school: "The Citadel",
    result: "Dec 17-14"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 328,
    winner: "Thomas Lane",
    winner_school: "California Poly",
    loser: "Dustin Conti",
    loser_school: "Clarion",
    result: "SV-1 3-1"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 329,
    winner: "Eric Schultz",
    winner_school: "Nebraska",
    loser: "Jacob Seely",
    loser_school: "Northern Colorado",
    result: "Dec 3-2"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 330,
    winner: "Jacob Holschlag",
    winner_school: "Northern Iowa",
    loser: "Randall Diabe",
    loser_school: "Appalachian State",
    result: "TF-1.5 4:43 (16-0)"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 331,
    winner: "Rocco Caywood",
    winner_school: "Army",
    loser: "Scottie Boykin",
    loser_school: "Tennessee-Chattanooga",
    result: "Dec 4-1"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 332,
    winner: "Jacob Smith",
    winner_school: "West Virginia",
    loser: "Jordan Atienza",
    loser_school: "Central Michigan",
    result: "Fall 2:55"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 333,
    winner: "Ryan Solomon",
    winner_school: "Pittsburgh",
    loser: "Matt Stencel",
    loser_school: "Central Michigan",
    result: "Fall 3:51"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 334,
    winner: "Garrett Ryan",
    winner_school: "Columbia",
    loser: "Dustin Dennison",
    loser_school: "Utah Valley",
    result: "Dec 9-3"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 335,
    winner: "Antonio Pelusi",
    winner_school: "Franklin & Marshall",
    loser: "Tyler Love",
    loser_school: "Virginia",
    result: "SV-1 3-1"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 336,
    winner: "William Miller",
    winner_school: "Edinboro",
    loser: "Aj Nevills",
    loser_school: "Fresno State",
    result: "Dec 8-4"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 337,
    winner: "Stephen Suglio",
    winner_school: "Kent State",
    loser: "Gage Hutchison",
    loser_school: "Eastern Michigan",
    result: "M. For."
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 338,
    winner: "Andrew Dunn",
    winner_school: "Virginia Tech",
    loser: "Jake Gunning",
    loser_school: "Buffalo",
    result: "M. For."
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 339,
    winner: "Jeramy Sweany",
    winner_school: "Cornell",
    loser: "Cory Gilliland-Daniel",
    loser_school: "North Carolina",
    result: "MD 12-2"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 340,
    winner: "Matt Voss",
    winner_school: "George Mason",
    loser: "Conan Jennings",
    loser_school: "Northwestern",
    result: "TB-2 6-3"
  },
  {
    round: "QuarterFinals",
    weight: "125",
    bout: 341,
    winner: "Darian Cruz",
    winner_school: "Lehigh",
    loser: "Ronnie Bresser",
    loser_school: "Oregon State",
    result: "Dec 2-0"
  },
  {
    round: "QuarterFinals",
    weight: "125",
    bout: 342,
    winner: "Nick Suriano",
    winner_school: "Rutgers",
    loser: "Louie Hayes",
    loser_school: "Virginia",
    result: "MD 8-0"
  },
  {
    round: "QuarterFinals",
    weight: "125",
    bout: 343,
    winner: "Spencer Lee",
    winner_school: "Iowa",
    loser: "Nicholas Piccininni",
    loser_school: "Oklahoma State",
    result: "Fall 3:58"
  },
  {
    round: "QuarterFinals",
    weight: "125",
    bout: 344,
    winner: "Nathan Tomasello",
    winner_school: "Ohio State",
    loser: "Taylor LaMont",
    loser_school: "Utah Valley",
    result: "MD 12-4"
  },
  {
    round: "QuarterFinals",
    weight: "133",
    bout: 345,
    winner: "Seth Gross",
    winner_school: "South Dakota State",
    loser: "Montorie Bridges",
    loser_school: "Wyoming",
    result: "Dec 7-3"
  },
  {
    round: "QuarterFinals",
    weight: "133",
    bout: 346,
    winner: "Tariq Wilson",
    winner_school: "NC State",
    loser: "Kaid Brock",
    loser_school: "Oklahoma State",
    result: "MD 13-5"
  },
  {
    round: "QuarterFinals",
    weight: "133",
    bout: 347,
    winner: "Luke Pletcher",
    winner_school: "Ohio State",
    loser: "Scott Parker",
    loser_school: "Lehigh",
    result: "Dec 3-1"
  },
  {
    round: "QuarterFinals",
    weight: "133",
    bout: 348,
    winner: "Stevan Micic",
    winner_school: "Michigan",
    loser: "Austin DeSanto",
    loser_school: "Drexel",
    result: "MD 13-1"
  },
  {
    round: "QuarterFinals",
    weight: "141",
    bout: 349,
    winner: "Bryce Meredith",
    winner_school: "Wyoming",
    loser: "Sa`Derian Perry",
    loser_school: "Eastern Michigan",
    result: "Fall 1:39"
  },
  {
    round: "QuarterFinals",
    weight: "141",
    bout: 350,
    winner: "Joey McKenna",
    winner_school: "Ohio State",
    loser: "Tyler Smith",
    loser_school: "Bucknell",
    result: "Dec 8-3"
  },
  {
    round: "QuarterFinals",
    weight: "141",
    bout: 351,
    winner: "Yianni Diakomihalis",
    winner_school: "Cornell",
    loser: "Dean Heil",
    loser_school: "Oklahoma State",
    result: "Dec 6-5"
  },
  {
    round: "QuarterFinals",
    weight: "141",
    bout: 352,
    winner: "Jaydin Eierman",
    winner_school: "Missouri",
    loser: "Brock Zacherl",
    loser_school: "Clarion",
    result: "Fall 2:04"
  },
  {
    round: "QuarterFinals",
    weight: "149",
    bout: 353,
    winner: "Zain Retherford",
    winner_school: "Penn State",
    loser: "Boo Lewallen",
    loser_school: "Oklahoma State",
    result: "TF-1.5 5:00 (20-2)"
  },
  {
    round: "QuarterFinals",
    weight: "149",
    bout: 354,
    winner: "Troy Heilmann",
    winner_school: "North Carolina",
    loser: "Ke-Shawn Hayes",
    loser_school: "Ohio State",
    result: "TB-1 2-1"
  },
  {
    round: "QuarterFinals",
    weight: "149",
    bout: 355,
    winner: "Matthew Kolodzik",
    winner_school: "Princeton",
    loser: "Grant Leeth",
    loser_school: "Missouri",
    result: "Dec 4-3"
  },
  {
    round: "QuarterFinals",
    weight: "149",
    bout: 356,
    winner: "Ronald Perry",
    winner_school: "Lock Haven",
    loser: "Jason Tsirtis",
    loser_school: "Arizona State",
    result: "Dec 7-4"
  },
  {
    round: "QuarterFinals",
    weight: "157",
    bout: 357,
    winner: "Hayden Hidlay",
    winner_school: "NC State",
    loser: "Tyler Berger",
    loser_school: "Nebraska",
    result: "Dec 3-2"
  },
  {
    round: "QuarterFinals",
    weight: "157",
    bout: 358,
    winner: "Alec Pantaleo",
    winner_school: "Michigan",
    loser: "Luke Zilverberg",
    loser_school: "South Dakota State",
    result: "Dec 8-5"
  },
  {
    round: "QuarterFinals",
    weight: "157",
    bout: 359,
    winner: "Jason Nolf",
    winner_school: "Penn State",
    loser: "Michael Kemerer",
    loser_school: "Iowa",
    result: "Dec 6-2"
  },
  {
    round: "QuarterFinals",
    weight: "157",
    bout: 360,
    winner: "Micah Jordan",
    winner_school: "Ohio State",
    loser: "John Van Brill",
    loser_school: "Rutgers",
    result: "MD 17-5"
  },
  {
    round: "QuarterFinals",
    weight: "165",
    bout: 361,
    winner: "Isaiah Martinez",
    winner_school: "Illinois",
    loser: "Chance Marsteller",
    loser_school: "Lock Haven",
    result: "MD 10-1"
  },
  {
    round: "QuarterFinals",
    weight: "165",
    bout: 362,
    winner: "Alex Marinelli",
    winner_school: "Iowa",
    loser: "Chad Walsh",
    loser_school: "Rider",
    result: "Dec 7-6"
  },
  {
    round: "QuarterFinals",
    weight: "165",
    bout: 363,
    winner: "Vincenzo Joseph",
    winner_school: "Penn State",
    loser: "Isaiah White",
    loser_school: "Nebraska",
    result: "SV-2 4-2"
  },
  {
    round: "QuarterFinals",
    weight: "165",
    bout: 364,
    winner: "David McFadden",
    winner_school: "Virginia Tech",
    loser: "Evan Wick",
    loser_school: "Wisconsin",
    result: "Dec 3-0"
  },
  {
    round: "QuarterFinals",
    weight: "174",
    bout: 365,
    winner: "Zahid Valencia",
    winner_school: "Arizona State",
    loser: "Jadaen Bernstein",
    loser_school: "Navy",
    result: "Fall 0:38"
  },
  {
    round: "QuarterFinals",
    weight: "174",
    bout: 366,
    winner: "Myles Amine",
    winner_school: "Michigan",
    loser: "Jordan Kutler",
    loser_school: "Lehigh",
    result: "Dec 3-2"
  },
  {
    round: "QuarterFinals",
    weight: "174",
    bout: 367,
    winner: "Daniel Lewis",
    winner_school: "Missouri",
    loser: "Bo Jordan",
    loser_school: "Ohio State",
    result: "Dec 3-1"
  },
  {
    round: "QuarterFinals",
    weight: "174",
    bout: 368,
    winner: "Mark Hall",
    winner_school: "Penn State",
    loser: "Taylor Lujan",
    loser_school: "Northern Iowa",
    result: "Dec 6-2"
  },
  {
    round: "QuarterFinals",
    weight: "184",
    bout: 369,
    winner: "Bo Nickal",
    winner_school: "Penn State",
    loser: "Maxwell Dean",
    loser_school: "Cornell",
    result: "Dec 13-7"
  },
  {
    round: "QuarterFinals",
    weight: "184",
    bout: 370,
    winner: "Domenic Abounader",
    winner_school: "Michigan",
    loser: "Pete Renda",
    loser_school: "NC State",
    result: "TB-2 11-9"
  },
  {
    round: "QuarterFinals",
    weight: "184",
    bout: 371,
    winner: "Zack zavatsky",
    winner_school: "Virginia Tech",
    loser: "Ryan Preisch",
    loser_school: "Lehigh",
    result: "SV-1 3-1"
  },
  {
    round: "QuarterFinals",
    weight: "184",
    bout: 372,
    winner: "Myles Martin",
    winner_school: "Ohio State",
    loser: "Chip Ness",
    loser_school: "North Carolina",
    result: "Dec 10-6"
  },
  {
    round: "QuarterFinals",
    weight: "197",
    bout: 373,
    winner: "Kyle Conel",
    winner_school: "Kent State",
    loser: "Kollin Moore",
    loser_school: "Ohio State",
    result: "Fall 1:30"
  },
  {
    round: "QuarterFinals",
    weight: "197",
    bout: 374,
    winner: "Michael Macchiavello",
    winner_school: "NC State",
    loser: "Shakur Rasheed",
    loser_school: "Penn State",
    result: "Dec 5-4"
  },
  {
    round: "QuarterFinals",
    weight: "197",
    bout: 375,
    winner: "Jared Haught",
    winner_school: "Virginia Tech",
    loser: "William Miklus",
    loser_school: "Missouri",
    result: "Dec 3-1"
  },
  {
    round: "QuarterFinals",
    weight: "197",
    bout: 376,
    winner: "Ben Darmstadt",
    winner_school: "Cornell",
    loser: "Chris Weiler",
    loser_school: "Lehigh",
    result: "Dec 5-4"
  },
  {
    round: "QuarterFinals",
    weight: "285",
    bout: 377,
    winner: "Kyle Snyder",
    winner_school: "Ohio State",
    loser: "Derek White",
    loser_school: "Oklahoma State",
    result: "Dec 6-3"
  },
  {
    round: "QuarterFinals",
    weight: "285",
    bout: 378,
    winner: "Jacob Kasper",
    winner_school: "Duke",
    loser: "Youssif Hemida",
    loser_school: "Maryland",
    result: "Dec 7-2"
  },
  {
    round: "QuarterFinals",
    weight: "285",
    bout: 379,
    winner: "Amar Dhesi",
    winner_school: "Oregon State",
    loser: "Nick Nevills",
    loser_school: "Penn State",
    result: "Dec 4-2"
  },
  {
    round: "QuarterFinals",
    weight: "285",
    bout: 380,
    winner: "Adam Coon",
    winner_school: "Michigan",
    loser: "Nathan Butler",
    loser_school: "Stanford",
    result: "Dec 7-0"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 381,
    winner: "Ryan Millhof",
    winner_school: "Arizona State",
    loser: "Sergio Mendez",
    loser_school: "Cal State Bakersfield",
    result: "TF-1.5 7:00 (17-2)"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 382,
    winner: "Sebastian Rivera",
    winner_school: "Northwestern",
    loser: "Elijah Oliver",
    loser_school: "Indiana",
    result: "Fall 4:49"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 383,
    winner: "Sean Russell",
    winner_school: "Edinboro",
    loser: "Michael McGee",
    loser_school: "Old Dominion",
    result: "Dec 8-1"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 384,
    winner: "Luke Welch",
    winner_school: "Purdue",
    loser: "Kyle Norstrem",
    loser_school: "Virginia Tech",
    result: "Fall 1:06"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 385,
    winner: "Zeke Moisey",
    winner_school: "West Virginia",
    loser: "Connor Brown",
    loser_school: "South Dakota State",
    result: "Dec 10-4"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 386,
    winner: "Travis Piotrowski",
    winner_school: "Illinois",
    loser: "Sean Fausz",
    loser_school: "NC State",
    result: "Dec 8-1"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 387,
    winner: "Ethan Lizak",
    winner_school: "Minnesota",
    loser: "Brock Hudkins",
    loser_school: "Northern Illnois",
    result: "Dec 7-2"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 388,
    winner: "Drew Mattin",
    winner_school: "Michigan",
    loser: "Gabe Townsell",
    loser_school: "Stanford",
    result: "Dec 4-1"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 389,
    winner: "Matthew Schmitt",
    winner_school: "West Virginia",
    loser: "Anthony Tutolo",
    loser_school: "Kent State",
    result: "SV-2 (Fall) 8:30"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 390,
    winner: "Jack Mueller",
    winner_school: "Virginia",
    loser: "Charles Tucker",
    loser_school: "Cornell",
    result: "Dec 8-4"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 391,
    winner: "John Erneste",
    winner_school: "Missouri",
    loser: "Dom Forys",
    loser_school: "Pittsburgh",
    result: "Fall 3:58"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 392,
    winner: "Colin Valdiviez",
    winner_school: "Northwestern",
    loser: "Korbin Myers",
    loser_school: "Edinboro",
    result: "Dec 5-2"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 393,
    winner: "Scott Delvecchio",
    winner_school: "Rutgers",
    loser: "Bryan Lantry",
    loser_school: "Buffalo",
    result: "Fall 6:59"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 394,
    winner: "Rico Montoya",
    winner_school: "Northern Colorado",
    loser: "Corey Keener",
    loser_school: "Penn State",
    result: "Fall 4:28"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 395,
    winner: "Sean Nickell",
    winner_school: "Cal State Bakersfield",
    loser: "Dennis Gustafson",
    loser_school: "Virginia Tech",
    result: "Dec 13-8"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 396,
    winner: "Mitch McKee",
    winner_school: "Minnesota",
    loser: "Zachary Sherman",
    loser_school: "North Carolina",
    result: "MD 12-2"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 397,
    winner: "Cole Weaver",
    winner_school: "Indiana",
    loser: "Eli Stickley",
    loser_school: "Wisconsin",
    result: "Dec 6-2"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 398,
    winner: "Nick Lee",
    winner_school: "Penn State",
    loser: "Mason Smith",
    loser_school: "Central Michigan",
    result: "Dec 5-0"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 399,
    winner: "Michael Carr",
    winner_school: "Illinois",
    loser: "Brent Moore",
    loser_school: "Virginia Tech",
    result: "Dec 8-5"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 400,
    winner: "Nicholas Gil",
    winner_school: "Navy",
    loser: "Tejon Anthony",
    loser_school: "George Mason",
    result: "Dec 3-2"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 401,
    winner: "Nick Zanetta",
    winner_school: "Pittsburgh",
    loser: "Luke Karam",
    loser_school: "Lehigh",
    result: "TB-1 3-2"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 402,
    winner: "Kevin Jack",
    winner_school: "NC State",
    loser: "Henry Pohlmeyer",
    loser_school: "South Dakota State",
    result: "MD 8-0"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 403,
    winner: "Chad Red",
    winner_school: "Nebraska",
    loser: "Ryan Diehl",
    loser_school: "Maryland",
    result: "Dec 8-3"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 404,
    winner: "Vincent Turk",
    winner_school: "Iowa",
    loser: "Nate Limmex",
    loser_school: "Purdue",
    result: "Dec 3-2"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 405,
    winner: "Brandon Sorensen",
    winner_school: "Iowa",
    loser: "Eleazar Deluca",
    loser_school: "Rutgers",
    result: "MD 13-0"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 406,
    winner: "Ryan Deakin",
    winner_school: "Northwestern",
    loser: "Khristian Olivas",
    loser_school: "Fresno State",
    result: "TF-1.5 7:00 (16-1)"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 407,
    winner: "Justin Oliver",
    winner_school: "Central Michigan",
    loser: "Malik Amine",
    loser_school: "Michigan",
    result: "Dec 7-1"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 408,
    winner: "Colton McCrystal",
    winner_school: "Nebraska",
    loser: "Beau Donahue",
    loser_school: "NC State",
    result: "Dec 10-4"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 409,
    winner: "Jarrett Degen",
    winner_school: "Iowa State",
    loser: "Steve Bleise",
    loser_school: "Minnesota",
    result: "SV-1 9-7"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 410,
    winner: "Sam Krivus",
    winner_school: "Virginia",
    loser: "Ryan Blees",
    loser_school: "Virginia Tech",
    result: "TF-1.5 5:56 (15-0)"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 411,
    winner: "Max Thomsen",
    winner_school: "Northern Iowa",
    loser: "Frank Garcia",
    loser_school: "Binghamton",
    result: "MD 14-4"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 412,
    winner: "Cortlandt Schuyler",
    winner_school: "Lehigh",
    loser: "Alfred Bannister",
    loser_school: "Maryland",
    result: "Dec 7-6"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 413,
    winner: "Kennedy Monday",
    winner_school: "North Carolina",
    loser: "Garett Hammond",
    loser_school: "Drexel",
    result: "MD 9-1"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 414,
    winner: "Markus Scheidel",
    winner_school: "Columbia",
    loser: "Joseph Velliquette",
    loser_school: "Penn",
    result: "MD 8-0"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 415,
    winner: "Paul Fox",
    winner_school: "Stanford",
    loser: "Ian Brown",
    loser_school: "Lehigh",
    result: "Dec 10-4"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 416,
    winner: "Jake Short",
    winner_school: "Minnesota",
    loser: "Andrew Crone",
    loser_school: "Wisconsin",
    result: "Dec 3-1"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 417,
    winner: "Joshua Shields",
    winner_school: "Arizona State",
    loser: "Larry Early",
    loser_school: "Old Dominion",
    result: "Dec 7-5"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 418,
    winner: "Mitchell Finesilver",
    winner_school: "Duke",
    loser: "Clayton Ream",
    loser_school: "North Dakota State",
    result: "MD 12-1"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 419,
    winner: "Luke Weiland",
    winner_school: "Army",
    loser: "Archie Colgan",
    loser_school: "Wyoming",
    result: "Dec 4-2"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 420,
    winner: "Joseph Lavallee",
    winner_school: "Missouri",
    loser: "Taleb Rahmani",
    loser_school: "Pittsburgh",
    result: "Dec 6-4"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 421,
    winner: "Anthony Valencia",
    winner_school: "Arizona State",
    loser: "Andrew Atkinson",
    loser_school: "Virginia",
    result: "Dec 4-3"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 422,
    winner: "Chandler Rogers",
    winner_school: "Oklahoma State",
    loser: "Logan Massa",
    loser_school: "Michigan",
    result: "SV-1 7-5"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 423,
    winner: "Richie Lewis",
    winner_school: "Rutgers",
    loser: "Keilan Torres",
    loser_school: "Northern Colorado",
    result: "Dec 12-5"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 424,
    winner: "Branson Ashworth",
    winner_school: "Wyoming",
    loser: "Gordon Wolf",
    loser_school: "Lehigh",
    result: "Dec 8-5"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 425,
    winner: "Te`shan Campbell",
    winner_school: "Ohio State",
    loser: "Connor Flynn",
    loser_school: "Missouri",
    result: "Dec 9-8"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 426,
    winner: "Nicholas Wanzek",
    winner_school: "Minnesota",
    loser: "Demetrius Romero",
    loser_school: "Utah Valley",
    result: "Dec 6-4"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 427,
    winner: "Drew Daniels",
    winner_school: "Navy",
    loser: "Jonathan Viruet",
    loser_school: "Brown",
    result: "Dec 5-3"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 428,
    winner: "Jonathon Chavez",
    winner_school: "Cornell",
    loser: "Andrew Fogarty",
    loser_school: "North Dakota State",
    result: "Dec 6-1"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 429,
    winner: "Dylan Lydy",
    winner_school: "Purdue",
    loser: "Matthew Finesilver",
    loser_school: "Duke",
    result: "Dec 5-3"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 430,
    winner: "Ethan Ramos",
    winner_school: "North Carolina",
    loser: "Ty Schoffstall",
    loser_school: "Edinboro",
    result: "Dec 12-6"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 431,
    winner: "David Kocer",
    winner_school: "South Dakota State",
    loser: "Ryan Christensen",
    loser_school: "Wisconsin",
    result: "Dec 5-3"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 432,
    winner: "Josef Johnson",
    winner_school: "Harvard",
    loser: "Yoanse Mejias",
    loser_school: "Oklahoma",
    result: "SV-1 2-1"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 433,
    winner: "Jacobe Smith",
    winner_school: "Oklahoma State",
    loser: "Daniel Bullard",
    loser_school: "NC State",
    result: "SV-1 6-4"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 434,
    winner: "Forrest Przybysz",
    winner_school: "Appalachian State",
    loser: "Kimball Bastian",
    loser_school: "Utah Valley",
    result: "SV-1 4-2"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 435,
    winner: "Ben Harvey",
    winner_school: "Army",
    loser: "Keaton Subjeck",
    loser_school: "Stanford",
    result: "Dec 7-4"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 436,
    winner: "Johnny Sebastian",
    winner_school: "Northwestern",
    loser: "Christian Brucki",
    loser_school: "Central Michigan",
    result: "MD 11-2"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 437,
    winner: "Mitchell Bowman",
    winner_school: "Iowa",
    loser: "Kayne MacCallum",
    loser_school: "Eastern Michigan",
    result: "TF-1.5 3:47 (19-2)"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 438,
    winner: "Taylor Venz",
    winner_school: "Nebraska",
    loser: "Dylan Gabel",
    loser_school: "Northern Colorado",
    result: "TF-1.5 7:00 (19-1)"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 439,
    winner: "Bryce Carr",
    winner_school: "Tennessee-Chattanooga",
    loser: "Ricky Robertson",
    loser_school: "Wisconsin",
    result: "SV-1 3-1"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 440,
    winner: "Nick Gravina",
    winner_school: "Rutgers",
    loser: "Joe Heyob",
    loser_school: "Penn",
    result: "Dec 6-5"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 441,
    winner: "Christian LaFragola",
    winner_school: "Brown",
    loser: "Steven Schneider",
    loser_school: "Binghamton",
    result: "Dec 5-3"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 442,
    winner: "Michael Coleman",
    winner_school: "Navy",
    loser: "Corey Hazel",
    loser_school: "Lock Haven",
    result: "MD 17-5"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 443,
    winner: "Emory Parker",
    winner_school: "Illinois",
    loser: "Drew Foster",
    loser_school: "Northern Iowa",
    result: "Dec 13-10"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 444,
    winner: "Jordan Ellingwood",
    winner_school: "Central Michigan",
    loser: "Canten Marriott",
    loser_school: "Missouri",
    result: "Dec 5-4"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 445,
    winner: "Matt Williams",
    winner_school: "Cal State Bakersfield",
    loser: "Christian Brunner",
    loser_school: "Purdue",
    result: "Dec 3-2"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 446,
    winner: "Frank Mattiace",
    winner_school: "Penn",
    loser: "Hunter Ritter",
    loser_school: "Wisconsin",
    result: "Dec 4-2"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 447,
    winner: "Nathan Traxler",
    winner_school: "Stanford",
    loser: "Stephen Loiseau",
    loser_school: "Drexel",
    result: "Dec 9-4"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 448,
    winner: "Cash Wilcke",
    winner_school: "Iowa",
    loser: "Thomas Lane",
    loser_school: "California Poly",
    result: "Fall 4:12"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 449,
    winner: "Eric Schultz",
    winner_school: "Nebraska",
    loser: "Jeric Kasunic",
    loser_school: "American",
    result: "Dec 3-2"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 450,
    winner: "Jacob Holschlag",
    winner_school: "Northern Iowa",
    loser: "Daniel Chaid",
    loser_school: "North Carolina",
    result: "Dec 10-5"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 451,
    winner: "Nate Rotert",
    winner_school: "South Dakota State",
    loser: "Rocco Caywood",
    loser_school: "Army",
    result: "Dec 9-3"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 452,
    winner: "Jacob Smith",
    winner_school: "West Virginia",
    loser: "Patrick Brucki",
    loser_school: "Princeton",
    result: "Dec 2-0"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 453,
    winner: "Thomas Haines",
    winner_school: "Lock Haven",
    loser: "Ryan Solomon",
    loser_school: "Pittsburgh",
    result: "Dec 10-6"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 454,
    winner: "Jordan Wood",
    winner_school: "Lehigh",
    loser: "Garrett Ryan",
    loser_school: "Columbia",
    result: "Dec 3-2"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 455,
    winner: "Mike Hughes",
    winner_school: "Hofstra",
    loser: "Antonio Pelusi",
    loser_school: "Franklin & Marshall",
    result: "Fall 2:33"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 456,
    winner: "William Miller",
    winner_school: "Edinboro",
    loser: "Michael Boykin",
    loser_school: "NC State",
    result: "MD 11-1"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 457,
    winner: "Shawn Streck",
    winner_school: "Purdue",
    loser: "Stephen Suglio",
    loser_school: "Kent State",
    result: "MD 12-3"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 458,
    winner: "Samuel Stoll",
    winner_school: "Iowa",
    loser: "Andrew Dunn",
    loser_school: "Virginia Tech",
    result: "Dec 7-0"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 459,
    winner: "Tanner Hall",
    winner_school: "Arizona State",
    loser: "Jeramy Sweany",
    loser_school: "Cornell",
    result: "Dec 6-4"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 460,
    winner: "Jere Heino",
    winner_school: "Campbell University",
    loser: "Matt Voss",
    loser_school: "George Mason",
    result: "Dec 8-3"
  },
  {
    round: "ConsR3",
    weight: "125",
    bout: 461,
    winner: "Sebastian Rivera",
    winner_school: "Northwestern",
    loser: "Ryan Millhof",
    loser_school: "Arizona State",
    result: "Dec 5-2"
  },
  {
    round: "ConsR3",
    weight: "125",
    bout: 462,
    winner: "Luke Welch",
    winner_school: "Purdue",
    loser: "Sean Russell",
    loser_school: "Edinboro",
    result: "Dec 4-3"
  },
  {
    round: "ConsR3",
    weight: "125",
    bout: 463,
    winner: "Zeke Moisey",
    winner_school: "West Virginia",
    loser: "Travis Piotrowski",
    loser_school: "Illinois",
    result: "Dec 5-0"
  },
  {
    round: "ConsR3",
    weight: "125",
    bout: 464,
    winner: "Ethan Lizak",
    winner_school: "Minnesota",
    loser: "Drew Mattin",
    loser_school: "Michigan",
    result: "MD 17-6"
  },
  {
    round: "ConsR3",
    weight: "133",
    bout: 465,
    winner: "Jack Mueller",
    winner_school: "Virginia",
    loser: "Matthew Schmitt",
    loser_school: "West Virginia",
    result: "Dec 5-2"
  },
  {
    round: "ConsR3",
    weight: "133",
    bout: 466,
    winner: "John Erneste",
    winner_school: "Missouri",
    loser: "Colin Valdiviez",
    loser_school: "Northwestern",
    result: "MD 8-0"
  },
  {
    round: "ConsR3",
    weight: "133",
    bout: 467,
    winner: "Scott Delvecchio",
    winner_school: "Rutgers",
    loser: "Rico Montoya",
    loser_school: "Northern Colorado",
    result: "Fall 1:00"
  },
  {
    round: "ConsR3",
    weight: "133",
    bout: 468,
    winner: "Mitch McKee",
    winner_school: "Minnesota",
    loser: "Sean Nickell",
    loser_school: "Cal State Bakersfield",
    result: "Dec 12-5"
  },
  {
    round: "ConsR3",
    weight: "141",
    bout: 469,
    winner: "Nick Lee",
    winner_school: "Penn State",
    loser: "Cole Weaver",
    loser_school: "Indiana",
    result: "MD 13-5"
  },
  {
    round: "ConsR3",
    weight: "141",
    bout: 470,
    winner: "Michael Carr",
    winner_school: "Illinois",
    loser: "Nicholas Gil",
    loser_school: "Navy",
    result: "Dec 5-4"
  },
  {
    round: "ConsR3",
    weight: "141",
    bout: 471,
    winner: "Kevin Jack",
    winner_school: "NC State",
    loser: "Nick Zanetta",
    loser_school: "Pittsburgh",
    result: "Dec 4-0"
  },
  {
    round: "ConsR3",
    weight: "141",
    bout: 472,
    winner: "Chad Red",
    winner_school: "Nebraska",
    loser: "Vincent Turk",
    loser_school: "Iowa",
    result: "Dec 3-2"
  },
  {
    round: "ConsR3",
    weight: "149",
    bout: 473,
    winner: "Brandon Sorensen",
    winner_school: "Iowa",
    loser: "Ryan Deakin",
    loser_school: "Northwestern",
    result: "Dec 4-2"
  },
  {
    round: "ConsR3",
    weight: "149",
    bout: 474,
    winner: "Justin Oliver",
    winner_school: "Central Michigan",
    loser: "Colton McCrystal",
    loser_school: "Nebraska",
    result: "Dec 5-2"
  },
  {
    round: "ConsR3",
    weight: "149",
    bout: 475,
    winner: "Jarrett Degen",
    winner_school: "Iowa State",
    loser: "Sam Krivus",
    loser_school: "Virginia",
    result: "MD 8-0"
  },
  {
    round: "ConsR3",
    weight: "149",
    bout: 476,
    winner: "Max Thomsen",
    winner_school: "Northern Iowa",
    loser: "Cortlandt Schuyler",
    loser_school: "Lehigh",
    result: "Dec 11-8"
  },
  {
    round: "ConsR3",
    weight: "157",
    bout: 477,
    winner: "Kennedy Monday",
    winner_school: "North Carolina",
    loser: "Markus Scheidel",
    loser_school: "Columbia",
    result: "Dec 8-6"
  },
  {
    round: "ConsR3",
    weight: "157",
    bout: 478,
    winner: "Paul Fox",
    winner_school: "Stanford",
    loser: "Jake Short",
    loser_school: "Minnesota",
    result: "Dec 10-7"
  },
  {
    round: "ConsR3",
    weight: "157",
    bout: 479,
    winner: "Joshua Shields",
    winner_school: "Arizona State",
    loser: "Mitchell Finesilver",
    loser_school: "Duke",
    result: "Dec 3-2"
  },
  {
    round: "ConsR3",
    weight: "157",
    bout: 480,
    winner: "Joseph Lavallee",
    winner_school: "Missouri",
    loser: "Luke Weiland",
    loser_school: "Army",
    result: "MD 15-4"
  },
  {
    round: "ConsR3",
    weight: "165",
    bout: 481,
    winner: "Chandler Rogers",
    winner_school: "Oklahoma State",
    loser: "Anthony Valencia",
    loser_school: "Arizona State",
    result: "Dec 10-8"
  },
  {
    round: "ConsR3",
    weight: "165",
    bout: 482,
    winner: "Richie Lewis",
    winner_school: "Rutgers",
    loser: "Branson Ashworth",
    loser_school: "Wyoming",
    result: "Dec 7-4"
  },
  {
    round: "ConsR3",
    weight: "165",
    bout: 483,
    winner: "Nicholas Wanzek",
    winner_school: "Minnesota",
    loser: "Te`shan Campbell",
    loser_school: "Ohio State",
    result: "Dec 4-3"
  },
  {
    round: "ConsR3",
    weight: "165",
    bout: 484,
    winner: "Jonathon Chavez",
    winner_school: "Cornell",
    loser: "Drew Daniels",
    loser_school: "Navy",
    result: "Dec 4-0"
  },
  {
    round: "ConsR3",
    weight: "174",
    bout: 485,
    winner: "Dylan Lydy",
    winner_school: "Purdue",
    loser: "Ethan Ramos",
    loser_school: "North Carolina",
    result: "Dec 5-3"
  },
  {
    round: "ConsR3",
    weight: "174",
    bout: 486,
    winner: "David Kocer",
    winner_school: "South Dakota State",
    loser: "Josef Johnson",
    loser_school: "Harvard",
    result: "MD 8-0"
  },
  {
    round: "ConsR3",
    weight: "174",
    bout: 487,
    winner: "Jacobe Smith",
    winner_school: "Oklahoma State",
    loser: "Forrest Przybysz",
    loser_school: "Appalachian State",
    result: "MD 11-3"
  },
  {
    round: "ConsR3",
    weight: "174",
    bout: 488,
    winner: "Ben Harvey",
    winner_school: "Army",
    loser: "Johnny Sebastian",
    loser_school: "Northwestern",
    result: "Dec 9-6"
  },
  {
    round: "ConsR3",
    weight: "184",
    bout: 489,
    winner: "Taylor Venz",
    winner_school: "Nebraska",
    loser: "Mitchell Bowman",
    loser_school: "Iowa",
    result: "MD 16-4"
  },
  {
    round: "ConsR3",
    weight: "184",
    bout: 490,
    winner: "Bryce Carr",
    winner_school: "Tennessee-Chattanooga",
    loser: "Nick Gravina",
    loser_school: "Rutgers",
    result: "Dec 7-3"
  },
  {
    round: "ConsR3",
    weight: "184",
    bout: 491,
    winner: "Michael Coleman",
    winner_school: "Navy",
    loser: "Christian LaFragola",
    loser_school: "Brown",
    result: "Dec 7-3"
  },
  {
    round: "ConsR3",
    weight: "184",
    bout: 492,
    winner: "Emory Parker",
    winner_school: "Illinois",
    loser: "Jordan Ellingwood",
    loser_school: "Central Michigan",
    result: "MD 16-6"
  },
  {
    round: "ConsR3",
    weight: "197",
    bout: 493,
    winner: "Frank Mattiace",
    winner_school: "Penn",
    loser: "Matt Williams",
    loser_school: "Cal State Bakersfield",
    result: "Dec 8-5"
  },
  {
    round: "ConsR3",
    weight: "197",
    bout: 494,
    winner: "Cash Wilcke",
    winner_school: "Iowa",
    loser: "Nathan Traxler",
    loser_school: "Stanford",
    result: "TB-2 5-2"
  },
  {
    round: "ConsR3",
    weight: "197",
    bout: 495,
    winner: "Jacob Holschlag",
    winner_school: "Northern Iowa",
    loser: "Eric Schultz",
    loser_school: "Nebraska",
    result: "Dec 3-2"
  },
  {
    round: "ConsR3",
    weight: "197",
    bout: 496,
    winner: "Nate Rotert",
    winner_school: "South Dakota State",
    loser: "Jacob Smith",
    loser_school: "West Virginia",
    result: "Dec 4-3"
  },
  {
    round: "ConsR3",
    weight: "285",
    bout: 497,
    winner: "Jordan Wood",
    winner_school: "Lehigh",
    loser: "Thomas Haines",
    loser_school: "Lock Haven",
    result: "Dec 3-1"
  },
  {
    round: "ConsR3",
    weight: "285",
    bout: 498,
    winner: "Mike Hughes",
    winner_school: "Hofstra",
    loser: "William Miller",
    loser_school: "Edinboro",
    result: "Dec 2-0"
  },
  {
    round: "ConsR3",
    weight: "285",
    bout: 499,
    winner: "Samuel Stoll",
    winner_school: "Iowa",
    loser: "Shawn Streck",
    loser_school: "Purdue",
    result: "Fall 4:28"
  },
  {
    round: "ConsR3",
    weight: "285",
    bout: 500,
    winner: "Jere Heino",
    winner_school: "Campbell University",
    loser: "Tanner Hall",
    loser_school: "Arizona State",
    result: "Dec 5-4"
  },
  {
    round: "SemiFinals",
    weight: "125",
    bout: 501,
    winner: "Nick Suriano",
    winner_school: "Rutgers",
    loser: "Darian Cruz",
    loser_school: "Lehigh",
    result: "Dec 2-0"
  },
  {
    round: "SemiFinals",
    weight: "125",
    bout: 502,
    winner: "Spencer Lee",
    winner_school: "Iowa",
    loser: "Nathan Tomasello",
    loser_school: "Ohio State",
    result: "Fall 6:05"
  },
  {
    round: "SemiFinals",
    weight: "133",
    bout: 503,
    winner: "Seth Gross",
    winner_school: "South Dakota State",
    loser: "Tariq Wilson",
    loser_school: "NC State",
    result: "Fall 7:18"
  },
  {
    round: "SemiFinals",
    weight: "133",
    bout: 504,
    winner: "Stevan Micic",
    winner_school: "Michigan",
    loser: "Luke Pletcher",
    loser_school: "Ohio State",
    result: "Dec 8-4"
  },
  {
    round: "SemiFinals",
    weight: "141",
    bout: 505,
    winner: "Bryce Meredith",
    winner_school: "Wyoming",
    loser: "Joey McKenna",
    loser_school: "Ohio State",
    result: "Dec 1-0"
  },
  {
    round: "SemiFinals",
    weight: "141",
    bout: 506,
    winner: "Yianni Diakomihalis",
    winner_school: "Cornell",
    loser: "Jaydin Eierman",
    loser_school: "Missouri",
    result: "SV-1 6-4"
  },
  {
    round: "SemiFinals",
    weight: "149",
    bout: 507,
    winner: "Zain Retherford",
    winner_school: "Penn State",
    loser: "Troy Heilmann",
    loser_school: "North Carolina",
    result: "Dec 10-4"
  },
  {
    round: "SemiFinals",
    weight: "149",
    bout: 508,
    winner: "Ronald Perry",
    winner_school: "Lock Haven",
    loser: "Matthew Kolodzik",
    loser_school: "Princeton",
    result: "Dec 5-3"
  },
  {
    round: "SemiFinals",
    weight: "157",
    bout: 509,
    winner: "Hayden Hidlay",
    winner_school: "NC State",
    loser: "Alec Pantaleo",
    loser_school: "Michigan",
    result: "MD 10-2"
  },
  {
    round: "SemiFinals",
    weight: "157",
    bout: 510,
    winner: "Jason Nolf",
    winner_school: "Penn State",
    loser: "Micah Jordan",
    loser_school: "Ohio State",
    result: "TF-1.5 4:28 (16-0)"
  },
  {
    round: "SemiFinals",
    weight: "165",
    bout: 511,
    winner: "Isaiah Martinez",
    winner_school: "Illinois",
    loser: "Alex Marinelli",
    loser_school: "Iowa",
    result: "Dec 5-2"
  },
  {
    round: "SemiFinals",
    weight: "165",
    bout: 512,
    winner: "Vincenzo Joseph",
    winner_school: "Penn State",
    loser: "David McFadden",
    loser_school: "Virginia Tech",
    result: "Dec 3-1"
  },
  {
    round: "SemiFinals",
    weight: "174",
    bout: 513,
    winner: "Zahid Valencia",
    winner_school: "Arizona State",
    loser: "Myles Amine",
    loser_school: "Michigan",
    result: "Dec 7-5"
  },
  {
    round: "SemiFinals",
    weight: "174",
    bout: 514,
    winner: "Mark Hall",
    winner_school: "Penn State",
    loser: "Daniel Lewis",
    loser_school: "Missouri",
    result: "Fall 6:22"
  },
  {
    round: "SemiFinals",
    weight: "184",
    bout: 515,
    winner: "Bo Nickal",
    winner_school: "Penn State",
    loser: "Domenic Abounader",
    loser_school: "Michigan",
    result: "Dec 6-3"
  },
  {
    round: "SemiFinals",
    weight: "184",
    bout: 516,
    winner: "Myles Martin",
    winner_school: "Ohio State",
    loser: "Zack zavatsky",
    loser_school: "Virginia Tech",
    result: "Dec 8-4"
  },
  {
    round: "SemiFinals",
    weight: "197",
    bout: 517,
    winner: "Michael Macchiavello",
    winner_school: "NC State",
    loser: "Kyle Conel",
    loser_school: "Kent State",
    result: "Fall 4:19"
  },
  {
    round: "SemiFinals",
    weight: "197",
    bout: 518,
    winner: "Jared Haught",
    winner_school: "Virginia Tech",
    loser: "Ben Darmstadt",
    loser_school: "Cornell",
    result: "Fall 5:41"
  },
  {
    round: "SemiFinals",
    weight: "285",
    bout: 519,
    winner: "Kyle Snyder",
    winner_school: "Ohio State",
    loser: "Jacob Kasper",
    loser_school: "Duke",
    result: "Dec 10-5"
  },
  {
    round: "SemiFinals",
    weight: "285",
    bout: 520,
    winner: "Adam Coon",
    winner_school: "Michigan",
    loser: "Amar Dhesi",
    loser_school: "Oregon State",
    result: "Dec 4-2"
  },
  {
    round: "ConsR4",
    weight: "125",
    bout: 521,
    winner: "Sebastian Rivera",
    winner_school: "Northwestern",
    loser: "Louie Hayes",
    loser_school: "Virginia",
    result: "MD 8-0"
  },
  {
    round: "ConsR4",
    weight: "125",
    bout: 522,
    winner: "Ronnie Bresser",
    winner_school: "Oregon State",
    loser: "Luke Welch",
    loser_school: "Purdue",
    result: "SV-1 8-6"
  },
  {
    round: "ConsR4",
    weight: "125",
    bout: 523,
    winner: "Zeke Moisey",
    winner_school: "West Virginia",
    loser: "Taylor LaMont",
    loser_school: "Utah Valley",
    result: "Dec 8-5"
  },
  {
    round: "ConsR4",
    weight: "125",
    bout: 524,
    winner: "Ethan Lizak",
    winner_school: "Minnesota",
    loser: "Nicholas Piccininni",
    loser_school: "Oklahoma State",
    result: "TF-1.5 4:19 (16-0)"
  },
  {
    round: "ConsR4",
    weight: "133",
    bout: 525,
    winner: "Kaid Brock",
    winner_school: "Oklahoma State",
    loser: "Jack Mueller",
    loser_school: "Virginia",
    result: "MD 16-7"
  },
  {
    round: "ConsR4",
    weight: "133",
    bout: 526,
    winner: "Montorie Bridges",
    winner_school: "Wyoming",
    loser: "John Erneste",
    loser_school: "Missouri",
    result: "Dec 5-4"
  },
  {
    round: "ConsR4",
    weight: "133",
    bout: 527,
    winner: "Scott Delvecchio",
    winner_school: "Rutgers",
    loser: "Austin DeSanto",
    loser_school: "Drexel",
    result: "SV-1 8-6"
  },
  {
    round: "ConsR4",
    weight: "133",
    bout: 528,
    winner: "Scott Parker",
    winner_school: "Lehigh",
    loser: "Mitch McKee",
    loser_school: "Minnesota",
    result: "Dec 3-1"
  },
  {
    round: "ConsR4",
    weight: "141",
    bout: 529,
    winner: "Nick Lee",
    winner_school: "Penn State",
    loser: "Tyler Smith",
    loser_school: "Bucknell",
    result: "Dec 13-6"
  },
  {
    round: "ConsR4",
    weight: "141",
    bout: 530,
    winner: "Sa`Derian Perry",
    winner_school: "Eastern Michigan",
    loser: "Michael Carr",
    loser_school: "Illinois",
    result: "Dec 8-6"
  },
  {
    round: "ConsR4",
    weight: "141",
    bout: 531,
    winner: "Kevin Jack",
    winner_school: "NC State",
    loser: "Brock Zacherl",
    loser_school: "Clarion",
    result: "TF-1.5 7:00 (17-2)"
  },
  {
    round: "ConsR4",
    weight: "141",
    bout: 532,
    winner: "Chad Red",
    winner_school: "Nebraska",
    loser: "Dean Heil",
    loser_school: "Oklahoma State",
    result: "Fall 2:22"
  },
  {
    round: "ConsR4",
    weight: "149",
    bout: 533,
    winner: "Brandon Sorensen",
    winner_school: "Iowa",
    loser: "Ke-Shawn Hayes",
    loser_school: "Ohio State",
    result: "MD 9-0"
  },
  {
    round: "ConsR4",
    weight: "149",
    bout: 534,
    winner: "Boo Lewallen",
    winner_school: "Oklahoma State",
    loser: "Justin Oliver",
    loser_school: "Central Michigan",
    result: "Dec 9-4"
  },
  {
    round: "ConsR4",
    weight: "149",
    bout: 535,
    winner: "Jason Tsirtis",
    winner_school: "Arizona State",
    loser: "Jarrett Degen",
    loser_school: "Iowa State",
    result: "Dec 4-3"
  },
  {
    round: "ConsR4",
    weight: "149",
    bout: 536,
    winner: "Grant Leeth",
    winner_school: "Missouri",
    loser: "Max Thomsen",
    loser_school: "Northern Iowa",
    result: "Dec 3-2"
  },
  {
    round: "ConsR4",
    weight: "157",
    bout: 537,
    winner: "Luke Zilverberg",
    winner_school: "South Dakota State",
    loser: "Kennedy Monday",
    loser_school: "North Carolina",
    result: "Dec 6-5"
  },
  {
    round: "ConsR4",
    weight: "157",
    bout: 538,
    winner: "Tyler Berger",
    winner_school: "Nebraska",
    loser: "Paul Fox",
    loser_school: "Stanford",
    result: "Dec 6-3"
  },
  {
    round: "ConsR4",
    weight: "157",
    bout: 539,
    winner: "Joshua Shields",
    winner_school: "Arizona State",
    loser: "John Van Brill",
    loser_school: "Rutgers",
    result: "SV-1 11-9"
  },
  {
    round: "ConsR4",
    weight: "157",
    bout: 540,
    winner: "Michael Kemerer",
    winner_school: "Iowa",
    loser: "Joseph Lavallee",
    loser_school: "Missouri",
    result: "Dec 5-2"
  },
  {
    round: "ConsR4",
    weight: "165",
    bout: 541,
    winner: "Chandler Rogers",
    winner_school: "Oklahoma State",
    loser: "Chad Walsh",
    loser_school: "Rider",
    result: "Dec 11-9"
  },
  {
    round: "ConsR4",
    weight: "165",
    bout: 542,
    winner: "Chance Marsteller",
    winner_school: "Lock Haven",
    loser: "Richie Lewis",
    loser_school: "Rutgers",
    result: "Dec 4-2"
  },
  {
    round: "ConsR4",
    weight: "165",
    bout: 543,
    winner: "Evan Wick",
    winner_school: "Wisconsin",
    loser: "Nicholas Wanzek",
    loser_school: "Minnesota",
    result: "Fall 3:17"
  },
  {
    round: "ConsR4",
    weight: "165",
    bout: 544,
    winner: "Jonathon Chavez",
    winner_school: "Cornell",
    loser: "Isaiah White",
    loser_school: "Nebraska",
    result: "TB-1 2-1"
  },
  {
    round: "ConsR4",
    weight: "174",
    bout: 545,
    winner: "Jordan Kutler",
    winner_school: "Lehigh",
    loser: "Dylan Lydy",
    loser_school: "Purdue",
    result: "Dec 4-1"
  },
  {
    round: "ConsR4",
    weight: "174",
    bout: 546,
    winner: "David Kocer",
    winner_school: "South Dakota State",
    loser: "Jadaen Bernstein",
    loser_school: "Navy",
    result: "TB-1 5-4"
  },
  {
    round: "ConsR4",
    weight: "174",
    bout: 547,
    winner: "Jacobe Smith",
    winner_school: "Oklahoma State",
    loser: "Taylor Lujan",
    loser_school: "Northern Iowa",
    result: "Dec 10-8"
  },
  {
    round: "ConsR4",
    weight: "174",
    bout: 548,
    winner: "Bo Jordan",
    winner_school: "Ohio State",
    loser: "Ben Harvey",
    loser_school: "Army",
    result: "Dec 11-6"
  },
  {
    round: "ConsR4",
    weight: "184",
    bout: 549,
    winner: "Taylor Venz",
    winner_school: "Nebraska",
    loser: "Pete Renda",
    loser_school: "NC State",
    result: "MD 11-3"
  },
  {
    round: "ConsR4",
    weight: "184",
    bout: 550,
    winner: "Maxwell Dean",
    winner_school: "Cornell",
    loser: "Bryce Carr",
    loser_school: "Tennessee-Chattanooga",
    result: "Dec 6-4"
  },
  {
    round: "ConsR4",
    weight: "184",
    bout: 551,
    winner: "Chip Ness",
    winner_school: "North Carolina",
    loser: "Michael Coleman",
    loser_school: "Navy",
    result: "Dec 5-4"
  },
  {
    round: "ConsR4",
    weight: "184",
    bout: 552,
    winner: "Emory Parker",
    winner_school: "Illinois",
    loser: "Ryan Preisch",
    loser_school: "Lehigh",
    result: "Dec 5-1"
  },
  {
    round: "ConsR4",
    weight: "197",
    bout: 553,
    winner: "Shakur Rasheed",
    winner_school: "Penn State",
    loser: "Frank Mattiace",
    loser_school: "Penn",
    result: "Dec 6-5"
  },
  {
    round: "ConsR4",
    weight: "197",
    bout: 554,
    winner: "Kollin Moore",
    winner_school: "Ohio State",
    loser: "Cash Wilcke",
    loser_school: "Iowa",
    result: "Dec 6-2"
  },
  {
    round: "ConsR4",
    weight: "197",
    bout: 555,
    winner: "Jacob Holschlag",
    winner_school: "Northern Iowa",
    loser: "Chris Weiler",
    loser_school: "Lehigh",
    result: "Dec 3-2"
  },
  {
    round: "ConsR4",
    weight: "197",
    bout: 556,
    winner: "William Miklus",
    winner_school: "Missouri",
    loser: "Nate Rotert",
    loser_school: "South Dakota State",
    result: "Dec 9-5"
  },
  {
    round: "ConsR4",
    weight: "285",
    bout: 557,
    winner: "Youssif Hemida",
    winner_school: "Maryland",
    loser: "Jordan Wood",
    loser_school: "Lehigh",
    result: "Default 1:59"
  },
  {
    round: "ConsR4",
    weight: "285",
    bout: 558,
    winner: "Mike Hughes",
    winner_school: "Hofstra",
    loser: "Derek White",
    loser_school: "Oklahoma State",
    result: "Dec 6-1"
  },
  {
    round: "ConsR4",
    weight: "285",
    bout: 559,
    winner: "Samuel Stoll",
    winner_school: "Iowa",
    loser: "Nathan Butler",
    loser_school: "Stanford",
    result: "MD 15-3"
  },
  {
    round: "ConsR4",
    weight: "285",
    bout: 560,
    winner: "Nick Nevills",
    winner_school: "Penn State",
    loser: "Jere Heino",
    loser_school: "Campbell University",
    result: "Dec 6-1"
  },
  {
    round: "ConsR5",
    weight: "125",
    bout: 561,
    winner: "Sebastian Rivera",
    winner_school: "Northwestern",
    loser: "Ronnie Bresser",
    loser_school: "Oregon State",
    result: "MD 12-2"
  },
  {
    round: "ConsR5",
    weight: "125",
    bout: 562,
    winner: "Ethan Lizak",
    winner_school: "Minnesota",
    loser: "Zeke Moisey",
    loser_school: "West Virginia",
    result: "Fall 1:43"
  },
  {
    round: "ConsR5",
    weight: "133",
    bout: 563,
    winner: "Kaid Brock",
    winner_school: "Oklahoma State",
    loser: "Montorie Bridges",
    loser_school: "Wyoming",
    result: "Dec 12-7"
  },
  {
    round: "ConsR5",
    weight: "133",
    bout: 564,
    winner: "Scott Delvecchio",
    winner_school: "Rutgers",
    loser: "Scott Parker",
    loser_school: "Lehigh",
    result: "Dec 5-2"
  },
  {
    round: "ConsR5",
    weight: "141",
    bout: 565,
    winner: "Nick Lee",
    winner_school: "Penn State",
    loser: "Sa`Derian Perry",
    loser_school: "Eastern Michigan",
    result: "MD 12-4"
  },
  {
    round: "ConsR5",
    weight: "141",
    bout: 566,
    winner: "Kevin Jack",
    winner_school: "NC State",
    loser: "Chad Red",
    loser_school: "Nebraska",
    result: "TB-1 2-1"
  },
  {
    round: "ConsR5",
    weight: "149",
    bout: 567,
    winner: "Brandon Sorensen",
    winner_school: "Iowa",
    loser: "Boo Lewallen",
    loser_school: "Oklahoma State",
    result: "MD 13-3"
  },
  {
    round: "ConsR5",
    weight: "149",
    bout: 568,
    winner: "Grant Leeth",
    winner_school: "Missouri",
    loser: "Jason Tsirtis",
    loser_school: "Arizona State",
    result: "Dec 3-1"
  },
  {
    round: "ConsR5",
    weight: "157",
    bout: 569,
    winner: "Tyler Berger",
    winner_school: "Nebraska",
    loser: "Luke Zilverberg",
    loser_school: "South Dakota State",
    result: "Dec 6-0"
  },
  {
    round: "ConsR5",
    weight: "157",
    bout: 570,
    winner: "Michael Kemerer",
    winner_school: "Iowa",
    loser: "Joshua Shields",
    loser_school: "Arizona State",
    result: "Dec 6-2"
  },
  {
    round: "ConsR5",
    weight: "165",
    bout: 571,
    winner: "Chance Marsteller",
    winner_school: "Lock Haven",
    loser: "Chandler Rogers",
    loser_school: "Oklahoma State",
    result: "Dec 9-7"
  },
  {
    round: "ConsR5",
    weight: "165",
    bout: 572,
    winner: "Evan Wick",
    winner_school: "Wisconsin",
    loser: "Jonathon Chavez",
    loser_school: "Cornell",
    result: "Dec 9-2"
  },
  {
    round: "ConsR5",
    weight: "174",
    bout: 573,
    winner: "Jordan Kutler",
    winner_school: "Lehigh",
    loser: "David Kocer",
    loser_school: "South Dakota State",
    result: "MD 8-0"
  },
  {
    round: "ConsR5",
    weight: "174",
    bout: 574,
    winner: "Bo Jordan",
    winner_school: "Ohio State",
    loser: "Jacobe Smith",
    loser_school: "Oklahoma State",
    result: "MD 16-2"
  },
  {
    round: "ConsR5",
    weight: "184",
    bout: 575,
    winner: "Taylor Venz",
    winner_school: "Nebraska",
    loser: "Maxwell Dean",
    loser_school: "Cornell",
    result: "Dec 11-6"
  },
  {
    round: "ConsR5",
    weight: "184",
    bout: 576,
    winner: "Emory Parker",
    winner_school: "Illinois",
    loser: "Chip Ness",
    loser_school: "North Carolina",
    result: "Dec 7-5"
  },
  {
    round: "ConsR5",
    weight: "197",
    bout: 577,
    winner: "Kollin Moore",
    winner_school: "Ohio State",
    loser: "Shakur Rasheed",
    loser_school: "Penn State",
    result: "Dec 7-4"
  },
  {
    round: "ConsR5",
    weight: "197",
    bout: 578,
    winner: "Jacob Holschlag",
    winner_school: "Northern Iowa",
    loser: "William Miklus",
    loser_school: "Missouri",
    result: "Dec 7-5"
  },
  {
    round: "ConsR5",
    weight: "285",
    bout: 579,
    winner: "Mike Hughes",
    winner_school: "Hofstra",
    loser: "Youssif Hemida",
    loser_school: "Maryland",
    result: "MD 8-0"
  },
  {
    round: "ConsR5",
    weight: "285",
    bout: 580,
    winner: "Samuel Stoll",
    winner_school: "Iowa",
    loser: "Nick Nevills",
    loser_school: "Penn State",
    result: "SV-1 5-1"
  },
  {
    round: "ConsSemi",
    weight: "125",
    bout: 581,
    winner: "Nathan Tomasello",
    winner_school: "Ohio State",
    loser: "Sebastian Rivera",
    loser_school: "Northwestern",
    result: "Fall 1:14"
  },
  {
    round: "ConsSemi",
    weight: "125",
    bout: 582,
    winner: "Ethan Lizak",
    winner_school: "Minnesota",
    loser: "Darian Cruz",
    loser_school: "Lehigh",
    result: "Dec 5-2"
  },
  {
    round: "ConsSemi",
    weight: "133",
    bout: 583,
    winner: "Luke Pletcher",
    winner_school: "Ohio State",
    loser: "Kaid Brock",
    loser_school: "Oklahoma State",
    result: "Dec 12-8"
  },
  {
    round: "ConsSemi",
    weight: "133",
    bout: 584,
    winner: "Tariq Wilson",
    winner_school: "NC State",
    loser: "Scott Delvecchio",
    loser_school: "Rutgers",
    result: "MD 13-3"
  },
  {
    round: "ConsSemi",
    weight: "141",
    bout: 585,
    winner: "Jaydin Eierman",
    winner_school: "Missouri",
    loser: "Nick Lee",
    loser_school: "Penn State",
    result: "MD 12-4"
  },
  {
    round: "ConsSemi",
    weight: "141",
    bout: 586,
    winner: "Joey McKenna",
    winner_school: "Ohio State",
    loser: "Kevin Jack",
    loser_school: "NC State",
    result: "Dec 4-3"
  },
  {
    round: "ConsSemi",
    weight: "149",
    bout: 587,
    winner: "Matthew Kolodzik",
    winner_school: "Princeton",
    loser: "Brandon Sorensen",
    loser_school: "Iowa",
    result: "Dec 7-3"
  },
  {
    round: "ConsSemi",
    weight: "149",
    bout: 588,
    winner: "Troy Heilmann",
    winner_school: "North Carolina",
    loser: "Grant Leeth",
    loser_school: "Missouri",
    result: "Dec 5-3"
  },
  {
    round: "ConsSemi",
    weight: "157",
    bout: 589,
    winner: "Tyler Berger",
    winner_school: "Nebraska",
    loser: "Micah Jordan",
    loser_school: "Ohio State",
    result: "SV-1 4-2"
  },
  {
    round: "ConsSemi",
    weight: "157",
    bout: 590,
    winner: "Michael Kemerer",
    winner_school: "Iowa",
    loser: "Alec Pantaleo",
    loser_school: "Michigan",
    result: "Dec 6-1"
  },
  {
    round: "ConsSemi",
    weight: "165",
    bout: 591,
    winner: "Chance Marsteller",
    winner_school: "Lock Haven",
    loser: "David McFadden",
    loser_school: "Virginia Tech",
    result: "Dec 5-3"
  },
  {
    round: "ConsSemi",
    weight: "165",
    bout: 592,
    winner: "Evan Wick",
    winner_school: "Wisconsin",
    loser: "Alex Marinelli",
    loser_school: "Iowa",
    result: "MD 16-3"
  },
  {
    round: "ConsSemi",
    weight: "174",
    bout: 593,
    winner: "Daniel Lewis",
    winner_school: "Missouri",
    loser: "Jordan Kutler",
    loser_school: "Lehigh",
    result: "Default 2:00"
  },
  {
    round: "ConsSemi",
    weight: "174",
    bout: 594,
    winner: "Myles Amine",
    winner_school: "Michigan",
    loser: "Bo Jordan",
    loser_school: "Ohio State",
    result: "Dec 6-2"
  },
  {
    round: "ConsSemi",
    weight: "184",
    bout: 595,
    winner: "Taylor Venz",
    winner_school: "Nebraska",
    loser: "Zack zavatsky",
    loser_school: "Virginia Tech",
    result: "Dec 7-3"
  },
  {
    round: "ConsSemi",
    weight: "184",
    bout: 596,
    winner: "Emory Parker",
    winner_school: "Illinois",
    loser: "Domenic Abounader",
    loser_school: "Michigan",
    result: "Dec 6-5"
  },
  {
    round: "ConsSemi",
    weight: "197",
    bout: 597,
    winner: "Kollin Moore",
    winner_school: "Ohio State",
    loser: "Ben Darmstadt",
    loser_school: "Cornell",
    result: "Dec 7-4"
  },
  {
    round: "ConsSemi",
    weight: "197",
    bout: 598,
    winner: "Kyle Conel",
    winner_school: "Kent State",
    loser: "Jacob Holschlag",
    loser_school: "Northern Iowa",
    result: "Fall 2:48"
  },
  {
    round: "ConsSemi",
    weight: "285",
    bout: 599,
    winner: "Amar Dhesi",
    winner_school: "Oregon State",
    loser: "Mike Hughes",
    loser_school: "Hofstra",
    result: "Dec 3-1"
  },
  {
    round: "ConsSemi",
    weight: "285",
    bout: 600,
    winner: "Jacob Kasper",
    winner_school: "Duke",
    loser: "Samuel Stoll",
    loser_school: "Iowa",
    result: "Fall 1:17"
  },
  {
    round: "3rdPlace",
    weight: "125",
    bout: 601,
    winner: "Nathan Tomasello",
    winner_school: "Ohio State",
    loser: "Ethan Lizak",
    loser_school: "Minnesota",
    result: "SV-1 8-6"
  },
  {
    round: "5thPlace",
    weight: "125",
    bout: 602,
    winner: "Darian Cruz",
    winner_school: "Lehigh",
    loser: "Sebastian Rivera",
    loser_school: "Northwestern",
    result: "Dec 7-4"
  },
  {
    round: "7thPlace",
    weight: "125",
    bout: 603,
    winner: "Ronnie Bresser",
    winner_school: "Oregon State",
    loser: "Zeke Moisey",
    loser_school: "West Virginia",
    result: "M. For."
  },
  {
    round: "3rdPlace",
    weight: "133",
    bout: 604,
    winner: "Tariq Wilson",
    winner_school: "NC State",
    loser: "Luke Pletcher",
    loser_school: "Ohio State",
    result: "MD 17-8"
  },
  {
    round: "5thPlace",
    weight: "133",
    bout: 605,
    winner: "Kaid Brock",
    winner_school: "Oklahoma State",
    loser: "Scott Delvecchio",
    loser_school: "Rutgers",
    result: "MD 10-1"
  },
  {
    round: "7thPlace",
    weight: "133",
    bout: 606,
    winner: "Scott Parker",
    winner_school: "Lehigh",
    loser: "Montorie Bridges",
    loser_school: "Wyoming",
    result: "Dec 5-2"
  },
  {
    round: "3rdPlace",
    weight: "141",
    bout: 607,
    winner: "Joey McKenna",
    winner_school: "Ohio State",
    loser: "Jaydin Eierman",
    loser_school: "Missouri",
    result: "Dec 7-2"
  },
  {
    round: "5thPlace",
    weight: "141",
    bout: 608,
    winner: "Nick Lee",
    winner_school: "Penn State",
    loser: "Kevin Jack",
    loser_school: "NC State",
    result: "SV-1 9-7"
  },
  {
    round: "7thPlace",
    weight: "141",
    bout: 609,
    winner: "Chad Red",
    winner_school: "Nebraska",
    loser: "Sa`Derian Perry",
    loser_school: "Eastern Michigan",
    result: "Fall 7:00"
  },
  {
    round: "3rdPlace",
    weight: "149",
    bout: 610,
    winner: "Matthew Kolodzik",
    winner_school: "Princeton",
    loser: "Troy Heilmann",
    loser_school: "North Carolina",
    result: "Dec 3-2"
  },
  {
    round: "5thPlace",
    weight: "149",
    bout: 611,
    winner: "Brandon Sorensen",
    winner_school: "Iowa",
    loser: "Grant Leeth",
    loser_school: "Missouri",
    result: "Dec 4-0"
  },
  {
    round: "7thPlace",
    weight: "149",
    bout: 612,
    winner: "Jason Tsirtis",
    winner_school: "Arizona State",
    loser: "Boo Lewallen",
    loser_school: "Oklahoma State",
    result: "Dec 2-1"
  },
  {
    round: "3rdPlace",
    weight: "157",
    bout: 613,
    winner: "Tyler Berger",
    winner_school: "Nebraska",
    loser: "Michael Kemerer",
    loser_school: "Iowa",
    result: "Default 1:56"
  },
  {
    round: "5thPlace",
    weight: "157",
    bout: 614,
    winner: "Alec Pantaleo",
    winner_school: "Michigan",
    loser: "Micah Jordan",
    loser_school: "Ohio State",
    result: "Dec 6-3"
  },
  {
    round: "7thPlace",
    weight: "157",
    bout: 615,
    winner: "Joshua Shields",
    winner_school: "Arizona State",
    loser: "Luke Zilverberg",
    loser_school: "South Dakota State",
    result: "Dec 11-5"
  },
  {
    round: "3rdPlace",
    weight: "165",
    bout: 616,
    winner: "Evan Wick",
    winner_school: "Wisconsin",
    loser: "Chance Marsteller",
    loser_school: "Lock Haven",
    result: "Fall 3:19"
  },
  {
    round: "5thPlace",
    weight: "165",
    bout: 617,
    winner: "David McFadden",
    winner_school: "Virginia Tech",
    loser: "Alex Marinelli",
    loser_school: "Iowa",
    result: "Fall 5:14"
  },
  {
    round: "7thPlace",
    weight: "165",
    bout: 618,
    winner: "Jonathon Chavez",
    winner_school: "Cornell",
    loser: "Chandler Rogers",
    loser_school: "Oklahoma State",
    result: "Dec 10-5"
  },
  {
    round: "3rdPlace",
    weight: "174",
    bout: 619,
    winner: "Myles Amine",
    winner_school: "Michigan",
    loser: "Daniel Lewis",
    loser_school: "Missouri",
    result: "SV-1 4-2"
  },
  {
    round: "5thPlace",
    weight: "174",
    bout: 620,
    winner: "Bo Jordan",
    winner_school: "Ohio State",
    loser: "Jordan Kutler",
    loser_school: "Lehigh",
    result: "M. For."
  },
  {
    round: "7thPlace",
    weight: "174",
    bout: 621,
    winner: "David Kocer",
    winner_school: "South Dakota State",
    loser: "Jacobe Smith",
    loser_school: "Oklahoma State",
    result: "Dec 7-2"
  },
  {
    round: "3rdPlace",
    weight: "184",
    bout: 622,
    winner: "Emory Parker",
    winner_school: "Illinois",
    loser: "Taylor Venz",
    loser_school: "Nebraska",
    result: "Dec 8-1"
  },
  {
    round: "5thPlace",
    weight: "184",
    bout: 623,
    winner: "Domenic Abounader",
    winner_school: "Michigan",
    loser: "Zack zavatsky",
    loser_school: "Virginia Tech",
    result: "Dec 8-2"
  },
  {
    round: "7thPlace",
    weight: "184",
    bout: 624,
    winner: "Chip Ness",
    winner_school: "North Carolina",
    loser: "Maxwell Dean",
    loser_school: "Cornell",
    result: "Dec 6-3"
  },
  {
    round: "3rdPlace",
    weight: "197",
    bout: 625,
    winner: "Kyle Conel",
    winner_school: "Kent State",
    loser: "Kollin Moore",
    loser_school: "Ohio State",
    result: "Dec 5-3"
  },
  {
    round: "5thPlace",
    weight: "197",
    bout: 626,
    winner: "Jacob Holschlag",
    winner_school: "Northern Iowa",
    loser: "Ben Darmstadt",
    loser_school: "Cornell",
    result: "Fall 2:37"
  },
  {
    round: "7thPlace",
    weight: "197",
    bout: 627,
    winner: "Shakur Rasheed",
    winner_school: "Penn State",
    loser: "William Miklus",
    loser_school: "Missouri",
    result: "MD 11-3"
  },
  {
    round: "3rdPlace",
    weight: "285",
    bout: 628,
    winner: "Amar Dhesi",
    winner_school: "Oregon State",
    loser: "Jacob Kasper",
    loser_school: "Duke",
    result: "Fall 1:46"
  },
  {
    round: "5thPlace",
    weight: "285",
    bout: 629,
    winner: "Samuel Stoll",
    winner_school: "Iowa",
    loser: "Mike Hughes",
    loser_school: "Hofstra",
    result: "Fall 1:57"
  },
  {
    round: "7thPlace",
    weight: "285",
    bout: 630,
    winner: "Nick Nevills",
    winner_school: "Penn State",
    loser: "Youssif Hemida",
    loser_school: "Maryland",
    result: "Dec 7-5"
  },
  {
    round: "Finals",
    weight: "125",
    bout: 631,
    winner: "Spencer Lee",
    winner_school: "Iowa",
    loser: "Nick Suriano",
    loser_school: "Rutgers",
    result: "Dec 5-1"
  },
  {
    round: "Finals",
    weight: "133",
    bout: 632,
    winner: "Seth Gross",
    winner_school: "South Dakota State",
    loser: "Stevan Micic",
    loser_school: "Michigan",
    result: "Dec 13-8"
  },
  {
    round: "Finals",
    weight: "141",
    bout: 633,
    winner: "Yianni Diakomihalis",
    winner_school: "Cornell",
    loser: "Bryce Meredith",
    loser_school: "Wyoming",
    result: "Dec 7-4"
  },
  {
    round: "Finals",
    weight: "149",
    bout: 634,
    winner: "Zain Retherford",
    winner_school: "Penn State",
    loser: "Ronald Perry",
    loser_school: "Lock Haven",
    result: "Dec 6-2"
  },
  {
    round: "Finals",
    weight: "157",
    bout: 635,
    winner: "Jason Nolf",
    winner_school: "Penn State",
    loser: "Hayden Hidlay",
    loser_school: "NC State",
    result: "Dec 6-2"
  },
  {
    round: "Finals",
    weight: "165",
    bout: 636,
    winner: "Vincenzo Joseph",
    winner_school: "Penn State",
    loser: "Isaiah Martinez",
    loser_school: "Illinois",
    result: "Dec 6-1"
  },
  {
    round: "Finals",
    weight: "174",
    bout: 637,
    winner: "Zahid Valencia",
    winner_school: "Arizona State",
    loser: "Mark Hall",
    loser_school: "Penn State",
    result: "Dec 8-2"
  },
  {
    round: "Finals",
    weight: "184",
    bout: 638,
    winner: "Bo Nickal",
    winner_school: "Penn State",
    loser: "Myles Martin",
    loser_school: "Ohio State",
    result: "Fall 2:30"
  },
  {
    round: "Finals",
    weight: "197",
    bout: 639,
    winner: "Michael Macchiavello",
    winner_school: "NC State",
    loser: "Jared Haught",
    loser_school: "Virginia Tech",
    result: "Dec 3-1"
  },
  {
    round: "Finals",
    weight: "285",
    bout: 640,
    winner: "Kyle Snyder",
    winner_school: "Ohio State",
    loser: "Adam Coon",
    loser_school: "Michigan",
    result: "Dec 3-2"
  }
];

if (typeof module !== 'undefined') module.exports = resultData;