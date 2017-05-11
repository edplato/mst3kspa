import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main.js';
import Header from './Header.js';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <div>
        </div>
      </div>
    );
  }
}

export default App;
