import React from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelper';
import './App.css';

function App() {
  console.log(generatePalette(seedColors[1]));

  return (
    <div className="App">
      <Palette {...seedColors[1]} />
    </div>
  );
}

export default App;
