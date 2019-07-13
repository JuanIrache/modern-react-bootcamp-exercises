import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import randomWords from 'random-words';
import styles from './styles/NewPaletteStyles';
import FormDrawer from './FormDrawer';
import BoxesList from './BoxesList';
import NewPaletteTopBar from './NewPaletteTopBar';

class NewPalette extends Component {
  state = {
    open: true,
    color: 'pink',
    name: '',
    colors: [],
    paletteName: ''
  };

  componentDidMount = () => {
    this.setState({ color: this.randomColor() });
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

  randomColor = () => `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  randomName = () =>
    randomWords(2)
      .map(w => w[0].toUpperCase() + w.slice(1))
      .join('')
      .slice(0, 14);

  autoColor = () => {
    if (this.state.colors.length < 20) {
      const newColorObj = {
        color: this.randomColor(),
        name: this.randomName()
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

  removeColor = colorName => {
    this.setState({ colors: this.state.colors.filter(c => c.name !== colorName) });
  };

  onSortEnd = ({ oldIndex: oldI, newIndex: newI }) => {
    const { colors } = this.state;
    const movingColor = colors[oldI];
    const backwards = oldI > newI;
    let newOrder;
    if (backwards) {
      newOrder = [...colors.slice(0, newI), movingColor, ...colors.slice(newI, oldI), ...colors.slice(oldI + 1)];
    } else {
      newOrder = [...colors.slice(0, oldI), ...colors.slice(oldI + 1, newI + 1), movingColor, ...colors.slice(newI + 1)];
    }
    this.setState({ colors: newOrder });
  };

  render() {
    const { classes, palettes } = this.props;
    const { open, colors, paletteName } = this.state;
    return (
      <div className={classes.root}>
        <NewPaletteTopBar
          open={open}
          paletteName={paletteName}
          colors={colors}
          palettes={palettes}
          savePalette={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen}
          changePaletteName={this.changePaletteName}
        />
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
          <BoxesList
            colors={colors}
            removeColor={this.removeColor}
            items={colors}
            onSortEnd={this.onSortEnd}
            axis="xy"
            transitionDuration={100}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPalette);
