import React from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelper';
import './App.css';

function App() {
  console.log();

  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[8])} />
    </div>
  );
}

export default App;
