import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import { featuredWeddings } from '../../utils/constants'

const WeddingMain = () => {
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
                    swipe:true
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
                    Weddings by Do It Up
                </h1>
                <p className='text-white font-subHeading text-[14px] lg:text-2xl font-light cursor-pointer'>Celebrating your small & big moments </p>
            </div>


            {/* Featured Events */}
            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='w-full text-center pt-10 pb-8 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Weddings</h1>
                    <p className='text-[14px] md:text-lg font-subHeading leading-[22px] md:leading-[26px] text-center w-full lg:w-[859px]'>Bring your wedding dreams to life with Do It Up. We specialise in creating personalised, luxury wedding decor, blending modern aesthetics with traditional elegance.</p>
                </div>

                <div className='w-full text-center pb-8 flex flex-col items-center '>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading w-full lg:w-[859px] pb-8'>“Crafting spaces that are a true reflection of love and turning dreams into cherished memories is what drives me.” – Taral Jadhav</h1>
                    <p className='text-[14px] md:text-lg font-subHeading leading-[22px] md:leading-[26px] text-center w-full lg:w-[900px]'>As we grew, we knew weddings would be the next step for us. Do It Up launched wedding decor services. For years, we’ve mastered the art of pre-wedding festivities and intimate events, and now we’re taking the leap to become one of the most sought-after wedding designers in the country.</p>
                    <p className='text-[14px] md:text-lg font-subHeading leading-[22px] md:leading-[26px] text-center w-full lg:w-[900px] pt-2 '>From our very first wedding at a hilltop in Karjat to the latest one we’re in Italy, every wedding we curate fills us with immense pride and a sense of accomplishment. Our passion lies in crafting settings that not only reflect the couple’s vision but also tell their unique story. Whether it's a grand celebration or an intimate affair, our goal is to create unique settings that resonate with the couple's dreams and leave a lasting impression.</p>
                </div>

                <div className='w-full '>
                    <Slider {...settings} className="">
                        {
                            featuredWeddings.map((data, index) => (
                                <div key={index} className='w-full  flex flex-col items-center p-1 lg:p-2 xl:p-3'>
                                    <div className='w-full aspect-square bg-center bg-cover' >
                                        <img src={data.img} className='w-full h-full object-cover object-center'></img>
                                    </div>
                                    <h1 className='text-[22px] font-heading w-full text-center mt-3'>{data.eventName}</h1>
                                    <Link to={data.link} className='w-full '><button className='mt-3 text-base font-medium font-subHeading w-full border border-black py-2 hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-xl'>VIEW EVENT</button></Link>
                                </div>
                            ))
                        }
                    </Slider>
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

export default WeddingMain