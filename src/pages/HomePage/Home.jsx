import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import Navbar from '../../components/Navbar/Navbar';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import TextContent from '../../components/TextContent/TextContent';
import GlobalAccess from '../../components/HomeComponents/GlobalAccess';
import Tapestry from '../../components/HomeComponents/Tepestry';
import Tidal from '../../components/HomeComponents/Tidal';
import Moon from '../../components/HomeComponents/Moon';
import Footer from '../../components/Footer/Footer';
import MoonShots from '../../components/HomeComponents/MoonShots';

const Home = () => {

  return (
    <div className='w-full mx-auto pt-7'>
      <Navbar/>
      <HomeHeader/>
      <TextContent/>
      <GlobalAccess/>
      <Tapestry/>
      <Tidal/>
      <Moon/>
      <MoonShots/>
      <Footer/>
    </div>
  )
}

export default Home;