import React from 'react'
import OurGallery from '../sections/OurGallery'
import { featuredIntimateEvents } from '../../utils/constants'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const Service = () => {
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
                    dots: false,
                    swipe:true
                }
            }
        ]
    };
    return (
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col '>
            <div className='w-full aspect-video lg:h-[70vh] bg-center bg-cover' style={{ backgroundImage: `url("/Service/banner1.jpg")` }}>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='w-full text-center pt-8 md:pt-10 pb-6 flex flex-col items-center gap-2 '>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Intimate Events</h1>
                    <p className='text-[14px] md:text-lg font-subHeading '>Turning your pinterest dream into reality</p>
                </div>

                <div className='w-full  flex flex-col-reverse  items-center lg:flex-row justify-between gap-5 lg:gap-[40px] xl:gap-[71px] md:my-8'>
                    <div className='lg:w-[700px] lg:h-[300px] xl:w-[665px] flex flex-col items-start justify-center gap-3 '>
                        <h1 className='text-[22px] xl:text-[32px] font-bold font-heading '>Lorem Ipsum</h1>
                        <p className='text-[14px] xl:text-base font-subHeading leading-[22px] md:leading-[26px]'>We excel at crafting relaxed yet refined events, paying meticulous attention to every detail while maintaining our focus on delivering exceptional, joyous gatherings that linger in the hearts and minds of our clients and their guests long after the celebrations have ended. We excel at crafting relaxed yet refined events, paying meticulous attention to every detail while maintaining our focus on delivering exceptional, joyous gatherings that linger in the hearts and minds of our clients and their guests long after the celebrations have ended.</p>
                    </div>
                    <div className='w-full h-[390px]  lg:h-[400px] lg:w-[792px] xl:h-[647.37px] bg-center bg-cover' style={{ backgroundImage: `url("/Homepage/banner1.jpg")` }}>
                    </div>
                </div>


                {/* Featured Events */}
                <div className='w-full flex flex-col items-center '>
                    <div className='w-full text-center pt-10 pb-10 flex flex-col items-center gap-2'>
                        <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Featured Events</h1>
                        <p className='text-[14px] md:text-lg font-subHeading'>Turning your pinterest dream into reality</p>
                    </div>

                    <div className='w-full'>
                        <Slider {...settings}>

                        {
                            featuredIntimateEvents.map((data, index) => (

                                <div key={index} className='w-full aspect-square flex flex-col items-center lg:p-3'>
                                    <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url(${data.img})` }}></div>
                                    <h1 className='text-[22px] font-heading w-full text-center mt-3'>{data.eventName}</h1>
                                    <button className='text-base font-medium font-subHeading w-full border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out py-2 rounded-xl mt-3'>VIEW EVENT</button>
                                </div>
                            ))
                        }
                        </Slider>
                    </div>
                </div>


                {/* Gallery */}
                <OurGallery />
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

export default Service