import React, { Component } from 'react';
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
import { withStyles } from '@material-ui/core/styles';
import ThemeContext from './contexts/ThemeContext';
import styles from './styles/LoginCardStyles';

class LoginCard extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes } = this.props;
    const { darkTheme } = this.context;
    return (
      <Card className={`${classes.card} ${darkTheme ? classes.dark : ''}`}>
        <CardContent>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography className={classes.title} variant="h4" component="h1">
            Sign In
          </Typography>
          <FormControl className={classes.formControl}>
            <Select value={'en'} onChange={null} name="age" className={classes.select}>
              <MenuItem value="" disabled>
                Language
              </MenuItem>
              <MenuItem value={'en'}>English</MenuItem>
              <MenuItem value={'fr'}>Français</MenuItem>
              <MenuItem value={'es'}>Español</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <TextField
                label="Name"
                placeholder="Insert your name"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
            <div className={classes.input}>
              <TextField
                className={classes.input}
                label="Password"
                placeholder="Insert your passord"
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
              label="Remember me?"
            />
            <div className={classes.input}>
              <Button variant="contained" color="primary" className={classes.button}>
                Sign In
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(LoginCard);
