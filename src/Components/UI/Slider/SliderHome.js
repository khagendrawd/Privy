import React from "react";
import SliderHome from "react-slick";

import HomeSlider from '../../../assets/images/cape_villa.png';
import HomeSlider1 from '../../../assets/images/cleopatra.png';
import HomeSlider2 from '../../../assets/images/home1.png';
import HomeSlider3 from '../../../assets/images/home2.png';

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
        <div className='sliderHome__homeslider'>
            <img src={HomeSlider} alt="Cape Sounio Villas" />
            <div className='sliderHome__headings'>
                <h1>Cape Sounio Villas</h1>
                <h3 className='u-pb-5'>Exclusive villas at this privileged location and the most elegant residences in southern Europe. Perfect hideaways with private pools and unique views to the sea & temple of Poseidon.</h3>
                <Button className='btn btn-primary btn-white btn-large btn-cta'>Find A Travel Advisor</Button>
            </div>
        </div>

        <div className='sliderHome__homeslider'>
            <img src={HomeSlider1} alt="Cape Sounio Villas" />
            <div className='sliderHome__headings'>
                <h1>Cape Sounio Villas</h1>
                <h3 className='u-pb-5'>Exclusive villas at this privileged location and the most elegant residences in southern Europe. Perfect hideaways with private pools and unique views to the sea & temple of Poseidon.</h3>
                <Button className='btn btn-primary btn-white btn-large btn-cta'>Find A Travel Advisor</Button>
            </div>
        </div>
        
        <div className='sliderHome__homeslider'>
            <img src={HomeSlider2} alt="Cape Sounio Villas" />
            <div className='sliderHome__headings'>
                <h1>Cape Sounio Villas</h1>
                <h3 className='u-pb-5'>Exclusive villas at this privileged location and the most elegant residences in southern Europe. Perfect hideaways with private pools and unique views to the sea & temple of Poseidon.</h3>
                <Button className='btn btn-primary btn-white btn-large btn-cta'>Find A Travel Advisor</Button>
            </div>
        </div>
        
        <div className='sliderHome__homeslider'>
            <img src={HomeSlider3} alt="Cape Sounio Villas" />
            <div className='sliderHome__headings'>
                <h1>Cape Sounio Villas</h1>
                <h3 className='u-pb-5'>Exclusive villas at this privileged location and the most elegant residences in southern Europe. Perfect hideaways with private pools and unique views to the sea & temple of Poseidon.</h3>
                <Button className='btn btn-primary btn-white btn-large btn-cta'>Find A Travel Advisor</Button>
            </div>
        </div>


      </SliderHome>
    );
  }
}

export default SimpleSliderHome;
