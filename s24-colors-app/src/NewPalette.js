import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles/NewPaletteStyles';
import DraggableBox from './DraggableBox';
import FormDrawer from './FormDrawer';

class NewPalette extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
      color: '#8ED2D2',
      name: 'lightTeal',
      colors: [{ name: 'pink', color: 'pink' }, { name: 'blue', color: 'blue' }, { name: 'red', color: 'red' }]
    };
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.addColor = this.addColor.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  changeColor({ hex }) {
    this.setState({ color: hex });
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }

  addColor() {
    const newColor = { name: this.state.name, color: this.state.color };
    this.setState({ colors: [...this.state.colors, newColor], name: '' });
  }

  render() {
    const { classes } = this.props;
    const { open, colors } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
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
          </Toolbar>
        </AppBar>
        <FormDrawer {...this.state} addColor={this.addColor} changeColor={this.changeColor} changeName={this.changeName} handleDrawerClose={this.handleDrawerClose} />
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
