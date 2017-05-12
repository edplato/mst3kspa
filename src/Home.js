import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
	constructor() {
    super();

    this.state = {
       movie: [],
       counter: 0
    };
    this.handleHigherInList = this.handleHigherInList.bind(this);
    this.handleLowerInList = this.handleLowerInList.bind(this);
    this.randomEpisode = this.randomEpisode.bind(this);
  }

  componentDidMount() {
  axios.get("https://raw.githubusercontent.com/edplato/mst3k-episodes/master/episodes.json")
    .then(res => {
      const movie = res.data.episodes.map(ep => [ep.id, ep.season, ep.episode, ep.movie, ep.movie_details, ep.shorts, ep.air_date]);
      this.setState({ movie });
    });
  }
  handleEpisodeDisplay(indexNum) {
    const newArr = this.state.movie.map((mov, index) => 
            <div key={mov[0]}>
            <h2>{mov[3]}</h2>
            <h6>{mov[4]} - Ep ID: {mov[0]}</h6>
            
            

            <a href={"https://www.youtube.com/results?search_query=mst3k+" + mov[3]} target="_blank">Check for MST3K movie on YouTube</a>
            
            <div>
            {(mov[5] !== undefined && mov[5][0] !==undefined
              ? (mov[5][1] !==undefined
                   ? <p>Shorts: {mov[5][0]}, {mov[5][1]}</p>
                   : <p>Shorts: {mov[5][0]}</p>
                )
              : <p>Shorts: none</p>
            )}
            </div>

            <p>TV Air Date: {mov[6]}</p>
            {/*<p>Index #: {index}</p>*/}
            <p>Season: {mov[1]} - Episode: {mov[2]}</p>

            </div>
          )
      return (
        newArr[indexNum]
        )
  }
  handleLowerInList(e) {
    e.preventDefault();
    if(this.state.counter > 0){
      this.setState({ counter: this.state.counter - 1 });
    }
  }
  handleHigherInList(e) {
    e.preventDefault();
    if(this.state.counter < this.state.movie.length - 1){
      this.setState({ counter: this.state.counter + 1 });
    }
  }
  randomEpisode(e) {
    e.preventDefault();
      this.setState({ counter: Math.floor(Math.random()*212) });
  }
  handleJumpToSeason = (num, e) => {
    e.preventDefault();
      this.setState({ counter: num });
  }
  handleHighlightSeason = (seasonStart, seasonEnd) => {
    if(this.state.counter >= seasonStart && this.state.counter <= seasonEnd){
      return (
          'highlightCurrentSeason'
        )
    }
  }

  render() {
    return (
      <div className="appBody">

      <div className="jumpToSeason">
        <h5 className="jumpToSeasonTitle">JUMP TO SEASON</h5>
        <button className={this.handleHighlightSeason(0, 21)} onClick={this.handleJumpToSeason.bind(this, 0)}>
        KTMA
        </button>
        <button className={this.handleHighlightSeason(22, 34)} onClick={this.handleJumpToSeason.bind(this, 22)}>
        1
        </button>
        <button className={this.handleHighlightSeason(35, 47)} onClick={this.handleJumpToSeason.bind(this, 35)}>
        2
        </button>
        <button className={this.handleHighlightSeason(48, 71)} onClick={this.handleJumpToSeason.bind(this, 48)}>
        3
        </button>
        <button className={this.handleHighlightSeason(72, 95)} onClick={this.handleJumpToSeason.bind(this, 72)}>
        4
        </button>
        <button className={this.handleHighlightSeason(96, 119)} onClick={this.handleJumpToSeason.bind(this, 96)}>
        5
        </button>
        <button className={this.handleHighlightSeason(120, 143)} onClick={this.handleJumpToSeason.bind(this, 120)}>
        6
        </button>      
        <button className={this.handleHighlightSeason(144, 149)} onClick={this.handleJumpToSeason.bind(this, 144)}>
        7
        </button>
        <button className={this.handleHighlightSeason(150, 171)} onClick={this.handleJumpToSeason.bind(this, 150)}>
        8
        </button>
        <button className={this.handleHighlightSeason(172, 184)} onClick={this.handleJumpToSeason.bind(this, 172)}>
        9
        </button>
        <button className={this.handleHighlightSeason(185, 197)} onClick={this.handleJumpToSeason.bind(this, 185)}>
        10
        </button>
        <button className={this.handleHighlightSeason(198, 211)} onClick={this.handleJumpToSeason.bind(this, 198)}>
        11
        </button>   
        </div>

        <div>
          {this.handleEpisodeDisplay(this.state.counter)}
        </div>

        <button onClick={this.handleLowerInList}>
        PREVIOUS
        </button>

        <button onClick={this.handleHigherInList}>
        NEXT
        </button>

        <button onClick={this.randomEpisode}>
        RANDOM EPISODE
        </button>

      </div>
    );
  }
}

export default Home;