import React from 'react';
import { withStyles } from '@material-ui/styles';
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
    boxShadow: '.1rem .1rem .3rem rgba(0,0,0,.2)',
    '& :hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    height: '6rem',
    backgroundColor: '#ddd',
    marginBottom: '.5rem',
    fontSize: 0,
    borderRadius: '.2rem',
    overflow: 'hidden'
  },
  smallColor: {
    width: '20%',
    height: '25%',
    display: 'inline-block'
  },
  title: { width: '100%', display: 'flex', justifyContent: 'space-between', '& h3': { fontSize: '.8rem', margin: 0 } }
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, id, colors } = props;
  const handleClick = () => props.handleClick(id);
  return (
    <div className={classes.root}>
      <div className={classes.inner} onClick={handleClick}>
        <div className={classes.colors}>
          {colors.map(c => (
            <div key={c.color} style={{ backgroundColor: c.color }} className={classes.smallColor} />
          ))}
        </div>
        <div className={classes.title}>
          <h3>{paletteName}</h3>
          <Emoji emoji={emoji} set="google" size={18} />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
