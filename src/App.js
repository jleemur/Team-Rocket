import React, { Component } from 'react';
import Search from './Search.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Team Rocket!</h2>
        </div>
        <div className="App-body">
          <Search/>
        </div>
      </div>
    );
  }
}

export default App;
