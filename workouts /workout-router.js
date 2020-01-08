const express = require("express");
const restricted = require("../auth/restricted-middleware.js");

const Workout = require("./workout-model.js");

const router = express.Router();

router.get("/", restricted, (req, res) => {
  Workout.findWorkout()
    .then(workout => {
      res.json(workout);
    })
    .catch(error => {
      req.status(500).json({ message: "failed to get workout" });
    });
});

router.post("/", restricted, (req, res) => {
  const workoutData = req.body;

  Workout.addWorkout(workoutData)

    .then(workout => {
      res.status(201).json(workout);
    })
    .catch(error => {
      console.error(error, "this is the error");
      res.status(500).json({ message: "unable to create new workout" });
    });
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Workout.findByWorkoutId(id)
    .then(edit => {
      if (edit) {
        Workout.updateWorkout(changes, id).then(update => {
          res.json(update);
        });
      } else {
        res
          .status(404)
          .json({ message: "could not find workout with given ID" });
      }
    })
    .catch(error => {
      console.error(error, "this is the error");
      res.status(500).json({ message: "Failed to update workout" });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Workout.deleteWorkout(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "could not find workout" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: " failed to delete workout" });
    });
});

module.exports = router;
