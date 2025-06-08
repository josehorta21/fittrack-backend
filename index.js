const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/auth/register', (req, res) => {
  res.status(200).json({ message: "User registered successfully (mock)." });
});

app.post('/api/auth/login', (req, res) => {
  res.status(200).json({ token: "mock-jwt-token", user: { username: req.body.username } });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});