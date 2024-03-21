import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const TextContent = () => {
  return (
    <div className='container mx-auto w-full px-4 md:px-0'>
       <div className='w-full  mt-13'>
          <p className='font-roboto text-2xl md:text-5xl lg:text-7xl leading-[2rem] md:leading-[5rem] lg:leading-[7rem]'>We create radical new technologies 
    to solve some of the world’s hardest problems </p>
       </div>

       <div className='lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col  justify-between  w-full h-fit  md:h-screen pt-21 lg:pt-54'>
            <div data-aos="fade-up"    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false" className='w-full md:1/2'>
                <p className='font-roboto text-2xl md:text-5xl lg:text-7xl leading-[2rem] md:leading-[5rem] lg:leading-[7rem]'>X -
The Moonshot Factory</p>
            </div>
            <div  data-aos="fade-up"   className='w-full md:1/2 mt-9 md:mt-0'>
                <p className='font-roboto text-base md:text-3xl leading-[1.5rem] md:leading-[3rem] lg:leading-[3rem]'>X is a diverse group of inventors and entrepreneurs who build and launch technologies that aim to improve the lives of millions, even billions, of people. Our goal: 10x impact on the world’s most intractable problems, not just 10% improvement. We approach projects that have the aspiration and riskiness of research with the speed and ambition of a startup</p>
            </div>
       </div>
    </div>
  )
}

export default TextContent;