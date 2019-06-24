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
    this.generate = this.generate.bind(this);
    this.rate = this.rate.bind(this);
  }

  componentDidMount() {
    const local = localStorage.getItem('DadJokes');
    if (local) this.setState({ jokes: JSON.parse(local) });
    else this.generate();
  }

  rate(idx, diff) {
    const jokes = this.state.jokes.map(j => (j.id === idx ? { ...j, rating: j.rating + diff } : j));
    this.setState({ jokes });
    localStorage.setItem('DadJokes', JSON.stringify(jokes));
  }

  generate() {
    const instance = axios.create({ timeout: 1000, headers: { Accept: 'application/json' } });
    let jokes = [];
    const retrieveRecursive = async () => {
      const { data } = await instance.get('https://icanhazdadjoke.com/').catch(console.error);
      const { status, joke, id } = data;
      if (status === 200) {
        if (!jokes.some(j => j.id === id)) jokes.push({ joke, id, rating: 0 });
        if (jokes.length >= 10) {
          this.setState({ jokes });
          localStorage.setItem('DadJokes', JSON.stringify(jokes));
        } else retrieveRecursive();
      } else console.error('Failed to retrieve joke');
    };
    retrieveRecursive();
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
