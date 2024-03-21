import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const MoonShots = () => {
  return (
   <div className='mt-34'>

    <div className='bg-[#ffb300] h-[60px] md:h-[130px] flex flex-row justify-center items-center w-[200px] md:w-[400px]'>
        <p className='font-roboto text-base md:text-2xl leading-[1rem] md:leading-[2rem] lg:leading-[3rem] font-bold'>X    TIMELINE</p>
    </div>

      <div className='h-screen bg-[#0f0f0f] p-10 md:p-24 lg:p-34 ' >
        <p className='font-roboto text-2xl md:text-5xl lg:text-7xl leading-[2rem] md:leading-[5rem] lg:leading-[7rem] text-white'>Ten years of moonshots</p>
          <p className='font-roboto text-base md:text-3xl leading-[1.5rem] md:leading-[3rem] lg:leading-[3rem] text-white w-full md:w-4/5 mt-27'>In 2010, Google founders Larry Page and Sergey Brin decided to form a new division of the company to work on moonshots: far-out, sci-fi sounding technologies that could one day make the world a radically better place. It was a grand experiment — some might say a moonshot unto itself. 10 years in, X has incubated hundreds of different moonshot projects, many of which have gone on to become independent businesses.
</p>

      </div>
   </div>
  )
}

export default MoonShots