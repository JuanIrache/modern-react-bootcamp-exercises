import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { enabled, generate } = this.props;
    return (
      <div>
        Header
        <button onClick={generate} disabled={!enabled}>
          {enabled ? 'New Jokes' : 'Waiting...'}
        </button>
      </div>
    );
  }
}
