import { HStack, VStack } from "@chakra-ui/react";
import React from "react";

const Yellow = () => {
  return (
    <div className="w-full  rounded-tl-3xl rounded-tr-3xl pl-10 py-20 text-[#212121] bg-[#CDEA68]">
      <h1 className="leading-none font-['Neue_Montreal_Regular']  text-[4vw]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <HStack  alignItems={"flex-start"} className="border-t-2 font-['Neue_Montreal_Regular']  justify-between border-t-zinc-600   py-3 mt-7">
        <p className="w-[23vw]">What you can expect:</p>
    <VStack spacing={10}>
   
        <p className="w-[23vw]">
          We create tailored presentations to help you persuade your
          colleagues, clients, or investors. Whether it’s live or digital,
          delivered for one or a hundred people,
        </p>
        <p className="w-[23vw]">
          We believe the mix of strategy and design (with a bit of coffee) is
          what makes your message clear, convincing, and captivating
        </p>
    </VStack>
       <div>
        <p className="mb-4"> S:</p>
       {["Instagram","Behance","Facebook","Linkedin"].map((it,i)=>{
       return <ul>  
        <li>
        <a  href="">{it}</a>
        </li>
        
        </ul> 
      })}

       </div>
     

       
       

        
      </HStack>
    </div>
  );
};

export default Yellow;
