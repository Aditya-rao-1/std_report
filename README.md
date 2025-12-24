# Student Speaking Assessment Report 📈

A simple full-stack prototype that displays a **student speaking assessment report**, inspired by platforms like SpeechAce / IELTS score reports.

The project focuses on:
- Clean and readable UI
- Logical score calculation
- display of scores and charts 
- Dynamic feedback based on performance
- Simple backend data handling

This is a **functional prototype**, not a production-ready system.

---

## 🚀 Tech Stack

### Frontend
- React
- Tailwind CSS
- Chart.js (Radar Chart)

### Backend
- Node.js
- Express
- In-memory JSON data (no database)

---

## 📂 Project Structure

```

student-speaking-report/
│
├── backend/
│   ├── data/
│   │   └── studentData.js
│   ├── routes/
│   │   └── reportRoutes.js
│   ├── server.js
│
└── frontend/
├── src/
│   ├── components/
│   │   ├── Report.jsx
│   │   ├── ScoreChart.jsx
│   │   └── Feedback.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── index.js

````

---

## ▶️ How to Run the Project

### 1️⃣ Run Backend

```bash
cd backend
npm install
npm run dev
````

Backend runs at:

```
http://localhost:5000
```

API endpoint:

```
GET http://localhost:5000/api/report
```

---

### 2️⃣ Run Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 📊 Where the Scores Are Stored

All student data is stored in a **simple in-memory object**:

**File:**

```
backend/data/studentData.js
```

Example:

```js
const studentReport = {
  studentName: "John Doe",
  examDate: "2025-09-18",
  skills: {
    pronunciation: 2.5,
    fluency: 6.8,
    vocabulary: 7.2,
    grammar: 6.5
  }
};
```

* No database is used
* Only one student record is required
* Scores range from **0 to 9**

---

## 🧮 Overall Score Calculation

The **overall score is not hardcoded**.

It is calculated dynamically in the frontend as:

```
Average of all skill scores
```

Formula:

```
(pronunciation + fluency + vocabulary + grammar) / 4
```

* Rounded to **1 decimal**
* Automatically updates when any skill score changes

---

## 📝 Feedback Logic

Feedback is generated dynamically based on score ranges.

### Feedback Rules:

| Score Range | Feedback                                           |
| ----------- | -------------------------------------------------- |
| ≥ 8         | Excellent performance with strong control          |
| 6 – 7.9     | Good performance with minor inaccuracies           |
| 4 – 5.9     | Fair performance but lacks consistency             |
| < 4         | Weak performance, significant improvement required |

### Example Logic:

```js
if (score >= 8) return "Excellent performance...";
if (score >= 6) return "Good performance...";
if (score >= 4) return "Fair performance...";
return "Needs significant improvement.";
```

Feedback updates automatically when scores change.

---

## 🎨 UI Features

* Dark green / black premium theme
* Skill-wise progress bars
* Radar chart visualization
* Conditional colors:

  * 🟢 Green for scores ≥ 6
  * 🔴 Red for scores < 6
* Student name and exam date displayed

---
## 🧑‍💻 Author

**Adithya rao**  
[GitHub](https://github.com/Aditya-rao-1) • [LinkedIn](https://www.linkedin.com/in/aditya-rao-7044a3317/) • [Portfolio](https://adi-portfolio-beta.vercel.app/)





