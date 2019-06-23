import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }
  click() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    return (
      <button className={'Die'} style={{ backgroundColor: this.props.locked ? 'grey' : 'black' }} onClick={this.click}>
        {this.props.val}
      </button>
    );
  }
}

export default Die;
