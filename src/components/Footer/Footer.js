import React from 'react';
import yatraLogo from '../../assets/images/yatra_logo.svg';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const footer = () => (
    <footer className="Footer">
        <div className="fcontainer">
        <div className="footer_left">
        <img src={yatraLogo} className="yatra_logo" alt="Yatra Logo" />
        <a href="term_condition.html">Terms & Conditions</a>
        <a href="privacy_policy">Privacy Policy</a>
        </div>
        <div className="footer_right">
            <a href="https://www.instagram.com/yatradotcom/?hl=en" target="_blank" rel="Yatra Instagram" className="instagram">Instagram</a>
            <a href="https://twitter.com/yatraofficial?lang=en" target="_blank" rel="Yatra Twitter" className="twitter">Twitter</a>
            <a href="https://www.facebook.com/Yatra/" target="_blank" rel="Yatra Facebook" className="facebook">Facebook</a>
        </div>
        </div>
    </footer>  
); 

export default footer;
