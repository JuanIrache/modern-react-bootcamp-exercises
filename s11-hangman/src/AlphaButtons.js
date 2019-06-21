import React, { Component } from 'react';

export default class AlphaButtons extends Component {
  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return this.props.buttons.split('').map(ltr => (
      <button key={ltr} value={ltr} onClick={this.props.handler} disabled={this.props.guessed.has(ltr)}>
        {ltr}
      </button>
    ));
  }
  render() {
    return <p className="AlphaButtons">{this.generateButtons()}</p>;
  }
}
