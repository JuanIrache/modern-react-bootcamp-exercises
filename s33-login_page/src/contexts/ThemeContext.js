import React, { Component, createContext } from 'react';

const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
  state = { darkTheme: false };

  toggleTheme = () => {
    this.setState({ darkTheme: !this.state.darkTheme });
  };

  render() {
    return <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>{this.props.children}</ThemeContext.Provider>;
  }
}

export default ThemeContext;
