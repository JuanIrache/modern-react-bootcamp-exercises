import React, { Component } from 'react';
import Hand from './Hand';

const pokemons = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

let hand1 = [];
let hand2 = [...pokemons];

while (hand1.length < hand2.length) {
  const id = Math.floor(Math.random() * hand2.length);
  hand1.push(hand2.splice(id, 1)[0]);
}

let exp1 = hand1.reduce((acc, pok) => acc + pok.base_experience, 0);
let exp2 = hand2.reduce((acc, pok) => acc + pok.base_experience, 0);

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <Hand pokemons={hand1} exp={exp1} winner={exp1 > exp2} />
        <Hand pokemons={hand2} exp={exp2} winner={exp2 > exp1} />
      </div>
    );
  }
}

export default Game;
