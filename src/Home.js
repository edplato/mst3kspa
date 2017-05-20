import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
    super(props);
  }

  handleEpisodeDisplay(indexNum) {
    const newArr = this.props.movieArray.map((mov, index) => 
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
  
  handleHighlightSeason = (seasonStart, seasonEnd) => {
    if(this.props.counter >= seasonStart && this.props.counter <= seasonEnd){
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
        <button className={this.handleHighlightSeason(0, 21)} onClick={this.props.handleJumpToSeason.bind(this, 0)}>
        KTMA
        </button>
        <button className={this.handleHighlightSeason(22, 34)} onClick={this.props.handleJumpToSeason.bind(this, 22)}>
        1
        </button>
        <button className={this.handleHighlightSeason(35, 47)} onClick={this.props.handleJumpToSeason.bind(this, 35)}>
        2
        </button>
        <button className={this.handleHighlightSeason(48, 71)} onClick={this.props.handleJumpToSeason.bind(this, 48)}>
        3
        </button>
        <button className={this.handleHighlightSeason(72, 95)} onClick={this.props.handleJumpToSeason.bind(this, 72)}>
        4
        </button>
        <button className={this.handleHighlightSeason(96, 119)} onClick={this.props.handleJumpToSeason.bind(this, 96)}>
        5
        </button>
        <button className={this.handleHighlightSeason(120, 143)} onClick={this.props.handleJumpToSeason.bind(this, 120)}>
        6
        </button>      
        <button className={this.handleHighlightSeason(144, 149)} onClick={this.props.handleJumpToSeason.bind(this, 144)}>
        7
        </button>
        <button className={this.handleHighlightSeason(150, 171)} onClick={this.props.handleJumpToSeason.bind(this, 150)}>
        8
        </button>
        <button className={this.handleHighlightSeason(172, 184)} onClick={this.props.handleJumpToSeason.bind(this, 172)}>
        9
        </button>
        <button className={this.handleHighlightSeason(185, 197)} onClick={this.props.handleJumpToSeason.bind(this, 185)}>
        10
        </button>
        <button className={this.handleHighlightSeason(198, 211)} onClick={this.props.handleJumpToSeason.bind(this, 198)}>
        11
        </button>   
      </div>

      <div>
        {this.handleEpisodeDisplay(this.props.counter)}
      </div>

        <button onClick={this.props.handleLowerInList}>
        PREVIOUS
        </button>

        <button onClick={this.props.handleHigherInList}>
        NEXT
        </button>

        <button onClick={this.props.randomEpisode}>
        RANDOM EPISODE
        </button>

      </div>
    );
  }
}

export default Home;