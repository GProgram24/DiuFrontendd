import React from 'react'
import { Link } from 'react-router-dom'
import { NatashaWeddingg } from '../../utils/constants'
import Slider from 'react-slick';


const WeddingSeparate = () => {
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
                <source src="/Homepage/Rohan Prerna Short film 7.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 xl:aspect-video flex flex-col items-center justify-end pb-16 xl:pb-24 gap-3 lg:gap-[22px] px-5 lg:px-20 text-center">
                <h1 className=" text-white font-heading text-[32px] lg:text-7xl font-light w-full">
                    Agnès Varda & Jacques Demy
                </h1>
                <p className='text-white font-subHeading text-[14px] lg:text-2xl font-light cursor-pointer'>Good times all around</p>
            </div>


            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='w-full text-center pt-8 md:pt-10 pb-8 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Featured Events</h1>
                    <p className='text-[14px] md:text-lg font-subHeading leading-[22px] md:leading-[26px] text-center w-full xl:w-[859px]'>We excel at crafting relaxed yet refined events, paying meticulous attention to every detail while maintaining our focus on delivering exceptional, joyous gatherings that linger in the hearts and minds of our clients and their guests long after the celebrations have ended. We excel at crafting relaxed yet refined events, paying meticulous attention to every detail while maintaining our focus on delivering exceptional, joyous gatherings that linger in the hearts and minds of our clients and their guests long after the celebrations.</p>
                </div>

                <div className='w-full '>
                    <Slider {...settings}>
                        {
                            NatashaWeddingg.map((data, index) => (
                                <div className='w-full lg:p-2 xl:p-3'>
                                    <div className='w-full h-[400px] xl:h-[500px] bg-center bg-cover' style={{ backgroundImage: `url(${data.img})` }}></div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>


                <div className='w-full flex flex-col lg:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full lg:w-[55%] flex flex-col gap-4 xl:gap-6'>
                        <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2>
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-7 lg:leading-[30px] xl:leading-8'>“I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous.”</h1>
                        <div className='flex flex-col gap-2 xl:gap-3 text-[14px] font-subHeading leading-[22px] '>
                            <p>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most.</p>
                            <p>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most.</p>
                        </div>
                    </div>

                    <div className='w-full lg:w-[40%]'>
                        <div className='w-full  h-[500px] xl:h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/wedding.jpg")` }}></div>
                    </div>
                </div>


                <div className='w-full flex justify-between py-5 gap-10 items-center'>
                    <div className='w-[40%] hidden lg:block'>
                        <div className='w-full lg:h-[500px] xl:h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/wedding.jpg")` }}></div>
                    </div>

                    <div className='w-full lg:w-[55%] flex flex-col gap-4 xl:gap-6'>
                        <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2>
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-7 lg:leading-[30px] xl:leading-8'>“I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous.”</h1>
                        <div className='flex flex-col gap-2 xl:gap-3 text-[14px] font-subHeading leading-[22px] '>
                            <p>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most.</p>
                            <p>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most.</p>
                        </div>
                    </div>
                </div>


                {/*--------------------------------- MOOD BOARD -------------------------------------------------------*/}

                <div className='w-full flex flex-col items-center'>
                    <div className='w-full text-center pt-8 md:pt-10 pb-8 flex flex-col items-center gap-2'>
                        <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Mood Board</h1>
                        <p className='text-[14px] md:text-lg font-subHeading'>Turning your pinterest dream into reality</p>
                    </div>

                    <div className='w-full grid grid-cols-2 lg:grid-cols-4 place-items-center gap-[6px] md:gap-5 pb-10'>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 1/img1.jpg")` }}></div>
                        <div className='w-full aspect-square  bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 3/img1.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 1/img1.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 3/img1.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 1/img1.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 3/img1.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 1/img1.jpg")` }}></div>
                        <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 3/img1.jpg")` }}></div>
                    </div>
                </div>

            </div>


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

export default WeddingSeparate