import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContext from './contexts/ThemeContext';
import styles from './styles/LoginCardStyles';
import LanguageContext from './contexts/LanguageContext';

const dictionary = {
  en: {
    signIn: 'Sign In',
    name: 'Name',
    insertYourName: 'Insert your name',
    password: 'Password',
    insertYourPassword: 'Insert your password',
    rememberMe: 'Remember me',
    language: 'Language'
  },
  fr: {
    signIn: 'Se Connecter',
    name: 'Nom',
    insertYourName: 'Inserez votre nom',
    password: 'Mot de passe',
    insertYourPassword: 'Inserez votre mot de passe',
    rememberMe: 'Souvienez-vous de moi',
    language: 'Langue'
  },
  es: {
    signIn: 'Iniciar Sesión',
    name: 'Nombre',
    insertYourName: 'Introduzca su nombre',
    password: 'Contraseña',
    insertYourPassword: 'Introduzca su contraseña',
    rememberMe: 'Recordarme',
    language: 'Idioma'
  }
};

export default () => {
  const { lang, setLang } = useContext(LanguageContext);
  const { darkTheme } = useContext(ThemeContext);
  const classes = makeStyles(styles)();

  return (
    <Card className={`${classes.card} ${darkTheme ? classes.dark : ''}`}>
      <CardContent>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography className={classes.title} variant="h4" component="h1">
          {dictionary[lang].signIn}
        </Typography>
        <FormControl className={classes.formControl}>
          <Select value={lang} onChange={setLang} name="age" className={classes.select}>
            <MenuItem value="" disabled>
              {dictionary[lang].language}
            </MenuItem>
            <MenuItem value={'en'}>English</MenuItem>
            <MenuItem value={'fr'}>Français</MenuItem>
            <MenuItem value={'es'}>Español</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.inputs}>
          <div className={classes.input}>
            <TextField
              label={dictionary[lang].name}
              placeholder={dictionary[lang].insertYourName}
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
          <div className={classes.input}>
            <TextField
              label={dictionary[lang].password}
              placeholder={dictionary[lang].insertYourPassword}
              type="password"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
          <FormControlLabel
            className={classes.input}
            control={<Checkbox checked={true} onChange={null} color="primary" />}
            label={dictionary[lang].rememberMe}
          />
          <div className={classes.input}>
            <Button variant="contained" color="primary" className={classes.button}>
              {dictionary[lang].signIn}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
