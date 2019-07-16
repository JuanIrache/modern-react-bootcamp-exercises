import React, { PureComponent } from 'react';
import { Emoji } from 'emoji-mart';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CopyIcon from '@material-ui/icons/FileCopy';
import ConfirmationDialog from './ConfirmationDialog';
import styles from '../styles/MiniPaletteStyles';

class MiniPalette extends PureComponent {
  state = { dialogOpen: false };
  handleClick = () => this.props.handleClick(this.props.id);
  deletePalette = () => {
    this.props.deletePalette(this.props.id);
  };
  duplicatePalette = e => {
    e.stopPropagation();
    this.props.duplicatePalette(this.props.id);
  };
  openDialog = e => {
    e.stopPropagation();
    this.setState({ dialogOpen: true });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.inner} onClick={this.handleClick}>
          <div className={classes.colors}>
            <CopyIcon className={classes.copyIcon} onClick={this.duplicatePalette} />
            <DeleteIcon className={classes.deleteIcon} onClick={this.openDialog} />
            {colors.map(c => (
              <div key={c.color} style={{ backgroundColor: c.color }} className={classes.smallColor} />
            ))}
          </div>
          <div className={classes.title}>
            <h3>{paletteName}</h3>
            <Emoji emoji={emoji} set="google" size={18} />
          </div>
        </div>
        <ConfirmationDialog
          open={this.state.dialogOpen}
          onClose={this.closeDialog}
          confirmedAction={this.deletePalette}
          question="Delete palette?"
        />
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
