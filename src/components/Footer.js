import React, {Component} from 'react';
import Loader from './Loader';
import FooterSingleGame from './FooterSingleGame';

class Footer extends Component {
  fetchScoreCard = () => {
    const url = `https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/footer_scoreboard`;
    fetch(url)
      .then(res => res.json())
      .then(json =>
        this.setState({
          scorecardData: json,
          loaded: true
        })
      );
  };

  handleGameClick = game_id => {
    this.setState({
      activeGame: game_id
    });
  };

  componentDidMount() {
    this.fetchScoreCard();
  }
  constructor() {
    super();
    this.state = {
      scorecardData: {},
      loaded: false,
      activeGame: 1
    };
  }
  render() {
    const {scorecardData, loaded, activeGame} = this.state;
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
            {loaded ? scorecardData.map(game => <FooterSingleGame onClick={() => this.handleGameClick(game.game_id)} activeGame={activeGame} stats={game} />) : <Loader />}
            {/* <div className="scoreOverview secondary">
              <p className="team">
                ATL <span className="score">26</span>
              </p>
              <p className="team">
                MEM <span className="score">24</span>
              </p>
              <p className="time">12:00 2nd</p>
            </div> */}
          </div>
          <span className="arrow right">></span>
        </div>
      </footer>
    );
  }
}

export default Footer;
