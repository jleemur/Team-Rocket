import React, { Component } from 'react';
import Search from './Search.js';
import TabManager from './TabManager.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {selectedTab: 1}
  }

  handleTabChange(newTab) {
    this.setState({selectedTab: newTab})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Team Rocket!</h2>
        </div>
<<<<<<< HEAD
        <div className="Nav">
          <TabManager selectedTab={this.state.selectedTab}/>
        </div>
        <div className="Search-bar">
          <Search />
        </div>
        <div className="App-Body">
=======
>>>>>>> origin/master
        </div>
      </div>
    );
  }
}

export default App;
