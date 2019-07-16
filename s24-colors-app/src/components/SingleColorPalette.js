import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import styles from '../styles/SingleColorPaletteStyles';

class SingleColorPalette extends Component {
  state = { mode: 'hex' };

  changeMode = mode => {
    this.setState({ mode });
  };
  render() {
    const { palette, color, classes } = this.props;
    const { id: paletteId, emoji, paletteName } = palette;
    const { mode } = this.state;
    const shades = palette.colors.map(col => col.find(c => c.id === color));
    return (
      <div className={classes.SingleColorPalette}>
        <NavBar mode={mode} changeMode={this.changeMode} />
        <div className={classes.SingleColorPaletteColors}>
          {shades.map(c => (
            <ColorBox {...c} mode={mode} paletteId={paletteId} key={c.name} single />
          ))}
          <Link className={classes.ColorBox} style={{ backgroundColor: '#fff' }} to={`/palette/${paletteId}`}>
            <button className={classes.ColorBoxBack}>Go Back</button>
          </Link>
        </div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
