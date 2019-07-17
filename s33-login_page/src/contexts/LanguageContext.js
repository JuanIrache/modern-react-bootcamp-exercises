import React, { useState, createContext } from 'react';

const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const [lang, setState] = useState(JSON.parse(window.localStorage.getItem('lang') || '"fr"'));
  const setLang = e => {
    setState(e.target.value);
  };
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export default LanguageContext;

/////Old code for Components
export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>{value => <Component languageContext={value} {...props} />}</LanguageContext.Consumer>
);
