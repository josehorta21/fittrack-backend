const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const token = jwt.sign({ username, email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, message: 'User registered successfully' });
});

module.exports = router;
