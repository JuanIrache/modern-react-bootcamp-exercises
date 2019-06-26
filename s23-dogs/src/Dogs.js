import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dogs.css';

export default class Dogs extends Component {
  render() {
    return (
      <div className="Dogs">
        <h1 className="Dogs-title">Click a Dog!</h1>
        <div className="Dogs-dogs">
          {this.props.dogs.map(d => (
            <div key={d.name} className="Dogs-dog">
              <Link to={`/dogs/${d.name}`}>
                <img className="Dogs-img" src={d.src} alt={d.name} />
                <h3 className="Dogs-dogname">{d.name}</h3>
              </Link>
            </div>
          ))}
        </div>
        <div />
      </div>
    );
  }
}
