'use client';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1)} className={`flex md:flex-row flex-col gap-4`}>
    <img src={imgUrl} alt="new-feed" className={`md:w-[270px] w-full h-[250px] object-cover rounded-3xl bg-[#323f5d]`} />
    <div className={`flex w-full justify-between items-center`}>
      <div className={`flex-1 md:ml-[62px] flex flex-col max-w-[650px]`}>

        <h1 className={`lg:text-[42px] text-[26px] text-white font-normal `}>{title}</h1>
        <p className={`mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white`}>{subtitle}</p>
      </div>

      <div className={`lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-white border-[2px] hover:bg-slate-400 cursor-pointer`}>
        <img src="/arrow.svg" alt="link" className={`w-[30%] h-[30%] object-contain`} />
      </div>
    </div>

  </motion.div>
);

export default InsightCard;
