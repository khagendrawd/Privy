import React from 'react';
import privyLogo from '../../assets/images/privy-logo.png';

const header = () => (
  <header className='header'>
    <div className='header__container'>
      <img src={privyLogo} className="privy_logo" alt="Privy Logo" />
      <div className='header__menu'>
        <ul>
          <li><a href="">Travel Advisor</a></li>
          <li><a href="">Pursuits</a></li>
          <li><a href="">Tours</a></li>
          <li className='dropdown'>Travel Advisor
            <ul>
              <li><a href="">Gallery</a></li>
              <li><a href="">Blog</a></li>
          </ul>
          </li>
          <li><a href="">About Us</a></li>
          <li className='Login'><a href="">Login</a></li>
        </ul>
      </div>
    </div>
  </header>
);

export default header;
