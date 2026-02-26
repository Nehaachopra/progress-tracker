30 Day Progress Tracker

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
        Enforces discipline

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

🧩 5. 90-Tile Mosaic Generator
        3 activities × 30 days
        Generates dynamic portrait grid
        Accessible via overlay page

💾 6. Backend Persistence (Node.js + Express)
        Saves hours & image paths in data.json
        Stores images in /uploads
        Auto-creates uploads folder
        Data survives refresh and server restart

🛠 Tech Stack Used
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
    Open: http://localhost:3000
3️⃣ Set Challenge Start Date
    Inside index.html:
    const challengeStartDate = new Date("YYYY-MM-DD");
    Update this before starting.


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
