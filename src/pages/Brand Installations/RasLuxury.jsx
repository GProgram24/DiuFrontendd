import React from 'react'
import OurGallery from '../../sections/OurGallery'
import { Link } from 'react-router-dom'

const RasLuxury = () => {
    return (
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col'>
            <div className='w-full aspect-video lg:h-[70vh] xl:h-[80vh] bg-center bg-cover' style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1295.jpg")` }}>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center'>
                <div className='w-full text-center pt-10 pb-6 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Ras Luxury Oils</h1>
                    {/* <p className='text-[14px] md:text-lg font-subHeading '>Turning your pinterest dream into reality</p> */}
                </div>


                <div className='w-full flex flex-col-reverse xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>For the launch of RAS Luxury Oils, an Indian skincare and makeup brand founded by Shubhika Jain, we had the pleasure of transforming Mahati Wellness, a new yoga studio in Mumbai, into an enchanting space that embodied the brand’s “Farm to Face” philosophy. The themed decor was meticulously designed to generate brand awareness and provide attendees with an immersive experience that reflected RAS Luxury’s commitment to natural, science-backed skincare.</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px]'>
                            <p>Guests were welcomed by a captivating entrance that immediately set the tone for the event. The pathway leading to the main studio was lined with larger-than-life sunflowers, their bright yellow petals standing out vividly against the lush greenery. These vibrant blooms, nestled in rustic cane planters, guided guests along a path reminiscent of a charming stroll through a sunflower farm—a perfect representation of the brand’s natural and fresh ethos.</p>
                            <p>As attendees entered the main area, they were greeted by a stunning backdrop featuring the RAS Luxury Oils branding. This custom event decor was designed with natural textures like woven cane and jute, highlighting the brand’s dedication to sustainability. The backdrop, adorned with sunflowers and greenery, created a lush, garden-like atmosphere that beautifully encapsulated the Farm to Face concept.</p>
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
                                <source src="/Services (Rename Later)/Brand Installations/Featured/RAS luxury/1711378923297492.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>


                <div className='w-full flex flex-col xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[35%]'>
                        <div className='w-full h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1169.jpg")` }}></div>
                    </div>

                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>To further enhance the experience, we set up picnic benches for influencers and guests to participate in an interactive workshop hosted by Shubhika Jain. These wooden benches, topped with elegant chequered runners, provided a cozy and intimate seating arrangement. The tables were decorated with small potted sunflowers and greenery, reinforcing the farm-fresh feel and creating a welcoming environment for guests to explore the brand’s natural skincare and makeup products.</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px] '>
                            <p>A carefully curated product display captured the essence of RAS Luxury Oils. The display featured the brand’s luxurious facial oils and innovative makeup solutions, artfully arranged on clear platforms. Natural accents such as fresh herbs and delicate floral arrangements were incorporated to enhance the overall aesthetic—demonstrating our ability to create Instagram-worthy decor that resonates with audiences.</p>
                            <p>The overall ambiance of the event was designed to transport guests to a serene sunflower field, with the space filled with the bright, cheerful presence of sunflowers and lush greenery. This thoughtful combination of vibrant sunflowers, greenery, and sustainable materials created an atmosphere that was both refreshing and immersive, perfectly capturing the essence of RAS Luxury Oils and its Farm to Face ideology.</p>
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
                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px]   bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1184_jpg.JPG")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1148_jpg.jpg")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1217_jpg.jpg")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1261.jpg")` }}>
                            </div>
                        </div>



                        {/*--------------------------------  Col 2  ---------------------------------------- */}

                        <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1177.JPG")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1301.jpg")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1295.jpg")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1194.jpg")` }}>
                            </div>
                        </div>



                        {/*--------------------------------  Col 3  ---------------------------------------- */}

                        <div className='w-full lg:flex flex-col gap-5 hidden '>
                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1184_jpg.JPG")` }}>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1186.jpg")` }}>
                            </div>

                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1148_jpg.jpg")` }}>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1217_jpg.jpg")` }}>
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

export default RasLuxury