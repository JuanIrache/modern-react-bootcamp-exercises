import React, { Component } from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import NewPalette from './NewPalette';
import PaletteList from './PaletteList';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './colorHelper';
import './App.css';

class App extends Component {
  state = { palettes: seedColors };

  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  };
  findGenPalette = id => generatePalette(this.state.palettes.find(seed => seed.id === id));
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={rp => <PaletteList palettes={this.state.palettes} {...rp} />} />
          <Route
            exact
            path="/palette/new"
            render={rp => <NewPalette palettes={this.state.palettes} savePalette={this.savePalette} {...rp} />}
          />
          <Route exact path="/palette/:id" render={rp => <Palette palette={this.findGenPalette(rp.match.params.id)} />} />
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={rp => <SingleColorPalette palette={this.findGenPalette(rp.match.params.paletteId)} color={rp.match.params.colorId} />}
          />
          <Route exact render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
