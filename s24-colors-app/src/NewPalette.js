import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import randomWords from 'random-words';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles/NewPaletteStyles';
import DraggableBox from './DraggableBox';
import FormDrawer from './FormDrawer';

class NewPalette extends Component {
  state = {
    open: true,
    color: '#8ED2D2',
    name: 'lightTeal',
    colors: [],
    paletteName: ''
  };

  componentDidMount = () => {
    ValidatorForm.addValidationRule('paletteNotEmpty', val => this.state.colors.length);
    ValidatorForm.addValidationRule('paletteNameUinque', val => this.props.palettes.every(p => p.paletteName.toLowerCase() !== val));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  changeColor = ({ hex }) => {
    this.setState({ color: hex });
  };

  changeName = e => {
    this.setState({ name: e.target.value });
  };

  changePaletteName = e => {
    this.setState({ paletteName: e.target.value });
  };

  addColor = () => {
    const newColor = { name: this.state.name, color: this.state.color };
    this.setState({ colors: [...this.state.colors, newColor], name: '' });
  };

  clearPalette = () => {
    this.setState({ colors: [] });
  };

  autoColor = () => {
    if (this.state.colors.length < 20) {
      const newColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
      const newColorObj = {
        color: newColor,
        name: randomWords(3)
          .map(w => w[0].toUpperCase() + w.slice(1))
          .join('')
      };
      this.setState({ colors: [...this.state.colors, newColorObj] });
    }
  };

  savePalette = () => {
    const newPalette = {
      colors: this.state.colors,
      paletteName: this.state.paletteName,
      id: this.state.paletteName.toLowerCase().replace(/\s/g, '-'),
      emoji: 'art'
    };
    this.props.savePalette(newPalette);
    this.props.history.push(`/`);
  };

  render() {
    const { classes } = this.props;
    const { open, colors, paletteName } = this.state;
    return (
      <div className={classes.root}>
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
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <h1>New Palette</h1>
            <ValidatorForm ref="form" onSubmit={this.savePalette} onError={console.error}>
              <TextValidator
                name="newPalette"
                title="New Palette Name"
                placeholder="Insert palette name"
                value={paletteName}
                onChange={this.changePaletteName}
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
          </Toolbar>
        </AppBar>
        <FormDrawer
          {...this.state}
          addColor={this.addColor}
          changeColor={this.changeColor}
          changeName={this.changeName}
          handleDrawerClose={this.handleDrawerClose}
          clearPalette={this.clearPalette}
          autoColor={this.autoColor}
        />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {colors.map(col => (
            <DraggableBox key={col.name} {...col} />
          ))}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPalette);
