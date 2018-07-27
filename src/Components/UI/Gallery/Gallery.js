import React from 'react';

import ImagesGallery from '../../../assets/images/gallery_images.png';
import ImagesGallery1 from '../../../assets/images/gallery_images_1.png';

const gallery = (props) => (
    <div className='gallery'>
        <div className='gallery__item'>
            <div className='gallery__image'>
                <img src={ImagesGallery} alt="gallery" />
                <div className='taging'>
                    <div className='mediaType'>Image</div>
                    <div className='content'>
                        { props.type === 'pursuit' ?  <span>8th to 10 July 2018</span> : null }
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Integer nec odio.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='gallery__item'>
            <div className='gallery__image'>
                <img src={ImagesGallery1} alt="gallery" />
                <div className='taging'>
                    <div className='mediaType'>Image</div>
                    <div className='content'>
                        { props.type === 'pursuit' ?  <span>8th to 10 July 2018</span> : null }
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Integer nec odio.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='gallery__item'>
            <div className='gallery__image'>
                <img src={ImagesGallery} alt="gallery" />
                <div className='taging'>
                    <div className='mediaType'>Image</div>
                    <div className='content'>
                        { props.type === 'pursuit' ?  <span>8th to 10 July 2018</span> : null }
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Integer nec odio.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='gallery__item'>
            <div className='gallery__image'>
                <img src={ImagesGallery1} alt="gallery" />
                <div className='taging'>
                    <div className='mediaType'>Image</div>
                    <div className='content'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Integer nec odio. </div>
                </div>
            </div>
        </div>

        <div className='gallery__item'>
            <div className='gallery__image'>
                <img src={ImagesGallery} alt="gallery" />
                <div className='taging'>
                    <div className='mediaType'>Image</div>
                    <div className='content'>
                        { props.type === 'pursuit' ?  <span>8th to 10 July 2018</span> : null }
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Integer nec odio.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='gallery__item'>
            <div className='gallery__image'>
                <img src={ImagesGallery1} alt="gallery" />
                <div className='taging'>
                    <div className='mediaType'>Image</div>
                    <div className='content'>
                        { props.type === 'pursuit' ?  <span>8th to 10 July 2018</span> : null }
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Integer nec odio.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default gallery;