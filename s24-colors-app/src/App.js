import React from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import NewPalette from './NewPalette';
import PaletteList from './PaletteList';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './colorHelper';
import './App.css';

function App() {
  const findGenPalette = id => generatePalette(seedColors.find(seed => seed.id === id));
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={rp => <PaletteList palettes={seedColors} {...rp} />} />
        <Route exact path="/palette/new" component={NewPalette} />
        <Route exact path="/palette/:id" render={rp => <Palette palette={findGenPalette(rp.match.params.id)} />} />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={rp => <SingleColorPalette palette={findGenPalette(rp.match.params.paletteId)} color={rp.match.params.colorId} />}
        />
        <Route exact render={() => <h1>Not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
