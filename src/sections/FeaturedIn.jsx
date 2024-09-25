import React from 'react'

const FeaturedIn = () => {

    // const logos = ['/Homepage/featuredLogos/Vogue.png', '/Homepage/featuredLogos/AD.png', '/Homepage/featuredLogos/Traveler.png', '/Homepage/featuredLogos/Forbes.png', '/Homepage/featuredLogos/Cosmopolitan.png', '/Homepage/featuredLogos/DesignPataki.png', '/Homepage/featuredLogos/Grazia.png', '/Homepage/featuredLogos/TOI.png', '/Homepage/featuredLogos/Asianpaints.png'];

    return (
        <div className='w-full min-h-[20vh]  flex flex-col items-center '>
            <div className='w-full text-center pt-10 pb-10 flex flex-col items-center gap-2'>
                <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>We got Featured</h1>
                <p className='text-[14px] md:text-lg font-subHeading'>In the country's most credible publications</p>
            </div>

            <div className='w-[100%]'>
                <div className='w-full flex items-center justify-around'>
                    <a href='https://www.vogue.in/promotion/this-restaurant-in-mumbai-offers-a-bespoke-outdoor-dining-experience-like-no-other'>
                        <img src='/Homepage/featuredLogos/Vogue.png' className='w-28 h-14 md:w-48 md:h-16 xl:w-48 xl:h-20'></img>
                    </a>

                    <a href='https://www.architecturaldigest.in/story/a-century-old-colonial-mansion-turned-into-a-boutique-stay-in-matheran/'>
                        <img src='/Homepage/featuredLogos/AD.png' className='w-30 h-14 xl:w-42 xl:h-16 hidden md:block'></img>
                    </a>

                    <a href='https://www.cntraveller.in/story/indian-startups-mumbai-bengaluru-throw-a-killer-house-party/'>
                        <img src='/Homepage/featuredLogos/Traveler.png' className='w-24 h-14 md:w-30 md:h-16 xl:w-42 xl:h-20'></img>
                    </a>

                    <a href=''>
                        <img src='/Homepage/featuredLogos/Forbes.png' className='w-24 h-14 md:w-30 md:h-16 xl:w-42 xl:h-20'></img>
                    </a>

                    <a href='https://www.cosmopolitan.in/life/features/story/dine-in-luxury-under-the-stars-at-gallops-al-frescos-newly-revamped-cabanas-1008375-2024-05-17'>
                        <img src='/Homepage/featuredLogos/Cosmopolitan.png' className='w-30 h-10 xl:w-60 xl:h-10 hidden lg:block'></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FeaturedIn