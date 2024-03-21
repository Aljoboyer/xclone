import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const GlobalAccess = () => {
  return (
   <div className='mt-34 md:mt-0'>

    <div className='bg-[#ffb300] h-[60px] md:h-[100px] flex flex-row justify-center items-center w-1/2 md:w-2/6'>
        <p className='font-roboto text-base md:text-2xl leading-[1rem] md:leading-[2rem] lg:leading-[3rem] font-bold'>PUBLIC    X    PROJECTS</p>
    </div>

      <div className='h-screen global_access p-10 md:p-24 lg:p-34 ' >
          <p className='font-roboto text-base md:text-3xl leading-[1.5rem] md:leading-[3rem] lg:leading-[3rem] text-white w-full md:w-3/5 mt-27'>What if beams of light could provide
  global access to fast, affordable connectivity?</p>

        
          <div className='flex flex-row justify-start items-center mt-21'>
              <div className='h-[50px] w-[50px] bg-white flex flex-row justify-center items-center'>
                  <FaArrowRight color='black' size={25} />
              </div>
              <p className='text-white text-base md:text-3xl leading-[1.5rem] font-medium ms-7'>Explore Tara</p>
          </div>
          
      </div>
   </div>
  )
}

export default GlobalAccess