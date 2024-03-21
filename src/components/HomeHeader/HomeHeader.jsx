import React from 'react';
import { motion } from "framer-motion";

const HomeHeader = () => {
  return (
    <div className='mt-7 container mx-auto w-full pt-7'>
      

      <motion.div
                initial={{ scale: 1.5, top: -20, }}
                animate={{ scale: 1, top: 0, }}
                transition={{ duration: 1.7 }}
                className="relative h-[70vh]  overflow-hidden container w-full"
            >
                
                    {/* <video
                        // ref={videoRef}
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', height: '100%', top: -130,  }}
                        className='w-fit'
                    >
                        <source
                            src="https://storage.googleapis.com/madebygoog.appspot.com/grow-ext-cloud-images-uploads/home_desktop5_9DCE7153.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video> */}
                <video  style={{height: '400px', width: '100vw', objectFit: 'cover'}} src="https://storage.googleapis.com/madebygoog.appspot.com/grow-ext-cloud-images-uploads/home_desktop5_9DCE7153.mp4"  autoPlay  muted loop></video>
            </motion.div>

    </div>
  );
};

export default HomeHeader;

