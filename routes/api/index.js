const router = require('express').Router();
const userRoutes = require('./users');
const workoutRoutes = require('./workouts');

// User routes
router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;
