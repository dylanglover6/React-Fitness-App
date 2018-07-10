const axios = require('axios');
const db = require("../models");

// Defining methods for the workoutsController
module.exports = {
  getExercises: function() {
    return axios.get("https://wger.de/api/v2/exercise/?page=3-H 'Authoriza'ion: Token 71e9eb9ae2e59bb78d86dc669a1c7bc77b659791'")
      .then(res => {
      console.log(res);
    });


  },
  findAll: function(req, res) {
  db.Exercises
    .find(req.query)
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
  db.Exercises
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
  db.Exercises
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
  db.Exercises
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
  db.Exercises
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
	}
};