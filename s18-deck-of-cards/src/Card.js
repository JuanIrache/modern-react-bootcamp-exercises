import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    const { angle, pos, image, value, suit } = this.props;
    const style = {
      transform: `rotate(${angle * 90}deg) translate(${Math.round(pos.x * 20)}px,${Math.round(pos.y * 20)}px)`
    };
    return <img src={image} alt={`${value} of ${suit}`} className="Card" style={style} />;
  }
}
