import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <NavLink className="Nav-link Nav-home" to="/dogs" exact activeClassName="Nav-active">
          Dogs
        </NavLink>
        {this.props.items.map(i => (
          <NavLink className="Nav-link" key={i.name} to={`/dogs/${i.name}`} exact activeClassName="Nav-active">
            {i.name}
          </NavLink>
        ))}
      </div>
    );
  }
}
