import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'rc-slider/assets/index.css';
import './NavBar.css';

import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: this.props.mode, snack: false };
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleModeChange(e) {
    this.setState({ mode: e.target.value, snack: true });
    this.props.changeMode(e.target.value);
  }
  handleClose() {
    this.setState({ snack: false });
  }
  render() {
    return (
      <nav className="NavBar">
        <div className="NavBar-logo">
          <Link to="/">Palette Manager</Link>
        </div>
        <div className="NavBar-slider-container">
          <div className="NavBar-slider">
            <Slider defaultValue={this.props.level} min={0} max={10} onChange={this.props.changeLevel} />
          </div>
          <span>Level: {this.props.level}</span>
        </div>
        <div className="NavBar-select-container">
          <Select value={this.state.mode} onChange={this.handleModeChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.snack}
          autoHideDuration={3000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">Mode changed: {this.state.mode.toUpperCase()}</span>}
          action={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </nav>
    );
  }
}
