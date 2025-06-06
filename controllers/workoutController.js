const Workout = require('../models/Workout');

const createWorkout = async (req, res) => {
  const { type, duration, notes } = req.body;
  try {
    const workout = new Workout({ userId: req.userId, type, duration, notes });
    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating workout' });
  }
};

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.userId }).sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching workouts' });
  }
};

module.exports = { createWorkout, getWorkouts };
