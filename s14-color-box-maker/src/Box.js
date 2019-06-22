import React, { Component } from 'react';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.delete(this.props.css.key);
  }
  render() {
    let { width, height, backgroundColor } = this.props.css;
    width += 'px';
    height += 'px';

    return (
      <div className="Box">
        <div style={{ width, height, backgroundColor }} />
        {/* <div style={{ width: '100px', height: '100px', backgroundColor: 'black' }} /> */}
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}
