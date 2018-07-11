const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Suppsed to match with '/api/users'
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Suppsed to match with '/api/users/:id'
router.route('/:id')
  .get(usersController.findById)
  .get(usersController.update);

  module.exports = router;
