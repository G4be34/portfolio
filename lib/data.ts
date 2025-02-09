import cwcTodoImg from "@/public/cwc.png";
import hshbImg from "@/public/hshb.png";
import aiPropertyListingsImg from "@/public/propertylistings.png";
import safeSpaceImg from "@/public/safespace.png";
import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "I began my journey into Web Development",
    description:
      "Using the amazing guidance of The Odin Project I learned the basics of HTML, CSS and JavaScript along with the fundamentals of web development.",
    icon: React.createElement(IoRocketOutline),
    date: "Sep 2022",
  },
  {
    title: "Graduated from Hack Reactor",
    description:
      "I learned the fundamentals of full-stack web development using React, Node.js, Express and a variety of backend technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2023 - June 2023",
  },
  {
    title: "Attended my first Hackathon",
    description:
      "Working in a team of 5 we developed a full-stack mobile application called SafeSpace for one of the many non-profit organizations who were seeking technical help through oHack.",
    icon: React.createElement(CiMobile4),
    date: "Oct 2023 - Nov 2023",
  },
  {
    title: "Joined the coding group Coding with Callie",
    description:
      "After joining a then small group of coding enthusiasts we each created our own full-stack advanced Todo App, mine was called CWC Todo App.",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - Oct 2024",
  },
  {
    title: "Continuing my passion for coding while job hunting",
    description:
      "Throughout all this time I continue to improve my skills while learning new technologies by working on personal projects and freelance opportunities with a goal of finding a full-time position.",
    icon: React.createElement(GiBullseye),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "AI Property Listings",
    description:
      "A website where users can use an AI search tool to find their ideal rental property with smooth animations created with Framer Motion.",
    tags: ["React", "CSS", "Framer Motion", "Axios"],
    imageUrl: aiPropertyListingsImg,
  },
  {
    title: "High Sierra Harmony Brigade",
    description:
      "My first introduction to WordPress! This is a recreation of a decade-old Harmony Brigade website for those who love all things Barbershop.",
    tags: ["React", "WordPress", "MySQL"],
    imageUrl: hshbImg,
  },
  {
    title: "CWC Todo App",
    description:
      "An advanced todo app with drag-n-drop capabilities, data graphs, user authentication, and calendar functionality.",
    tags: ["React", "NestJs", "PostgreSQL", "TypeScript", "ChakraUI"],
    imageUrl: cwcTodoImg,
  },
  {
    title: "SafeSpace",
    description:
      "A mobile app targeted towards teens in abusive relationships who need a place to go when they need help.",
    tags: ["React Native", "Expo", "SQLite", "TypeScript"],
    imageUrl: safeSpaceImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "WordPress",
  "Next.js",
  "Expo",
  "Node.js",
  "NestJs",
  "Git",
  "Tailwind",
  "Prisma",
  "MySQL",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Chakra UI",
] as const;