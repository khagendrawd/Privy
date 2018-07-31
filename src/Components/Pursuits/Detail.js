import React from 'react';

import Button from '../UI/Button/Button';
//import Gallery from '../UI/Gallery/Gallery';
import DetailImage from '../../assets/images/croatia_history.png'
import DetailImage1 from '../../assets/images/croatia_beach.png'
import DetailImage2 from '../../assets/images/croatia_food.png'
import DetailImage3 from '../../assets/images/croatia_fauna.png'
import DetailImage4 from '../../assets/images/croatia_countryside.png'

const details = (props) => (
    <div className='details'>
        <div className='details__images'>
            <div className='details__headings'>
                <div className='details__headings__inner'>
                    <h1>Adriatic Rendezvous in Croatia</h1>
                    <h3 className='u-pb-5'>A land full of stories and unique in so many ways. With great cultural heritage, fantastic cuisine and amazing natural beauty, Croatia is rising to become a country of incredible magnetic attraction.</h3>
                    <Button className='btn btn-primary btn-large btn-white btn-cta'>Plan My Trip</Button>
                </div>
            </div>
        </div>
        <div className='details__container'>
            <div className='overview u-pb-6'>
                <h2 className='u-text-center'>Overview</h2>
                <p className='u-text-center'>Your rendezvous with Croatia is far beyond the quintessential holiday experience. As you unfold one layer after another from the many canopying experiences, you find yourself in complete awe of this beautiful Mediterranean country and everything it offers.</p>
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
            <h2 className='u-pb-5 f-d-r'>Experience
                <div className='inclusion_icons'>
                    <i className='flight'></i>
                    <i className='meal'></i>
                    <i className='hotel'></i>
                    <i className='map'></i>
                </div>
            </h2>
            <div className='itinerary__itemouter'>

                <div className='itinerary__item u-pb-4'>
            <div className='text_watermark'>History &amp; Culture</div>
                    <div className='itinerary__item__items gradient'>
                        <img src={DetailImage} alt="gallery" />
                    </div>
                    <div className='itinerary__item__items u-p-5'>
                        <h3 className='frankfont u-pb-6'>A Tryst with Croatia’s History &amp; Culture</h3>
                        <p>Everyone loves a good story and nothing better than the history and culture of Croatia that weaves a powerful narration of its rich cultural heritage. The location of King’s Landing- Lannister family’s abode on the popular show, Game of Thrones, Dubrovnik presents itself on reel much like it is in real- fortified, raw and primaeval. Taking the Game of Thrones Trail in the Old Town of Dubrovnik sets the perfect tone for the historical exploration of the city. A sense of nostalgia instantly descends upon you as you first visit the city, crossing its narrow, limestone streets, walking past its baroque buildings and looking at the towering walls that stand protecting its old-world charm.</p>
                    </div>
                    </div>

                    <div className='itinerary__item u-pb-7'>
                        <div className='text_watermark'>Adventures</div>
                        <div className='itinerary__item__items u-p-5'>
                            <h3 className='frankfont u-pb-6'>Beach Delight and Water Adventures</h3>
                            <p>What’s a lavish holiday if it does entail some island hopping, adrenaline inducing water adventures and a relaxed evening at a fine, pristine Croatian beach? Make the most of your visit to this Adriatic seaside as you sail across the vast coastline of Croatia exploring the islands of Mljet, Korcula, Hvar and Brac. This virgin paradise is still finding its feet on the holiday map and this oblivion fills these islands with a sense of tranquility lending it overtones of pulchritude and wonderment. Enjoy it while it lasts! Other than indulging in kayaking, a must-experience activity at this island is a visit to the Blue Cave- a stupendous natural phenomena. The cave is a delightful sight with the sunlight lighting up the azure waters that fill it all along the route you take exploring the caves.</p>
                        </div>
                        <div className='itinerary__item__items gradient'>
                            <img src={DetailImage1} alt="gallery" />
                        </div>
                    </div>

                    <div className='itinerary__item u-pb-7'>
                        <div className='text_watermark'>Culinary Delights</div>
                        <div className='itinerary__item__items gradient'>
                            <img src={DetailImage2} alt="gallery" />
                        </div>
                        <div className='itinerary__item__items u-p-5'>
                            <h3 className='frankfont u-pb-6'>Croatian Culinary Delights</h3>
                            <p>Tom Brady once said, “I could talk food all day, I love good food.” And no truer words have ever been spoken! That feeling of satisfaction when a fine nosh melts in your mouth remains unmatched and this experience will be common occurrence in the land of fine wine and dine- Croatia. While you will find a multitude of restaurants serving delectable seafood and world- class cuisines, a tourist in this country can also experience things you don’t find on a regular holiday.</p>
                        </div>
                    </div>

                    <div className='itinerary__item u-pb-7'>
                        <div className='text_watermark'>Flora &amp; Fauna</div>
                        <div className='itinerary__item__items u-p-5'>
                            <h3 className='frankfont u-pb-6'>For The Love of Flora &amp; Fauna</h3>
                            <p>A feather on Croatia’s tourism hat, the country is home to some of the oldest and largest national parks some of which are even a part of the UNESCO World Heritage. As you walk along the natural trails of the many national parks in the country, you will encounter rare animal and bird species, which can be easily spotted here. An opportunity to flirt with the best of natural wonders, you will find ample lush natural trails covered in exotic greens perfectly complemented by a splash of colours coming fore in the form of beautiful birds playing peekaboo from behind one bush swiftly flying to another, always leaving you with wondering eyes, and seeking more.</p>
                         </div>
                        <div className='itinerary__item__items gradient'>
                            <img src={DetailImage3} alt="gallery" />
                        </div>
                    </div>


                    <div className='itinerary__item u-pb-7 pb-small'>
                        <div className='text_watermark'>Countryside</div>
                        <div className='itinerary__item__items gradient'>
                            <img src={DetailImage4} alt="gallery" />
                        </div>
                        <div className='itinerary__item__items u-p-5'>
                            <h3 className='frankfont u-pb-6'>Countryside Getaways</h3>
                            <p>A good holiday can be a relieving experience, even cathartic for some. And for some instant relaxation, it’s always a great idea to take a day’s trip from one location to another for a little change of air and of course, explore something new. Croatia has some great destinations for a day’s trip and some of the best ones are:</p>
                            <p><b>Sloveina-</b> A small yet breathtaking country in Europe, Slovenia is about three hours from Croatia. A little piece of paradise on Earth, the country has a laid back vibe and its old world charm is what makes it an alluring holiday spot.</p>
                            <p><b>Bosnia and Herzegovina-</b> A poignant narration of the heartbreaking civil war of the 1990s, Bosnia and Herzegovina- a country in the Balkan Peninsula-exudes warmth, probably because of its turbulent past.</p>
                        </div>
                    </div>


                    <div className='itinerary__item u-pb-7 pb-small'>
                        <div className='itinerary__item__items bg-black u-max-height-auto u-max-width-auto'>
                            <h2>Highlight</h2>
                            <ul className='u-pt-3 u-pb-5 pl-6'>
                                <li>Take the Game of Thrones Trail in Dubrovnik</li>
                                <li>Indulge in island hopping (Mljet, Korcula, Hvar, Brac) and experience exciting adventure sports at the many pristine beaches</li>
                                <li>Enjoy the most delectable preparations of some scrumptious food delights, especially fresh seafood</li>
                                <li>Take day trips to different cities in self-driven vehicles at your own convenience</li>
                                <li>Choose the number of days you wish to spend in the country</li>
                                <li>Even pick out the destinations you want to keep on your itinerary and the ones you want to add on. Customize to convenience!</li>
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
