import React from 'react'
import OurGallery from '../sections/OurGallery'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { featuredIntimateEvents } from '../../utils/constants'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const IntimateEvents = () => {
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
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col '>
            <div className='w-full aspect-video lg:h-[80vh] xl:h-[90vh] bg-center bg-cover' style={{ backgroundImage: `url("/Banners/Intimate Celebrations1.png")` }}>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='w-full text-center pt-8 md:pt-10 pb-6 flex flex-col items-center gap-2 '>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Intimate Events</h1>
                    <p className='text-[14px] md:text-lg font-subHeading w-full lg:w-[859px]'> "Do It Up creates magical decor for intimate events. Whether it's a birthday, anniversary, or bridal shower, we transform private celebrations into unforgettable experiences."</p>
                </div>

                <div className='w-full  flex flex-col-reverse  items-center lg:flex-row justify-between gap-5 lg:gap-[40px] xl:gap-[71px] md:my-8'>
                    <div className='lg:w-[700px] lg:h-[300px] xl:w-[665px] flex flex-col items-start justify-center gap-3 '>
                        {/* <h1 className='text-[22px] xl:text-[32px] font-bold font-heading '>Lorem Ipsum</h1> */}
                        <p className='text-[14px] xl:text-base font-subHeading leading-[22px] md:leading-[26px]'>
                        At Do It Up, we specialize in personalized intimate event decor, earning recognition as leading event designers in India. We excel in curating exceptional experiences in smaller settings, having pioneered customized decor solutions for home-based events during times of limited large gatherings. Our services enable clients to celebrate significant occasions in intimate spaces. From birthdays and anniversaries to bridal showers and milestone celebrations, we transform everyday spaces into elegant, memorable venues. Be it for a romantic evening or a close-knit family gathering, Do It Up is dedicated to elevating every intimate event into a truly remarkable experience.</p>
                    </div>
                    <div className='w-full h-[390px]  lg:h-[400px] lg:w-[792px] xl:h-[647.37px] bg-center bg-cover' style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Featured/DustyBlueReception/IMG_5327_jpg.jpg")` }}>
                    </div>
                </div>


                {/* Featured Events */}
                <div className='w-full flex flex-col items-center '>
                    <div className='w-full text-center pt-10 pb-10 flex flex-col items-center gap-2'>
                        <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Featured Events</h1>
                        <p className='text-[14px] md:text-lg font-subHeading'>Take a peek into some of our signature events</p>
                    </div>

                    <div className='w-full pb-10 md:pb-0'>
                        <Slider {...settings}>

                            {
                                featuredIntimateEvents.map((data, index) => (

                                    <div key={index} className='w-full aspect-square flex flex-col items-center p-1 lg:p-2 xl:p-3'>
                                        <div className='w-full aspect-square ' >
                                            <img src={data.img} className='w-full h-full bg-cover bg-center'></img>
                                        </div>
                                        <h1 className='text-[22px] md:text-[18px] xl:text-[22px] font-heading w-full text-center mt-3'>{data.eventName}</h1>
                                        <Link to={data.link}><button className='text-base md:text-[14px] lg:text-base font-medium font-subHeading w-full border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out py-2 rounded-xl mt-3'>VIEW EVENT</button></Link>
                                    </div>
                                ))
                            }
                        </Slider>
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
                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px]   bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Baby Shower/Copy of IMG_5335.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
                                </div>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Birthdays/Copy of 896D7258-C839-448F-B407-AA60F18C9324.png")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
                                </div>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Bridal Shower/Copy of IMG_0129_jpg.JPG")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
                                </div>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Pre Wedding/Ashuli & Anurag/Copy of IMG_6364.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
                                </div>
                            </div>

                            
                        </div>



                        {/*--------------------------------  Col 2  ---------------------------------------- */}

                        <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Pre Wedding/Wedding Lunch/Copy of IMG_5089.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
                                </div>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Proposals/Copy of IMG_2766.JPG")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
                                </div>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Baby Shower/Copy of IMG_7529.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
                                </div>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Birthdays/Copy of B397289B-71B9-4A56-8261-1E24D2D2625B.png")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
                                </div>
                            </div>

                            
                        </div>



                        {/*--------------------------------  Col 3  ---------------------------------------- */}

                        <div className='w-full lg:flex flex-col gap-5 hidden '>
                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Bridal Shower/Copy of IMG_1948.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
                                </div>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Pre Wedding/Ashuli & Anurag/Copy of IMG_6366.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
                                </div>
                            </div>

                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Pre Wedding/Wedding Lunch/Copy of IMG_5092.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
                                </div>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Intimate Celebrations/Others/Proposals/Copy of 0c1bbbc2-6b09-44c0-ba0f-cf49f79b916c.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    
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

export default IntimateEvents