import React from 'react';

const PlayCard = props => {
  const {away_score, home_score, description, quarter, time_left, scoring_player} = props;
  return (
    <div className="playCard">
      <img alt={scoring_player} className="playerHeadshot" src={require(`../assets/${scoring_player}.png`)} />
      <div className="playSummary">
        <span className="time">
          {time_left} {quarter}
        </span>
        <p>{description}</p>
      </div>
      <p className="playScore">
        {home_score}-{away_score}, GS
      </p>
    </div>
  );
};

export default PlayCard;
