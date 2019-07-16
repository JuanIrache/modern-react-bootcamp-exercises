import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SavePaletteDialog from './SavePaletteDialog';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NewPaletteTopBarStyles';

function TopBar(props) {
  const {
    classes,
    open,
    paletteName,
    colors,
    savePalette,
    handleDrawerOpen,
    changePaletteName,
    emoji,
    changeEmoji,
    palettes,
    autoSort,
    autoGenerate
  } = props;
  return (
    <div>
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.toolbarContent}>
            <div className={classes.rightSide}>
              <Link to="/">
                <Button variant="outlined" color="secondary" className={classes.button}>
                  Back
                </Button>
              </Link>
              <Button variant="outlined" onClick={autoGenerate} color="primary" className={classes.button}>
                <span className="hideable">Auto-</span>Generate
              </Button>
              <Button variant="outlined" onClick={autoSort} color="primary" className={classes.button} disabled={colors.length < 2}>
                <span className="hideable">Auto-</span>Sort
              </Button>
              <SavePaletteDialog {...{ savePalette, paletteName, changePaletteName, changeEmoji, colors, palettes, emoji }} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(TopBar);
