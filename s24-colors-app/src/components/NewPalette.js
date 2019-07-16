import React, { Component } from 'react';
import clsx from 'clsx';
import chroma from 'chroma-js';
import smartColorGenerator from '../util/smartColorGenerator';
import FormDrawer from './FormDrawer';
import BoxesList from './BoxesList';
import NewPaletteTopBar from './NewPaletteTopBar';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NewPaletteStyles';

class NewPalette extends Component {
  state = {
    open: true,
    color: 'pink',
    name: '',
    colors: this.props.startingColors.map(c => ({ ...c, locked: false })),
    paletteName: '',
    emoji: ''
  };

  componentDidMount = () => {
    this.setState({ ...this.randomColor() });
    this.props.resetStartingColors();
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
  changeEmoji = emoji => {
    this.setState({ emoji: emoji.id });
  };

  addColor = () => {
    const newColor = { name: this.state.name, color: this.state.color, locked: false };
    this.setState({ colors: [...this.state.colors, newColor], name: '' });
  };

  clearPalette = () => {
    this.setState({ colors: this.state.colors.filter(c => c.locked) });
  };

  randomColor = () => {
    let newColor;
    const repeated = col => this.state.colors.some(color => color.name === col.name || color.color === col.color);
    do {
      newColor = smartColorGenerator(this.state.colors[this.state.colors.length - 1]);
    } while (repeated(newColor));
    return { ...newColor, locked: false };
  };

  autoColor = () => {
    if (this.state.colors.length < 20) {
      this.setState({ colors: [...this.state.colors, this.randomColor()] });
    }
  };

  savePalette = () => {
    const newPalette = {
      colors: this.state.colors.map(c => ({ name: c.name, color: c.color })),
      paletteName: this.state.paletteName,
      id: this.state.paletteName.toLowerCase().replace(/\s/g, '-'),
      emoji: this.state.emoji
    };
    this.props.savePalette(newPalette);
    this.props.history.push(`/`);
  };

  removeColor = colorName => {
    this.setState({ colors: this.state.colors.filter(c => c.name !== colorName) });
  };

  //Drag and drop sort!
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

  autoSort = () => {
    const dist = (col, ref) => chroma.deltaE(ref, col);
    const temp = col => chroma(col).temperature();
    const firstReorder = this.state.colors.sort((a, b) => temp(a.color) - temp(b.color));
    let newOrder = [];
    for (let i = 0; i < 4; i++) {
      const section = firstReorder.slice(i * 5, i * 5 + 5);
      newOrder = newOrder.concat(section.sort((a, b) => dist(a.color, section[0].color) - dist(b.color, section[0].color)));
    }
    this.setState({ colors: newOrder });
  };

  duplicateColor = color => {
    this.setState({ name: color.name, color: color.color });
  };

  toggleLock = colorName => {
    this.setState({ colors: this.state.colors.map(c => (c.name === colorName ? { ...c, locked: !c.locked } : c)) });
  };

  render() {
    const { classes, palettes } = this.props;
    const { open, colors, color, name, paletteName, emoji } = this.state;
    const {
      savePalette,
      handleDrawerOpen,
      changePaletteName,
      changeEmoji,
      addColor,
      changeColor,
      changeName,
      handleDrawerClose,
      clearPalette,
      autoColor,
      removeColor,
      onSortEnd,
      autoSort,
      duplicateColor,
      toggleLock
    } = this;
    return (
      <div className={classes.root}>
        <NewPaletteTopBar
          {...{ open, paletteName, emoji, colors, palettes, savePalette, handleDrawerOpen, changePaletteName, changeEmoji, autoSort }}
        />
        <FormDrawer {...{ open, colors, color, name, addColor, changeColor, changeName, handleDrawerClose, clearPalette, autoColor }} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <BoxesList
            {...{ colors, removeColor, onSortEnd, duplicateColor, toggleLock }}
            items={colors}
            axis="xy"
            distance={20}
            transitionDuration={100}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPalette);
