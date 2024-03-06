import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import Yellow from "@/components/Yellow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <LandingPage />
      <Marquee/>
      <Yellow/>
    </div>
  )
}
