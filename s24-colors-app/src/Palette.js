import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';

export default class Palette extends Component {
  render() {
    return (
      <div className="Palette">
        <div className="Palette-colors">
          {this.props.colors.map(c => (
            <ColorBox {...c} />
          ))}
        </div>
      </div>
    );
  }
}
