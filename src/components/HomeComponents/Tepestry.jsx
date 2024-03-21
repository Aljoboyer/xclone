import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Tapestry = () => {
  return (
    <div className='h-screen tepestry p-10 md:p-24 lg:p-34 ' >
        <p className='font-roboto text-base md:text-3xl leading-[1.5rem] md:leading-[3rem] lg:leading-[3rem] text-white w-full md:w-3/5 mt-27'>What if we could make the world’s electric grid visible
so everyone could access clean, reliable energy</p>

       
        <div className='flex flex-row justify-start items-center mt-21'>
            <div className='h-[50px] w-[50px] bg-white flex flex-row justify-center items-center'>
                <FaArrowRight color='black' size={25} />
            </div>
            <p className='text-white text-base md:text-2xl leading-[1.5rem] font-medium ms-7'>Explore Tapestry</p>
        </div>
        
    </div>
  )
}

export default Tapestry