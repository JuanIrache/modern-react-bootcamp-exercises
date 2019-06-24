import React, { Component } from 'react';
import './Joke.css';

export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.rateUp = this.rateUp.bind(this);
    this.rateDown = this.rateDown.bind(this);
  }
  static defaultProps = {
    smileys: {
      '-11': '🤬',
      '-10': '😡',
      '-9': '😠',
      '-8': '😤',
      '-7': '😭',
      '-6': '😰',
      '-5': '😢',
      '-4': '😖',
      '-3': '😞',
      '-2': '😒',
      '-1': '🙁',
      '0': '🙄',
      '1': '😌',
      '2': '😑',
      '3': '🙃',
      '4': '😏',
      '5': '😜',
      '6': '🤗',
      '7': '😅',
      '8': '😁',
      '9': '😆',
      '10': '😂',
      '11': '🤣',
      '12': '🤯'
    }
  };
  rateUp() {
    this.props.rate(this.props.id, +1);
  }
  rateDown() {
    this.props.rate(this.props.id, -1);
  }
  render() {
    return (
      <div className="Joke">
        <div>
          <button onClick={this.rateDown} className="Joke-arrow">
            ⬇
          </button>
          <span className="Joke-rating">{this.props.rating}</span>
          <button onClick={this.rateUp} className="Joke-arrow">
            ⬆
          </button>
        </div>
        <div>
          <span className="Joke-text">{this.props.joke}</span>
        </div>
        <div className="Joke-emoji">
          <span role="img" aria-label="">
            {this.props.smileys[Math.min(Math.max(this.props.rating, -11), 12).toString()]}
          </span>
        </div>
      </div>
    );
  }
}
