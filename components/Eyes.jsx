import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate ,setRotate] = useState(0)

  useEffect(()=>{
  window.addEventListener('mousemove',(e)=>{
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let deltaX = mouseX - window.innerWidth/2;
    let deltaY = mouseY - window.innerHeight/2;

    let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);

    setRotate(angle-180)

  })
 })
  return (
    //  bg image wala div
    <div className="w-full overflow-hidden relative h-screen flex justify-center items-center  ">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]  ">
        <div className="absolute top-1/2 flex justify-center items-center  gap-10  left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="h-[23vh] w-[23vh] rounded-full flex justify-center items-center  bg-slate-900 ">
            <div className="h-1/2 w-1/2  rounded-full relative bg-zinc-300">
              <div className="line w-full top-1/2 absolute left-1/2 " style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}>
                <div className="h-4 w-4 rounded-full   bg-zinc-700"></div>
              </div>
            </div>
          </div>
          <div className="h-[23vh] w-[23vh] rounded-full flex justify-center items-center  bg-slate-900 ">
            <div className="h-1/2 w-1/2  rounded-full relative bg-zinc-300">
            <div className="line w-full top-1/2 absolute left-1/2 " style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}>
                <div className="h-4 w-4 rounded-full   bg-zinc-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
