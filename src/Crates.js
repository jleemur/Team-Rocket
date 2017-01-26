import React, { Component } from 'react';

class Crates extends Component {

  render() {
    return (
        <div className="Crates">
          <img src={require('./img/cc1.jpg')} role="presentation" />
          <img src={require('./img/cc2.jpg')} role="presentation" />
          <img src={require('./img/cc3.jpg')} role="presentation" />
        </div>
    );
  }
}

export default Crates;
