🧘 Monk Mode – 30 Day Progress Tracker

A disciplined 30-day productivity tracker designed to enforce no zero days.

Track daily progress across:

💻 Coding (4 hrs benchmark)

✍️ Article Writing (1 article benchmark)

📊 Accounting Study (2 hrs benchmark)

Includes visual progress bars, streak heatmap, image mosaic generation, daily row locking, and backend persistence.

🚀 Features
📅 1. 30-Day Structured Tracking

Automatically unlocks only today’s row

Past days are locked

Future days are disabled

Based on challenge start date

📊 2. Smart Progress Calculation

Each activity has a benchmark

Progress bar fills proportionally (0–100%)

Day becomes “Perfect” if all benchmarks are met

Completion % calculated automatically

🔥 3. GitHub-Style Streak Map

30 squares with day numbers

Color-coded:

Gray → no progress

Red shades → partial completion

Green → perfect day

🖼 4. Image Evidence System

Image input appears only after entering hours

Hidden after upload

Saved to backend

Automatically renamed as:

dd-mm-yy-<ActivityInitial>.png
Example:
26-02-26-C.png
🧩 5. 90-Tile Mosaic Generator

3 activities × 30 days

Generates dynamic portrait grid

Auto-resizes to viewport height

No scrolling

Accessible via overlay page

💾 6. Backend Persistence (Node.js + Express)

Saves hours & image paths in data.json

Stores images in /uploads

Auto-creates uploads folder

Data survives refresh and server restart

🔒 7. Daily Access Control

User can only modify the current day

Past rows locked

Future rows disabled

Enforces discipline

🛠 Tech Stack

Frontend

HTML

CSS (Dark Monk Theme)

Vanilla JavaScript

Canvas API

Backend

Node.js

Express

Multer

📁 Project Structure
progress-tracker/
│
├── index.html
├── server.js
├── data.json
├── uploads/

⚙️ Setup Instructions
1️⃣ Install Dependencies
npm init -y
npm install express multer web-push
2️⃣ Start Server
node server.js

Open:

http://localhost:3000
3️⃣ Set Challenge Start Date

Inside index.html:

const challengeStartDate = new Date("YYYY-MM-DD");

Update this before starting.

🧠 How It Works

uploadedImages is the single source of truth

Hours are saved under:

uploadedImages[dayIndex].hours

Images are stored as file paths

updateStats() calculates everything from stored state

Mosaic flattens 90 image slots into a 9×10 grid

Server auto-creates /uploads if missing

🔐 Image Naming Logic

Images are renamed server-side using:

dd-mm-yy-<ActivityInitial>.<ext>

Where:

Coding → C

Article → R

Accounting → A

🎯 Philosophy

This tracker is built around one principle:

No zero days. No negotiation.

It enforces:

Time-based discipline

Evidence-backed accountability

Visual momentum

Structured consistency

🔮 Possible Future Enhancements

Deployment (Render / Railway)

Real push notifications (production-grade)

Email/SMS reminder integration

Authentication

Export as PDF

Monthly archive

Analytics dashboard

👨‍💻 Author

Built as a personal commitment system
to pursue financial freedom with discipline.