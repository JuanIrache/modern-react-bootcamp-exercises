import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor() {
    super();
    this.state = {
      die1: 'one',
      die2: 'two',
      rolling: false
    };
    this.roll = this.roll.bind(this);
  }
  static defaultProps = {
    options: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  roll() {
    const die1 = this.props.options[Math.floor(Math.random() * this.props.options.length)];
    const die2 = this.props.options[Math.floor(Math.random() * this.props.options.length)];
    this.setState({ rolling: true });
    setTimeout(() => {
      this.setState({ die1, die2 });
    }, 200);
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="Dice">
          <Die num={this.state.die1} rolling={this.state.rolling} />
          <Die num={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling' : 'Roll!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
