import React from 'react'
import bannerImg from './image/banner.png'

const Banner = () => {
  return (
    <div className='w-full mt-10 flex justify-center px-4'>
      <div className='w-full max-w-[1200px] min-h-[200px] md:h-[200px] rounded-3xl bg-green-400 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 p-6'>

        {/* Image */}
        <div className='w-[120px] md:w-[150px] shrink-0'>
          <img src={bannerImg} alt='Pre-order banner' className='w-full h-auto object-contain' />
        </div>

        {/* Text */}
        <h1 className='text-4xl md:text-6xl text-amber-500 font-bold text-center whitespace-nowrap'>
          Pre-Order Now
        </h1>

      </div>
    </div>
  )
}

export default Banner