import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { Emoji } from 'emoji-mart';
import styles from '../styles/NavStyles';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContext from '../contexts/ThemeContext';
import LanguageContext from '../contexts/LanguageContext';

const dictionary = {
  en: {
    loginPage: 'Login Page',
    theme: 'Theme',
    search: 'Search',
    language: 'Language',
    flag: 'uk',
    darkOrLightTheme: 'Dark or light theme'
  },
  fr: {
    loginPage: 'Page de connexion',
    theme: 'Thème',
    search: 'Chercher',
    language: 'Langue',
    flag: 'fr',
    darkOrLightTheme: 'Thème sombre ou clair'
  },
  es: {
    loginPage: 'Página de entrada',
    theme: 'Tema',
    search: 'Buscar',
    language: 'Idioma',
    flag: 'es',
    darkOrLightTheme: 'Tema oscuro o claro'
  }
};

export default () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const classes = makeStyles(styles)();
  const words = dictionary[lang];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={`${classes.appBar} ${darkTheme ? classes.dark : ''}`}>
        <Toolbar>
          <div className={classes.flag}>
            <Emoji emoji={words.flag} set="google" size={20} aria-label={`${words.language}: ${lang}`} />
          </div>
          <Typography className={classes.title} variant="h6" noWrap>
            {words.loginPage}
          </Typography>
          <div className={classes.switch}>
            <Typography className={classes.p} variant="body1" noWrap>
              {words.theme}
            </Typography>
            <Switch checked={darkTheme} color="secondary" onChange={toggleTheme} inputProps={{ 'aria-label': words.darkOrLightTheme }} />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${words.search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': words.search }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
