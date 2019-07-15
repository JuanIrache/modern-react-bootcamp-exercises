import React, { Component } from 'react';
import clsx from 'clsx';
import randomWords from 'random-words';
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
    colors: [],
    paletteName: '',
    emoji: ''
  };

  componentDidMount = () => {
    this.setState({ ...this.randomColor() });
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
    const newColor = { name: this.state.name, color: this.state.color };
    this.setState({ colors: [...this.state.colors, newColor], name: '' });
  };

  clearPalette = () => {
    this.setState({ colors: [] });
  };

  randomColor = () => {
    let newColor;
    do {
      newColor = smartColorGenerator(this.state.colors[this.state.colors.length - 1]);
    } while (this.state.colors.some(color => color.name === newColor.name || color.color === newColor.color));
    return newColor;
  };

  randomName = () =>
    randomWords(2)
      .map(w => w[0].toUpperCase() + w.slice(1))
      .join('')
      .slice(0, 14);

  autoColor = () => {
    if (this.state.colors.length < 20) {
      this.setState({ colors: [...this.state.colors, this.randomColor()] });
    }
  };

  savePalette = () => {
    const newPalette = {
      colors: this.state.colors,
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
      onSortEnd
    } = this;
    return (
      <div className={classes.root}>
        <NewPaletteTopBar
          {...{ open, paletteName, emoji, colors, palettes, savePalette, handleDrawerOpen, changePaletteName, changeEmoji }}
        />
        <FormDrawer {...{ open, colors, color, name, addColor, changeColor, changeName, handleDrawerClose, clearPalette, autoColor }} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <BoxesList {...{ colors, removeColor, onSortEnd }} items={colors} axis="xy" distance={20} transitionDuration={100} />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPalette);
