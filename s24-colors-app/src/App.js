import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import seedColors from './util/seedColors';
import { generatePalette } from './util/colorHelper';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import NewPalette from './components/NewPalette';
import PaletteList from './components/PaletteList';
import Page from './components/Page';
import './App.css';

class App extends Component {
  state = { palettes: JSON.parse(window.localStorage.getItem('palettes')) || seedColors };

  saveToLocal = () => {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  };

  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.saveToLocal);
  };

  deletePalette = id => {
    this.setState({ palettes: this.state.palettes.filter(p => p.id !== id) }, this.saveToLocal);
  };

  resetPalettes = () => {
    this.setState({ palettes: seedColors }, this.saveToLocal);
  };

  findGenPalette = id => generatePalette(this.state.palettes.find(seed => seed.id === id));
  render() {
    const { palettes } = this.state;
    const { resetPalettes, deletePalette } = this;
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={500} classNames="page">
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={rp => {
                      return (
                        <Page>
                          <PaletteList {...{ palettes, resetPalettes, deletePalette }} {...rp} />
                        </Page>
                      );
                    }}
                  />
                  <Route
                    exact
                    path="/palette/new"
                    render={rp => (
                      <Page>
                        <NewPalette palettes={palettes} savePalette={this.savePalette} {...rp} />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={rp => (
                      <Page>
                        <Palette palette={this.findGenPalette(rp.match.params.id)} />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={rp => (
                      <Page>
                        <SingleColorPalette palette={this.findGenPalette(rp.match.params.paletteId)} color={rp.match.params.colorId} />
                      </Page>
                    )}
                  />
                  <Route
                    render={rp => {
                      return (
                        <Page>
                          <PaletteList {...{ palettes, resetPalettes, deletePalette }} {...rp} />
                        </Page>
                      );
                    }}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
