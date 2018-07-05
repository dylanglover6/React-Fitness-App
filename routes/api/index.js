const router = require("express").Router();
const exercisesRoutes = require("./exercises");
const workoutsRoutes = require("./workouts");
const usersRoutes = require("./users");

router.use("/exercises", exercisesRoutes);
router.use("/workouts", workoutsRoutes);
router.use("/users", usersRoutes);
module.exports = router;
