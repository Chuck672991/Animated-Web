'use client'
import Head from "next/head";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import Yellow from "@/components/Yellow";
import Eyes from "@/components/Eyes";
import { useEffect } from "react";
import MyLocomotive from "@/components/MyLocomotive";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
useEffect(() => {
 

  
}, [])

  return (
    <ReactLenis root options={{
      lerp:'0.06',
      duration:'1',
      smoothTouch:true
    }} className="w-full h-screen"
         id="scroll-container">
      <Navbar />
      <LandingPage    />
      <Marquee   />
      <Yellow  />
      <Eyes/>
      <MyLocomotive />

    </ReactLenis>
  )
}
