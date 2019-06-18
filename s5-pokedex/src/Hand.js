import React, { Component } from 'react';
import Card from './Card';
import './Hand.css';

class Hand extends Component {
  render() {
    return (
      <div className="Hand">
        <p>Hand exp: {this.props.exp}</p>
        <p>{this.props.winner ? 'Winner!' : 'Loser...'}</p>
        <div className="Hand-cards">
          {this.props.pokemons.map(pokemon => (
            <Card id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience} />
          ))}
        </div>
      </div>
    );
  }
}

export default Hand;
