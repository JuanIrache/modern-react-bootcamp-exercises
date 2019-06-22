import React, { Component } from 'react';
import './Box.css';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.delete(this.props.id);
  }
  render() {
    let { width, height, backgroundColor } = this.props;
    width += 'px';
    height += 'px';

    return (
      <div className="Box" style={{ width, height, backgroundColor }}>
        <button onClick={this.handleClick}>x</button>
      </div>
    );
  }
}
