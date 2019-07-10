import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import NavBar from './NavBar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import './SingleColorPalette.css';

const styles = {
  ColorBox: {
    width: '16.6666666666666666666666%',
    height: '50%',
    cursor: 'pointer',
    position: 'relative',
    textTransform: 'uppercase'
  },
  ColorBoxBack: {
    color: 'rgb(51, 51, 51)',
    position: 'absolute',
    width: '5rem',
    height: '2rem',
    margin: '-1rem 0 0 -2.5rem',
    top: '50%',
    left: '50%',
    background: 'rgba(255, 255, 255, 0.25)',
    border: 'none',
    outline: 'none',
    fontFamily: 'inherit',
    fontWeight: 'bold',
    textTransform: 'inherit',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }
};

class SingleColorPalette extends Component {
  constructor() {
    super();
    this.state = { mode: 'hex' };
    this.changeMode = this.changeMode.bind(this);
  }
  changeMode(mode) {
    this.setState({ mode });
  }
  render() {
    const { palette, color, classes } = this.props;
    const { id: paletteId, emoji, paletteName } = palette;
    const shades = palette.colors.map(col => col.find(c => c.id === color));
    return (
      <div className="SingleColorPalette">
        <NavBar mode={this.state.mode} changeMode={this.changeMode} />
        <div className="SingleColorPalette-colors">
          {shades.map(c => (
            <ColorBox {...c} mode={this.state.mode} paletteId={paletteId} key={c.name} single />
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
