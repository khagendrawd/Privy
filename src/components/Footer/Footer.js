import React from 'react';
import yatraLogo from '../../assets/images/yatra_logo.svg';

import classes from './Footer.css';

const footer = () => (
    <footer className={classes.Footer}>
        <div className={classes.Container}>
        <div className={classes.FooterLeft}>
          <img src={yatraLogo} className={classes.YatraLogo} alt="Yatra Logo" />
          <a href="term_condition.html">Terms & Conditions</a>
          <a href="privacy_policy">Privacy Policy</a>
        </div>
        <div className={classes.FooterRight}>
            <a href="https://www.instagram.com/yatradotcom/?hl=en" target="_blank" rel="Yatra Instagram" className="instagram">Instagram</a>
            <a href="https://twitter.com/yatraofficial?lang=en" target="_blank" rel="Yatra Twitter" className="twitter">Twitter</a>
            <a href="https://www.facebook.com/Yatra/" target="_blank" rel="Yatra Facebook" className="facebook">Facebook</a>
        </div>
        </div>
    </footer>  
); 

export default footer;
