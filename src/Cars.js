import React, { Component } from 'react';
var fetch = require('node-fetch');

//xlsx source: https://drive.google.com/file/d/0B0GvVmzA91-FR3BabDJGYjFaWlU/view
//Convert xlsx to json using https://convertexcel.net/excel-to-json
var data = require('./data/1.25_Car-Stats.json');

class Cars extends Component {

  fetchData(data) {
    fetch('http://127.0.0.1:3000/src/data/1.25_Car-Stats.json')
      .then(function(res) {
        return ( <div>res.text()</div> )
      }).then(function(body) {
        console.log(body);
      });
  }

  render() {
    return (
        <div className="Cars">
          <p>Hello World!</p>
        </div>
    );
  }
}

export default Cars;
