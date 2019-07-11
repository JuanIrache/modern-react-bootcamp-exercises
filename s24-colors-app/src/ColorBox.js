import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
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
    const { mode, id, name, paletteId, classes, single } = this.props;
    const { copying } = this.state;

    const moreLink = (
      <Link className={classes.ColorBoxMore} to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
        More
      </Link>
    );
    return (
      <CopyToClipboard text={this.props[mode]} onCopy={this.startCopy}>
        <div className={classes.ColorBox}>
          <div className={`${classes.ColorBoxOverlayBg} ${copying ? 'show' : ''}`} />
          <div className={`${classes.ColorBoxOverlayText} ${copying ? 'show' : ''}`}>
            <h3>Copied!</h3>
            <p>{this.props[mode]}</p>
          </div>
          <button className={classes.ColorBoxCopy}>Copy</button>
          <span className={classes.ColorBoxName}>{name}</span>
          {!single && moreLink}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
