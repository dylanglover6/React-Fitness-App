const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
	name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

const Exercises = mongoose.model("Exercises", exercisesSchema);

module.exports = Exercises;
