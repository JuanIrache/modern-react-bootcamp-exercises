import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { num: 1, win: false };
    this.randomNum = this.randomNum.bind(this);
  }

  randomNum() {
    const newNum = Math.floor(Math.random() * 10);
    this.setState({ num: newNum, win: newNum === 7 });
  }
  render() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <h1>Number is {this.state.num}</h1>
        {this.state.win ? <p>Winner!</p> : <button onClick={this.randomNum}>Random Number</button>}
      </div>
    );
  }
}

export default App;
