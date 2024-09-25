import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { mehendi } from '../../../utils/constants';
import { sangeet } from '../../../utils/constants';
import { wedding } from '../../../utils/constants';
import Slider from 'react-slick';


const DelhiWedding = () => {
    const settings = {
        dots: false,
        slidesToShow: 3,
        swipe: false,        // Disables swipe
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    swipe: true
                }
            }
        ]
    };
    return (
        <div className='w-full h-full flex flex-col'>
            <video
                className='w-full h-screen xl:h-full object-cover relative'
                autoPlay
                loop
                muted
                playsInline>
                <source src="/Weddings/Delhi wedding/Aparna & Ananya Trailer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 xl:aspect-video flex flex-col items-center justify-end pb-16 xl:pb-24 gap-3 lg:gap-[22px] px-5 lg:px-20 text-center">
                <h1 className=" text-white font-heading text-[32px] lg:text-7xl font-light w-full">
                    Aparna & Ananya
                </h1>
                <p className='text-white font-subHeading text-[14px] lg:text-2xl font-light cursor-pointer'>The big fat intimate wedding</p>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <p className='text-[14px] md:text-lg font-subHeading leading-[22px] md:leading-[26px] text-center w-full xl:w-[900px] pt-8 md:pt-10'>Ananya and Aparna's wedding celebrations in Delhi were a series of exquisitely curated events, each reflecting the couple’s desire for elegance, simplicity, and subtle hues. Spread across three distinct occasions, each event was uniquely styled to resonate with their personal tastes and create unforgettable memories.</p>
                {/* Overview */}
                <div className='w-full'>
                    <div className='w-full text-center pt-8 md:pt-10 pb-8 flex flex-col items-center gap-2'>
                        <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Mehendi</h1>
                        <p className='text-[14px] md:text-lg font-subHeading leading-[22px] md:leading-[26px] text-center w-full xl:w-[900px]'>The festivities began with a vibrant Mehendi at Aparna's home, setting the tone for the joyous wedding celebrations. Held in the front yard, the decor was designed to exude energy and cheerfulness, featuring a lively palette of lavender, yellow, and pink. The entryway, adorned with flowing drapes in these colors, created a warm and welcoming entrance for guests. Overhead, delicate fabric draping in lavender and pink added a whimsical touch, while vibrant marigolds and orchids enhanced the festive atmosphere. This event was a testament to our expertise in personalized intimate celebratios, creating an environment perfect for the lively Mehendi celebrations.</p>
                    </div>

                    <div className='w-full pb-16 md:pb-0'>
                        <Slider {...settings}>
                            {
                                mehendi.map((data, index) => (
                                    <div className='w-full p-1 lg:p-2 xl:p-3'>
                                        <div className='w-full h-[400px] xl:h-[500px] bg-center bg-cover'>
                                            <img src={data.img} className='w-full h-full object-cover object-center'></img>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>

                    <div className='w-full grid grid-cols-2 lg:grid-cols-4 place-items-center gap-[6px] lg:gap-4 xl:gap-5 pb-10'>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Mehendi/A&A Mehendi-11.jpg")` }}></div>
                        <div className='w-full aspect-square  bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Mehendi/IMG_4562.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Mehendi/IMG_4807.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Mehendi/IMG_4742.jpg")` }}></div>
                    </div>
                </div>


                {/* SANGEET */}
                <div className='w-full'>
                    <div className='w-full text-center pt-8 md:pt-10 pb-8 flex flex-col items-center gap-2'>
                        <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Sangeet</h1>
                        <p className='text-[14px] md:text-lg font-subHeading leading-[22px] md:leading-[26px] text-center w-full xl:w-[900px]'>Following the Mehendi, the Sangeet was hosted at the poolside of Claridges Hotel, offering a contemporary and chic setting for the evening. Departing from conventional LED screens, we opted for elegant neon arches that served as the focal point of the stage. These arches, illuminated with soft neon lights, provided a modern and sophisticated backdrop for performances. A personalized bar, designed with glass elements and adorned with disco balls and fairy lights, added glamour and fun to the evening. The combination of neon arches, a sparkling bar, and ambient lighting created a festive yet refined atmosphere, perfect for a night of dancing and celebration. This event perfectly showcased our ability to blend modern wedding decor with traditional elements for a truly unique celebration.</p>
                    </div>
                    {/* h-[400px] xl:h-[500px] */}
                    <div className='w-full pb-16 md:pb-0'>
                        <Slider {...settings}>
                            {
                                sangeet.map((data, index) => (
                                    <div className='w-full p-1 lg:p-2 xl:p-3'>
                                        <div className='w-full h-[400px] xl:h-[500px] bg-center bg-cover'>
                                            <img src={data.img} className='w-full h-full object-cover object-center'></img>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>

                    <div className='w-full grid grid-cols-2 lg:grid-cols-4 place-items-center gap-[6px] lg:gap-4 xl:gap-5 pb-10'>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Sangeet/A&A sangeet-15.jpg")` }}></div>
                        <div className='w-full aspect-square  bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Sangeet/A&A sangeet-6.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Sangeet/A&A sangeet-7.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Sangeet/A&A sangeet-1.jpg")` }}></div>
                    </div>
                </div>

                {/* Wedding */}
                <div className='w-full'>
                    <div className='w-full text-center pt-8 md:pt-10 pb-8 flex flex-col items-center gap-2'>
                        <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Wedding</h1>
                        <p className='text-[14px] md:text-lg font-subHeading leading-[22px] md:leading-[26px] text-center w-full xl:w-[900px]'>The main event, the wedding, was held at Claridges Hotel, where Aparna envisioned a serene and elegant setting with a pastel floral theme. We transformed the main lawn into a breathtaking venue, with a beautifully designed mandap as the centerpiece. Adorned with pastel flowers in shades of pink, peach, and cream, the mandap created a romantic and ethereal atmosphere for the ceremony. The bar and centerpieces also incorporated the pastel floral theme, ensuring a cohesive and harmonious environment. This wedding was a perfect example of our command on custom luxury wedding decor where every detail was thoughtfully designed to reflect the couple's style and create a series of memorable moments.</p>
                    </div>

                    <div className='w-full pb-16 md:pb-0'>
                        <Slider {...settings}>
                            {
                                wedding.map((data, index) => (
                                    <div className='w-full p-1 lg:p-2 xl:p-3'>
                                        <div className='w-full h-[400px] xl:h-[500px] bg-center bg-cover'>
                                            <img src={data.img} className='w-full h-full object-cover object-center'></img>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>

                    <div className='w-full grid grid-cols-2 lg:grid-cols-4 place-items-center gap-[6px] lg:gap-4 xl:gap-5 pb-10'>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Wedding/Wedding-1.jpg")` }}></div>
                        <div className='w-full aspect-square  bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Wedding/IMG_5028.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Wedding/A&A-3.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Delhi wedding/Wedding/IMG_5045.jpg")` }}></div>
                    </div>
                </div>

                {/* Couples Review */}
                <div className='w-full'>
                    <div className='w-full text-center  pb-8 flex flex-col items-center gap-2'>
                        <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Couple’s Review</h1>
                        <p className='text-[14px] md:text-lg font-subHeading leading-[22px] md:leading-[26px] text-center w-full xl:w-[900px]'>"Working with Taral and her team was the best decision we made for our wedding! Taral's attention to detail was exceptional, as she guided us through every aspect to ensure everything felt personal and special. She also found ways to repurpose our decor items, making sure we were mindful throughout. We had a truly unforgettable experience thanks to their expertise and dedication and would highly recommend Do It Up!" - Aparna (Bride)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DelhiWedding