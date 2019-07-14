import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withStyles } from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

import styles from './styles/SavePaletteDialogStyles.js';

class SavePaletteDialog extends Component {
  state = {
    open: false
  };

  componentDidMount = () => {
    ValidatorForm.addValidationRule('paletteNotEmpty', val => this.props.colors.length);
    ValidatorForm.addValidationRule('paletteNameUinque', val => this.props.palettes.every(p => p.paletteName.toLowerCase() !== val));
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { savePalette, paletteName, changePaletteName, colors, classes } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          Save
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <ValidatorForm onSubmit={savePalette} onError={console.error}>
            <DialogTitle id="form-dialog-title">Choose palette name</DialogTitle>
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
                validators={['required', 'paletteNotEmpty', 'paletteNameUinque']}
                errorMessages={['Field required', 'Add some colors', 'Palette name repeated']}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={!colors.length || !paletteName.length}
              >
                Next
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SavePaletteDialog);
