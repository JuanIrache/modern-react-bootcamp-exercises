import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Emoji } from 'emoji-mart';

const styles = {
  root: {
    backgroundColor: 'white',
    display: 'inline-block',
    width: '33.3%'
  },
  inner: {
    margin: '1rem',
    padding: '1rem',
    border: '1px solid black',
    display: 'block'
  },
  colors: {
    height: '4rem',
    backgroundColor: 'pink',
    marginBottom: '1rem'
  },
  title: { width: '100%', display: 'flex', justifyContent: 'space-between' }
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, id } = props;
  return (
    <div className={classes.root}>
      <Link className={classes.inner} to={`/palette/${id}`}>
        <div className={classes.colors} />
        <div className={classes.title}>
          <div>{paletteName}</div>
          <Emoji emoji={emoji} set="google" size={18} />
        </div>
      </Link>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
