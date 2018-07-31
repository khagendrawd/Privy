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
          <li><NavLink to='/TravelAdvisor' activeClassName="active">Travel Advisor</NavLink></li>
          <li><NavLink to='/pursuits' activeClassName="active">Pursuits</NavLink></li>
          <li><NavLink to='/tour' activeClassName="active">Tour</NavLink></li>
          <li className='dropdown'>Travel Advisor
            <ul className='u-text-left'>
              <li><NavLink to='/gallery' activeClassName="active">Gallery</NavLink></li>
              <li><a href="">Blog</a></li>
          </ul>
          </li>
          <li><NavLink to='/about' activeClassName="active">About Us</NavLink></li>
          <Button className='btn btn-primary btn-small btn-login'>Login</Button>
        </ul>
      </nav>
    </div>
  </header>
);

export default header;
