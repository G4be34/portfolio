"use client"

import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import SectionHeading from './sectionHeading';

export default function About() {
  const { ref } = useSectionInView('About');


  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>

      <p className='mb-3'>
        After learning the basics of{" "}
        <span className="font-medium">HTML, CSS, and JavaScript</span>, I learned I had a
        passion for programming and enrolled in the coding bootcamp {" "} <span className="font-medium">Hack Reactor</span> where I learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB/PostgreSQL
        </span>
        . I am also familiar with TypeScript, React Native and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog.
      </p>
    </motion.section>
  )
}
