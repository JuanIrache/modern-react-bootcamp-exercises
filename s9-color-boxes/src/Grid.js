import React, { Component } from 'react';
import Box from './Box';
import { pickRandom } from './helpers';
import './Grid.css';

const colors = ['B28BBE', '22130F', '3F0E0C', '955F47', 'A38AD0'];

export default class Grid extends Component {
  constructor() {
    super();
    let boxes = [];
    for (let i = 0; i < 25; i++) {
      boxes.push(pickRandom(colors));
    }
    this.state = { boxes };
    this.changeOne = this.changeOne.bind(this);
  }

  changeOne(idx) {
    return function() {
      let newColor = pickRandom(colors);
      while (newColor === this.state.boxes[idx]) newColor = pickRandom(colors);
      this.setState({
        boxes: this.state.boxes.map((c, i) => {
          if (i === idx) return newColor;
          return c;
        })
      });
    }.bind(this);
  }

  render() {
    return (
      <div className="Grid">
        {this.state.boxes.map((b, i) => (
          <Box color={b} update={this.changeOne(i)} />
        ))}
      </div>
    );
  }
}
