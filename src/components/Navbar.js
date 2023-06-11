import React from 'react'
import { FaBars, FaItems } from 'react-icons/fa';
import Logo from '../assests/logo.png';


const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt='Logo' style={{ width: "80px" }} />
            </div>
            <div >
                <ul className='flex'>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div >

            <div className='hidden'>
                <FaBars />
            </div>
            <div className='hidden'>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='hidden'></div>

        </div>
    )
}

export default Navbar;