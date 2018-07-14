const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  },
  description: {
    type: Array,
    required: true
  },
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
