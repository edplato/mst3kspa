import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './Home.js';
import About from './About.js';

class Main extends Component {
  render() {
    return (
      <main>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
      </main>
    );
  }
}

export default Main;