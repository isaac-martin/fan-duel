import React, {Component} from 'react';
import Loader from './Loader';
import TeamStats from './TeamStats';

import Shots from '../assets/shots.jpg';

class Overview extends Component {
  fetchStats = () => {
    const url = `https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/game_stats`;
    fetch(url)
      .then(res => res.json())
      .then(json =>
        this.setState({
          game_stats: json,
          loaded: true
        })
      );
  };

  componentDidMount() {
    this.fetchStats();
  }
  constructor() {
    super();
    this.state = {
      game_stats: {},
      loaded: false
    };
  }
  render() {
    const {loaded, game_stats} = this.state;
    return loaded ? (
      <div className="overview gridItem">
        <div className="scoreCard">
          <div className="teamScore textGSW">
            <p className="team">
              {game_stats.away_team.location}
              <span> {game_stats.away_team.name}</span>
            </p>
            <p className="score">{game_stats.away_team.score}</p>
          </div>
          <div className="gameInfo">
            <p className="gameTime">
              {game_stats.time_left} {game_stats.quarter}
            </p>
            <p className="gameVenue">
              {game_stats.arena} {game_stats.location}
            </p>
          </div>
          <div className="teamScore rev textOKC">
            <p className="team">
              {game_stats.home_team.location}
              <span> {game_stats.home_team.name}</span>
            </p>
            <p className="score">{game_stats.home_team.score}</p>
          </div>
        </div>
        <div className="lastPlayBar">
          <p>Last Play: TV timeout, go get a snack</p>
        </div>
        <div className="gameSummary">
          <div className="selector">
            <h3>
              Show:
              <b>Recent Shots</b>{' '}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M128 332.1c-5.3 0-10.3-2.1-14.1-5.8L9.3 220c-3.7-3.7-5.8-8.7-5.8-14 0-5.3 2.1-10.3 5.8-14l6.4-6.4c3.8-3.8 8.7-5.8 14-5.8 5.3 0 10.3 2.1 14 5.8l84.2 85.8 84.1-85.6c3.8-3.8 8.8-5.9 14.1-5.9 5.3 0 10.3 2.1 14 5.8l6.4 6.4c3.8 3.8 5.8 8.7 5.8 14s-2.1 10.3-5.8 14L142 326.5c-3.8 3.6-8.7 5.6-14 5.6z" />
                <path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z" />
              </svg>
            </h3>
          </div>
          <div className="statsWrap">
            <TeamStats stats={game_stats.away_team.shooting_stats} team={game_stats.away_team.abbrev} />
            <div className="shotChart">
              <img alt="shots on court" src={Shots} />
            </div>
            <TeamStats stats={game_stats.home_team.shooting_stats} team={game_stats.home_team.abbrev} />
          </div>
        </div>
      </div>
    ) : (
      <Loader />
    );
  }
}

export default Overview;
