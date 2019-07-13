import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableBox from './DraggableBox';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    height: 'calc(100% - 64px)'
  }
};

function BoxesList({ colors, removeColor, classes }) {
  return (
    <div className={classes.root}>
      {colors.map((col, i) => (
        <DraggableBox key={col.name} index={i} removeColor={removeColor} {...col} />
      ))}
    </div>
  );
}

export default SortableContainer(withStyles(styles)(BoxesList));
