import React from 'react';

const TeamStats = props => {
  const {team, stats} = props;
  return (
    <div className={`teamStats ${team}Stat`}>
      {stats.map(stat => (
        <div className="stat">
          <span className="label">{stat.title}</span>
          <span className="value">{stat.perc}</span>
        </div>
      ))}
    </div>
  );
};

export default TeamStats;
