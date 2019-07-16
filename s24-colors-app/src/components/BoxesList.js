import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DraggableBox from './DraggableBox';

const styles = {
  root: {
    height: 'calc(100% - 64px)'
  }
};

function BoxesList({ colors, removeColor, classes, duplicateColor, toggleLock }) {
  return (
    <div className={classes.root}>
      {colors.map((col, i) => (
        <DraggableBox key={col.name} index={i} {...{ duplicateColor, removeColor, toggleLock }} {...col} />
      ))}
    </div>
  );
}

export default SortableContainer(withStyles(styles)(BoxesList));
