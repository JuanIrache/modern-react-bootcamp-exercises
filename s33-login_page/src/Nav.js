import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { Emoji } from 'emoji-mart';
import styles from './styles/NavStyles';
import { withStyles } from '@material-ui/core/styles';
import ThemeContext from './contexts/ThemeContext';

class Nav extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes } = this.props;
    const { darkTheme, toggleTheme } = this.context;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={`${classes.appBar} ${darkTheme ? classes.dark : ''}`}>
          <Toolbar>
            <div className={classes.flag}>
              <Emoji emoji="fr" set="google" size={20} aria-label="Language: fr" />
            </div>
            <Typography className={classes.title} variant="h6" noWrap>
              Login Page
            </Typography>
            <div className={classes.switch}>
              <Typography className={classes.p} variant="body1" noWrap>
                Theme
              </Typography>
              <Switch value="checkedF" color="secondary" onChange={toggleTheme} inputProps={{ 'aria-label': 'Dark or light theme' }} />
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'Search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Nav);
