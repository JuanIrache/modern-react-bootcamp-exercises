import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';

export default class Palette extends Component {
  constructor() {
    super();
    this.state = { level: 5, mode: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeMode(mode) {
    this.setState({ mode });
  }
  render() {
    const { level, mode } = this.state;
    const { colors, paletteName, emoji, id } = this.props.palette;

    return (
      <div className="Palette">
        <NavBar level={level} changeLevel={this.changeLevel} mode={mode} changeMode={this.changeMode} />
        <div className="Palette-colors">
          {colors[level].map(c => (
            <ColorBox {...c} mode={mode} paletteId={id} name={c.key} />
          ))}
        </div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}
