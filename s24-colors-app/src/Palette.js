import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import NavBar from './NavBar';

export default class Palette extends Component {
  constructor() {
    super();
    this.state = { level: 5 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { level } = this.state;
    const { colors } = this.props.palette;
    return (
      <div className="Palette">
        <NavBar level={this.state.level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">
          {colors[level].map(c => (
            <ColorBox key={c.id} {...c} />
          ))}
        </div>
      </div>
    );
  }
}
