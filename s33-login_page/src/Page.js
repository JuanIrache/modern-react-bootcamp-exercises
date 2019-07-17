import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ThemeContext from './contexts/ThemeContext';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PageStyles';

class Page extends Component {
  static contextType = ThemeContext;

  render() {
    const { darkTheme } = this.context;
    const { classes, children } = this.props;
    return <Paper className={`${classes.root} ${darkTheme ? classes.dark : ''}`}>{children}</Paper>;
  }
}

export default withStyles(styles)(Page);
