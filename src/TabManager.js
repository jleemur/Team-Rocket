import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap'

class TabManager extends Component {
  render() {
    return (
        <Tabs id="TabManager" defaultActiveKey={this.props.selectedTab}>
          <Tab eventKey={1} title="Find a player">Tab 1</Tab>
          <Tab eventKey={2} title="Car stats">Tab 2</Tab>
          <Tab eventKey={3} title="Crate stats">Tab 3</Tab>
        </Tabs>
    );
  }
}

export default TabManager;
