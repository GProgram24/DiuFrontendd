import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='w-full min-h-[56px]  lg:px-[100px] xl:px-[150px] py-5 lg:py-0 flex items-center '>
            <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-9 lg:gap-0'>
                <nav className=' h-full'>
                    <div className='flex flex-wrap justify-center  gap-4 md:gap-16 lg:h-full font-subHeading text-[14px] md:text-base text-black  items-center'>
                        <NavLink to='/aboutus' className={({ isActive }) => isActive ? 'font-semibold' : 'font-medium'}>
                            <p className='px-3 md:px-0 hover:font-semibold'>ABOUT US</p>
                        </NavLink>
                        <NavLink to='/works' className={({ isActive }) => isActive ? 'font-semibold' : 'font-medium'}>
                            <p className='px-3 md:px-0 hover:font-semibold'>WORK</p>
                        </NavLink>
                        <NavLink to='/weddings' className={({ isActive }) => isActive ? 'font-semibold' : 'font-medium'}>
                            <p className='px-3 md:px-0 hover:font-semibold'>WEDDINGS</p>
                        </NavLink>
                        <NavLink to='/collaborations' className={({ isActive }) => isActive ? 'font-semibold' : 'font-medium'}>
                            <p className='px-3 md:px-0 hover:font-semibold'>COLLABORATIONS</p>
                        </NavLink>
                    </div>
                </nav>

                <div className="flex gap-3 text-lg  items-center h-full ">
                    <FaWhatsapp />
                    <IoLogoFacebook />
                    <FaInstagram />
                </div>

            </div>

        </footer>
    )
}

export default Footer