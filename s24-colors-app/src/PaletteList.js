import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PaletteList extends Component {
  render() {
    return (
      <ul className="PaletteList">
        {this.props.palettes.map(p => (
          <li key={p.id}>
            <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
