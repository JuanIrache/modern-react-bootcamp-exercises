import React, { Component } from 'react';
import './Card.css';

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
        <h2 className="Card-title">
          {name} {icons[type]}
        </h2>
        <div className="Card-img">
          <img src={baseImgUrl + id.toString().padStart(3, '0') + '.png'} alt="" />
        </div>
        <p className="Card-exp">
          EXP: <strong>{exp}</strong>
        </p>
      </div>
    );
  }
}

export default Card;
