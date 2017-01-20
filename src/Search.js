import React, { Component } from 'react';

class Search extends Component {
  //Self-note: pls learn what this does
  constructor(props) {
    super(props)
    this.state= {value: ""}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <div className="Search-player">
          <p><input type="text" placeholder="Search for a player" onChange={this.handleChange} /></p>
          <p>{this.state.value}</p>
        </div>
    );
  }
}

export default Search;
