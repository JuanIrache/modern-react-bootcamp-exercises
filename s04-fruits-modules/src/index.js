import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import foods from './foods';
import { choice, remove } from './helpers';

class App extends Component {
  render() {
    const randomFood = choice(foods);

    return (
      <div>
        <p>We have {foods.length} foods.</p>
        <p>I'd like one {randomFood}, please</p>
        <p>Here you go: {remove(foods, randomFood)}</p>
        <p>Delicious, may I have another?</p>
        <p>I'm sorry, we're all out. We have {foods.length} foods left.</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
