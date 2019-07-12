import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormDrawerStyles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import { ChromePicker } from 'react-color';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

class FormDrawer extends Component {
  componentDidMount() {
    ValidatorForm.addValidationRule('isNameUnique', val =>
      this.props.colors.every(color => color.name.toLowerCase() !== this.props.name.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', val =>
      this.props.colors.every(color => color.color.toLowerCase() !== this.props.color.toLowerCase())
    );
  }
  render() {
    const { classes, open, color, name, addColor, changeColor, changeName, handleDrawerClose } = this.props;
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
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />{' '}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.lowDrawer}>
          <div>
            <Button variant="outlined" color="secondary" className={classes.button}>
              Clear Palette
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              Auto Color
            </Button>
          </div>
          <ChromePicker color={color} onChangeComplete={changeColor} className={classes.picker} />
          <div>
            <ValidatorForm ref="form" onSubmit={addColor} onError={console.error}>
              <TextValidator
                name="newColorName"
                title="New Color Name"
                placeholder="Insert color name"
                value={name}
                onChange={changeName}
                validators={['required', 'isNameUnique', 'isColorUnique']}
                errorMessages={['Field required', 'Name must be unique', 'Color must be new']}
              />
              <Button type="submit" variant="contained" className={classes.button} id="add-color-button" style={{ backgroundColor: color }}>
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
