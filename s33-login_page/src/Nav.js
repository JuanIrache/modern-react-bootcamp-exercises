import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { Emoji } from 'emoji-mart';
import styles from './styles/NavStyles';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContext from './contexts/ThemeContext';
import LanguageContext from './contexts/LanguageContext';

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

  return (
    <div className={classes.root}>
      <AppBar position="static" className={`${classes.appBar} ${darkTheme ? classes.dark : ''}`}>
        <Toolbar>
          <div className={classes.flag}>
            <Emoji emoji={dictionary[lang].flag} set="google" size={20} aria-label={`${dictionary[lang].language}: ${lang}`} />
          </div>
          <Typography className={classes.title} variant="h6" noWrap>
            {dictionary[lang].loginPage}
          </Typography>
          <div className={classes.switch}>
            <Typography className={classes.p} variant="body1" noWrap>
              {dictionary[lang].theme}
            </Typography>
            <Switch
              value="checkedF"
              color="secondary"
              onChange={toggleTheme}
              inputProps={{ 'aria-label': dictionary[lang].darkOrLightTheme }}
            />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${dictionary[lang].search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': dictionary[lang].search }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
