import React from 'react';
import Nav from './Nav';
import Page from './Page';
import LoginCard from './LoginCard';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { LanguageContextProvider } from '../contexts/LanguageContext';

export default () => (
  <ThemeContextProvider>
    <LanguageContextProvider>
      <Page>
        <Nav />
        <LoginCard />
      </Page>
    </LanguageContextProvider>
  </ThemeContextProvider>
);
