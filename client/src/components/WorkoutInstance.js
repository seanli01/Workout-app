import axios from 'axios';
import React from "react";
import '../styles/workoutInfo.css'
const WorkoutInstance = ({ name, date, duration }) => {
  return (
    <div className="rec">
        <p >{name}</p>
      <p > {date}</p>
      <p > {duration}</p>
    </div>
  );
};

export default WorkoutInstance;
