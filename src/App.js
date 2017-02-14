import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Search from './Search.js';
import Cars from './Cars.js';
import Crates from './Crates.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="Banner" src={require('./img/RL-Banner2.png')} role="presentation" />
        </div>
        <Tabs id="TabManager" className="Tabs">
          <Tab eventKey={1} title="Find a player">
            <Search/>
          </Tab>
          <Tab eventKey={2} title="Car stats">
            <Cars/>
          </Tab>
          <Tab eventKey={3} title="Crate stats">
            <Crates/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
