const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// const upload = multer({
//   dest: "uploads/"
// });

const uploadDir = path.join(__dirname, "uploads");

// Create uploads folder if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {

    const activity = file.fieldname; 
    // 'coding', 'article', 'accounting'

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yy = String(today.getFullYear()).slice(-2);

    let letter;

    if (activity === "coding") letter = "C";
    if (activity === "article") letter = "R";
    if (activity === "accounting") letter = "A";

    const ext = path.extname(file.originalname);
    const filename = `${dd}-${mm}-${yy}-${letter}${ext}`;

    cb(null, filename);
  }
});

const upload = multer({ storage });

app.post("/save-data", (req, res) => {
  fs.writeFileSync("data.json", JSON.stringify(req.body, null, 2));
  res.json({ success: true });
});

app.get("/load-data", (req, res) => {
  if (fs.existsSync("data.json")) {
    const data = fs.readFileSync("data.json");
    res.json(JSON.parse(data));
  } else {
    res.json(null);
  }
});

// app.post("/upload", upload.single("image"), (req, res) => {
//   res.json({ filename: req.file.filename });
// });
app.post("/upload", upload.any(), (req, res) => {
  res.json({ filename: req.files[0].filename });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});