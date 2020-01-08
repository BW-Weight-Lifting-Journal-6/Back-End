const db = require("../database/dbconfig.js");

module.exports = {
  addWorkout,
  findWorkout,
  findByWorkoutId,
  updateWorkout,
  deleteWorkout
};

function findWorkout() {
  return db("workout");
}

function addWorkout(workout) {
  return db.insert(workout).into("workout");
}

function findByWorkoutId(id) {
  return db("workout")
    .where({ id })
    .first();
}
function updateWorkout(changes, id) {
  return db("workout")
    .where({ id: id })
    .update(changes);
}
function deleteWorkout(id) {
  return db("workout")
    .where({ id: id })
    .del();
}
