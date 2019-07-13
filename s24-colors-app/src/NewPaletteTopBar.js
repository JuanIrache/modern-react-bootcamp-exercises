import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles/NewPaletteTopBarStyles';

class TopBar extends Component {
  componentDidMount = () => {
    ValidatorForm.addValidationRule('paletteNotEmpty', val => this.props.colors.length);
    ValidatorForm.addValidationRule('paletteNameUinque', val => this.props.palettes.every(p => p.paletteName.toLowerCase() !== val));
  };
  render() {
    const { classes, open, paletteName, colors, savePalette, handleDrawerOpen, changePaletteName } = this.props;
    return (
      <div>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <h1>New Palette</h1>
            <ValidatorForm onSubmit={savePalette} onError={console.error}>
              <TextValidator
                name="newPalette"
                title="New Palette Name"
                placeholder="Insert palette name"
                value={paletteName}
                onChange={changePaletteName}
                validators={['required', 'paletteNotEmpty', 'paletteNameUinque']}
                errorMessages={['Field required', 'Add some colors', 'Palette name repeated']}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={!colors.length || !paletteName.length}
              >
                Save
              </Button>
            </ValidatorForm>
            <Link to="/">
              <Button variant="contained" color="secondary" className={classes.button}>
                Back
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TopBar);
