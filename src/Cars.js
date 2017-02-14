import React, { Component } from 'react';
import { Grid, Row, Well, ButtonGroup, Button } from 'react-bootstrap';
import Car from './Car.js'

//xlsx source: https://drive.google.com/file/d/0B0GvVmzA91-FR3BabDJGYjFaWlU/view
//Convert xlsx to json using https://convertexcel.net/excel-to-json
var carStats = require('./data/1.25/Car-Stats.json');
const NUM_CARS = 25; //update this every patch

class Cars extends Component {

  componentWillMount() {
    // load cars arrays before component mounts
    var cars = this.mergeData(carStats["1.25 Hit Boxes"], carStats["1.25 HB Ranks"],
                              carStats["1.25 Turn Speeds"], carStats["1.25 Turn Ranks"])
    this.setState({
      cars: cars
    });
  }

  mergeData(hitbox, hitbox_rank, turning, turning_rank) {
    var cars = []
    for (var i=0; i<NUM_CARS; i++) {
      var car = []
      car["Num"] = i
      car["Car"] = hitbox[i]["Hit Boxes"].toString()
      car["Length"] = parseFloat(hitbox[i]["Length"], 10)
      car["Width"] = parseFloat(hitbox[i]["Width"], 10)
      car["Height"] = parseFloat(hitbox[i]["Height"], 10)
      car["Surface Area"] = parseFloat(hitbox[i]["Surface Area"], 10)
      car["Turning Avg"] = parseFloat(turning[i]["Average"], 10)
      car["Turning 0"] = parseFloat(turning[i]["0% Boosting"], 10)
      car["Turning 100"] = parseFloat(turning[i]["100% Boosting"], 10)
      car["Length Rank"] = parseInt(hitbox_rank[i]["Length"], 10)
      car["Width Rank"] = parseInt(hitbox_rank[i]["Width"], 10)
      car["Height Rank"] = parseInt(hitbox_rank[i]["Height"], 10)
      car["Surface Area Rank"] = parseInt(hitbox_rank[i]["Surface Area"], 10)
      car["Turning Avg Rank"] = parseInt(turning_rank[i]["Average"], 10)
      car["Turning 0 Rank"] = parseInt(turning_rank[i]["0% Boosting"], 10)
      car["Turning 100 Rank"] = parseInt(turning_rank[i]["100% Boosting"], 10)
      cars.push(car)
    }
    return cars
  }

  orderBy(string) {
    this.state.cars.sort(function (a,b) {
      return a[string] - b[string]
    })
    this.forceUpdate()
  }

  render() {
    var buttons = (
      <ButtonGroup>
        <Button onClick={() => this.orderBy("Num")}>Name</Button>
        <Button onClick={() => this.orderBy("Length Rank")}>Length</Button>
        <Button onClick={() => this.orderBy("Width Rank")}>Width</Button>
        <Button onClick={() => this.orderBy("Height Rank")}>Height</Button>
        <Button onClick={() => this.orderBy("Surface Area Rank")}>Surface Area</Button>
        <Button onClick={() => this.orderBy("Turning Avg Rank")}>Turning Avg</Button>
        <Button onClick={() => this.orderBy("Turning 0 Rank")}>Turning 0</Button>
        <Button onClick={() => this.orderBy("Turning 100 Rank")}>Turning 100</Button>
      </ButtonGroup>
    )

    return (
          <Grid fluid={true} className="Cars">
            <Row className="Cars-header">
              <Well>Order by: {buttons}</Well>
            </Row>
            {this.state.cars.map(function(currentCar) {
              return <Car car={currentCar} key={currentCar["Car"]}/>
            })}
          </Grid>
    );
  }
}

export default Cars;
