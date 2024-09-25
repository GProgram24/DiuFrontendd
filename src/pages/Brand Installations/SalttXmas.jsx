import React from 'react'
import OurGallery from '../../sections/OurGallery'
import { Link } from 'react-router-dom'

const SalttXmas = () => {
    return (
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col'>
            <div className='w-full aspect-video lg:h-[70vh] xl:h-[80vh] bg-center bg-cover' style={{ backgroundImage: `url("/Banners/Saltt.jpg")` }}>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center'>
                <div className='w-full text-center pt-10 pb-6 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Christmas at Saltt</h1>
                    {/* <p className='text-[14px] md:text-lg font-subHeading '>Turning your pinterest dream into reality</p> */}
                </div>


                <div className='w-full flex flex-col-reverse xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>For Oleander Farms' Christmas installation in 2022, we at Do It Up had the pleasure of creating a stunning display that blended traditional charm with modern flair. Our goal was to transform the venue into a custom magical winter wonderland. </h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px]'>
                            <p>The centerpiece of the outdoor setup was a stunning 20-foot Christmas tree, adorned with twinkling lights and classic ornaments. This grand display captured the holiday spirit beautifully and provided the perfect backdrop for festive photos. A vibrant neon sign added a contemporary twist, making the scene both festive and instagram friendly.</p>
                            <p>We also designed a captivating 100-foot pathway leading up to the Christmas tree, lined with over 2000 red and gold Christmas balls. This enchanting pathway created a shimmering canopy that guided guests to the main attraction, adding an extra layer of magic to the experience.</p>
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
                                <source src="/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/20221202-144655-392.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </div>
                </div>


                <div className='w-full flex flex-col xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[35%]'>
                        <div className='w-full h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1904.jpg")` }}></div>

                    </div>

                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>Inside, we continued the festive theme with a beautifully decorated mirror, framed with Christmas garlands, lights, and tiny ornaments. This custom setup created a cozy photo spot, enhancing the overall holiday ambiance.</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px] '>
                            <p>Overall, the Christmas installation at Oleander Farms was a showcase of our ability to blend traditional and modern elements, creating a memorable holiday experience. Every detail, from the grand tree to the decorated mirror, contributed to a stunning festive atmosphere, highlighting our commitment to delivering exceptional event decor for lifestyle and hospitality brands.</p>
                            {/* <p>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.</p> */}
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
                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px]   bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1792.jpg")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1874.jpg")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1782.jpg")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1757.jpg")` }}>
                            </div>
                        </div>



                        {/*--------------------------------  Col 2  ---------------------------------------- */}

                        <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1905.jpg")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1959.jpg")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1829.jpg")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1911.jpg")` }}>
                            </div>
                        </div>



                        {/*--------------------------------  Col 3  ---------------------------------------- */}

                        <div className='w-full lg:flex flex-col gap-5 hidden '>
                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1782.jpg")` }}>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1804.jpg")` }}>
                            </div>

                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1874.jpg")` }}>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Saltt Xmas/Copy of IMG_1958.jpg")` }}>
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

export default SalttXmas