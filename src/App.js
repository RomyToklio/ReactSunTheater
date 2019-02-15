import React, { Component } from 'react';
import './App.css';

import { TheaterContainer } from './theater/containers/TheaterContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TheaterContainer />
   
      </div>
    );
  }
}
 
export default App;
