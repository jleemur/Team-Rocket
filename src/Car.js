import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Car extends Component {

  render() {
    return (
      <Col md={4} className="Car">
        <h1>{this.props.car["Car"]}</h1>
        <p>Length: {this.props.car["Length"]}</p>
        <p>Width: {this.props.car["Width"]}</p>
        <p>Height: {this.props.car["Height"]}</p>
        <p>Surface Area: {this.props.car["Surface Area"]}</p>
        <p>Turning without boost: {this.props.car["Turning 0"]}</p>
        <p>Turning with boost: {this.props.car["Turning 100"]}</p>
      </Col>
    );
  }
}

export default Car;
