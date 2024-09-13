import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { collaboration } from '../../utils/constants'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const OurCollaborations = () => {

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
        <div className='w-full  px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center'>
            <div className='w-full text-center pt-10 pb-6 flex flex-col items-center gap-2'>
                <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Collaborations</h1>
                <p className='text-[14px] md:text-lg font-subHeading'>Turning your pinterest dream into reality</p>
            </div>

            {/* 3 images */}

            <div className='w-full pb-10'>
                <Slider {...settings}>
                    {
                        collaboration.map((data, index) => (

                            <div key={index} className='relative w-full aspect-square p-1 lg:p-2 xl:p-3 '>
                                <img src={data.img} alt={data.eventName} className='w-full h-full object-cover' />

                                <div className='absolute inset-0 w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5'>
                                    <h1 className='text-[16px] md:text-[22px]  font-medium'>{data.eventName}</h1>
                                    <p className='text-[14px] md:text-lg font-light'>{data.location}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

            {/* <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Homepage/service2.jpg")` }}>
                    <div className='w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5'>
                        <h1 className='text-[22px]  font-medium'>Name of the Event</h1>
                        <p className='text-lg font-light'>Location</p>
                    </div>
                </div>

                <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Homepage/service2.jpg")` }}>
                    <div className='w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5'>
                        <h1 className='text-[22px]  font-medium'>Name of the Event</h1>
                        <p className='text-lg font-light'>Location</p>
                    </div>
                </div> */}

            <div className='py-8'>
                <Link to='/collaborations'><button className='text-base border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-xl px-8 py-2'>EXPLORE</button></Link>
            </div>
        </div>
    )
}

export default OurCollaborations