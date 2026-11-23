import React from 'react'
import { viewField } from '../Data/Views';

const View = () => {
  return (
    <div>
        {/* view */}
        {viewField.map((p) => (

        <div key={p.id} className='w-full h-[600px] mt-[100px]'>
          <div className='w-full h-[10%] '>
            {/* Name staduim */}
          </div>
          <div className='w-full h-[90%] gap-4 flex'>
            <div className='w-[22%] h-[90%] bg-amber-200'>
              <img className='w-full h-full object-cover' src={p.pic1} alt="" />
            </div>
            <div className='w-[26%] h-[90%] mt-12 bg-amber-500'>
              <img className='w-full h-full object-cover' src={p.pic2} alt="" />
            </div>
            <div className='w-[22%] h-[90%] bg-amber-400'>
              <img className='w-full h-full object-cover' src={p.pic3} alt="" />
            </div>
            <div className='w-[27%] h-[90%] mt-12 bg-amber-300'>
              <img className='w-full h-full object-cover' src={p.pic4} alt="" />
            </div>

          </div>

        </div>
        ))}
    </div>
  )
}

export default View