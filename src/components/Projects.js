import React from 'react'



const Projects = () => {
  return (
    <div name='projects' className='bg-[#0a192f] w-full md:h-screen text-gray-300 '>

<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-f
h-full'>
    <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Projects</p>
        <p className='py-6'>Check out some of my works.</p>
    </div>
    <div style={{}}
     className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='shadow-lg shadow-[040c16] group contianer round-ms flex justify-center items-center mx-auto content-div '>
            <span className='text-2xl font-bold text-white tracking-wider'>
                React.js Application
            </span>
            <div className='pt-8 text-center'>
                <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Projects