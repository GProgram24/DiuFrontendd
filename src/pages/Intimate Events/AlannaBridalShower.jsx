import React from 'react'
import OurGallery from '../../sections/OurGallery'
import { Link } from 'react-router-dom'

const AlannaBridalShower = () => {
    return (
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col'>
            <div className='w-full aspect-video lg:h-[70vh] xl:h-[80vh] bg-center bg-cover' style={{ backgroundImage: `url("/Banners/Alanna'sBridalShower1.png")` }}>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center'>
                <div className='w-full text-center pt-10 pb-6 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Alanna’s Bridal Shower
                    </h1>
                    {/* <p className='text-[14px] md:text-lg font-subHeading '>Turning your pinterest dream into reality</p> */}
                </div>


                <div className='w-full flex flex-col-reverse xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>Alanna’s Bridal Shower was a picturesque celebration of love and friendship, held in the elegance of her Mumbai home. The event was a perfect blend of pastels and floral prints, creating a warm and inviting atmosphere that reflected the joy of the occasion.</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px]'>
                            <p>Guests were welcomed by a stunning floral table setting, a signature of luxury event decor. The table, draped in delicate pastel pink linen, featured vintage-inspired china adorned with soft floral patterns. Fresh blooms in shades of peach, lavender, and ivory were arranged in low, sprawling centerpieces, adding a touch of elegance to the intimate gathering.</p>
                            <p>One of the event's highlights was a custom-designed floral wall, served as an enchanting backdrop for photographs. Alanna's name was elegantly scripted at the center, making it a memorable focal point. This thoughtful detail exemplified the personalized decor that makes for Instagram-worthy moments at such intimate celebrations.</p>
                        </div>
                    </div>

                    <div className='w-full xl:w-[35%]'>
                        {/* <img src='/wedding.jpg' className='w-[100%] h-[635px]'></img> */}
                        <div className='w-full h-[635px] bg-center bg-cover'>
                            <video
                                className='w-full h-full object-cover'
                                autoPlay
                                loop
                                muted
                                playsInline>
                                <source src="/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/1681878934754667.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>


                <div className='w-full flex flex-col xl:flex-row justify-between py-5 gap-10 items-center'>
                    <div className='w-full xl:w-[35%]'>
                        <div className='w-full h-[635px] bg-center bg-cover' style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 5.png")` }}></div>

                    </div>

                    <div className='w-full xl:w-[70%] flex flex-col gap-6'>
                        {/* <h2 className='text-base font-subHeading font-medium'>WHAT THE COUPLE HAVE TO SAY</h2> */}
                        <h1 className='text-[18px] lg:text-2xl font-heading leading-8'>Adjacent to the dining area, the bar was styled with equal attention to detail. A beautiful floral arrangement sat atop, echoing the event's pastel palette and floral theme. The existing sofas were arranged with chic, floral-patterned cushions, creating inviting nooks that added comfort and charm to the space.</h1>
                        <div className='flex flex-col gap-3 text-[14px] xl:text-lg font-subHeading leading-[26px] '>
                            <p>The decor for Alanna Panday’s bridal shower was a seamless blend of elegance and comfort, showcasing our expertise in custom decor for celebrity events in Mumbai. Every detail, from the floral table settings to the cozy seating arrangements, contributed to a beautifully orchestrated celebration, perfectly capturing the essence of the occasion.</p>
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
                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px]   bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 15.png")` }}>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 4.png")` }}>  
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 7.png")` }}>                               
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 9.png")` }}>     
                            </div>
                        </div>



                        {/*--------------------------------  Col 2  ---------------------------------------- */}

                        <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 3.png")` }}>                  
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 14.png")` }}>   
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 8.png")` }}>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 13.png")` }}>                                
                            </div>
                        </div>



                        {/*--------------------------------  Col 3  ---------------------------------------- */}

                        <div className='w-full lg:flex flex-col gap-5 hidden '>
                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 11.png")` }}>            
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 5.png")` }}>                               
                            </div>

                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 6.png")` }}>   
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/Alanna_s Bridal Shower/Copy of Copy of 12.png")` }}>            
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

export default AlannaBridalShower