import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/PageStyles.js';

function Page({ classes, children }) {
  return <div className={classes.root}>{children}</div>;
}

export default withStyles(styles)(Page);
