import React from 'react'

const About = () => {
  return (
    <div className='border-t-2 w-full border-red-300 p-10  flex gap-1 border-t-black mt-5 p-1'>
        <div className='w-1/2 '>
            
        <h1 
        className='text-[4vw] tracking-tighter '
        >
            Our approach:
        </h1>
            
        <button className='rounded-full flex gap-5 items-center tracking-tighter text-lime-50 py-2 px-5 bg-[#000000]'>Read More
        <div className='w-2 h-2 bg-white rounded-full'></div>
        </button>
            </div>
        <div className='w-1/2 h-[70vh] mt-8 rounded-tl-2xl rounded-tr-2xl bg-slate-50' >

        </div>
    </div>
  )
}

export default About