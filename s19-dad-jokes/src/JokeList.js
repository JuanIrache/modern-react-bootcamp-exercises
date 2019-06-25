import React, { Component } from 'react';
import Joke from './Joke';
import './JokeList.css';

export default class JokeList extends Component {
  render() {
    return (
      <div className="JokeList">
        {this.props.jokes.length ? (
          this.props.jokes.map(j => <Joke {...j} key={j.id} rate={this.props.rate} />)
        ) : (
          <Joke key="Loading" joke="Loading..." rating="0" />
        )}
      </div>
    );
  }
}
