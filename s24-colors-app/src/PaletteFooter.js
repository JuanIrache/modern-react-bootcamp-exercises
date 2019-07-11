import React from 'react';
import { Emoji } from 'emoji-mart';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteFooterStyles';

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}{' '}
      <span className={classes.PaletteFooterEmoji}>
        <Emoji emoji={emoji} set="google" size={20} />
      </span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
