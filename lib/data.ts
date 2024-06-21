import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Kharkiv, Ukraine",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Web Developer",
    location: "Kharkiv, Ukraine",
    description:
      "During 18 months, I've been working as a web developer, building web based solutions for multiple projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "software engineer",
    location: "Almeria, Spain",
    description:
      "As a software engineer. I build software solutions to manage warehouses like. I've participated in building warehouse solution for companies like Samsung, Element Logic and Dell.  My stack includes .NET, Node.JS, React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to new challenges.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "DWMaroc",
    description:
      "DWMaroc is a Next.js-powered platform that simplifies access to free online courses. It integrates Sanity.io for seamless content management and features a Telegram bot for instant updates via webhooks. The platform has 10k+ active users.",
    tags: ["React", "Next.js","Sanity.io" ,"react query", "Tailwind", "web sockets"],
    imageUrl: corpcommentImg,
    url:"https://www.dwmaroc.com/"
  },
  {
    title: "Start wave trading",
    description:
      "Designed and built an intuitive user interface for a trading signals provider.",
    tags: ["React", "Tailwind", "Shadcn"],
    imageUrl: rmtdevImg,
    url:"https://www.startwavetrading.com/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Three.js",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;