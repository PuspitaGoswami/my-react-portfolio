import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>I'm Puspita, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>Passionate and innovative front-end developer seeking an exciting opportunity to join a
                            dynamic team and contribute to the creation of cutting-edge web applications. With
                            software development experience delivering functional and user-friendly interfaces using
                            React.js, I am confident in my ability to leverage my skills and expertise to exceed project
                            expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About