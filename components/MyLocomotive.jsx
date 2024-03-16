import React, { useEffect, useState } from "react";
import img1 from "./hero-front.png";
import Image from "next/image";
import $ from "jquery";

const MyLocomotive = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPos(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="hero-container">
        <div
          className="hero-back"
          style={{ backgroundSize: `${100 + scrollPos}px` }}
        >
          <Image src={img1} layout="fill" objectFit="cover" alt="" />
        </div>
        <div className="content">
          <h1>Content goes here</h1>
          <p className="myPara">
            Lorem ipsum dolor sit amet,{" "}
            <span id="oneSpan">
              <img src="" alt="" />
            </span>{" "}
            consectetur adipisicing elit. Vitae inventore a quibusdam maiores
            odit numquam <span></span> sequi aut, vel vero iure nemo eos
            assumenda nihil. Ad quo fuga ipsam illum placeat. Fuga porro,
            <span id="twoSpan"></span> vero ea consectetur dicta unde
            praesentium alias nemo, iusto, <span id="threeSpan"></span>repellat
            qui voluptatem minima. Vero cum, hic fuga aspernatur esse doloremque
            soluta nostrum commodi similique saepe voluptatem praesentium
            aperiam.
          </p>
        </div>
      </div>
      <div className="h-[50vh] w-screen bg-black">
        <div className="w-1/2 ">
          <h1 className="text-8xl text-white ">Helo broo how are y</h1>
        </div>
      </div>
    </>
  );
};

export default MyLocomotive;
