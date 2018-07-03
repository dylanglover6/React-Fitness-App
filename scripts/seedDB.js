const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

const woorkoutSeed = [
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

];

// Seed file for mongodb/reactFitnessApp/users collection (table).
const userSeed = [
{
  username: "ryanG",
  fileInput: "C90F6793-CA09-45C8-A3EB-883CBCC48DDF-1464-000003C8E4F8E6C1.jpeg",
  age: "37",
  gender: "Male",
  weight: "175",
  date: new Date(Date.now())
},

{  
  username: "smarterThanYou",
  fileInput: "C90F6793-CA09-45C8-A3EB-883CBCC48DDF-1464-000003C8E4F8E6C1.jpeg",
  age: "65",
  gender: "Male",
  weight: "155",
  date: new Date(Date.now())
},

{  
  username: "stephWins",
  fileInput: "C90F6793-CA09-45C8-A3EB-883CBCC48DDF-1464-000003C8E4F8E6C1.jpeg",
  age: "36",
  gender: "Female",
  weight: "135",
  date: new Date(Date.now())
},

{  
  username: "LisaGuzman",
  fileInput: "C90F6793-CA09-45C8-A3EB-883CBCC48DDF-1464-000003C8E4F8E6C1.jpeg",
  age: "61",
  gender: "Female",
  weight: "143",
  date: new Date(Date.now())
}

]

db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});