import React, { Component } from 'react';

class Crates extends Component {

  render() {
    return (
        <div className="Crates">
          <img className="Cc1" src={require('./img/cc1.jpg')} />
          <img className="Cc2" src={require('./img/cc2.jpg')} />
          <img className="Cc3" src={require('./img/cc3.jpg')} />
        </div>
    );
  }
}

export default Crates;
