import React from 'react'
import {FaBars, FaItems} from 'react-icons/fa';
import Logo from '../assests/logo.png';


const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]'>
        <div>
        <img src={Logo} alt='Logo' style={{width: "80px"}}/>
        </div>
    </div>
  )
}

export default Navbar;