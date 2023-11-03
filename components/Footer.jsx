'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex-flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-5 '>
        <h2 className='font-bold md:text-[64px] text-[40px] text-white'>Enter the Metaverse </h2>
        <button>
          <div className='flex items-center h-fit py-[20px] px-6 bg-[#25618b] text-white rounded-[32px] gap-[12px] hover:bg-transparent hover:border-[#25618b] border-transparent border-[1px]'>

            <img src="/headset.svg" alt="headset" className='w-[23px] h-[23px] object-contain ' />
            <span className="font-normal text-[16px] text-white">
              ENTER METAVERSE
            </span>

          </div>
        </button>
      </div>

      <div className="mb-[50px] h-[2px] bg-white opacity-10 mt-[70px] " />
      {/* <div className={`border-[2px] border-secondary-white py-32`}></div> */}

      <div className="flex items-center justify-between flex-wrap gap-4">
        <h4 className="font-extrabold text-[24px] text-white">
          METAVERSUS
        </h4>
        <p className="font-normal text-[14px] text-white opacity-50">
          Copyright © 2021 - 2023 Metaversus. All rights reserved.
        </p>

        <div className="flex gap-4">
          {socials.map((social) => (
            <img
              key={social.name}
              src={social.url}
              alt={social.name}
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>


    </div>
  </motion.footer>
);

export default Footer;
