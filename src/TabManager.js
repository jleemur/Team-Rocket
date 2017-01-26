import React, { Component } from 'react';
import { TabContainer, Tabs, Tab } from 'react-bootstrap'

class TabManager extends Component {
  render() {
    return (
        <Tabs id="TabManager" defaultActiveKey={this.props.selectedTab}>
          <Tab eventKey={1} title="Search">Tab 1</Tab>
          <Tab eventKey={2} title="Leaderboards">Tab 2</Tab>
          <Tab eventKey={3} title="Streams">Tab 3</Tab>
        </Tabs>
    );
  }
}

export default TabManager;
