import React from 'react';

const ListWorkout = ({ workouts, deleteWorkout }) => {
  return (
    <ul>
      {workouts && workouts.length > 0 ? (
        workouts.map((workout) => {
          return (
            <li key={workout._id} onClick={() => deleteWorkout(workout._id)}>
              {workout.action}
            </li>
          );
        })
      ) : (
        <li>No workout(s) left</li>
      )}
    </ul>
  );
};

export default ListWorkout;