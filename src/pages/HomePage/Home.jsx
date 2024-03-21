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

const Home = () => {

  useEffect(() => {
    const smoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
    };

    smoothScroll();

    return () => {
      document.removeEventListener('scroll', smoothScroll);
    };
  }, []);

  return (
    <div className='w-full mx-auto pt-7'>
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