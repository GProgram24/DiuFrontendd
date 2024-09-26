import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { featuredBrandInstallations } from '../../utils/constants'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const BrandInstallations = () => {
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
                    swipe:true
                }
            }
        ]
    };
  return (
    <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col'>
            <div className='w-full aspect-video lg:h-[90vh] bg-bottom bg-cover' style={{ backgroundImage: `url("/Banners/Brand Installations1.jpg")` }}>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center '>
                <div className='w-full text-center pt-8 md:pt-10 pb-6 flex flex-col items-center gap-2 '>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Brand Events & Installations</h1>
                    <p className='text-[14px] md:text-lg font-subHeading w-full lg:w-[859px]'> "From luxury brand launches to Instagram-worthy installations, Do It Up offers custom decor solutions for F&B, skincare, and lifestyle brands in Mumbai."
                    </p>
                </div>

                <div className='w-full  flex flex-col-reverse  items-center lg:flex-row justify-between gap-5 lg:gap-[40px] xl:gap-[71px]  md:py-8 '>
                    <div className='lg:w-[700px] lg:h-[300px] xl:w-[665px] flex flex-col items-start justify-center gap-3 '>
                        {/* <h1 className='text-[22px] xl:text-[32px] font-bold font-heading '>Lorem Ipsum</h1> */}
                        <p className='text-[14px] xl:text-base font-subHeading leading-[22px] md:leading-[26px]'>As our expertise in intimate events flourished, we discovered an exciting new segment in the industry—brand events and installations. With an increasing number of brands approaching us as their go-to decor partner, we’ve expanded our services to cater to three main industries: Hospitality, beauty and lifestyle brands.</p>
                        <p className='text-[14px] xl:text-base font-subHeading leading-[22px] md:leading-[26px]'>In today’s digital age, the demand for Instagram-worthy decor both online and offline has skyrocketed. Brands now recognize the value of creating visually stunning moments that capture attention and drive engagement. From Pinterest-inspired Christmas installations at the city’s most renowned restaurants to the launch of a new skincare brand, we’ve mastered the art of styling custom events that resonate with audiences.</p>
                        <p className='text-[14px] xl:text-base font-subHeading leading-[22px] md:leading-[26px]'>Whether it’s designing a breathtaking installation for a high-profile venue or curating the perfect backdrop for a brand launch, Do It Up has become synonymous with designing creative event concepts. Our work in this space has solidified our reputation as a leader in decor services for brand events in Mumbai.</p>
                        
                    </div>
                    <div className='w-full h-[390px]  lg:h-[400px] lg:w-[500px] xl:w-[792px] xl:h-[647.37px] bg-center bg-cover' style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Featured/RAS luxury/Copy of IMG_1194.jpg")` }}>
                    </div>
                </div>


                {/* Featured Events */}
                <div className='w-full flex flex-col items-center '>
                    <div className='w-full text-center pt-10 pb-10 flex flex-col items-center gap-2'>
                        <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Featured Events</h1>
                        {/* <p className='text-[14px] md:text-lg font-subHeading'>Turning your pinterest dream into reality</p> */}
                    </div>

                    <div className='w-full pb-10 md:pb-0'>
                        <Slider {...settings}>

                        {
                            featuredBrandInstallations.map((data, index) => (

                                <div key={index} className='w-full aspect-square flex flex-col items-center p-1 lg:p-2 xl:p-3'>
                                    <div className='w-full aspect-square bg-center bg-cover' >
                                        <img src={data.img} className='w-full h-full'></img>
                                    </div>
                                    <h1 className='text-[22px] md:text-[18px] lg:text-[22px] font-heading w-full text-center mt-3'>{data.eventName}</h1>
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
                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px]   bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/Bridgerton Jio Tea party/Copy of IMG_9346.JPG")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/Biore/Copy of IMG_0169.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/Gallops Cabanas/Copy of IMG_2514.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/Gunam beauty/Copy of IMG_7366_jpg.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            
                        </div>



                        {/*--------------------------------  Col 2  ---------------------------------------- */}

                        <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/InnisFree/Copy of D1BAA1C5-7505-45F6-8782-737A2A305F2D.png")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/Jolie’s Greek party/Copy of IMG_2075.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/Jolie’s Xmas/Copy of IMG_5755.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/Koko - Foo/Copy of Photo 2021-12-27 06.23.00 PM.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            
                        </div>



                        {/*--------------------------------  Col 3  ---------------------------------------- */}

                        <div className='w-full lg:flex flex-col gap-5 hidden '>
                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/See Love/Copy of IMG_9353.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/Sulwhasoo/Copy of IMG_9512.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/Yauatcha Chinese New year/Copy of IMG_8985.jpg")` }}>
                                <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                                    <h1 className="text-base leading-tight">Name of the Event</h1>
                                    <p className="text-sm font-light">Location</p>
                                </div>
                            </div>

                            <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Services (Rename Later)/Brand Installations/Others/InnisFree/Copy of 3B61DB4F-37F4-4C03-B387-694366AB327C.png")` }}>
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

export default BrandInstallations