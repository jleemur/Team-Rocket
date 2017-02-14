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
      car["Length"] = hitbox[i]["Length"]
      car["Width"] = hitbox[i]["Width"]
      car["Height"] = hitbox[i]["Height"]
      car["Surface Area"] = hitbox[i]["Surface Area"]
      car["Turning Avg"] = turning[i]["Average"]
      car["Turning 0"] = turning[i]["0% Boosting"]
      car["Turning 100"] = turning[i]["100% Boosting"]
      car["Length Rank"] = hitbox_rank[i]["Length"]
      car["Width Rank"] = hitbox_rank[i]["Width"]
      car["Height Rank"] = hitbox_rank[i]["Height"]
      car["Surface Area Rank"] = hitbox_rank[i]["Surface Area"]
      car["Turning Avg Rank"] = turning_rank[i]["Average"]
      car["Turning 0 Rank"] = turning_rank[i]["0% Boosting"]
      car["Turning 100 Rank"] = turning_rank[i]["100% Boosting"]
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
    var orderButtons = (
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
              <Well>Order by: {orderButtons}</Well>
            </Row>
            {this.state.cars.map(function(currentCar) {
              return <Car car={currentCar} key={currentCar["Car"]}/>
            })}
          </Grid>
    );
  }
}

export default Cars;
