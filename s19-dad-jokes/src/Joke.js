import React, { Component } from 'react';
import './Joke.css';
import { Emoji } from 'emoji-mart';

export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.rateUp = this.rateUp.bind(this);
    this.rateDown = this.rateDown.bind(this);
  }
  static defaultProps = {
    smileys: {
      '-11': 'dizzy_face',
      '-10': 'rage',
      '-9': 'triumph',
      '-8': 'angry',
      '-7': 'sob',
      '-6': 'cold_sweat',
      '-5': 'disappointed_relieved',
      '-4': 'confounded',
      '-3': 'anguished',
      '-2': 'unamused',
      '-1': 'disappointed',
      '0': 'frowning',
      '1': 'neutral_face',
      '2': 'relieved',
      '3': 'grimacing',
      '4': 'smirk',
      '5': 'stuck_out_tongue_winking_eye',
      '6': 'blush',
      '7': 'sweat_smile',
      '8': 'smile',
      '9': 'laughing',
      '10': 'joy',
      '11': 'scream',
      '12': 'sunglasses'
    }
  };
  rateUp() {
    this.props.rate(this.props.id, +1);
  }
  rateDown() {
    this.props.rate(this.props.id, -1);
  }
  getRGB(rating) {
    if (rating > 0) return `${200 - rating * 20},200,0`;
    return `200,${200 - rating * -20},0`;
  }
  render() {
    const { rating, joke, smileys } = this.props;

    return (
      <div className="Joke">
        <div className="Joke-left">
          {rating != null && (
            <div>
              <button onClick={this.rateDown} className="Joke-arrow Joke-arrow-down">
                ⬇
              </button>
              <div className="Joke-rating" style={{ border: `3px solid rgb(${this.getRGB(rating)})` }}>
                {rating}
              </div>
              <button onClick={this.rateUp} className="Joke-arrow Joke-arrow-up">
                ⬆
              </button>
            </div>
          )}
        </div>
        <div className="Joke-text">{joke}</div>
        <span className={`Joke-emoji${rating == null ? ' Joke-emoji-roll' : ''}`} role="img" aria-label="">
          <Emoji emoji={`:${smileys[Math.min(Math.max(rating || 0, -11), 12).toString()]}:`} set="messenger" size={32} />
        </span>
      </div>
    );
  }
}
