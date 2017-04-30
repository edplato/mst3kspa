import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

var ulStyle = {
  listStyle: 'none'
}


class Header extends Component {
	render() {
		return (
      <header>
        <nav>
          <ul style={ulStyle}>
            {/*header links */}
            <li><Link to="/">Home Link</Link></li>
            <li><Link to="/one">MST3K Link</Link></li>
            <li><Link to="/two">UNKNOWN Link</Link></li>
          </ul>
        </nav>
      </header>
    );
	}
}

export default Header;