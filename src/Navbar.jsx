import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <div className='w-full h-[50px] flex justify-center items-center shadow-2xl text-amber-50 flex gap-16 text-2xl bg-blue-400'>
        <Link className='hover:text-green-200 ease-in-out transition-all duration-150' to="/">Home</Link>
        <Link className='hover:text-green-200 ease-in-out transition-all duration-150' to="/Pre_Order">Pre Order</Link>
        <Link className='hover:text-green-200 ease-in-out transition-all duration-150' to="/View">View</Link>
        <Link className='hover:text-green-200 ease-in-out transition-all duration-150' to="/Contact">Contact</Link>
        </div>
        
        
    </div>
  )
}

export default Navbar