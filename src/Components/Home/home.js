import React from 'react';


import Gallery from '../UI/Gallery/Gallery';
import Button from '../UI/Button/Button';
import Slider from '../UI/Slider/Slider';
import SliderHome from '../UI/Slider/SliderHome';

const home = () => (
    <div className='home'>
        <section className='u-pb-5 d-none home__sliderHome'>
            <i className='mouse_icon'></i>
            <SliderHome/>
        </section>
        <section className='u-pt-5 u-pb-5'>
            <div className='home__headings'>
                <h1>How it works</h1>
                <h3 className='u-pb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
            </div>
            <div className='home__options'>
                <div className='home__options__container'>
                    <div className='items'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                    <div className='items number2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                    <div className='items number3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                </div>
            </div>
        </section>
        <section className='u-pt-5 u-pb-5 d-none slider-dot'>
            <div className='home__headings'>
                <h1>Recommended</h1>
                <h3 className='u-pb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
            </div>
            <Slider/>
        </section>
        <section className='u-pt-5 u-pb-5'>
            <div className='home__headings'>
                <h1>Gallery</h1>
                <h3 className='u-pb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
            </div>
            <Gallery/>
            <Button className='btn btn-primary btn-large btn-cta'>Load More</Button>
        </section>
    </div>
); 

export default home;
