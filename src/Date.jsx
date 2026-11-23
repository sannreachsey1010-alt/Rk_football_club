import React from 'react'

const Date = () => {
    const date = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return (
    <div>
        <div className='w-full h-[200px] flex justify-center items-center mt-20'>
            <div className='w-full h-[150px] flex items-center justify-center gap-10'>
                    {date.map((table) => (
                        <button key={table} className='w-[100px] h-full rounded-xl bg-blue-300 shadow-2xl text-xs text-black font-sans hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-green-700'>{table}</button>
                    ))}

            </div>

        </div>
    </div>
  )
}

export default Date