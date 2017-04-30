import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './Home.js';
import One from './One.js';
import Two from './Two.js';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/one" component={One}/>
          <Route path="/two" component={Two}/>
        </Switch>
      </main>
    );
  }
}

export default Main;