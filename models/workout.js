const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for workout
const WorkoutSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
});

// Create model for workout
const Workout = mongoose.model('workout', WorkoutSchema);

module.exports = Workout;
