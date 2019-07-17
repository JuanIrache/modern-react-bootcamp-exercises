import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContext from './contexts/ThemeContext';
import styles from './styles/PageStyles';

export default ({ children }) => {
  const { darkTheme } = useContext(ThemeContext);
  const classes = makeStyles(styles)();

  return <Paper className={`${classes.root} ${darkTheme ? classes.dark : ''}`}>{children}</Paper>;
};
