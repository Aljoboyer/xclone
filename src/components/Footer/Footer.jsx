import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className='bg-[#0f0f0f] h-[200px]  px-4 md:px-21 pt-13'>
          <div className='lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col  justify-between items-center'>
          <div className='flex flex-row justify-between items-center'>
              <FaLinkedin className='ms-2 md:ms-11' color='white' size={30} />
              <FaTwitter className='ms-2 md:ms-11' color='white' size={30} />
              <IoLogoYoutube className='ms-2 md:ms-11' color='white' size={30} />
              <IoLogoInstagram className='ms-2 md:ms-11' color='white' size={30} />
          </div>

        <div className='flex flex-row justify-evenly items-center ms-2 md:ms-0 mt-7 md:mt-0'>
            <p className='text-white text-base'>PRIVACY + TERMS</p>
            <p className='text-white text-base mx-7 md:mx-11'>GOOGLE</p>
            <p className='text-white text-base'>ALPHABET</p>

          </div>
          </div>
          <p className='text-white text-sm ms-11 mt-7'>X, a division of Google LLC. All rights reserved.</p>
    </div>
  )
}

export default Footer;