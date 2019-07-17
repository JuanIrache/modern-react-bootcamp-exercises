import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:'white',
    height:'100vh'
  },
}));

export default function PaperSheet({children}) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        {children}
      </Paper>
    </div>
  );
}