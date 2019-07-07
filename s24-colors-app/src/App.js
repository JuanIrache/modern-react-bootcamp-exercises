import React from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './colorHelper';
import './App.css';

function App() {
  console.log();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <h1>Index</h1>} />
        <Route exact path="/palette/:id" render={() => <Palette palette={generatePalette(seedColors[0])} />} />
      </Switch>
    </div>
  );
}

export default App;
