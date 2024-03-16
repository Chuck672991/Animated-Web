import React from "react";
import { CgArrowTopRight, CgArrowTopRightO } from "react-icons/cg";
import{motion} from "framer-motion"


function LandingPage() {
  return (
    <div className="h-screen w-full bg-white pt-1">
      <div  className="textstructure mt-36 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return  <div className="masker">
            <div className="w-fit flex items-center">
              {index ===1 && (<motion.div initial={{x:1}} animate={{x:0}} className="w-[7.5vw] h-[4.7vw] relative   rounded-sm bg-green-500"></motion.div>)}
          
            <h1 key={index} className="uppercase tracking-tighter font-semibold leading-[6vw] text-[7vw] font-['Candara']">
              {item}
            </h1>
            </div>
         
          </div>
        })}
      </div>

      <div className="border-t-2 text-md flex  justify-between  py-4 px-8  border-zinc-800 w-full mt-32">
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
          return <p>{item}</p>
        })}
        <div className="flex justify-center items-center gap-1"> 
          <button className="rounded-full border-[1px] border-zinc-600 px-4 tracking-wide font-lignt  text-[1.1vw] py-1 uppercase"> Start The Project</button>
          {/* <div className="w-8 h-8  justify-center items-center rounded-full border-[1px]"> 
          <CgArrowTopRight size={"30px"}/>

          </div> */}
          <CgArrowTopRightO size={"2vw"}/>

        </div>
      </div>
    </div>
  );
}

export default LandingPage;
