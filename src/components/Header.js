import React, {Component} from 'react';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/avatar.png';

class Header extends Component {
  fetchNavItems = () => {
    const url = `https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/nav_elements`;
    fetch(url)
      .then(res => res.json())
      .then(json =>
        this.setState({
          navItems: json
        })
      );
  };

  componentDidMount() {
    this.fetchNavItems();
  }

  constructor() {
    super();
    this.state = {
      navItems: []
    };
  }
  render() {
    const {navItems} = this.state;
    return (
      <header className="mainHeader">
        <a className="logo" href="/">
          <img alt="this is alt text" src={Logo} />
        </a>
        <input id="nav" name="nav" className="navTrigger" type="checkbox" />
        <label for="nav" className="mobileMenuTrigger">
          <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z" />
          </svg>
        </label>
        <div className="menuWrapper">
          <div className="headerLeft">
            <nav className="mainMenu menu">
              <ul>
                {navItems.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>
                      {link.title}
                      {link.title === 'Live' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                          <path d="M128 332.1c-5.3 0-10.3-2.1-14.1-5.8L9.3 220c-3.7-3.7-5.8-8.7-5.8-14 0-5.3 2.1-10.3 5.8-14l6.4-6.4c3.8-3.8 8.7-5.8 14-5.8 5.3 0 10.3 2.1 14 5.8l84.2 85.8 84.1-85.6c3.8-3.8 8.8-5.9 14.1-5.9 5.3 0 10.3 2.1 14 5.8l6.4 6.4c3.8 3.8 5.8 8.7 5.8 14s-2.1 10.3-5.8 14L142 326.5c-3.8 3.6-8.7 5.6-14 5.6z" />
                          <path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="headerRight">
            <nav className="accountMenu menu">
              <ul>
                <li>
                  <a href="/test">
                    Help
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                      <path d="M128 332.1c-5.3 0-10.3-2.1-14.1-5.8L9.3 220c-3.7-3.7-5.8-8.7-5.8-14 0-5.3 2.1-10.3 5.8-14l6.4-6.4c3.8-3.8 8.7-5.8 14-5.8 5.3 0 10.3 2.1 14 5.8l84.2 85.8 84.1-85.6c3.8-3.8 8.8-5.9 14.1-5.9 5.3 0 10.3 2.1 14 5.8l6.4 6.4c3.8 3.8 5.8 8.7 5.8 14s-2.1 10.3-5.8 14L142 326.5c-3.8 3.6-8.7 5.6-14 5.6z" />
                      <path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z" />
                    </svg>
                  </a>
                </li>
                <li className="profile">
                  <a href="/test">
                    <img alt="this is alt text" src={Avatar} /> nbonaddio
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                      <path d="M128 332.1c-5.3 0-10.3-2.1-14.1-5.8L9.3 220c-3.7-3.7-5.8-8.7-5.8-14 0-5.3 2.1-10.3 5.8-14l6.4-6.4c3.8-3.8 8.7-5.8 14-5.8 5.3 0 10.3 2.1 14 5.8l84.2 85.8 84.1-85.6c3.8-3.8 8.8-5.9 14.1-5.9 5.3 0 10.3 2.1 14 5.8l6.4 6.4c3.8 3.8 5.8 8.7 5.8 14s-2.1 10.3-5.8 14L142 326.5c-3.8 3.6-8.7 5.6-14 5.6z" />
                      <path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z" />
                    </svg>
                  </a>
                </li>
                <li className="balance">
                  <div>
                    <span>
                      <b className="funds">$1,000,000.00</b>
                      Balance
                    </span>
                    <button className="btn-green">Add Funds</button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
