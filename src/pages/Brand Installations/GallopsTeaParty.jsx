import React from 'react'
import OurGallery from '../../sections/OurGallery'
import { Link } from 'react-router-dom'

const GallopsTeaParty = () => {
    return (
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col'>
            <div className='w-full aspect-video lg:h-[70vh] xl:h-[80vh] bg-center bg-cover' style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Launch/146A5517.jpg")` }}>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center'>
                <div className='w-full text-center pt-10 pb-6 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Gallops Tea Party</h1>
                    {/* <p className='text-[14px] md:text-lg font-subHeading '>Turning your pinterest dream into reality</p> */}
                </div>


                <div className='w-full flex flex-col-reverse xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>On Thursday, April 24, we hosted a captivating event at Gallops, welcoming professionals from the wedding industry, lifestyle journalists, and brides-to-be to announce the launch of Do It Up Weddings via a Hi-Tea Party. Gallops provided the ideal setting for this elegant soiree, where we brought our unique event decor services to life.</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px]'>
                            <p>As guests arrived, they were transported to a charming countryside Hi-Tea party, complete with a real water fountain at the center. An Iced-Tea Bar was designed to refresh guests and match the theme, while a D.I.Y. Burrata Bar and a selection of scones, tarts, and other treats, provided by the Gallops team, added a touch of culinary delight.</p>
                            <p>To make the themed event memorable, we curated several interactive experiences. Zizi’s Pretty Little Cakes offered customized wedding-themed cookies, complete with mini easel stands, edible color palettes, and paintbrushes, allowing guests to create their own edible art—a fun and creative touch. </p>
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
                                <source src="/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Launch/Vedant videos/IMG_8095.MOV" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>


                <div className='w-full flex flex-col xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[35%]'>
                        {/* <img src='/Homepage/banner1.jpg' className='w-[100%] h-[635px]'></img> */}
                        <div className='w-full h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Copy of 146A5539.jpg")` }}></div>
                    </div>

                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>We also partnered with Mumbai-based calligrapher Lettering by Muskan to offer personalized coupe glasses for each guest, adding a refined and bespoke touch to the evening. Another highlight was the vintage hand fan decorating activity, organized with Just Little Things. This hands-on experience let guests paint and decorate their own fans, enhancing their enjoyment of the event.</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px] '>
                            <p>An Instant Photo Booth was set up to capture the highlights of the evening, providing guests with a keepsake from their experience. The event concluded with a stunning macaron cake by Lecho Bombay, a perfect finale to a beautifully orchestrated celebration.</p>
                            <p>This event was a testament to our expertise in creating luxury event decor and styling custom events, showcasing our ability to deliver Pinterest-worthy moments and engaging experiences that leave a lasting impression.</p>
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
                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px]   bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Copy of 146A5373.jpg")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Copy of 146A5526.png")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Copy of 146A5471.jpg")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Copy of 146A5539.jpg")` }}>
                            </div>
                        </div>



                        {/*--------------------------------  Col 2  ---------------------------------------- */}

                        <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Launch/146A5511.jpg")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Launch/146A5882.jpg")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Launch/146A5354.jpg")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Launch/146A5365.jpg")` }}>
                            </div>
                        </div>



                        {/*--------------------------------  Col 3  ---------------------------------------- */}

                        <div className='w-full lg:flex flex-col gap-5 hidden '>
                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Launch/146A5402.jpg")` }}>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Launch/146A5693.jpg")` }}>
                            </div>

                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Launch/146A5703.jpg")` }}>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/Gallops tea party/Launch/146A5388.jpg")` }}>
                            </div>
                        </div>
                    </div>
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

export default GallopsTeaParty