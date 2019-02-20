import React, {Component} from 'react';

class PlayByPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plays: {}
    };
  }

  render() {
    return (
      <div className="playByPlay gridItem">
        <div className="sectionHeader">
          <h3>Play By Play</h3>
        </div>
        <div className="playCardsWrapper">
          <div className="playCard">
            <img alt="this is alt text" className="playerHeadshot" src="assets/steph_curry.png" />
            <div className="playSummary">
              <span className="time">7:34 4th</span>
              <p>
                <b className="player">Stephen Curry</b> makes 13-foot jumper. Assisted by <b className="player">Draymond Green.</b>
              </p>
            </div>
            <p className="playScore">96-81, GS</p>
          </div>
          <div className="playCard">
            <img alt="this is alt text" className="playerHeadshot" src="assets/kevin_durant.png" />
            <div className="playSummary">
              <span className="time">7:34 4th</span>
              <p>
                <b className="player">Kevin Durant</b> misses 2-foot layup. Rebounded by <b className="player">Andrew Bogurt.</b>
              </p>
            </div>
            <p className="playScore">96-81, GS</p>
          </div>
          <div className="playCard">
            <img alt="this is alt text" className="playerHeadshot" src="assets/klay_thompson.png" />
            <div className="playSummary">
              <span className="time">7:34 4th</span>
              <p>
                <b className="player">Klay Thompson</b> makes 24-foot jumper. Rebounded by <b className="player">Serge Ibaka.</b>
              </p>
            </div>
            <p className="playScore">96-81, GS</p>
          </div>
          <div className="playCard">
            <img alt="this is alt text" className="playerHeadshot" src="assets/kevin_durant.png" />
            <div className="playSummary">
              <span className="time">7:34 4th</span>
              <p>
                <b className="player">Kevin Durant</b> turnover.
              </p>
            </div>
            <p className="playScore">96-81, GS</p>
          </div>
          <div className="playCard">
            <img alt="this is alt text" className="playerHeadshot" src="assets/steph_curry.png" />
            <div className="playSummary">
              <span className="time">7:34 4th</span>
              <p>
                <b className="player">Stephen Curry</b> makes free throw.
              </p>
            </div>
            <p className="playScore">96-81, GS</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayByPlay;
