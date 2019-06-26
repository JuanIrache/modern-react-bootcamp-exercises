import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Dog.css';

export default class Dog extends Component {
  render() {
    if (this.props.dog) {
      const { name, age, facts, src } = this.props.dog;
      return (
        <div className="Dog">
          <img className="Dog-img" src={src} alt={name} />
          <h1 className="Dog-name">{name}</h1>
          <h3 className="Dog-age">{age} years old</h3>
          <ul className="Dog-facts">
            {facts.map((f, i) => (
              <li className="Dog-fact" key={i}>
                {f}
              </li>
            ))}
          </ul>
          <Link to="/dogs">
            <button>Back</button>
          </Link>
        </div>
      );
    } else return <Redirect to="/notfound" />;
  }
}
