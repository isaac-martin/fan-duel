import React from 'react';

const FooterKeyPlayer = props => {
  return (
    <div className="keyPlayer">
      <p className="team">{props.data.team}</p>
      <div className="player">
        <p className="name">
          {props.data.name}, {props.data.position}
        </p>
        <p className="points">
          {props.data.points} points, {props.data.rebounds} rebounds
        </p>
      </div>
    </div>
  );
};

export default FooterKeyPlayer;
