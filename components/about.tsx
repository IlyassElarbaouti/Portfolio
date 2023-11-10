"use client"
import React, { useEffect } from 'react'
import {motion} from "framer-motion"
import SectionHeading from './sectionHeading'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
  const {ref} =  useSectionInView({sectionName:"About"})

  return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem]  text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
    <SectionHeading >About Me</SectionHeading>
    <p className="mb-3">
        After graduating with a <span className="font-medium">{" "}Computer science</span> degree
        , I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Typescript, Next.js, Node.js, and PostgreSQL
        </span>
        . I am also familiar with Prisma, react-query and redux. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">3d modeling</span>. I'm also
        learning how to play the piano.
      </p>
    </motion.section>
  )
}

export default About