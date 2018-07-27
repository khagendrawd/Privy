import React from "react";
import SliderHome from "react-slick";


import Button from '../Button/Button';

class SimpleSliderHome extends React.Component {
  render() {
    var settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SliderHome {...settings}>
        <div>
            <div className='sliderHome__headings'>
                <h1>Lorem ipsum</h1>
                <h3 className='u-pb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
                <Button className='btn btn-primary btn-large btn-cta'>Find A Travel Advisor</Button>
            </div>
        </div>

        <div>
            <div className='sliderHome__headings'>
                <h1>Lorem</h1>
                <h3 className='u-pb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
                <Button className='btn btn-primary btn-large btn-cta'>Find A Travel Advisor</Button>
            </div>
        </div>

        
        <div>
            <div className='sliderHome__headings'>
                <h1>Lorem ipsum</h1>
                <h3 className='u-pb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
                <Button className='btn btn-primary btn-large btn-cta'>Find A Travel Advisor</Button>
            </div>
        </div>


      </SliderHome>
    );
  }
}

export default SimpleSliderHome;
