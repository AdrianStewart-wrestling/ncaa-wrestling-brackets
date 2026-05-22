# NCAA Click-to-Advance Wrestling Bracket

Interactive NCAA Wrestling Championship bracket that allows users to:

• Click wrestlers to advance them through the bracket  
• Save bracket submissions to Firestore  
• Load previously submitted brackets  
• Lock entries after the deadline  
• Enter official match results  
• Automatically score all submissions  
• Display a live leaderboard

---

## Live Bracket

Open the bracket:

index.html

---

## Features

### User Features
- Click-to-advance bracket
- Save bracket picks
- Load saved entries
- PIN protection
- Entry updates before lock deadline

### Admin Features
- Submit official results
- Automatic scoring
- Leaderboard generation
- Admin PIN protection

---

## Backend

:

Submissions  
Matches  
OfficialResults  
Scores

---

## Deployment

The frontend is hosted on GitHub Pages.

The backend runs on Firestore/Firebase

---

## Admin Workflow

1. Users submit brackets
2. Entry deadline locks submissions
3. Admin clicks real winners in the bracket
4. Admin submits official results
5. Apps Script recalculates scores
6. Leaderboard updates

---

## Future Improvements

- Live leaderboard refresh
- Team scoring
- Pool groups
- Mobile layout improvements
- Automatic NCAA result ingestion

---

## Author

Adrian Stewart
