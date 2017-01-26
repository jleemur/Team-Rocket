import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
//import Search from './Search.js';

import logo from './logo.svg';

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
        <div className="Tabs">
          <Tabs id="TabManager" defaultActiveKey={this.props.selectedTab}>
            <Tab eventKey={1} title="Find a player">Tab 1</Tab>
            <Tab eventKey={2} title="Car stats">Tab 2</Tab>
            <Tab eventKey={3} title="Crate stats">Tab 3</Tab>
          </Tabs>
        </div>
        <div className="App-body">
        </div>
      </div>
    );
  }
}

export default App;
