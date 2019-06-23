import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
  render() {
    const { score, name, doScore, desc } = this.props;
    return (
      <tr className={`RuleRow RuleRow-${score != null ? 'disabled' : 'active'}`} onClick={doScore}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score != null ? score : desc}</td>
      </tr>
    );
  }
}

export default RuleRow;
