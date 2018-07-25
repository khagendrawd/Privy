import React, { Component } from 'react';
import privy_logo from '../asset/privy_logo.png';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="hcontainer">
        <img src={privy_logo} className="privy_logo" alt="Privy Logo" />
        <div className="header_menu">
        <ul>
            <li><a href="">Travel Advisor</a></li>
            <li><a href="">Pursuits</a></li>
            <li><a href="">Tours</a></li>
            <li className="dropdown_menu">Travel Advisor
            <ul>
                <li><a href="">Gallery</a></li>
                <li><a href="">Blog</a></li>
            </ul>
            </li>
            <li><a href="">About Us</a></li>
            <li className="login"><a href="">Login</a></li>
        </ul>
        </div>
        </div>
      </header>
    );
  }
}

export default Header;