'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn, } from "../utils/motion";

const Feedback = () => (
  <section
    className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6  `}
    >
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-[0.5] lg:max-w-[370px] flex-justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative">
        <div className="feedback-gradient absolute top-10 left-20" />
        <div>
          <h4 className={`mt-[108px] font-semibold text-white lg:text-[32px] text-[26px] sm:leading-[40px] leading-[36px]`}>Samantha</h4>
          <p className={`mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white`}>Founder, Metaversus</p>

          <div className={`flex flex-[0.5] flex-wrap `}>
            <p className="lg:text-[24px] text-[18px] text-white mt-[16px] sm:leading-[45.6px] leading-[39.6px]">
              “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="flex-1 flex justify-center items-center relative">
        <img src="/planet-09.png" alt="image" className={`w-full min-h-[210px] lg:h-[610px] object-cover rounded-[40px]`} />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[7%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>

    </motion.div>
    {/* Feedback section */}
  </section>
);

export default Feedback;
