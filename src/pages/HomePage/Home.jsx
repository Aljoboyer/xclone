import React from 'react'
import { motion } from "framer-motion"
import Navbar from '../../components/Navbar/Navbar';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import TextContent from '../../components/TextContent/TextContent';
import GlobalAccess from '../../components/HomeComponents/GlobalAccess';
import Tapestry from '../../components/HomeComponents/Tepestry';
import Tidal from '../../components/HomeComponents/Tidal';
import Moon from '../../components/HomeComponents/Moon';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <HomeHeader/>
      <TextContent/>
      <GlobalAccess/>
      <Tapestry/>
      <Tidal/>
      <Moon/>
      <Footer/>
    </div>
  )
}

export default Home;