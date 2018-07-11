const router = require("express").Router();
const exercisesController = require("../../controllers/exercisesController");

router.route("/")
  .get(exercisesController.findAll)
  .post(exercisesController.create);

module.exports = router;