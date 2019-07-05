import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './NavBar.css';

import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: this.props.mode };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ mode: e.target.value });
    this.props.change(e.target.value);
  }
  render() {
    return (
      <nav className="NavBar">
        <div className="NavBar-logo">
          <a href="#">React Color Picker</a>
        </div>
        <div className="NavBar-slider-container">
          <div className="NavBar-slider">
            <Slider defaultValue={this.props.level} min={0} max={10} onChange={this.props.changeLevel} />
          </div>
          <span>Level: {this.props.level}</span>
        </div>
        <div className="NavBar-select-container">
          <Select value={this.state.mode} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}
