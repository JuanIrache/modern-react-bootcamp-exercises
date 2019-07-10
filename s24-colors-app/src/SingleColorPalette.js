import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import './SingleColorPalette.css';

export default class SingleColorPalette extends Component {
  constructor() {
    super();
    this.state = { mode: 'hex' };
    this.changeMode = this.changeMode.bind(this);
  }
  changeMode(mode) {
    this.setState({ mode });
  }
  render() {
    const { palette, color } = this.props;
    const { id: paletteId, emoji, paletteName } = palette;
    const shades = palette.colors.map(col => col.find(c => c.id === color));
    return (
      <div className="SingleColorPalette">
        <NavBar mode={this.state.mode} changeMode={this.changeMode} />
        <div className="SingleColorPalette-colors">
          {shades.map(c => (
            <ColorBox {...c} mode={this.state.mode} paletteId={paletteId} key={c.name} single />
          ))}
          <Link className="ColorBox sixByTwo" style={{ backgroundColor: '#fff' }} to={`/palette/${paletteId}`}>
            <button className="ColorBox-back dark-text">Go Back</button>
          </Link>
        </div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}
