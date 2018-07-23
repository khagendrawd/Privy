import React, { Component } from 'react';
import yatra_logo from '../asset/yatra_logo.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="fcontainer">
        <div className="footer_left">
        <img src={yatra_logo} className="yatra_logo" alt="Yatra Logo" />
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
  }
}

export default Footer;
