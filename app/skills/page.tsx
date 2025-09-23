"use client"; // if you are using App Router
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

export default function TechStackPage() {
  const techStack = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-12 h-12" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-12 h-12" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 w-12 h-12" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 w-12 h-12" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500 w-12 h-12" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-500 w-12 h-12 animate-spin-slow" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white w-12 h-12" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-12 h-12" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 w-12 h-12" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-800 dark:text-white w-12 h-12" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-red-500 w-12 h-12" /> },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-900 dark:text-white w-12 h-12" />,
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-30 md:px-20 py-20 bg-white text-[#040d31]">
        <div className="absolute inset-0 bg-white/70 -z-10 backdrop-blur-md"></div>

      {/* Intro Text */}
      <motion.p
        className="max-w-3xl text-center text-lg font-bold md:text-xl text-gray-600 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Over the years, I’ve built a strong foundation in modern web technologies,
        mastering both frontend and backend development tools. Each technology in
        my stack helps me create efficient, scalable, and user-focused digital
        solutions.
      </motion.p>

      <motion.p
        className="max-w-2xl text-center text-md md:text-lg font-bold text-gray-500 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        From crafting beautiful UIs with{" "}
        <span className="font-semibold text-[#cc5500]">React & Tailwind</span> to
        building powerful APIs with{" "}
        <span className="font-semibold text-[#cc5500]">Node.js & Express</span>,
        I thrive on turning ideas into high-performing applications.
      </motion.p>

        <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-[#cc5500]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Tech Stack
      </motion.h2>


      {/* Tech Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center justify-center bg-[#1e1e2b] text-white border border-[#cc5500] backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ rotate: 2, scale: 1.05 }}
          >
            {tech.icon}
            <span className="mt-3 text-lg font-semibold">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
