import React, { Component } from 'react';

class Search extends Component {
  //Jon: pls learn what this does
  constructor(props) {
    super(props)
    this.state = {value: ""}

    //Jon: why do we bind this??
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <div className="Search">
          <p><input type="text" placeholder="Search for a player" onChange={this.handleChange} /></p>
          <p>{this.state.value} </p>
        </div>
    );
  }
}

export default Search;
