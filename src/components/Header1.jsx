import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Sidebar1 from './Sidebar1';

const Header1 = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);
    return (
        <header className="w-full h-[70px] md:h-[80px] px-5 lg:px-[100px]  xl:px-[150px] fixed z-40 bg-white ">
            <div className=' w-full h-full flex justify-between items-center z-40'>
                <div className='text-base font-semibold text-white'>
                    <NavLink to='/'><img src='/diu-logo-black1.png' alt="Logo" className='w-[200px] h-[200px] -mt-4'></img></NavLink>
                </div>
                <div className='lg:hidden'>
                    <Sidebar1 />
                </div>
                <nav className='hidden h-full lg:block'>
                    <div className='md:flex gap-10 xl:gap-16 hidden font-subHeading text-base text-black h-full items-center'>
                        <NavLink to='/aboutus' className={({ isActive }) => isActive ? 'font-semibold' : 'font-medium'}>
                            <p className=' hover:font-semibold'>ABOUT US</p>
                        </NavLink>
                        <div
                            className="relative h-full flex items-center"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='cursor-pointer font-medium'>
                                <p className='h-full  hover:font-semibold'>WORK</p>
                            </div>
                            {/* Dropdown content */}
                            {dropdownOpen && (
                                <div className="absolute mt-[161px] w-48 bg-white text-black rounded-md shadow-lg">
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
                            <p className=' hover:font-semibold'>WEDDINGS</p>
                        </NavLink>
                        <NavLink to='/collaborations' className={({ isActive }) => isActive ? 'font-semibold' : 'font-medium'}>
                            <p className=' hover:font-semibold'>COLLABORATIONS</p>
                        </NavLink>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'font-semibold' : 'font-medium'}>
                            <button className='px-7 py-2 h-full border border-black hover:bg-black hover:text-white rounded-xl outline-none'>
                                CONTACT US
                            </button>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header1