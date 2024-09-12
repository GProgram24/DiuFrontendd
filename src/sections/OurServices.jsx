import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import { servicesData } from '../../utils/constants'

const OurServices = () => {

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
                    swipe:true,
                
                }
            }
        ]
    };

    return (
        <div className='w-full  px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center pb-20'>
            <div className='w-full text-center pt-10 pb-6 flex flex-col items-center gap-2'>
                <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Service</h1>
                <p className='text-[14px] md:text-lg font-subHeading '>Turning your pinterest dream into reality</p>
            </div>

            <div className='w-full'>
                <Slider {...settings}>
                    {
                        servicesData.map((data, index) => (
                            <div key={index} className='relative w-full h-[403px] xl:h-[689px]'>
                                <img src={data.img} alt={data.title} className='w-full h-full object-cover' />
                                
                                {/* Overlay content */}
                                <div className='absolute inset-0 flex flex-col justify-between text-white font-medium p-5 xl:p-7 hover:bg-black/20'>
                                    <div className='flex flex-col gap-2 uppercase font-subHeading w-[170px] md:w-[308px]'>
                                        <p className='text-[12px] xl:text-base'>{data.title}</p>
                                        <h1 className='text-[22px] xl:text-[32px] md:w-40 xl:w-auto leading-[30px] xl:leading-10'>{data.subtitle}</h1>
                                    </div>
                                    <Link to={data.link}>
                                        <button className='w-full text-base font-subHeading py-[5px] border border-white hover:bg-white hover:text-black rounded-xl transition-all duration-300 ease-in-out'>
                                            EXPLORE
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default OurServices
