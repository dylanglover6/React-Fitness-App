const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactFitnessApp",

);

const exercisesSeed = [
  {
    name: "Pushups",
    img: "http://irongrif.com/uploads/exercise/image/112/show_img_close_grip.jpg",
    description:
      "With face, palms and toes facing down, keeping legs and back straight while extending arms straight to push body up and back down again",
  },
  {
    name: "Situps",
    img: "https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Sit-ups.png",
    description:
      "While lying flat on the back, lift the torso to a sitting position, and then lie flat again without changing the position of the legs",
  },
  {
    name: "Jumping Jacks",
    img: "https://cdn.instructables.com/FLV/BN83/I8SLTHTQ/FLVBN83I8SLTHTQ.LARGE.jpg",
    description:
      "While standing with feet together, knees slightly bent, and arms to sides, jump while raising arms and separating legs to a shoulders-width apart. Land on forefoot with legs apart and arms overhead. Jump again while lower arms and returning legs to midline.",
  },
  {
    name: "High Knees",
    img: "https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/High_Knees_F_WorkoutLabs.png",
    description:
      "Stand with your feet slightly apart, your weight concentrated in the balls of your feet and your arms relaxed at your sides. Lift your left knee high while bringing your heel toward your glutes and keeping your toes up. Drive your leg back toward the ground, taking a small step forward",
  },
  {
    name: "Jump Rope",
    img: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/3/1425380525245/2f3040fe-3edd-47c7-b9d2-5d008fe6e260-444x600.jpeg?w=300&q=55&auto=format&usm=12&fit=max&s=b8ac759d1270b780adb859831bad262b",
    description:
      "Jump 3 to 4 inches off of the ground with legs together while simultaneously waving your arms in a circular motion",
  }
]

db.Exercises
  .remove({})
  .then(() => db.Exercises.collection.insertMany(exercisesSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });