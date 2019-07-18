import React, { Component } from 'react';
import './Header.css';
import skeptic from './skeptic.png';

export default class Header extends Component {
  render() {
    const { enabled, generate } = this.props;
    return (
      <div className="Header">
        <h1 className="Header-title">
          <span className="Header-title-top">Dad</span> Jokes
        </h1>
        <img className="Header-icon" src={skeptic} aria-label="Smiley" />
        <button className="Header-button" onClick={generate} disabled={!enabled}>
          {enabled ? 'New Jokes' : 'Waiting...'}
        </button>
      </div>
    );
  }
}
