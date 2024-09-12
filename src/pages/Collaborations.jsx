import React from 'react'
import OurGallery from '../sections/OurGallery'
import { Link } from 'react-router-dom'

const Collaborations = () => {
    return (
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col'>
            <div className='w-full aspect-video lg:h-[70vh] bg-center  bg-cover' style={{ backgroundImage: `url("/Banners/Collaborations1.jpg")` }}>
            </div>


            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center'>
                <div className='w-full text-center pt-10 pb-8 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Collaborations</h1>
                    <p className='text-[14px] md:text-lg font-subHeading'>Turning your pinterest dream into reality</p>
                </div>

                <div className='w-full  flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-0 lg:py-10 items-center'>
                    <div className='w-full lg:w-[40%] flex flex-col gap-5'>
                        {/* <h3 className='text-base font-subHeading font-medium'>OUR TEAM</h3>
                        <h1 className='text-[24px] font-heading leading-8'>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most.</h1> */}
                        <div className='text-[14px] font-subHeading font-light leading-[22px] flex flex-col gap-6'>
                            <p>At Do It Up, we've had the privilege of collaborating with some of the most influential and credible names in the industry. From Bollywood celebrities to top influencers, we've had the honor of creating stunning decor for all. It's the trust and faith that our clients place in us that fuels our passion every single day. </p>
                            <p>From our first celebrity collaboration with Malaika Arora Khan to our latest project with Tara Sutaria, each collaboration brings an overwhelming sense of excitement and gratitude. These partnerships have solidified our reputation as one of the leading Mumbai-based event planners, particularly in the realm of luxury and intimate event decor.</p>
                        </div>
                    </div>

                    {/* <div className='w-full h-[526px] bg-center bg-cover' style={{ backgroundImage: `url("/AboutUs/banner1.jpg")` }}></div> */}
                    <div className='w-full lg:w-[55%]'>
                        <img src='/Collaborations/Akshay Kumar/Copy of IMG_6582.jpg' className='w-[100%] h-[451px] lg:h-[526px] '></img>
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

export default Collaborations