import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Moon = () => {
  return (
    <div className='moon h-screen flex flex-col justify-end items-start'>

        <p className='font-roboto text-base md:text-3xl leading-[1.5rem] md:leading-[3rem] lg:leading-[3rem] text-white w-full md:w-3/5 px-11 md:px-40'>What if beams of light could provide
global access to fast, affordable connectivity?</p>

        <div className='flex flex-row justify-between items-center mt-21 w-full px-4 md:px-34 pb-7'>
        <p className='text-white text-base md:text-2xl leading-[1.5rem] font-medium ms-7 text-[#ffb300]'>Explore Tapestry</p>

            <div className='h-[50px] w-[50px] bg-black flex flex-row justify-center items-center'>
                <FaArrowRight color='white' size={25} />
            </div>
        </div>
    </div>
  )
}

export default Moon;