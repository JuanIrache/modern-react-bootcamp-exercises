import React, { Component } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/FormDrawerStyles';

class FormDrawer extends Component {
  componentDidMount() {
    ValidatorForm.addValidationRule('isNameUnique', val =>
      this.props.colors.every(color => color.name.toLowerCase() !== this.props.name.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', val =>
      this.props.colors.every(color => color.color.toLowerCase() !== this.props.color.toLowerCase())
    );
    ValidatorForm.addValidationRule('availableSpace', val => this.props.colors.length < 20);
    ValidatorForm.addValidationRule('stringNotTooLong', val => this.props.name.length <= 14);
  }
  render() {
    const {
      classes,
      open,
      color,
      colors,
      name,
      addColor,
      changeColor,
      changeName,
      handleDrawerClose,
      clearPalette,
      autoColor
    } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <div />
          <h1>New Palette</h1>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />{' '}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.lowDrawer}>
          <div>
            <Button variant="outlined" color="secondary" onClick={clearPalette} className={classes.button} disabled={colors.length === 0}>
              Clear Palette
            </Button>
            <Button variant="outlined" color="primary" onClick={autoColor} className={classes.button} disabled={colors.length >= 20}>
              Smart Color
            </Button>
          </div>
          <ChromePicker color={color} width="90%" onChangeComplete={changeColor} className={classes.picker} />
          <div className={classes.lowerForm}>
            <ValidatorForm onSubmit={addColor} instantValidate={false}>
              <TextValidator
                className={classes.input}
                name="newColorName"
                title="New Color Name"
                placeholder="Insert color name"
                value={name}
                onChange={changeName}
                validators={['required', 'isNameUnique', 'isColorUnique', 'availableSpace', 'stringNotTooLong']}
                errorMessages={['Field required', 'Name must be unique', 'Color must be new', 'Palette is full', 'Name is too long']}
              />
              <Button type="submit" variant="contained" className={classes.button} id="add-color-button" disabled={colors.length >= 20}>
                Add Color
              </Button>
            </ValidatorForm>
          </div>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FormDrawer);
