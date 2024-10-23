import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { testimonials } from '../../utils/constants';

const TestimonialCard = ({ testimonial }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='p-1 lg:p-2 xl:p-3'>
            <div className="bg-white shadow-md border border-black/10 rounded-lg overflow-hidden p-3 flex flex-col justify-between">
                <img
                    src={testimonial.img}
                    className="w-full h-96 object-center object-cover "
                />
                <div className="p-4 xl:p-6">
                    {/* Conditionally apply text clamping based on isExpanded state */}
                    <p className={`text-base md:text-[18px] lg:text-sm font-subHeading leading-6 text-left ${isExpanded ? '' : 'testimonial-desc'}`}>
                        "{testimonial.desc}"
                    </p>
                    <button
                        onClick={toggleReadMore}
                        className="text-blue-500 hover:underline mt-2 text-sm"
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    <p className="text-base font-subHeading font-medium mt-4">{testimonial.name}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
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
        <div className='w-full  px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center pb-20'>
            <div className='w-full text-center pt-10 pb-10 flex flex-col items-center gap-2'>
                <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Client Testimonials</h1>
                <p className='text-[14px] md:text-lg font-subHeading'>Find out why our clients love us</p>
            </div>

            <div className="w-full">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;

