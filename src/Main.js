import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Home.js';
import About from './About.js';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      episodeCounter: 0,
      movieArray: []
    }

    this.handleHigherInList = this.handleHigherInList.bind(this);
    this.handleLowerInList = this.handleLowerInList.bind(this);
    this.randomEpisode = this.randomEpisode.bind(this);
  }

  componentDidMount() {
  axios.get("https://raw.githubusercontent.com/edplato/mst3k-episodes/master/episodes.json")
    .then(res => {
      const movieArray = res.data.episodes.map(ep => [ep.id, ep.season, ep.episode, ep.movie, ep.movie_details, ep.shorts, ep.air_date, ep.imdb]);
      this.setState({ movieArray });
    });
  }

  handleLowerInList(e) {
    e.preventDefault();
    if(this.state.episodeCounter > 0){
      this.setState({ episodeCounter: this.state.episodeCounter - 1 });
    }
  }
  handleHigherInList(e) {
    e.preventDefault();
    if(this.state.episodeCounter < this.state.movieArray.length - 1){
      this.setState({ episodeCounter: this.state.episodeCounter + 1 });
    }
  }
  randomEpisode(e) {
    e.preventDefault();
      this.setState({ episodeCounter: Math.floor(Math.random()*218) });
  }

  handleJumpToSeason = (num, e) => {
    e.preventDefault();
      this.setState({ episodeCounter: num });
  }

  render() {
    return (
      <main>
      <div>
        <Switch>
          <Route exact path='/' render={(props) => (
            <Home {...props} 
            movieArray={this.state.movieArray}
            episodeCounter={this.state.episodeCounter} 
            handleLowerInList={this.handleLowerInList}
            handleHigherInList={this.handleHigherInList}
            handleJumpToSeason={this.handleJumpToSeason}
            randomEpisode={this.randomEpisode}
            />
            )}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
      </main>
    );
  }
}

export default Main;
