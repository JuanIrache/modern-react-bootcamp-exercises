import React, { Component } from 'react';
import Dice from './Dice';
import ScoreTable from './ScoreTable';
import './Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

const initialState = {
  dice: Array.from({ length: NUM_DICE }),
  locked: Array(NUM_DICE).fill(false),
  rollsLeft: NUM_ROLLS,
  scores: {
    ones: undefined,
    twos: undefined,
    threes: undefined,
    fours: undefined,
    fives: undefined,
    sixes: undefined,
    threeOfKind: undefined,
    fourOfKind: undefined,
    fullHouse: undefined,
    smallStraight: undefined,
    largeStraight: undefined,
    yahtzee: undefined,
    chance: undefined
  },
  rolling: false
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.reset = this.reset.bind(this);
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
  }

  reset() {
    this.setState(initialState);
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    if (!this.state.rolling) {
      this.setState({ rolling: true }, () => {
        setTimeout(() => {
          this.setState(st => ({ dice: this.state.dice.map((d, i) => (this.state.locked[i] ? d : Math.ceil(Math.random() * 6))) }));
        }, 250);
        setTimeout(() => {
          this.setState(st => ({
            rolling: false,
            locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
            rollsLeft: st.rollsLeft - 1
          }));
        }, 1000);
      });
    }
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft) {
      this.setState(st => ({
        locked: st.locked.map((n, i) => (i === idx ? !n : n))
      }));
    }
  }

  doScore(rulename, ruleFn) {
    if (this.state.dice.some(d => d != null) && !this.state.dice.rolling) {
      if (this.state.scores[rulename] == null) {
        // evaluate this ruleFn with the dice and score this rulename
        this.setState(st => ({
          scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
          rollsLeft: NUM_ROLLS,
          locked: Array(NUM_DICE).fill(false),
          dice: Array.from({ length: NUM_DICE })
        }));
      }
    }
  }

  render() {
    let gameOver = true;
    const { scores, locked, dice, rolling, rollsLeft } = this.state;
    for (const key in scores) if (scores[key] == null) gameOver = false;
    if (gameOver) {
      let total = 0;
      for (const key in scores) total += scores[key] || 0;
      localStorage.setItem('hiscore', Math.max(localStorage.getItem('hiscore'), total));
    }

    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee!</h1>

          <section className="Game-dice-section">
            <Dice dice={dice} locked={locked} disabled={this.state.rollsLeft === 0} handleClick={this.toggleLocked} rolling={rolling} />
            <div className="Game-button-wrapper">
              <button className="Game-reroll" disabled={locked.every(x => x)} onClick={gameOver ? this.reset : this.roll}>
                {gameOver ? 'Play Again' : `${rollsLeft} Rolls Left`}
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={scores} />
      </div>
    );
  }
}

export default Game;
