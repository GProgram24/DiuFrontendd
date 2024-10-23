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
            <div className='w-full aspect-video lg:h-[90vh]  bg-bottom bg-cover' style={{ backgroundImage: `url("/Banners/About us1.jpg")` }}>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='flex flex-col items-center justify-center w-full my-8 md:my-10'>
                    <h1 className='text-[22px] md:text-[32px] font-heading font-bold'>About Us</h1>
                    <p className='text-[14px] md:text-[18px] font-subHeading w-full lg:w-[859px] text-center'>Do It Up is a Mumbai-based event design & decor brand known for its luxury event styling. Founded by Architect Taral Jadhav, Do It Up is now B-Town’s favourite and one of the most sought after decor brands in the city!</p>
                </div>

                <div className='w-full xl:py-10 xl:px-[75px] flex flex-col-reverse lg:flex-row justify-between gap-6  xl:gap-10 items-center '>
                    <div className='flex flex-col lg:items-center lg:text-center lg:w-[380px] xl:w-[490px]  '>
                        <div className='flex flex-col gap-3 lg:gap-2 xl:gap-4 lg:items-center w-full lg:text-center mb-5 lg:mb-3 xl:mb-7'>
                            {/* <h3 className='font-subHeading text-[14px] lg:text-base font-medium'>OUR TEAM</h3> */}
                            <p className='text-[18px] lg:text-[16px] xl:text-[24px] font-heading leading-7 lg:leading-[30px] xl:leading-8'>Established in 2020 during the lockdown, Do It Up is a Mumbai-based event design & decor brand that specialises in intimate celebrations. What began as a blog by our Founder, Taral Jadhav has rapidly evolved into a household name.</p>
                        </div>

                        <div className='text-[14px] lg:text-xs xl:text-[14px] font-light font-subHeading flex flex-col lg:text-center gap-2 xl:gap-4'>
                            <p className='leading-[22px]'>Taral’s initial plans to launch her design firm in April 2020 were halted by the pandemic, leading her to pivot. She began curating elegant home decor settings through her blog, offering refined tips on transforming spaces with repurposed items.</p>
                            <p className='leading-[22px]'>Her beautifully styled personal celebrations garnered admiration and requests from friends and clients alike. Initially reserved about event decor, it was a personal request from influencer Juhi Godambe that inspired Taral to meet this growing demand—ushering in the creation of Do It Up, a luxury event decor service.</p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className='w-full lg:w-[400px] xl:w-[614px] aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/About Us/Copy of 146A5840.jpg")` }}>
                    </div>
                </div>
            </div>


            {/* Founder */}
            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='w-full py-8 md:py-10 lg:py-16  xl:px-[75px] flex flex-col lg:flex-row justify-between gap-6 xl:gap-10 items-center'>

                    <div className='w-full lg:w-[400px] xl:w-[614px] aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/About Us/IMG_0581_jpg.JPG")` }}>
                    </div>

                    <div className='flex flex-col lg:items-center lg:text-center lg:w-[390px] xl:w-[476px] '>
                        {/* <div className='flex flex-col  lg:items-center w-full mb-5  lg:mb-2 xl:mb-6'>
                            <h1 className='text-[22px] xl:text-[32px] font-heading font-bold'>Taral Jadhav</h1>
                            <p className='text-[14px] lg:text-base font-subHeading'>Founder</p>
                        </div> */}

                        <div className='flex flex-col lg:items-center w-full lg:text-center mb-5 lg:mb-2 xl:mb-6'>
                            <p className='text-[18px] lg:text-[16px] xl:text-[24px] font-heading leading-7 lg:leading-[30px] xl:leading-8'>Since then, our journey has been nothing short of exhilarating. We've had the pleasure of working with prestigious clients including Bollywood celebrities like Kiara Advani, Janhvi Kapoor, Vicky Kaushal & Katrina Kaif, Malaika Arora, Bhumi Pednekar, Akshay Kumar, and Kriti Sanon.</p>
                        </div>

                        <div className='text-[14px] lg:text-xs xl:text-[14px] font-light font-subHeading flex flex-col lg:text-center gap-2 xl:gap-4'>
                            <p className='leading-[22px]'>We also specialise in custom event styling for brand events, particularly in the lifestyle, beauty & hospitality industries. We’ve partnered with brands such as Nykaa Fashion, Hamleys India, Pinterest India, Shilpa Shetty’s Bastian Hospitality, Yauatcha, Cin Cin, Club Jolie’s and more.</p>
                            <p className='leading-[22px]'>Four years and nearly 1,000 events later, Do It Up has expanded into the wedding decor industry. We kicked off the 2023-24 wedding season with four intimate weddings across Mumbai and Delhi, with many more lined up across the country. Our commitment to curating personalised decor for every occasion continues to drive us, as we help our clients celebrate life's most special moments with style and elegance.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Featured in */}
            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='w-full text-center pt-8 pb-8 md:pt-10 md:pb-10 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading'>We are Featured</h1>
                    <p className='text-[14px] md:text-lg font-subHeading'>In the country’s most credible publications</p>
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
            <div className='w-full h-[526px] md:h-[660px] bg-center bg-cover bg-no-repeat' 
                style={{ backgroundImage: `url("/Homepage/Contact.jpg")` }}>
                <div className='w-full h-full flex flex-col px-5 lg:px-0 lg:pl-[100px] xl:pl-[150px] pt-20 lg:pt-[130px] bg-black bg-opacity-50 bg-black/20 text-white'>
                    <h1 className='font-heading text-[32px] leading-10'>
                        Do It Up.<br /> Do It Up Today!
                    </h1>
                    <p className='font-subHeading text-[14px] md:text-[18px] lg:w-[610px] pt-3 pb-8 lg:pb-6'>
                        Do It Up specialises in personalised event decor, home makeovers and transformations with a vision to create spaces that reflect personalities.
                    </p>
                    <Link to='/contact'>
                        <button className='px-5 md:px-7 py-2 w-[175px] h-[42px] border border-white hover:bg-white text-base hover:text-black rounded-xl'>
                            CONTACT US
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutUs