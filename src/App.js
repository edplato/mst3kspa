import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main.js';
import Header from './Header.js';
import Categories from './Categories.js';

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
        <Route exact path='/categories' component={Categories}/>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
