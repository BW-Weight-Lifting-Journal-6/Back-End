const db = require("../database/dbconfig.js");

module.exports = {
  addWorkout,
  findWorkout,
  findByWorkoutId,
  updateWorkout,
  deleteWorkout,
  getWorkoutsByUsersId
};

function findWorkout() {
  return db("workout");
}

function addWorkout(workout) {
  return db.insert(workout).into("workout");
}

function findByWorkoutId(id) {
  return db("workout").where({ id });
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
function getWorkoutsByUsersId(users_id) {
  return db("workout").where({ users_id });
}
