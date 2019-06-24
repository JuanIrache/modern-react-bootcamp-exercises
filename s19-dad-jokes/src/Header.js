import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    const { enabled, generate } = this.props;
    return (
      <div className="Header">
        <h1 className="Header-title">Dad Jokes</h1>
        <span role="img" className="Header-icon" aria-label="Smiley">
          🤨
        </span>
        <button className="Header-button" onClick={generate} disabled={!enabled}>
          {enabled ? 'New Jokes' : 'Waiting...'}
        </button>
      </div>
    );
  }
}
