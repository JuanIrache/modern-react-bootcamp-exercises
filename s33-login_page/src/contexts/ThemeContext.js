import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [darkTheme, setTheme] = useState(false);
  const toggleTheme = () => setTheme(!darkTheme);

  return <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;
