import React from 'react'
import OurGallery from '../../sections/OurGallery'
import { Link } from 'react-router-dom'

const SahibaBabyShower = () => {
    return (
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col'>
            <div className='w-full aspect-video lg:h-[70vh] xl:h-[80vh] bg-center bg-cover' style={{ backgroundImage: `url("/Banners/SahibaBabyShower.jpg")` }}>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center'>
                <div className='w-full text-center pt-10 pb-6 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Sahiba’s Baby Shower</h1>
                    {/* <p className='text-[14px] md:text-lg font-subHeading '>Turning your pinterest dream into reality</p> */}
                </div>


                <div className='w-full flex flex-col-reverse xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>For Sahiba’s Baby Shower, hosted at Megumi restaurant in Bandra, Mumbai, we collaborated with Shaadi Squad to design a celebration that was both intimate and elegant. Drawing inspiration from the client’s European travels, we crafted a unique decor concept that perfectly blended sophistication with a fresh, sunny atmosphere.</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px]'>
                            <p>As guests arrived, they were welcomed by enchanting entrance signage that set the tone for the event, featuring whimsical lemon and floral motifs. Framed by lush greenery and delicate white flowers, the entrance offered a warm welcome and a glimpse into the dainty luxury decor that awaited them inside, inspired by European charm.</p>
                            <p>Inside Megumi restaurant, the decor radiated a cheerful, sunlit vibe. The centerpiece of the venue was a stunning backdrop of larger-than-life white blooms, bright yellow lemons, and soft green foliage—a perfect example of our expertise in styling events for small gatherings.The table settings were equally captivating, each featuring unique centerpieces made of baby socks nestled in floral arrangements, showcasing our attention to detail and creativity.</p>
                        </div>
                    </div>

                    <div className='w-full xl:w-[35%]'>
                        <div className='w-full h-[635px] bg-center bg-cover'>
                            <video
                                className='w-full h-full object-cover'
                                autoPlay
                                loop
                                muted
                                playsInline>
                                <source src="/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/IMG_7312.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>


                <div className='w-full flex flex-col xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[35%]'>
                        <div className='w-full h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of Copy of IMG_4304.jpg")` }}></div>

                    </div>

                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>Adding an interactive element to the event, we introduced a diaper pong game—a playful twist on traditional beer pong, where diapers served as targets. This activity not only engaged the guests but also highlighted our ability to create creative event concepts that bring a touch of fun to any celebration.</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px] '>
                            <p>The bar area was meticulously styled to complement the overall theme. The counter was adorned with large centerpieces, while the shelves behind it featured white floral arrangements and lemon slices, tying everything together in a cohesive and refreshing manner. This level of detail exemplifies our commitment to bespoke event design solutions that ensure every aspect of an event is perfectly coordinated.</p>
                            <p>Overall, the decor for this baby shower at Megumi restaurant was a vibrant and joyful reflection of the client’s European travels. The combination of white florals, lemons, and soft greens created an elegant yet playful setting, making it a memorable intimate celebration that exuded warmth, happiness, and sophisticated charm. </p>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className='w-full min-h-[80vh] flex flex-col items-center pb-14'>
                    <div className='w-full text-center pt-10 pb-8 flex flex-col items-center gap-2'>
                        <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Gallery</h1>
                        {/* <p className='text-[14px] md:text-lg font-subHeading'>Turning your pinterest dream into reality</p> */}
                    </div>

                    <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-[6px] md:gap-5 place-items-center '>

                        {/*--------------------------------  Col 1 ---------------------------------------- */}

                        <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px]   bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of Copy of IMG_4291.jpg")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of IMG_4550.jpg")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of IMG_4361.jpg")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of Copy of IMG_4304.jpg")` }}>
                            </div>
                        </div>



                        {/*--------------------------------  Col 2  ---------------------------------------- */}

                        <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of Copy of IMG_4232.jpg")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of Copy of IMG_4301.jpg")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of Copy of IMG_4291.jpg")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of Copy of IMG_4167.jpg")` }}>
                            </div>
                        </div>



                        {/*--------------------------------  Col 3  ---------------------------------------- */}

                        <div className='w-full lg:flex flex-col gap-5 hidden '>
                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of Copy of IMG_4304.jpg")` }}>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of Copy of IMG_4550.jpg")` }}>
                            </div>

                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of Copy of IMG_4291.jpg")` }}>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Sahiba Baby shower/Copy of IMG_4301.jpg")` }}>
                            </div>
                        </div>
                    </div>
                </div>
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

export default SahibaBabyShower