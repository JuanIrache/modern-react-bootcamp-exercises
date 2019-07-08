import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: { width: '60%', margin: 'auto' }
};

class PaletteList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.props.palettes.map(p => (
          <MiniPalette {...p} key={p.id} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
