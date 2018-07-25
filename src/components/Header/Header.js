import React from 'react';
import privyLogo from '../../assets/images/privy-logo.png';

import { NavLink } from 'react-router-dom';

import Button from '../UI/Button/Button';


const header = () => (
  <header className='header'>
    <div className='header__container'>
      <img src={privyLogo} className="privy_logo" alt="Privy Logo" />
      <nav className='header__nav'>
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
          <li><NavLink to='/about' activeClassName="active">About Us</NavLink></li>
          <Button className='btn btn-login'>Login</Button>
        </ul>
      </nav>
    </div>
  </header>
);

export default header;
