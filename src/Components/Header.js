import React, { Component } from 'react';
import privy_logo from '../asset/privy_logo.png';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="hcontainer">
        <img src={privy_logo} className="privy_logo" alt="Privy Logo" />
        </div>
      </header>
    );
  }
}

export default Header;
