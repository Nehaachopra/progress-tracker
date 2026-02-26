<h1>30 Day Progress Tracker (Dark themed)</h1>

<div style="margin:0px auto;"><img width="600" height="400" alt="Screenshot 2026-02-27 001644" src="https://github.com/user-attachments/assets/8ae2e30a-ae99-49c6-9243-1a6ad2254dce" /></div>

<p>This 30 Day Progress Tracker helps you stay consistent by tracking three daily habits:<br><br>1. Coding (4 hours), <br>2. Writing 1 article, <br>3. Studying Accounting (2 hours)<br><br> Each day, you enter the number of hours you actually completed for each activity. Once you type the hours, an option appears to upload an image as proof (like a screenshot or notes).<br><br> The tracker then automatically checks whether you met the daily benchmarks, fills the progress bar, updates your streak, and colors the heatmap accordingly. You can only fill in the current day—past days are locked and future days are disabled—so the focus stays on today’s work.<br><br> Over time, your uploaded images combine into <em>a visual mosaic</em> that represents your full 30-day journey.
<hr>

<h3>🛠 Tech Stack Used</h3>
  <h4>Frontend</h4>
  <ol>
      <li>HTML</li>
      <li>CSS (Dark Monk Theme)</li>
      <li>JavaScript</li>
      <li>Canvas API</li>
  </ol>
  
  <h4>Backend</h4>
  <ol>
      <li>Node.js</li>
      <li>Multer</li>
      <li>Express</li>
  </ol>
<hr>
<h3>📁 Project Structure</h3>
<p>progress-tracker/</p>
<p>│</p>
<p>├── index.html</p>
<p>├── server.js</p>
<p>├── data.json</p>
<p>├── uploads/</p>
<hr>
<h3>⚙️ Setup Instructions</h3>
<ol>
<li>Install Dependencies</li>
    <code>npm init -y</code>
    <code>npm install express multer</code>
    
<li>Start Server</li>
    <code>node server.js</code>
<li>Set Challenge Start Date</li>
    Inside index.html:
    const challengeStartDate = new Date("YYYY-MM-DD");
    Update this before starting.
</ol>
<hr>
<h3>🔮 Possible Future Enhancements</h3>
<ol>
    <li>Deployment (Render / Railway)</li>
    <li>Real push notifications (production-grade)</li>
    <li>Email/SMS reminder integration</li>
    <li>Export as PDF</li>
    <li>Benchmark customization</li>
    <li>Progress activity customization</li>
</ol>
<hr>
<h3>👨‍💻 Author's note</h3>
Built as a personal commitment system
to pursue financial freedom with discipline.
<hr>
