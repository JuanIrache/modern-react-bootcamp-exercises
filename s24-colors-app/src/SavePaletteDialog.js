import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withStyles } from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

import styles from './styles/SavePaletteDialogStyles.js';

class SavePaletteDialog extends Component {
  state = {
    open: false
  };

  componentDidMount = () => {
    ValidatorForm.addValidationRule('paletteNameUinque', val => this.props.palettes.every(p => p.paletteName.toLowerCase() !== val));
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  savePalette = () => {
    this.handleClose();
    setTimeout(this.props.savePalette, 40);
  };

  render() {
    const { paletteName, changePaletteName, changeEmoji, colors, classes } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen} disabled={!colors.length}>
          Save
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <ValidatorForm onSubmit={this.savePalette} instantValidate={false}>
            <DialogTitle id="form-dialog-title">Choose name</DialogTitle>
            <DialogContent>
              <TextValidator
                fullWidth
                autoFocus
                margin="dense"
                name="newPalette"
                title="New Palette Name"
                placeholder="Insert palette name"
                value={paletteName}
                onChange={changePaletteName}
                validators={['required', 'paletteNameUinque']}
                errorMessages={['Field required', 'Palette name repeated']}
              />
            </DialogContent>
            <DialogTitle id="form-dialog-title">Choose emoji</DialogTitle>
            <DialogContent>
              <Picker
                set="google"
                showSkinTones={false}
                showPreview={false}
                emojiSize={30}
                emojiTooltip={true}
                exclude={['recent']}
                onSelect={changeEmoji}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary" className={classes.button} disabled={!paletteName.length}>
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SavePaletteDialog);
