import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
      <header className="App-header">
        <nav>
        <div className="appTitle">
        MST3K Episode Quick Guide
        </div>

            <NavLink to="/" exact activeClassName="activeNavLink">
              <div className="headerBlock headerEpGuide"><p>Episode Guide</p></div>
            </NavLink>

            <NavLink to="/about" activeClassName="activeNavLink">
              <div className="headerBlock headerAboutUs"><p>About</p></div>
            </NavLink>

        </nav>
      </header>
    );
	}
}

export default Header;