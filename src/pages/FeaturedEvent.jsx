import React from 'react'
import OurGallery from '../sections/OurGallery'
import { Link } from 'react-router-dom'

const FeaturedEvent = () => {
    return (
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col'>
             <div className='w-full aspect-video lg:h-[70vh] bg-center bg-cover' style={{ backgroundImage: `url("/AboutUs/banner1.jpg")` }}>
             </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center'>
                <div className='w-full text-center pt-10 pb-6 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Featured Event</h1>
                    <p className='text-[14px] md:text-lg font-subHeading '>Turning your pinterest dream into reality</p>
                </div>


                <div className='w-full flex flex-col-reverse xl:flex-row justify-between py-5 gap-10 items-end'>
                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2>
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>“I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous.”</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px]'>
                            <p>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.</p>
                            <p>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.</p>
                        </div>
                    </div>

                    <div className='w-full xl:w-[35%]'>
                        {/* <img src='/wedding.jpg' className='w-[100%] h-[635px]'></img> */}
                        <div className='w-full h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/wedding.jpg")` }}></div>
                    </div>
                </div>


                <div className='w-full flex flex-col xl:flex-row justify-between py-5 gap-10 items-end'>
                    <div className='w-full xl:w-[35%]'>
                        {/* <img src='/Homepage/banner1.jpg' className='w-[100%] h-[635px]'></img> */}
                        <div className='w-full h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/Homepage/banner1.jpg")` }}></div>
                    </div>

                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2>
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>“I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous.”</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px] '>
                            <p>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.</p>
                            <p>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.</p>
                        </div>
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

export default FeaturedEvent