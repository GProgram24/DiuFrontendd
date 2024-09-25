import React from 'react'
import { Link } from 'react-router-dom'
import { PrernaRohanWedding } from '../../../utils/constants';
import { PrernaRohanMoodBoard } from '../../../utils/constants';
import Slider from 'react-slick';
import MoodBoard from '../../sections/MoodBoard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrernaRohan = () => {
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
                <source src="/Weddings/P&R Wedding/Rohan Prerna Short film 06 copy.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 xl:aspect-video flex flex-col items-center justify-end pb-16 xl:pb-24 gap-3 lg:gap-[22px] px-5 lg:px-20 text-center">
                <h1 className=" text-white font-heading text-[32px] lg:text-7xl font-light w-full">
                    Prerna & Rohan
                </h1>
                <p className='text-white font-subHeading text-[14px] lg:text-2xl font-light cursor-pointer'>Reimagined traditions for their intimate wedding..</p>
            </div>


            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='w-full text-center pt-8 md:pt-10 pb-8 flex flex-col items-center gap-2'>
                    {/* <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Featured Events</h1> */}
                    <p className='text-[14px] md:text-lg font-subHeading leading-[22px] md:leading-[26px] text-center w-full xl:w-[859px]'>For Prerna and Rohan's December 2023 wedding at Oleander Farms, we embraced a vision that harmonized minimalism with sustainability, blending traditional and modern elements to create a breathtaking celebration. Their commitment to an elegant yet environmentally conscious wedding event was reflected in every detail.</p>
                </div>

                <div className='w-full pb-10 md:pb-0'>
                    <Slider {...settings}>
                        {
                            PrernaRohanWedding.map((data, index) => (
                                <div className='w-full p-1 lg:p-2 xl:p-3'>
                                    <div className='w-full h-[400px] xl:h-[500px] bg-center bg-cover'>
                                        <img src={data.img} className='w-full h-full object-cover object-center'></img>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>


                <div className='w-full flex flex-col lg:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full lg:w-[55%] flex flex-col gap-4 xl:gap-6'>
                        <h2 className='text-base xl:text-lg font-subHeading font-medium'>Ceremony Setting</h2>
                        {/* <h1 className='text-[18px] lg:text-2xl font-heading leading-7 lg:leading-[30px] xl:leading-8'>“I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous.”</h1> */}
                        <div className='flex flex-col gap-2 xl:gap-3 text-[14px] xl:text-base font-subHeading leading-[22px] '>
                            <p>The focal point of their wedding decor was a reimagined mandap, designed with a fresh take on traditional aesthetics. Instead of the classic four-pillar structure, we opted for an open setup adorned with Sevanti and Rajnigandha flower hangings. These fragrant blooms were artfully arranged to create a canopy, framing the ceremony space beautifully. This design not only showcased the natural beauty of the flowers but also offered an unobstructed view of the sunset, making for a stunning backdrop during their pheras. This blend of traditional wedding flowers and modern design principles truly set their celebration apart.

                            </p>
                        </div>
                        <h2 className='text-base xl:text-lg font-subHeading font-medium'>Aisle and Entrance</h2>
                        <div className='flex flex-col gap-2 xl:gap-3 text-[14px] xl:text-base font-subHeading leading-[22px] '>
                            <p>The couple's grand entrance was a sight to behold, as they walked down an aisle lined with a delicate tapestry of pastel florals, including roses, peonies, and orchids. These floral arrangements, which enhanced the wedding decor, added a romantic and serene touch to the pathway. Friends and family showered the couple with petals as they made their way to the mandap, creating a magical and intimate atmosphere that perfectly aligned with their vision.
                            </p>
                        </div>

                    </div>

                    <div className='w-full lg:w-[40%]'>
                        <div className='w-full lg:h-[500px] xl:h-[635px] bg-center bg-cover'>
                            <video
                                className='w-full h-full object-cover'
                                autoPlay
                                loop
                                muted
                                playsInline>
                                <source src="/Weddings/P&R Wedding/1702475817336835.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>


                <div className='w-full flex justify-between py-5 gap-10 items-center'>
                    <div className='w-[40%] hidden lg:block'>
                        <div className='w-full  h-[500px] xl:h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/P&R Wedding/Ethereal Images/PreviewRP-106-_O5A6785.jpg")` }}></div>
                    </div>

                    <div className='w-full lg:w-[55%] flex flex-col gap-4 xl:gap-6'>
                        <h2 className='text-base xl:text-lg font-subHeading font-medium'>Overall Ambiance</h2>
                        {/* <h1 className='text-[18px] lg:text-2xl font-heading leading-7 lg:leading-[30px] xl:leading-8'>“I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous.”</h1> */}
                        <div className='flex flex-col gap-2 xl:gap-3 text-[14px] xl:text-base font-subHeading leading-[22px] '>
                            <p>To maintain a cohesive and enchanting atmosphere, we adorned the venue with subtle bulb lighting and strings of fairy lights. These lights gently highlighted the natural surroundings, casting a warm, inviting glow over the entire space. The strategic placement of lights in the trees and throughout the venue added a touch of twinkling magic to the evening, enhancing the romantic ambiance.</p>
                            <p className='text-[14px] xl:text-base'> The seamless integration of traditional elements with modern aesthetics, using soft pastels, created a serene and elegant setting that perfectly reflected Prerna and Rohan's values. Their wedding was a beautiful celebration of love, commitment, and sustainability, leaving a lasting impression on all who attended.</p>
                        </div>
                    </div>
                </div>


                {/*--------------------------------- MOOD BOARD -------------------------------------------------------*/}

                <MoodBoard cards={PrernaRohanMoodBoard} />

            </div>


            {/* Contact us */}
            <div className='w-full h-[526px] md:h-[660px] bg-center bg-cover' style={{ backgroundImage: `url("/Homepage/Contact.jpg")` }}>
                <div className='w-full h-full flex flex-col px-5 lg:px-0 lg:pl-[100px] xl:pl-[150px] pt-20 lg:pt-[130px] bg-black md:bg-black/20 text-white'>
                    <h1 className='font-heading text-[32px]  leading-10'>Do It Up.<br></br> Do It Up Today!</h1>
                    <p className='font-subHeading text-[14px] md:text-[18px] lg:w-[610px] pt-3 pb-8 lg:pb-6'>Do It Up specialises in personalised event decor, home makeovers and transformations with a vision to create spaces that reflect personalities.</p>
                    <Link to='/contact'><button className='px-5 md:px-7 py-2 w-[175px] h-[42px] border border-white hover:bg-white text-bse hover:text-black rounded-xl'>CONTACT US</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PrernaRohan