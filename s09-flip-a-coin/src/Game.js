import React, { Component } from 'react';
import Coin from './Coin';
import './Game.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      heads: false,
      results: [false]
    };
    this.flip = this.flip.bind(this);
  }
  flip() {
    const newRes = Math.random() > 0.5;
    this.setState({ heads: newRes, results: [...this.state.results, newRes] });
  }
  render() {
    const { results, heads } = this.state;
    return (
      <div className="Game">
        <h1>Coin Flip</h1>
        <Coin heads={heads} />
        <p>
          {results.length} flips. {Math.floor((100 * results.filter(r => r).length) / results.length)}% heads.
        </p>
        <button onClick={this.flip}>Flip!</button>
      </div>
    );
  }
}

export default Game;
