import React, { Component, createContext } from 'react';

const LanguageContext = createContext();

export class LanguageContextProvider extends Component {
  state = { lang: JSON.parse(window.localStorage.getItem('lang') || '"fr"') };
  setLang = e => {
    this.setState({ lang: e.target.value });
  };
  render() {
    return (
      <LanguageContext.Provider value={{ lang: this.state.lang, setLang: this.setLang }}>{this.props.children}</LanguageContext.Provider>
    );
  }
}

export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>{value => <Component languageContext={value} {...props} />}</LanguageContext.Consumer>
);

export default LanguageContext;
