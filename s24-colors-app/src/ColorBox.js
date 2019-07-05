import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
    const { hex, mode, id } = this.props;
    const { copying } = this.state;
    return (
      <CopyToClipboard text={this.props[mode]} onCopy={this.startCopy}>
        <div className="ColorBox" style={{ backgroundColor: hex }}>
          <div className={`ColorBox-overlay-bg${copying ? ' show' : ''}`} style={{ backgroundColor: hex }} />
          <div className={`ColorBox-overlay-text${copying ? ' show' : ''}`}>
            <h3>Copied!</h3>
            <p>{this.props[mode]}</p>
          </div>
          <button className="ColorBox-copy">Copy</button>
          <span className="ColorBox-name">{id}</span>
          <span className="ColorBox-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
