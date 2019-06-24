import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import './Deck.css';

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', cards: [], empty: false };
    this.draw = this.draw.bind(this);
  }
  componentDidMount() {
    axios
      .get('https://deckofcardsapi.com/api/deck/new/shuffle/')
      .then(({ data }) => {
        if (data.deck_id != null) this.setState({ id: data.deck_id });
        else throw new Error('No deck id');
      })
      .catch(console.error);
  }
  draw() {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${this.state.id}/draw/`)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ cards: [...this.state.cards, data.cards[0]] });
        } else if (data.remaining === 0) {
          this.setState({ empty: true });
        }
      })
      .catch(console.error);
  }
  render() {
    const { id, empty, cards } = this.state;
    return (
      <div className="Deck">
        <button className="Deck-button" onClick={this.draw} disabled={!id.length && !empty}>
          {empty ? 'No more cards' : id.length ? 'Draw a card' : 'Loading'}
        </button>
        <div className="Deck-cards">
          {cards.map(c => (
            <Card {...c} key={c.code} />
          ))}
        </div>
      </div>
    );
  }
}
