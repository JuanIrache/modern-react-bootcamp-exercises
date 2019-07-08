import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Emoji } from 'emoji-mart';

const styles = {
  root: {
    display: 'inline-block',
    width: '33.3%'
  },
  inner: {
    backgroundColor: 'white',
    margin: '.5rem',
    padding: '.5rem',
    display: 'block',
    boxShadow: '.1rem .1rem .3rem rgba(0,0,0,.2)'
  },
  colors: {
    height: '6rem',
    backgroundColor: '#ddd',
    marginBottom: '.5rem',
    fontSize: 0
  },
  smallColor: {
    width: '20%',
    height: '25%',
    display: 'inline-block'
  },
  title: { width: '100%', display: 'flex', justifyContent: 'space-between' }
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, id, colors } = props;
  return (
    <div className={classes.root}>
      <Link className={classes.inner} to={`/palette/${id}`}>
        <div className={classes.colors}>
          {colors.map(c => (
            <div key={c.color} style={{ backgroundColor: c.color }} className={classes.smallColor} />
          ))}
        </div>
        <div className={classes.title}>
          <div>{paletteName}</div>
          <Emoji emoji={emoji} set="google" size={18} />
        </div>
      </Link>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
