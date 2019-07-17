import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [darkTheme, setTheme] = useState(JSON.parse(window.localStorage.getItem('darkTheme') || 'false'));
  const toggleTheme = () => {
    window.localStorage.setItem('darkTheme', JSON.stringify(!darkTheme));
    setTheme(!darkTheme);
  };

  return <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;
