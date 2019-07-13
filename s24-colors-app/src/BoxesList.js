import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableBox from './DraggableBox';

function BoxesList({ colors, removeColor }) {
  return (
    <div style={{ height: '100%' }}>
      {colors.map((col, i) => (
        <DraggableBox key={col.name} index={i} removeColor={removeColor} {...col} />
      ))}
    </div>
  );
}

export default SortableContainer(BoxesList);
