import React, {Component} from 'react';
import PlayCard from './PlayCard';

class PlayByPlay extends Component {
  fetchPlays = () => {
    const url = `https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/plays`;
    fetch(url)
      .then(res => res.json())
      .then(json =>
        this.setState({
          plays: json
        })
      );
  };

  componentDidMount() {
    this.fetchPlays();
  }

  constructor(props) {
    super(props);
    this.state = {
      plays: []
    };
  }

  render() {
    const {plays} = this.state;
    return (
      <div className="playByPlay gridItem">
        <div className="sectionHeader">
          <h3>Play By Play</h3>
        </div>
        <div className="playCardsWrapper">
          {plays.map(play => (
            <PlayCard {...play} />
          ))}
        </div>
      </div>
    );
  }
}

export default PlayByPlay;
