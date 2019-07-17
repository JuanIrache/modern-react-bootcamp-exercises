import React from 'react';
import Nav from './Nav';
import Page from './Page';
import LoginCard from './LoginCard';
import { ThemeContextProvider } from './contexts/ThemeContext';

export default () => {
  return (
    <ThemeContextProvider>
      <Page>
        <Nav />
        <LoginCard />
      </Page>
    </ThemeContextProvider>
  );
};
