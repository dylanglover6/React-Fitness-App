const router = require("express").Router();
const workoutsController = require("../../controllers/workoutsController");

router.route("/")
  .get(workoutsController.findAll)
  .post(workoutsController.create);

module.exports = router;
