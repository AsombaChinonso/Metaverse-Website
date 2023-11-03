'use client';
import { motion } from "framer-motion"
import { TypingText, TitleText } from "../components";
import styles from "../styles/index"
import { staggerContainer, fadeIn } from "../utils/motion"

const World = () => (  
  <section
    className={`${styles.paddings} relative z-10 `}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title={"| Transversers round the globe "} textStyles={`text-center`} />
      <TitleText 
      textStyles={`text-center`} 
      title={(
          <>
          Track friends around you 
          and invite them to play 
          together in the same world 
          </>)}/>

      <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className="relative mt-[68px] flex w-full h-[550px]">
        <img src="/map.png" alt="world-map-here" className={`w-full h-full object-cover`} />
        
        {/* Gamer-01 */}
        <div className={`absolute bottom-20 right-20  w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] `}>
            <img src="/people-01.png" alt="people-01" className={`w-full h-full shadow-secondary shadow-xl`} />
        </div>

        {/* Gamer-02 */}
        <div className={`absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] `}>
            <img src="/people-02.png" alt="people-02" className={`w-full h-full shadow-secondary shadow-xl`} />
        </div>

        {/* Gamer-03 */}
        <div className={`absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] `}>
            <img src="/people-03.png" alt="people-03" className={`w-full h-full shadow-secondary shadow-xl`} />
        </div>

        {/* Gamer-04 */}
        <div className={`absolute top-[270px] left-[18%] w-[200px] h-[150px] p-[6px] rounded-[30px] bg-[#5d6680] `}>
            <img src="/img1.png" alt="img1" className={`w-full h-full shadow-secondary shadow-xl`} />

            <div className={`absolute top-[97px] right-[18%]`}>
              <h1 className={` font-bold text-[18px] leading-[30px] text-white `}>The Upside Down</h1>
            </div>
        </div>

        {/* Gamer-05 */}
        <div className={`absolute top-10 right-[18%] w-[200px] h-[150px] p-[6px] rounded-[30px] bg-[#5d6680]   justify-center`}>
            <img src="/img2.png" alt="img2" className={`w-full h-full shadow-secondary shadow-xl`} />
            <div className={`absolute top-[97px] right-[32%]`}>
              <h1 className={` font-bold text-[18px] leading-[30px] text-white `}>Hawkins Labs</h1>
            </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
