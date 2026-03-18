"use client";
import LeftPage from "./components/LeftPage";
import RightPage from "./components/RightPage";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);
  return (
    <div className="md:pt-16 bg-black">
      <div className="flex flex-col md:flex-row w-full h-full relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-white/3 font-bold fixed top-60 left-0 text-9xl overflow-hidden"
        >
          <Marquee speed={35} className="overflow-hidden" direction="right">
            Welcome to my portfolio — Frontend Developer — React & Next.js
          </Marquee>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-white/5 font-bold fixed top-96 left-0 text-9xl overflow-hidden"
        >
          <Marquee speed={35} className="overflow-hidden">
            Welcome to my portfolio — Frontend Developer — React & Next.js
          </Marquee>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="hidden md:block"
        >
          <LeftPage />
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="h-full w-full"
        >
          <RightPage />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;

// rgb(234 188 43)
// rgb(52 50 46)
// rgb(25 27 33)
// #272927

// #00b6b6 blue
// #151515 black

// TODO
// * Animation --> Done
// * Local Storage --> Done
// ! Responsive
// * Devide Sections
// ! Deploy
