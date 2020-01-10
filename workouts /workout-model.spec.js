const Workout = require("./workout-Model.js");

const db = require("../database/dbconfig.js");

describe("workout model", function() {
  beforeEach(async () => {
    await db("users").truncate();
  });
  describe("addWorkout()", function() {
      
    it("adding a workout to the db ", async function() {
       await db('users').insert({username:"bobb", password:'password'})

      await Workout.addWorkout({
        exercise: "pushups",
        reps: "30",
        muscle: "arms/core",
        users_id: 1
      });
      await Workout.deleteWorkout({ id: 14 });
      const workout = await db("workout");
      expect(workout).toHaveLength(1);
    });
  });
});

// describe("workout model", function() {
//   beforeEach(async () => {
//     await db("users").truncate();
//   });
//   describe("deleteWorkout()", function() {
//     it("remove a workout from the db ", async function() {
//      
//       await Workout.deleteWorkout({ id: 1 });

//       const workout = await db("users");
//       expect(workout).toHaveLength(1);
//     });
//   });
// });
