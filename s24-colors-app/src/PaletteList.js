import React from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles';

function PaletteList(props) {
  const linkPalette = id => {
    props.history.push(`/palette/${id}`);
  };

  const { classes, deletePalette, resetPalettes, palettes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Palette Manager</h1>
          <div>
            <button onClick={resetPalettes}>Reset</button> | <Link to="/palette/new">Create Palette</Link>
          </div>
        </nav>
        {palettes.map(p => (
          <MiniPalette {...p} key={p.id} deletePalette={deletePalette} handleClick={linkPalette} />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
