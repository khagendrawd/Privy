import React from 'react';
import privyLogo from '../../assets/images/privy_logo.png';

import classes from './Header.css';

const header = () => (
  <header className={classes.Header}>
    <div className={classes.HeaderContainer}>
      <img src={privyLogo} className="privy_logo" alt="Privy Logo" />
      <div className={classes.HeaderMenu}>
        <ul>
          <li><a href="">Travel Advisor</a></li>
          <li><a href="">Pursuits</a></li>
          <li><a href="">Tours</a></li>
          <li className={classes.DropDown}>Travel Advisor
            <ul>
              <li><a href="">Gallery</a></li>
              <li><a href="">Blog</a></li>
          </ul>
          </li>
          <li><a href="">About Us</a></li>
          <li className={classes.Login}><a href="">Login</a></li>
        </ul>
      </div>
    </div>
  </header>
);

export default header;
