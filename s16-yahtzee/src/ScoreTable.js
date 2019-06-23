import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
} from './Rules';

class ScoreTable extends Component {
  render() {
    const { scores, doScore, descs } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={scores.ones} doScore={evt => doScore('ones', ones.evalRoll)} desc={descs.ones} />
              <RuleRow name="Twos" score={scores.twos} doScore={evt => doScore('twos', twos.evalRoll)} desc={descs.twos} />
              <RuleRow name="Threes" score={scores.threes} doScore={evt => doScore('threes', threes.evalRoll)} desc={descs.threes} />
              <RuleRow name="Fours" score={scores.fours} doScore={evt => doScore('fours', fours.evalRoll)} desc={descs.fours} />
              <RuleRow name="Fives" score={scores.fives} doScore={evt => doScore('fives', fives.evalRoll)} desc={descs.fives} />
              <RuleRow name="Sixes" score={scores.sixes} doScore={evt => doScore('sixes', sixes.evalRoll)} desc={descs.sixes} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Three of Kind"
                score={scores.threeOfKind}
                doScore={evt => doScore('threeOfKind', threeOfKind.evalRoll)}
                desc={descs.threeOfKind}
              />
              <RuleRow
                name="Four of Kind"
                score={scores.fourOfKind}
                doScore={evt => doScore('fourOfKind', fourOfKind.evalRoll)}
                desc={descs.fourOfKind}
              />
              <RuleRow
                name="Full House"
                score={scores.fullHouse}
                doScore={evt => doScore('fullHouse', fullHouse.evalRoll)}
                desc={descs.fullHouse}
              />
              <RuleRow
                name="Small Straight"
                score={scores.smallStraight}
                doScore={evt => doScore('smallStraight', smallStraight.evalRoll)}
                desc={descs.smallStraight}
              />
              <RuleRow
                name="Large Straight"
                score={scores.largeStraight}
                doScore={evt => doScore('largeStraight', largeStraight.evalRoll)}
                desc={descs.largeStraight}
              />
              <RuleRow name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore('yahtzee', yahtzee.evalRoll)} desc={descs.yahtzee} />
              <RuleRow name="Chance" score={scores.chance} doScore={evt => doScore('chance', chance.evalRoll)} desc={descs.chance} />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default ScoreTable;
