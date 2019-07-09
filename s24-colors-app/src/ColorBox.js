import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';
import { light } from '@material-ui/core/styles/createPalette';

export default class ColorBox extends Component {
  constructor() {
    super();
    this.state = { copying: false };
    this.startCopy = this.startCopy.bind(this);
  }
  startCopy() {
    this.setState({ copying: true }, () => {
      setTimeout(() => {
        this.setState({ copying: false });
      }, 800);
    });
  }
  render() {
    const { hex, mode, id, name, paletteId, single } = this.props;
    const { copying } = this.state;
    const lightColor = chroma(hex).luminance() > 0.7;
    const darkColor = chroma(hex).luminance() < 0.2;

    const moreLink = (
      <Link
        className={`ColorBox-more${lightColor ? ' dark-text' : ''}`}
        to={`/palette/${paletteId}/${id}`}
        onClick={e => e.stopPropagation()}
      >
        More
      </Link>
    );
    return (
      <CopyToClipboard text={this.props[mode]} onCopy={this.startCopy}>
        <div className={`ColorBox ${!single ? 'fiveByFour' : 'sixByTwo'}`} style={{ backgroundColor: hex }}>
          <div className={`ColorBox-overlay-bg${copying ? ' show' : ''}`} style={{ backgroundColor: hex }} />
          <div className={`ColorBox-overlay-text${copying ? ' show' : ''}`}>
            <h3>Copied!</h3>
            <p className={lightColor ? 'dark-text' : ''}>{this.props[mode]}</p>
          </div>
          <button className={`ColorBox-copy${lightColor ? ' dark-text' : ''}`}>Copy</button>
          <span className={`ColorBox-name${darkColor ? ' light-text' : ''}`}>{name}</span>
          {!single && moreLink}
        </div>
      </CopyToClipboard>
    );
  }
}
