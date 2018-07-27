import React from 'react';

import Button from '../UI/Button/Button';
//import Gallery from '../UI/Gallery/Gallery';
import DetailImage from '../../assets/images/gallery_images.png'

const details = (props) => (
    <div className='details'>
        <div className='details__images'>
            <div className='details__headings'>
                <h1 className='u-text-left'>Pursuits 1</h1>
                <h3 className='u-pb-5 u-text-left'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet.</h3>
                <Button className='btn btn-primary btn-large btn-cta'>Plan My Trip</Button>
            </div>
        </div>
        <div className='details__container'>
            <div className='overview u-pb-6'>
                <h2>Overview</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
            </div>
        </div>

        { props.type === 'detail' ?  
        <div className='expertTalk u-pt-6 u-pb-6'>
            <div className='expertTalk__container'>
                <div className='overview'>
                    <h2>EXPERT - LOREM IPSUM</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                </div>
                <div className='expertimage'></div>
            </div>
        </div>
         : null }

        <div className='details__itinerary u-pt-6 u-pb-6'>
            <h2 className='u-pb-5 f-d-r'>DETAILED ITINERARY
                <div className='inclusion_icons'>
                    <i className='flight'></i>
                    <i className='meal'></i>
                    <i className='hotel'></i>
                    <i className='map'></i>
                </div>
            </h2>
            <div className='itinerary__itemouter'>

                <div className='itinerary__item'>
                    <div className='itinerary__item__items gradient'>
                        <img src={DetailImage} alt="gallery" />
                        <div className='item_heading'>DAY 1 - LOREM IPSUM</div>
                    </div>
                    <div className='itinerary__item__items u-p-7 bg-drkgry'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                    </div>
                    </div>

                    <div className='itinerary__item'>
                        <div className='itinerary__item__items u-p-7 bg-drkgry'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                        </div>
                        <div className='itinerary__item__items gradient'>
                            <img src={DetailImage} alt="gallery" />
                            <div className='item_heading'>DAY 2 - LOREM IPSUM</div>
                        </div>
                    </div>

                    <div className='itinerary__item'>
                        <div className='itinerary__item__items gradient'>
                            <img src={DetailImage} alt="gallery" />
                            <div className='item_heading'>DAY 3 - LOREM IPSUM</div>
                        </div>
                        <div className='itinerary__item__items u-p-7 bg-drkgry'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                        </div>
                    </div>

                    <div className='itinerary__item'>
                        <div className='itinerary__item__items u-p-7 bg-drkgry'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                        </div>
                        <div className='itinerary__item__items gradient'>
                            <img src={DetailImage} alt="gallery" />
                            <div className='item_heading'>DAY 4 - LOREM IPSUM</div>
                        </div>
                    </div>


                    <div className='itinerary__item'>
                        <div className='itinerary__item__items gradient'>
                            <img src={DetailImage} alt="gallery" />
                            <div className='item_heading'>DAY 5 - LOREM IPSUM</div>
                        </div>
                        <div className='itinerary__item__items u-p-7 bg-drkgry'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                        </div>
                    </div>


                    <div className='itinerary__item'>
                        <div className='itinerary__item__items u-p-7 bg-black u-max-height-auto'>
                            <h2>Inclusions</h2>
                            <ul className='u-pt-3  u-pb-5'>
                                <li>Lorem ipsum dolor sit amet,consectetuer  adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                                <li>Nunc dignissim risus id metus.</li>
                                <li>Cras ornare tristique elit.</li>
                            </ul>
                        </div>
                        <div className='itinerary__item__items u-p-7 bg-black u-max-height-auto'>
                            <h2>Exclusions</h2>
                            <ul className='u-pt-3  u-pb-5'>
                                <li>Lorem ipsum dolor sit amet,consectetuer  adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                                <li>Nunc dignissim risus id metus.</li>
                                <li>Cras ornare tristique elit.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='fare'>
                        <div className='fare__inner f-d-r'>
                            <div className='fare__tag btn-primary'>
                                <div className='fare__tag__text'>Cost</div>
                            </div>
                            <div className='price_numbers bg-drkgry u-p-4 u-text-left'>
                                ₹66,666/-
                                <span>Per Person + GST (Twin sharing)</span>
                            </div>
                        </div>
                        <div className='fare__inner f-d-c u-p-4 pl-6'>
                            <span>0124-4749322 / 3322876</span>
                            <span>journeys@yatra.com</span>
                        </div>
                    </div>


            </div>
        </div>
            <Button className='btn btn-primary u-mb-6 btn-large btn-cta'>Customize This Trip</Button>
    </div>
); 

export default details;
