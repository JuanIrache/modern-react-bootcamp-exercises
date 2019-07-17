import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Dog.css';

export default class Dog extends Component {
  render() {
    if (this.props.dog) {
      const { name, age, facts, src } = this.props.dog;
      return (
        <div className="Dog">
          <div className="Dog-inner">
            <img className="Dog-img" src={src} alt={name} />
            <div className="Dog-description">
              <div className="Dog-description-left">
                <h1 className="Dog-name">{name}</h1>
                <h3 className="Dog-age">{age} years old</h3>
              </div>
              <div className="Dog-description-middle">
                <ul className="Dog-facts">
                  {facts.map((f, i) => (
                    <li className="Dog-fact" key={i}>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="Dog-description-right">
                <button className="Dog-button" onClick={this.props.history.goBack}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else return <Redirect to="/notfound" />;
  }
}
