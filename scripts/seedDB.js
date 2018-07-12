const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

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

const workoutsSeed = [
  {
    name: "Full Body 1",
    img: "https://c2.staticflickr.com/2/1763/29440234198_d08c9d257c_o.png",
    description: "Jumping Jacks, Pushups, Crunches, Lunges, Single Leg Stands"
  },
  {
    name: "Core",
    img: "https://c1.staticflickr.com/1/913/29440234158_066560f38d_o.png",
    description: "Eleveated Pike Pushup, Alternating Side Planks, Supermans, Bent Knee Pushups, Supine Reverse Crunches"
  },
  {
    name: "Butt and Legs",
    img: "https://c2.staticflickr.com/2/1781/29440234048_d669e58166_o.png",
    description: "Single Leg Stands, Standing Calf Raises, Glute Bridges, Forward Lunges, Supermans"
  },
  {
    name: "Full Body 2",
    img: "https://c1.staticflickr.com/1/927/29440233948_d6fbb06780_o.png",
    description: "Farmer's Walk, Dumbell Calf-Raises, Dumbell Floor Press, Crunches, Supermans"
  },
  {
    name: "Full Body 3",
    img: "https://c1.staticflickr.com/1/838/29440233888_ac4dcd3eb7_o.png",
    description: "Calf Raises, Single Leg Stands, Pushups, Forward Lunges, Lateral Raises"
  },
  {
    name : "Full Body 4",
    img: "https://c2.staticflickr.com/2/1766/29440233618_55076836a0_o.png",
    description: "Crunches, Lunges, Farmer's Walk, Pushups, Single Leg Stands"
   }
]

// <<<<<<< HEAD
db.Workouts
  .remove({})
  .then(() => db.Workouts.collection.insertMany(workoutsSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
// =======
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


db.Workout
.remove({})
.then(() => db.Workout.collection.insertMany(workoutsSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactFitnessApp",

);
// >>>>>>> 0fb506b812dad227c1ab6ed3f72fa22bf2f3a139
