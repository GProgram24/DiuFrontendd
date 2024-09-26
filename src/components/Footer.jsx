import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);
    return (
        <footer className='w-full min-h-[56px]  lg:px-[100px] xl:px-[150px] py-5 lg:py-0 flex items-center '>
            <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-9 lg:gap-0'>
                <nav className=' h-full'>
                    <div className='flex flex-wrap justify-center  gap-6 md:gap-16 lg:h-full font-subHeading text-[14px] md:text-base text-black  items-center'>
                        <NavLink to='/aboutus' className={({ isActive }) => isActive ? 'font-semibold' : 'font-medium'}>
                            <p className='px-3 md:px-0 hover:font-semibold'>ABOUT US</p>
                        </NavLink>
                        <div
                            className="relative h-full flex items-center"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='cursor-pointer'>
                                <p className=' h-full hover:font-semibold'>WORK</p>
                            </div>
                            {/* Dropdown content */}
                            {dropdownOpen && (
                                <div className="absolute mb-[100px] md:mb-[105px] w-48 bg-white text-black rounded-md shadow-lg ">
                                    <NavLink
                                        to='/intimateEvents'
                                        className={({ isActive }) => isActive ? 'font-semibold block px-4 py-2' : 'font-medium block px-4 py-2'}
                                    >
                                        Intimate Events
                                    </NavLink>
                                    <NavLink
                                        to='/brandInstallations'
                                        className={({ isActive }) => isActive ? 'font-semibold block px-4 py-2' : 'font-medium block px-4 py-2'}
                                    >
                                        Brand Installations
                                    </NavLink>
                                </div>
                            )}
                        </div>
                        <NavLink to='/weddings' className={({ isActive }) => isActive ? 'font-semibold' : 'font-medium'}>
                            <p className='px-3 md:px-0 hover:font-semibold'>WEDDINGS</p>
                        </NavLink>
                        <NavLink to='/collaborations' className={({ isActive }) => isActive ? 'font-semibold' : 'font-medium'}>
                            <p className='px-3 md:px-0 hover:font-semibold'>COLLABORATIONS</p>
                        </NavLink>
                    </div>
                </nav>

                <div className="flex gap-3 text-lg  items-center h-full ">
                    <a href='https://web.whatsapp.com/send?phone=918369341912&text=' target='_blank'><FaWhatsapp /></a>
                    <a href='https://www.facebook.com/doitup.today?mibextid=LQQJ4d' target='_blank'><IoLogoFacebook /></a>
                    <a href='https://www.instagram.com/doitup.today?igsh=MWE1aXN5ZWNnZDdjOQ==' target='_blank'><FaInstagram /></a>
                    
                </div>

            </div>

        </footer>
    )
}

export default Footer