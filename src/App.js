import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import PlayByPlay from './components/PlayByPlay';
import Stats from './components/Stats';
import YourScoring from './components/YourScoring';
import Footer from './components/Footer';

import './css/style.css';
import './css/typography.css';
import './css/fonts.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Header />
        <section className="main grid">
          <Overview />
          <PlayByPlay />
          <Stats />
          <YourScoring />
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
