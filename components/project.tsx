"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ProjectType = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl,url }: ProjectType) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className="group  mb-3 sm:mb-8 last:mb-0"
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
    >
      <a target="_blank" href={url}>
      <section className="rounded-lg hover:bg-gray-200 group-even:pl-8  transition   relative bg-gray-100 max-w-[42rem] border border-black/5  overflow-hidden sm:pr-8 sm:h-[28rem]">
        <div className="h-full flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-[50%] group-even:ml-[16rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li
                className="bg-black/[0.7] rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className=" absolute top-8 -right-40 sm:w-[28.25rem] w-[20rem]  rounde-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] transition group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
          src={imageUrl}
          alt={title}
          quality={95}
          />
      </section>
          </a>
    </motion.div>
  );
};

export default Project;
