import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';

class Car extends Component {

  render() {
    return (
        <Col md={4} className="Car">
          <Panel>
            <h1>{this.props.car["Car"]}</h1>
            <p>Length: {this.props.car["Length"]}</p>
            <p>Width: {this.props.car["Width"]}</p>
            <p>Height: {this.props.car["Height"]}</p>
            <p>Surface Area: {this.props.car["Surface Area"]}</p>
            <p>Turning Average: {this.props.car["Turning Avg"]}</p>
            <p>Turning without boost: {this.props.car["Turning 0"]}</p>
            <p>Turning with boost: {this.props.car["Turning 100"]}</p>
            <p>Length Rank: {this.props.car["Length Rank"]}</p>
            <p>Width Rank: {this.props.car["Width Rank"]}</p>
            <p>Height Rank: {this.props.car["Height Rank"]}</p>
            <p>Surface Area Rank: {this.props.car["Surface Area Rank"]}</p>
            <p>Turning Avg Rank: {this.props.car["Turning Avg Rank"]}</p>
            <p>Turning without boost Rank: {this.props.car["Turning 0 Rank"]}</p>
            <p>Turning with boost Rank: {this.props.car["Turning 100 Rank"]}</p>
          </Panel>
        </Col>
    );
  }
}

export default Car;
