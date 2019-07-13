import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/DraggableBoxStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

function DraggableBox(props) {
  const { classes, color, name } = props;
  const removeColor = () => props.removeColor(name);
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <span className={classes.deleteIcon}>
          <DeleteIcon onClick={removeColor} />
        </span>
      </div>
    </div>
  );
}

export default SortableElement(withStyles(styles)(DraggableBox));
