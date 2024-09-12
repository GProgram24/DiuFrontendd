import React from 'react'
import { Link } from 'react-router-dom'
import { NatashaWeddingg } from '../../../utils/constants';
import { NatashaWeddingMoodBoard } from '../../../utils/constants';
import Slider from 'react-slick';
import MoodBoard from '../../sections/MoodBoard';

const NatashaWedding = () => {
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
        <div className='w-full h-full flex flex-col'>
            <video
                className='w-full h-screen xl:h-full object-cover relative'
                autoPlay
                loop
                muted
                playsInline>
                <source src="/Weddings/Natasha wedding/Rana Natasha Short film.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 xl:aspect-video flex flex-col items-center justify-end pb-16 xl:pb-24 gap-3 lg:gap-[22px] px-5 lg:px-20 text-center">
                <h1 className=" text-white font-heading text-[32px] lg:text-7xl font-light w-full">
                    Natasha & Rana
                </h1>
                <p className='text-white font-subHeading text-[14px] lg:text-2xl font-light cursor-pointer'>Good times all around</p>
            </div>


            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='w-full text-center pt-8 md:pt-10 pb-8 flex flex-col items-center gap-2'>
                    {/* <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Featured Events</h1> */}
                    <p className='text-[14px] md:text-lg font-subHeading leading-[22px] md:leading-[26px] text-center w-full xl:w-[859px]'>For Natasha and Rana's intimate wedding at her family’s cherished backyard in Karjat, we crafted a magical garden setting that blended seamlessly with the venue's natural beauty. Their vision was to celebrate their special day surrounded by close friends and family, in a space that felt both personal and enchanting.</p>
                </div>

                <div className='w-full pb-10 md:pb-0'>
                    <Slider {...settings}>
                        {
                            NatashaWeddingg.map((data, index) => (
                                <div className='w-full p-1 lg:p-2 xl:p-3'>
                                    <div className='w-full h-[400px] xl:h-[500px] bg-center bg-cover'>
                                        <img src={data.img} alt="wedding" className='w-full h-full object-cover object-center'></img>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>


                <div className='w-full flex flex-col lg:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full lg:w-[55%] flex flex-col gap-4 xl:gap-6'>
                        <h2 className='text-base font-subHeading font-medium'>Ceremony Setting</h2>
                        {/* <h1 className='text-[18px] lg:text-2xl font-heading leading-7 lg:leading-[30px] xl:leading-8'>“I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous.”</h1> */}
                        <div className='flex flex-col gap-2 xl:gap-3 text-[14px] font-subHeading leading-[22px] '>
                            <p>The heart of their ceremony was the transformation of the existing cabana into a stunning focal point. Adorned with soft pastel florals in shades of blush pink, lavender, and creamy white, the cabana was elevated to a dreamy, romantic space. A delicate chandelier hung from the cabana’s ceiling, adding elegance and sparkle, casting a warm, inviting glow over the proceedings. We carefully selected wooden cane furniture, which perfectly complemented the luxury wedding decor  and added to the garden ambiance, while providing stylish seating for the intimate gathering.</p>
                        </div>

                        <h2 className='text-base font-subHeading font-medium'>Aisle and Entry</h2>
                        <div className='flex flex-col gap-2 xl:gap-3 text-[14px] font-subHeading leading-[22px] '>
                            <p>The aisle, leading up to the cabana, was lined with lush floral arrangements in soft pastels, creating a cascading effect down the sides. These floral displays highlighted the path and enhanced the overall garden feel, making it seem as though the couple was walking through a whimsical floral pathway. At the entrance, a grand floral arch welcomed guests and framed the cabana perfectly. This arch, adorned with a harmonious blend of pastel flowers and greenery, provided a picturesque backdrop for the vows and a stunning setting for photos.
                            </p>
                        </div>
                    </div>

                    <div className='w-full lg:w-[40%]'>
                        <div className='w-full  h-[500px] xl:h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/Weddings/Natasha wedding/Ethereal images/RanaNatasha-5136-1K8A4826.jpg")` }}></div>
                    </div>
                </div>


                <div className='w-full flex justify-between py-5 gap-10 items-center'>
                    <div className='w-[40%] hidden lg:block'>
                        <div className='w-full lg:h-[500px] xl:h-[635px] bg-center bg-cover'>
                            <video
                                className='w-full h-full object-cover'
                                autoPlay
                                loop
                                muted
                                playsInline>
                                <source src="/Weddings/Natasha wedding/1705317299532913.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className='w-full lg:w-[55%] flex flex-col gap-4 xl:gap-6'>
                        <h2 className='text-base font-subHeading font-medium'>Reception</h2>
                        {/* <h1 className='text-[18px] lg:text-2xl font-heading leading-7 lg:leading-[30px] xl:leading-8'>“I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous.”</h1> */}
                        <div className='flex flex-col gap-2 xl:gap-3 text-[14px] font-subHeading leading-[22px] '>
                            <p>The evening reception took place under the stars, in the same picturesque backyard. Guests enjoyed a delightful feast, with soft string lights and lanterns adding a magical touch to the night. The celebration was filled with music, laughter, and lively dances, creating an atmosphere of joy and togetherness. The custom decor we provided, with its seamless transition from ceremony to reception, ensured that the evening was warm, intimate, and filled with unforgettable moments.</p>
                            {/* <p>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most.</p> */}
                        </div>
                    </div>
                </div>


                {/*--------------------------------- MOOD BOARD --------------------------------*/}

                <MoodBoard cards={NatashaWeddingMoodBoard} />

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

export default NatashaWedding