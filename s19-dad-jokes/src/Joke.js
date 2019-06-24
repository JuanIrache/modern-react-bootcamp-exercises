import React, { Component } from 'react';
import './Joke.css';

export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.rateUp = this.rateUp.bind(this);
    this.rateDown = this.rateDown.bind(this);
  }
  rateUp() {
    this.props.rate(this.props.id, +1);
  }
  rateDown() {
    this.props.rate(this.props.id, -1);
  }
  render() {
    return (
      <div className="Joke">
        <button onClick={this.rateDown} className="Joke-arrow">
          ⬇
        </button>
        <span className="Joke-rating">{this.props.rating}</span>
        <button onClick={this.rateUp} className="Joke-arrow">
          ⬆
        </button>
        <span className="Joke-text">{this.props.joke}</span>
      </div>
    );
  }
}
