import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-white p-4'>
      <div className='w-full max-w-[720px] shadow-2xl'>

        {/* Header */}
        <div className='w-full py-5 flex justify-center items-center bg-blue-900'>
          <h1 className='text-xl sm:text-2xl text-white font-bold'>Contact Us!</h1>
        </div>

        {/* Body */}
        <div className='grid grid-cols-1 sm:grid-cols-2 bg-white text-blue-900'>

          {/* Phone */}
          <div className='flex flex-col items-center text-center gap-2 p-8 sm:border-r-2 border-blue-600'>
            <BsFillTelephoneFill className='text-3xl' />
            <h2 className='text-2xl font-bold'>Phone Number</h2>
            <p className='text-base font-bold'>+855 684 66 368</p>
          </div>

          {/* Email */}
          <div className='flex flex-col items-center text-center gap-2 p-8'>
            <MdEmail className='text-3xl' />
            <h2 className='text-2xl font-bold'>Email</h2>
            <p className='text-base font-bold break-all'>sannreachsey1010@gmail.com</p>
          </div>

          {/* Location */}
          <div className='flex flex-col items-center text-center gap-2 p-8 border-t-2 sm:border-r-2 border-blue-600'>
            <IoLocationSharp className='text-3xl' />
            <h2 className='text-2xl font-bold'>Location</h2>
            <p className='text-base'>Angkor Reach, Preah Sdach, Prey Veng</p>
          </div>

          {/* Socials */}
          <div className='flex flex-col justify-center items-center gap-4 p-8 border-t-2 border-blue-600'>
            <div className='flex items-center gap-3'>
              <FaFacebook className='text-2xl' />
              <span className='text-base'>Sann Reachsey</span>
            </div>
            <div className='flex items-center gap-3'>
              <FaTiktok className='text-2xl' />
              <span className='text-base'>@cpl909</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact 