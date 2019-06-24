import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    const angle = Math.random() - 0.5;
    const posX = Math.random() - 0.5;
    const posY = Math.random() - 0.5;
    this._transform = `rotate(${angle * 90}deg) translate(${Math.round(posX * 20)}px,${Math.round(posY * 20)}px)`;
  }
  render() {
    const { image, value, suit } = this.props;
    return <img src={image} alt={`${value} of ${suit}`} className="Card" style={{ transform: this._transform }} />;
  }
}
