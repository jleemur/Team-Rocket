import React, { Component } from 'react';

//xlsx source: https://drive.google.com/file/d/0B0GvVmzA91-FR3BabDJGYjFaWlU/view
//Convert xlsx to json using https://convertexcel.net/excel-to-json
var data = require('./data/1.25_Car-Stats.json');
var hitbox = [], hitbox_rank = [], turn = [], turn_rank = [] // local data variables

class Cars extends Component {

  componentWillMount() {
    // load data arrays before component mounts
    hitbox = data["1.25 Hit Boxes"]
    hitbox_rank = data["1.25 HB Ranks"]
    turn = data["1.25 Turn Speeds"]
    turn_rank = data["1.25 Turn Ranks"]
  }


  render() {
    console.log(hitbox[0])
    // testing git
    // console.log(hitbox_rank)
    // console.log(turn)
    // console.log(turn_rank)fdsafdsa

    return (
        <div className="Cars">
          <p></p>
        </div>
    );
  }
}

export default Cars;
