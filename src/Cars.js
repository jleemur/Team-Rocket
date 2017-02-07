import React, { Component } from 'react';

//xlsx source: https://drive.google.com/file/d/0B0GvVmzA91-FR3BabDJGYjFaWlU/view
//Convert xlsx to json using https://convertexcel.net/excel-to-json
var carStats = require('./data/1.25/Car-Stats.json');
const NUM_CARS = 25; //update this every patch

class Cars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    // load data arrays before component mounts
    var data = this.mergeData(carStats["1.25 Hit Boxes"], carStats["1.25 HB Ranks"],
                              carStats["1.25 Turn Speeds"], carStats["1.25 Turn Ranks"])
    this.setState({
      data: data
    });
  }

  mergeData(hitbox, hitbox_rank, turning, turning_rank) {
    var data = []
    for (var i=0; i<NUM_CARS; i++) {
      var temp = []
      temp["Car"] = hitbox[i]["Hit Boxes"].toString()
      temp["Length"] = parseFloat(hitbox[i]["Length"], 10)
      temp["Width"] = parseFloat(hitbox[i]["Width"], 10)
      temp["Height"] = parseFloat(hitbox[i]["Height"], 10)
      temp["Surface Area"] = parseFloat(hitbox[i]["Surface Area"], 10)
      temp["Length Rank"] = parseInt(hitbox_rank[i]["Length"], 10)
      temp["Width Rank"] = parseInt(hitbox_rank[i]["Width"], 10)
      temp["Height Rank"] = parseInt(hitbox_rank[i]["Height"], 10)
      temp["Surface Area Rank"] = parseInt(hitbox_rank[i]["Surface Area"], 10)
      temp["Turning Avg"] = parseFloat(turning[i]["Average"], 10)
      temp["Turning 0"] = parseFloat(turning[i]["0% Boosting"], 10)
      temp["Turning 100"] = parseFloat(turning[i]["100% Boosting"], 10)
      temp["Turning Avg Rank"] = parseInt(turning_rank[i]["Average"], 10)
      temp["Turning 0 Rank"] = parseInt(turning_rank[i]["0% Boosting"], 10)
      temp["Turning 100 Rank"] = parseInt(turning_rank[i]["100% Boosting"], 10)
      data.push(temp)
    }
    return data
  }

  render() {
    console.log(this.state.data)
    return (
        <div className="Cars">
          <p></p>
        </div>
    );
  }
}

export default Cars;
