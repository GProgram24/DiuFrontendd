import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FiArrowUpRight } from "react-icons/fi";
import OurServices from '../sections/OurServices';
import { featuredIn } from '../../utils/constants';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const settings = {
        dots: false,
        slidesToShow: 4,
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
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col'>
            <div className='w-full aspect-video lg:h-[70vh] bg-center bg-cover' style={{ backgroundImage: `url("/Banners/About us.jpg")` }}>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='flex flex-col items-center justify-center w-full my-8 md:my-10'>
                    <h1 className='text-[22px] md:text-[32px] font-heading font-bold'>About Us</h1>
                    <p className='text-[14px] md:text-[18px] font-subHeading w-full lg:w-[859px]'>   "Do It Up is a Mumbai-based event decor brand known for its luxury event styling. Founded by Taral Jadhav, we’ve created stunning decor for Bollywood celebrities and high-profile events."</p>
                </div>

                <div className='w-full xl:py-10 xl:px-[75px] flex flex-col-reverse lg:flex-row justify-between gap-6  xl:gap-20 items-center '>
                    <div className='flex flex-col lg:items-center lg:text-center lg:w-[380px] xl:w-[490px]  '>
                        <div className='flex flex-col gap-3 lg:gap-2 xl:gap-4 lg:items-center w-full lg:text-center mb-5 lg:mb-3 xl:mb-7'>
                            <h3 className='font-subHeading text-[14px] lg:text-base font-medium'>OUR TEAM</h3>
                            <p className='text-[18px] xl:text-[24px] font-heading leading-7 lg:leading-[30px] xl:leading-8'>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most.</p>
                        </div>

                        <div className='text-[14px] font-light font-subHeading flex flex-col lg:text-center gap-2 xl:gap-4'>
                            <p className='leading-[22px]'>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. </p>
                            <p className='leading-[22px]'>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous.</p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className='w-full lg:w-[400px] xl:w-[614px] aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/About Us/Copy of 146A5840.jpg")` }}>
                    </div>
                </div>
            </div>


            {/* Founder */}
            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='w-full py-8 md:py-10 lg:py-16  xl:px-[75px] flex flex-col lg:flex-row justify-between gap-6 xl:gap-20 items-center'>

                    <div className='w-full lg:w-[400px] xl:w-[614px] aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/About Us/IMG_0581_jpg.jpg")` }}>
                    </div>

                    <div className='flex flex-col lg:items-center lg:text-center lg:w-[390px] xl:w-[476px] '>
                        <div className='flex flex-col  lg:items-center w-full mb-5  lg:mb-2 xl:mb-6'>
                            <h1 className='text-[22px] xl:text-[32px] font-heading font-bold'>Taral Jadhav</h1>
                            <p className='text-[14px] lg:text-base font-subHeading'>Founder</p>
                        </div>

                        <div className='flex flex-col lg:items-center w-full lg:text-center mb-5 lg:mb-2 xl:mb-6'>
                            <p className='text-[18px] xl:text-[24px] font-heading leading-7 lg:leading-[30px] xl:leading-8'>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most.</p>
                        </div>

                        <div className='text-[14px] font-light font-subHeading flex flex-col lg:text-center gap-2 xl:gap-4'>
                            <p className='leading-[22px]'>Mumbai Based Taral Jadhav - Architect and Entrepreneur made her journey into the world of start-ups in April 2020.
                                On pursuing Architecture from Rachana Sansad's Academy of Architecture in Mumbai, Taral founded 'Do It Up' with the aim to make Interior Design and Home Makeovers, a service accessible to all. </p>
                            <p className='leading-[22px]'>The journey has been nothing short of exciting – 4 years and almost 1000 events later – Do It Up is not only B-Town’s favourite but has also worked with some of the most renowned brands in the country. </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Featured in */}
            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='w-full text-center pt-8 pb-8 md:pt-10 md:pb-10 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading'>We are Featured in</h1>
                    <p className='text-[14px] md:text-lg font-subHeading'>Turning your pinterest dream into reality</p>
                </div>

                {/* Cards */}
                <div className='w-full pb-10 md:pb-0'>
                    <Slider {...settings}>
                        {
                            featuredIn.map((data, index) => (
                                <a href={data.url} className='w-full h-full p-1 xl:p-2' target="_blank" rel="noopener noreferrer" key={index}>
                                    <div className='w-full flex flex-col p-3 border border-black/10 rounded-lg gap-5 min-h-[370px] xl:min-h-[400px]  box-border'>
                                        <img src={data.img} className='w-full' alt={data.title} />
                                        <div>
                                            <div className='flex items-start gap-2'>
                                                <h1 className='uppercase text-[14px] xl:text-base font-subHeading font-semibold'>{data.title}</h1>
                                                <FiArrowUpRight className='w-5 h-5' />
                                            </div>
                                            <p className='text-[14px] xl:text-base font-subHeading font-light line-clamp-3'>
                                                {data.desc}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))
                        }
                    </Slider>
                </div>


            </div>

            {/* Our Services */}
            <OurServices />


            {/* Contact us */}
            <div className='w-full h-[526px] md:h-[660px] bg-center bg-cover ' style={{ backgroundImage: `url("/Homepage/service2.jpg")` }}>
                <div className='w-full h-full flex flex-col px-5 lg:px-0 lg:pl-[100px] xl:pl-[150px] pt-20 lg:pt-[130px] bg-black md:bg-black/20 text-white'>
                    <h1 className='font-heading text-[32px]  leading-10'>Do It Up. <br></br>Do It Up Today!</h1>
                    <p className='font-subHeading text-[14px] md:text-[18px] lg:w-[610px] pt-3 pb-8 lg:pb-6'>Do It Up specialises in personalised event decor, home makeovers and transformations with a vision to create spaces that reflect personalities.</p>
                    <Link to='/contact'><button className='px-5 md:px-7 py-2 w-[175px] h-[42px] border border-white hover:bg-white text-bse hover:text-black rounded-xl'>CONTACT US</button></Link>
                </div>
            </div>
        </div>
    )
}

export default AboutUs