import React from 'react';
import yatraLogo from '../../assets/images/yatra_logo.svg';

const footer = () => (
    <footer className='Footer'>
        <div className='Container'>
        <div className='FooterLeft'>
          <img src={yatraLogo} className='YatraLogo' alt="Yatra Logo" />
          <a href="term_condition.html">Terms & Conditions</a>
          <a href="privacy_policy">Privacy Policy</a>
        </div>
        <div className='FooterRight'>
            <a href="https://www.instagram.com/yatradotcom/?hl=en" target="_blank" rel="Yatra Instagram" className="instagram">Instagram</a>
            <a href="https://twitter.com/yatraofficial?lang=en" target="_blank" rel="Yatra Twitter" className="twitter">Twitter</a>
            <a href="https://www.facebook.com/Yatra/" target="_blank" rel="Yatra Facebook" className="facebook">Facebook</a>
        </div>
        </div>
    </footer>  
); 

export default footer;
