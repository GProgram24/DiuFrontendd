import React from 'react'
import OurGallery from '../../sections/OurGallery'
import { Link } from 'react-router-dom'

const DustyBlueReception = () => {
    return (
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col'>
             <div className='w-full aspect-video lg:h-[70vh] bg-center bg-cover' style={{ backgroundImage: `url("/AboutUs/banner1.jpg")` }}>
             </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center'>
                <div className='w-full text-center pt-10 pb-6 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Shreya and Slade’s Reception</h1>
                    {/* <p className='text-[14px] md:text-lg font-subHeading '>Turning your pinterest dream into reality</p> */}
                </div>


                <div className='w-full flex flex-col-reverse xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>Shreya Sood and Slade Gomes’s Reception was a project close to our hearts, and we’re thrilled to share the story of how we brought their vision to life at Do It Up. As a team of Mumbai-based event planners, we knew this evening had to be nothing short of magical, and we’re proud to say it was.</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px]'>
                            <p>Surrounded by their closest loved ones, Shreya and Slade tied the knot in a traditional Christian ceremony. Guests flew in from around the world to join the celebration at the charming Sun and Shade Farm Resort, an exclusive wedding venue that set the perfect backdrop for their big day. Following the ceremony, we designed and executed an outdoor Reception that reflected the couple’s style and the lush beauty of the setting.</p>
                            <p>We envisioned the sundowner soiree in a dreamy palette of dusty blue, with custom event styling that included elegant floral arrangements at every turn—from the entrance arch to the photo corners, tabletops, and even the breathtaking multi-tier cake. The soft summer palette transitioned beautifully from day to night, with warm lights like rice lanterns and fairy lights bathing the space in a soft glow. The blue floral-patterned dance floor was a highlight, covered by a canopy of fairy lights that allowed guests to ‘dance under the stars’—a truly Instagram-worthy decor moment.</p>
                        </div>
                    </div>

                    <div className='w-full xl:w-[35%]'>
                        {/* <img src='/wedding.jpg' className='w-[100%] h-[635px]'></img> */}
                        <div className='w-full h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5642.jpg")` }}></div>
                    </div>
                </div>


                <div className='w-full flex flex-col xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[35%]'>
                        {/* <img src='/Homepage/banner1.jpg' className='w-[100%] h-[635px]'></img> */}
                        <div className='w-full h-[635px] bg-center bg-cover'>
                            <video
                                className='w-full h-full object-cover'
                                autoPlay
                                loop
                                muted
                                playsInline>
                                <source src="/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/9D1CC837-3DD2-4E1B-B6EB-A119DDD3554B.mov" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>Despite the celebration being postponed from May to June, we seamlessly adapted to the monsoon season, ensuring the outdoor setting remained just as charming. Clear protective sheets not only shielded guests from the rain but also reflected the twinkling lights, enhancing the magic of the evening.</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px] '>
                            <p>Seeing Shreya and Slade shine with happiness as they cut the cake and danced the night away was the ultimate reward for us. At Do It Up, we’re passionate about creating luxury event decor that’s as unique and special as the couples we work with. This reception particularly demonstrated how we bring our creative event concepts and designs to life and ensure every celebration is a standout experience.</p>
                            {/* <p>I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours, and the team was extremely courteous. My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.My sister loved the cute little surprise, and that’s what truly mattered the most. I love how they set everything up within hours.</p> */}
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className='w-full min-h-[80vh] flex flex-col items-center pb-14'>
                    <div className='w-full text-center pt-10 pb-8 flex flex-col items-center gap-2'>
                        <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Gallery</h1>
                        <p className='text-[14px] md:text-lg font-subHeading'>Turning your pinterest dream into reality</p>
                    </div>

                    <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-[6px] md:gap-5 place-items-center '>

                        {/*--------------------------------  Col 1 ---------------------------------------- */}

                        <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px]   bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5325_jpg.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5435.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5532_jpg.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5542.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            
                        </div>



                        {/*--------------------------------  Col 2  ---------------------------------------- */}

                        <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5463.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5566.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5374.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5318_jpg.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            
                        </div>



                        {/*--------------------------------  Col 3  ---------------------------------------- */}

                        <div className='w-full lg:flex flex-col gap-5 hidden '>
                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5591.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5508_jpg.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5480_jpg.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/Photo 2023-06-08 10.49.56 AM.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
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

export default DustyBlueReception