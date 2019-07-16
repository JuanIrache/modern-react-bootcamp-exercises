import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import 'rc-slider/assets/index.css';
import styles from '../styles/NavBarStyles';

class NavBar extends Component {
  state = { mode: this.props.mode, snack: false };
  handleModeChange = e => {
    this.setState({ mode: e.target.value, snack: true });
    this.props.changeMode(e.target.value);
  };
  handleClose = () => {
    this.setState({ snack: false });
  };
  render() {
    const { changeLevel, classes, level } = this.props;
    const slider = (
      <div className={classes.NavBarSliderContainer}>
        <div className={classes.NavBarSlider}>
          <Slider defaultValue={level} min={0} max={10} onChange={changeLevel} />
        </div>
        <span>
          <span className={classes.hideable}>Level: </span>
          {level}
        </span>
      </div>
    );
    return (
      <nav className={classes.NavBar}>
        <div className={classes.NavBarLogo}>
          <Link to="/">Palette Manager</Link>
        </div>
        {level != null && slider}
        <div className={classes.NavBarSelectContainer}>
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

export default withStyles(styles)(NavBar);
