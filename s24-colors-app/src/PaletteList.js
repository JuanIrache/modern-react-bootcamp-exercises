import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  linkPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { classes, deletePalette, resetPalettes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Palette Manager</h1>
            <div>
              <button onClick={resetPalettes}>Reset</button> | <Link to="/palette/new">Create Palette</Link>
            </div>
          </nav>
          {this.props.palettes.map(p => (
            <MiniPalette {...p} key={p.id} deletePalette={deletePalette} handleClick={this.linkPalette} />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
