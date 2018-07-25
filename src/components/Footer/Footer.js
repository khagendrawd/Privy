import React from 'react';
import yatraLogo from '../../assets/images/yatra-logo.svg';

const footer = () => (
    <footer className='footer'>
        <div className='footer__container'>
            <div className='footer__left'>
                <img src={yatraLogo} className='YatraLogo' alt="Yatra Logo" />
                <a href="term_condition.html">Terms &amp; Conditions</a>
                <a href="privacy_policy">Privacy Policy</a>
            </div>
            <div className='footer__right'>
                <a href="https://www.instagram.com/yatradotcom/?hl=en" target="_blank" rel='noreferrer noopener'>Instagram</a>
                <a href="https://twitter.com/yatraofficial?lang=en" target="_blank" rel='noreferrer noopener'>Twitter</a>
                <a href="https://www.facebook.com/Yatra/" target="_blank" rel='noreferrer noopener'>Facebook</a>
            </div>
        </div>
    </footer>  
); 

export default footer;
