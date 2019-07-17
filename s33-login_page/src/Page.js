import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    height: '100vh'
  }
}));

export default ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>{children}</Paper>
    </div>
  );
};
