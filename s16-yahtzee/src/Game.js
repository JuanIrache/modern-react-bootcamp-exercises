import React, { Component } from 'react';
import Dice from './Dice';
import ScoreTable from './ScoreTable';
import './Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
  }

  static defaultProps = {
    descs: {
      ones: 'Score 1 for every 1',
      twos: 'Score 2 for every 2',
      threes: 'Score 3 for every 3',
      fours: 'Score 4 for every 4',
      fives: 'Score 5 for every 5',
      sixes: 'Score 6 for every 6',
      threeOfKind: 'If 3+ of one, score sum of all',
      fourOfKind: 'If 4+ of one, score sum of all',
      fullHouse: 'If 3 and 2 of each, score 25',
      smallStraight: 'If 4+ in a row, score 30',
      largeStraight: 'If 5+ in a row, score 40',
      yahtzee: 'If all values match, score 50',
      chance: 'Score sum of all dice'
    }
  };

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState({ rolling: true });
    setTimeout(() => {
      this.setState(st => ({
        rolling: false,
        dice: st.dice.map((d, i) => (st.locked[i] ? d : Math.ceil(Math.random() * 6))),
        locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
        rollsLeft: st.rollsLeft - 1
      }));
    }, 1000);
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
    if (this.state.dice.some(d => d != null)) {
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
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee!</h1>

          <section className="Game-dice-section">
            <Dice dice={this.state.dice} locked={this.state.locked} handleClick={this.toggleLocked} rolling={this.state.rolling} />
            <div className="Game-button-wrapper">
              <button className="Game-reroll" disabled={this.state.locked.every(x => x)} onClick={this.roll}>
                {this.state.rollsLeft} Rolls Left
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} descs={this.props.descs} />
      </div>
    );
  }
}

export default Game;
