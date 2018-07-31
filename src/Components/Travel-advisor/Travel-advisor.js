import React from 'react';

import Button from '../UI/Button/Button';

import ImagesGallery from '../../assets/images/gallery_images.png';
import ImagesGallery1 from '../../assets/images/gallery_images_1.png';

const traveladvisor = () => (
    <div className='traveladvisor'>
        <div className='traveladvisor__images'>
            <div className='traveladvisor__headings'>
                <h1>Find a Travel Advisor</h1>
                <h3 className='u-pb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
            </div>
        </div>

        <div className='advisorform u-p-2'>
            <div className='advisorform__inner bg-gold f-d-c u-p-6'>
                <div className='advisorform__items'>
                    <h2 className='u-text-center'>WHAT KIND OF TRAVELLER ARE YOU ?</h2>
                    <span>(Choose up to 3 interests)</span>

                    <div className='inner_div u-mt-4'>


                        <div className='advisorform__items__item'>
                            <div className='advisorform-image'><img src={ImagesGallery} alt="gallery" /></div>
                        </div>

                        <div className='advisorform__items__item'>
                            <div className='advisorform-image'><img src={ImagesGallery1} alt="gallery" /></div>
                        </div>

                        <div className='advisorform__items__item'>
                            <div className='advisorform-image'><img src={ImagesGallery} alt="gallery" /></div>
                        </div>

                        <div className='advisorform__items__item'>
                            <div className='advisorform-image'><img src={ImagesGallery1} alt="gallery" /></div>
                        </div>

                    
                        <div className='advisorform__items__item'>
                            <div className='advisorform-image'><img src={ImagesGallery} alt="gallery" /></div>
                        </div>

                        <div className='advisorform__items__item'>
                            <div className='advisorform-image'><img src={ImagesGallery} alt="gallery" /></div>
                        </div>

                        <div className='advisorform__items__item'>
                            <div className='advisorform-image'><img src={ImagesGallery1} alt="gallery" /></div>
                        </div>

                        <div className='advisorform__items__item'>
                            <div className='advisorform-image'><img src={ImagesGallery} alt="gallery" /></div>
                        </div>


                    </div>

                        <div className='others u-pt-2 u-pb-2 u-mb-6'>Others</div>


                        <h2 className='u-text-center u-mt-7'>Preffered Destinations</h2>

                    <div className='inner_div u-mt-4'>


                        <div className='advisorform__items__item div_small'>
                            <div className='advisorform-image'><img src={ImagesGallery} alt="gallery" /></div>
                        </div>

                        <div className='advisorform__items__item div_small'>
                            <div className='advisorform-image'><img src={ImagesGallery1} alt="gallery" /></div>
                        </div>

                        <div className='advisorform__items__item div_small'>
                            <div className='advisorform-image'><img src={ImagesGallery1} alt="gallery" /></div>
                        </div>

                        <div className='advisorform__items__item div_small'>
                            <div className='advisorform-image'><img src={ImagesGallery} alt="gallery" /></div>
                        </div>
                    
                        <div className='advisorform__items__item div_small'>
                            <div className='advisorform-image'><img src={ImagesGallery1} alt="gallery" /></div>
                        </div>


                    </div>

                        <div className='others u-pt-2 u-pb-2 u-mb-6'>Others</div>




                        <h2 className='u-text-center u-mt-7'>WE WANT TO GET TO KNOW YOU BETTER</h2>

                        <div className='inner_div u-mt-4'>
                            <div className='form_fields u-pb-4 f-d-r'>
                                <input type='text' placeholder='First Name' />
                                <input type='text' placeholder='Last Name' />
                            </div>
                            <div className='form_fields u-pb-4 f-d-r'>
                                <input type='text' placeholder='Email' />
                                <input type='number' placeholder='Mobile' />
                            </div>
                            <div className='form_fields u-pb-4 f-d-r'>
                                <select>
                                    <option>Isd Code</option>
                                </select>
                                <select>
                                    <option>City</option>
                                </select>
                            </div>

                            <div className='form_fields u-pb-4 f-d-r'>
                                <select>
                                    <option>State</option>
                                </select>
                                <input type='number' placeholder='Pin Code' />
                            </div>
                            <div className='form_fields u-pb-4 u-pt-4 f-d-r'>
                            <Button className='u-mt-6 btn-purple btn btn-primary u-mb-6 btn-large btn-cta'>Find a Travel Advisor</Button>
                            </div>

                        </div>
                        
                </div>
            </div>
        </div>
        
    </div>
); 

export default traveladvisor;
