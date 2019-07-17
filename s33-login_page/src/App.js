import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Todo from './Todo';

// use default theme
// const theme = createMuiTheme();

// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#eab543'
    },
    primary: {
      main: '#40739e'
    }
  }
});

export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Todo />
    </MuiThemeProvider>
  );
};
