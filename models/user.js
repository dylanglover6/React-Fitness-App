const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, trim: true },
  username: { type: String, trim: true },
  fileInput: { type: String, trim: true },
  age: { type: String, trim: true },
  gender: { type: String, trim: true },
  weight: { type: String, trim: true },
  userCreated: { type: Date, default: Date.now }, 
  lastUpdated: {type: Date}
});

  // Custom Instance Methods
  // Custom method `lastUpdatedDate`
  UserSchema.methods.lastUpdatedDate = function () {
  // Set the current user's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
