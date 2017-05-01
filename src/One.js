import React, { Component } from 'react';
import axios from 'axios';

class One extends Component {
	constructor(props) {
    super();

    this.state = {
       movie: [],
       counter: 0
    };
    this.handleHigherInList = this.handleHigherInList.bind(this);
    this.handleLowerInList = this.handleLowerInList.bind(this);
  }

  componentDidMount() {
  axios.get("https://raw.githubusercontent.com/edplato/mst3k-episodes/master/episodes.json")
    .then(res => {
      const movie = res.data.episodes.map(ep => [ep.id, ep.season, ep.episode, ep.movie, ep.movie_details, ep.shorts, ep.air_date]);
      this.setState({ movie });
      // console.log(this.state.movie[0][0]);
    });
  }
  handleEpisodeDisplay(indexNum) {
    const newArr = this.state.movie.map((mov, index) => 
            <div key={mov[0]}>
            <h2>{mov[3]}</h2>
            <h6>{mov[4]} - Ep ID: {mov[0]}</h6>
            <p>Season #: {mov[1]} - Episode #: {mov[2]}</p>
            

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
  handleJumpToSeason = (num, e) => {
    e.preventDefault();
      this.setState({ counter: num });
  }
  render() {
    return (
      <div>
        <h1>MST3K View!!!!!</h1>

        <button onClick={this.handleLowerInList}>
        CLICK ON ME TO GO LOWER!!
        </button>

        <button onClick={this.handleHigherInList}>
        CLICK ON ME TO GO HIGHER!!
        </button>

        <h3>JUMP TO SEASON</h3>
        <button onClick={this.handleJumpToSeason.bind(this, 0)}>
        KTMA
        </button>
        <button onClick={this.handleJumpToSeason.bind(this, 22)}>
        1
        </button>
        <button onClick={this.handleJumpToSeason.bind(this, 35)}>
        2
        </button>
        <button onClick={this.handleJumpToSeason.bind(this, 48)}>
        3
        </button>
        <button onClick={this.handleJumpToSeason.bind(this, 72)}>
        4
        </button>
        <button onClick={this.handleJumpToSeason.bind(this, 96)}>
        5
        </button>
        <button onClick={this.handleJumpToSeason.bind(this, 120)}>
        6
        </button>      
        <button onClick={this.handleJumpToSeason.bind(this, 144)}>
        7
        </button>
        <button onClick={this.handleJumpToSeason.bind(this, 150)}>
        8
        </button>
        <button onClick={this.handleJumpToSeason.bind(this, 172)}>
        9
        </button>
        <button onClick={this.handleJumpToSeason.bind(this, 185)}>
        10
        </button>
        <button onClick={this.handleJumpToSeason.bind(this, 198)}>
        11
        </button>   
        <div>
          {this.handleEpisodeDisplay(this.state.counter)}
        </div>


      </div>
    );
  }
}

export default One;