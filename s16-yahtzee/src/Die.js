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
    const { icons, val, locked, rolling } = this.props;
    return <i className={`Die ${icons[val || 0]}${locked ? ' Die-locked' : ''}${rolling ? ' Die-rolling' : ''}`} onClick={this.click} />;
  }
}

export default Die;
