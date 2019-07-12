import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  constructor() {
    super();
    this.linkPalette = this.linkPalette.bind(this);
  }
  linkPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Palette Manager</h1>
          </nav>
          {this.props.palettes.map(p => (
            <MiniPalette {...p} key={p.id} handleClick={this.linkPalette} />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
