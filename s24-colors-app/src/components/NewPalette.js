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
    colors: this.props.startingColors.map(c => ({ ...c, locked: false, key: c.name })),
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
    const newColor = { name: this.state.name, color: this.state.color, locked: false, key: this.state.name };
    this.setState({ colors: [...this.state.colors, newColor], name: '' });
  };

  clearPalette = () => {
    this.setState({ colors: this.state.colors.filter(c => c.locked) });
  };

  randomColor = (basedOn, compareList = this.state.colors) => {
    let newColor;
    basedOn = basedOn || this.state.colors[this.state.colors.length - 1];
    const repeated = col => compareList.some(color => color.name === col.name || color.color === col.color);
    do {
      newColor = smartColorGenerator(basedOn);
    } while (repeated(newColor));
    return { ...newColor, locked: false, key: newColor.name };
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
  onSortEnd = ({ oldIndex: oldI, newIndex: newI, cb }) => {
    const { colors } = this.state;
    const movingColor = colors[oldI];
    const backwards = oldI > newI;
    let newOrder = [];
    if (backwards) {
      newOrder = [...colors.slice(0, newI), movingColor, ...colors.slice(newI, oldI), ...colors.slice(oldI + 1)];
    } else {
      newOrder = [...colors.slice(0, oldI), ...colors.slice(oldI + 1, newI + 1), movingColor, ...colors.slice(newI + 1)];
    }
    this.setState({ colors: newOrder }, () => {
      if (cb) cb();
    });
  };

  autoSort = () => {
    const oldOrder = JSON.parse(JSON.stringify(this.state.colors));
    const dist = (col, ref) => chroma.deltaE(ref, col);
    const temp = col => chroma(col).temperature();
    const firstReorder = oldOrder.sort((a, b) => temp(a.color) - temp(b.color));
    let newOrder = [];
    for (let i = 0; i < 4; i++) {
      const section = firstReorder.slice(i * 5, i * 5 + 5);
      newOrder = newOrder.concat(section.sort((a, b) => dist(a.color, section[0].color) - dist(b.color, section[0].color)));
    }
    this.sortOneByOne({ oldOrder, newOrder, idx: 0 });
  };

  sortOneByOne({ oldOrder, newOrder, idx }) {
    if (oldOrder.length > idx) {
      const key = newOrder[idx].key;
      const oldIndex = this.state.colors.reduce((acc, cur, i) => (cur.key === key ? i : acc), 0);
      const newIndex = newOrder.reduce((acc, cur, i) => (cur.key === key ? i : acc), 0);
      this.onSortEnd({
        oldIndex,
        newIndex,
        cb: () => {
          if (idx < 19) {
            setImmediate(() => {
              this.sortOneByOne({ oldOrder, newOrder, idx: idx + 1 });
            });
          }
        }
      });
    }
  }

  autoGenerate = () => {
    let baseColors = this.state.colors.filter(c => c.locked);
    let newColors = [];
    for (let i = 0; i < 20; i++) {
      const c = this.state.colors[i];
      if (c && c.locked) newColors[i] = c;
      else {
        const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)];
        const basedOn = pickRandom(baseColors);
        const newColor = this.randomColor(basedOn, baseColors);
        baseColors.push(newColor);
        newColors[i] = newColor;
      }
    }

    //Use a temporary array with different keys and empty colors to allow updating one by one without duplicating keys
    let tempColors = [];
    for (let i = 0; i < 20; i++) {
      let existing = this.state.colors[i];
      if (existing) {
        tempColors[i] = existing.locked ? existing : { ...existing, key: i + 'temp' };
      } else {
        tempColors[i] = { name: '', color: 'rgba(0,0,0,0)', key: i + 'temp' };
      }
    }

    this.setState({ colors: tempColors }, () => {
      this.updateOneByOne(newColors, 0);
    });
  };

  updateOneByOne = (colors, idx) => {
    this.setState({ colors: this.state.colors.map((c, i) => (i === idx ? colors[idx] : c)) }, () => {
      if (idx < 19) {
        setImmediate(() => {
          this.updateOneByOne(colors, idx + 1);
        });
      }
    });
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
      toggleLock,
      autoGenerate
    } = this;
    return (
      <div className={classes.root}>
        <NewPaletteTopBar
          {...{
            open,
            paletteName,
            emoji,
            colors,
            palettes,
            savePalette,
            handleDrawerOpen,
            changePaletteName,
            changeEmoji,
            autoSort,
            autoGenerate
          }}
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
