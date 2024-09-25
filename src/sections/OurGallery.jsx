import React from 'react'

const OurGallery = () => {
    return (
        <div className='w-full min-h-[80vh] flex flex-col items-center pb-14'>
            <div className='w-full text-center pt-10 pb-8 flex flex-col items-center gap-2'>
                <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Gallery</h1>
                <p className='text-[14px] md:text-lg font-subHeading'>Turning your pinterest dream into reality</p>
            </div>

            <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-[6px] md:gap-5 place-items-center '>

                {/*--------------------------------  Col 1 ---------------------------------------- */}

                <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                    <div className="w-full h-[128px] md:h-[220px] xl:h-[300px]   bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Aakriti Rana/Copy of IMG_7430.JPG")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Aashna Hegde/Copy of IMG_2234.jpg")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Aashna Shroff/Copy of 2.png")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Akshay Kumar/Copy of IMG_6582.jpg")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/House of MiSu/Copy of _59A6915.JPG")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/IndeWild/Copy of IMG_7132.JPG")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>
                </div>



                {/*--------------------------------  Col 2  ---------------------------------------- */}

                <div className='w-full flex flex-col gap-[6px] md:gap-5 '>
                    <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Juhi Godambe/Copy of IMG_6477.JPG")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Kiara Advani/Copy of IMG_2897.jpg")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Meghna Kaur/Copy of IMG_5293.jpg")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Mrunu + Anirudhh/Copy of IMG_7729.JPG")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full h-[188px] md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Rhea Kapoor/Copy of IMG_6959.jpg")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full h-[128px] md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Sakshi Sindhwani/Copy of DGP_0986.jpg")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-3 md:pl-6 pb-3 md:pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>
                </div>



                {/*--------------------------------  Col 3  ---------------------------------------- */}

                <div className='w-full lg:flex flex-col gap-5 hidden '>
                    <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Jahnvi Kapoor/Copy_of_IMG_3092.jpg")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Shraddha Kapoor/Copy of 30DFE62F-B083-4D55-A61E-98E42139AB25.png")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Aashna Shroff/Copy of 1.png")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Tara Sutaria/Copy of TARA BIRTHDAY0015.jpg")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>
                    
                    <div className="w-full md:h-[220px] xl:h-[300px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/Shraddha Kapoor/Copy of 23CCF424-F781-43F3-8D3E-4BDA8AA0FEB1.png")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>

                    <div className="w-full md:h-[400px] xl:h-[477px] bg-center bg-cover" style={{ backgroundImage: `url("/Collaborations/CisterCo/17124872552716313.jpeg")` }}>
                        <div className="opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-black/40  w-full h-full font-subHeading text-white flex flex-col items-start justify-end pl-6 pb-5 transition-opacity duration-300 ease-in-out">
                            <h1 className="text-base leading-tight">Name of the Event</h1>
                            <p className="text-sm font-light">Location</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurGallery