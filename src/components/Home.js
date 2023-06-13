import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600' >Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Puspita Goswami</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I have a passion for creating user-friendly designs and am skilled in using technologies such as HTML, CSS, Javascript, React and React Native.
            I have worked on a variety of projects, from small personal websites to large-scale enterprise applications.
        </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
            <span className='group-hover:rotate-90 duration-60'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Home