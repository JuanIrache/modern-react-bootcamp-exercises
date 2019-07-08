import React, { Component } from 'react';
import { Emoji } from 'emoji-mart';
import './Palette.css';
import ColorBox from './ColorBox';
import NavBar from './NavBar';

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
    const { level } = this.state;
    const { colors, paletteName, emoji } = this.props.palette;

    return (
      <div className="Palette">
        <NavBar level={this.state.level} changeLevel={this.changeLevel} mode={this.state.mode} changeMode={this.changeMode} />
        <div className="Palette-colors">
          {colors[level].map(c => (
            <ColorBox key={c.id} {...c} mode={this.state.mode} />
          ))}
        </div>
        <footer className="Palette-footer">
          {paletteName}{' '}
          <span className="Palette-footer-emoji">
            <Emoji emoji={emoji} set="google" size={20} />
          </span>
        </footer>
      </div>
    );
  }
}
