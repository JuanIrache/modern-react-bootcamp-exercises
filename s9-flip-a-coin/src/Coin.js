import React, { Component } from 'react';
import './Coin.css';

export default class Coin extends Component {
  render() {
    return <i class={`Coin fas fa-${this.props.heads ? 'plus' : 'minus'}-circle`} />;
  }
}
