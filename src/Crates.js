/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Col, Row, Clearfix } from 'react-bootstrap';
import Search from './Search.js'

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
          <h1>click on crate to view contents</h1>
          <Col md={6}>
            <img src={require('./img/cc1/cc1.png')} role="navigation" />
            <Clearfix>Champions Crate 1</Clearfix>
          </Col>
          <Col md={6}>
            <img src={require('./img/cc2/cc2.png')} role="presentation" />
            <Clearfix>Champions Crate 2</Clearfix>
          </Col>
          <Col md={6}>
            <img src={require('./img/cc3/cc3.png')} role="presentation" />
            <Clearfix>Champions Crate 3</Clearfix>
          </Col>
          <Col md={6}>
            <img src={require('./img/cc4/cc4.png')} role="presentation" />
            <Clearfix>Champions Crate 4</Clearfix>
          </Col>
        </Grid>
    );
  }
}

export default Crates;
