import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        PhoneNumber: '',
        Occasion: '',
        DateOfEvent: '',
        Location: '',
        NoOfGuests: '',
        Budget: '',
        References: '',
        Details: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://sheetdb.io/api/v1/hamdjj6httzbv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: formData }),
            });

            const result = await response.json();

            if (result.created === 1) {
                alert('Thank you for contacting us! We will get back to you soon.');
                setFormData({
                    Name: '',
                    Email: '',
                    PhoneNumber: '',
                    Occasion: '',
                    DateOfEvent: '',
                    Location: '',
                    NoOfGuests: '',
                    Budget: '',
                    References: '',
                    Details: '',
                });
            }
        } catch (error) {
            console.error('Error submitting form', error);
            alert('There was an issue submitting the form. Please try again.');
        }
    };
    return (
        <div className='w-full min-h-[80vh] pt-[70px] md:pt-[80px] flex flex-col'>
            <div className='w-full aspect-video lg:h-[70vh] bg-center bg-cover' style={{ backgroundImage: `url("/Banners/Contact Us1.jpg")` }}>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] flex flex-col items-center'>
                <div className='w-full text-center py-10 flex flex-col items-center gap-2'>
                    <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>Contact Us</h1>
                    {/* <p className='text-[14px] md:text-lg font-subHeading '>Turning your pinterest dream into reality</p> */}
                </div>

                {/* form */}
                <div className='w-full flex flex-col lg:flex-row items-start gap-6'>
                    <form
                        onSubmit={handleSubmit}
                        className=' w-full xl:w-[725.68px] md:pb-5'>

                        <div className='mb-5 '>
                            <input name="Name" type='text' value={formData.Name} onChange={handleChange} className='w-full p-4 rounded-lg text-base border border-black/40 focus:border-black outline-none' placeholder='Your Name*' required />
                        </div>

                        <div className='mb-5 '>
                            <input name="Email" type='email' value={formData.Email} onChange={handleChange} className='w-full p-4 rounded-lg text-base border border-black/40 focus:border-black outline-none' placeholder='Email*' required />
                        </div>

                        <div className='mb-5'>
                            <input name="PhoneNumber" type='number' value={formData.PhoneNumber} onChange={handleChange} className='w-full p-4 rounded-lg text-base border border-black/40 focus:border-black outline-none' placeholder='Phone Number*' required />
                        </div>

                        <div className='mb-5'>
                            <input name="Occasion" type='text' value={formData.Occasion} onChange={handleChange} className=' w-full p-4 rounded-lg text-base border border-black/40 focus:border-black outline-none' placeholder='Occasion*' required></input>
                        </div>


                        <div className='mb-5'>
                            <input name="DateOfEvent" type='text' value={formData.DateOfEvent} onChange={handleChange} className=' w-full p-4 rounded-lg text-base border border-black/40 focus:border-black outline-none' placeholder='Date of Event*' required></input>
                        </div>

                        <div className='mb-5 '>
                            <input name="Location" type='text' value={formData.Location} onChange={handleChange} className=' w-full p-4 rounded-lg text-base border border-black/40 focus:border-black outline-none' placeholder='Location' ></input>
                        </div>

                        <div className='mb-5'>
                            <input name="NoOfGuests" type='number' value={formData.NoOfGuests} onChange={handleChange} className=' w-full p-4 rounded-lg text-base border border-black/40 focus:border-black outline-none' placeholder='Number of Guests' ></input>
                        </div>

                        <div className='mb-5'>
                            <input name="Budget" type='number' value={formData.Budget} onChange={handleChange} className=' w-full p-4 rounded-lg text-base border border-black/40 focus:border-black outline-none' placeholder='Budget' ></input>
                        </div>

                        <div className='mb-5 '>
                            <input name="References" type='text' value={formData.References} onChange={handleChange} className=' w-full p-4 rounded-lg text-base border border-black/40 focus:border-black outline-none' placeholder='References' ></input>
                        </div>

                        <div className='mb-5 '>
                            <textarea name="Details" type='text' value={formData.Details} onChange={handleChange} rows='6' className=' w-full p-4 rounded-lg text-base border border-black/40 max-h-[20rem] focus:border-black outline-none' placeholder='Details' ></textarea>
                        </div>

                        <button className='lg:px-16 py-3  lg:py-2 rounded-xl w-full lg:w-auto rounded-base text-base font-medium bg-black text-white'>Submit</button>
                    </form>


                    <div className='w-full lg:w-[264.08px] p-5 rounded-xl border border-black/40 flex flex-col gap-5 mb-10 lg:mb-0'>
                        <div className='text-base font-subHeading '>
                            <h1 className='font-medium'>CALL US</h1>
                            <p className='font-light'>+91 836-9341912 </p>
                        </div>

                        <div className='text-base font-subHeading '>
                            <h1 className='font-medium'>VISIT US</h1>
                            <p className='font-light'>+91 - XXXXXXXXXX</p>
                        </div>

                        <div className='text-base font-subHeading'>
                            <h1 className='font-medium'>INSTAGRAM</h1>
                            <p className='font-light'><a href='https://www.instagram.com/doitup.today?igsh=MWE1aXN5ZWNnZDdjOQ==' target='_blank'>@doitup.today</a></p>
                        </div>

                        <div className='text-base font-subHeading'>
                            <h1 className='font-medium'>EMAIL US</h1>
                            <p className='font-light'><a href="mailto:contact@doitup.today" target='_blank'>contact@doitup.today</a></p>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default ContactUs