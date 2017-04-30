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
  axios.get("https://raw.githubusercontent.com/malantonio/mst3k-episodes/master/episodes.json")
    .then(res => {
      const movie = res.data.episodes.map(ep => [ep.id, ep.season, ep.episode, ep.movie, ep.air_date]);
      this.setState({ movie });
      // console.log(this.state.movie[0][0]);
    });
  }
  handleEpisodeDisplay(indexNum) {
    const newArr = this.state.movie.map((mov, index) => 
            <div key={mov[0]}>
            <h2>Movie: {mov[3]}</h2>
            <p>Season #: {mov[1]} - Episode #: {mov[2]}</p>
            <h6>Archive ID: {mov[0]}</h6>
        
            <p>TV Air Date: {mov[4]}</p>
            <p>Index #: {index}</p>


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
   
        <div>
          {this.handleEpisodeDisplay(this.state.counter)}
        </div>


      </div>
    );
  }
}

export default One;