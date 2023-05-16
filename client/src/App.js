import React from 'react';
import Workout from './components/Workout';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Workout />
    </div>
  );
};

export default App;
