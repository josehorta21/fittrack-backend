require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const workoutRoutes = require('./routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ CORS Configuration for frontend on Vercel
const corsOptions = {
  origin: "https://fittrack-frontend-henna.vercel.app", // your deployed frontend URL
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("❌ Mongo connection error:", err));
