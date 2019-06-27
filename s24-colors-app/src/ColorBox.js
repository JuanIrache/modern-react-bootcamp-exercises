import React, { Component } from 'react';
import './ColorBox.css';

export default class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
        <button className="ColorBox-copy">Copy</button>
        <span className="ColorBox-name">{this.props.name}</span>
        <span className="ColorBox-more">More</span>
      </div>
    );
  }
}
