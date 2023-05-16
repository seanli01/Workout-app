import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import ListWorkout from './ListWorkout';

class Workout extends Component {
  state = {
    workouts: [],
  };

  componentDidMount() {
    this.getWorkouts();
  }

  getWorkouts = () => {
    axios
      .get('/api/workouts')
      .then((res) => {
        if (res.data) {
          this.setState({
            workouts: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteWorkout = (id) => {
    axios
      .delete(`/api/workouts/${id}`)
      .then((res) => {
        if (res.data) {
          this.getWorkouts();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { workouts } = this.state;

    return (
      <div>
        <h1>My Workout(s)</h1>
        <Input getWorkouts={this.getWorkouts} />
        <ListWorkout workouts={workouts} deleteWorkout={this.deleteWorkout} />
      </div>
    );
  }
}

export default Workout;
