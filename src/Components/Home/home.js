import React from 'react';


import Gallery from '../UI/Gallery/Gallery';
import Button from '../UI/Button/Button';
import Slider from '../UI/Slider/Slider';

const home = () => (
    <div className='home'>
        <div className='home__howitwork'>
            <div className='home__headings'>
                <h1>How it works</h1>
                <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
            </div>
            <div className='home__options'>
                <div className='home__options__container'>
                    <div className='items'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                    <div className='items number2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                    <div className='items number3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                </div>
            </div>
        </div>

        <div className='home__recomonded'>
            <div className='home__headings'>
                <h1>Recommended</h1>
                <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
            </div>
            <Slider/>
        </div>

        <div className='home__gallery'>
            <div className='home__headings'>
                <h1>Gallery</h1>
                <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
            </div>
            <Gallery/>
            <Button className='btn btn-primary btn-small btn-login'>Load More</Button>
        </div>
    </div>
); 

export default home;
