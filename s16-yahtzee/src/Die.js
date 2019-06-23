import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }

  static defaultProps = {
    icons: [
      'fas fa-square',
      'fas fa-dice-one',
      'fas fa-dice-two',
      'fas fa-dice-three',
      'fas fa-dice-four',
      'fas fa-dice-five',
      'fas fa-dice-six'
    ]
  };
  click() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    return <i className={`Die ${this.props.icons[this.props.val || 0]}`} onClick={this.click} />;
  }
}

export default Die;
