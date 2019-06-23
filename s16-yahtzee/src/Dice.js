import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        {this.props.dice.map((d, idx) => (
          <Die
            handleClick={this.props.handleClick}
            val={d}
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx}
            rolling={!this.props.locked[idx] && this.props.rolling}
            disabled={this.props.disabled}
          />
        ))}
      </div>
    );
  }
}

export default Dice;
