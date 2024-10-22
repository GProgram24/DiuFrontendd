import React from 'react'
import { Link } from 'react-router-dom'

const ServicesContent = () => {
    return (
        <div className='w-full px-5 lg:px-[100px] xl:px-[150px] font-subHeading  '>
            <div className='w-full flex flex-col items-center gap-7 md:gap-10  pb-5 md:pb-8 '>
                <h3 className='text-[14px] md:text-[28px] '>DO IT UP! DO IT TODAY!</h3>
                <h1 className='text-[32px] md:text-5xl font-heading text-center xl:w-[800px] leading-tight md:leading-tight'>“Designing unforgettable experiences is our passion.”</h1>
                {/* <h1 className='text-[32px] md:text-6xl font-heading text-center xl:w-[885px] leading-tight md:leading-tight hidden lg:block'>“Connecting people & creating unforgettable experiences is our passion.”</h1> */}
                <p className='text-[14px] md:text-[24px] text-center xl:w-[970px]'>At Do It Up, we specialise in luxury event design & decor. From intimate celebrations, brand installations to big fat weddings, we curate bespoke settings for events of all kinds.<br></br>
                We pride ourselves on delivering exceptional, personalised services to create spaces that reflect our clients' unique visions. Do It Up aims to transform your event into an unforgettable experience! 
                </p>
                <Link to='/collaborations'><button className='text-base border font-subHeading border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-xl px-8 py-2'>VIEW GALLERY</button></Link>

            </div>
        </div>
    )
}

export default ServicesContent