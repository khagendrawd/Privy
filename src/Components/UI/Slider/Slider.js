import React from "react";
import Slider from "react-slick";

import { NavLink } from 'react-router-dom';

import Recommended from '../../../assets/images/greece.png';
import Recommended1 from '../../../assets/images/florence.png';
import Recommended2 from '../../../assets/images/paris.png';


class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className='Rslider'>
        <img src={Recommended} alt="Greece" />
        <div className='package_breaf u-p-5 bg-gold'>
          <div className='slider_heading'>Greece</div>
          <div className='slider_text u-pb-5'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.</div>
          <NavLink to='/detail' activeClassName="active">More Details</NavLink>
        </div>
        </div>
        <div className='Rslider'>
        <img src={Recommended1} alt="Florence" />
        <div className='package_breaf u-p-5 bg-gold'>
          <div className='slider_heading'>Florence</div>
          <div className='slider_text u-pb-5'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.</div>
          <NavLink to='/detail' activeClassName="active">More Details</NavLink>
        </div>
        </div>
        <div className='Rslider'>
        <img src={Recommended2} alt="Paris" />
        <div className='package_breaf u-p-5 bg-gold'>
          <div className='slider_heading'>Paris</div>
          <div className='slider_text u-pb-5'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.</div>
          <NavLink to='/detail' activeClassName="active">More Details</NavLink>
        </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
