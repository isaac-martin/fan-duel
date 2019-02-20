import React from 'react';

const Footer = () => {
  return (
    <footer className="scoresFooter">
      <div className="footerNav">
        <nav>
          <span className="active">NBA</span>
          <span>MLB</span>
          <span>NCAFF</span>
        </nav>
      </div>
      <div className="footerScores">
        <span className="arrow left">&#60;</span>
        <div className="gameSummaries">
          <div className="mainOverview">
            <div className="scoreOverview">
              <p className="team">
                Warriors <span className="score">96</span>
              </p>
              <p className="team">
                Thunder <span className="score">81</span>
              </p>
              <p className="time">
                7:34 4th
                <span className="broadcast">TV: ESPN</span>
              </p>
            </div>
            <div className="keyPlayer">
              <p className="team">GSW</p>
              <div className="player">
                <p className="name">S. Curry, PG</p>
                <p className="points">23 points, 6 assists</p>
              </div>
            </div>
            <div className="keyPlayer">
              <p className="team">OKC</p>
              <div className="player">
                <p className="name">K. Durant, SF</p>
                <p className="points">30 points, 9 Rebounds</p>
              </div>
            </div>
          </div>
          <div className="scoreOverview secondary">
            <p className="team">
              CHI <span className="score">56</span>
            </p>
            <p className="team">
              BOS <span className="score">54</span>
            </p>
            <p className="time">6:33 3rd</p>
          </div>
          <div className="scoreOverview secondary">
            <p className="team">
              ATL <span className="score">26</span>
            </p>
            <p className="team">
              MEM <span className="score">24</span>
            </p>
            <p className="time">12:00 2nd</p>
          </div>
        </div>
        <span className="arrow right">></span>
      </div>
    </footer>
  );
};

export default Footer;
