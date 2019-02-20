import React from 'react';
import Shots from '../assets/shots.jpg';

const Overview = () => {
  return (
    <div className="overview gridItem">
      <div className="scoreCard">
        <div className="teamScore textGSW">
          <p className="team">
            Golden State <span>Warriors</span>
          </p>
          <p className="score">96</p>
        </div>
        <div className="gameInfo">
          <p className="gameTime">7:34 4th</p>
          <p className="gameVenue">Oracle Arena Oakland, CA</p>
        </div>
        <div className="teamScore rev textOKC">
          <p className="team">
            Oklahoma City <span>Thunder</span>
          </p>
          <p className="score">81</p>
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
          <div className="teamStats gswStat">
            <div className="stat">
              <span className="label">FG%</span>
              <span className="value">55.7%</span>
            </div>
            <div className="stat">
              <span className="label">FT%</span>
              <span className="value">60.0%</span>
            </div>
            <div className="stat">
              <span className="label">3P%</span>
              <span className="value">55.5%</span>
            </div>
          </div>
          <div className="shotChart">
            <img alt="shots on court" src={Shots} />
          </div>
          <div className="teamStats okcStat">
            <div className="stat">
              <span className="label">FG%</span>
              <span className="value">47.1%</span>
            </div>
            <div className="stat">
              <span className="label">FT%</span>
              <span className="value">80.0%</span>
            </div>
            <div className="stat">
              <span className="label">3P%</span>
              <span className="value">36.4%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
