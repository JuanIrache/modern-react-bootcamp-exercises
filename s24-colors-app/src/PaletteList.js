import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: { backgroundColor: 'skyBlue', height: '100vh' },
  container: { width: '70%', margin: 'auto' },
  nav: {
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
    '& h1': {
      margin: 0,
      padding: '.5rem',
      fontSize: '1.3rem'
    }
  }
};

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
