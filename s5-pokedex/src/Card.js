import React, { Component } from 'react';

const icons = {
  fire: '🔥',
  water: '🌊',
  bug: '🐛',
  flying: '🕊️',
  electric: '💡',
  normal: '😑',
  poison: '⚗️'
};

const baseImgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Card extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    return (
      <div className="Card">
        <h1>
          {name} {icons[type]}
        </h1>
        <img src={baseImgUrl + id.toString().padStart(3, '0') + '.png'} alt="" />
        <p>EXP: {exp}</p>
      </div>
    );
  }
}

export default Card;
