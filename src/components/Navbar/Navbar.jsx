import React, { useRef } from 'react'
import SiteLogo from '../../assets/logo.svg';
import { motion } from "framer-motion"
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./ManuToggle";
import { Navigation } from "./Navigations";
import {  sync, useCycle } from "framer-motion";
import "./style.css";
import { FaBars } from "react-icons/fa";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className='container mx-auto w-full h-[80px] flex flex-row justify-between items-center pt-4'>
        <img src={SiteLogo} alt="" className='md:h-[70px] ps-4 md:ps-0' />

        <div className='mr-4 md:mr-0'>
        {/* <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="background" variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav> */}
            <FaBars size={45} />
        </div>
    </div>
  )
}

export default Navbar;