import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const GlobalAccess = () => {
  return (
   <div className='mt-34 md:mt-0'>

    <div data-aos="fade-up"    data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false" className='bg-[#ffb300] h-[60px] md:h-[130px] flex flex-row justify-center items-center w-[200px] md:w-[400px]'>
        <p className='font-roboto text-base md:text-2xl leading-[1rem] md:leading-[2rem] lg:leading-[3rem] font-bold'>PUBLIC    X    PROJECTS</p>
    </div>

      <div data-aos="fade-up"    data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="false" className='h-screen global_access p-10 md:p-24 lg:p-34 ' >
          <p  data-aos="fade-up"    data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false" className='font-roboto text-base md:text-3xl leading-[1.5rem] md:leading-[3rem] lg:leading-[3rem] text-white w-full md:w-3/5 mt-27'>What if beams of light could provide
  global access to fast, affordable connectivity?</p>

        
          <div className='flex flex-row justify-start items-center mt-21'>
              <div data-aos="fade-up"    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false" className='h-[50px] w-[50px] bg-white flex flex-row justify-center items-center'>
                  <FaArrowRight color='black' size={25} />
              </div>
              <p 
              data-aos="fade-up"    data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className='text-white text-base md:text-3xl leading-[1.5rem] font-medium ms-7'>Explore Tara</p>
          </div>
          
      </div>
   </div>
  )
}

export default GlobalAccess