import React from 'react'
import css from '../assests/css.png';
import html from '../assests/html.png';
import javascript from '../assests/javascript.png';
import node from '../assests/node.png';
import react from '../assests/react.png';
import tailwind from '../assests/tailwind.png';

const MySkills = () => {
  return (
   
    
        <div name='skills' className='bg-[#0a192f] text-gray-300 py-4 w-full h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-auto justify-center w-full h-full'>
                <div>
                    <p className='text-4xl inline border-b-4 border-pink-600 font-bold '>Skills</p>
                    <p className='py-4'>There are technologies I've worked with.</p>
                </div>
    
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 h-fit'>
               
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-fit'>
                        <img className='w-20 mx-auto ' src={html} alt='HTML icon'/>
                        <p className='py-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-fit'>
                        <img className='w-20 mx-auto ' src={css} alt='CSS icon'/>
                        <p className='py-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-fit'>
                        <img className='w-20 mx-auto ' src={javascript} alt='Javascript icon'/>
                        <p className='py-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-fit'>
                        <img className='w-20 mx-auto ' src={node} alt='Node icon'/>
                        <p className='py-4'>Node.js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-fit'>
                        <img className='w-20 mx-auto ' src={react} alt='React icon'/>
                        <p className='py-4'>React.js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-fit'>
                        <img className='w-20 mx-auto ' src={tailwind} alt='Tailwind icon'/>
                        <p className='py-4'>Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MySkills