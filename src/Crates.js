import React, { Component } from 'react';
import { Grid, Col, Row, Clearfix } from 'react-bootstrap';

class Crates extends Component {

/*
TO DO:
- Find & save common, uncommon, rare, epic drop imgs:
  - Get list of all rocket league items... search & download pngs from: https://rocketleague.market/home
- Load all imgs into an array. Each img has different attributes: (name, droppedFrom, quality, etc.)
  - Would this be slow on a website? How to speed it up? My vision is to be able to search and filter through items
*/
  render() {
    return (
        <Grid className="Crate-body" fluid={true}>
          <h1 sm={0} md={0}>click on crate to view contents</h1>
          <Col sm={16} md={16}>
            <img src={require('./img/cc1/cc1.png')} role="navigation" />
          </Col>
          <Clearfix>Champions Crate 1</Clearfix>
          <Col sm={8} md={0}>
            <img src={require('./img/cc2/cc2.png')} role="presentation" />
          </Col>
          <Clearfix>Champions Crate 2</Clearfix>
          <Col sm={16} md={16}>
            <img src={require('./img/cc3/cc3.png')} role="presentation" />
          </Col>
          <Clearfix>Champions Crate 3</Clearfix>
          <Col sm={16} md={16}>
            <img src={require('./img/cc4/cc4.png')} role="presentation" />
          </Col>
          <Clearfix>Champions Crate 4</Clearfix>
        </Grid>
    );
  }
}

export default Crates;
