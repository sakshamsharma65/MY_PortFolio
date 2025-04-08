import React from 'react'

const Projectcard = ({title,main,src}) => {
  return (
    <div   style={{ boxShadow: '0 10px 25px rgba(0, 140, 255, 0.4)' }} className='p-3 md:p-6 flex flex-col w-70 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transform transition hover:scale-105'>
        <img className='p-4' src={src} alt="" />
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
            {title}
        </h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
        <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4 '>
<button className='md:mt-8 text-white py-1 px-3 text-sm md:text-lg md:py-2 md:px-4 trans hover:opacity-85 hover:scale-105 duration-300 font-semibold rounded-3xl  bg-[#465697]'> <a href="https://github.com/sakshamsharma65">Demo</a></button>
<button className='md:mt-8 text-white py-1 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 hover:scale-105 duration-300 font-semibold rounded-3xl  bg-[#465697]'><a href="https://github.com/sakshamsharma65">Source</a></button>
        </div>
      
    </div>
  )
}

export default Projectcard
