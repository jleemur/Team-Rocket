import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Search from './Search.js';
import logo from './logo.svg';
import banner from './RL-Banner2.png';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={banner} className="Banner"/>
        </div>
        <div className="Tabs">
          <Tabs id="TabManager" defaultActiveKey={this.props.selectedTab}>
            <Tab eventKey={1} title="Find a player">
              <Search/>
            </Tab>
            <Tab eventKey={2} title="Car stats"></Tab>
            <Tab eventKey={3} title="Crate stats"></Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
