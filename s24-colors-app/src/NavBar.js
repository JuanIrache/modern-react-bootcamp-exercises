import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './NavBar.css';

import Slider from 'rc-slider';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <div className="NavBar-logo">
          <a href="#">React Color Picker</a>
        </div>
        <div className="NavBar-slider-container">
          <span>Level: {this.props.level}</span>
          <div className="NavBar-slider">
            <Slider defaultValue={this.props.level} min={0} max={10} onChange={this.props.changeLevel} />
          </div>
        </div>
      </nav>
    );
  }
}
