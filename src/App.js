import React, { Component } from 'react';
import './App.css';
import ClockTimer from './Timer/ClockTimer';
import Weather from './weather/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <div className="App-intro">
          <ClockTimer/>
          <Weather/>
        </div>
      </div>
    );
  }
}

export default App;
