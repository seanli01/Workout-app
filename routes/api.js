const express = require('express');
const Workout = require('../models/workout');
const router = express.Router();
const Workout = require('../models/workout');

router.get('/workouts', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Workout.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/workouts', (req, res, next) => {
  if (req.body.action) {
    Workout.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/workout/:id', (req, res, next) => {
  Workout.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;