import React from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../sections/OurServices'
import ServicesContent from '../sections/ServicesContent'
import OurCollaborations from '../sections/OurCollaborations'
import FeaturedIn from '../sections/FeaturedIn'
import TransformSpaces from '../sections/TransformSpaces'
import Testimonials from '../sections/Testimonials'

const Home = () => {
    return (
        <div className='w-full h-full flex flex-col '>
            <video
                className='w-full h-screen xl:h-full object-cover '
                autoPlay
                loop
                muted
                playsInline>
                <source src="/Homepage/Rohan Prerna Short film 7.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0  xl:aspect-video flex flex-col items-center justify-end pb-16 xl:pb-24 gap-3 lg:gap-[22px] px-5 lg:px-20 text-center">
                <h1 className=" text-white font-heading text-[32px] lg:text-7xl font-light w-full">
                    Do It Up. Do It Today!
                </h1>
                <p className='text-white font-subHeading text-[14px] lg:text-2xl font-light cursor-pointer'>"Transforming your special moments into lasting memories"</p>
            </div>


            <div className='w-full  px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center mt-10 '>
                
                    <p className='text-[14px] md:text-lg font-subHeading w-full lg:w-[900px] text-center '> "Discover Do It Up, a dynamic team of Mumbai-based event designers specializing in luxury decor for weddings, brand events, and intimate celebrations. Turn your vision into unforgettable Instagram-worthy moments."</p>
               
            </div>


            {/* Our Services */}
            <OurServices />


            {/* content */}
            <ServicesContent />


            {/* Our Collaborations */}
            <OurCollaborations />


            {/* Feartured in */}
            <FeaturedIn />

            {/* Transform Spaces - brefore-after */}
            <TransformSpaces />


            {/* Client Testimonials */}
            <Testimonials />


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

export default Home