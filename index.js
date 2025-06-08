const express = require('express');
const cors = require('cors');

const app = express();

// CORS configuration for frontend deployment
const corsOptions = {
  origin: "https://fittrack-frontend-henna.vercel.app", // your deployed frontend
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Mock register endpoint
app.post('/api/auth/register', (req, res) => {
  res.status(200).json({ message: "User registered successfully (mock)." });
});

// Mock login endpoint
app.post('/api/auth/login', (req, res) => {
  res.status(200).json({
    token: "mock-jwt-token",
    user: { username: req.body.username }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
