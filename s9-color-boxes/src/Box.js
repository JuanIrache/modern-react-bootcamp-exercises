import React, { Component } from 'react';
import './Box.css';

export default class Box extends Component {
  render() {
    return <div className="Box" style={{ backgroundColor: '#' + this.props.color }} onClick={this.props.update} />;
  }
}
