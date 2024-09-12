import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative h-full">
            <div className={`fixed top-0 left-0 w-full h-screen bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className='bg-white h-full'>
                    <div className='w-full h-[70px] md:h-[80px] px-5'>
                        <div className='w-full h-full flex justify-between items-center'>
                            <div className='text-base font-semibold text-white'>
                                <NavLink to='/'><img src='/Logo.png' alt="Logo" onClick={toggleSidebar} className="max-w-[100px] w-full"></img></NavLink>
                            </div>
                            <button>
                                <IoClose className='text-2xl' onClick={toggleSidebar} />
                            </button>
                        </div>
                    </div>
                    <nav className="pl-5 pt-3 pb-16 md:pt-10 md:pb-24 w-full">
                        <div className='flex flex-col gap-6 font-subHeading text-[14px]'>
                            <Link to='/aboutus'><p onClick={toggleSidebar}>ABOUT US</p></Link>
                            <Link to='/weddings'><p onClick={toggleSidebar}>WEDDINGS</p></Link>
                            <div className='flex flex-col gap-3'>
                                <p>WORK</p>
                                <div className='flex flex-col gap-2 pl-5'>
                                    <Link to='/intimateEvents'><p onClick={toggleSidebar}>INTIMATE EVENTS</p></Link>
                                    <Link to='/brandInstallations'><p onClick={toggleSidebar}>BRAND INSTALLATIONS</p></Link>
                                </div>
                            </div>
                            <Link to='/collaborations'><p onClick={toggleSidebar}>COLLABORATIONS</p></Link>
                        </div>
                    </nav>

                    <div className='w-full h-full bg-black'>
                        <div className='w-full h-full flex flex-col px-5 pt-10 text-white'>
                            <h1 className='font-heading text-[32px] leading-10'>Do It Up.<br /> Do It Up Today!</h1>
                            <p className='font-subHeading text-[14px] md:text-[18px] pt-3 pb-8 lg:pb-6'>Do It Up specialises in personalised event decor, home makeovers and transformations with a vision to create spaces that reflect personalities.</p>
                            <Link to='/contact'><button className='px-5 md:px-7 py-2 w-[175px] h-[42px] border border-white hover:bg-white text-base hover:text-black rounded-xl'>CONTACT US</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='button'>
                {
                    isOpen ? (
                        <div></div>
                    ) : (
                        <button>
                            <GiHamburgerMenu className='text-2xl text-white' onClick={toggleSidebar} />
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default Sidebar;
