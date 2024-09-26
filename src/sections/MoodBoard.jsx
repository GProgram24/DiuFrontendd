import React from 'react'

const MoodBoard = ({cards}) => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-full text-center pt-8 md:pt-10 pb-8 flex flex-col items-center gap-2'>
                <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Our Mood Board</h1>
                {/* <p className='text-[14px] md:text-lg font-subHeading'>Turning your pinterest dream into reality</p> */}
            </div>

            <div className='w-full grid grid-cols-2 lg:grid-cols-4 place-items-center gap-[6px] md:gap-5 pb-10'>
                {/* <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 1/img1.jpg")` }}></div>
                <div className='w-full aspect-square  bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 3/img1.jpg")` }}></div>
                <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 1/img1.jpg")` }}></div>
                <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 3/img1.jpg")` }}></div>
                <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 1/img1.jpg")` }}></div>
                <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 3/img1.jpg")` }}></div>
                <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 1/img1.jpg")` }}></div>
                <div className='w-full aspect-square bg-center bg-cover' style={{ backgroundImage: `url("/Gallery/Col 3/img1.jpg")` }}></div> */}
                {
                    cards.map((card) => (
                        <div className='w-full aspect-square  bg-center bg-cover'>
                            <img src={card.img} className='w-full h-full object-cover object-center'></img>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MoodBoard