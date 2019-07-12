import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/DraggableBoxStyles';

function DraggableBox(props) {
  const { classes, color, name } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <p>{name}</p>
    </div>
  );
}

export default withStyles(styles)(DraggableBox);
