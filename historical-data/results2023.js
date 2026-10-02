const resultData = [

  // 125 lbs
  { round: "Prelims", weight: "125", bout: 1, winner: "Tucker Owens", winner_school: "Air Force", loser: "Tanner Jordan", loser_school: "South Dakota State", result: "Dec 2-1" },

  // 133 lbs
  { round: "Prelims", weight: "133", bout: 2, winner: "Ethan Oakley", winner_school: "Appalachian State", loser: "McGwire Midkiff", loser_school: "North Dakota State", result: "Dec 5-3" },

  // 141 lbs
  { round: "Prelims", weight: "141", bout: 3, winner: "Kal Miller", winner_school: "Maryland", loser: "Josh Mason", loser_school: "Bloomsburg", result: "Dec 4-3" },

  // 149 lbs
  { round: "Prelims", weight: "149", bout: 4, winner: "Dom Demas", winner_school: "Cal Poly", loser: "Isaiah Delgado", loser_school: "Utah Valley", result: "TF-1.5 6:48 (18-3)" },

  // 157 lbs
  { round: "Prelims", weight: "157", bout: 5, winner: "Vinny Zerban", winner_school: "Northern Colorado", loser: "Nathan Lukez", loser_school: "Army West Point", result: "Dec 6-5" },

  // 165 lbs
  { round: "Prelims", weight: "165", bout: 6, winner: "Josh Kim", winner_school: "Harvard", loser: "Cole Moody", loser_school: "Wyoming", result: "Dec 7-4" },

  // 174 lbs
  { round: "Prelims", weight: "174", bout: 7, winner: "John Worthing", winner_school: "Clarion", loser: "Will Miller", loser_school: "Appalachian State", result: "Dec 8-4" },

  // 184 lbs
  { round: "Prelims", weight: "184", bout: 8, winner: "Anthony Carman", winner_school: "West Virginia", loser: "Jha`Quan Anderson", loser_school: "Gardner-Webb", result: "SV-1 5-3" },

  // 197 lbs
  { round: "Prelims", weight: "197", bout: 9, winner: "Max Shaw", winner_school: "North Carolina", loser: "Cole Urbas", loser_school: "Pennsylvania", result: "Dec 4-1" },

  // 285 lbs
  { round: "Prelims", weight: "285", bout: 10, winner: "Garrett Joles", winner_school: "Minnesota", loser: "Travis Stefanik", loser_school: "Princeton", result: "Dec 4-1" },

  // 125 lbs
  { round: "ChampR1", weight: "125", bout: 11, winner: "Spencer Lee", winner_school: "Iowa", loser: "Tucker Owens", loser_school: "Air Force", result: "Fall 0:36" },
  { round: "ChampR1", weight: "125", bout: 12, winner: "Jack Medley", winner_school: "Michigan", loser: "Ethan Berginc", loser_school: "Army West Point", result: "Dec 4-2" },
  { round: "ChampR1", weight: "125", bout: 13, winner: "Eric Barnett", winner_school: "Wisconsin", loser: "Nick Babin", loser_school: "Columbia", result: "MD 9-0" },
  { round: "ChampR1", weight: "125", bout: 14, winner: "Anthony Noto", winner_school: "Lock Haven", loser: "Joey Prata", loser_school: "Oklahoma", result: "Dec 5-2" },
  { round: "ChampR1", weight: "125", bout: 15, winner: "Killian Cardinale", winner_school: "West Virginia", loser: "Caleb Smith", loser_school: "Appalachian State", result: "Dec 3-2" },
  { round: "ChampR1", weight: "125", bout: 16, winner: "Jore Volk", winner_school: "Wyoming", loser: "Michael DeAugustino", loser_school: "Northwestern", result: "SV-1 3-1" },
  { round: "ChampR1", weight: "125", bout: 17, winner: "Jarrett Trombley", winner_school: "NC State", loser: "Dean Peterson", loser_school: "Rutgers", result: "Dec 4-3" },
  { round: "ChampR1", weight: "125", bout: 18, winner: "Matt Ramos", winner_school: "Purdue", loser: "Nico Provo", loser_school: "Stanford", result: "Dec 3-2" },
  { round: "ChampR1", weight: "125", bout: 19, winner: "Liam Cronin", winner_school: "Nebraska", loser: "Antonio Lorenzo", loser_school: "Cal Poly", result: "Dec 9-4" },
  { round: "ChampR1", weight: "125", bout: 20, winner: "Braxton Brown", winner_school: "Maryland", loser: "Noah Surtin", loser_school: "Missouri", result: "Dec 8-6" },
  { round: "ChampR1", weight: "125", bout: 21, winner: "Patrick McKee", winner_school: "Minnesota", loser: "Diego Sotelo", loser_school: "Harvard", result: "MD 12-3" },
  { round: "ChampR1", weight: "125", bout: 22, winner: "Eddie Ventresca", winner_school: "Virginia Tech", loser: "Stevo Poulin", loser_school: "Northern Colorado", result: "SV-1 4-2" },
  { round: "ChampR1", weight: "125", bout: 23, winner: "Jack Wagner", winner_school: "North Carolina", loser: "Brandon Kaylor", loser_school: "Oregon State", result: "Dec 3-1" },
  { round: "ChampR1", weight: "125", bout: 24, winner: "Brandon Courtney", winner_school: "Arizona State", loser: "Jake Ferri", loser_school: "Kent State", result: "Dec 5-3" },
  { round: "ChampR1", weight: "125", bout: 25, winner: "Brett Ungar", winner_school: "Cornell", loser: "Ryan Miller", loser_school: "Pennsylvania", result: "Dec 6-1" },
  { round: "ChampR1", weight: "125", bout: 26, winner: "Pat Glory", winner_school: "Princeton", loser: "Reece Witcraft", loser_school: "Oklahoma State", result: "Fall 0:32" },

  // 133 lbs
  { round: "ChampR1", weight: "133", bout: 27, winner: "Roman Bravo-Young", winner_school: "Penn State", loser: "Ethan Oakley", loser_school: "Appalachian State", result: "MD 12-3" },
  { round: "ChampR1", weight: "133", bout: 28, winner: "Brayden Palmer", winner_school: "Chattanooga", loser: "Joe Heilmann", loser_school: "Rutgers", result: "Dec 4-2" },
  { round: "ChampR1", weight: "133", bout: 29, winner: "Micky Phillippi", winner_school: "Pittsburgh", loser: "Wyatt Henson", loser_school: "Oklahoma", result: "Dec 5-2" },
  { round: "ChampR1", weight: "133", bout: 30, winner: "Aaron Nagao", winner_school: "Minnesota", loser: "Kurtis Phipps", loser_school: "Bucknell", result: "MD 8-0" },
  { round: "ChampR1", weight: "133", bout: 31, winner: "Kai Orine", winner_school: "NC State", loser: "Gable Strickland", loser_school: "Lock Haven", result: "Fall 4:05" },
  { round: "ChampR1", weight: "133", bout: 32, winner: "Chance Rich", winner_school: "CSU Bakersfield", loser: "Chris Cannon", loser_school: "Northwestern", result: "Dec 6-5" },
  { round: "ChampR1", weight: "133", bout: 33, winner: "Jesse Mendez", winner_school: "Ohio State", loser: "Brendan Ferretti", loser_school: "Navy", result: "MD 12-4" },
  { round: "ChampR1", weight: "133", bout: 34, winner: "Michael McGee", winner_school: "Arizona State", loser: "Angelo Rini", loser_school: "Columbia", result: "MD 20-8" },
  { round: "ChampR1", weight: "133", bout: 35, winner: "Vito Arujau", winner_school: "Cornell", loser: "Ethan Rotondo", loser_school: "Cal Poly", result: "Dec 12-6" },
  { round: "ChampR1", weight: "133", bout: 36, winner: "Zach Redding", winner_school: "Iowa State", loser: "Domenic Zaccone", loser_school: "Campbell", result: "Dec 7-2" },
  { round: "ChampR1", weight: "133", bout: 37, winner: "Cody Phippen", winner_school: "Air Force", loser: "Dylan Ragusin", loser_school: "Michigan", result: "Fall 2:02" },
  { round: "ChampR1", weight: "133", bout: 38, winner: "Sam Latona", winner_school: "Virginia Tech", loser: "Taylor Lamont", loser_school: "Wisconsin", result: "SV-1 3-1" },
  { round: "ChampR1", weight: "133", bout: 39, winner: "Michael Colaiocco", winner_school: "Pennsylvania", loser: "Connor Brown", loser_school: "Missouri", result: "Fall 0:38" },
  { round: "ChampR1", weight: "133", bout: 40, winner: "Lucas Byrd", winner_school: "Illinois", loser: "Brody Teske", loser_school: "Iowa", result: "Dec 13-10" },
  { round: "ChampR1", weight: "133", bout: 41, winner: "Kyle Biscoglia", winner_school: "Northern Iowa", loser: "Jason Shaner", loser_school: "Oregon State", result: "Fall 6:02" },
  { round: "ChampR1", weight: "133", bout: 42, winner: "Daton Fix", winner_school: "Oklahoma State", loser: "Jack Maida", loser_school: "American", result: "Fall 2:16" },

  // 141 lbs
  { round: "ChampR1", weight: "141", bout: 43, winner: "Real Woods", winner_school: "Iowa", loser: "Kal Miller", loser_school: "Maryland", result: "MD 13-1" },
  { round: "ChampR1", weight: "141", bout: 44, winner: "Dylan D`Emilio", winner_school: "Ohio State", loser: "Josh Koderhandt", loser_school: "Navy", result: "MD 10-1" },
  { round: "ChampR1", weight: "141", bout: 45, winner: "Mosha Schwartz", winner_school: "Oklahoma", loser: "Casey Swiderski", loser_school: "Iowa State", result: "Dec 4-1" },
  { round: "ChampR1", weight: "141", bout: 46, winner: "Allan Hart", winner_school: "Missouri", loser: "Carmen Ferrante", loser_school: "Pennsylvania", result: "Dec 7-4" },
  { round: "ChampR1", weight: "141", bout: 47, winner: "Ryan Jack", winner_school: "NC State", loser: "Saul Ervin", loser_school: "SIU Edwardsville", result: "Dec 3-2" },
  { round: "ChampR1", weight: "141", bout: 48, winner: "Parker Filius", winner_school: "Purdue", loser: "Cleveland Belton", loser_school: "Oregon State", result: "Dec 8-3" },
  { round: "ChampR1", weight: "141", bout: 49, winner: "Jakob Bergeland", winner_school: "Minnesota", loser: "Carter Young", loser_school: "Oklahoma State", result: "Dec 5-0" },
  { round: "ChampR1", weight: "141", bout: 50, winner: "Brock Hardy", winner_school: "Nebraska", loser: "Jordan Titus", loser_school: "West Virginia", result: "MD 12-4" },
  { round: "ChampR1", weight: "141", bout: 51, winner: "Cole Matthews", winner_school: "Pittsburgh", loser: "Seth Koleno", loser_school: "Clarion", result: "Dec 4-1" },
  { round: "ChampR1", weight: "141", bout: 52, winner: "Cael Happel", winner_school: "Northern Iowa", loser: "Matt Kazimir", loser_school: "Columbia", result: "Dec 4-3" },
  { round: "ChampR1", weight: "141", bout: 53, winner: "Clay Carlson", winner_school: "South Dakota State", loser: "Malyke Hines", loser_school: "Lehigh", result: "Dec 6-1" },
  { round: "ChampR1", weight: "141", bout: 54, winner: "Beau Bartlett", winner_school: "Penn State", loser: "Shannon Hanna", loser_school: "Campbell", result: "Dec 8-2" },
  { round: "ChampR1", weight: "141", bout: 55, winner: "Vince Cornella", winner_school: "Cornell", loser: "McKenzie Bell", loser_school: "Rider", result: "Dec 7-4" },
  { round: "ChampR1", weight: "141", bout: 56, winner: "Lachlan McNeil", winner_school: "North Carolina", loser: "Cole Mattin", loser_school: "Michigan", result: "Dec 6-2" },
  { round: "ChampR1", weight: "141", bout: 57, winner: "Frankie Tal Shahar", winner_school: "Northwestern", loser: "Tom Crook", loser_school: "Virginia Tech", result: "SV-1 3-1" },
  { round: "ChampR1", weight: "141", bout: 58, winner: "Andrew Alirez", winner_school: "Northern Colorado", loser: "Joseph Zargo", loser_school: "Wisconsin", result: "Fall 2:05" },

  // 149 lbs
  { round: "ChampR1", weight: "149", bout: 59, winner: "Yianni Diakomihalis", winner_school: "Cornell", loser: "Dom Demas", loser_school: "Cal Poly", result: "Dec 6-1" },
  { round: "ChampR1", weight: "149", bout: 60, winner: "Jackson Arrington", winner_school: "NC State", loser: "Quinn Kinner", loser_school: "Rider", result: "SV-1 5-3" },
  { round: "ChampR1", weight: "149", bout: 61, winner: "Jaden Abas", winner_school: "Stanford", loser: "Ryan Burgos", loser_school: "Edinboro", result: "Fall 2:56" },
  { round: "ChampR1", weight: "149", bout: 62, winner: "Max Murin", winner_school: "Iowa", loser: "Caleb Tyus", loser_school: "SIU Edwardsville", result: "Dec 6-3" },
  { round: "ChampR1", weight: "149", bout: 63, winner: "Paniro Johnson", winner_school: "Iowa State", loser: "Alec Hagan", loser_school: "Ohio", result: "TB-1 2-2" },
  { round: "ChampR1", weight: "149", bout: 64, winner: "Shayne Van Ness", winner_school: "Penn State", loser: "Ethen Miller", loser_school: "Maryland", result: "Fall 6:26" },
  { round: "ChampR1", weight: "149", bout: 65, winner: "Graham Rooks", winner_school: "Indiana", loser: "Kellyn March", loser_school: "North Dakota State", result: "Dec 4-3" },
  { round: "ChampR1", weight: "149", bout: 66, winner: "Caleb Henson", winner_school: "Virginia Tech", loser: "Dylan Chappell", loser_school: "Bucknell", result: "Dec 6-1" },
  { round: "ChampR1", weight: "149", bout: 67, winner: "Kyle Parco", winner_school: "Arizona State", loser: "Dylan Martinez", loser_school: "Air Force", result: "MD 18-6" },
  { round: "ChampR1", weight: "149", bout: 68, winner: "Austin Gomez", winner_school: "Wisconsin", loser: "Johnny Lovett", loser_school: "Central Michigan", result: "MD 18-10" },
  { round: "ChampR1", weight: "149", bout: 69, winner: "Chance Lamer", winner_school: "Michigan", loser: "Doug Zapf", loser_school: "Pennsylvania", result: "Dec 4-3" },
  { round: "ChampR1", weight: "149", bout: 70, winner: "Brock Mauller", winner_school: "Missouri", loser: "Jarod Verkleeren", loser_school: "Virginia", result: "Dec 11-5" },
  { round: "ChampR1", weight: "149", bout: 71, winner: "Yahya Thomas", winner_school: "Northwestern", loser: "Nate Higley", loser_school: "George Mason", result: "MD 12-3" },
  { round: "ChampR1", weight: "149", bout: 72, winner: "Michael Blockhus", winner_school: "Minnesota", loser: "Victor Voinovich", loser_school: "Oklahoma State", result: "Dec 3-2" },
  { round: "ChampR1", weight: "149", bout: 73, winner: "Colin Realbuto", winner_school: "Northern Iowa", loser: "Mitch Moore", loser_school: "Oklahoma", result: "Dec 9-3" },
  { round: "ChampR1", weight: "149", bout: 74, winner: "Sammy Sasso", winner_school: "Ohio State", loser: "Anthony White", loser_school: "Rutgers", result: "MD 10-2" },

  // 157 lbs
  { round: "ChampR1", weight: "157", bout: 75, winner: "Austin O`Connor", winner_school: "North Carolina", loser: "Vinny Zerban", loser_school: "Northern Colorado", result: "Dec 6-1" },
  { round: "ChampR1", weight: "157", bout: 76, winner: "Jarrett Jacques", winner_school: "Missouri", loser: "Anthony Artalona", loser_school: "Pennsylvania", result: "Dec 5-4" },
  { round: "ChampR1", weight: "157", bout: 77, winner: "Will Lewan", winner_school: "Michigan", loser: "Tommy Askey", loser_school: "Appalachian State", result: "Dec 3-2" },
  { round: "ChampR1", weight: "157", bout: 78, winner: "Ed Scott", winner_school: "NC State", loser: "Jason Kraisser", loser_school: "Iowa State", result: "Dec 5-3" },
  { round: "ChampR1", weight: "157", bout: 79, winner: "Josh Humphreys", winner_school: "Lehigh", loser: "Paddy Gallagher", loser_school: "Ohio State", result: "Dec 3-0" },
  { round: "ChampR1", weight: "157", bout: 80, winner: "Kendall Coleman", winner_school: "Purdue", loser: "Andrew Clark", loser_school: "Rutgers", result: "Dec 9-4" },
  { round: "ChampR1", weight: "157", bout: 81, winner: "Trevor Chumbley", winner_school: "Northwestern", loser: "Cael Swensen", loser_school: "South Dakota State", result: "Dec 6-3" },
  { round: "ChampR1", weight: "157", bout: 82, winner: "Jared Franek", winner_school: "North Dakota State", loser: "Corbyn Munson", loser_school: "Central Michigan", result: "MD 10-1" },
  { round: "ChampR1", weight: "157", bout: 83, winner: "Peyton Robb", winner_school: "Nebraska", loser: "Jared Hill", loser_school: "Oklahoma", result: "TF-1.5 6:11 (15-0)" },
  { round: "ChampR1", weight: "157", bout: 84, winner: "Garrett Model", winner_school: "Wisconsin", loser: "Cobe Siebrecht", loser_school: "Iowa", result: "Dec 10-5" },
  { round: "ChampR1", weight: "157", bout: 85, winner: "Derek Holschlag", winner_school: "Northern Iowa", loser: "Chase Saldate", loser_school: "Michigan State", result: "Dec 4-3" },
  { round: "ChampR1", weight: "157", bout: 86, winner: "Daniel Cardenas", winner_school: "Stanford", loser: "Cesar Alvan", loser_school: "Columbia", result: "MD 12-0" },
  { round: "ChampR1", weight: "157", bout: 87, winner: "Bryce Andonian", winner_school: "Virginia Tech", loser: "Peyten Kellar", loser_school: "Ohio", result: "Dec 7-6" },
  { round: "ChampR1", weight: "157", bout: 88, winner: "Kaden Gfeller", winner_school: "Oklahoma State", loser: "Peter Pappas", loser_school: "George Mason", result: "SV-1 7-5" },
  { round: "ChampR1", weight: "157", bout: 89, winner: "Jacob Wright", winner_school: "Wyoming", loser: "Derek Gilcher", loser_school: "Indiana", result: "Dec 3-2" },
  { round: "ChampR1", weight: "157", bout: 90, winner: "Levi Haines", winner_school: "Penn State", loser: "Ashton Eyler", loser_school: "Lock Haven", result: "Dec 10-3" },

  // 165 lbs
  { round: "ChampR1", weight: "165", bout: 91, winner: "David Carr", winner_school: "Iowa State", loser: "Josh Kim", loser_school: "Harvard", result: "MD 10-2" },
  { round: "ChampR1", weight: "165", bout: 92, winner: "Austin Yant", winner_school: "Northern Iowa", loser: "Joshua Ogunsanya", loser_school: "Columbia", result: "Dec 8-1" },
  { round: "ChampR1", weight: "165", bout: 93, winner: "Shane Griffith", winner_school: "Stanford", loser: "Rodrick Mosley", loser_school: "Gardner-Webb", result: "Dec 1-0" },
  { round: "ChampR1", weight: "165", bout: 94, winner: "Bubba Wilson", winner_school: "Nebraska", loser: "Matthew Olguin", loser_school: "Oregon State", result: "SV-1 3-1" },
  { round: "ChampR1", weight: "165", bout: 95, winner: "Quincy Monday", winner_school: "Princeton", loser: "Andrew Sparks", loser_school: "Minnesota", result: "MD 12-4" },
  { round: "ChampR1", weight: "165", bout: 96, winner: "Izzak Olejnik", winner_school: "Northern Illinois", loser: "Gerrit Nijenhuis", loser_school: "Oklahoma", result: "Dec 4-3" },
  { round: "ChampR1", weight: "165", bout: 97, winner: "Holden Heller", winner_school: "Pittsburgh", loser: "Alex Facundo", loser_school: "Penn State", result: "Dec 5-3" },
  { round: "ChampR1", weight: "165", bout: 98, winner: "Caleb Fish", winner_school: "Michigan State", loser: "Julian Ramirez", loser_school: "Cornell", result: "Dec 8-4" },
  { round: "ChampR1", weight: "165", bout: 99, winner: "Dean Hamiti", winner_school: "Wisconsin", loser: "Evan Barczak", loser_school: "Drexel", result: "Fall 1:24" },
  { round: "ChampR1", weight: "165", bout: 100, winner: "Dan Braunagel", winner_school: "Illinois", loser: "Peyton Hall", loser_school: "West Virginia", result: "MD 16-5" },
  { round: "ChampR1", weight: "165", bout: 101, winner: "Cameron Amine", winner_school: "Michigan", loser: "Tanner Cook", loser_school: "South Dakota State", result: "Fall 6:30" },
  { round: "ChampR1", weight: "165", bout: 102, winner: "Patrick Kennedy", winner_school: "Iowa", loser: "Will Formato", loser_school: "Appalachian State", result: "Dec 7-2" },
  { round: "ChampR1", weight: "165", bout: 103, winner: "Michael Caliendo III", winner_school: "North Dakota State", loser: "Brevin Cassella", loser_school: "Binghamton", result: "Dec 6-1" },
  { round: "ChampR1", weight: "165", bout: 104, winner: "Carson Kharchla", winner_school: "Ohio State", loser: "Connor Brady", loser_school: "Virginia Tech", result: "Dec 2-1" },
  { round: "ChampR1", weight: "165", bout: 105, winner: "Justin McCoy", winner_school: "Virginia", loser: "Maxx Mayfield", loser_school: "Northwestern", result: "Dec 7-2" },
  { round: "ChampR1", weight: "165", bout: 106, winner: "Keegan O`Toole", winner_school: "Missouri", loser: "Wyatt Sheets", loser_school: "Oklahoma State", result: "MD 13-5" },

  // 174 lbs
  { round: "ChampR1", weight: "174", bout: 107, winner: "Carter Starocci", winner_school: "Penn State", loser: "John Worthing", loser_school: "Clarion", result: "Fall 1:21" },
  { round: "ChampR1", weight: "174", bout: 108, winner: "Donnell Washington", winner_school: "Indiana", loser: "Sam Wolf", loser_school: "Air Force", result: "TF-1.5 4:17 (17-2)" },
  { round: "ChampR1", weight: "174", bout: 109, winner: "Edmond Ruth", winner_school: "Illinois", loser: "Philip Conigliaro", loser_school: "Harvard", result: "MD 14-4" },
  { round: "ChampR1", weight: "174", bout: 110, winner: "Bailee O`Reilly", winner_school: "Minnesota", loser: "Nick Incontrera", loser_school: "Pennsylvania", result: "Dec 5-3" },
  { round: "ChampR1", weight: "174", bout: 111, winner: "Dustin Plott", winner_school: "Oklahoma State", loser: "Luca Augustine", loser_school: "Pittsburgh", result: "Dec 3-2" },
  { round: "ChampR1", weight: "174", bout: 112, winner: "Aaron Olmos", winner_school: "Oregon State", loser: "Lennox Wolak", loser_school: "Columbia", result: "Dec 6-3" },
  { round: "ChampR1", weight: "174", bout: 113, winner: "Cade DeVos", winner_school: "South Dakota State", loser: "Alex Cramer", loser_school: "Central Michigan", result: "Fall 2:13" },
  { round: "ChampR1", weight: "174", bout: 114, winner: "Chris Foca", winner_school: "Cornell", loser: "Cael Valencia", loser_school: "Arizona State", result: "Fall 2:22" },
  { round: "ChampR1", weight: "174", bout: 115, winner: "Mekhi Lewis", winner_school: "Virginia Tech", loser: "Jackson Turley", loser_school: "Rutgers", result: "Dec 2-1" },
  { round: "ChampR1", weight: "174", bout: 116, winner: "Troy Fisher", winner_school: "Northwestern", loser: "Benjamin Pasiuk", loser_school: "Army West Point", result: "SV-1 10-8" },
  { round: "ChampR1", weight: "174", bout: 117, winner: "Nelson Brands", winner_school: "Iowa", loser: "Alex Faison", loser_school: "NC State", result: "Dec 6-3" },
  { round: "ChampR1", weight: "174", bout: 118, winner: "Ethan Smith", winner_school: "Ohio State", loser: "Tyler Eischens", loser_school: "Stanford", result: "Dec 6-5" },
  { round: "ChampR1", weight: "174", bout: 119, winner: "Peyton Mocco", winner_school: "Missouri", loser: "Sal Perrine", loser_school: "Ohio", result: "SV-1 3-1" },
  { round: "ChampR1", weight: "174", bout: 120, winner: "Mickey O`Malley", winner_school: "Drexel", loser: "Rocky Jordan", loser_school: "Chattanooga", result: "Dec 8-7" },
  { round: "ChampR1", weight: "174", bout: 121, winner: "Demetrius Romero", winner_school: "Utah Valley", loser: "Tate Picklo", loser_school: "Oklahoma", result: "MD 9-1" },
  { round: "ChampR1", weight: "174", bout: 122, winner: "Mikey Labriola", winner_school: "Nebraska", loser: "Tyler Stoltzfus", loser_school: "Lock Haven", result: "Dec 9-6" },

  // 184 lbs
  { round: "ChampR1", weight: "184", bout: 123, winner: "Parker Keckeisen", winner_school: "Northern Iowa", loser: "Anthony Carman", loser_school: "West Virginia", result: "MD 12-3" },
  { round: "ChampR1", weight: "184", bout: 124, winner: "Tate Samuelson", winner_school: "Lehigh", loser: "Reece Heller", loser_school: "Pittsburgh", result: "Fall 5:45" },
  { round: "ChampR1", weight: "184", bout: 125, winner: "Isaiah Salazar", winner_school: "Minnesota", loser: "Cade King", loser_school: "South Dakota State", result: "Dec 3-0" },
  { round: "ChampR1", weight: "184", bout: 126, winner: "Brian Bonino", winner_school: "Drexel", loser: "Matt Finesilver", loser_school: "Michigan", result: "Dec 3-2" },
  { round: "ChampR1", weight: "184", bout: 127, winner: "Marcus Coleman", winner_school: "Iowa State", loser: "Jacob Ferreira", loser_school: "Hofstra", result: "MD 12-3" },
  { round: "ChampR1", weight: "184", bout: 128, winner: "Abe Assad", winner_school: "Iowa", loser: "Giuseppe Hoose", loser_school: "Buffalo", result: "Dec 6-2" },
  { round: "ChampR1", weight: "184", bout: 129, winner: "Neil Antrassian", winner_school: "Virginia", loser: "Lenny Pinto", loser_school: "Nebraska", result: "Dec 11-6" },
  { round: "ChampR1", weight: "184", bout: 130, winner: "Trey Munoz", winner_school: "Oregon State", loser: "Deanthony Parker", loser_school: "North Dakota State", result: "Dec 2-1" },
  { round: "ChampR1", weight: "184", bout: 131, winner: "Aaron Brooks", winner_school: "Penn State", loser: "Matthew Waddell", loser_school: "Chattanooga", result: "MD 13-4" },
  { round: "ChampR1", weight: "184", bout: 132, winner: "Will Feldkamp", winner_school: "Clarion", loser: "Jacob Nolan", loser_school: "Binghamton", result: "Dec 4-3" },
  { round: "ChampR1", weight: "184", bout: 133, winner: "Colton Hawks", winner_school: "Missouri", loser: "Gavin Kane", loser_school: "North Carolina", result: "Dec 6-2" },
  { round: "ChampR1", weight: "184", bout: 134, winner: "Kaleb Romero", winner_school: "Ohio State", loser: "Caleb Hopkins", loser_school: "Campbell", result: "MD 10-2" },
  { round: "ChampR1", weight: "184", bout: 135, winner: "Hunter Bolen", winner_school: "Virginia Tech", loser: "David Key", loser_school: "Navy", result: "Dec 3-2" },
  { round: "ChampR1", weight: "184", bout: 136, winner: "Travis Wittlake", winner_school: "Oklahoma State", loser: "Dylan Connell", loser_school: "Illinois", result: "Dec 4-0" },
  { round: "ChampR1", weight: "184", bout: 137, winner: "Brian Soldano", winner_school: "Rutgers", loser: "Layne Malczewski", loser_school: "Michigan State", result: "Fall 1:40" },
  { round: "ChampR1", weight: "184", bout: 138, winner: "Trent Hidlay", winner_school: "NC State", loser: "Zayne Lehman", loser_school: "Ohio", result: "TF-1.5 7:00 (24-9)" },

  // 197 lbs
  { round: "ChampR1", weight: "197", bout: 139, winner: "Nino Bonaccorsi", winner_school: "Pittsburgh", loser: "Max Shaw", loser_school: "North Carolina", result: "MD 10-1" },
  { round: "ChampR1", weight: "197", bout: 140, winner: "Owen Pentz", winner_school: "North Dakota State", loser: "Braxton Amos", loser_school: "Wisconsin", result: "Inj. 1:38" },
  { round: "ChampR1", weight: "197", bout: 141, winner: "Max Dean", winner_school: "Penn State", loser: "Levi Hopkins", loser_school: "Campbell", result: "Dec 6-1" },
  { round: "ChampR1", weight: "197", bout: 142, winner: "Silas Allred", winner_school: "Nebraska", loser: "Michael Battista", loser_school: "Virginia", result: "Dec 13-7" },
  { round: "ChampR1", weight: "197", bout: 143, winner: "Michael Beard", winner_school: "Lehigh", loser: "Jacob Koser", loser_school: "Navy", result: "MD 11-1" },
  { round: "ChampR1", weight: "197", bout: 144, winner: "Zac Braunagel", winner_school: "Illinois", loser: "Andy Smith", loser_school: "Virginia Tech", result: "Fall 3:59" },
  { round: "ChampR1", weight: "197", bout: 145, winner: "Yonger Bastida", winner_school: "Iowa State", loser: "Evan Bockman", loser_school: "Utah Valley", result: "Dec 5-2" },
  { round: "ChampR1", weight: "197", bout: 146, winner: "Ethan Laird", winner_school: "Rider", loser: "Trey Rogers", loser_school: "Hofstra", result: "Dec 10-5" },
  { round: "ChampR1", weight: "197", bout: 147, winner: "Rocky Elam", winner_school: "Missouri", loser: "Andrew Davison", loser_school: "Northwestern", result: "Dec 4-1" },
  { round: "ChampR1", weight: "197", bout: 148, winner: "Jacob Warner", winner_school: "Iowa", loser: "Cameron Caffey", loser_school: "Michigan State", result: "Dec 5-1" },
  { round: "ChampR1", weight: "197", bout: 149, winner: "Jaxon Smith", winner_school: "Maryland", loser: "Michial Foy", loser_school: "Minnesota", result: "Dec 6-3" },
  { round: "ChampR1", weight: "197", bout: 150, winner: "Isaac Trumble", winner_school: "NC State", loser: "Nick Stemmet", loser_school: "Stanford", result: "Dec 7-4" },
  { round: "ChampR1", weight: "197", bout: 151, winner: "Tanner Sloan", winner_school: "South Dakota State", loser: "Gavin Hoffman", loser_school: "Ohio State", result: "Dec 8-1" },
  { round: "ChampR1", weight: "197", bout: 152, winner: "Jacob Cardenas", winner_school: "Cornell", loser: "Luke Stout", loser_school: "Princeton", result: "Dec 3-1" },
  { round: "ChampR1", weight: "197", bout: 153, winner: "Luke Surber", winner_school: "Oklahoma State", loser: "Tanner Harvey", loser_school: "Oregon State", result: "Dec 8-1" },
  { round: "ChampR1", weight: "197", bout: 154, winner: "Bernie Truax", winner_school: "Cal Poly", loser: "Austin Cooley", loser_school: "West Virginia", result: "MD 8-0" },

  // 285 lbs
  { round: "ChampR1", weight: "285", bout: 155, winner: "Mason Parris", winner_school: "Michigan", loser: "Garrett Joles", loser_school: "Minnesota", result: "MD 12-2" },
  { round: "ChampR1", weight: "285", bout: 156, winner: "Taye Ghadiali", winner_school: "Campbell", loser: "Tate Orndorff", loser_school: "Ohio State", result: "SV-1 3-1" },
  { round: "ChampR1", weight: "285", bout: 157, winner: "Lucas Davison", winner_school: "Northwestern", loser: "Boone Mcdermott", loser_school: "Rutgers", result: "Dec 6-1" },
  { round: "ChampR1", weight: "285", bout: 158, winner: "Sam Schuyler", winner_school: "Iowa State", loser: "Michael Wolfgram", loser_school: "West Virginia", result: "Dec 4-2" },
  { round: "ChampR1", weight: "285", bout: 159, winner: "Cohlton Schultz", winner_school: "Arizona State", loser: "Dorian Crosby", loser_school: "Bucknell", result: "MD 13-0" },
  { round: "ChampR1", weight: "285", bout: 160, winner: "Colton McKiernan", winner_school: "SIU Edwardsville", loser: "Nathan Taylor", loser_school: "Lehigh", result: "Dec 4-0" },
  { round: "ChampR1", weight: "285", bout: 161, winner: "Tyrell Gordon", winner_school: "Northern Iowa", loser: "Konner Doucet", loser_school: "Oklahoma State", result: "Dec 2-1" },
  { round: "ChampR1", weight: "285", bout: 162, winner: "Tony Cassioppi", winner_school: "Iowa", loser: "Jaron Smith", loser_school: "Maryland", result: "MD 10-0" },
  { round: "ChampR1", weight: "285", bout: 163, winner: "Greg Kerkvliet", winner_school: "Penn State", loser: "Hayden Copass", loser_school: "Purdue", result: "Fall 0:34" },
  { round: "ChampR1", weight: "285", bout: 164, winner: "AJ Nevills", winner_school: "South Dakota State", loser: "Jonah Niesenbaum", loser_school: "Duke", result: "Dec 8-1" },
  { round: "ChampR1", weight: "285", bout: 165, winner: "Trent Hillger", winner_school: "Wisconsin", loser: "Hunter Catka", loser_school: "Virginia Tech", result: "Dec 2-0" },
  { round: "ChampR1", weight: "285", bout: 166, winner: "Yaraslau Slavikouski", winner_school: "Harvard", loser: "Ben Goldin", loser_school: "Pennsylvania", result: "Dec 4-2" },
  { round: "ChampR1", weight: "285", bout: 167, winner: "Owen Trephan", winner_school: "NC State", loser: "Cory Day", loser_school: "Binghamton", result: "MD 9-0" },
  { round: "ChampR1", weight: "285", bout: 168, winner: "Zach Elam", winner_school: "Missouri", loser: "Jacob Bullock", loser_school: "Indiana", result: "Dec 4-1" },
  { round: "ChampR1", weight: "285", bout: 169, winner: "Grady Griess", winner_school: "Navy", loser: "Josh Heindselman", loser_school: "Oklahoma", result: "Dec 3-0" },
  { round: "ChampR1", weight: "285", bout: 170, winner: "Wyatt Hendrickson", winner_school: "Air Force", loser: "Trevor Tinker", loser_school: "Cal Poly", result: "Fall 1:54" },

  // 125 lbs
  { round: "ConsPrelims", weight: "125", bout: 171, winner: "Tanner Jordan", winner_school: "South Dakota State", loser: "Antonio Lorenzo", loser_school: "Cal Poly", result: "Dec 4-0" },

  // 133 lbs
  { round: "ConsPrelims", weight: "133", bout: 172, winner: "Ethan Rotondo", winner_school: "Cal Poly", loser: "McGwire Midkiff", loser_school: "North Dakota State", result: "Dec 7-2" },

  // 141 lbs
  { round: "ConsPrelims", weight: "141", bout: 173, winner: "Seth Koleno", winner_school: "Clarion", loser: "Josh Mason", loser_school: "Bloomsburg", result: "Fall 3:20" },

  // 149 lbs
  { round: "ConsPrelims", weight: "149", bout: 174, winner: "Isaiah Delgado", winner_school: "Utah Valley", loser: "Dylan Martinez", loser_school: "Air Force", result: "Dec 5-2" },

  // 157 lbs
  { round: "ConsPrelims", weight: "157", bout: 175, winner: "Jared Hill", winner_school: "Oklahoma", loser: "Nathan Lukez", loser_school: "Army West Point", result: "Dec 7-6" },

  // 165 lbs
  { round: "ConsPrelims", weight: "165", bout: 176, winner: "Evan Barczak", winner_school: "Drexel", loser: "Cole Moody", loser_school: "Wyoming", result: "MD 11-2" },

  // 174 lbs
  { round: "ConsPrelims", weight: "174", bout: 177, winner: "Jackson Turley", winner_school: "Rutgers", loser: "Will Miller", loser_school: "Appalachian State", result: "Dec 12-6" },

  // 184 lbs
  { round: "ConsPrelims", weight: "184", bout: 178, winner: "Jha`Quan Anderson", winner_school: "Gardner-Webb", loser: "Matthew Waddell", loser_school: "Chattanooga", result: "Dec 3-1" },

  // 197 lbs
  { round: "ConsPrelims", weight: "197", bout: 179, winner: "Andrew Davison", winner_school: "Northwestern", loser: "Cole Urbas", loser_school: "Pennsylvania", result: "MD 9-1" },

  // 285 lbs
  { round: "ConsPrelims", weight: "285", bout: 180, winner: "Hayden Copass", winner_school: "Purdue", loser: "Travis Stefanik", loser_school: "Princeton", result: "SV-1 3-1" },

  // 125 lbs
  { round: "ChampR2", weight: "125", bout: 181, winner: "Spencer Lee", winner_school: "Iowa", loser: "Jack Medley", loser_school: "Michigan", result: "TF-1.5 2:30 (17-0)" },
  { round: "ChampR2", weight: "125", bout: 182, winner: "Anthony Noto", winner_school: "Lock Haven", loser: "Eric Barnett", loser_school: "Wisconsin", result: "Dec 5-4" },
  { round: "ChampR2", weight: "125", bout: 183, winner: "Killian Cardinale", winner_school: "West Virginia", loser: "Jore Volk", loser_school: "Wyoming", result: "Dec 8-3" },
  { round: "ChampR2", weight: "125", bout: 184, winner: "Matt Ramos", winner_school: "Purdue", loser: "Jarrett Trombley", loser_school: "NC State", result: "TB-1 6-5" },
  { round: "ChampR2", weight: "125", bout: 185, winner: "Liam Cronin", winner_school: "Nebraska", loser: "Braxton Brown", loser_school: "Maryland", result: "Dec 8-4" },
  { round: "ChampR2", weight: "125", bout: 186, winner: "Eddie Ventresca", winner_school: "Virginia Tech", loser: "Patrick McKee", loser_school: "Minnesota", result: "Dec 3-2" },
  { round: "ChampR2", weight: "125", bout: 187, winner: "Brandon Courtney", winner_school: "Arizona State", loser: "Jack Wagner", loser_school: "North Carolina", result: "Dec 5-1" },
  { round: "ChampR2", weight: "125", bout: 188, winner: "Pat Glory", winner_school: "Princeton", loser: "Brett Ungar", loser_school: "Cornell", result: "MD 10-0" },

  // 133 lbs
  { round: "ChampR2", weight: "133", bout: 189, winner: "Roman Bravo-Young", winner_school: "Penn State", loser: "Brayden Palmer", loser_school: "Chattanooga", result: "Dec 5-2" },
  { round: "ChampR2", weight: "133", bout: 190, winner: "Aaron Nagao", winner_school: "Minnesota", loser: "Micky Phillippi", loser_school: "Pittsburgh", result: "Fall 2:50" },
  { round: "ChampR2", weight: "133", bout: 191, winner: "Kai Orine", winner_school: "NC State", loser: "Chance Rich", loser_school: "CSU Bakersfield", result: "MD 12-2" },
  { round: "ChampR2", weight: "133", bout: 192, winner: "Michael McGee", winner_school: "Arizona State", loser: "Jesse Mendez", loser_school: "Ohio State", result: "Dec 6-2" },
  { round: "ChampR2", weight: "133", bout: 193, winner: "Vito Arujau", winner_school: "Cornell", loser: "Zach Redding", loser_school: "Iowa State", result: "MD 12-4" },
  { round: "ChampR2", weight: "133", bout: 194, winner: "Sam Latona", winner_school: "Virginia Tech", loser: "Cody Phippen", loser_school: "Air Force", result: "Dec 2-1" },
  { round: "ChampR2", weight: "133", bout: 195, winner: "Lucas Byrd", winner_school: "Illinois", loser: "Michael Colaiocco", loser_school: "Pennsylvania", result: "Dec 6-3" },
  { round: "ChampR2", weight: "133", bout: 196, winner: "Daton Fix", winner_school: "Oklahoma State", loser: "Kyle Biscoglia", loser_school: "Northern Iowa", result: "Dec 8-4" },

  // 141 lbs
  { round: "ChampR2", weight: "141", bout: 197, winner: "Real Woods", winner_school: "Iowa", loser: "Dylan D`Emilio", loser_school: "Ohio State", result: "Dec 7-5" },
  { round: "ChampR2", weight: "141", bout: 198, winner: "Allan Hart", winner_school: "Missouri", loser: "Mosha Schwartz", loser_school: "Oklahoma", result: "TB2 2-2" },
  { round: "ChampR2", weight: "141", bout: 199, winner: "Parker Filius", winner_school: "Purdue", loser: "Ryan Jack", loser_school: "NC State", result: "Dec 7-6" },
  { round: "ChampR2", weight: "141", bout: 200, winner: "Brock Hardy", winner_school: "Nebraska", loser: "Jakob Bergeland", loser_school: "Minnesota", result: "Dec 5-1" },
  { round: "ChampR2", weight: "141", bout: 201, winner: "Cole Matthews", winner_school: "Pittsburgh", loser: "Cael Happel", loser_school: "Northern Iowa", result: "Dec 1-0" },
  { round: "ChampR2", weight: "141", bout: 202, winner: "Beau Bartlett", winner_school: "Penn State", loser: "Clay Carlson", loser_school: "South Dakota State", result: "Dec 3-2" },
  { round: "ChampR2", weight: "141", bout: 203, winner: "Lachlan McNeil", winner_school: "North Carolina", loser: "Vince Cornella", loser_school: "Cornell", result: "Dec 2-1" },
  { round: "ChampR2", weight: "141", bout: 204, winner: "Andrew Alirez", winner_school: "Northern Colorado", loser: "Frankie Tal Shahar", loser_school: "Northwestern", result: "Dec 8-5" },

  // 149 lbs
  { round: "ChampR2", weight: "149", bout: 205, winner: "Yianni Diakomihalis", winner_school: "Cornell", loser: "Jackson Arrington", loser_school: "NC State", result: "Fall 2:11" },
  { round: "ChampR2", weight: "149", bout: 206, winner: "Max Murin", winner_school: "Iowa", loser: "Jaden Abas", loser_school: "Stanford", result: "Dec 3-1" },
  { round: "ChampR2", weight: "149", bout: 207, winner: "Shayne Van Ness", winner_school: "Penn State", loser: "Paniro Johnson", loser_school: "Iowa State", result: "Dec 14-8" },
  { round: "ChampR2", weight: "149", bout: 208, winner: "Graham Rooks", winner_school: "Indiana", loser: "Caleb Henson", loser_school: "Virginia Tech", result: "Dec 5-4" },
  { round: "ChampR2", weight: "149", bout: 209, winner: "Kyle Parco", winner_school: "Arizona State", loser: "Austin Gomez", loser_school: "Wisconsin", result: "Dec 6-3" },
  { round: "ChampR2", weight: "149", bout: 210, winner: "Brock Mauller", winner_school: "Missouri", loser: "Chance Lamer", loser_school: "Michigan", result: "Dec 4-1" },
  { round: "ChampR2", weight: "149", bout: 211, winner: "Yahya Thomas", winner_school: "Northwestern", loser: "Michael Blockhus", loser_school: "Minnesota", result: "SV-1 3-1" },
  { round: "ChampR2", weight: "149", bout: 212, winner: "Sammy Sasso", winner_school: "Ohio State", loser: "Colin Realbuto", loser_school: "Northern Iowa", result: "Dec 9-2" },

  // 157 lbs
  { round: "ChampR2", weight: "157", bout: 213, winner: "Austin O`Connor", winner_school: "North Carolina", loser: "Jarrett Jacques", loser_school: "Missouri", result: "Dec 4-1" },
  { round: "ChampR2", weight: "157", bout: 214, winner: "Will Lewan", winner_school: "Michigan", loser: "Ed Scott", loser_school: "NC State", result: "Dec 7-5" },
  { round: "ChampR2", weight: "157", bout: 215, winner: "Josh Humphreys", winner_school: "Lehigh", loser: "Kendall Coleman", loser_school: "Purdue", result: "Dec 3-0" },
  { round: "ChampR2", weight: "157", bout: 216, winner: "Jared Franek", winner_school: "North Dakota State", loser: "Trevor Chumbley", loser_school: "Northwestern", result: "Dec 5-3" },
  { round: "ChampR2", weight: "157", bout: 217, winner: "Peyton Robb", winner_school: "Nebraska", loser: "Garrett Model", loser_school: "Wisconsin", result: "TF-1.5 5:40 (16-1)" },
  { round: "ChampR2", weight: "157", bout: 218, winner: "Daniel Cardenas", winner_school: "Stanford", loser: "Derek Holschlag", loser_school: "Northern Iowa", result: "Dec 6-1" },
  { round: "ChampR2", weight: "157", bout: 219, winner: "Bryce Andonian", winner_school: "Virginia Tech", loser: "Kaden Gfeller", loser_school: "Oklahoma State", result: "MD 11-3" },
  { round: "ChampR2", weight: "157", bout: 220, winner: "Levi Haines", winner_school: "Penn State", loser: "Jacob Wright", loser_school: "Wyoming", result: "Dec 8-2" },

  // 165 lbs
  { round: "ChampR2", weight: "165", bout: 221, winner: "David Carr", winner_school: "Iowa State", loser: "Austin Yant", loser_school: "Northern Iowa", result: "MD 15-4" },
  { round: "ChampR2", weight: "165", bout: 222, winner: "Shane Griffith", winner_school: "Stanford", loser: "Bubba Wilson", loser_school: "Nebraska", result: "MD 10-0" },
  { round: "ChampR2", weight: "165", bout: 223, winner: "Quincy Monday", winner_school: "Princeton", loser: "Izzak Olejnik", loser_school: "Northern Illinois", result: "Dec 4-1" },
  { round: "ChampR2", weight: "165", bout: 224, winner: "Caleb Fish", winner_school: "Michigan State", loser: "Holden Heller", loser_school: "Pittsburgh", result: "Dec 7-2" },
  { round: "ChampR2", weight: "165", bout: 225, winner: "Dean Hamiti", winner_school: "Wisconsin", loser: "Dan Braunagel", loser_school: "Illinois", result: "Fall 2:47" },
  { round: "ChampR2", weight: "165", bout: 226, winner: "Cameron Amine", winner_school: "Michigan", loser: "Patrick Kennedy", loser_school: "Iowa", result: "Dec 3-2" },
  { round: "ChampR2", weight: "165", bout: 227, winner: "Carson Kharchla", winner_school: "Ohio State", loser: "Michael Caliendo III", loser_school: "North Dakota State", result: "Dec 8-3" },
  { round: "ChampR2", weight: "165", bout: 228, winner: "Keegan O`Toole", winner_school: "Missouri", loser: "Justin McCoy", loser_school: "Virginia", result: "Dec 5-2" },

  // 174 lbs
  { round: "ChampR2", weight: "174", bout: 229, winner: "Carter Starocci", winner_school: "Penn State", loser: "Donnell Washington", loser_school: "Indiana", result: "Dec 4-0" },
  { round: "ChampR2", weight: "174", bout: 230, winner: "Bailee O`Reilly", winner_school: "Minnesota", loser: "Edmond Ruth", loser_school: "Illinois", result: "Dec 4-2" },
  { round: "ChampR2", weight: "174", bout: 231, winner: "Dustin Plott", winner_school: "Oklahoma State", loser: "Aaron Olmos", loser_school: "Oregon State", result: "Dec 10-6" },
  { round: "ChampR2", weight: "174", bout: 232, winner: "Chris Foca", winner_school: "Cornell", loser: "Cade DeVos", loser_school: "South Dakota State", result: "Dec 8-2" },
  { round: "ChampR2", weight: "174", bout: 233, winner: "Mekhi Lewis", winner_school: "Virginia Tech", loser: "Troy Fisher", loser_school: "Northwestern", result: "Dec 5-4" },
  { round: "ChampR2", weight: "174", bout: 234, winner: "Nelson Brands", winner_school: "Iowa", loser: "Ethan Smith", loser_school: "Ohio State", result: "Dec 3-1" },
  { round: "ChampR2", weight: "174", bout: 235, winner: "Peyton Mocco", winner_school: "Missouri", loser: "Mickey O`Malley", loser_school: "Drexel", result: "Dec 8-2" },
  { round: "ChampR2", weight: "174", bout: 236, winner: "Mikey Labriola", winner_school: "Nebraska", loser: "Demetrius Romero", loser_school: "Utah Valley", result: "Dec 3-1" },

  // 184 lbs
  { round: "ChampR2", weight: "184", bout: 237, winner: "Parker Keckeisen", winner_school: "Northern Iowa", loser: "Tate Samuelson", loser_school: "Lehigh", result: "Dec 4-2" },
  { round: "ChampR2", weight: "184", bout: 238, winner: "Isaiah Salazar", winner_school: "Minnesota", loser: "Brian Bonino", loser_school: "Drexel", result: "MD 12-0" },
  { round: "ChampR2", weight: "184", bout: 239, winner: "Marcus Coleman", winner_school: "Iowa State", loser: "Abe Assad", loser_school: "Iowa", result: "TB-1 2-1" },
  { round: "ChampR2", weight: "184", bout: 240, winner: "Trey Munoz", winner_school: "Oregon State", loser: "Neil Antrassian", loser_school: "Virginia", result: "Dec 6-2" },
  { round: "ChampR2", weight: "184", bout: 241, winner: "Aaron Brooks", winner_school: "Penn State", loser: "Will Feldkamp", loser_school: "Clarion", result: "Fall 4:59" },
  { round: "ChampR2", weight: "184", bout: 242, winner: "Kaleb Romero", winner_school: "Ohio State", loser: "Colton Hawks", loser_school: "Missouri", result: "Dec 5-3" },
  { round: "ChampR2", weight: "184", bout: 243, winner: "Hunter Bolen", winner_school: "Virginia Tech", loser: "Travis Wittlake", loser_school: "Oklahoma State", result: "Dec 6-1" },
  { round: "ChampR2", weight: "184", bout: 244, winner: "Trent Hidlay", winner_school: "NC State", loser: "Brian Soldano", loser_school: "Rutgers", result: "MD 12-4" },

  // 197 lbs
  { round: "ChampR2", weight: "197", bout: 245, winner: "Nino Bonaccorsi", winner_school: "Pittsburgh", loser: "Owen Pentz", loser_school: "North Dakota State", result: "Dec 8-2" },
  { round: "ChampR2", weight: "197", bout: 246, winner: "Silas Allred", winner_school: "Nebraska", loser: "Max Dean", loser_school: "Penn State", result: "Dec 7-2" },
  { round: "ChampR2", weight: "197", bout: 247, winner: "Zac Braunagel", winner_school: "Illinois", loser: "Michael Beard", loser_school: "Lehigh", result: "Dec 7-6" },
  { round: "ChampR2", weight: "197", bout: 248, winner: "Ethan Laird", winner_school: "Rider", loser: "Yonger Bastida", loser_school: "Iowa State", result: "Dec 3-1" },
  { round: "ChampR2", weight: "197", bout: 249, winner: "Rocky Elam", winner_school: "Missouri", loser: "Jacob Warner", loser_school: "Iowa", result: "Dec 6-2" },
  { round: "ChampR2", weight: "197", bout: 250, winner: "Jaxon Smith", winner_school: "Maryland", loser: "Isaac Trumble", loser_school: "NC State", result: "Fall 2:16" },
  { round: "ChampR2", weight: "197", bout: 251, winner: "Tanner Sloan", winner_school: "South Dakota State", loser: "Jacob Cardenas", loser_school: "Cornell", result: "Dec 4-0" },
  { round: "ChampR2", weight: "197", bout: 252, winner: "Bernie Truax", winner_school: "Cal Poly", loser: "Luke Surber", loser_school: "Oklahoma State", result: "Dec 8-2" },

  // 285 lbs
  { round: "ChampR2", weight: "285", bout: 253, winner: "Mason Parris", winner_school: "Michigan", loser: "Taye Ghadiali", loser_school: "Campbell", result: "Dec 6-1" },
  { round: "ChampR2", weight: "285", bout: 254, winner: "Lucas Davison", winner_school: "Northwestern", loser: "Sam Schuyler", loser_school: "Iowa State", result: "Dec 2-1" },
  { round: "ChampR2", weight: "285", bout: 255, winner: "Cohlton Schultz", winner_school: "Arizona State", loser: "Colton McKiernan", loser_school: "SIU Edwardsville", result: "Fall 6:10" },
  { round: "ChampR2", weight: "285", bout: 256, winner: "Tony Cassioppi", winner_school: "Iowa", loser: "Tyrell Gordon", loser_school: "Northern Iowa", result: "MD 9-0" },
  { round: "ChampR2", weight: "285", bout: 257, winner: "Greg Kerkvliet", winner_school: "Penn State", loser: "AJ Nevills", loser_school: "South Dakota State", result: "MD 14-2" },
  { round: "ChampR2", weight: "285", bout: 258, winner: "Trent Hillger", winner_school: "Wisconsin", loser: "Yaraslau Slavikouski", loser_school: "Harvard", result: "Dec 1-0" },
  { round: "ChampR2", weight: "285", bout: 259, winner: "Zach Elam", winner_school: "Missouri", loser: "Owen Trephan", loser_school: "NC State", result: "Dec 4-0" },
  { round: "ChampR2", weight: "285", bout: 260, winner: "Wyatt Hendrickson", winner_school: "Air Force", loser: "Grady Griess", loser_school: "Navy", result: "MD 14-1" },

  // 125 lbs
  { round: "ConsR1", weight: "125", bout: 261, winner: "Tucker Owens", winner_school: "Air Force", loser: "Ethan Berginc", loser_school: "Army West Point", result: "Dec 9-7" },
  { round: "ConsR1", weight: "125", bout: 262, winner: "Nick Babin", winner_school: "Columbia", loser: "Joey Prata", loser_school: "Oklahoma", result: "Dec 2-0" },
  { round: "ConsR1", weight: "125", bout: 263, winner: "Michael DeAugustino", winner_school: "Northwestern", loser: "Caleb Smith", loser_school: "Appalachian State", result: "Dec 7-2" },
  { round: "ConsR1", weight: "125", bout: 264, winner: "Dean Peterson", winner_school: "Rutgers", loser: "Nico Provo", loser_school: "Stanford", result: "Dec 4-1" },
  { round: "ConsR1", weight: "125", bout: 265, winner: "Noah Surtin", winner_school: "Missouri", loser: "Tanner Jordan", loser_school: "South Dakota State", result: "Fall 4:26" },
  { round: "ConsR1", weight: "125", bout: 266, winner: "Stevo Poulin", winner_school: "Northern Colorado", loser: "Diego Sotelo", loser_school: "Harvard", result: "Dec 11-4" },
  { round: "ConsR1", weight: "125", bout: 267, winner: "Brandon Kaylor", winner_school: "Oregon State", loser: "Jake Ferri", loser_school: "Kent State", result: "Dec 11-6" },
  { round: "ConsR1", weight: "125", bout: 268, winner: "Ryan Miller", winner_school: "Pennsylvania", loser: "Reece Witcraft", loser_school: "Oklahoma State", result: "Inj. 4:26" },

  // 133 lbs
  { round: "ConsR1", weight: "133", bout: 269, winner: "Joe Heilmann", winner_school: "Rutgers", loser: "Ethan Oakley", loser_school: "Appalachian State", result: "Dec 8-4" },
  { round: "ConsR1", weight: "133", bout: 270, winner: "Wyatt Henson", winner_school: "Oklahoma", loser: "Kurtis Phipps", loser_school: "Bucknell", result: "Dec 7-2" },
  { round: "ConsR1", weight: "133", bout: 271, winner: "Chris Cannon", winner_school: "Northwestern", loser: "Gable Strickland", loser_school: "Lock Haven", result: "MD 12-0" },
  { round: "ConsR1", weight: "133", bout: 272, winner: "Angelo Rini", winner_school: "Columbia", loser: "Brendan Ferretti", loser_school: "Navy", result: "Dec 14-9" },
  { round: "ConsR1", weight: "133", bout: 273, winner: "Domenic Zaccone", winner_school: "Campbell", loser: "Ethan Rotondo", loser_school: "Cal Poly", result: "Fall 6:40" },
  { round: "ConsR1", weight: "133", bout: 274, winner: "Dylan Ragusin", winner_school: "Michigan", loser: "Taylor Lamont", loser_school: "Wisconsin", result: "Dec 7-5" },
  { round: "ConsR1", weight: "133", bout: 275, winner: "Brody Teske", winner_school: "Iowa", loser: "Connor Brown", loser_school: "Missouri", result: "Dec 11-5" },
  { round: "ConsR1", weight: "133", bout: 276, winner: "Jack Maida", winner_school: "American", loser: "Jason Shaner", loser_school: "Oregon State", result: "Fall 5:17" },

  // 141 lbs
  { round: "ConsR1", weight: "141", bout: 277, winner: "Kal Miller", winner_school: "Maryland", loser: "Josh Koderhandt", loser_school: "Navy", result: "Dec 5-3" },
  { round: "ConsR1", weight: "141", bout: 278, winner: "Casey Swiderski", winner_school: "Iowa State", loser: "Carmen Ferrante", loser_school: "Pennsylvania", result: "Dec 7-3" },
  { round: "ConsR1", weight: "141", bout: 279, winner: "Saul Ervin", winner_school: "SIU Edwardsville", loser: "Cleveland Belton", loser_school: "Oregon State", result: "Dec 5-2" },
  { round: "ConsR1", weight: "141", bout: 280, winner: "Jordan Titus", winner_school: "West Virginia", loser: "Carter Young", loser_school: "Oklahoma State", result: "Dec 4-1" },
  { round: "ConsR1", weight: "141", bout: 281, winner: "Matt Kazimir", winner_school: "Columbia", loser: "Seth Koleno", loser_school: "Clarion", result: "Dec 4-1" },
  { round: "ConsR1", weight: "141", bout: 282, winner: "Malyke Hines", winner_school: "Lehigh", loser: "Shannon Hanna", loser_school: "Campbell", result: "Dec 5-4" },
  { round: "ConsR1", weight: "141", bout: 283, winner: "Cole Mattin", winner_school: "Michigan", loser: "McKenzie Bell", loser_school: "Rider", result: "Fall 1:31" },
  { round: "ConsR1", weight: "141", bout: 284, winner: "Tom Crook", winner_school: "Virginia Tech", loser: "Joseph Zargo", loser_school: "Wisconsin", result: "SV-1 4-2" },

  // 149 lbs
  { round: "ConsR1", weight: "149", bout: 285, winner: "Dom Demas", winner_school: "Cal Poly", loser: "Quinn Kinner", loser_school: "Rider", result: "Dec 8-2" },
  { round: "ConsR1", weight: "149", bout: 286, winner: "Caleb Tyus", winner_school: "SIU Edwardsville", loser: "Ryan Burgos", loser_school: "Edinboro", result: "Dec 8-1" },
  { round: "ConsR1", weight: "149", bout: 287, winner: "Ethen Miller", winner_school: "Maryland", loser: "Alec Hagan", loser_school: "Ohio", result: "Dec 4-0" },
  { round: "ConsR1", weight: "149", bout: 288, winner: "Kellyn March", winner_school: "North Dakota State", loser: "Dylan Chappell", loser_school: "Bucknell", result: "Fall 4:14" },
  { round: "ConsR1", weight: "149", bout: 289, winner: "Johnny Lovett", winner_school: "Central Michigan", loser: "Isaiah Delgado", loser_school: "Utah Valley", result: "Dec 7-1" },
  { round: "ConsR1", weight: "149", bout: 290, winner: "Doug Zapf", winner_school: "Pennsylvania", loser: "Jarod Verkleeren", loser_school: "Virginia", result: "Dec 5-1" },
  { round: "ConsR1", weight: "149", bout: 291, winner: "Victor Voinovich", winner_school: "Oklahoma State", loser: "Nate Higley", loser_school: "George Mason", result: "Dec 15-8" },
  { round: "ConsR1", weight: "149", bout: 292, winner: "Mitch Moore", winner_school: "Oklahoma", loser: "Anthony White", loser_school: "Rutgers", result: "Dec 3-0" },

  // 157 lbs
  { round: "ConsR1", weight: "157", bout: 293, winner: "Vinny Zerban", winner_school: "Northern Colorado", loser: "Anthony Artalona", loser_school: "Pennsylvania", result: "SV-1 3-1" },
  { round: "ConsR1", weight: "157", bout: 294, winner: "Jason Kraisser", winner_school: "Iowa State", loser: "Tommy Askey", loser_school: "Appalachian State", result: "Dec 7-2" },
  { round: "ConsR1", weight: "157", bout: 295, winner: "Paddy Gallagher", winner_school: "Ohio State", loser: "Andrew Clark", loser_school: "Rutgers", result: "SV-1 3-1" },
  { round: "ConsR1", weight: "157", bout: 296, winner: "Cael Swensen", winner_school: "South Dakota State", loser: "Corbyn Munson", loser_school: "Central Michigan", result: "Dec 7-0" },
  { round: "ConsR1", weight: "157", bout: 297, winner: "Cobe Siebrecht", winner_school: "Iowa", loser: "Jared Hill", loser_school: "Oklahoma", result: "MD 10-2" },
  { round: "ConsR1", weight: "157", bout: 298, winner: "Chase Saldate", winner_school: "Michigan State", loser: "Cesar Alvan", loser_school: "Columbia", result: "Fall 2:59" },
  { round: "ConsR1", weight: "157", bout: 299, winner: "Peter Pappas", winner_school: "George Mason", loser: "Peyten Kellar", loser_school: "Ohio", result: "Dec 3-1" },
  { round: "ConsR1", weight: "157", bout: 300, winner: "Derek Gilcher", winner_school: "Indiana", loser: "Ashton Eyler", loser_school: "Lock Haven", result: "Dec 6-3" },

  // 165 lbs
  { round: "ConsR1", weight: "165", bout: 301, winner: "Joshua Ogunsanya", winner_school: "Columbia", loser: "Josh Kim", loser_school: "Harvard", result: "SV-1 3-1" },
  { round: "ConsR1", weight: "165", bout: 302, winner: "Matthew Olguin", winner_school: "Oregon State", loser: "Rodrick Mosley", loser_school: "Gardner-Webb", result: "Dec 6-1" },
  { round: "ConsR1", weight: "165", bout: 303, winner: "Andrew Sparks", winner_school: "Minnesota", loser: "Gerrit Nijenhuis", loser_school: "Oklahoma", result: "MD 12-3" },
  { round: "ConsR1", weight: "165", bout: 304, winner: "Julian Ramirez", winner_school: "Cornell", loser: "Alex Facundo", loser_school: "Penn State", result: "MD 12-2" },
  { round: "ConsR1", weight: "165", bout: 305, winner: "Peyton Hall", winner_school: "West Virginia", loser: "Evan Barczak", loser_school: "Drexel", result: "Dec 4-3" },
  { round: "ConsR1", weight: "165", bout: 306, winner: "Tanner Cook", winner_school: "South Dakota State", loser: "Will Formato", loser_school: "Appalachian State", result: "Fall 1:11" },
  { round: "ConsR1", weight: "165", bout: 307, winner: "Connor Brady", winner_school: "Virginia Tech", loser: "Brevin Cassella", loser_school: "Binghamton", result: "Dec 5-0" },
  { round: "ConsR1", weight: "165", bout: 308, winner: "Wyatt Sheets", winner_school: "Oklahoma State", loser: "Maxx Mayfield", loser_school: "Northwestern", result: "Dec 7-2" },

  // 174 lbs
  { round: "ConsR1", weight: "174", bout: 309, winner: "John Worthing", winner_school: "Clarion", loser: "Sam Wolf", loser_school: "Air Force", result: "MD 12-1" },
  { round: "ConsR1", weight: "174", bout: 310, winner: "Philip Conigliaro", winner_school: "Harvard", loser: "Nick Incontrera", loser_school: "Pennsylvania", result: "Dec 6-4" },
  { round: "ConsR1", weight: "174", bout: 311, winner: "Lennox Wolak", winner_school: "Columbia", loser: "Luca Augustine", loser_school: "Pittsburgh", result: "Dec 3-1" },
  { round: "ConsR1", weight: "174", bout: 312, winner: "Alex Cramer", winner_school: "Central Michigan", loser: "Cael Valencia", loser_school: "Arizona State", result: "Dec 7-5" },
  { round: "ConsR1", weight: "174", bout: 313, winner: "Benjamin Pasiuk", winner_school: "Army West Point", loser: "Jackson Turley", loser_school: "Rutgers", result: "Dec 12-9" },
  { round: "ConsR1", weight: "174", bout: 314, winner: "Tyler Eischens", winner_school: "Stanford", loser: "Alex Faison", loser_school: "NC State", result: "Dec 3-2" },
  { round: "ConsR1", weight: "174", bout: 315, winner: "Rocky Jordan", winner_school: "Chattanooga", loser: "Sal Perrine", loser_school: "Ohio", result: "MD 12-0" },
  { round: "ConsR1", weight: "174", bout: 316, winner: "Tate Picklo", winner_school: "Oklahoma", loser: "Tyler Stoltzfus", loser_school: "Lock Haven", result: "MD 11-3" },

  // 184 lbs
  { round: "ConsR1", weight: "184", bout: 317, winner: "Reece Heller", winner_school: "Pittsburgh", loser: "Anthony Carman", loser_school: "West Virginia", result: "Dec 11-4" },
  { round: "ConsR1", weight: "184", bout: 318, winner: "Matt Finesilver", winner_school: "Michigan", loser: "Cade King", loser_school: "South Dakota State", result: "Dec 7-2" },
  { round: "ConsR1", weight: "184", bout: 319, winner: "Giuseppe Hoose", winner_school: "Buffalo", loser: "Jacob Ferreira", loser_school: "Hofstra", result: "Dec 6-4" },
  { round: "ConsR1", weight: "184", bout: 320, winner: "Lenny Pinto", winner_school: "Nebraska", loser: "Deanthony Parker", loser_school: "North Dakota State", result: "Dec 7-1" },
  { round: "ConsR1", weight: "184", bout: 321, winner: "Jacob Nolan", winner_school: "Binghamton", loser: "Jha`Quan Anderson", loser_school: "Gardner-Webb", result: "MD 12-1" },
  { round: "ConsR1", weight: "184", bout: 322, winner: "Gavin Kane", winner_school: "North Carolina", loser: "Caleb Hopkins", loser_school: "Campbell", result: "SV-1 4-2" },
  { round: "ConsR1", weight: "184", bout: 323, winner: "David Key", winner_school: "Navy", loser: "Dylan Connell", loser_school: "Illinois", result: "Dec 8-4" },
  { round: "ConsR1", weight: "184", bout: 324, winner: "Layne Malczewski", winner_school: "Michigan State", loser: "Zayne Lehman", loser_school: "Ohio", result: "Dec 3-0" },

  // 197 lbs
  { round: "ConsR1", weight: "197", bout: 325, winner: "Max Shaw", winner_school: "North Carolina", loser: "Braxton Amos", loser_school: "Wisconsin", result: "M. For." },
  { round: "ConsR1", weight: "197", bout: 326, winner: "Levi Hopkins", winner_school: "Campbell", loser: "Michael Battista", loser_school: "Virginia", result: "Dec 6-4" },
  { round: "ConsR1", weight: "197", bout: 327, winner: "Jacob Koser", winner_school: "Navy", loser: "Andy Smith", loser_school: "Virginia Tech", result: "Dec 6-4" },
  { round: "ConsR1", weight: "197", bout: 328, winner: "Evan Bockman", winner_school: "Utah Valley", loser: "Trey Rogers", loser_school: "Hofstra", result: "Dec 13-6" },
  { round: "ConsR1", weight: "197", bout: 329, winner: "Andrew Davison", winner_school: "Northwestern", loser: "Cameron Caffey", loser_school: "Michigan State", result: "Dec 3-2" },
  { round: "ConsR1", weight: "197", bout: 330, winner: "Nick Stemmet", winner_school: "Stanford", loser: "Michial Foy", loser_school: "Minnesota", result: "Dec 6-5" },
  { round: "ConsR1", weight: "197", bout: 331, winner: "Gavin Hoffman", winner_school: "Ohio State", loser: "Luke Stout", loser_school: "Princeton", result: "Dec 10-4" },
  { round: "ConsR1", weight: "197", bout: 332, winner: "Tanner Harvey", winner_school: "Oregon State", loser: "Austin Cooley", loser_school: "West Virginia", result: "MD 10-2" },

  // 285 lbs
  { round: "ConsR1", weight: "285", bout: 333, winner: "Tate Orndorff", winner_school: "Ohio State", loser: "Garrett Joles", loser_school: "Minnesota", result: "Dec 6-3" },
  { round: "ConsR1", weight: "285", bout: 334, winner: "Michael Wolfgram", winner_school: "West Virginia", loser: "Boone Mcdermott", loser_school: "Rutgers", result: "Dec 6-3" },
  { round: "ConsR1", weight: "285", bout: 335, winner: "Nathan Taylor", winner_school: "Lehigh", loser: "Dorian Crosby", loser_school: "Bucknell", result: "MD 11-1" },
  { round: "ConsR1", weight: "285", bout: 336, winner: "Jaron Smith", winner_school: "Maryland", loser: "Konner Doucet", loser_school: "Oklahoma State", result: "Dec 7-3" },
  { round: "ConsR1", weight: "285", bout: 337, winner: "Jonah Niesenbaum", winner_school: "Duke", loser: "Hayden Copass", loser_school: "Purdue", result: "Dec 6-0" },
  { round: "ConsR1", weight: "285", bout: 338, winner: "Ben Goldin", winner_school: "Pennsylvania", loser: "Hunter Catka", loser_school: "Virginia Tech", result: "Dec 5-2" },
  { round: "ConsR1", weight: "285", bout: 339, winner: "Jacob Bullock", winner_school: "Indiana", loser: "Cory Day", loser_school: "Binghamton", result: "Dec 11-5" },
  { round: "ConsR1", weight: "285", bout: 340, winner: "Josh Heindselman", winner_school: "Oklahoma", loser: "Trevor Tinker", loser_school: "Cal Poly", result: "MD 14-6" },

  // 125 lbs
  { round: "QtrFinals", weight: "125", bout: 341, winner: "Spencer Lee", winner_school: "Iowa", loser: "Anthony Noto", loser_school: "Lock Haven", result: "MD 14-4" },
  { round: "QtrFinals", weight: "125", bout: 342, winner: "Matt Ramos", winner_school: "Purdue", loser: "Killian Cardinale", loser_school: "West Virginia", result: "Dec 8-7" },
  { round: "QtrFinals", weight: "125", bout: 343, winner: "Liam Cronin", winner_school: "Nebraska", loser: "Eddie Ventresca", loser_school: "Virginia Tech", result: "SV-1 3-1" },
  { round: "QtrFinals", weight: "125", bout: 344, winner: "Pat Glory", winner_school: "Princeton", loser: "Brandon Courtney", loser_school: "Arizona State", result: "Dec 8-4" },

  // 133 lbs
  { round: "QtrFinals", weight: "133", bout: 345, winner: "Roman Bravo-Young", winner_school: "Penn State", loser: "Aaron Nagao", loser_school: "Minnesota", result: "Dec 4-1" },
  { round: "QtrFinals", weight: "133", bout: 346, winner: "Michael McGee", winner_school: "Arizona State", loser: "Kai Orine", loser_school: "NC State", result: "Dec 8-2" },
  { round: "QtrFinals", weight: "133", bout: 347, winner: "Vito Arujau", winner_school: "Cornell", loser: "Sam Latona", loser_school: "Virginia Tech", result: "Dec 8-5" },
  { round: "QtrFinals", weight: "133", bout: 348, winner: "Daton Fix", winner_school: "Oklahoma State", loser: "Lucas Byrd", loser_school: "Illinois", result: "Dec 3-2" },

  // 141 lbs
  { round: "QtrFinals", weight: "141", bout: 349, winner: "Real Woods", winner_school: "Iowa", loser: "Allan Hart", loser_school: "Missouri", result: "MD 9-0" },
  { round: "QtrFinals", weight: "141", bout: 350, winner: "Brock Hardy", winner_school: "Nebraska", loser: "Parker Filius", loser_school: "Purdue", result: "Dec 7-0" },
  { round: "QtrFinals", weight: "141", bout: 351, winner: "Beau Bartlett", winner_school: "Penn State", loser: "Cole Matthews", loser_school: "Pittsburgh", result: "TB-1 3-1" },
  { round: "QtrFinals", weight: "141", bout: 352, winner: "Andrew Alirez", winner_school: "Northern Colorado", loser: "Lachlan McNeil", loser_school: "North Carolina", result: "Dec 6-4" },

  // 149 lbs
  { round: "QtrFinals", weight: "149", bout: 353, winner: "Yianni Diakomihalis", winner_school: "Cornell", loser: "Max Murin", loser_school: "Iowa", result: "Dec 8-7" },
  { round: "QtrFinals", weight: "149", bout: 354, winner: "Shayne Van Ness", winner_school: "Penn State", loser: "Graham Rooks", loser_school: "Indiana", result: "Dec 10-7" },
  { round: "QtrFinals", weight: "149", bout: 355, winner: "Kyle Parco", winner_school: "Arizona State", loser: "Brock Mauller", loser_school: "Missouri", result: "Dec 4-3" },
  { round: "QtrFinals", weight: "149", bout: 356, winner: "Sammy Sasso", winner_school: "Ohio State", loser: "Yahya Thomas", loser_school: "Northwestern", result: "Dec 2-1" },

  // 157 lbs
  { round: "QtrFinals", weight: "157", bout: 357, winner: "Austin O`Connor", winner_school: "North Carolina", loser: "Will Lewan", loser_school: "Michigan", result: "MD 10-2" },
  { round: "QtrFinals", weight: "157", bout: 358, winner: "Josh Humphreys", winner_school: "Lehigh", loser: "Jared Franek", loser_school: "North Dakota State", result: "Dec 5-2" },
  { round: "QtrFinals", weight: "157", bout: 359, winner: "Peyton Robb", winner_school: "Nebraska", loser: "Daniel Cardenas", loser_school: "Stanford", result: "Dec 6-4" },
  { round: "QtrFinals", weight: "157", bout: 360, winner: "Levi Haines", winner_school: "Penn State", loser: "Bryce Andonian", loser_school: "Virginia Tech", result: "Fall 6:12" },

  // 165 lbs
  { round: "QtrFinals", weight: "165", bout: 361, winner: "David Carr", winner_school: "Iowa State", loser: "Shane Griffith", loser_school: "Stanford", result: "Dec 2-1" },
  { round: "QtrFinals", weight: "165", bout: 362, winner: "Quincy Monday", winner_school: "Princeton", loser: "Caleb Fish", loser_school: "Michigan State", result: "Dec 10-4" },
  { round: "QtrFinals", weight: "165", bout: 363, winner: "Cameron Amine", winner_school: "Michigan", loser: "Dean Hamiti", loser_school: "Wisconsin", result: "Dec 3-2" },
  { round: "QtrFinals", weight: "165", bout: 364, winner: "Keegan O`Toole", winner_school: "Missouri", loser: "Carson Kharchla", loser_school: "Ohio State", result: "TF-1.5 7:00 (19-4)" },

  // 174 lbs
  { round: "QtrFinals", weight: "174", bout: 365, winner: "Carter Starocci", winner_school: "Penn State", loser: "Bailee O`Reilly", loser_school: "Minnesota", result: "Dec 5-2" },
  { round: "QtrFinals", weight: "174", bout: 366, winner: "Chris Foca", winner_school: "Cornell", loser: "Dustin Plott", loser_school: "Oklahoma State", result: "Fall 1:54" },
  { round: "QtrFinals", weight: "174", bout: 367, winner: "Mekhi Lewis", winner_school: "Virginia Tech", loser: "Nelson Brands", loser_school: "Iowa", result: "Dec 2-0" },
  { round: "QtrFinals", weight: "174", bout: 368, winner: "Mikey Labriola", winner_school: "Nebraska", loser: "Peyton Mocco", loser_school: "Missouri", result: "Dec 4-3" },

  // 184 lbs
  { round: "QtrFinals", weight: "184", bout: 369, winner: "Parker Keckeisen", winner_school: "Northern Iowa", loser: "Isaiah Salazar", loser_school: "Minnesota", result: "Dec 3-2" },
  { round: "QtrFinals", weight: "184", bout: 370, winner: "Trey Munoz", winner_school: "Oregon State", loser: "Marcus Coleman", loser_school: "Iowa State", result: "SV-1 3-1" },
  { round: "QtrFinals", weight: "184", bout: 371, winner: "Aaron Brooks", winner_school: "Penn State", loser: "Kaleb Romero", loser_school: "Ohio State", result: "Dec 4-1" },
  { round: "QtrFinals", weight: "184", bout: 372, winner: "Trent Hidlay", winner_school: "NC State", loser: "Hunter Bolen", loser_school: "Virginia Tech", result: "Dec 5-0" },

  // 197 lbs
  { round: "QtrFinals", weight: "197", bout: 373, winner: "Nino Bonaccorsi", winner_school: "Pittsburgh", loser: "Silas Allred", loser_school: "Nebraska", result: "Dec 5-3" },
  { round: "QtrFinals", weight: "197", bout: 374, winner: "Ethan Laird", winner_school: "Rider", loser: "Zac Braunagel", loser_school: "Illinois", result: "Dec 3-2" },
  { round: "QtrFinals", weight: "197", bout: 375, winner: "Rocky Elam", winner_school: "Missouri", loser: "Jaxon Smith", loser_school: "Maryland", result: "Dec 6-3" },
  { round: "QtrFinals", weight: "197", bout: 376, winner: "Tanner Sloan", winner_school: "South Dakota State", loser: "Bernie Truax", loser_school: "Cal Poly", result: "SV-1 6-4" },

  // 285 lbs
  { round: "QtrFinals", weight: "285", bout: 377, winner: "Mason Parris", winner_school: "Michigan", loser: "Lucas Davison", loser_school: "Northwestern", result: "MD 10-1" },
  { round: "QtrFinals", weight: "285", bout: 378, winner: "Tony Cassioppi", winner_school: "Iowa", loser: "Cohlton Schultz", loser_school: "Arizona State", result: "SV-1 3-1" },
  { round: "QtrFinals", weight: "285", bout: 379, winner: "Greg Kerkvliet", winner_school: "Penn State", loser: "Trent Hillger", loser_school: "Wisconsin", result: "Dec 4-0" },
  { round: "QtrFinals", weight: "285", bout: 380, winner: "Wyatt Hendrickson", winner_school: "Air Force", loser: "Zach Elam", loser_school: "Missouri", result: "MD 17-8" },

  // 125 lbs
  { round: "ConsR2", weight: "125", bout: 381, winner: "Brett Ungar", winner_school: "Cornell", loser: "Tucker Owens", loser_school: "Air Force", result: "Fall 5:52" },
  { round: "ConsR2", weight: "125", bout: 382, winner: "Nick Babin", winner_school: "Columbia", loser: "Jack Wagner", loser_school: "North Carolina", result: "Fall 4:15" },
  { round: "ConsR2", weight: "125", bout: 383, winner: "Patrick McKee", winner_school: "Minnesota", loser: "Michael DeAugustino", loser_school: "Northwestern", result: "Dec 7-2" },
  { round: "ConsR2", weight: "125", bout: 384, winner: "Dean Peterson", winner_school: "Rutgers", loser: "Braxton Brown", loser_school: "Maryland", result: "Dec 6-0" },
  { round: "ConsR2", weight: "125", bout: 385, winner: "Jarrett Trombley", winner_school: "NC State", loser: "Noah Surtin", loser_school: "Missouri", result: "Dec 2-1" },
  { round: "ConsR2", weight: "125", bout: 386, winner: "Stevo Poulin", winner_school: "Northern Colorado", loser: "Jore Volk", loser_school: "Wyoming", result: "Dec 5-3" },
  { round: "ConsR2", weight: "125", bout: 387, winner: "Eric Barnett", winner_school: "Wisconsin", loser: "Brandon Kaylor", loser_school: "Oregon State", result: "Fall 0:29" },
  { round: "ConsR2", weight: "125", bout: 388, winner: "Jack Medley", winner_school: "Michigan", loser: "Ryan Miller", loser_school: "Pennsylvania", result: "MD 13-4" },

  // 133 lbs
  { round: "ConsR2", weight: "133", bout: 389, winner: "Kyle Biscoglia", winner_school: "Northern Iowa", loser: "Joe Heilmann", loser_school: "Rutgers", result: "Dec 6-1" },
  { round: "ConsR2", weight: "133", bout: 390, winner: "Michael Colaiocco", winner_school: "Pennsylvania", loser: "Wyatt Henson", loser_school: "Oklahoma", result: "Fall 1:31" },
  { round: "ConsR2", weight: "133", bout: 391, winner: "Cody Phippen", winner_school: "Air Force", loser: "Chris Cannon", loser_school: "Northwestern", result: "Fall 3:48" },
  { round: "ConsR2", weight: "133", bout: 392, winner: "Zach Redding", winner_school: "Iowa State", loser: "Angelo Rini", loser_school: "Columbia", result: "MD 11-3" },
  { round: "ConsR2", weight: "133", bout: 393, winner: "Jesse Mendez", winner_school: "Ohio State", loser: "Domenic Zaccone", loser_school: "Campbell", result: "Fall 4:39" },
  { round: "ConsR2", weight: "133", bout: 394, winner: "Dylan Ragusin", winner_school: "Michigan", loser: "Chance Rich", loser_school: "CSU Bakersfield", result: "MD 10-0" },
  { round: "ConsR2", weight: "133", bout: 395, winner: "Micky Phillippi", winner_school: "Pittsburgh", loser: "Brody Teske", loser_school: "Iowa", result: "Dec 4-1" },
  { round: "ConsR2", weight: "133", bout: 396, winner: "Brayden Palmer", winner_school: "Chattanooga", loser: "Jack Maida", loser_school: "American", result: "MD 10-1" },

  // 141 lbs
  { round: "ConsR2", weight: "141", bout: 397, winner: "Frankie Tal Shahar", winner_school: "Northwestern", loser: "Kal Miller", loser_school: "Maryland", result: "Dec 8-2" },
  { round: "ConsR2", weight: "141", bout: 398, winner: "Casey Swiderski", winner_school: "Iowa State", loser: "Vince Cornella", loser_school: "Cornell", result: "Fall 6:48" },
  { round: "ConsR2", weight: "141", bout: 399, winner: "Clay Carlson", winner_school: "South Dakota State", loser: "Saul Ervin", loser_school: "SIU Edwardsville", result: "Dec 3-2" },
  { round: "ConsR2", weight: "141", bout: 400, winner: "Cael Happel", winner_school: "Northern Iowa", loser: "Jordan Titus", loser_school: "West Virginia", result: "Dec 10-5" },
  { round: "ConsR2", weight: "141", bout: 401, winner: "Matt Kazimir", winner_school: "Columbia", loser: "Jakob Bergeland", loser_school: "Minnesota", result: "M. For." },
  { round: "ConsR2", weight: "141", bout: 402, winner: "Malyke Hines", winner_school: "Lehigh", loser: "Ryan Jack", loser_school: "NC State", result: "MD 18-6" },
  { round: "ConsR2", weight: "141", bout: 403, winner: "Cole Mattin", winner_school: "Michigan", loser: "Mosha Schwartz", loser_school: "Oklahoma", result: "Fall 1:39" },
  { round: "ConsR2", weight: "141", bout: 404, winner: "Dylan D`Emilio", winner_school: "Ohio State", loser: "Tom Crook", loser_school: "Virginia Tech", result: "MD 10-0" },

  // 149 lbs
  { round: "ConsR2", weight: "149", bout: 405, winner: "Dom Demas", winner_school: "Cal Poly", loser: "Colin Realbuto", loser_school: "Northern Iowa", result: "Dec 10-7" },
  { round: "ConsR2", weight: "149", bout: 406, winner: "Michael Blockhus", winner_school: "Minnesota", loser: "Caleb Tyus", loser_school: "SIU Edwardsville", result: "Dec 9-6" },
  { round: "ConsR2", weight: "149", bout: 407, winner: "Chance Lamer", winner_school: "Michigan", loser: "Ethen Miller", loser_school: "Maryland", result: "Dec 4-2" },
  { round: "ConsR2", weight: "149", bout: 408, winner: "Austin Gomez", winner_school: "Wisconsin", loser: "Kellyn March", loser_school: "North Dakota State", result: "MD 9-1" },
  { round: "ConsR2", weight: "149", bout: 409, winner: "Caleb Henson", winner_school: "Virginia Tech", loser: "Johnny Lovett", loser_school: "Central Michigan", result: "SV-1 5-3" },
  { round: "ConsR2", weight: "149", bout: 410, winner: "Doug Zapf", winner_school: "Pennsylvania", loser: "Paniro Johnson", loser_school: "Iowa State", result: "Dec 3-2" },
  { round: "ConsR2", weight: "149", bout: 411, winner: "Victor Voinovich", winner_school: "Oklahoma State", loser: "Jaden Abas", loser_school: "Stanford", result: "SV-1 4-2" },
  { round: "ConsR2", weight: "149", bout: 412, winner: "Jackson Arrington", winner_school: "NC State", loser: "Mitch Moore", loser_school: "Oklahoma", result: "SV-1 4-2" },

  // 157 lbs
  { round: "ConsR2", weight: "157", bout: 413, winner: "Vinny Zerban", winner_school: "Northern Colorado", loser: "Jacob Wright", loser_school: "Wyoming", result: "Dec 3-2" },
  { round: "ConsR2", weight: "157", bout: 414, winner: "Jason Kraisser", winner_school: "Iowa State", loser: "Kaden Gfeller", loser_school: "Oklahoma State", result: "Fall 2:06" },
  { round: "ConsR2", weight: "157", bout: 415, winner: "Paddy Gallagher", winner_school: "Ohio State", loser: "Derek Holschlag", loser_school: "Northern Iowa", result: "MD 17-9" },
  { round: "ConsR2", weight: "157", bout: 416, winner: "Cael Swensen", winner_school: "South Dakota State", loser: "Garrett Model", loser_school: "Wisconsin", result: "Dec 9-6" },
  { round: "ConsR2", weight: "157", bout: 417, winner: "Trevor Chumbley", winner_school: "Northwestern", loser: "Cobe Siebrecht", loser_school: "Iowa", result: "Fall 6:43" },
  { round: "ConsR2", weight: "157", bout: 418, winner: "Chase Saldate", winner_school: "Michigan State", loser: "Kendall Coleman", loser_school: "Purdue", result: "Dec 6-4" },
  { round: "ConsR2", weight: "157", bout: 419, winner: "Ed Scott", winner_school: "NC State", loser: "Peter Pappas", loser_school: "George Mason", result: "Fall 2:54" },
  { round: "ConsR2", weight: "157", bout: 420, winner: "Jarrett Jacques", winner_school: "Missouri", loser: "Derek Gilcher", loser_school: "Indiana", result: "Dec 3-1" },

  // 165 lbs
  { round: "ConsR2", weight: "165", bout: 421, winner: "Justin McCoy", winner_school: "Virginia", loser: "Joshua Ogunsanya", loser_school: "Columbia", result: "Dec 7-3" },
  { round: "ConsR2", weight: "165", bout: 422, winner: "Michael Caliendo III", winner_school: "North Dakota State", loser: "Matthew Olguin", loser_school: "Oregon State", result: "Dec 9-8" },
  { round: "ConsR2", weight: "165", bout: 423, winner: "Patrick Kennedy", winner_school: "Iowa", loser: "Andrew Sparks", loser_school: "Minnesota", result: "Dec 6-3" },
  { round: "ConsR2", weight: "165", bout: 424, winner: "Julian Ramirez", winner_school: "Cornell", loser: "Dan Braunagel", loser_school: "Illinois", result: "Dec 17-15" },
  { round: "ConsR2", weight: "165", bout: 425, winner: "Holden Heller", winner_school: "Pittsburgh", loser: "Peyton Hall", loser_school: "West Virginia", result: "SV-1 9-7" },
  { round: "ConsR2", weight: "165", bout: 426, winner: "Izzak Olejnik", winner_school: "Northern Illinois", loser: "Tanner Cook", loser_school: "South Dakota State", result: "Dec 8-1" },
  { round: "ConsR2", weight: "165", bout: 427, winner: "Bubba Wilson", winner_school: "Nebraska", loser: "Connor Brady", loser_school: "Virginia Tech", result: "Dec 5-2" },
  { round: "ConsR2", weight: "165", bout: 428, winner: "Austin Yant", winner_school: "Northern Iowa", loser: "Wyatt Sheets", loser_school: "Oklahoma State", result: "Dec 10-5" },

  // 174 lbs
  { round: "ConsR2", weight: "174", bout: 429, winner: "Demetrius Romero", winner_school: "Utah Valley", loser: "John Worthing", loser_school: "Clarion", result: "Fall 3:33" },
  { round: "ConsR2", weight: "174", bout: 430, winner: "Philip Conigliaro", winner_school: "Harvard", loser: "Mickey O`Malley", loser_school: "Drexel", result: "SV-1 3-1" },
  { round: "ConsR2", weight: "174", bout: 431, winner: "Ethan Smith", winner_school: "Ohio State", loser: "Lennox Wolak", loser_school: "Columbia", result: "MD 14-3" },
  { round: "ConsR2", weight: "174", bout: 432, winner: "Troy Fisher", winner_school: "Northwestern", loser: "Alex Cramer", loser_school: "Central Michigan", result: "MD 18-5" },
  { round: "ConsR2", weight: "174", bout: 433, winner: "Cade DeVos", winner_school: "South Dakota State", loser: "Benjamin Pasiuk", loser_school: "Army West Point", result: "Dec 6-1" },
  { round: "ConsR2", weight: "174", bout: 434, winner: "Aaron Olmos", winner_school: "Oregon State", loser: "Tyler Eischens", loser_school: "Stanford", result: "Dec 9-2" },
  { round: "ConsR2", weight: "174", bout: 435, winner: "Edmond Ruth", winner_school: "Illinois", loser: "Rocky Jordan", loser_school: "Chattanooga", result: "Dec 2-0" },
  { round: "ConsR2", weight: "174", bout: 436, winner: "Donnell Washington", winner_school: "Indiana", loser: "Tate Picklo", loser_school: "Oklahoma", result: "MD 11-3" },

  // 184 lbs
  { round: "ConsR2", weight: "184", bout: 437, winner: "Brian Soldano", winner_school: "Rutgers", loser: "Reece Heller", loser_school: "Pittsburgh", result: "Fall 3:36" },
  { round: "ConsR2", weight: "184", bout: 438, winner: "Matt Finesilver", winner_school: "Michigan", loser: "Travis Wittlake", loser_school: "Oklahoma State", result: "Dec 5-1" },
  { round: "ConsR2", weight: "184", bout: 439, winner: "Colton Hawks", winner_school: "Missouri", loser: "Giuseppe Hoose", loser_school: "Buffalo", result: "Dec 6-2" },
  { round: "ConsR2", weight: "184", bout: 440, winner: "Will Feldkamp", winner_school: "Clarion", loser: "Lenny Pinto", loser_school: "Nebraska", result: "Fall 4:30" },
  { round: "ConsR2", weight: "184", bout: 441, winner: "Jacob Nolan", winner_school: "Binghamton", loser: "Neil Antrassian", loser_school: "Virginia", result: "Dec 7-5" },
  { round: "ConsR2", weight: "184", bout: 442, winner: "Gavin Kane", winner_school: "North Carolina", loser: "Abe Assad", loser_school: "Iowa", result: "Dec 4-3" },
  { round: "ConsR2", weight: "184", bout: 443, winner: "Brian Bonino", winner_school: "Drexel", loser: "David Key", loser_school: "Navy", result: "SV-1 3-1" },
  { round: "ConsR2", weight: "184", bout: 444, winner: "Tate Samuelson", winner_school: "Lehigh", loser: "Layne Malczewski", loser_school: "Michigan State", result: "Dec 5-1" },

  // 197 lbs
  { round: "ConsR2", weight: "197", bout: 445, winner: "Luke Surber", winner_school: "Oklahoma State", loser: "Max Shaw", loser_school: "North Carolina", result: "Dec 9-3" },
  { round: "ConsR2", weight: "197", bout: 446, winner: "Jacob Cardenas", winner_school: "Cornell", loser: "Levi Hopkins", loser_school: "Campbell", result: "MD 13-4" },
  { round: "ConsR2", weight: "197", bout: 447, winner: "Isaac Trumble", winner_school: "NC State", loser: "Jacob Koser", loser_school: "Navy", result: "SV-1 10-8" },
  { round: "ConsR2", weight: "197", bout: 448, winner: "Jacob Warner", winner_school: "Iowa", loser: "Evan Bockman", loser_school: "Utah Valley", result: "Fall 1:59" },
  { round: "ConsR2", weight: "197", bout: 449, winner: "Yonger Bastida", winner_school: "Iowa State", loser: "Andrew Davison", loser_school: "Northwestern", result: "Dec 3-1" },
  { round: "ConsR2", weight: "197", bout: 450, winner: "Michael Beard", winner_school: "Lehigh", loser: "Nick Stemmet", loser_school: "Stanford", result: "MD 17-7" },
  { round: "ConsR2", weight: "197", bout: 451, winner: "Max Dean", winner_school: "Penn State", loser: "Gavin Hoffman", loser_school: "Ohio State", result: "Dec 6-0" },
  { round: "ConsR2", weight: "197", bout: 452, winner: "Tanner Harvey", winner_school: "Oregon State", loser: "Owen Pentz", loser_school: "North Dakota State", result: "TF-1.5 6:52 (20-5)" },

  // 285 lbs
  { round: "ConsR2", weight: "285", bout: 453, winner: "Tate Orndorff", winner_school: "Ohio State", loser: "Grady Griess", loser_school: "Navy", result: "Dec 4-1" },
  { round: "ConsR2", weight: "285", bout: 454, winner: "Owen Trephan", winner_school: "NC State", loser: "Michael Wolfgram", loser_school: "West Virginia", result: "Dec 3-1" },
  { round: "ConsR2", weight: "285", bout: 455, winner: "Yaraslau Slavikouski", winner_school: "Harvard", loser: "Nathan Taylor", loser_school: "Lehigh", result: "Dec 4-2" },
  { round: "ConsR2", weight: "285", bout: 456, winner: "AJ Nevills", winner_school: "South Dakota State", loser: "Jaron Smith", loser_school: "Maryland", result: "SV-1 3-1" },
  { round: "ConsR2", weight: "285", bout: 457, winner: "Tyrell Gordon", winner_school: "Northern Iowa", loser: "Jonah Niesenbaum", loser_school: "Duke", result: "Dec 6-1" },
  { round: "ConsR2", weight: "285", bout: 458, winner: "Colton McKiernan", winner_school: "SIU Edwardsville", loser: "Ben Goldin", loser_school: "Pennsylvania", result: "Dec 2-0" },
  { round: "ConsR2", weight: "285", bout: 459, winner: "Sam Schuyler", winner_school: "Iowa State", loser: "Jacob Bullock", loser_school: "Indiana", result: "Dec 3-2" },
  { round: "ConsR2", weight: "285", bout: 460, winner: "Josh Heindselman", winner_school: "Oklahoma", loser: "Taye Ghadiali", loser_school: "Campbell", result: "Dec 3-2" },

  // 125 lbs
  { round: "ConsR3", weight: "125", bout: 461, winner: "Brett Ungar", winner_school: "Cornell", loser: "Nick Babin", loser_school: "Columbia", result: "MD 14-3" },
  { round: "ConsR3", weight: "125", bout: 462, winner: "Dean Peterson", winner_school: "Rutgers", loser: "Patrick McKee", loser_school: "Minnesota", result: "Dec 6-4" },
  { round: "ConsR3", weight: "125", bout: 463, winner: "Stevo Poulin", winner_school: "Northern Colorado", loser: "Jarrett Trombley", loser_school: "NC State", result: "Dec 9-5" },
  { round: "ConsR3", weight: "125", bout: 464, winner: "Eric Barnett", winner_school: "Wisconsin", loser: "Jack Medley", loser_school: "Michigan", result: "Dec 7-4" },

  // 133 lbs
  { round: "ConsR3", weight: "133", bout: 465, winner: "Kyle Biscoglia", winner_school: "Northern Iowa", loser: "Michael Colaiocco", loser_school: "Pennsylvania", result: "Dec 7-4" },
  { round: "ConsR3", weight: "133", bout: 466, winner: "Zach Redding", winner_school: "Iowa State", loser: "Cody Phippen", loser_school: "Air Force", result: "SV-1 5-3" },
  { round: "ConsR3", weight: "133", bout: 467, winner: "Jesse Mendez", winner_school: "Ohio State", loser: "Dylan Ragusin", loser_school: "Michigan", result: "TB-1 1-1" },
  { round: "ConsR3", weight: "133", bout: 468, winner: "Micky Phillippi", winner_school: "Pittsburgh", loser: "Brayden Palmer", loser_school: "Chattanooga", result: "Dec 6-3" },

  // 141 lbs
  { round: "ConsR3", weight: "141", bout: 469, winner: "Casey Swiderski", winner_school: "Iowa State", loser: "Frankie Tal Shahar", loser_school: "Northwestern", result: "Dec 10-5" },
  { round: "ConsR3", weight: "141", bout: 470, winner: "Clay Carlson", winner_school: "South Dakota State", loser: "Cael Happel", loser_school: "Northern Iowa", result: "Dec 7-3" },
  { round: "ConsR3", weight: "141", bout: 471, winner: "Malyke Hines", winner_school: "Lehigh", loser: "Matt Kazimir", loser_school: "Columbia", result: "Fall 3:56" },
  { round: "ConsR3", weight: "141", bout: 472, winner: "Dylan D`Emilio", winner_school: "Ohio State", loser: "Cole Mattin", loser_school: "Michigan", result: "Dec 6-2" },

  // 149 lbs
  { round: "ConsR3", weight: "149", bout: 473, winner: "Michael Blockhus", winner_school: "Minnesota", loser: "Dom Demas", loser_school: "Cal Poly", result: "SV-1 3-1" },
  { round: "ConsR3", weight: "149", bout: 474, winner: "Chance Lamer", winner_school: "Michigan", loser: "Austin Gomez", loser_school: "Wisconsin", result: "Fall 0:43" },
  { round: "ConsR3", weight: "149", bout: 475, winner: "Caleb Henson", winner_school: "Virginia Tech", loser: "Doug Zapf", loser_school: "Pennsylvania", result: "Dec 3-2" },
  { round: "ConsR3", weight: "149", bout: 476, winner: "Jackson Arrington", winner_school: "NC State", loser: "Victor Voinovich", loser_school: "Oklahoma State", result: "Dec 5-1" },

  // 157 lbs
  { round: "ConsR3", weight: "157", bout: 477, winner: "Vinny Zerban", winner_school: "Northern Colorado", loser: "Jason Kraisser", loser_school: "Iowa State", result: "MD 10-1" },
  { round: "ConsR3", weight: "157", bout: 478, winner: "Cael Swensen", winner_school: "South Dakota State", loser: "Paddy Gallagher", loser_school: "Ohio State", result: "Dec 4-3" },
  { round: "ConsR3", weight: "157", bout: 479, winner: "Chase Saldate", winner_school: "Michigan State", loser: "Trevor Chumbley", loser_school: "Northwestern", result: "Dec 8-5" },
  { round: "ConsR3", weight: "157", bout: 480, winner: "Ed Scott", winner_school: "NC State", loser: "Jarrett Jacques", loser_school: "Missouri", result: "Dec 6-1" },

  // 165 lbs
  { round: "ConsR3", weight: "165", bout: 481, winner: "Michael Caliendo III", winner_school: "North Dakota State", loser: "Justin McCoy", loser_school: "Virginia", result: "Dec 7-4" },
  { round: "ConsR3", weight: "165", bout: 482, winner: "Julian Ramirez", winner_school: "Cornell", loser: "Patrick Kennedy", loser_school: "Iowa", result: "Dec 5-2" },
  { round: "ConsR3", weight: "165", bout: 483, winner: "Izzak Olejnik", winner_school: "Northern Illinois", loser: "Holden Heller", loser_school: "Pittsburgh", result: "Inj. 5:40" },
  { round: "ConsR3", weight: "165", bout: 484, winner: "Austin Yant", winner_school: "Northern Iowa", loser: "Bubba Wilson", loser_school: "Nebraska", result: "MD 10-0" },

  // 174 lbs
  { round: "ConsR3", weight: "174", bout: 485, winner: "Demetrius Romero", winner_school: "Utah Valley", loser: "Philip Conigliaro", loser_school: "Harvard", result: "Dec 3-2" },
  { round: "ConsR3", weight: "174", bout: 486, winner: "Ethan Smith", winner_school: "Ohio State", loser: "Troy Fisher", loser_school: "Northwestern", result: "Dec 7-3" },
  { round: "ConsR3", weight: "174", bout: 487, winner: "Cade DeVos", winner_school: "South Dakota State", loser: "Aaron Olmos", loser_school: "Oregon State", result: "SV-1 3-1" },
  { round: "ConsR3", weight: "174", bout: 488, winner: "Edmond Ruth", winner_school: "Illinois", loser: "Donnell Washington", loser_school: "Indiana", result: "Dec 6-5" },

  // 184 lbs
  { round: "ConsR3", weight: "184", bout: 489, winner: "Matt Finesilver", winner_school: "Michigan", loser: "Brian Soldano", loser_school: "Rutgers", result: "Dec 9-2" },
  { round: "ConsR3", weight: "184", bout: 490, winner: "Will Feldkamp", winner_school: "Clarion", loser: "Colton Hawks", loser_school: "Missouri", result: "Dec 5-2" },
  { round: "ConsR3", weight: "184", bout: 491, winner: "Gavin Kane", winner_school: "North Carolina", loser: "Jacob Nolan", loser_school: "Binghamton", result: "Dec 3-0" },
  { round: "ConsR3", weight: "184", bout: 492, winner: "Brian Bonino", winner_school: "Drexel", loser: "Tate Samuelson", loser_school: "Lehigh", result: "SV-1 3-1" },

  // 197 lbs
  { round: "ConsR3", weight: "197", bout: 493, winner: "Jacob Cardenas", winner_school: "Cornell", loser: "Luke Surber", loser_school: "Oklahoma State", result: "Dec 12-5" },
  { round: "ConsR3", weight: "197", bout: 494, winner: "Jacob Warner", winner_school: "Iowa", loser: "Isaac Trumble", loser_school: "NC State", result: "Dec 9-3" },
  { round: "ConsR3", weight: "197", bout: 495, winner: "Michael Beard", winner_school: "Lehigh", loser: "Yonger Bastida", loser_school: "Iowa State", result: "Dec 2-1" },
  { round: "ConsR3", weight: "197", bout: 496, winner: "Max Dean", winner_school: "Penn State", loser: "Tanner Harvey", loser_school: "Oregon State", result: "Dec 10-5" },

  // 285 lbs
  { round: "ConsR3", weight: "285", bout: 497, winner: "Tate Orndorff", winner_school: "Ohio State", loser: "Owen Trephan", loser_school: "NC State", result: "TB-1 1-1" },
  { round: "ConsR3", weight: "285", bout: 498, winner: "Yaraslau Slavikouski", winner_school: "Harvard", loser: "AJ Nevills", loser_school: "South Dakota State", result: "Dec 5-3" },
  { round: "ConsR3", weight: "285", bout: 499, winner: "Colton McKiernan", winner_school: "SIU Edwardsville", loser: "Tyrell Gordon", loser_school: "Northern Iowa", result: "Dec 2-1" },
  { round: "ConsR3", weight: "285", bout: 500, winner: "Sam Schuyler", winner_school: "Iowa State", loser: "Josh Heindselman", loser_school: "Oklahoma", result: "Dec 4-2" },

  // 125 lbs
  { round: "SemiFinals", weight: "125", bout: 501, winner: "Matt Ramos", winner_school: "Purdue", loser: "Spencer Lee", loser_school: "Iowa", result: "Fall 6:59" },
  { round: "SemiFinals", weight: "125", bout: 502, winner: "Pat Glory", winner_school: "Princeton", loser: "Liam Cronin", loser_school: "Nebraska", result: "Dec 8-2" },

  // 133 lbs
  { round: "SemiFinals", weight: "133", bout: 503, winner: "Roman Bravo-Young", winner_school: "Penn State", loser: "Michael McGee", loser_school: "Arizona State", result: "SV-1 6-4" },
  { round: "SemiFinals", weight: "133", bout: 504, winner: "Vito Arujau", winner_school: "Cornell", loser: "Daton Fix", loser_school: "Oklahoma State", result: "MD 11-3" },

  // 141 lbs
  { round: "SemiFinals", weight: "141", bout: 505, winner: "Real Woods", winner_school: "Iowa", loser: "Brock Hardy", loser_school: "Nebraska", result: "MD 11-1" },
  { round: "SemiFinals", weight: "141", bout: 506, winner: "Andrew Alirez", winner_school: "Northern Colorado", loser: "Beau Bartlett", loser_school: "Penn State", result: "Dec 6-2" },

  // 149 lbs
  { round: "SemiFinals", weight: "149", bout: 507, winner: "Yianni Diakomihalis", winner_school: "Cornell", loser: "Shayne Van Ness", loser_school: "Penn State", result: "Dec 8-3" },
  { round: "SemiFinals", weight: "149", bout: 508, winner: "Sammy Sasso", winner_school: "Ohio State", loser: "Kyle Parco", loser_school: "Arizona State", result: "MD 14-2" },

  // 157 lbs
  { round: "SemiFinals", weight: "157", bout: 509, winner: "Austin O`Connor", winner_school: "North Carolina", loser: "Josh Humphreys", loser_school: "Lehigh", result: "Dec 4-3" },
  { round: "SemiFinals", weight: "157", bout: 510, winner: "Levi Haines", winner_school: "Penn State", loser: "Peyton Robb", loser_school: "Nebraska", result: "Dec 5-3" },

  // 165 lbs
  { round: "SemiFinals", weight: "165", bout: 511, winner: "David Carr", winner_school: "Iowa State", loser: "Quincy Monday", loser_school: "Princeton", result: "Dec 6-5" },
  { round: "SemiFinals", weight: "165", bout: 512, winner: "Keegan O`Toole", winner_school: "Missouri", loser: "Cameron Amine", loser_school: "Michigan", result: "Dec 6-0" },

  // 174 lbs
  { round: "SemiFinals", weight: "174", bout: 513, winner: "Carter Starocci", winner_school: "Penn State", loser: "Chris Foca", loser_school: "Cornell", result: "Dec 6-0" },
  { round: "SemiFinals", weight: "174", bout: 514, winner: "Mikey Labriola", winner_school: "Nebraska", loser: "Mekhi Lewis", loser_school: "Virginia Tech", result: "TB-1 3-1" },

  // 184 lbs
  { round: "SemiFinals", weight: "184", bout: 515, winner: "Parker Keckeisen", winner_school: "Northern Iowa", loser: "Trey Munoz", loser_school: "Oregon State", result: "Dec 5-1" },
  { round: "SemiFinals", weight: "184", bout: 516, winner: "Aaron Brooks", winner_school: "Penn State", loser: "Trent Hidlay", loser_school: "NC State", result: "Dec 6-3" },

  // 197 lbs
  { round: "SemiFinals", weight: "197", bout: 517, winner: "Nino Bonaccorsi", winner_school: "Pittsburgh", loser: "Ethan Laird", loser_school: "Rider", result: "Dec 10-4" },
  { round: "SemiFinals", weight: "197", bout: 518, winner: "Tanner Sloan", winner_school: "South Dakota State", loser: "Rocky Elam", loser_school: "Missouri", result: "Dec 7-2" },

  // 285 lbs
  { round: "SemiFinals", weight: "285", bout: 519, winner: "Mason Parris", winner_school: "Michigan", loser: "Tony Cassioppi", loser_school: "Iowa", result: "TF-1.5 5:12 (16-1)" },
  { round: "SemiFinals", weight: "285", bout: 520, winner: "Greg Kerkvliet", winner_school: "Penn State", loser: "Wyatt Hendrickson", loser_school: "Air Force", result: "Dec 4-2" },

  // 125 lbs
  { round: "ConsR4", weight: "125", bout: 521, winner: "Killian Cardinale", winner_school: "West Virginia", loser: "Brett Ungar", loser_school: "Cornell", result: "Dec 3-2" },
  { round: "ConsR4", weight: "125", bout: 522, winner: "Anthony Noto", winner_school: "Lock Haven", loser: "Dean Peterson", loser_school: "Rutgers", result: "Dec 3-1" },
  { round: "ConsR4", weight: "125", bout: 523, winner: "Brandon Courtney", winner_school: "Arizona State", loser: "Stevo Poulin", loser_school: "Northern Colorado", result: "Dec 8-3" },
  { round: "ConsR4", weight: "125", bout: 524, winner: "Eddie Ventresca", winner_school: "Virginia Tech", loser: "Eric Barnett", loser_school: "Wisconsin", result: "Dec 3-1" },

  // 133 lbs
  { round: "ConsR4", weight: "133", bout: 525, winner: "Kai Orine", winner_school: "NC State", loser: "Kyle Biscoglia", loser_school: "Northern Iowa", result: "Dec 7-1" },
  { round: "ConsR4", weight: "133", bout: 526, winner: "Aaron Nagao", winner_school: "Minnesota", loser: "Zach Redding", loser_school: "Iowa State", result: "MD 12-0" },
  { round: "ConsR4", weight: "133", bout: 527, winner: "Jesse Mendez", winner_school: "Ohio State", loser: "Lucas Byrd", loser_school: "Illinois", result: "TB-1 3-3" },
  { round: "ConsR4", weight: "133", bout: 528, winner: "Sam Latona", winner_school: "Virginia Tech", loser: "Micky Phillippi", loser_school: "Pittsburgh", result: "Dec 5-1" },

  // 141 lbs
  { round: "ConsR4", weight: "141", bout: 529, winner: "Parker Filius", winner_school: "Purdue", loser: "Casey Swiderski", loser_school: "Iowa State", result: "Fall 6:05" },
  { round: "ConsR4", weight: "141", bout: 530, winner: "Clay Carlson", winner_school: "South Dakota State", loser: "Allan Hart", loser_school: "Missouri", result: "Dec 7-6" },
  { round: "ConsR4", weight: "141", bout: 531, winner: "Lachlan McNeil", winner_school: "North Carolina", loser: "Malyke Hines", loser_school: "Lehigh", result: "Dec 5-2" },
  { round: "ConsR4", weight: "141", bout: 532, winner: "Dylan D`Emilio", winner_school: "Ohio State", loser: "Cole Matthews", loser_school: "Pittsburgh", result: "TB-1 2-1" },

  // 149 lbs
  { round: "ConsR4", weight: "149", bout: 533, winner: "Michael Blockhus", winner_school: "Minnesota", loser: "Graham Rooks", loser_school: "Indiana", result: "Dec 6-2" },
  { round: "ConsR4", weight: "149", bout: 534, winner: "Max Murin", winner_school: "Iowa", loser: "Chance Lamer", loser_school: "Michigan", result: "Dec 3-2" },
  { round: "ConsR4", weight: "149", bout: 535, winner: "Caleb Henson", winner_school: "Virginia Tech", loser: "Yahya Thomas", loser_school: "Northwestern", result: "Dec 7-2" },
  { round: "ConsR4", weight: "149", bout: 536, winner: "Brock Mauller", winner_school: "Missouri", loser: "Jackson Arrington", loser_school: "NC State", result: "Dec 4-3" },

  // 157 lbs
  { round: "ConsR4", weight: "157", bout: 537, winner: "Jared Franek", winner_school: "North Dakota State", loser: "Vinny Zerban", loser_school: "Northern Colorado", result: "Dec 7-3" },
  { round: "ConsR4", weight: "157", bout: 538, winner: "Will Lewan", winner_school: "Michigan", loser: "Cael Swensen", loser_school: "South Dakota State", result: "Dec 7-4" },
  { round: "ConsR4", weight: "157", bout: 539, winner: "Bryce Andonian", winner_school: "Virginia Tech", loser: "Chase Saldate", loser_school: "Michigan State", result: "Fall 6:22" },
  { round: "ConsR4", weight: "157", bout: 540, winner: "Ed Scott", winner_school: "NC State", loser: "Daniel Cardenas", loser_school: "Stanford", result: "SV-1 6-4" },

  // 165 lbs
  { round: "ConsR4", weight: "165", bout: 541, winner: "Michael Caliendo III", winner_school: "North Dakota State", loser: "Caleb Fish", loser_school: "Michigan State", result: "Dec 12-6" },
  { round: "ConsR4", weight: "165", bout: 542, winner: "Shane Griffith", winner_school: "Stanford", loser: "Julian Ramirez", loser_school: "Cornell", result: "Dec 6-2" },
  { round: "ConsR4", weight: "165", bout: 543, winner: "Izzak Olejnik", winner_school: "Northern Illinois", loser: "Carson Kharchla", loser_school: "Ohio State", result: "Dec 2-1" },
  { round: "ConsR4", weight: "165", bout: 544, winner: "Dean Hamiti", winner_school: "Wisconsin", loser: "Austin Yant", loser_school: "Northern Iowa", result: "MD 10-2" },

  // 174 lbs
  { round: "ConsR4", weight: "174", bout: 545, winner: "Dustin Plott", winner_school: "Oklahoma State", loser: "Demetrius Romero", loser_school: "Utah Valley", result: "SV-1 7-5" },
  { round: "ConsR4", weight: "174", bout: 546, winner: "Ethan Smith", winner_school: "Ohio State", loser: "Bailee O`Reilly", loser_school: "Minnesota", result: "Dec 7-6" },
  { round: "ConsR4", weight: "174", bout: 547, winner: "Peyton Mocco", winner_school: "Missouri", loser: "Cade DeVos", loser_school: "South Dakota State", result: "Dec 4-2" },
  { round: "ConsR4", weight: "174", bout: 548, winner: "Nelson Brands", winner_school: "Iowa", loser: "Edmond Ruth", loser_school: "Illinois", result: "Dec 4-1" },

  // 184 lbs
  { round: "ConsR4", weight: "184", bout: 549, winner: "Marcus Coleman", winner_school: "Iowa State", loser: "Matt Finesilver", loser_school: "Michigan", result: "Dec 4-3" },
  { round: "ConsR4", weight: "184", bout: 550, winner: "Will Feldkamp", winner_school: "Clarion", loser: "Isaiah Salazar", loser_school: "Minnesota", result: "Dec 8-4" },
  { round: "ConsR4", weight: "184", bout: 551, winner: "Gavin Kane", winner_school: "North Carolina", loser: "Hunter Bolen", loser_school: "Virginia Tech", result: "Dec 4-3" },
  { round: "ConsR4", weight: "184", bout: 552, winner: "Kaleb Romero", winner_school: "Ohio State", loser: "Brian Bonino", loser_school: "Drexel", result: "MD 15-6" },

  // 197 lbs
  { round: "ConsR4", weight: "197", bout: 553, winner: "Jacob Cardenas", winner_school: "Cornell", loser: "Zac Braunagel", loser_school: "Illinois", result: "Dec 6-4" },
  { round: "ConsR4", weight: "197", bout: 554, winner: "Jacob Warner", winner_school: "Iowa", loser: "Silas Allred", loser_school: "Nebraska", result: "Dec 1-0" },
  { round: "ConsR4", weight: "197", bout: 555, winner: "Bernie Truax", winner_school: "Cal Poly", loser: "Michael Beard", loser_school: "Lehigh", result: "Dec 4-2" },
  { round: "ConsR4", weight: "197", bout: 556, winner: "Max Dean", winner_school: "Penn State", loser: "Jaxon Smith", loser_school: "Maryland", result: "Dec 3-2" },

  // 285 lbs
  { round: "ConsR4", weight: "285", bout: 557, winner: "Cohlton Schultz", winner_school: "Arizona State", loser: "Tate Orndorff", loser_school: "Ohio State", result: "Dec 2-1" },
  { round: "ConsR4", weight: "285", bout: 558, winner: "Lucas Davison", winner_school: "Northwestern", loser: "Yaraslau Slavikouski", loser_school: "Harvard", result: "SV-1 4-2" },
  { round: "ConsR4", weight: "285", bout: 559, winner: "Zach Elam", winner_school: "Missouri", loser: "Colton McKiernan", loser_school: "SIU Edwardsville", result: "Dec 11-5" },
  { round: "ConsR4", weight: "285", bout: 560, winner: "Trent Hillger", winner_school: "Wisconsin", loser: "Sam Schuyler", loser_school: "Iowa State", result: "SV-1 3-1" },

  // 125 lbs
  { round: "ConsR5", weight: "125", bout: 561, winner: "Anthony Noto", winner_school: "Lock Haven", loser: "Killian Cardinale", loser_school: "West Virginia", result: "Dec 8-3" },
  { round: "ConsR5", weight: "125", bout: 562, winner: "Brandon Courtney", winner_school: "Arizona State", loser: "Eddie Ventresca", loser_school: "Virginia Tech", result: "Dec 4-2" },

  // 133 lbs
  { round: "ConsR5", weight: "133", bout: 563, winner: "Aaron Nagao", winner_school: "Minnesota", loser: "Kai Orine", loser_school: "NC State", result: "Dec 5-4" },
  { round: "ConsR5", weight: "133", bout: 564, winner: "Jesse Mendez", winner_school: "Ohio State", loser: "Sam Latona", loser_school: "Virginia Tech", result: "TB-1 1-1" },

  // 141 lbs
  { round: "ConsR5", weight: "141", bout: 565, winner: "Clay Carlson", winner_school: "South Dakota State", loser: "Parker Filius", loser_school: "Purdue", result: "Dec 3-1" },
  { round: "ConsR5", weight: "141", bout: 566, winner: "Lachlan McNeil", winner_school: "North Carolina", loser: "Dylan D`Emilio", loser_school: "Ohio State", result: "Dec 8-2" },

  // 149 lbs
  { round: "ConsR5", weight: "149", bout: 567, winner: "Max Murin", winner_school: "Iowa", loser: "Michael Blockhus", loser_school: "Minnesota", result: "SV-1 3-1" },
  { round: "ConsR5", weight: "149", bout: 568, winner: "Caleb Henson", winner_school: "Virginia Tech", loser: "Brock Mauller", loser_school: "Missouri", result: "Dec 6-4" },

  // 157 lbs
  { round: "ConsR5", weight: "157", bout: 569, winner: "Jared Franek", winner_school: "North Dakota State", loser: "Will Lewan", loser_school: "Michigan", result: "Dec 3-2" },
  { round: "ConsR5", weight: "157", bout: 570, winner: "Ed Scott", winner_school: "NC State", loser: "Bryce Andonian", loser_school: "Virginia Tech", result: "Fall 6:55" },

  // 165 lbs
  { round: "ConsR5", weight: "165", bout: 571, winner: "Shane Griffith", winner_school: "Stanford", loser: "Michael Caliendo III", loser_school: "North Dakota State", result: "Dec 3-2" },
  { round: "ConsR5", weight: "165", bout: 572, winner: "Dean Hamiti", winner_school: "Wisconsin", loser: "Izzak Olejnik", loser_school: "Northern Illinois", result: "Dec 7-3" },

  // 174 lbs
  { round: "ConsR5", weight: "174", bout: 573, winner: "Dustin Plott", winner_school: "Oklahoma State", loser: "Ethan Smith", loser_school: "Ohio State", result: "Dec 8-4" },
  { round: "ConsR5", weight: "174", bout: 574, winner: "Nelson Brands", winner_school: "Iowa", loser: "Peyton Mocco", loser_school: "Missouri", result: "Dec 6-1" },

  // 184 lbs
  { round: "ConsR5", weight: "184", bout: 575, winner: "Marcus Coleman", winner_school: "Iowa State", loser: "Will Feldkamp", loser_school: "Clarion", result: "Fall 2:43" },
  { round: "ConsR5", weight: "184", bout: 576, winner: "Kaleb Romero", winner_school: "Ohio State", loser: "Gavin Kane", loser_school: "North Carolina", result: "MD 11-3" },

  // 197 lbs
  { round: "ConsR5", weight: "197", bout: 577, winner: "Jacob Warner", winner_school: "Iowa", loser: "Jacob Cardenas", loser_school: "Cornell", result: "Dec 4-2" },
  { round: "ConsR5", weight: "197", bout: 578, winner: "Bernie Truax", winner_school: "Cal Poly", loser: "Max Dean", loser_school: "Penn State", result: "SV-1 8-6" },

  // 285 lbs
  { round: "ConsR5", weight: "285", bout: 579, winner: "Lucas Davison", winner_school: "Northwestern", loser: "Cohlton Schultz", loser_school: "Arizona State", result: "SV-1 3-1" },
  { round: "ConsR5", weight: "285", bout: 580, winner: "Zach Elam", winner_school: "Missouri", loser: "Trent Hillger", loser_school: "Wisconsin", result: "Dec 2-0" },

  // 125 lbs
  { round: "ConsSemi", weight: "125", bout: 581, winner: "Anthony Noto", winner_school: "Lock Haven", loser: "Liam Cronin", loser_school: "Nebraska", result: "SV-1 3-1" },
  { round: "ConsSemi", weight: "125", bout: 582, winner: "Brandon Courtney", winner_school: "Arizona State", loser: "Spencer Lee", loser_school: "Iowa", result: "M. For." },

  // 133 lbs
  { round: "ConsSemi", weight: "133", bout: 583, winner: "Daton Fix", winner_school: "Oklahoma State", loser: "Aaron Nagao", loser_school: "Minnesota", result: "Dec 6-4" },
  { round: "ConsSemi", weight: "133", bout: 584, winner: "Michael McGee", winner_school: "Arizona State", loser: "Jesse Mendez", loser_school: "Ohio State", result: "Dec 3-2" },

  // 141 lbs
  { round: "ConsSemi", weight: "141", bout: 585, winner: "Beau Bartlett", winner_school: "Penn State", loser: "Clay Carlson", loser_school: "South Dakota State", result: "MD 12-3" },
  { round: "ConsSemi", weight: "141", bout: 586, winner: "Lachlan McNeil", winner_school: "North Carolina", loser: "Brock Hardy", loser_school: "Nebraska", result: "Dec 5-2" },

  // 149 lbs
  { round: "ConsSemi", weight: "149", bout: 587, winner: "Kyle Parco", winner_school: "Arizona State", loser: "Max Murin", loser_school: "Iowa", result: "Dec 4-3" },
  { round: "ConsSemi", weight: "149", bout: 588, winner: "Shayne Van Ness", winner_school: "Penn State", loser: "Caleb Henson", loser_school: "Virginia Tech", result: "Dec 5-3" },

  // 157 lbs
  { round: "ConsSemi", weight: "157", bout: 589, winner: "Jared Franek", winner_school: "North Dakota State", loser: "Peyton Robb", loser_school: "Nebraska", result: "SV-1 3-1" },
  { round: "ConsSemi", weight: "157", bout: 590, winner: "Josh Humphreys", winner_school: "Lehigh", loser: "Ed Scott", loser_school: "NC State", result: "Dec 7-3" },

  // 165 lbs
  { round: "ConsSemi", weight: "165", bout: 591, winner: "Cameron Amine", winner_school: "Michigan", loser: "Shane Griffith", loser_school: "Stanford", result: "TB-1 2-1" },
  { round: "ConsSemi", weight: "165", bout: 592, winner: "Quincy Monday", winner_school: "Princeton", loser: "Dean Hamiti", loser_school: "Wisconsin", result: "Dec 9-7" },

  // 174 lbs
  { round: "ConsSemi", weight: "174", bout: 593, winner: "Mekhi Lewis", winner_school: "Virginia Tech", loser: "Dustin Plott", loser_school: "Oklahoma State", result: "Dec 8-2" },
  { round: "ConsSemi", weight: "174", bout: 594, winner: "Chris Foca", winner_school: "Cornell", loser: "Nelson Brands", loser_school: "Iowa", result: "Dec 7-2" },

  // 184 lbs
  { round: "ConsSemi", weight: "184", bout: 595, winner: "Trent Hidlay", winner_school: "NC State", loser: "Marcus Coleman", loser_school: "Iowa State", result: "Dec 5-2" },
  { round: "ConsSemi", weight: "184", bout: 596, winner: "Kaleb Romero", winner_school: "Ohio State", loser: "Trey Munoz", loser_school: "Oregon State", result: "M. For." },

  // 197 lbs
  { round: "ConsSemi", weight: "197", bout: 597, winner: "Rocky Elam", winner_school: "Missouri", loser: "Jacob Warner", loser_school: "Iowa", result: "Dec 3-1" },
  { round: "ConsSemi", weight: "197", bout: 598, winner: "Bernie Truax", winner_school: "Cal Poly", loser: "Ethan Laird", loser_school: "Rider", result: "Dec 5-2" },

  // 285 lbs
  { round: "ConsSemi", weight: "285", bout: 599, winner: "Wyatt Hendrickson", winner_school: "Air Force", loser: "Lucas Davison", loser_school: "Northwestern", result: "Fall 3:56" },
  { round: "ConsSemi", weight: "285", bout: 600, winner: "Tony Cassioppi", winner_school: "Iowa", loser: "Zach Elam", loser_school: "Missouri", result: "Dec 4-0" },

  // 125 lbs
  { round: "3rdPlace", weight: "125", bout: 601, winner: "Brandon Courtney", winner_school: "Arizona State", loser: "Anthony Noto", loser_school: "Lock Haven", result: "SV-1 4-2" },

  // 133 lbs
  { round: "3rdPlace", weight: "133", bout: 602, winner: "Michael McGee", winner_school: "Arizona State", loser: "Daton Fix", loser_school: "Oklahoma State", result: "Dec 2-1" },

  // 141 lbs
  { round: "3rdPlace", weight: "141", bout: 603, winner: "Beau Bartlett", winner_school: "Penn State", loser: "Lachlan McNeil", loser_school: "North Carolina", result: "Dec 4-1" },

  // 149 lbs
  { round: "3rdPlace", weight: "149", bout: 604, winner: "Shayne Van Ness", winner_school: "Penn State", loser: "Kyle Parco", loser_school: "Arizona State", result: "Dec 7-2" },

  // 157 lbs
  { round: "3rdPlace", weight: "157", bout: 605, winner: "Josh Humphreys", winner_school: "Lehigh", loser: "Jared Franek", loser_school: "North Dakota State", result: "MD 8-0" },

  // 165 lbs
  { round: "3rdPlace", weight: "165", bout: 606, winner: "Quincy Monday", winner_school: "Princeton", loser: "Cameron Amine", loser_school: "Michigan", result: "Dec 3-2" },

  // 174 lbs
  { round: "3rdPlace", weight: "174", bout: 607, winner: "Chris Foca", winner_school: "Cornell", loser: "Mekhi Lewis", loser_school: "Virginia Tech", result: "TB-1 3-2" },

  // 184 lbs
  { round: "3rdPlace", weight: "184", bout: 608, winner: "Kaleb Romero", winner_school: "Ohio State", loser: "Trent Hidlay", loser_school: "NC State", result: "SV-1 3-1" },

  // 197 lbs
  { round: "3rdPlace", weight: "197", bout: 609, winner: "Rocky Elam", winner_school: "Missouri", loser: "Bernie Truax", loser_school: "Cal Poly", result: "Dec 5-2" },

  // 285 lbs
  { round: "3rdPlace", weight: "285", bout: 610, winner: "Wyatt Hendrickson", winner_school: "Air Force", loser: "Tony Cassioppi", loser_school: "Iowa", result: "Fall 4:16" },

  // 125 lbs
  { round: "5thPlace", weight: "125", bout: 611, winner: "Liam Cronin", winner_school: "Nebraska", loser: "Spencer Lee", loser_school: "Iowa", result: "M. For." },

  // 133 lbs
  { round: "5thPlace", weight: "133", bout: 612, winner: "Aaron Nagao", winner_school: "Minnesota", loser: "Jesse Mendez", loser_school: "Ohio State", result: "Dec 4-0" },

  // 141 lbs
  { round: "5thPlace", weight: "141", bout: 613, winner: "Clay Carlson", winner_school: "South Dakota State", loser: "Brock Hardy", loser_school: "Nebraska", result: "Inj. 2:11" },

  // 149 lbs
  { round: "5thPlace", weight: "149", bout: 614, winner: "Caleb Henson", winner_school: "Virginia Tech", loser: "Max Murin", loser_school: "Iowa", result: "MD 12-3" },

  // 157 lbs
  { round: "5thPlace", weight: "157", bout: 615, winner: "Ed Scott", winner_school: "NC State", loser: "Peyton Robb", loser_school: "Nebraska", result: "Inj. 0-0" },

  // 165 lbs
  { round: "5thPlace", weight: "165", bout: 616, winner: "Shane Griffith", winner_school: "Stanford", loser: "Dean Hamiti", loser_school: "Wisconsin", result: "Dec 4-1" },

  // 174 lbs
  { round: "5thPlace", weight: "174", bout: 617, winner: "Nelson Brands", winner_school: "Iowa", loser: "Dustin Plott", loser_school: "Oklahoma State", result: "SV-1 4-2" },

  // 184 lbs
  { round: "5thPlace", weight: "184", bout: 618, winner: "Marcus Coleman", winner_school: "Iowa State", loser: "Trey Munoz", loser_school: "Oregon State", result: "M. For." },

  // 197 lbs
  { round: "5thPlace", weight: "197", bout: 619, winner: "Jacob Warner", winner_school: "Iowa", loser: "Ethan Laird", loser_school: "Rider", result: "Dec 7-3" },

  // 285 lbs
  { round: "5thPlace", weight: "285", bout: 620, winner: "Lucas Davison", winner_school: "Northwestern", loser: "Zach Elam", loser_school: "Missouri", result: "Dec 4-3" },

  // 125 lbs
  { round: "7thPlace", weight: "125", bout: 621, winner: "Eddie Ventresca", winner_school: "Virginia Tech", loser: "Killian Cardinale", loser_school: "West Virginia", result: "Dec 7-6" },

  // 133 lbs
  { round: "7thPlace", weight: "133", bout: 622, winner: "Sam Latona", winner_school: "Virginia Tech", loser: "Kai Orine", loser_school: "NC State", result: "Dec 3-1" },

  // 141 lbs
  { round: "7thPlace", weight: "141", bout: 623, winner: "Parker Filius", winner_school: "Purdue", loser: "Dylan D`Emilio", loser_school: "Ohio State", result: "SV-1 8-4" },

  // 149 lbs
  { round: "7thPlace", weight: "149", bout: 624, winner: "Brock Mauller", winner_school: "Missouri", loser: "Michael Blockhus", loser_school: "Minnesota", result: "Dec 6-2" },

  // 157 lbs
  { round: "7thPlace", weight: "157", bout: 625, winner: "Bryce Andonian", winner_school: "Virginia Tech", loser: "Will Lewan", loser_school: "Michigan", result: "Dec 6-4" },

  // 165 lbs
  { round: "7thPlace", weight: "165", bout: 626, winner: "Michael Caliendo III", winner_school: "North Dakota State", loser: "Izzak Olejnik", loser_school: "Northern Illinois", result: "Dec 6-2" },

  // 174 lbs
  { round: "7thPlace", weight: "174", bout: 627, winner: "Ethan Smith", winner_school: "Ohio State", loser: "Peyton Mocco", loser_school: "Missouri", result: "MD 12-2" },

  // 184 lbs
  { round: "7thPlace", weight: "184", bout: 628, winner: "Will Feldkamp", winner_school: "Clarion", loser: "Gavin Kane", loser_school: "North Carolina", result: "Fall 2:38" },

  // 197 lbs
  { round: "7thPlace", weight: "197", bout: 629, winner: "Max Dean", winner_school: "Penn State", loser: "Jacob Cardenas", loser_school: "Cornell", result: "Dec 4-2" },

  // 285 lbs
  { round: "7thPlace", weight: "285", bout: 630, winner: "Cohlton Schultz", winner_school: "Arizona State", loser: "Trent Hillger", loser_school: "Wisconsin", result: "Inj. 0:01" },

  // 125 lbs
  { round: "Finals", weight: "125", bout: 631, winner: "Pat Glory", winner_school: "Princeton", loser: "Matt Ramos", loser_school: "Purdue", result: "Dec 4-1" },

  // 133 lbs
  { round: "Finals", weight: "133", bout: 632, winner: "Vito Arujau", winner_school: "Cornell", loser: "Roman Bravo-Young", loser_school: "Penn State", result: "Dec 10-4" },

  // 141 lbs
  { round: "Finals", weight: "141", bout: 633, winner: "Andrew Alirez", winner_school: "Northern Colorado", loser: "Real Woods", loser_school: "Iowa", result: "Dec 6-4" },

  // 149 lbs
  { round: "Finals", weight: "149", bout: 634, winner: "Yianni Diakomihalis", winner_school: "Cornell", loser: "Sammy Sasso", loser_school: "Ohio State", result: "Dec 4-2" },

  // 157 lbs
  { round: "Finals", weight: "157", bout: 635, winner: "Austin O`Connor", winner_school: "North Carolina", loser: "Levi Haines", loser_school: "Penn State", result: "Dec 6-2" },

  // 165 lbs
  { round: "Finals", weight: "165", bout: 636, winner: "Keegan O`Toole", winner_school: "Missouri", loser: "David Carr", loser_school: "Iowa State", result: "Dec 8-2" },

  // 174 lbs
  { round: "Finals", weight: "174", bout: 637, winner: "Carter Starocci", winner_school: "Penn State", loser: "Mikey Labriola", loser_school: "Nebraska", result: "Fall 2:46" },

  // 184 lbs
  { round: "Finals", weight: "184", bout: 638, winner: "Aaron Brooks", winner_school: "Penn State", loser: "Parker Keckeisen", loser_school: "Northern Iowa", result: "Dec 7-2" },

  // 197 lbs
  { round: "Finals", weight: "197", bout: 639, winner: "Nino Bonaccorsi", winner_school: "Pittsburgh", loser: "Tanner Sloan", loser_school: "South Dakota State", result: "Dec 5-3" },

  // 285 lbs
  { round: "Finals", weight: "285", bout: 640, winner: "Mason Parris", winner_school: "Michigan", loser: "Greg Kerkvliet", loser_school: "Penn State", result: "Dec 5-1" },

];
