import React from 'react'
import weather from '../assests/weatherApp.JPG';
import tipCal from '../assests/tip-cal.JPG';
import countDown from '../assests/count-down.JPG';
import colorSwap from '../assests/color-swap.JPG';

const Projects = () => {
    return (
        <div name='projects' className='bg-[#0a192f] w-full md:h-screen text-gray-300 pt-20'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-f
h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Projects</p>
                    <p className='py-6'>Check out some of my works.</p>
                </div>
                <div
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{ backgroundImage: `url(${weather})` }} className='shadow-lg shadow-[040c16] group contianer rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider pl-5 pr-5'>
                                React.js Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://puspitagoswami.github.io/Weather_forecast/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/PuspitaGoswami/Weather_forecast'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>


                    </div>
                    <div style={{ backgroundImage: `url(${tipCal})` }} className='shadow-lg shadow-[040c16] group contianer rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider pl-5 pr-5'>
                                JavaScript Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://puspitagoswami.github.io/TipCalculator/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/PuspitaGoswami/TipCalculator'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>


                    </div>
                    <div style={{ backgroundImage: `url(${colorSwap})` }} className='shadow-lg shadow-[040c16] group contianer rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider pl-5 pr-5'>
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
                    <div style={{ backgroundImage: `url(${countDown})` }} className='shadow-lg shadow-[040c16] group contianer rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider pl-5 pr-5'>
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
                    <div style={{ backgroundImage: `url(${weather})` }} className='shadow-lg shadow-[040c16] group contianer rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider pl-5 pr-5'>
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
                    <div style={{ backgroundImage: `url(${weather})` }} className='shadow-lg shadow-[040c16] group contianer rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider pl-5 pr-5'>
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
        </div>
    )
}

export default Projects