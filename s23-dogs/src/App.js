import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Dog from './Dog';
import Dogs from './Dogs';
import NotFound from './NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: 'Whiskey',
        age: 5,
        src:
          'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
        facts: ['Whiskey loves eating popcorn.', 'Whiskey is a terrible guard dog.', 'Whiskey wants to cuddle with you!']
      },
      {
        name: 'Hazel',
        age: 3,
        src:
          'https://images.unsplash.com/photo-1549291981-56d443d5e2a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        facts: ['Hazel has soooo much energy!', 'Hazel is highly intelligent.', 'Hazel loves people more than dogs.']
      },
      {
        name: 'Tubby',
        age: 4,
        src:
          'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
        facts: ['Tubby is not the brightest dog', 'Tubby does not like walks or exercise.', 'Tubby loves eating food.']
      }
    ]
  };
  findDog(name) {
    return this.props.dogs.find(d => d.name === name);
  }

  render() {
    const { dogs } = this.props;
    return (
      <div className="App">
        <Nav items={dogs} />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dogs" />} />
          <Route exact path="/dogs" render={() => <Dogs dogs={dogs} />} />
          <Route exact path="/dogs/:name" render={rp => <Dog {...rp} dog={this.findDog(rp.match.params.name)} />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
