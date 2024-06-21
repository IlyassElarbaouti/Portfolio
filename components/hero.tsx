"use client";
import Image from "next/image";
import portrait from "@/public/portrait.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";
const Hero = () => {

const {ref} =  useSectionInView({sectionName:"Home"})
 const {setActiveSection,setTimeOfLastClick}= useActiveSectionContext()
  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-36">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            transition={{ type: "tween", duration: 0.2 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src={portrait}
              alt="Ilyass portrait"
              quality="95"
              width="192"
              height="192"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ilyass.</span> I'm a{" "}
        <span className="font-bold">software engineer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col-reverse sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
        onClick={()=>{
          setActiveSection("Contact")
          setTimeOfLastClick(Date.now())
        }}
          href="#contact"
          className="group outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>

        <a href="https://www.linkedin.com/in/ilyass-el-arbaouti-75b335201/" target="_blank" className="cursor-pointer borderBlack  outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105 transition bg-white px-7 py-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full">
          <BsLinkedin className="mx-2"/> LinkedIn profile
        </a>
        {/* <a href="/CV.pdf" download className="cursor-pointer group outline-none  hover:bg-gray-50 active:scale-105 focus:scale-110 hover:scale-110 transition bg-white borderBlack px-7 py-3 flex items-center gap-2 rounded-full ">
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a> */}


        {/* <a href="https://github.com/IlyassElarbaouti" target="_blank" className=" cursor-pointer borderBlack  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-50 active:scale-105 transition bg-white p-4 text-[1.35rem] text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full">
          <FaGithubSquare/>
        </a> */}
      </motion.div>
    </section>
  );
};

export default Hero;
