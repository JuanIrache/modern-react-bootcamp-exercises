import React, { Component } from 'react';

export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.rateUp = this.rateUp.bind(this);
    this.rateDown = this.rateDown.bind(this);
  }
  rateUp() {
    this.props.rate(this.props.id, true);
  }
  rateDown() {
    this.props.rate(this.props.id, false);
  }
  render() {
    return (
      <div className="Joke">
        <button onClick={this.rateDown}>Down</button>
        {this.props.rating}
        <button onClick={this.rateUp}>Up</button>
        {this.props.joke}
      </div>
    );
  }
}
