import React from 'react';
import FooterKeyPlayer from './FooterKeyPlayer';

const FooterSingleGame = props => {
  const {onClick, activeGame, stats} = props;
  const isActive = stats.game_id === activeGame;
  return (
    <div onClick={onClick} className={isActive ? `gameOverview active` : `gameOverview`}>
      <div className="scoreOverview">
        <p className="team">
          {isActive ? stats.home_team.name : stats.home_team.abbrev} <span className="score">{stats.home_team.score}</span>
        </p>
        <p className="team">
          {isActive ? stats.away_team.name : stats.away_team.abbrev} <span className="score">{stats.away_team.score}</span>
        </p>
        <p className="time">
          {stats.time_left} {stats.quarter}
          {isActive && <span className="broadcast">TV: ESPN</span>}
        </p>
      </div>

      {isActive && stats.top_performers.map(player => <FooterKeyPlayer data={player} />)}
    </div>
  );
};

export default FooterSingleGame;
