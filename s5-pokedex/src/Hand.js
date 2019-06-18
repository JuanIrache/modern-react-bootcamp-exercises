import React, { Component } from 'react';
import Card from './Card';
import './Hand.css';

class Hand extends Component {
  render() {
    let result = <p className="Hand-p Hand-loser">Loser...</p>;
    if (this.props.winner) result = <p className="Hand-p Hand-winner">Winner!</p>;
    return (
      <div className="Hand">
        {result}
        <p className="Hand-p">Total Experience: {this.props.exp}</p>
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
