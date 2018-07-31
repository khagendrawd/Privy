import React from 'react';

import Button from '../UI/Button/Button';
import Gallery from '../UI/Gallery/Gallery';
import { NavLink } from 'react-router-dom';

const pursuits = () => (
    <div className='pursuits'>
        <div className='pursuits__images'>
            <div className='pursuits__headings'>
                <h1>Pursuits</h1>
                <h3 className='u-pb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
                <Button className='btn btn-primary btn-white btn-large btn-cta'>Find A Travel Advisor</Button>
            </div>
        </div>
        
        <Gallery type='pursuit'/>
        <Button className='u-mt-3 btn btn-primary u-mb-6 btn-large btn-cta'>Load More</Button>

        <NavLink to='/detail' activeClassName="active">Detail</NavLink>
    </div>
); 

export default pursuits;
