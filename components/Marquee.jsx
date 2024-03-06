import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="h-[50vh] py-[5vw] px-1 w-full rounded-tl-3xl rounded-tr-3xl bg-[rgb(0,77,67)]">
      <div className="border-t-[2px]  border-b-[2px] border-t-orange-50 border-b-orange-50 overflow-hidden   gap-10 flex ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="uppercase whitespace-nowrap font-semibold text-[15vw] font-['Neue_Montreal_Regular']"
        >
          WE Are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="uppercase whitespace-nowrap font-semibold text-[15vw] font-['Neue_Montreal_Regular']"
        >
          WE Are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="uppercase whitespace-nowrap font-semibold text-[15vw] font-['Neue_Montreal_Regular']"
        >
          WE Are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
