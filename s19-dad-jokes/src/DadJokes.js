import React, { Component } from 'react';
import axios from 'axios';
import JokeList from './JokeList';
import Header from './Header';

export default class DadJokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
    this.retrieve = this.generate.bind(this);
    this.rate = this.rate.bind(this);
  }
  componentDidMount() {
    this.generate();
  }

  rate(idx, plus) {
    this.setState({ jokes: this.state.jokes.map(j => (j.id === idx ? { ...j, rating: plus ? j.rating + 1 : j.rating - 1 } : j)) });
  }

  generate() {
    const instance = axios.create({ baseURL: 'https://icanhazdadjoke.com/', timeout: 1000, headers: { Accept: 'application/json' } });
    let jokes = [];
    const retrieveRecursive = function() {
      instance
        .get('https://icanhazdadjoke.com/')
        .then(({ data: { status, joke, id } }) => {
          if (status === 200) {
            if (!this.state.jokes.some(j => j.id === id)) jokes.push({ joke, id, rating: 0 });
            if (jokes.length >= 10) {
              this.setState({ jokes });
            } else {
              retrieveRecursive.call(this);
            }
          } else throw new Error('Failed to retrieve joke');
        })
        .catch(console.error);
    };
    retrieveRecursive.call(this);
  }

  render() {
    return (
      <div className="DadJokes">
        <Header generate={this.generate} enabled={this.state.jokes.length} />
        <JokeList jokes={this.state.jokes} rate={this.rate} />
      </div>
    );
  }
}
