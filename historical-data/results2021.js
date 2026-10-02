const resultData = [
  {
    round: "Prelims",
    weight: "125",
    bout: 1,
    winner: "Patrick McCormick",
    winner_school: "Virginia",
    loser: "Kysen Terukina",
    loser_school: "Iowa State",
    result: "Dec 6-2"
  },
  {
    round: "Prelims",
    weight: "133",
    bout: 2,
    winner: "Cole Rhone",
    winner_school: "Bloomsburg",
    loser: "Bryce West",
    loser_school: "Northern Illinois",
    result: "Dec 13-10"
  },
  {
    round: "Prelims",
    weight: "141",
    bout: 3,
    winner: "Cayden Rooks",
    winner_school: "Indiana",
    loser: "Vinny Vespa",
    loser_school: "Hofstra",
    result: "MD 10-1"
  },
  {
    round: "Prelims",
    weight: "149",
    bout: 4,
    winner: "Cameron Hunsaker",
    winner_school: "Utah Valley",
    loser: "Greg Gaxiola",
    loser_school: "Hofstra",
    result: "Dec 5-1"
  },
  {
    round: "Prelims",
    weight: "157",
    bout: 5,
    winner: "Wyatt Sheets",
    winner_school: "Oklahoma State",
    loser: "Luca Frinzi",
    loser_school: "Lehigh",
    result: "Dec 8-2"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 6,
    winner: "Spencer Lee",
    winner_school: "Iowa",
    loser: "Patrick McCormick",
    loser_school: "Virginia",
    result: "TF-1.5 1:33 (16-1)"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 7,
    winner: "Killian Cardinale",
    winner_school: "West Virginia",
    loser: "Codi Russell",
    loser_school: "Appalachian State",
    result: "Dec 7-6"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 8,
    winner: "Devin Schroder",
    winner_school: "Purdue",
    loser: "Fabian Gutierrez",
    loser_school: "Chattanooga",
    result: "Dec 5-1"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 9,
    winner: "RayVon Foley",
    winner_school: "Michigan State",
    loser: "Logan Treaster",
    loser_school: "Navy",
    result: "MD 14-0"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 10,
    winner: "Brody Teske",
    winner_school: "Northern Iowa",
    loser: "Brandon Kaylor",
    loser_school: "Oregon State",
    result: "Fall 2:40"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 11,
    winner: "Michael DeAugustino",
    winner_school: "Northwestern",
    loser: "Trevor Mastrogiovanni",
    loser_school: "Oklahoma State",
    result: "Dec 4-3"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 12,
    winner: "Liam Cronin",
    winner_school: "Nebraska",
    loser: "Jake Ferri",
    loser_school: "Kent State",
    result: "Fall 6:29"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 13,
    winner: "Drew Hildebrandt",
    winner_school: "Central Michigan",
    loser: "Zurich Storm",
    loser_school: "Campbell",
    result: "Dec 3-0"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 14,
    winner: "Brandon Courtney",
    winner_school: "Arizona State",
    loser: "Micah Roes",
    loser_school: "Binghamton",
    result: "MD 18-7"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 15,
    winner: "Eric Barnett",
    winner_school: "Wisconsin",
    loser: "Jaret Lane",
    loser_school: "Lehigh",
    result: "Dec 6-3"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 16,
    winner: "Dylan Ragusin",
    winner_school: "Michigan",
    loser: "Daniel Vega",
    loser_school: "South Dakota State",
    result: "Dec 13-10"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 17,
    winner: "Jakob Camacho",
    winner_school: "NC State",
    loser: "Gage Curry",
    loser_school: "American",
    result: "MD 21-9"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 18,
    winner: "Taylor LaMont",
    winner_school: "Utah Valley",
    loser: "Jackson DiSario",
    loser_school: "Stanford",
    result: "TF-1.5 5:37 (18-1)"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 19,
    winner: "Robert Howard",
    winner_school: "Penn State",
    loser: "Malik Heinselman",
    loser_school: "Ohio State",
    result: "Dec 6-4"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 20,
    winner: "Patrick McKee",
    winner_school: "Minnesota",
    loser: "Noah Surtin",
    loser_school: "Missouri",
    result: "Dec 15-8"
  },
  {
    round: "ChampR1",
    weight: "125",
    bout: 21,
    winner: "Sam Latona",
    winner_school: "Virginia Tech",
    loser: "Jonathan Tropea",
    loser_school: "Rider",
    result: "Dec 12-7"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 22,
    winner: "Daton Fix",
    winner_school: "Oklahoma State",
    loser: "Cole Rhone",
    loser_school: "Bloomsburg",
    result: "MD 16-3"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 23,
    winner: "Malyke Hines",
    winner_school: "Lehigh",
    loser: "Devan Turner",
    loser_school: "Oregon State",
    result: "MD 8-0"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 24,
    winner: "Michael McGee",
    winner_school: "Arizona State",
    loser: "Richie Koehler",
    loser_school: "Rider",
    result: "MD 13-4"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 25,
    winner: "Chris Cannon",
    winner_school: "Northwestern",
    loser: "Jacob Rundell",
    loser_school: "Purdue",
    result: "MD 10-1"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 26,
    winner: "Micky Phillippi",
    winner_school: "Pittsburgh",
    loser: "Ty Smith",
    loser_school: "Utah Valley",
    result: "MD 14-3"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 27,
    winner: "Jarrett Trombley",
    winner_school: "NC State",
    loser: "Jared Van Vleet",
    loser_school: "Air Force",
    result: "Dec 3-2"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 28,
    winner: "Ryan Sullivan",
    winner_school: "West Virginia",
    loser: "Zach Redding",
    loser_school: "Iowa State",
    result: "TB-1 4-3"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 29,
    winner: "Austin DeSanto",
    winner_school: "Iowa",
    loser: "Paul Bianchi",
    loser_school: "Little Rock",
    result: "TF-1.5 4:34 (19-4)"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 30,
    winner: "Korbin Myers",
    winner_school: "Virginia Tech",
    loser: "Jordan Hamdan",
    loser_school: "Michigan State",
    result: "MD 13-4"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 31,
    winner: "Zach Price",
    winner_school: "South Dakota State",
    loser: "Chance Rich",
    loser_school: "CSU Bakersfield",
    result: "SV-1 4-2"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 32,
    winner: "Mario Guillen",
    winner_school: "Ohio",
    loser: "Anthony Madrigal",
    loser_school: "Oklahoma",
    result: "SV-2 4-2"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 33,
    winner: "Matt Schmitt",
    winner_school: "Missouri",
    loser: "Jacob Allen",
    loser_school: "Navy",
    result: "Dec 4-1"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 34,
    winner: "Lucas Byrd",
    winner_school: "Illinois",
    loser: "Darren Miller",
    loser_school: "Bucknell",
    result: "Dec 8-3"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 35,
    winner: "Louie Hayes",
    winner_school: "Virginia",
    loser: "Boo Dryden",
    loser_school: "Minnesota",
    result: "Dec 5-2"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 36,
    winner: "Kyle Burwick",
    winner_school: "Wisconsin",
    loser: "Mosha Schwartz",
    loser_school: "Northern Colorado",
    result: "Fall 4:38"
  },
  {
    round: "ChampR1",
    weight: "133",
    bout: 37,
    winner: "Roman Bravo-Young",
    winner_school: "Penn State",
    loser: "Sean Carter",
    loser_school: "Appalachian State",
    result: "TF-1.5 7:00 (20-5)"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 38,
    winner: "Jaydin Eierman",
    winner_school: "Iowa",
    loser: "Cayden Rooks",
    loser_school: "Indiana",
    result: "TF-1.5 6:19 (20-5)"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 39,
    winner: "Cole Matthews",
    winner_school: "Pittsburgh",
    loser: "McKenzie Bell",
    loser_school: "Rider",
    result: "MD 17-3"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 40,
    winner: "Dresden Simon",
    winner_school: "Central Michigan",
    loser: "Connor McGonagle",
    loser_school: "Lehigh",
    result: "MD 18-6"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 41,
    winner: "Chad Red",
    winner_school: "Nebraska",
    loser: "Drew Mattin",
    loser_school: "Michigan",
    result: "Dec 8-6"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 42,
    winner: "Dom Demas",
    winner_school: "Oklahoma",
    loser: "Marcos Polanco",
    loser_school: "Minnesota",
    result: "Dec 6-2"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 43,
    winner: "Real Woods",
    winner_school: "Stanford",
    loser: "Grant Willits",
    loser_school: "Oregon State",
    result: "Dec 6-3"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 44,
    winner: "Brian Courtney",
    winner_school: "Virginia",
    loser: "DJ Lloren",
    loser_school: "Florida State",
    result: "Dec 10-5"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 45,
    winner: "Tariq Wilson",
    winner_school: "NC State",
    loser: "Chase Zollmann",
    loser_school: "Wyoming",
    result: "TF-1.5 4:28 (16-0)"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 46,
    winner: "Sebastian Rivera",
    winner_school: "Rutgers",
    loser: "Dylan D`Emilio",
    loser_school: "Ohio State",
    result: "Dec 8-1"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 47,
    winner: "Dylan Duncan",
    winner_school: "Illinois",
    loser: "Lane Peters",
    loser_school: "Army West Point",
    result: "MD 13-2"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 48,
    winner: "Cody Trybus",
    winner_school: "Navy",
    loser: "Anthony Brito",
    loser_school: "Appalachian State",
    result: "MD 10-1"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 49,
    winner: "Allan Hart",
    winner_school: "Missouri",
    loser: "Angelo Martinoni",
    loser_school: "CSU Bakersfield",
    result: "Dec 9-2"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 50,
    winner: "Colin Valdiviez",
    winner_school: "Northwestern",
    loser: "Ian Parker",
    loser_school: "Iowa State",
    result: "Dec 8-5"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 51,
    winner: "Zachary Sherman",
    winner_school: "North Carolina",
    loser: "Saul Ervin",
    loser_school: "SIU Edwardsville",
    result: "Dec 2-0"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 52,
    winner: "Clay Carlson",
    winner_school: "South Dakota State",
    loser: "Parker Filius",
    loser_school: "Purdue",
    result: "Dec 7-6"
  },
  {
    round: "ChampR1",
    weight: "141",
    bout: 53,
    winner: "Nick Lee",
    winner_school: "Penn State",
    loser: "Julian Flores",
    loser_school: "Drexel",
    result: "TF-1.5 2:33 (18-0)"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 54,
    winner: "Sammy Sasso",
    winner_school: "Ohio State",
    loser: "Cameron Hunsaker",
    loser_school: "Utah Valley",
    result: "Fall 6:34"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 55,
    winner: "Kyle Parco",
    winner_school: "Florida State",
    loser: "PJ Ogunsanya",
    loser_school: "Army West Point",
    result: "SV-1 7-5"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 56,
    winner: "Legend Lamer",
    winner_school: "Cal Poly",
    loser: "Luke Nichter",
    loser_school: "Drexel",
    result: "MD 16-2"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 57,
    winner: "Yahya Thomas",
    winner_school: "Northwestern",
    loser: "Jaden Abas",
    loser_school: "Stanford",
    result: "Dec 6-2"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 58,
    winner: "Ridge Lovett",
    winner_school: "Nebraska",
    loser: "Peyton Omania",
    loser_school: "Michigan State",
    result: "SV-1 6-4"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 59,
    winner: "Max Murin",
    winner_school: "Iowa",
    loser: "Graham Rooks",
    loser_school: "Indiana",
    result: "Dec 8-7"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 60,
    winner: "Joshua Heil",
    winner_school: "Campbell",
    loser: "Mitch Moore",
    loser_school: "Oklahoma",
    result: "Dec 2-1"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 61,
    winner: "Boo Lewallen",
    winner_school: "Oklahoma State",
    loser: "Kody Komara",
    loser_school: "Kent State",
    result: "Fall 1:26"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 62,
    winner: "Brock Mauller",
    winner_school: "Missouri",
    loser: "Marcus Robinson",
    loser_school: "CSU",
    result: "MD 12-1"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 63,
    winner: "Michael Blockhus",
    winner_school: "Minnesota",
    loser: "Casey Cobb",
    loser_school: "Navy",
    result: "MD 10-0"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 64,
    winner: "Kanen Storr",
    winner_school: "Michigan",
    loser: "Jimmy Hoffman",
    loser_school: "Lehigh",
    result: "Dec 3-2"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 65,
    winner: "Bryce Andonian",
    winner_school: "Virginia Tech",
    loser: "Josh Finesilver",
    loser_school: "Duke",
    result: "Fall 3:17"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 66,
    winner: "Jonathan Millner",
    winner_school: "Appalachian State",
    loser: "Anthony Cheloni",
    loser_school: "Northern Illinois",
    result: "Dec 7-3"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 67,
    winner: "Triston Lara",
    winner_school: "Northern Iowa",
    loser: "Mike Van Brill",
    loser_school: "Rutgers",
    result: "Dec 12-7"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 68,
    winner: "Griffin Parriott",
    winner_school: "Purdue",
    loser: "Jarrett Degen",
    loser_school: "Iowa State",
    result: "Dec 10-7"
  },
  {
    round: "ChampR1",
    weight: "149",
    bout: 69,
    winner: "Austin O`Connor",
    winner_school: "North Carolina",
    loser: "Cory Crooks",
    loser_school: "Arizona State",
    result: "MD 12-4"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 70,
    winner: "Ryan Deakin",
    winner_school: "Northwestern",
    loser: "Wyatt Sheets",
    loser_school: "Oklahoma State",
    result: "Dec 10-3"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 71,
    winner: "Requir van der Merwe",
    winner_school: "Stanford",
    loser: "Justin McCoy",
    loser_school: "Virginia",
    result: "Dec 3-2"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 72,
    winner: "Kendall Coleman",
    winner_school: "Purdue",
    loser: "Nicholas Palumbo",
    loser_school: "Sacred Heart",
    result: "MD 15-5"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 73,
    winner: "Jared Franek",
    winner_school: "North Dakota State",
    loser: "Parker Kropman",
    loser_school: "Drexel",
    result: "Dec 5-2"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 74,
    winner: "Kaleb Young",
    winner_school: "Iowa",
    loser: "Caleb Licking",
    loser_school: "Nebraska",
    result: "MD 10-2"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 75,
    winner: "Brady Berge",
    winner_school: "Penn State",
    loser: "Andrew Cerniglia",
    loser_school: "Navy",
    result: "MD 12-4"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 76,
    winner: "Hunter Willits",
    winner_school: "Oregon State",
    loser: "Cody Bond",
    loser_school: "Appalachian State",
    result: "Dec 11-5"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 77,
    winner: "Jesse Dellavecchia",
    winner_school: "Rider",
    loser: "Joshua McClure",
    loser_school: "North Carolina",
    result: "Dec 5-0"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 78,
    winner: "David Carr",
    winner_school: "Iowa State",
    loser: "Markus Hartman",
    loser_school: "Army West Point",
    result: "MD 16-2"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 79,
    winner: "Will Lewan",
    winner_school: "Michigan",
    loser: "Holden Heller",
    loser_school: "Hofstra",
    result: "SV-1 3-1"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 80,
    winner: "Jacori Teemer",
    winner_school: "Arizona State",
    loser: "Benjamin Barton",
    loser_school: "Campbell",
    result: "MD 12-4"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 81,
    winner: "Brayton Lee",
    winner_school: "Minnesota",
    loser: "Connor Brady",
    loser_school: "Virginia Tech",
    result: "Dec 2-0"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 82,
    winner: "Johnny Lovett",
    winner_school: "Central Michigan",
    loser: "Jarrett Jacques",
    loser_school: "Missouri",
    result: "Dec 3-2"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 83,
    winner: "Jacob Wright",
    winner_school: "Wyoming",
    loser: "Justin Thomas",
    loser_school: "Oklahoma",
    result: "TB-2 4-4"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 84,
    winner: "Cade DeVos",
    winner_school: "South Dakota State",
    loser: "Chase Saldate",
    loser_school: "Michigan State",
    result: "Dec 3-1"
  },
  {
    round: "ChampR1",
    weight: "157",
    bout: 85,
    winner: "Hayden Hidlay",
    winner_school: "NC State",
    loser: "Michael Petite",
    loser_school: "Buffalo",
    result: "MD 14-5"
  },
  {
    round: "Prelims",
    weight: "165",
    bout: 86,
    winner: "Austin Yant",
    winner_school: "Northern Iowa",
    loser: "Ricky Stamm",
    loser_school: "Hofstra",
    result: "MD 12-4"
  },
  {
    round: "Prelims",
    weight: "174",
    bout: 87,
    winner: "Drew Hughes",
    winner_school: "Michigan State",
    loser: "Jacob Nolan",
    loser_school: "Binghamton",
    result: "Dec 7-0"
  },
  {
    round: "Prelims",
    weight: "184",
    bout: 88,
    winner: "Jhaquan Anderson",
    winner_school: "George Washington",
    loser: "Joe Accousti",
    loser_school: "Sacred Heart",
    result: "SV-1 3-1"
  },
  {
    round: "Prelims",
    weight: "197",
    bout: 89,
    winner: "Billy Janzer",
    winner_school: "Rutgers",
    loser: "Logan Andrew",
    loser_school: "Chattanooga",
    result: "Dec 8-6"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 91,
    winner: "Alex Marinelli",
    winner_school: "Iowa",
    loser: "Austin Yant",
    loser_school: "Northern Iowa",
    result: "MD 19-6"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 92,
    winner: "Thomas Bullard",
    winner_school: "NC State",
    loser: "William Formato",
    loser_school: "Appalachian State",
    result: "Dec 3-2"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 93,
    winner: "Luke Weber",
    winner_school: "North Dakota State",
    loser: "Andrew Sparks",
    loser_school: "Minnesota",
    result: "Dec 8-5"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 94,
    winner: "Shane Griffith",
    winner_school: "Stanford",
    loser: "Jake Tucker",
    loser_school: "Michigan State",
    result: "Dec 5-2"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 95,
    winner: "Zach Hartman",
    winner_school: "Bucknell",
    loser: "Rodrick Mosley",
    loser_school: "George Washington",
    result: "Dec 8-6"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 96,
    winner: "Peyton Hall",
    winner_school: "West Virginia",
    loser: "Jake Keating",
    loser_school: "Virginia",
    result: "MD 14-4"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 97,
    winner: "Tanner Skidgel",
    winner_school: "Navy",
    loser: "Cole Moody",
    loser_school: "Wyoming",
    result: "Dec 3-2"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 98,
    winner: "Mekhi Lewis",
    winner_school: "Virginia Tech",
    loser: "Brian Meyer",
    loser_school: "Lehigh",
    result: "Dec 8-3"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 99,
    winner: "Jake Wentzel",
    winner_school: "Pittsburgh",
    loser: "Evan Barczak",
    loser_school: "Drexel",
    result: "Dec 1-0"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 100,
    winner: "Peyton Robb",
    winner_school: "Nebraska",
    loser: "Gerrit Nijenhuis",
    loser_school: "Purdue",
    result: "Dec 4-1"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 101,
    winner: "Cameron Amine",
    winner_school: "Michigan",
    loser: "Kennedy Monday",
    loser_school: "North Carolina",
    result: "SV-1 5-3"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 102,
    winner: "Keegan O`Toole",
    winner_school: "Missouri",
    loser: "Jake Silverstein",
    loser_school: "Rider",
    result: "Fall 4:10"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 103,
    winner: "Ethan Smith",
    winner_school: "Ohio State",
    loser: "Andrew Nicholson",
    loser_school: "Chattanooga",
    result: "Dec 12-5"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 104,
    winner: "Travis Wittlake",
    winner_school: "Oklahoma State",
    loser: "Joe Lee",
    loser_school: "Penn State",
    result: "Dec 8-1"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 105,
    winner: "Izzak Olejnik",
    winner_school: "Northern Illinois",
    loser: "Dan Braunagel",
    loser_school: "Illinois",
    result: "Dec 6-1"
  },
  {
    round: "ChampR1",
    weight: "165",
    bout: 106,
    winner: "Anthony Valencia",
    winner_school: "Arizona State",
    loser: "David Ferrante",
    loser_school: "Northwestern",
    result: "MD 14-4"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 107,
    winner: "Michael Kemerer",
    winner_school: "Iowa",
    loser: "Drew Hughes",
    loser_school: "Michigan State",
    result: "TF-1.5 4:08 (22-7)"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 108,
    winner: "Benjamin Pasiuk",
    winner_school: "Army West Point",
    loser: "Clay Lautt",
    loser_school: "North Carolina",
    result: "Dec 8-3"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 109,
    winner: "Donnell Washington",
    winner_school: "Indiana",
    loser: "Jake Allar",
    loser_school: "Minnesota",
    result: "Dec 5-3"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 110,
    winner: "Daniel Bullard",
    winner_school: "NC State",
    loser: "Cody Surratt",
    loser_school: "Air Force",
    result: "Dec 4-0"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 111,
    winner: "Logan Massa",
    winner_school: "Michigan",
    loser: "Timothy Fitzpatrick",
    loser_school: "American",
    result: "Fall 4:56"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 112,
    winner: "Bernie Truax",
    winner_school: "Cal Poly",
    loser: "Jacob Oliver",
    loser_school: "Edinboro",
    result: "TF-1.5 3:19 (18-3)"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 113,
    winner: "Trenton Munoz",
    winner_school: "Arizona State",
    loser: "Jackson Hemauer",
    loser_school: "Northern Colorado",
    result: "Dec 6-2"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 114,
    winner: "Mikey Labriola",
    winner_school: "Nebraska",
    loser: "Lance Runyon",
    loser_school: "Northern Iowa",
    result: "M. For."
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 115,
    winner: "Carter Starocci",
    winner_school: "Penn State",
    loser: "Victor Marcelli",
    loser_school: "Virginia",
    result: "MD 10-2"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 116,
    winner: "Hayden Hastings",
    winner_school: "Wyoming",
    loser: "Michael O`Malley",
    loser_school: "Drexel",
    result: "Dec 4-2"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 117,
    winner: "Austin Murphy",
    winner_school: "Campbell",
    loser: "Mason Kauffman",
    loser_school: "Northern Illinois",
    result: "Dec 3-2"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 118,
    winner: "Andrew McNally",
    winner_school: "Kent State",
    loser: "Cody Howard",
    loser_school: "Virginia Tech",
    result: "Fall 5:36"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 119,
    winner: "Kaleb Romero",
    winner_school: "Ohio State",
    loser: "Jackson Turley",
    loser_school: "Rutgers",
    result: "Dec 7-2"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 120,
    winner: "Peyton Mocco",
    winner_school: "Missouri",
    loser: "Anthony Mantanona",
    loser_school: "Oklahoma",
    result: "MD 12-2"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 121,
    winner: "Dustin Plott",
    winner_school: "Oklahoma State",
    loser: "Thomas Flitz",
    loser_school: "Appalachian State",
    result: "Dec 7-5"
  },
  {
    round: "ChampR1",
    weight: "174",
    bout: 122,
    winner: "Demetrius Romero",
    winner_school: "Utah Valley",
    loser: "Jake Logan",
    loser_school: "Lehigh",
    result: "Dec 9-6"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 123,
    winner: "Aaron Brooks",
    winner_school: "Penn State",
    loser: "Jhaquan Anderson",
    loser_school: "George Washington",
    result: "TF-1.5 5:26 (17-1)"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 124,
    winner: "Owen Webster",
    winner_school: "Minnesota",
    loser: "Max Lyon",
    loser_school: "Purdue",
    result: "Dec 5-3"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 125,
    winner: "Jeremiah Kent",
    winner_school: "Missouri",
    loser: "Rocky Jordan",
    loser_school: "Ohio State",
    result: "Fall 2:15"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 126,
    winner: "Taylor Venz",
    winner_school: "Nebraska",
    loser: "Matthew Waddell",
    loser_school: "Chattanooga",
    result: "TF-1.5 5:15 (19-0)"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 127,
    winner: "Hunter Bolen",
    winner_school: "Virginia Tech",
    loser: "Dylan Ammerman",
    loser_school: "Lehigh",
    result: "MD 15-3"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 128,
    winner: "Nelson Brands",
    winner_school: "Iowa",
    loser: "Dominic Ducharme",
    loser_school: "CSU Bakersfield",
    result: "Dec 8-6"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 129,
    winner: "David Key",
    winner_school: "Navy",
    loser: "Christopher Weiler",
    loser_school: "Wisconsin",
    result: "Fall 5:48"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 130,
    winner: "Parker Keckeisen",
    winner_school: "Northern Iowa",
    loser: "Samuel Colbray",
    loser_school: "Iowa State",
    result: "Dec 2-1"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 131,
    winner: "Lou Deprez",
    winner_school: "Binghamton",
    loser: "Gregg Harvey",
    loser_school: "Pittsburgh",
    result: "Dec 6-4"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 132,
    winner: "Caleb Hopkins",
    winner_school: "Campbell",
    loser: "Zach Braunagel",
    loser_school: "Illinois",
    result: "Dec 7-6"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 133,
    winner: "Dakota Geer",
    winner_school: "Oklahoma State",
    loser: "Devin Kane",
    loser_school: "North Carolina",
    result: "MD 10-0"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 134,
    winner: "John Poznanski",
    winner_school: "Rutgers",
    loser: "Taylor Brown",
    loser_school: "Army West Point",
    result: "MD 14-2"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 135,
    winner: "Brit Wilson",
    winner_school: "Northern Illinois",
    loser: "DeAndre Nassar",
    loser_school: "CSU",
    result: "Dec 10-3"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 136,
    winner: "Charles Small",
    winner_school: "Hofstra",
    loser: "Tate Samuelson",
    loser_school: "Wyoming",
    result: "TB-1 3-2"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 137,
    winner: "Alan Clothier",
    winner_school: "Northern Colorado",
    loser: "Layne Malczewski",
    loser_school: "Michigan State",
    result: "Dec 8-3"
  },
  {
    round: "ChampR1",
    weight: "184",
    bout: 138,
    winner: "Trent Hidlay",
    winner_school: "NC State",
    loser: "Ryan Reyes",
    loser_school: "Oregon State",
    result: "TF-1.5 7:00 (17-2)"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 139,
    winner: "Myles Amine",
    winner_school: "Michigan",
    loser: "Billy Janzer",
    loser_school: "Rutgers",
    result: "MD 8-0"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 140,
    winner: "Jake Jakobsen",
    winner_school: "Lehigh",
    loser: "JT Brown",
    loser_school: "Army West Point",
    result: "SV-1 (Fall) 7:50"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 141,
    winner: "Noah Adams",
    winner_school: "West Virginia",
    loser: "Benjamin Smith",
    loser_school: "CSU",
    result: "Dec 6-0"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 142,
    winner: "Stephen Buchanan",
    winner_school: "Wyoming",
    loser: "J.J. Dixon",
    loser_school: "Oregon State",
    result: "Fall 3:34"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 143,
    winner: "Jacob Warner",
    winner_school: "Iowa",
    loser: "Nick Reenan",
    loser_school: "NC State",
    result: "SV-1 9-7"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 144,
    winner: "Lucas Davison",
    winner_school: "Northwestern",
    loser: "Marcus Coleman",
    loser_school: "Iowa State",
    result: "Dec 8-3"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 145,
    winner: "Tanner Sloan",
    winner_school: "South Dakota State",
    loser: "Max Shaw",
    loser_school: "North Carolina",
    result: "Dec 4-2"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 146,
    winner: "AJ Ferrari",
    winner_school: "Oklahoma State",
    loser: "Colin McCracken",
    loser_school: "Kent State",
    result: "TF-1.5 4:52 (17-2)"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 147,
    winner: "Kordell Norfleet",
    winner_school: "Arizona State",
    loser: "Trey Rogers",
    loser_school: "Hofstra",
    result: "MD 12-3"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 148,
    winner: "Thomas Penola",
    winner_school: "Purdue",
    loser: "Greg Bulsak",
    loser_school: "Clarion",
    result: "Dec 6-4"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 149,
    winner: "Jay Aiello",
    winner_school: "Virginia",
    loser: "Chris Kober",
    loser_school: "Campbell",
    result: "MD 10-2"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 150,
    winner: "Nino Bonaccorsi",
    winner_school: "Pittsburgh",
    loser: "Nick Stemmet",
    loser_school: "Stanford",
    result: "MD 15-2"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 151,
    winner: "Jake Woodley",
    winner_school: "Oklahoma",
    loser: "Rocky Elam",
    loser_school: "Missouri",
    result: "Dec 4-1"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 152,
    winner: "Cameron Caffey",
    winner_school: "Michigan State",
    loser: "Bryan McLaughlin",
    loser_school: "Drexel",
    result: "MD 14-6"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 153,
    winner: "Michael Beard",
    winner_school: "Penn State",
    loser: "Jacob Koser",
    loser_school: "Navy",
    result: "MD 14-4"
  },
  {
    round: "ChampR1",
    weight: "197",
    bout: 154,
    winner: "Owen Pentz",
    winner_school: "North Dakota State",
    loser: "Eric Schultz",
    loser_school: "Nebraska",
    result: "Fall 4:51"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 155,
    winner: "Gable Steveson",
    winner_school: "Minnesota",
    loser: "Taye Ghadiali",
    loser_school: "Campbell",
    result: "Fall 1:27"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 156,
    winner: "Wyatt Hendrickson",
    winner_school: "Air Force",
    loser: "Luke Luffman",
    loser_school: "Illinois",
    result: "Fall 2:12"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 157,
    winner: "Greg Kerkvliet",
    winner_school: "Penn State",
    loser: "Johnathan Birchmeier",
    loser_school: "Navy",
    result: "TF-1.5 2:18 (18-0)"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 158,
    winner: "Jordan Wood",
    winner_school: "Lehigh",
    loser: "Nathan Traxler",
    loser_school: "Stanford",
    result: "Dec 6-1"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 159,
    winner: "Tony Cassioppi",
    winner_school: "Iowa",
    loser: "Jon Spaulding",
    loser_school: "Edinboro",
    result: "MD 9-1"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 160,
    winner: "Tate Orndorff",
    winner_school: "Ohio State",
    loser: "Christian Lance",
    loser_school: "Nebraska",
    result: "Dec 2-1"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 161,
    winner: "Brian Andrews",
    winner_school: "Wyoming",
    loser: "Quinn Miller",
    loser_school: "Virginia",
    result: "Dec 6-4"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 162,
    winner: "Cohlton Schultz",
    winner_school: "Arizona State",
    loser: "Austin Harris",
    loser_school: "Oklahoma State",
    result: "MD 9-0"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 163,
    winner: "Matt Stencel",
    winner_school: "Central Michigan",
    loser: "Joe Doyle",
    loser_school: "Binghamton",
    result: "Fall 6:31"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 164,
    winner: "Trent Hillger",
    winner_school: "Wisconsin",
    loser: "Josh Heindselman",
    loser_school: "Oklahoma",
    result: "Dec 5-1"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 165,
    winner: "Zach Elam",
    winner_school: "Missouri",
    loser: "Brandon Metz",
    loser_school: "North Dakota State",
    result: "MD 11-0"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 166,
    winner: "Gannon Gremmel",
    winner_school: "Iowa State",
    loser: "Zachary Knighton-Ward",
    loser_school: "Hofstra",
    result: "Dec 5-2"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 167,
    winner: "Ethan Laird",
    winner_school: "Rider",
    loser: "Sam Schuyler",
    loser_school: "Buffalo",
    result: "Dec 3-2"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 168,
    winner: "Deonte Wilson",
    winner_school: "NC State",
    loser: "Michael McAleavey",
    loser_school: "Citadel",
    result: "Dec 4-1"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 169,
    winner: "Carter Isley",
    winner_school: "Northern Iowa",
    loser: "Hunter Catka",
    loser_school: "Virginia Tech",
    result: "Dec 3-1"
  },
  {
    round: "ChampR1",
    weight: "285",
    bout: 170,
    winner: "Mason Parris",
    winner_school: "Michigan",
    loser: "Andrew Gunning",
    loser_school: "North Carolina",
    result: "Fall 4:43"
  },
  {
    round: "ConsPrelims",
    weight: "125",
    bout: 171,
    winner: "Micah Roes",
    winner_school: "Binghamton",
    loser: "Kysen Terukina",
    loser_school: "Iowa State",
    result: "Dec 10-4"
  },
  {
    round: "ConsPrelims",
    weight: "133",
    bout: 172,
    winner: "Jordan Hamdan",
    winner_school: "Michigan State",
    loser: "Bryce West",
    loser_school: "Northern Illinois",
    result: "TF-1.5 6:14 (19-3)"
  },
  {
    round: "ConsPrelims",
    weight: "141",
    bout: 173,
    winner: "Dylan D`Emilio",
    winner_school: "Ohio State",
    loser: "Vinny Vespa",
    loser_school: "Hofstra",
    result: "MD 8-0"
  },
  {
    round: "ConsPrelims",
    weight: "149",
    bout: 174,
    winner: "Greg Gaxiola",
    winner_school: "Hofstra",
    loser: "Marcus Robinson",
    loser_school: "CSU",
    result: "Dec 4-0"
  },
  {
    round: "ConsPrelims",
    weight: "157",
    bout: 175,
    winner: "Markus Hartman",
    winner_school: "Army West Point",
    loser: "Luca Frinzi",
    loser_school: "Lehigh",
    result: "Dec 3-0"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 176,
    winner: "Spencer Lee",
    winner_school: "Iowa",
    loser: "Killian Cardinale",
    loser_school: "West Virginia",
    result: "MD 15-5"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 177,
    winner: "Codi Russell",
    winner_school: "Appalachian State",
    loser: "Patrick McCormick",
    loser_school: "Virginia",
    result: "Dec 8-6"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 178,
    winner: "Devin Schroder",
    winner_school: "Purdue",
    loser: "RayVon Foley",
    loser_school: "Michigan State",
    result: "Dec 2-1"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 179,
    winner: "Fabian Gutierrez",
    winner_school: "Chattanooga",
    loser: "Logan Treaster",
    loser_school: "Navy",
    result: "Dec 8-3"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 180,
    winner: "Brody Teske",
    winner_school: "Northern Iowa",
    loser: "Michael DeAugustino",
    loser_school: "Northwestern",
    result: "Dec 2-0"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 181,
    winner: "Trevor Mastrogiovanni",
    winner_school: "Oklahoma State",
    loser: "Brandon Kaylor",
    loser_school: "Oregon State",
    result: "MD 10-0"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 182,
    winner: "Drew Hildebrandt",
    winner_school: "Central Michigan",
    loser: "Liam Cronin",
    loser_school: "Nebraska",
    result: "Dec 2-1"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 183,
    winner: "Jake Ferri",
    winner_school: "Kent State",
    loser: "Zurich Storm",
    loser_school: "Campbell",
    result: "MD 13-5"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 184,
    winner: "Brandon Courtney",
    winner_school: "Arizona State",
    loser: "Eric Barnett",
    loser_school: "Wisconsin",
    result: "Dec 9-7"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 185,
    winner: "Jaret Lane",
    winner_school: "Lehigh",
    loser: "Micah Roes",
    loser_school: "Binghamton",
    result: "Fall 6:14"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 186,
    winner: "Jakob Camacho",
    winner_school: "NC State",
    loser: "Dylan Ragusin",
    loser_school: "Michigan",
    result: "Dec 10-8"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 187,
    winner: "Daniel Vega",
    winner_school: "South Dakota State",
    loser: "Gage Curry",
    loser_school: "American",
    result: "TF-1.5 6:13 (21-4)"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 188,
    winner: "Taylor LaMont",
    winner_school: "Utah Valley",
    loser: "Robert Howard",
    loser_school: "Penn State",
    result: "Dec 2-1"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 189,
    winner: "Malik Heinselman",
    winner_school: "Ohio State",
    loser: "Jackson DiSario",
    loser_school: "Stanford",
    result: "Dec 10-3"
  },
  {
    round: "ChampR2",
    weight: "125",
    bout: 190,
    winner: "Sam Latona",
    winner_school: "Virginia Tech",
    loser: "Patrick McKee",
    loser_school: "Minnesota",
    result: "Dec 3-1"
  },
  {
    round: "ConsR1",
    weight: "125",
    bout: 191,
    winner: "Noah Surtin",
    winner_school: "Missouri",
    loser: "Jonathan Tropea",
    loser_school: "Rider",
    result: "Fall 5:20"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 192,
    winner: "Daton Fix",
    winner_school: "Oklahoma State",
    loser: "Malyke Hines",
    loser_school: "Lehigh",
    result: "Fall 3:40"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 193,
    winner: "Devan Turner",
    winner_school: "Oregon State",
    loser: "Cole Rhone",
    loser_school: "Bloomsburg",
    result: "MD 10-2"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 194,
    winner: "Chris Cannon",
    winner_school: "Northwestern",
    loser: "Michael McGee",
    loser_school: "Arizona State",
    result: "Fall 3:00"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 195,
    winner: "Jacob Rundell",
    winner_school: "Purdue",
    loser: "Richie Koehler",
    loser_school: "Rider",
    result: "Dec 7-4"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 196,
    winner: "Micky Phillippi",
    winner_school: "Pittsburgh",
    loser: "Jarrett Trombley",
    loser_school: "NC State",
    result: "Dec 6-1"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 197,
    winner: "Jared Van Vleet",
    winner_school: "Air Force",
    loser: "Ty Smith",
    loser_school: "Utah Valley",
    result: "Dec 4-1"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 198,
    winner: "Austin DeSanto",
    winner_school: "Iowa",
    loser: "Ryan Sullivan",
    loser_school: "West Virginia",
    result: "Fall 1:36"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 199,
    winner: "Paul Bianchi",
    winner_school: "Little Rock",
    loser: "Zach Redding",
    loser_school: "Iowa State",
    result: "Dec 9-4"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 200,
    winner: "Korbin Myers",
    winner_school: "Virginia Tech",
    loser: "Zach Price",
    loser_school: "South Dakota State",
    result: "Dec 6-4"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 201,
    winner: "Chance Rich",
    winner_school: "CSU Bakersfield",
    loser: "Jordan Hamdan",
    loser_school: "Michigan State",
    result: "Fall 2:42"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 202,
    winner: "Matt Schmitt",
    winner_school: "Missouri",
    loser: "Mario Guillen",
    loser_school: "Ohio",
    result: "MD 9-0"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 203,
    winner: "Jacob Allen",
    winner_school: "Navy",
    loser: "Anthony Madrigal",
    loser_school: "Oklahoma",
    result: "SV-1 7-1"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 204,
    winner: "Louie Hayes",
    winner_school: "Virginia",
    loser: "Lucas Byrd",
    loser_school: "Illinois",
    result: "SV-1 6-4"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 205,
    winner: "Boo Dryden",
    winner_school: "Minnesota",
    loser: "Darren Miller",
    loser_school: "Bucknell",
    result: "Fall 1:36"
  },
  {
    round: "ChampR2",
    weight: "133",
    bout: 206,
    winner: "Roman Bravo-Young",
    winner_school: "Penn State",
    loser: "Kyle Burwick",
    loser_school: "Wisconsin",
    result: "MD 11-3"
  },
  {
    round: "ConsR1",
    weight: "133",
    bout: 207,
    winner: "Sean Carter",
    winner_school: "Appalachian State",
    loser: "Mosha Schwartz",
    loser_school: "Northern Colorado",
    result: "Dec 8-6"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 208,
    winner: "Jaydin Eierman",
    winner_school: "Iowa",
    loser: "Cole Matthews",
    loser_school: "Pittsburgh",
    result: "Dec 5-3"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 209,
    winner: "Cayden Rooks",
    winner_school: "Indiana",
    loser: "McKenzie Bell",
    loser_school: "Rider",
    result: "Dec 6-1"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 210,
    winner: "Dresden Simon",
    winner_school: "Central Michigan",
    loser: "Chad Red",
    loser_school: "Nebraska",
    result: "Dec 6-3"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 211,
    winner: "Drew Mattin",
    winner_school: "Michigan",
    loser: "Connor McGonagle",
    loser_school: "Lehigh",
    result: "Dec 7-3"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 212,
    winner: "Real Woods",
    winner_school: "Stanford",
    loser: "Dom Demas",
    loser_school: "Oklahoma",
    result: "SV-1 5-1"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 213,
    winner: "Grant Willits",
    winner_school: "Oregon State",
    loser: "Marcos Polanco",
    loser_school: "Minnesota",
    result: "Dec 5-0"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 214,
    winner: "Tariq Wilson",
    winner_school: "NC State",
    loser: "Brian Courtney",
    loser_school: "Virginia",
    result: "Dec 7-3"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 215,
    winner: "DJ Lloren",
    winner_school: "Florida State",
    loser: "Chase Zollmann",
    loser_school: "Wyoming",
    result: "MD 11-3"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 216,
    winner: "Sebastian Rivera",
    winner_school: "Rutgers",
    loser: "Dylan Duncan",
    loser_school: "Illinois",
    result: "Dec 10-4"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 217,
    winner: "Dylan D`Emilio",
    winner_school: "Ohio State",
    loser: "Lane Peters",
    loser_school: "Army West Point",
    result: "Dec 10-4"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 218,
    winner: "Allan Hart",
    winner_school: "Missouri",
    loser: "Cody Trybus",
    loser_school: "Navy",
    result: "Dec 4-1"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 219,
    winner: "Angelo Martinoni",
    winner_school: "CSU Bakersfield",
    loser: "Anthony Brito",
    loser_school: "Appalachian State",
    result: "Dec 8-4"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 220,
    winner: "Zachary Sherman",
    winner_school: "North Carolina",
    loser: "Colin Valdiviez",
    loser_school: "Northwestern",
    result: "MD 14-1"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 221,
    winner: "Ian Parker",
    winner_school: "Iowa State",
    loser: "Saul Ervin",
    loser_school: "SIU Edwardsville",
    result: "SV-1 4-2"
  },
  {
    round: "ChampR2",
    weight: "141",
    bout: 222,
    winner: "Nick Lee",
    winner_school: "Penn State",
    loser: "Clay Carlson",
    loser_school: "South Dakota State",
    result: "MD 14-3"
  },
  {
    round: "ConsR1",
    weight: "141",
    bout: 223,
    winner: "Parker Filius",
    winner_school: "Purdue",
    loser: "Julian Flores",
    loser_school: "Drexel",
    result: "MD 9-0"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 224,
    winner: "Sammy Sasso",
    winner_school: "Ohio State",
    loser: "Kyle Parco",
    loser_school: "Florida State",
    result: "Dec 11-10"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 225,
    winner: "PJ Ogunsanya",
    winner_school: "Army West Point",
    loser: "Cameron Hunsaker",
    loser_school: "Utah Valley",
    result: "Dec 5-3"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 226,
    winner: "Yahya Thomas",
    winner_school: "Northwestern",
    loser: "Legend Lamer",
    loser_school: "Cal Poly",
    result: "Dec 10-4"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 227,
    winner: "Jaden Abas",
    winner_school: "Stanford",
    loser: "Luke Nichter",
    loser_school: "Drexel",
    result: "Dec 7-1"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 228,
    winner: "Max Murin",
    winner_school: "Iowa",
    loser: "Ridge Lovett",
    loser_school: "Nebraska",
    result: "Dec 5-3"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 229,
    winner: "Graham Rooks",
    winner_school: "Indiana",
    loser: "Peyton Omania",
    loser_school: "Michigan State",
    result: "MD 9-1"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 230,
    winner: "Boo Lewallen",
    winner_school: "Oklahoma State",
    loser: "Joshua Heil",
    loser_school: "Campbell",
    result: "TB-1 7-6"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 231,
    winner: "Mitch Moore",
    winner_school: "Oklahoma",
    loser: "Kody Komara",
    loser_school: "Kent State",
    result: "Fall 2:16"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 232,
    winner: "Brock Mauller",
    winner_school: "Missouri",
    loser: "Michael Blockhus",
    loser_school: "Minnesota",
    result: "Dec 4-2"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 233,
    winner: "Greg Gaxiola",
    winner_school: "Hofstra",
    loser: "Casey Cobb",
    loser_school: "Navy",
    result: "Dec 3-2"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 234,
    winner: "Bryce Andonian",
    winner_school: "Virginia Tech",
    loser: "Kanen Storr",
    loser_school: "Michigan",
    result: "Dec 10-7"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 235,
    winner: "Josh Finesilver",
    winner_school: "Duke",
    loser: "Jimmy Hoffman",
    loser_school: "Lehigh",
    result: "Dec 13-7"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 236,
    winner: "Jonathan Millner",
    winner_school: "Appalachian State",
    loser: "Triston Lara",
    loser_school: "Northern Iowa",
    result: "Dec 9-8"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 237,
    winner: "Anthony Cheloni",
    winner_school: "Northern Illinois",
    loser: "Mike Van Brill",
    loser_school: "Rutgers",
    result: "Dec 8-4"
  },
  {
    round: "ChampR2",
    weight: "149",
    bout: 238,
    winner: "Austin O`Connor",
    winner_school: "North Carolina",
    loser: "Griffin Parriott",
    loser_school: "Purdue",
    result: "Dec 8-3"
  },
  {
    round: "ConsR1",
    weight: "149",
    bout: 239,
    winner: "Cory Crooks",
    winner_school: "Arizona State",
    loser: "Jarrett Degen",
    loser_school: "Iowa State",
    result: "Dec 8-6"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 240,
    winner: "Ryan Deakin",
    winner_school: "Northwestern",
    loser: "Requir van der Merwe",
    loser_school: "Stanford",
    result: "Dec 4-2"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 241,
    winner: "Wyatt Sheets",
    winner_school: "Oklahoma State",
    loser: "Justin McCoy",
    loser_school: "Virginia",
    result: "Dec 6-2"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 242,
    winner: "Jared Franek",
    winner_school: "North Dakota State",
    loser: "Kendall Coleman",
    loser_school: "Purdue",
    result: "Inj. 6:30"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 243,
    winner: "Parker Kropman",
    winner_school: "Drexel",
    loser: "Nicholas Palumbo",
    loser_school: "Sacred Heart",
    result: "Dec 8-5"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 244,
    winner: "Brady Berge",
    winner_school: "Penn State",
    loser: "Kaleb Young",
    loser_school: "Iowa",
    result: "Dec 3-2"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 245,
    winner: "Andrew Cerniglia",
    winner_school: "Navy",
    loser: "Caleb Licking",
    loser_school: "Nebraska",
    result: "Dec 5-3"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 246,
    winner: "Jesse Dellavecchia",
    winner_school: "Rider",
    loser: "Hunter Willits",
    loser_school: "Oregon State",
    result: "Dec 4-2"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 247,
    winner: "Joshua McClure",
    winner_school: "North Carolina",
    loser: "Cody Bond",
    loser_school: "Appalachian State",
    result: "Dec 5-4"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 248,
    winner: "David Carr",
    winner_school: "Iowa State",
    loser: "Will Lewan",
    loser_school: "Michigan",
    result: "MD 10-2"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 249,
    winner: "Markus Hartman",
    winner_school: "Army West Point",
    loser: "Holden Heller",
    loser_school: "Hofstra",
    result: "Dec 8-4"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 250,
    winner: "Brayton Lee",
    winner_school: "Minnesota",
    loser: "Jacori Teemer",
    loser_school: "Arizona State",
    result: "Dec 4-3"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 251,
    winner: "Benjamin Barton",
    winner_school: "Campbell",
    loser: "Connor Brady",
    loser_school: "Virginia Tech",
    result: "Dec 8-7"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 252,
    winner: "Jacob Wright",
    winner_school: "Wyoming",
    loser: "Johnny Lovett",
    loser_school: "Central Michigan",
    result: "TB-1 2-1"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 253,
    winner: "Jarrett Jacques",
    winner_school: "Missouri",
    loser: "Justin Thomas",
    loser_school: "Oklahoma",
    result: "Dec 3-1"
  },
  {
    round: "ChampR2",
    weight: "157",
    bout: 254,
    winner: "Hayden Hidlay",
    winner_school: "NC State",
    loser: "Cade DeVos",
    loser_school: "South Dakota State",
    result: "TF-1.5 5:59 (20-3)"
  },
  {
    round: "ConsR1",
    weight: "157",
    bout: 255,
    winner: "Michael Petite",
    winner_school: "Buffalo",
    loser: "Chase Saldate",
    loser_school: "Michigan State",
    result: "Dec 7-2"
  },
  {
    round: "ConsPrelims",
    weight: "165",
    bout: 256,
    winner: "Ricky Stamm",
    winner_school: "Hofstra",
    loser: "Evan Barczak",
    loser_school: "Drexel",
    result: "SV-1 5-3"
  },
  {
    round: "ConsPrelims",
    weight: "174",
    bout: 257,
    winner: "Jacob Nolan",
    winner_school: "Binghamton",
    loser: "Victor Marcelli",
    loser_school: "Virginia",
    result: "Dec 4-2"
  },
  {
    round: "ConsPrelims",
    weight: "184",
    bout: 258,
    winner: "Gregg Harvey",
    winner_school: "Pittsburgh",
    loser: "Joe Accousti",
    loser_school: "Sacred Heart",
    result: "MD 8-0"
  },
  {
    round: "ConsPrelims",
    weight: "197",
    bout: 259,
    winner: "Trey Rogers",
    winner_school: "Hofstra",
    loser: "Logan Andrew",
    loser_school: "Chattanooga",
    result: "Dec 6-1"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 261,
    winner: "Alex Marinelli",
    winner_school: "Iowa",
    loser: "Thomas Bullard",
    loser_school: "NC State",
    result: "MD 13-2"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 262,
    winner: "Austin Yant",
    winner_school: "Northern Iowa",
    loser: "William Formato",
    loser_school: "Appalachian State",
    result: "MD 11-2"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 263,
    winner: "Shane Griffith",
    winner_school: "Stanford",
    loser: "Luke Weber",
    loser_school: "North Dakota State",
    result: "Dec 7-5"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 264,
    winner: "Jake Tucker",
    winner_school: "Michigan State",
    loser: "Andrew Sparks",
    loser_school: "Minnesota",
    result: "Dec 5-2"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 265,
    winner: "Zach Hartman",
    winner_school: "Bucknell",
    loser: "Peyton Hall",
    loser_school: "West Virginia",
    result: "Dec 6-0"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 266,
    winner: "Rodrick Mosley",
    winner_school: "George Washington",
    loser: "Jake Keating",
    loser_school: "Virginia",
    result: "Dec 9-7"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 267,
    winner: "Mekhi Lewis",
    winner_school: "Virginia Tech",
    loser: "Tanner Skidgel",
    loser_school: "Navy",
    result: "Dec 3-2"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 268,
    winner: "Cole Moody",
    winner_school: "Wyoming",
    loser: "Brian Meyer",
    loser_school: "Lehigh",
    result: "Dec 2-0"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 269,
    winner: "Jake Wentzel",
    winner_school: "Pittsburgh",
    loser: "Peyton Robb",
    loser_school: "Nebraska",
    result: "Dec 8-1"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 270,
    winner: "Gerrit Nijenhuis",
    winner_school: "Purdue",
    loser: "Ricky Stamm",
    loser_school: "Hofstra",
    result: "Fall 3:44"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 271,
    winner: "Keegan O`Toole",
    winner_school: "Missouri",
    loser: "Cameron Amine",
    loser_school: "Michigan",
    result: "Dec 5-2"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 272,
    winner: "Kennedy Monday",
    winner_school: "North Carolina",
    loser: "Jake Silverstein",
    loser_school: "Rider",
    result: "Dec 9-2"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 273,
    winner: "Ethan Smith",
    winner_school: "Ohio State",
    loser: "Travis Wittlake",
    loser_school: "Oklahoma State",
    result: "Dec 4-3"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 274,
    winner: "Andrew Nicholson",
    winner_school: "Chattanooga",
    loser: "Joe Lee",
    loser_school: "Penn State",
    result: "Dec 10-4"
  },
  {
    round: "ChampR2",
    weight: "165",
    bout: 275,
    winner: "Anthony Valencia",
    winner_school: "Arizona State",
    loser: "Izzak Olejnik",
    loser_school: "Northern Illinois",
    result: "SV-1 6-4"
  },
  {
    round: "ConsR1",
    weight: "165",
    bout: 276,
    winner: "David Ferrante",
    winner_school: "Northwestern",
    loser: "Dan Braunagel",
    loser_school: "Illinois",
    result: "Dec 11-5"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 277,
    winner: "Michael Kemerer",
    winner_school: "Iowa",
    loser: "Benjamin Pasiuk",
    loser_school: "Army West Point",
    result: "TF-1.5 5:06 (17-1)"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 278,
    winner: "Clay Lautt",
    winner_school: "North Carolina",
    loser: "Drew Hughes",
    loser_school: "Michigan State",
    result: "Dec 10-4"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 279,
    winner: "Daniel Bullard",
    winner_school: "NC State",
    loser: "Donnell Washington",
    loser_school: "Indiana",
    result: "Dec 6-4"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 280,
    winner: "Jake Allar",
    winner_school: "Minnesota",
    loser: "Cody Surratt",
    loser_school: "Air Force",
    result: "Fall 5:56"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 281,
    winner: "Bernie Truax",
    winner_school: "Cal Poly",
    loser: "Logan Massa",
    loser_school: "Michigan",
    result: "SV-1 3-1"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 282,
    winner: "Jacob Oliver",
    winner_school: "Edinboro",
    loser: "Timothy Fitzpatrick",
    loser_school: "American",
    result: "Dec 7-5"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 283,
    winner: "Mikey Labriola",
    winner_school: "Nebraska",
    loser: "Trenton Munoz",
    loser_school: "Arizona State",
    result: "Dec 5-3"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 284,
    winner: "Jackson Hemauer",
    winner_school: "Northern Colorado",
    loser: "Lance Runyon",
    loser_school: "Northern Iowa",
    result: "M. For."
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 285,
    winner: "Carter Starocci",
    winner_school: "Penn State",
    loser: "Hayden Hastings",
    loser_school: "Wyoming",
    result: "Dec 8-2"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 286,
    winner: "Michael O`Malley",
    winner_school: "Drexel",
    loser: "Jacob Nolan",
    loser_school: "Binghamton",
    result: "SV-1 3-1"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 287,
    winner: "Andrew McNally",
    winner_school: "Kent State",
    loser: "Austin Murphy",
    loser_school: "Campbell",
    result: "SV-1 6-4"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 288,
    winner: "Mason Kauffman",
    winner_school: "Northern Illinois",
    loser: "Cody Howard",
    loser_school: "Virginia Tech",
    result: "SV-1 3-1"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 289,
    winner: "Kaleb Romero",
    winner_school: "Ohio State",
    loser: "Peyton Mocco",
    loser_school: "Missouri",
    result: "Dec 5-1"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 290,
    winner: "Jackson Turley",
    winner_school: "Rutgers",
    loser: "Anthony Mantanona",
    loser_school: "Oklahoma",
    result: "Fall 2:20"
  },
  {
    round: "ChampR2",
    weight: "174",
    bout: 291,
    winner: "Demetrius Romero",
    winner_school: "Utah Valley",
    loser: "Dustin Plott",
    loser_school: "Oklahoma State",
    result: "Dec 11-5"
  },
  {
    round: "ConsR1",
    weight: "174",
    bout: 292,
    winner: "Jake Logan",
    winner_school: "Lehigh",
    loser: "Thomas Flitz",
    loser_school: "Appalachian State",
    result: "TB-2 (RT) 3-3"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 293,
    winner: "Aaron Brooks",
    winner_school: "Penn State",
    loser: "Owen Webster",
    loser_school: "Minnesota",
    result: "Dec 5-0"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 294,
    winner: "Max Lyon",
    winner_school: "Purdue",
    loser: "Jhaquan Anderson",
    loser_school: "George Washington",
    result: "MD 14-3"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 295,
    winner: "Taylor Venz",
    winner_school: "Nebraska",
    loser: "Jeremiah Kent",
    loser_school: "Missouri",
    result: "Dec 10-4"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 296,
    winner: "Rocky Jordan",
    winner_school: "Ohio State",
    loser: "Matthew Waddell",
    loser_school: "Chattanooga",
    result: "MD 10-1"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 297,
    winner: "Hunter Bolen",
    winner_school: "Virginia Tech",
    loser: "Nelson Brands",
    loser_school: "Iowa",
    result: "Dec 6-2"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 298,
    winner: "Dominic Ducharme",
    winner_school: "CSU Bakersfield",
    loser: "Dylan Ammerman",
    loser_school: "Lehigh",
    result: "TF-1.5 7:00 (16-1)"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 299,
    winner: "Parker Keckeisen",
    winner_school: "Northern Iowa",
    loser: "David Key",
    loser_school: "Navy",
    result: "MD 16-5"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 300,
    winner: "Samuel Colbray",
    winner_school: "Iowa State",
    loser: "Christopher Weiler",
    loser_school: "Wisconsin",
    result: "MD 12-4"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 301,
    winner: "Lou Deprez",
    winner_school: "Binghamton",
    loser: "Caleb Hopkins",
    loser_school: "Campbell",
    result: "Dec 4-1"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 302,
    winner: "Zach Braunagel",
    winner_school: "Illinois",
    loser: "Gregg Harvey",
    loser_school: "Pittsburgh",
    result: "Dec 5-2"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 303,
    winner: "John Poznanski",
    winner_school: "Rutgers",
    loser: "Dakota Geer",
    loser_school: "Oklahoma State",
    result: "Dec 7-3"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 304,
    winner: "Devin Kane",
    winner_school: "North Carolina",
    loser: "Taylor Brown",
    loser_school: "Army West Point",
    result: "Dec 8-5"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 305,
    winner: "Brit Wilson",
    winner_school: "Northern Illinois",
    loser: "Charles Small",
    loser_school: "Hofstra",
    result: "Dec 5-2"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 306,
    winner: "Tate Samuelson",
    winner_school: "Wyoming",
    loser: "DeAndre Nassar",
    loser_school: "CSU",
    result: "Dec 3-2"
  },
  {
    round: "ChampR2",
    weight: "184",
    bout: 307,
    winner: "Trent Hidlay",
    winner_school: "NC State",
    loser: "Alan Clothier",
    loser_school: "Northern Colorado",
    result: "TF-1.5 7:00 (20-5)"
  },
  {
    round: "ConsR1",
    weight: "184",
    bout: 308,
    winner: "Ryan Reyes",
    winner_school: "Oregon State",
    loser: "Layne Malczewski",
    loser_school: "Michigan State",
    result: "Dec 9-5"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 309,
    winner: "Myles Amine",
    winner_school: "Michigan",
    loser: "Jake Jakobsen",
    loser_school: "Lehigh",
    result: "Dec 4-2"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 310,
    winner: "JT Brown",
    winner_school: "Army West Point",
    loser: "Billy Janzer",
    loser_school: "Rutgers",
    result: "Dec 5-3"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 311,
    winner: "Stephen Buchanan",
    winner_school: "Wyoming",
    loser: "Noah Adams",
    loser_school: "West Virginia",
    result: "Fall 1:59"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 312,
    winner: "Benjamin Smith",
    winner_school: "CSU",
    loser: "J.J. Dixon",
    loser_school: "Oregon State",
    result: "MD 12-4"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 313,
    winner: "Jacob Warner",
    winner_school: "Iowa",
    loser: "Lucas Davison",
    loser_school: "Northwestern",
    result: "Dec 3-0"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 314,
    winner: "Marcus Coleman",
    winner_school: "Iowa State",
    loser: "Nick Reenan",
    loser_school: "NC State",
    result: "Dec 6-1"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 315,
    winner: "AJ Ferrari",
    winner_school: "Oklahoma State",
    loser: "Tanner Sloan",
    loser_school: "South Dakota State",
    result: "Dec 5-0"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 316,
    winner: "Max Shaw",
    winner_school: "North Carolina",
    loser: "Colin McCracken",
    loser_school: "Kent State",
    result: "Dec 5-3"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 317,
    winner: "Kordell Norfleet",
    winner_school: "Arizona State",
    loser: "Thomas Penola",
    loser_school: "Purdue",
    result: "Dec 8-4"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 318,
    winner: "Greg Bulsak",
    winner_school: "Clarion",
    loser: "Trey Rogers",
    loser_school: "Hofstra",
    result: "MD 10-1"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 319,
    winner: "Nino Bonaccorsi",
    winner_school: "Pittsburgh",
    loser: "Jay Aiello",
    loser_school: "Virginia",
    result: "MD 13-3"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 320,
    winner: "Chris Kober",
    winner_school: "Campbell",
    loser: "Nick Stemmet",
    loser_school: "Stanford",
    result: "Dec 12-7"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 321,
    winner: "Jake Woodley",
    winner_school: "Oklahoma",
    loser: "Cameron Caffey",
    loser_school: "Michigan State",
    result: "Dec 4-3"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 322,
    winner: "Rocky Elam",
    winner_school: "Missouri",
    loser: "Bryan McLaughlin",
    loser_school: "Drexel",
    result: "MD 16-6"
  },
  {
    round: "ChampR2",
    weight: "197",
    bout: 323,
    winner: "Michael Beard",
    winner_school: "Penn State",
    loser: "Owen Pentz",
    loser_school: "North Dakota State",
    result: "MD 17-8"
  },
  {
    round: "ConsR1",
    weight: "197",
    bout: 324,
    winner: "Eric Schultz",
    winner_school: "Nebraska",
    loser: "Jacob Koser",
    loser_school: "Navy",
    result: "Dec 4-2"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 325,
    winner: "Gable Steveson",
    winner_school: "Minnesota",
    loser: "Wyatt Hendrickson",
    loser_school: "Air Force",
    result: "TF-1.5 6:41 (17-2)"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 326,
    winner: "Luke Luffman",
    winner_school: "Illinois",
    loser: "Taye Ghadiali",
    loser_school: "Campbell",
    result: "Dec 7-2"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 327,
    winner: "Greg Kerkvliet",
    winner_school: "Penn State",
    loser: "Jordan Wood",
    loser_school: "Lehigh",
    result: "MD 12-2"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 328,
    winner: "Nathan Traxler",
    winner_school: "Stanford",
    loser: "Johnathan Birchmeier",
    loser_school: "Navy",
    result: "TF-1.5 5:30 (15-0)"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 329,
    winner: "Tony Cassioppi",
    winner_school: "Iowa",
    loser: "Tate Orndorff",
    loser_school: "Ohio State",
    result: "MD 11-0"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 330,
    winner: "Christian Lance",
    winner_school: "Nebraska",
    loser: "Jon Spaulding",
    loser_school: "Edinboro",
    result: "Dec 3-2"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 331,
    winner: "Cohlton Schultz",
    winner_school: "Arizona State",
    loser: "Brian Andrews",
    loser_school: "Wyoming",
    result: "DQ"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 332,
    winner: "Austin Harris",
    winner_school: "Oklahoma State",
    loser: "Quinn Miller",
    loser_school: "Virginia",
    result: "Dec 8-2"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 333,
    winner: "Trent Hillger",
    winner_school: "Wisconsin",
    loser: "Matt Stencel",
    loser_school: "Central Michigan",
    result: "Dec 2-1"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 334,
    winner: "Josh Heindselman",
    winner_school: "Oklahoma",
    loser: "Joe Doyle",
    loser_school: "Binghamton",
    result: "Dec 6-2"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 335,
    winner: "Gannon Gremmel",
    winner_school: "Iowa State",
    loser: "Zach Elam",
    loser_school: "Missouri",
    result: "Dec 3-1"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 336,
    winner: "Zachary Knighton-Ward",
    winner_school: "Hofstra",
    loser: "Brandon Metz",
    loser_school: "North Dakota State",
    result: "Fall 0:55"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 337,
    winner: "Ethan Laird",
    winner_school: "Rider",
    loser: "Deonte Wilson",
    loser_school: "NC State",
    result: "Dec 7-2"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 338,
    winner: "Sam Schuyler",
    winner_school: "Buffalo",
    loser: "Michael McAleavey",
    loser_school: "Citadel",
    result: "SV-1 3-1"
  },
  {
    round: "ChampR2",
    weight: "285",
    bout: 339,
    winner: "Mason Parris",
    winner_school: "Michigan",
    loser: "Carter Isley",
    loser_school: "Northern Iowa",
    result: "TF-1.5 5:27 (17-1)"
  },
  {
    round: "ConsR1",
    weight: "285",
    bout: 340,
    winner: "Hunter Catka",
    winner_school: "Virginia Tech",
    loser: "Andrew Gunning",
    loser_school: "North Carolina",
    result: "SV-1 3-1"
  },
  {
    round: "QtrFinals",
    weight: "125",
    bout: 341,
    winner: "Spencer Lee",
    winner_school: "Iowa",
    loser: "Devin Schroder",
    loser_school: "Purdue",
    result: "MD 10-2"
  },
  {
    round: "QtrFinals",
    weight: "125",
    bout: 342,
    winner: "Drew Hildebrandt",
    winner_school: "Central Michigan",
    loser: "Brody Teske",
    loser_school: "Northern Iowa",
    result: "SV-1 4-2"
  },
  {
    round: "QtrFinals",
    weight: "125",
    bout: 343,
    winner: "Brandon Courtney",
    winner_school: "Arizona State",
    loser: "Jakob Camacho",
    loser_school: "NC State",
    result: "Dec 4-2"
  },
  {
    round: "QtrFinals",
    weight: "125",
    bout: 344,
    winner: "Taylor LaMont",
    winner_school: "Utah Valley",
    loser: "Sam Latona",
    loser_school: "Virginia Tech",
    result: "Dec 7-4"
  },
  {
    round: "QtrFinals",
    weight: "133",
    bout: 345,
    winner: "Daton Fix",
    winner_school: "Oklahoma State",
    loser: "Chris Cannon",
    loser_school: "Northwestern",
    result: "Fall 5:10"
  },
  {
    round: "QtrFinals",
    weight: "133",
    bout: 346,
    winner: "Austin DeSanto",
    winner_school: "Iowa",
    loser: "Micky Phillippi",
    loser_school: "Pittsburgh",
    result: "MD 13-5"
  },
  {
    round: "QtrFinals",
    weight: "133",
    bout: 347,
    winner: "Korbin Myers",
    winner_school: "Virginia Tech",
    loser: "Matt Schmitt",
    loser_school: "Missouri",
    result: "Dec 1-0"
  },
  {
    round: "QtrFinals",
    weight: "133",
    bout: 348,
    winner: "Roman Bravo-Young",
    winner_school: "Penn State",
    loser: "Louie Hayes",
    loser_school: "Virginia",
    result: "Dec 4-1"
  },
  {
    round: "QtrFinals",
    weight: "141",
    bout: 349,
    winner: "Jaydin Eierman",
    winner_school: "Iowa",
    loser: "Dresden Simon",
    loser_school: "Central Michigan",
    result: "Fall 3:49"
  },
  {
    round: "QtrFinals",
    weight: "141",
    bout: 350,
    winner: "Tariq Wilson",
    winner_school: "NC State",
    loser: "Real Woods",
    loser_school: "Stanford",
    result: "Dec 3-1"
  },
  {
    round: "QtrFinals",
    weight: "141",
    bout: 351,
    winner: "Sebastian Rivera",
    winner_school: "Rutgers",
    loser: "Allan Hart",
    loser_school: "Missouri",
    result: "Dec 7-3"
  },
  {
    round: "QtrFinals",
    weight: "141",
    bout: 352,
    winner: "Nick Lee",
    winner_school: "Penn State",
    loser: "Zachary Sherman",
    loser_school: "North Carolina",
    result: "MD 11-3"
  },
  {
    round: "QtrFinals",
    weight: "149",
    bout: 353,
    winner: "Sammy Sasso",
    winner_school: "Ohio State",
    loser: "Yahya Thomas",
    loser_school: "Northwestern",
    result: "Dec 8-3"
  },
  {
    round: "QtrFinals",
    weight: "149",
    bout: 354,
    winner: "Boo Lewallen",
    winner_school: "Oklahoma State",
    loser: "Max Murin",
    loser_school: "Iowa",
    result: "SV-1 6-4"
  },
  {
    round: "QtrFinals",
    weight: "149",
    bout: 355,
    winner: "Brock Mauller",
    winner_school: "Missouri",
    loser: "Bryce Andonian",
    loser_school: "Virginia Tech",
    result: "Dec 8-3"
  },
  {
    round: "QtrFinals",
    weight: "149",
    bout: 356,
    winner: "Austin O`Connor",
    winner_school: "North Carolina",
    loser: "Jonathan Millner",
    loser_school: "Appalachian State",
    result: "Dec 5-2"
  },
  {
    round: "QtrFinals",
    weight: "157",
    bout: 357,
    winner: "Ryan Deakin",
    winner_school: "Northwestern",
    loser: "Jared Franek",
    loser_school: "North Dakota State",
    result: "Dec 5-4"
  },
  {
    round: "QtrFinals",
    weight: "157",
    bout: 358,
    winner: "Jesse Dellavecchia",
    winner_school: "Rider",
    loser: "Brady Berge",
    loser_school: "Penn State",
    result: "Inj. 2:39"
  },
  {
    round: "QtrFinals",
    weight: "157",
    bout: 359,
    winner: "David Carr",
    winner_school: "Iowa State",
    loser: "Brayton Lee",
    loser_school: "Minnesota",
    result: "SV-1 4-2"
  },
  {
    round: "QtrFinals",
    weight: "157",
    bout: 360,
    winner: "Hayden Hidlay",
    winner_school: "NC State",
    loser: "Jacob Wright",
    loser_school: "Wyoming",
    result: "Fall 2:33"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 361,
    winner: "Patrick McKee",
    winner_school: "Minnesota",
    loser: "Codi Russell",
    loser_school: "Appalachian State",
    result: "Fall 2:00"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 362,
    winner: "Robert Howard",
    winner_school: "Penn State",
    loser: "Fabian Gutierrez",
    loser_school: "Chattanooga",
    result: "Dec 9-7"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 363,
    winner: "Trevor Mastrogiovanni",
    winner_school: "Oklahoma State",
    loser: "Dylan Ragusin",
    loser_school: "Michigan",
    result: "Dec 6-0"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 364,
    winner: "Eric Barnett",
    winner_school: "Wisconsin",
    loser: "Jake Ferri",
    loser_school: "Kent State",
    result: "MD 10-2"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 365,
    winner: "Jaret Lane",
    winner_school: "Lehigh",
    loser: "Liam Cronin",
    loser_school: "Nebraska",
    result: "Dec 13-12"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 366,
    winner: "Michael DeAugustino",
    winner_school: "Northwestern",
    loser: "Daniel Vega",
    loser_school: "South Dakota State",
    result: "Dec 8-6"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 367,
    winner: "RayVon Foley",
    winner_school: "Michigan State",
    loser: "Malik Heinselman",
    loser_school: "Ohio State",
    result: "Dec 6-3"
  },
  {
    round: "ConsR2",
    weight: "125",
    bout: 368,
    winner: "Killian Cardinale",
    winner_school: "West Virginia",
    loser: "Noah Surtin",
    loser_school: "Missouri",
    result: "Dec 9-4"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 369,
    winner: "Devan Turner",
    winner_school: "Oregon State",
    loser: "Kyle Burwick",
    loser_school: "Wisconsin",
    result: "Dec 4-3"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 370,
    winner: "Lucas Byrd",
    winner_school: "Illinois",
    loser: "Jacob Rundell",
    loser_school: "Purdue",
    result: "MD 12-3"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 371,
    winner: "Jared Van Vleet",
    winner_school: "Air Force",
    loser: "Mario Guillen",
    loser_school: "Ohio",
    result: "Dec 4-3"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 372,
    winner: "Zach Price",
    winner_school: "South Dakota State",
    loser: "Paul Bianchi",
    loser_school: "Little Rock",
    result: "Dec 6-2"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 373,
    winner: "Chance Rich",
    winner_school: "CSU Bakersfield",
    loser: "Ryan Sullivan",
    loser_school: "West Virginia",
    result: "Dec 4-3"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 374,
    winner: "Jarrett Trombley",
    winner_school: "NC State",
    loser: "Jacob Allen",
    loser_school: "Navy",
    result: "Dec 4-0"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 375,
    winner: "Michael McGee",
    winner_school: "Arizona State",
    loser: "Boo Dryden",
    loser_school: "Minnesota",
    result: "MD 16-3"
  },
  {
    round: "ConsR2",
    weight: "133",
    bout: 376,
    winner: "Malyke Hines",
    winner_school: "Lehigh",
    loser: "Sean Carter",
    loser_school: "Appalachian State",
    result: "MD 10-2"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 377,
    winner: "Clay Carlson",
    winner_school: "South Dakota State",
    loser: "Cayden Rooks",
    loser_school: "Indiana",
    result: "Fall 2:59"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 378,
    winner: "Colin Valdiviez",
    winner_school: "Northwestern",
    loser: "Drew Mattin",
    loser_school: "Michigan",
    result: "MD 10-2"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 379,
    winner: "Grant Willits",
    winner_school: "Oregon State",
    loser: "Cody Trybus",
    loser_school: "Navy",
    result: "Dec 6-3"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 380,
    winner: "Dylan Duncan",
    winner_school: "Illinois",
    loser: "DJ Lloren",
    loser_school: "Florida State",
    result: "Dec 4-1"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 381,
    winner: "Dylan D`Emilio",
    winner_school: "Ohio State",
    loser: "Brian Courtney",
    loser_school: "Virginia",
    result: "TB-1 10-9"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 382,
    winner: "Dom Demas",
    winner_school: "Oklahoma",
    loser: "Angelo Martinoni",
    loser_school: "CSU Bakersfield",
    result: "MD 11-3"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 383,
    winner: "Chad Red",
    winner_school: "Nebraska",
    loser: "Ian Parker",
    loser_school: "Iowa State",
    result: "Dec 12-8"
  },
  {
    round: "ConsR2",
    weight: "141",
    bout: 384,
    winner: "Parker Filius",
    winner_school: "Purdue",
    loser: "Cole Matthews",
    loser_school: "Pittsburgh",
    result: "Dec 6-3"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 385,
    winner: "PJ Ogunsanya",
    winner_school: "Army West Point",
    loser: "Griffin Parriott",
    loser_school: "Purdue",
    result: "Fall 5:45"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 386,
    winner: "Jaden Abas",
    winner_school: "Stanford",
    loser: "Triston Lara",
    loser_school: "Northern Iowa",
    result: "Dec 4-1"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 387,
    winner: "Kanen Storr",
    winner_school: "Michigan",
    loser: "Graham Rooks",
    loser_school: "Indiana",
    result: "Dec 7-3"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 388,
    winner: "Mitch Moore",
    winner_school: "Oklahoma",
    loser: "Michael Blockhus",
    loser_school: "Minnesota",
    result: "Fall 1:15"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 389,
    winner: "Joshua Heil",
    winner_school: "Campbell",
    loser: "Greg Gaxiola",
    loser_school: "Hofstra",
    result: "Dec 5-2"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 390,
    winner: "Josh Finesilver",
    winner_school: "Duke",
    loser: "Ridge Lovett",
    loser_school: "Nebraska",
    result: "Fall 2:50"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 391,
    winner: "Legend Lamer",
    winner_school: "Cal Poly",
    loser: "Anthony Cheloni",
    loser_school: "Northern Illinois",
    result: "Dec 3-2"
  },
  {
    round: "ConsR2",
    weight: "149",
    bout: 392,
    winner: "Kyle Parco",
    winner_school: "Florida State",
    loser: "Cory Crooks",
    loser_school: "Arizona State",
    result: "Dec 3-2"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 393,
    winner: "Wyatt Sheets",
    winner_school: "Oklahoma State",
    loser: "Cade DeVos",
    loser_school: "South Dakota State",
    result: "Dec 6-3"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 394,
    winner: "Johnny Lovett",
    winner_school: "Central Michigan",
    loser: "Parker Kropman",
    loser_school: "Drexel",
    result: "Dec 3-1"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 395,
    winner: "Jacori Teemer",
    winner_school: "Arizona State",
    loser: "Andrew Cerniglia",
    loser_school: "Navy",
    result: "MD 15-7"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 396,
    winner: "Will Lewan",
    winner_school: "Michigan",
    loser: "Joshua McClure",
    loser_school: "North Carolina",
    result: "Dec 9-2"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 397,
    winner: "Hunter Willits",
    winner_school: "Oregon State",
    loser: "Markus Hartman",
    loser_school: "Army West Point",
    result: "MD 13-2"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 398,
    winner: "Kaleb Young",
    winner_school: "Iowa",
    loser: "Benjamin Barton",
    loser_school: "Campbell",
    result: "Dec 8-2"
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 399,
    winner: "Jarrett Jacques",
    winner_school: "Missouri",
    loser: "Kendall Coleman",
    loser_school: "Purdue",
    result: "M. For."
  },
  {
    round: "ConsR2",
    weight: "157",
    bout: 400,
    winner: "Requir van der Merwe",
    winner_school: "Stanford",
    loser: "Michael Petite",
    loser_school: "Buffalo",
    result: "Dec 8-4"
  },
  {
    round: "ConsR3",
    weight: "125",
    bout: 401,
    winner: "Patrick McKee",
    winner_school: "Minnesota",
    loser: "Robert Howard",
    loser_school: "Penn State",
    result: "Fall 2:04"
  },
  {
    round: "ConsR3",
    weight: "125",
    bout: 402,
    winner: "Eric Barnett",
    winner_school: "Wisconsin",
    loser: "Trevor Mastrogiovanni",
    loser_school: "Oklahoma State",
    result: "Dec 7-3"
  },
  {
    round: "ConsR3",
    weight: "125",
    bout: 403,
    winner: "Michael DeAugustino",
    winner_school: "Northwestern",
    loser: "Jaret Lane",
    loser_school: "Lehigh",
    result: "Dec 2-1"
  },
  {
    round: "ConsR3",
    weight: "125",
    bout: 404,
    winner: "Killian Cardinale",
    winner_school: "West Virginia",
    loser: "RayVon Foley",
    loser_school: "Michigan State",
    result: "Dec 5-1"
  },
  {
    round: "ConsR3",
    weight: "133",
    bout: 405,
    winner: "Lucas Byrd",
    winner_school: "Illinois",
    loser: "Devan Turner",
    loser_school: "Oregon State",
    result: "Dec 3-1"
  },
  {
    round: "ConsR3",
    weight: "133",
    bout: 406,
    winner: "Zach Price",
    winner_school: "South Dakota State",
    loser: "Jared Van Vleet",
    loser_school: "Air Force",
    result: "Dec 8-4"
  },
  {
    round: "ConsR3",
    weight: "133",
    bout: 407,
    winner: "Chance Rich",
    winner_school: "CSU Bakersfield",
    loser: "Jarrett Trombley",
    loser_school: "NC State",
    result: "Dec 5-3"
  },
  {
    round: "ConsR3",
    weight: "133",
    bout: 408,
    winner: "Michael McGee",
    winner_school: "Arizona State",
    loser: "Malyke Hines",
    loser_school: "Lehigh",
    result: "MD 15-7"
  },
  {
    round: "ConsR3",
    weight: "141",
    bout: 409,
    winner: "Clay Carlson",
    winner_school: "South Dakota State",
    loser: "Colin Valdiviez",
    loser_school: "Northwestern",
    result: "MD 9-0"
  },
  {
    round: "ConsR3",
    weight: "141",
    bout: 410,
    winner: "Dylan Duncan",
    winner_school: "Illinois",
    loser: "Grant Willits",
    loser_school: "Oregon State",
    result: "Dec 3-2"
  },
  {
    round: "ConsR3",
    weight: "141",
    bout: 411,
    winner: "Dom Demas",
    winner_school: "Oklahoma",
    loser: "Dylan D`Emilio",
    loser_school: "Ohio State",
    result: "Dec 14-8"
  },
  {
    round: "ConsR3",
    weight: "141",
    bout: 412,
    winner: "Chad Red",
    winner_school: "Nebraska",
    loser: "Parker Filius",
    loser_school: "Purdue",
    result: "MD 11-3"
  },
  {
    round: "ConsR3",
    weight: "149",
    bout: 413,
    winner: "Jaden Abas",
    winner_school: "Stanford",
    loser: "PJ Ogunsanya",
    loser_school: "Army West Point",
    result: "Dec 9-2"
  },
  {
    round: "ConsR3",
    weight: "149",
    bout: 414,
    winner: "Mitch Moore",
    winner_school: "Oklahoma",
    loser: "Kanen Storr",
    loser_school: "Michigan",
    result: "SV-1 3-1"
  },
  {
    round: "ConsR3",
    weight: "149",
    bout: 415,
    winner: "Josh Finesilver",
    winner_school: "Duke",
    loser: "Joshua Heil",
    loser_school: "Campbell",
    result: "Dec 8-5"
  },
  {
    round: "ConsR3",
    weight: "149",
    bout: 416,
    winner: "Kyle Parco",
    winner_school: "Florida State",
    loser: "Legend Lamer",
    loser_school: "Cal Poly",
    result: "Dec 5-2"
  },
  {
    round: "ConsR3",
    weight: "157",
    bout: 417,
    winner: "Wyatt Sheets",
    winner_school: "Oklahoma State",
    loser: "Johnny Lovett",
    loser_school: "Central Michigan",
    result: "Dec 6-4"
  },
  {
    round: "ConsR3",
    weight: "157",
    bout: 418,
    winner: "Jacori Teemer",
    winner_school: "Arizona State",
    loser: "Will Lewan",
    loser_school: "Michigan",
    result: "SV-1 4-2"
  },
  {
    round: "ConsR3",
    weight: "157",
    bout: 419,
    winner: "Kaleb Young",
    winner_school: "Iowa",
    loser: "Hunter Willits",
    loser_school: "Oregon State",
    result: "Dec 5-1"
  },
  {
    round: "ConsR3",
    weight: "157",
    bout: 420,
    winner: "Jarrett Jacques",
    winner_school: "Missouri",
    loser: "Requir van der Merwe",
    loser_school: "Stanford",
    result: "MD 11-3"
  },
  {
    round: "QtrFinals",
    weight: "165",
    bout: 421,
    winner: "Shane Griffith",
    winner_school: "Stanford",
    loser: "Alex Marinelli",
    loser_school: "Iowa",
    result: "SV-1 3-1"
  },
  {
    round: "QtrFinals",
    weight: "165",
    bout: 422,
    winner: "Zach Hartman",
    winner_school: "Bucknell",
    loser: "Mekhi Lewis",
    loser_school: "Virginia Tech",
    result: "M. For."
  },
  {
    round: "QtrFinals",
    weight: "165",
    bout: 423,
    winner: "Jake Wentzel",
    winner_school: "Pittsburgh",
    loser: "Keegan O`Toole",
    loser_school: "Missouri",
    result: "Dec 9-6"
  },
  {
    round: "QtrFinals",
    weight: "165",
    bout: 424,
    winner: "Ethan Smith",
    winner_school: "Ohio State",
    loser: "Anthony Valencia",
    loser_school: "Arizona State",
    result: "MD 13-4"
  },
  {
    round: "QtrFinals",
    weight: "174",
    bout: 425,
    winner: "Michael Kemerer",
    winner_school: "Iowa",
    loser: "Daniel Bullard",
    loser_school: "NC State",
    result: "MD 13-4"
  },
  {
    round: "QtrFinals",
    weight: "174",
    bout: 426,
    winner: "Bernie Truax",
    winner_school: "Cal Poly",
    loser: "Mikey Labriola",
    loser_school: "Nebraska",
    result: "Dec 4-2"
  },
  {
    round: "QtrFinals",
    weight: "174",
    bout: 427,
    winner: "Carter Starocci",
    winner_school: "Penn State",
    loser: "Andrew McNally",
    loser_school: "Kent State",
    result: "Dec 6-3"
  },
  {
    round: "QtrFinals",
    weight: "174",
    bout: 428,
    winner: "Demetrius Romero",
    winner_school: "Utah Valley",
    loser: "Kaleb Romero",
    loser_school: "Ohio State",
    result: "Dec 6-0"
  },
  {
    round: "QtrFinals",
    weight: "184",
    bout: 429,
    winner: "Aaron Brooks",
    winner_school: "Penn State",
    loser: "Taylor Venz",
    loser_school: "Nebraska",
    result: "Dec 9-4"
  },
  {
    round: "QtrFinals",
    weight: "184",
    bout: 430,
    winner: "Parker Keckeisen",
    winner_school: "Northern Iowa",
    loser: "Hunter Bolen",
    loser_school: "Virginia Tech",
    result: "SV-2 4-2"
  },
  {
    round: "QtrFinals",
    weight: "184",
    bout: 431,
    winner: "John Poznanski",
    winner_school: "Rutgers",
    loser: "Lou Deprez",
    loser_school: "Binghamton",
    result: "Dec 8-4"
  },
  {
    round: "QtrFinals",
    weight: "184",
    bout: 432,
    winner: "Trent Hidlay",
    winner_school: "NC State",
    loser: "Brit Wilson",
    loser_school: "Northern Illinois",
    result: "Dec 3-1"
  },
  {
    round: "QtrFinals",
    weight: "197",
    bout: 433,
    winner: "Myles Amine",
    winner_school: "Michigan",
    loser: "Stephen Buchanan",
    loser_school: "Wyoming",
    result: "Dec 7-6"
  },
  {
    round: "QtrFinals",
    weight: "197",
    bout: 434,
    winner: "AJ Ferrari",
    winner_school: "Oklahoma State",
    loser: "Jacob Warner",
    loser_school: "Iowa",
    result: "Dec 3-2"
  },
  {
    round: "QtrFinals",
    weight: "197",
    bout: 435,
    winner: "Nino Bonaccorsi",
    winner_school: "Pittsburgh",
    loser: "Kordell Norfleet",
    loser_school: "Arizona State",
    result: "Dec 4-1"
  },
  {
    round: "QtrFinals",
    weight: "197",
    bout: 436,
    winner: "Jake Woodley",
    winner_school: "Oklahoma",
    loser: "Michael Beard",
    loser_school: "Penn State",
    result: "Dec 8-3"
  },
  {
    round: "QtrFinals",
    weight: "285",
    bout: 437,
    winner: "Gable Steveson",
    winner_school: "Minnesota",
    loser: "Greg Kerkvliet",
    loser_school: "Penn State",
    result: "Dec 9-4"
  },
  {
    round: "QtrFinals",
    weight: "285",
    bout: 438,
    winner: "Tony Cassioppi",
    winner_school: "Iowa",
    loser: "Cohlton Schultz",
    loser_school: "Arizona State",
    result: "Dec 4-1"
  },
  {
    round: "QtrFinals",
    weight: "285",
    bout: 439,
    winner: "Gannon Gremmel",
    winner_school: "Iowa State",
    loser: "Trent Hillger",
    loser_school: "Wisconsin",
    result: "TB-1 2-1"
  },
  {
    round: "QtrFinals",
    weight: "285",
    bout: 440,
    winner: "Mason Parris",
    winner_school: "Michigan",
    loser: "Ethan Laird",
    loser_school: "Rider",
    result: "MD 14-4"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 441,
    winner: "Izzak Olejnik",
    winner_school: "Northern Illinois",
    loser: "Austin Yant",
    loser_school: "Northern Iowa",
    result: "SV-1 8-6"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 442,
    winner: "Travis Wittlake",
    winner_school: "Oklahoma State",
    loser: "Jake Tucker",
    loser_school: "Michigan State",
    result: "MD 10-2"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 443,
    winner: "Cameron Amine",
    winner_school: "Michigan",
    loser: "Rodrick Mosley",
    loser_school: "George Washington",
    result: "Dec 4-2"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 444,
    winner: "Peyton Robb",
    winner_school: "Nebraska",
    loser: "Cole Moody",
    loser_school: "Wyoming",
    result: "MD 15-7"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 445,
    winner: "Gerrit Nijenhuis",
    winner_school: "Purdue",
    loser: "Tanner Skidgel",
    loser_school: "Navy",
    result: "Dec 7-4"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 446,
    winner: "Peyton Hall",
    winner_school: "West Virginia",
    loser: "Kennedy Monday",
    loser_school: "North Carolina",
    result: "Dec 10-5"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 447,
    winner: "Luke Weber",
    winner_school: "North Dakota State",
    loser: "Andrew Nicholson",
    loser_school: "Chattanooga",
    result: "Dec 7-0"
  },
  {
    round: "ConsR2",
    weight: "165",
    bout: 448,
    winner: "Thomas Bullard",
    winner_school: "NC State",
    loser: "David Ferrante",
    loser_school: "Northwestern",
    result: "MD 9-1"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 449,
    winner: "Clay Lautt",
    winner_school: "North Carolina",
    loser: "Dustin Plott",
    loser_school: "Oklahoma State",
    result: "Dec 6-2"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 450,
    winner: "Peyton Mocco",
    winner_school: "Missouri",
    loser: "Jake Allar",
    loser_school: "Minnesota",
    result: "Fall 6:25"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 451,
    winner: "Austin Murphy",
    winner_school: "Campbell",
    loser: "Jacob Oliver",
    loser_school: "Edinboro",
    result: "Fall 6:40"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 452,
    winner: "Hayden Hastings",
    winner_school: "Wyoming",
    loser: "Jackson Hemauer",
    loser_school: "Northern Colorado",
    result: "Dec 8-1"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 453,
    winner: "Michael O`Malley",
    winner_school: "Drexel",
    loser: "Trenton Munoz",
    loser_school: "Arizona State",
    result: "Fall 1:36"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 454,
    winner: "Logan Massa",
    winner_school: "Michigan",
    loser: "Mason Kauffman",
    loser_school: "Northern Illinois",
    result: "MD 14-2"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 455,
    winner: "Jackson Turley",
    winner_school: "Rutgers",
    loser: "Donnell Washington",
    loser_school: "Indiana",
    result: "TF-1.5 3:24 (16-1)"
  },
  {
    round: "ConsR2",
    weight: "174",
    bout: 456,
    winner: "Benjamin Pasiuk",
    winner_school: "Army West Point",
    loser: "Jake Logan",
    loser_school: "Lehigh",
    result: "Dec 6-5"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 457,
    winner: "Max Lyon",
    winner_school: "Purdue",
    loser: "Alan Clothier",
    loser_school: "Northern Colorado",
    result: "MD 10-1"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 458,
    winner: "Rocky Jordan",
    winner_school: "Ohio State",
    loser: "Charles Small",
    loser_school: "Hofstra",
    result: "TF-1.5 2:49 (16-0)"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 459,
    winner: "Dakota Geer",
    winner_school: "Oklahoma State",
    loser: "Dominic Ducharme",
    loser_school: "CSU Bakersfield",
    result: "TF-1.5 6:02 (18-0)"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 460,
    winner: "Samuel Colbray",
    winner_school: "Iowa State",
    loser: "Caleb Hopkins",
    loser_school: "Campbell",
    result: "Dec 7-3"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 461,
    winner: "David Key",
    winner_school: "Navy",
    loser: "Zach Braunagel",
    loser_school: "Illinois",
    result: "Dec 10-3"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 462,
    winner: "Devin Kane",
    winner_school: "North Carolina",
    loser: "Nelson Brands",
    loser_school: "Iowa",
    result: "MD 15-4"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 463,
    winner: "Jeremiah Kent",
    winner_school: "Missouri",
    loser: "Tate Samuelson",
    loser_school: "Wyoming",
    result: "Dec 6-1"
  },
  {
    round: "ConsR2",
    weight: "184",
    bout: 464,
    winner: "Owen Webster",
    winner_school: "Minnesota",
    loser: "Ryan Reyes",
    loser_school: "Oregon State",
    result: "Dec 4-1"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 465,
    winner: "Owen Pentz",
    winner_school: "North Dakota State",
    loser: "JT Brown",
    loser_school: "Army West Point",
    result: "MD 11-1"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 466,
    winner: "Cameron Caffey",
    winner_school: "Michigan State",
    loser: "Benjamin Smith",
    loser_school: "CSU",
    result: "Fall 5:00"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 467,
    winner: "Marcus Coleman",
    winner_school: "Iowa State",
    loser: "Jay Aiello",
    loser_school: "Virginia",
    result: "Fall 5:38"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 468,
    winner: "Thomas Penola",
    winner_school: "Purdue",
    loser: "Max Shaw",
    loser_school: "North Carolina",
    result: "Dec 6-1"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 469,
    winner: "Tanner Sloan",
    winner_school: "South Dakota State",
    loser: "Greg Bulsak",
    loser_school: "Clarion",
    result: "Dec 6-3"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 470,
    winner: "Lucas Davison",
    winner_school: "Northwestern",
    loser: "Chris Kober",
    loser_school: "Campbell",
    result: "Dec 9-3"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 471,
    winner: "Rocky Elam",
    winner_school: "Missouri",
    loser: "Noah Adams",
    loser_school: "West Virginia",
    result: "Dec 4-3"
  },
  {
    round: "ConsR2",
    weight: "197",
    bout: 472,
    winner: "Eric Schultz",
    winner_school: "Nebraska",
    loser: "Jake Jakobsen",
    loser_school: "Lehigh",
    result: "MD 10-2"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 473,
    winner: "Carter Isley",
    winner_school: "Northern Iowa",
    loser: "Luke Luffman",
    loser_school: "Illinois",
    result: "Dec 7-5"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 474,
    winner: "Nathan Traxler",
    winner_school: "Stanford",
    loser: "Deonte Wilson",
    loser_school: "NC State",
    result: "Fall 1:18"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 475,
    winner: "Zach Elam",
    winner_school: "Missouri",
    loser: "Christian Lance",
    loser_school: "Nebraska",
    result: "SV-1 3-1"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 476,
    winner: "Austin Harris",
    winner_school: "Oklahoma State",
    loser: "Matt Stencel",
    loser_school: "Central Michigan",
    result: "Dec 7-4"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 477,
    winner: "Brian Andrews",
    winner_school: "Wyoming",
    loser: "Josh Heindselman",
    loser_school: "Oklahoma",
    result: "SV-1 3-1"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 478,
    winner: "Tate Orndorff",
    winner_school: "Ohio State",
    loser: "Zachary Knighton-Ward",
    loser_school: "Hofstra",
    result: "MD 11-3"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 479,
    winner: "Jordan Wood",
    winner_school: "Lehigh",
    loser: "Sam Schuyler",
    loser_school: "Buffalo",
    result: "Dec 6-0"
  },
  {
    round: "ConsR2",
    weight: "285",
    bout: 480,
    winner: "Wyatt Hendrickson",
    winner_school: "Air Force",
    loser: "Hunter Catka",
    loser_school: "Virginia Tech",
    result: "MD 14-6"
  },
  {
    round: "ConsR3",
    weight: "165",
    bout: 481,
    winner: "Travis Wittlake",
    winner_school: "Oklahoma State",
    loser: "Izzak Olejnik",
    loser_school: "Northern Illinois",
    result: "Dec 7-3"
  },
  {
    round: "ConsR3",
    weight: "165",
    bout: 482,
    winner: "Cameron Amine",
    winner_school: "Michigan",
    loser: "Peyton Robb",
    loser_school: "Nebraska",
    result: "Dec 6-4"
  },
  {
    round: "ConsR3",
    weight: "165",
    bout: 483,
    winner: "Peyton Hall",
    winner_school: "West Virginia",
    loser: "Gerrit Nijenhuis",
    loser_school: "Purdue",
    result: "SV-1 3-1"
  },
  {
    round: "ConsR3",
    weight: "165",
    bout: 484,
    winner: "Luke Weber",
    winner_school: "North Dakota State",
    loser: "Thomas Bullard",
    loser_school: "NC State",
    result: "Dec 2-1"
  },
  {
    round: "ConsR3",
    weight: "174",
    bout: 485,
    winner: "Clay Lautt",
    winner_school: "North Carolina",
    loser: "Peyton Mocco",
    loser_school: "Missouri",
    result: "Fall 0:37"
  },
  {
    round: "ConsR3",
    weight: "174",
    bout: 486,
    winner: "Austin Murphy",
    winner_school: "Campbell",
    loser: "Hayden Hastings",
    loser_school: "Wyoming",
    result: "Dec 3-1"
  },
  {
    round: "ConsR3",
    weight: "174",
    bout: 487,
    winner: "Logan Massa",
    winner_school: "Michigan",
    loser: "Michael O`Malley",
    loser_school: "Drexel",
    result: "Dec 6-1"
  },
  {
    round: "ConsR3",
    weight: "174",
    bout: 488,
    winner: "Jackson Turley",
    winner_school: "Rutgers",
    loser: "Benjamin Pasiuk",
    loser_school: "Army West Point",
    result: "Fall 2:10"
  },
  {
    round: "ConsR3",
    weight: "184",
    bout: 489,
    winner: "Rocky Jordan",
    winner_school: "Ohio State",
    loser: "Max Lyon",
    loser_school: "Purdue",
    result: "Dec 2-0"
  },
  {
    round: "ConsR3",
    weight: "184",
    bout: 490,
    winner: "Dakota Geer",
    winner_school: "Oklahoma State",
    loser: "Samuel Colbray",
    loser_school: "Iowa State",
    result: "Dec 9-4"
  },
  {
    round: "ConsR3",
    weight: "184",
    bout: 491,
    winner: "Devin Kane",
    winner_school: "North Carolina",
    loser: "David Key",
    loser_school: "Navy",
    result: "Dec 11-10"
  },
  {
    round: "ConsR3",
    weight: "184",
    bout: 492,
    winner: "Owen Webster",
    winner_school: "Minnesota",
    loser: "Jeremiah Kent",
    loser_school: "Missouri",
    result: "Fall 2:32"
  },
  {
    round: "ConsR3",
    weight: "197",
    bout: 493,
    winner: "Cameron Caffey",
    winner_school: "Michigan State",
    loser: "Owen Pentz",
    loser_school: "North Dakota State",
    result: "Fall 2:40"
  },
  {
    round: "ConsR3",
    weight: "197",
    bout: 494,
    winner: "Thomas Penola",
    winner_school: "Purdue",
    loser: "Marcus Coleman",
    loser_school: "Iowa State",
    result: "Dec 3-2"
  },
  {
    round: "ConsR3",
    weight: "197",
    bout: 495,
    winner: "Tanner Sloan",
    winner_school: "South Dakota State",
    loser: "Lucas Davison",
    loser_school: "Northwestern",
    result: "Dec 8-2"
  },
  {
    round: "ConsR3",
    weight: "197",
    bout: 496,
    winner: "Rocky Elam",
    winner_school: "Missouri",
    loser: "Eric Schultz",
    loser_school: "Nebraska",
    result: "MD 12-3"
  },
  {
    round: "ConsR3",
    weight: "285",
    bout: 497,
    winner: "Nathan Traxler",
    winner_school: "Stanford",
    loser: "Carter Isley",
    loser_school: "Northern Iowa",
    result: "MD 10-0"
  },
  {
    round: "ConsR3",
    weight: "285",
    bout: 498,
    winner: "Austin Harris",
    winner_school: "Oklahoma State",
    loser: "Zach Elam",
    loser_school: "Missouri",
    result: "Fall 3:58"
  },
  {
    round: "ConsR3",
    weight: "285",
    bout: 499,
    winner: "Tate Orndorff",
    winner_school: "Ohio State",
    loser: "Brian Andrews",
    loser_school: "Wyoming",
    result: "TB-1 2-1"
  },
  {
    round: "ConsR3",
    weight: "285",
    bout: 500,
    winner: "Wyatt Hendrickson",
    winner_school: "Air Force",
    loser: "Jordan Wood",
    loser_school: "Lehigh",
    result: "Dec 7-6"
  },
  {
    round: "SemiFinals",
    weight: "125",
    bout: 501,
    winner: "Spencer Lee",
    winner_school: "Iowa",
    loser: "Drew Hildebrandt",
    loser_school: "Central Michigan",
    result: "MD 11-0"
  },
  {
    round: "SemiFinals",
    weight: "125",
    bout: 502,
    winner: "Brandon Courtney",
    winner_school: "Arizona State",
    loser: "Taylor LaMont",
    loser_school: "Utah Valley",
    result: "TB-1 2-1"
  },
  {
    round: "SemiFinals",
    weight: "133",
    bout: 503,
    winner: "Daton Fix",
    winner_school: "Oklahoma State",
    loser: "Austin DeSanto",
    loser_school: "Iowa",
    result: "Dec 3-2"
  },
  {
    round: "SemiFinals",
    weight: "133",
    bout: 504,
    winner: "Roman Bravo-Young",
    winner_school: "Penn State",
    loser: "Korbin Myers",
    loser_school: "Virginia Tech",
    result: "Dec 5-3"
  },
  {
    round: "SemiFinals",
    weight: "141",
    bout: 505,
    winner: "Jaydin Eierman",
    winner_school: "Iowa",
    loser: "Tariq Wilson",
    loser_school: "NC State",
    result: "Fall 2:59"
  },
  {
    round: "SemiFinals",
    weight: "141",
    bout: 506,
    winner: "Nick Lee",
    winner_school: "Penn State",
    loser: "Sebastian Rivera",
    loser_school: "Rutgers",
    result: "Dec 9-3"
  },
  {
    round: "SemiFinals",
    weight: "149",
    bout: 507,
    winner: "Sammy Sasso",
    winner_school: "Ohio State",
    loser: "Boo Lewallen",
    loser_school: "Oklahoma State",
    result: "Fall 4:01"
  },
  {
    round: "SemiFinals",
    weight: "149",
    bout: 508,
    winner: "Austin O`Connor",
    winner_school: "North Carolina",
    loser: "Brock Mauller",
    loser_school: "Missouri",
    result: "TB-1 2-1"
  },
  {
    round: "SemiFinals",
    weight: "157",
    bout: 509,
    winner: "Jesse Dellavecchia",
    winner_school: "Rider",
    loser: "Ryan Deakin",
    loser_school: "Northwestern",
    result: "Fall 3:18"
  },
  {
    round: "SemiFinals",
    weight: "157",
    bout: 510,
    winner: "David Carr",
    winner_school: "Iowa State",
    loser: "Hayden Hidlay",
    loser_school: "NC State",
    result: "Dec 6-4"
  },
  {
    round: "SemiFinals",
    weight: "165",
    bout: 511,
    winner: "Shane Griffith",
    winner_school: "Stanford",
    loser: "Zach Hartman",
    loser_school: "Bucknell",
    result: "Dec 9-2"
  },
  {
    round: "SemiFinals",
    weight: "165",
    bout: 512,
    winner: "Jake Wentzel",
    winner_school: "Pittsburgh",
    loser: "Ethan Smith",
    loser_school: "Ohio State",
    result: "Dec 4-2"
  },
  {
    round: "SemiFinals",
    weight: "174",
    bout: 513,
    winner: "Michael Kemerer",
    winner_school: "Iowa",
    loser: "Bernie Truax",
    loser_school: "Cal Poly",
    result: "Dec 8-1"
  },
  {
    round: "SemiFinals",
    weight: "174",
    bout: 514,
    winner: "Carter Starocci",
    winner_school: "Penn State",
    loser: "Demetrius Romero",
    loser_school: "Utah Valley",
    result: "Dec 2-0"
  },
  {
    round: "SemiFinals",
    weight: "184",
    bout: 515,
    winner: "Aaron Brooks",
    winner_school: "Penn State",
    loser: "Parker Keckeisen",
    loser_school: "Northern Iowa",
    result: "Dec 6-4"
  },
  {
    round: "SemiFinals",
    weight: "184",
    bout: 516,
    winner: "Trent Hidlay",
    winner_school: "NC State",
    loser: "John Poznanski",
    loser_school: "Rutgers",
    result: "TB-1 2-1"
  },
  {
    round: "SemiFinals",
    weight: "197",
    bout: 517,
    winner: "AJ Ferrari",
    winner_school: "Oklahoma State",
    loser: "Myles Amine",
    loser_school: "Michigan",
    result: "Dec 5-1"
  },
  {
    round: "SemiFinals",
    weight: "197",
    bout: 518,
    winner: "Nino Bonaccorsi",
    winner_school: "Pittsburgh",
    loser: "Jake Woodley",
    loser_school: "Oklahoma",
    result: "Dec 4-1"
  },
  {
    round: "SemiFinals",
    weight: "285",
    bout: 519,
    winner: "Gable Steveson",
    winner_school: "Minnesota",
    loser: "Tony Cassioppi",
    loser_school: "Iowa",
    result: "MD 16-6"
  },
  {
    round: "SemiFinals",
    weight: "285",
    bout: 520,
    winner: "Mason Parris",
    winner_school: "Michigan",
    loser: "Gannon Gremmel",
    loser_school: "Iowa State",
    result: "Fall 4:02"
  },
  {
    round: "ConsR4",
    weight: "125",
    bout: 521,
    winner: "Patrick McKee",
    winner_school: "Minnesota",
    loser: "Brody Teske",
    loser_school: "Northern Iowa",
    result: "Dec 9-2"
  },
  {
    round: "ConsR4",
    weight: "125",
    bout: 522,
    winner: "Eric Barnett",
    winner_school: "Wisconsin",
    loser: "Devin Schroder",
    loser_school: "Purdue",
    result: "Dec 5-4"
  },
  {
    round: "ConsR4",
    weight: "125",
    bout: 523,
    winner: "Sam Latona",
    winner_school: "Virginia Tech",
    loser: "Michael DeAugustino",
    loser_school: "Northwestern",
    result: "SV-1 9-7"
  },
  {
    round: "ConsR4",
    weight: "125",
    bout: 524,
    winner: "Killian Cardinale",
    winner_school: "West Virginia",
    loser: "Jakob Camacho",
    loser_school: "NC State",
    result: "TB-2 6-5"
  },
  {
    round: "ConsR4",
    weight: "133",
    bout: 525,
    winner: "Lucas Byrd",
    winner_school: "Illinois",
    loser: "Micky Phillippi",
    loser_school: "Pittsburgh",
    result: "TB-1 6-2"
  },
  {
    round: "ConsR4",
    weight: "133",
    bout: 526,
    winner: "Chris Cannon",
    winner_school: "Northwestern",
    loser: "Zach Price",
    loser_school: "South Dakota State",
    result: "Dec 9-4"
  },
  {
    round: "ConsR4",
    weight: "133",
    bout: 527,
    winner: "Louie Hayes",
    winner_school: "Virginia",
    loser: "Chance Rich",
    loser_school: "CSU Bakersfield",
    result: "Fall 2:10"
  },
  {
    round: "ConsR4",
    weight: "133",
    bout: 528,
    winner: "Michael McGee",
    winner_school: "Arizona State",
    loser: "Matt Schmitt",
    loser_school: "Missouri",
    result: "Dec 10-6"
  },
  {
    round: "ConsR4",
    weight: "141",
    bout: 529,
    winner: "Clay Carlson",
    winner_school: "South Dakota State",
    loser: "Real Woods",
    loser_school: "Stanford",
    result: "Dec 11-4"
  },
  {
    round: "ConsR4",
    weight: "141",
    bout: 530,
    winner: "Dylan Duncan",
    winner_school: "Illinois",
    loser: "Dresden Simon",
    loser_school: "Central Michigan",
    result: "Dec 8-6"
  },
  {
    round: "ConsR4",
    weight: "141",
    bout: 531,
    winner: "Zachary Sherman",
    winner_school: "North Carolina",
    loser: "Dom Demas",
    loser_school: "Oklahoma",
    result: "TB-1 2-1"
  },
  {
    round: "ConsR4",
    weight: "141",
    bout: 532,
    winner: "Chad Red",
    winner_school: "Nebraska",
    loser: "Allan Hart",
    loser_school: "Missouri",
    result: "Dec 8-7"
  },
  {
    round: "ConsR4",
    weight: "149",
    bout: 533,
    winner: "Jaden Abas",
    winner_school: "Stanford",
    loser: "Max Murin",
    loser_school: "Iowa",
    result: "TB-1 2-1"
  },
  {
    round: "ConsR4",
    weight: "149",
    bout: 534,
    winner: "Yahya Thomas",
    winner_school: "Northwestern",
    loser: "Mitch Moore",
    loser_school: "Oklahoma",
    result: "Dec 3-1"
  },
  {
    round: "ConsR4",
    weight: "149",
    bout: 535,
    winner: "Jonathan Millner",
    winner_school: "Appalachian State",
    loser: "Josh Finesilver",
    loser_school: "Duke",
    result: "Dec 10-7"
  },
  {
    round: "ConsR4",
    weight: "149",
    bout: 536,
    winner: "Kyle Parco",
    winner_school: "Florida State",
    loser: "Bryce Andonian",
    loser_school: "Virginia Tech",
    result: "Dec 7-4"
  },
  {
    round: "ConsR4",
    weight: "157",
    bout: 537,
    winner: "Wyatt Sheets",
    winner_school: "Oklahoma State",
    loser: "Brady Berge",
    loser_school: "Penn State",
    result: "M. For."
  },
  {
    round: "ConsR4",
    weight: "157",
    bout: 538,
    winner: "Jacori Teemer",
    winner_school: "Arizona State",
    loser: "Jared Franek",
    loser_school: "North Dakota State",
    result: "Dec 3-2"
  },
  {
    round: "ConsR4",
    weight: "157",
    bout: 539,
    winner: "Kaleb Young",
    winner_school: "Iowa",
    loser: "Jacob Wright",
    loser_school: "Wyoming",
    result: "MD 10-2"
  },
  {
    round: "ConsR4",
    weight: "157",
    bout: 540,
    winner: "Brayton Lee",
    winner_school: "Minnesota",
    loser: "Jarrett Jacques",
    loser_school: "Missouri",
    result: "Dec 4-1"
  },
  {
    round: "ConsR4",
    weight: "165",
    bout: 541,
    winner: "Travis Wittlake",
    winner_school: "Oklahoma State",
    loser: "Mekhi Lewis",
    loser_school: "Virginia Tech",
    result: "M. For."
  },
  {
    round: "ConsR4",
    weight: "165",
    bout: 542,
    winner: "Cameron Amine",
    winner_school: "Michigan",
    loser: "Alex Marinelli",
    loser_school: "Iowa",
    result: "M. For."
  },
  {
    round: "ConsR4",
    weight: "165",
    bout: 543,
    winner: "Anthony Valencia",
    winner_school: "Arizona State",
    loser: "Peyton Hall",
    loser_school: "West Virginia",
    result: "MD 13-4"
  },
  {
    round: "ConsR4",
    weight: "165",
    bout: 544,
    winner: "Keegan O`Toole",
    winner_school: "Missouri",
    loser: "Luke Weber",
    loser_school: "North Dakota State",
    result: "Dec 5-1"
  },
  {
    round: "ConsR4",
    weight: "174",
    bout: 545,
    winner: "Mikey Labriola",
    winner_school: "Nebraska",
    loser: "Clay Lautt",
    loser_school: "North Carolina",
    result: "Dec 8-4"
  },
  {
    round: "ConsR4",
    weight: "174",
    bout: 546,
    winner: "Daniel Bullard",
    winner_school: "NC State",
    loser: "Austin Murphy",
    loser_school: "Campbell",
    result: "Dec 7-0"
  },
  {
    round: "ConsR4",
    weight: "174",
    bout: 547,
    winner: "Logan Massa",
    winner_school: "Michigan",
    loser: "Kaleb Romero",
    loser_school: "Ohio State",
    result: "Dec 6-1"
  },
  {
    round: "ConsR4",
    weight: "174",
    bout: 548,
    winner: "Jackson Turley",
    winner_school: "Rutgers",
    loser: "Andrew McNally",
    loser_school: "Kent State",
    result: "Dec 7-5"
  },
  {
    round: "ConsR4",
    weight: "184",
    bout: 549,
    winner: "Hunter Bolen",
    winner_school: "Virginia Tech",
    loser: "Rocky Jordan",
    loser_school: "Ohio State",
    result: "Dec 7-3"
  },
  {
    round: "ConsR4",
    weight: "184",
    bout: 550,
    winner: "Dakota Geer",
    winner_school: "Oklahoma State",
    loser: "Taylor Venz",
    loser_school: "Nebraska",
    result: "Dec 8-2"
  },
  {
    round: "ConsR4",
    weight: "184",
    bout: 551,
    winner: "Brit Wilson",
    winner_school: "Northern Illinois",
    loser: "Devin Kane",
    loser_school: "North Carolina",
    result: "Fall 2:58"
  },
  {
    round: "ConsR4",
    weight: "184",
    bout: 552,
    winner: "Lou Deprez",
    winner_school: "Binghamton",
    loser: "Owen Webster",
    loser_school: "Minnesota",
    result: "Dec 6-1"
  },
  {
    round: "ConsR4",
    weight: "197",
    bout: 553,
    winner: "Jacob Warner",
    winner_school: "Iowa",
    loser: "Cameron Caffey",
    loser_school: "Michigan State",
    result: "Dec 4-1"
  },
  {
    round: "ConsR4",
    weight: "197",
    bout: 554,
    winner: "Stephen Buchanan",
    winner_school: "Wyoming",
    loser: "Thomas Penola",
    loser_school: "Purdue",
    result: "Dec 6-2"
  },
  {
    round: "ConsR4",
    weight: "197",
    bout: 555,
    winner: "Michael Beard",
    winner_school: "Penn State",
    loser: "Tanner Sloan",
    loser_school: "South Dakota State",
    result: "MD 9-1"
  },
  {
    round: "ConsR4",
    weight: "197",
    bout: 556,
    winner: "Rocky Elam",
    winner_school: "Missouri",
    loser: "Kordell Norfleet",
    loser_school: "Arizona State",
    result: "MD 9-1"
  },
  {
    round: "ConsR4",
    weight: "285",
    bout: 557,
    winner: "Cohlton Schultz",
    winner_school: "Arizona State",
    loser: "Nathan Traxler",
    loser_school: "Stanford",
    result: "Fall 0:44"
  },
  {
    round: "ConsR4",
    weight: "285",
    bout: 558,
    winner: "Greg Kerkvliet",
    winner_school: "Penn State",
    loser: "Austin Harris",
    loser_school: "Oklahoma State",
    result: "MD 13-5"
  },
  {
    round: "ConsR4",
    weight: "285",
    bout: 559,
    winner: "Tate Orndorff",
    winner_school: "Ohio State",
    loser: "Ethan Laird",
    loser_school: "Rider",
    result: "Dec 7-2"
  },
  {
    round: "ConsR4",
    weight: "285",
    bout: 560,
    winner: "Trent Hillger",
    winner_school: "Wisconsin",
    loser: "Wyatt Hendrickson",
    loser_school: "Air Force",
    result: "Dec 6-3"
  },
  {
    round: "ConsQtr",
    weight: "125",
    bout: 561,
    winner: "Patrick McKee",
    winner_school: "Minnesota",
    loser: "Eric Barnett",
    loser_school: "Wisconsin",
    result: "Fall 6:06"
  },
  {
    round: "ConsQtr",
    weight: "125",
    bout: 562,
    winner: "Sam Latona",
    winner_school: "Virginia Tech",
    loser: "Killian Cardinale",
    loser_school: "West Virginia",
    result: "Dec 4-3"
  },
  {
    round: "ConsQtr",
    weight: "133",
    bout: 563,
    winner: "Lucas Byrd",
    winner_school: "Illinois",
    loser: "Chris Cannon",
    loser_school: "Northwestern",
    result: "Dec 4-1"
  },
  {
    round: "ConsQtr",
    weight: "133",
    bout: 564,
    winner: "Michael McGee",
    winner_school: "Arizona State",
    loser: "Louie Hayes",
    loser_school: "Virginia",
    result: "Dec 8-4"
  },
  {
    round: "ConsQtr",
    weight: "141",
    bout: 565,
    winner: "Dylan Duncan",
    winner_school: "Illinois",
    loser: "Clay Carlson",
    loser_school: "South Dakota State",
    result: "Dec 3-2"
  },
  {
    round: "ConsQtr",
    weight: "141",
    bout: 566,
    winner: "Chad Red",
    winner_school: "Nebraska",
    loser: "Zachary Sherman",
    loser_school: "North Carolina",
    result: "TB-1 5-4"
  },
  {
    round: "ConsQtr",
    weight: "149",
    bout: 567,
    winner: "Yahya Thomas",
    winner_school: "Northwestern",
    loser: "Jaden Abas",
    loser_school: "Stanford",
    result: "Dec 7-1"
  },
  {
    round: "ConsQtr",
    weight: "149",
    bout: 568,
    winner: "Kyle Parco",
    winner_school: "Florida State",
    loser: "Jonathan Millner",
    loser_school: "Appalachian State",
    result: "Dec 9-5"
  },
  {
    round: "ConsQtr",
    weight: "157",
    bout: 569,
    winner: "Jacori Teemer",
    winner_school: "Arizona State",
    loser: "Wyatt Sheets",
    loser_school: "Oklahoma State",
    result: "MD 13-4"
  },
  {
    round: "ConsQtr",
    weight: "157",
    bout: 570,
    winner: "Brayton Lee",
    winner_school: "Minnesota",
    loser: "Kaleb Young",
    loser_school: "Iowa",
    result: "Dec 3-2"
  },
  {
    round: "ConsQtr",
    weight: "165",
    bout: 571,
    winner: "Travis Wittlake",
    winner_school: "Oklahoma State",
    loser: "Cameron Amine",
    loser_school: "Michigan",
    result: "Dec 4-1"
  },
  {
    round: "ConsQtr",
    weight: "165",
    bout: 572,
    winner: "Keegan O`Toole",
    winner_school: "Missouri",
    loser: "Anthony Valencia",
    loser_school: "Arizona State",
    result: "TF-1.5 7:00 (16-1)"
  },
  {
    round: "ConsQtr",
    weight: "174",
    bout: 573,
    winner: "Mikey Labriola",
    winner_school: "Nebraska",
    loser: "Daniel Bullard",
    loser_school: "NC State",
    result: "Dec 7-4"
  },
  {
    round: "ConsQtr",
    weight: "174",
    bout: 574,
    winner: "Logan Massa",
    winner_school: "Michigan",
    loser: "Jackson Turley",
    loser_school: "Rutgers",
    result: "Inj. 5:31"
  },
  {
    round: "ConsQtr",
    weight: "184",
    bout: 575,
    winner: "Dakota Geer",
    winner_school: "Oklahoma State",
    loser: "Hunter Bolen",
    loser_school: "Virginia Tech",
    result: "Dec 7-5"
  },
  {
    round: "ConsQtr",
    weight: "184",
    bout: 576,
    winner: "Brit Wilson",
    winner_school: "Northern Illinois",
    loser: "Lou Deprez",
    loser_school: "Binghamton",
    result: "Dec 7-1"
  },
  {
    round: "ConsQtr",
    weight: "197",
    bout: 577,
    winner: "Jacob Warner",
    winner_school: "Iowa",
    loser: "Stephen Buchanan",
    loser_school: "Wyoming",
    result: "Dec 6-3"
  },
  {
    round: "ConsQtr",
    weight: "197",
    bout: 578,
    winner: "Rocky Elam",
    winner_school: "Missouri",
    loser: "Michael Beard",
    loser_school: "Penn State",
    result: "Dec 5-0"
  },
  {
    round: "ConsQtr",
    weight: "285",
    bout: 579,
    winner: "Cohlton Schultz",
    winner_school: "Arizona State",
    loser: "Greg Kerkvliet",
    loser_school: "Penn State",
    result: "Dec 14-8"
  },
  {
    round: "ConsQtr",
    weight: "285",
    bout: 580,
    winner: "Trent Hillger",
    winner_school: "Wisconsin",
    loser: "Tate Orndorff",
    loser_school: "Ohio State",
    result: "Dec 3-1"
  },
  {
    round: "ConsSemi",
    weight: "125",
    bout: 581,
    winner: "Patrick McKee",
    winner_school: "Minnesota",
    loser: "Taylor LaMont",
    loser_school: "Utah Valley",
    result: "Dec 8-3"
  },
  {
    round: "ConsSemi",
    weight: "125",
    bout: 582,
    winner: "Drew Hildebrandt",
    winner_school: "Central Michigan",
    loser: "Sam Latona",
    loser_school: "Virginia Tech",
    result: "Dec 5-4"
  },
  {
    round: "ConsSemi",
    weight: "133",
    bout: 583,
    winner: "Korbin Myers",
    winner_school: "Virginia Tech",
    loser: "Lucas Byrd",
    loser_school: "Illinois",
    result: "Dec 8-5"
  },
  {
    round: "ConsSemi",
    weight: "133",
    bout: 584,
    winner: "Austin DeSanto",
    winner_school: "Iowa",
    loser: "Michael McGee",
    loser_school: "Arizona State",
    result: "TF-1.5 7:00 (19-4)"
  },
  {
    round: "ConsSemi",
    weight: "141",
    bout: 585,
    winner: "Sebastian Rivera",
    winner_school: "Rutgers",
    loser: "Dylan Duncan",
    loser_school: "Illinois",
    result: "Dec 7-4"
  },
  {
    round: "ConsSemi",
    weight: "141",
    bout: 586,
    winner: "Tariq Wilson",
    winner_school: "NC State",
    loser: "Chad Red",
    loser_school: "Nebraska",
    result: "MD 12-1"
  },
  {
    round: "ConsSemi",
    weight: "149",
    bout: 587,
    winner: "Yahya Thomas",
    winner_school: "Northwestern",
    loser: "Brock Mauller",
    loser_school: "Missouri",
    result: "Dec 7-4"
  },
  {
    round: "ConsSemi",
    weight: "149",
    bout: 588,
    winner: "Boo Lewallen",
    winner_school: "Oklahoma State",
    loser: "Kyle Parco",
    loser_school: "Florida State",
    result: "MD 8-0"
  },
  {
    round: "ConsSemi",
    weight: "157",
    bout: 589,
    winner: "Jacori Teemer",
    winner_school: "Arizona State",
    loser: "Hayden Hidlay",
    loser_school: "NC State",
    result: "Dec 18-12"
  },
  {
    round: "ConsSemi",
    weight: "157",
    bout: 590,
    winner: "Ryan Deakin",
    winner_school: "Northwestern",
    loser: "Brayton Lee",
    loser_school: "Minnesota",
    result: "MD 8-0"
  },
  {
    round: "ConsSemi",
    weight: "165",
    bout: 591,
    winner: "Travis Wittlake",
    winner_school: "Oklahoma State",
    loser: "Ethan Smith",
    loser_school: "Ohio State",
    result: "Dec 7-4"
  },
  {
    round: "ConsSemi",
    weight: "165",
    bout: 592,
    winner: "Keegan O`Toole",
    winner_school: "Missouri",
    loser: "Zach Hartman",
    loser_school: "Bucknell",
    result: "MD 17-4"
  },
  {
    round: "ConsSemi",
    weight: "174",
    bout: 593,
    winner: "Mikey Labriola",
    winner_school: "Nebraska",
    loser: "Demetrius Romero",
    loser_school: "Utah Valley",
    result: "Dec 5-4"
  },
  {
    round: "ConsSemi",
    weight: "174",
    bout: 594,
    winner: "Bernie Truax",
    winner_school: "Cal Poly",
    loser: "Logan Massa",
    loser_school: "Michigan",
    result: "Dec 7-6"
  },
  {
    round: "ConsSemi",
    weight: "184",
    bout: 595,
    winner: "John Poznanski",
    winner_school: "Rutgers",
    loser: "Dakota Geer",
    loser_school: "Oklahoma State",
    result: "Dec 10-6"
  },
  {
    round: "ConsSemi",
    weight: "184",
    bout: 596,
    winner: "Parker Keckeisen",
    winner_school: "Northern Iowa",
    loser: "Brit Wilson",
    loser_school: "Northern Illinois",
    result: "Dec 6-2"
  },
  {
    round: "ConsSemi",
    weight: "197",
    bout: 597,
    winner: "Jacob Warner",
    winner_school: "Iowa",
    loser: "Jake Woodley",
    loser_school: "Oklahoma",
    result: "Dec 2-1"
  },
  {
    round: "ConsSemi",
    weight: "197",
    bout: 598,
    winner: "Myles Amine",
    winner_school: "Michigan",
    loser: "Rocky Elam",
    loser_school: "Missouri",
    result: "SV-2 8-6"
  },
  {
    round: "ConsSemi",
    weight: "285",
    bout: 599,
    winner: "Cohlton Schultz",
    winner_school: "Arizona State",
    loser: "Gannon Gremmel",
    loser_school: "Iowa State",
    result: "SV-1 3-1"
  },
  {
    round: "ConsSemi",
    weight: "285",
    bout: 600,
    winner: "Tony Cassioppi",
    winner_school: "Iowa",
    loser: "Trent Hillger",
    loser_school: "Wisconsin",
    result: "MD 8-0"
  },
  {
    round: "3rdPlace",
    weight: "125",
    bout: 601,
    winner: "Patrick McKee",
    winner_school: "Minnesota",
    loser: "Drew Hildebrandt",
    loser_school: "Central Michigan",
    result: "Dec 5-3"
  },
  {
    round: "5thPlace",
    weight: "125",
    bout: 602,
    winner: "Taylor LaMont",
    winner_school: "Utah Valley",
    loser: "Sam Latona",
    loser_school: "Virginia Tech",
    result: "Dec 4-1"
  },
  {
    round: "7thPlace",
    weight: "125",
    bout: 603,
    winner: "Killian Cardinale",
    winner_school: "West Virginia",
    loser: "Eric Barnett",
    loser_school: "Wisconsin",
    result: "Dec 12-7"
  },
  {
    round: "3rdPlace",
    weight: "133",
    bout: 604,
    winner: "Austin DeSanto",
    winner_school: "Iowa",
    loser: "Korbin Myers",
    loser_school: "Virginia Tech",
    result: "Dec 10-6"
  },
  {
    round: "5thPlace",
    weight: "133",
    bout: 605,
    winner: "Lucas Byrd",
    winner_school: "Illinois",
    loser: "Michael McGee",
    loser_school: "Arizona State",
    result: "Fall 6:17"
  },
  {
    round: "7thPlace",
    weight: "133",
    bout: 606,
    winner: "Chris Cannon",
    winner_school: "Northwestern",
    loser: "Louie Hayes",
    loser_school: "Virginia",
    result: "MD 11-3"
  },
  {
    round: "3rdPlace",
    weight: "141",
    bout: 607,
    winner: "Tariq Wilson",
    winner_school: "NC State",
    loser: "Sebastian Rivera",
    loser_school: "Rutgers",
    result: "MD 15-5"
  },
  {
    round: "5thPlace",
    weight: "141",
    bout: 608,
    winner: "Dylan Duncan",
    winner_school: "Illinois",
    loser: "Chad Red",
    loser_school: "Nebraska",
    result: "Dec 3-0"
  },
  {
    round: "7thPlace",
    weight: "141",
    bout: 609,
    winner: "Zachary Sherman",
    winner_school: "North Carolina",
    loser: "Clay Carlson",
    loser_school: "South Dakota State",
    result: "Dec 11-4"
  },
  {
    round: "3rdPlace",
    weight: "149",
    bout: 610,
    winner: "Yahya Thomas",
    winner_school: "Northwestern",
    loser: "Boo Lewallen",
    loser_school: "Oklahoma State",
    result: "Dec 5-3"
  },
  {
    round: "5thPlace",
    weight: "149",
    bout: 611,
    winner: "Brock Mauller",
    winner_school: "Missouri",
    loser: "Kyle Parco",
    loser_school: "Fresno State",
    result: "Dec 8-5"
  },
  {
    round: "7thPlace",
    weight: "149",
    bout: 612,
    winner: "Jaden Abas",
    winner_school: "Stanford",
    loser: "Jonathan Millner",
    loser_school: "Appalachian State",
    result: "Dec 5-3"
  },
  {
    round: "3rdPlace",
    weight: "157",
    bout: 613,
    winner: "Ryan Deakin",
    winner_school: "Northwestern",
    loser: "Jacori Teemer",
    loser_school: "Arizona State",
    result: "Dec 1-0"
  },
  {
    round: "5thPlace",
    weight: "157",
    bout: 614,
    winner: "Hayden Hidlay",
    winner_school: "NC State",
    loser: "Brayton Lee",
    loser_school: "Minnesota",
    result: "MD 11-2"
  },
  {
    round: "7thPlace",
    weight: "157",
    bout: 615,
    winner: "Kaleb Young",
    winner_school: "Iowa",
    loser: "Wyatt Sheets",
    loser_school: "Oklahoma State",
    result: "Dec 3-2"
  },
  {
    round: "3rdPlace",
    weight: "165",
    bout: 616,
    winner: "Keegan O`Toole",
    winner_school: "Missouri",
    loser: "Travis Wittlake",
    loser_school: "Oklahoma State",
    result: "Dec 4-3"
  },
  {
    round: "5thPlace",
    weight: "165",
    bout: 617,
    winner: "Ethan Smith",
    winner_school: "Ohio State",
    loser: "Zach Hartman",
    loser_school: "Bucknell",
    result: "SV-1 7-5"
  },
  {
    round: "7thPlace",
    weight: "165",
    bout: 618,
    winner: "Cameron Amine",
    winner_school: "Michigan",
    loser: "Anthony Valencia",
    loser_school: "Arizona State",
    result: "For."
  },
  {
    round: "3rdPlace",
    weight: "174",
    bout: 619,
    winner: "Mikey Labriola",
    winner_school: "Nebraska",
    loser: "Bernie Truax",
    loser_school: "Cal Poly",
    result: "Dec 8-3"
  },
  {
    round: "5thPlace",
    weight: "174",
    bout: 620,
    winner: "Logan Massa",
    winner_school: "Michigan",
    loser: "Demetrius Romero",
    loser_school: "Utah Valley",
    result: "M. For."
  },
  {
    round: "7thPlace",
    weight: "174",
    bout: 621,
    winner: "Daniel Bullard",
    winner_school: "NC State",
    loser: "Jackson Turley",
    loser_school: "Rutgers",
    result: "M. For."
  },
  {
    round: "3rdPlace",
    weight: "184",
    bout: 622,
    winner: "Parker Keckeisen",
    winner_school: "Northern Iowa",
    loser: "John Poznanski",
    loser_school: "Rutgers",
    result: "Dec 5-4"
  },
  {
    round: "5thPlace",
    weight: "184",
    bout: 623,
    winner: "Dakota Geer",
    winner_school: "Oklahoma State",
    loser: "Brit Wilson",
    loser_school: "Northern Illinois",
    result: "Dec 6-0"
  },
  {
    round: "7thPlace",
    weight: "184",
    bout: 624,
    winner: "Hunter Bolen",
    winner_school: "Virginia Tech",
    loser: "Lou Deprez",
    loser_school: "Binghamton",
    result: "Dec 6-3"
  },
  {
    round: "3rdPlace",
    weight: "197",
    bout: 625,
    winner: "Myles Amine",
    winner_school: "Michigan",
    loser: "Jacob Warner",
    loser_school: "Iowa",
    result: "Dec 5-3"
  },
  {
    round: "5thPlace",
    weight: "197",
    bout: 626,
    winner: "Rocky Elam",
    winner_school: "Missouri",
    loser: "Jake Woodley",
    loser_school: "Oklahoma",
    result: "Dec 9-3"
  },
  {
    round: "7thPlace",
    weight: "197",
    bout: 627,
    winner: "Michael Beard",
    winner_school: "Penn State",
    loser: "Stephen Buchanan",
    loser_school: "Wyoming",
    result: "SV-1 10-8"
  },
  {
    round: "3rdPlace",
    weight: "285",
    bout: 628,
    winner: "Tony Cassioppi",
    winner_school: "Iowa",
    loser: "Cohlton Schultz",
    loser_school: "Arizona State",
    result: "Dec 5-0"
  },
  {
    round: "5thPlace",
    weight: "285",
    bout: 629,
    winner: "Gannon Gremmel",
    winner_school: "Iowa State",
    loser: "Trent Hillger",
    loser_school: "Wisconsin",
    result: "Dec 4-0"
  },
  {
    round: "7thPlace",
    weight: "285",
    bout: 630,
    winner: "Greg Kerkvliet",
    winner_school: "Penn State",
    loser: "Tate Orndorff",
    loser_school: "Ohio State",
    result: "MD 13-1"
  },
  {
    round: "Finals",
    weight: "125",
    bout: 631,
    winner: "Spencer Lee",
    winner_school: "Iowa",
    loser: "Brandon Courtney",
    loser_school: "Arizona State",
    result: "Dec 7-0"
  },
  {
    round: "Finals",
    weight: "133",
    bout: 632,
    winner: "Roman Bravo-Young",
    winner_school: "Penn State",
    loser: "Daton Fix",
    loser_school: "Oklahoma State",
    result: "SV-1 4-2"
  },
  {
    round: "Finals",
    weight: "141",
    bout: 633,
    winner: "Nick Lee",
    winner_school: "Penn State",
    loser: "Jaydin Eierman",
    loser_school: "Iowa",
    result: "SV-1 4-2"
  },
  {
    round: "Finals",
    weight: "149",
    bout: 634,
    winner: "Austin O`Connor",
    winner_school: "North Carolina",
    loser: "Sammy Sasso",
    loser_school: "Ohio State",
    result: "Dec 3-2"
  },
  {
    round: "Finals",
    weight: "157",
    bout: 635,
    winner: "David Carr",
    winner_school: "Iowa State",
    loser: "Jesse Dellavecchia",
    loser_school: "Rider",
    result: "Dec 4-0"
  },
  {
    round: "Finals",
    weight: "165",
    bout: 636,
    winner: "Shane Griffith",
    winner_school: "Stanford",
    loser: "Jake Wentzel",
    loser_school: "Pittsburgh",
    result: "Dec 6-2"
  },
  {
    round: "Finals",
    weight: "174",
    bout: 637,
    winner: "Carter Starocci",
    winner_school: "Penn State",
    loser: "Michael Kemerer",
    loser_school: "Iowa",
    result: "SV-1 3-1"
  },
  {
    round: "Finals",
    weight: "184",
    bout: 638,
    winner: "Aaron Brooks",
    winner_school: "Penn State",
    loser: "Trent Hidlay",
    loser_school: "NC State",
    result: "Dec 3-2"
  },
  {
    round: "Finals",
    weight: "197",
    bout: 639,
    winner: "AJ Ferrari",
    winner_school: "Oklahoma State",
    loser: "Nino Bonaccorsi",
    loser_school: "Pittsburgh",
    result: "Dec 4-2"
  },
  {
    round: "Finals",
    weight: "285",
    bout: 640,
    winner: "Gable Steveson",
    winner_school: "Minnesota",
    loser: "Mason Parris",
    loser_school: "Michigan",
    result: "Dec 8-4"
  },
];
