const express = require('express');
const router = express.Router();
const { createWorkout, getWorkouts } = require('../controllers/workoutController');
const verifyToken = require('../middleware');

router.post('/', verifyToken, createWorkout);
router.get('/', verifyToken, getWorkouts);

module.exports = router;
