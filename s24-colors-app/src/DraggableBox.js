import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableBoxStyles';

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
