import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

class Palette extends Component {
  state = { level: 5, mode: 'hex' };

  changeLevel = level => {
    this.setState({ level });
  };
  changeMode = mode => {
    this.setState({ mode });
  };
  render() {
    const { level, mode } = this.state;
    const { palette, classes } = this.props;
    const { colors, paletteName, emoji, id } = palette;

    return (
      <div className={classes.Palette}>
        <NavBar level={level} changeLevel={this.changeLevel} mode={mode} changeMode={this.changeMode} />
        <div className={classes.PaletteColors}>
          {colors[level].map(c => (
            <ColorBox {...c} mode={mode} paletteId={id} key={c.id} />
          ))}
        </div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
