const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware');
const { getWorkouts } = require('../controllers/workoutController');

router.get('/', authMiddleware, getWorkouts);

module.exports = router;
