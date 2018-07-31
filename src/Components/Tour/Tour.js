import React from 'react';

import Button from '../UI/Button/Button';
//import { NavLink } from 'react-router-dom';

import Paris from '../../assets/images/paris.png';
import Greece from '../../assets/images/greece.png';
import Norway from '../../assets/images/norway.png';
import Florence from '../../assets/images/florence.png';

const tour = () => (
    <div className='tour'>
        <div className='tour__images'>
            <div className='tour__headings'>
                <h1>Luxury Tour</h1>
                <h3 className='u-pb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
                <Button className='btn btn-primary btn-white btn-large btn-cta'>Find A Travel Advisor</Button>
            </div>
        </div>

        <div className='tour_listing f-d-c u-pb-7'>


            <div className='search_listing u-pb-7'>
                <i className='search'></i>
                <input type='text' className='pl-4 bg-white' placeholder='Search by country, city, place'/>
                <i className='filter'></i>
            </div>


            <div className='tour_listing__listItems'>
                <div className='list_img'><img src={Paris} alt='Paris'/></div>
                <div className='taging'>
                    <div className='mediaType'>Paris</div>
                    <div className='content'>
                        <span>8th to 10 July 2018</span>
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Integer nec odio.</p>
                    </div>
                </div>
            </div>


            <div className='tour_listing__listItems'>
                <div className='list_img'><img src={Norway} alt='Norway'/></div>
                <div className='taging'>
                    <div className='mediaType'>Norway</div>
                    <div className='content'>
                        <span>8th to 10 July 2018</span>
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Integer nec odio.</p>
                    </div>
                </div>
            </div>



            <div className='tour_listing__listItems'>
                <div className='list_img'><img src={Florence} alt='Florence'/></div>
                <div className='taging'>
                    <div className='mediaType'>Florence</div>
                    <div className='content'>
                        <span>8th to 10 July 2018</span>
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Integer nec odio.</p>
                    </div>
                </div>
            </div>

            <div className='tour_listing__listItems'>
                <div className='list_img'><img src={Greece} alt='Greece'/></div>
                <div className='taging'>
                    <div className='mediaType'>Greece</div>
                    <div className='content'>
                        <span>8th to 10 July 2018</span>
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Integer nec odio.</p>
                    </div>
                </div>
            </div>
            


        </div>

            <Button className='btn btn-primary u-mb-6 btn-large btn-cta'>Load More</Button>

    </div>
); 

export default tour;
