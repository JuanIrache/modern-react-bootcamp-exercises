import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import './Vending.css';

export default class Vending extends Component {
  constructor() {
    super();
    this._links = [
      { name: 'Home', key: '/', comp: Home },
      { name: 'Soda', key: '/soda', comp: Soda },
      { name: 'Chips', key: '/chips', comp: Chips },
      { name: 'Sardines', key: '/sardines', comp: Sardines }
    ];
  }
  render() {
    return (
      <div className="Vending">
        <div className="Vending-nav">
          {this._links
            .map(l => (
              <NavLink key={`link-${l.key}`} to={l.key} exact activeClassName="active-link">
                {l.name}
              </NavLink>
            ))
            .reduce((acc, cur) => [acc, ' | ', cur])}
        </div>
        {this._links.map(l => (
          <Route key={`comp-${l.key}`} exact path={`${l.key}`} component={l.comp} />
        ))}
      </div>
    );
  }
}
