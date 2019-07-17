import React, { useState, createContext } from 'react';

const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const [lang, setLang] = useState(window.localStorage.getItem('lang') || 'fr');
  const selectLang = e => {
    setLang(e.target.value);
    window.localStorage.setItem('lang', e.target.value);
  };

  return <LanguageContext.Provider value={{ lang, selectLang }}>{children}</LanguageContext.Provider>;
}

export default LanguageContext;

/////Old code for Components
// export const withLanguageContext = Component => props => (
//   <LanguageContext.Consumer>{value => <Component languageContext={value} {...props} />}</LanguageContext.Consumer>
// );
