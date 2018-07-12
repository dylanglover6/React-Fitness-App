const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { 
    type: String, 
    trim: true, 
    unique: true
  },

  username: { 
    type: String, 
    trim: true, 
    unique: true,
    required: "A Unique Username is Required" 
  },

  firstName: {
    type: String,
    trim: true,
    required: true
  },

  lastName: {
    type: String,
    trim: true,
  },
  
  age: { 
    type: String, 
    trim: true 
  },
  
  gender: { 
    type: String, 
    trim: true 
  },
  
  weight: { 
    type: String, 
    trim: true 
  },
  
  fileInput: { 
    type: String, 
    trim: true 
  },

  userCreated: { 
    type: Date, 
    default: Date.now 
  },

  lastUpdated: Date,
  
  fullName: String

});

  // Custom Instance Methods

  // 1. setFullName: sets the current user's `fullName` property to their lastName appended to their `firstName`
UserSchema.methods.setFullName = function() {
  this.fullName = this.firstName + " " + this.lastName;
  return true;
}
  // Custom method `lastUpdatedDate`
UserSchema.methods.lastUpdatedDate = function () {
  // Set the current user's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
