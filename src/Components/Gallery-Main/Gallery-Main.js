import React from 'react';

import Button from '../UI/Button/Button';
import Gallery from '../UI/Gallery/Gallery';
//import { NavLink } from 'react-router-dom';

const gallerymain = () => (
    <div className='gallerymain'>
        <div className='gallerymain__images'>
            <div className='gallerymain__headings'>
                <h1>Gallery</h1>
                <h3 className='u-pb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
                
            </div>
        </div>
        
        <Gallery/>
        <Button className='u-mt-6 btn btn-primary u-mb-6 btn-large btn-cta'>Load More</Button>
    </div>
); 

export default gallerymain;
