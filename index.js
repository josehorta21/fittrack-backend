const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const corsOptions = {
  origin: "https://fittrack-frontend-eight.vercel.app", // frontend
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));

// Simple route
app.get("/", (req, res) => {
  res.send("FitTrack API is running!");
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.set('strictQuery', true); // Suppress deprecation warning

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => console.error("❌ Mongo connection error:", err));
