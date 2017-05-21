import React, { Component } from 'react';

class Home extends Component {
	// constructor(props) {
 //    super(props);
 //  }

  handleEpisodeDisplay(indexNum) {
    const newArr = this.props.movieArray.map((mov, index) => 
            <div key={mov[0]}>
            <h2>{mov[3]}</h2>
            <p>{mov[4]}</p>
            
            <a href={"https://www.youtube.com/results?search_query=mst3k+" + mov[3]} target="_blank">Check for MST3K movie on YouTube</a>
            
            <div>
            {(mov[5] !== undefined && mov[5][0] !==undefined
              ? (mov[5][1] !==undefined
                   ? <p><strong>Shorts:</strong> <em>{mov[5][0]}, {mov[5][1]}</em></p>
                   : <p><strong>Shorts:</strong> <em>{mov[5][0]}</em></p>
                )
              : <p><strong>Shorts:</strong> none</p>
            )}
            </div>

            <p><strong>TV Air Date:</strong> {mov[6]}</p>
            <p><strong>Episode ID:</strong> {mov[0]}</p>
            </div>
          )
      return (
        newArr[indexNum]
        )
  }
  
  handleHighlightSeason = (seasonStart, seasonEnd) => {
    if(this.props.episodeCounter >= seasonStart && this.props.episodeCounter <= seasonEnd){
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

      <div className="episodeInfoDisplay">
        {this.handleEpisodeDisplay(this.props.episodeCounter)}
      </div>

      <div className="episodeButtons">
        <button onClick={this.props.handleLowerInList}>
        PREVIOUS
        </button>

        <button onClick={this.props.handleHigherInList}>
        NEXT
        </button>

        <button onClick={this.props.randomEpisode}>
        RANDOM
        </button>
      </div>

      </div>
    );
  }
}

export default Home;