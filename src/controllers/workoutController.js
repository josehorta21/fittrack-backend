const getWorkouts = (req, res) => {
  res.json([
    { id: 1, name: 'Push Ups' },
    { id: 2, name: 'Squats' }
  ]);
};

module.exports = { getWorkouts };
