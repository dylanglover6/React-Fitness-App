const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
