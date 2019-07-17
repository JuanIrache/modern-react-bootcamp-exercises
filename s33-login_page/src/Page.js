import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ThemeContext from './contexts/ThemeContext';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    // backgroundColor: darkTheme ? 'black' : 'white',
    height: '100vh'
  }
};

class Page extends Component {
  static contextType = ThemeContext;

  render() {
    const { darkTheme } = this.context;
    const { classes, children } = this.props;
    return (
      <Paper className={classes.root} style={{ transition: 'all .5s ease', backgroundColor: darkTheme ? '#2f3640' : '#f5f6fa' }}>
        {children}
      </Paper>
    );
  }
}

export default withStyles(styles)(Page);
