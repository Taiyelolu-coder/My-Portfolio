"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "NESA Africa",
      description:
        "A live website project built with Next.js, Typescript, TailwindCSS, and Framer Motion to allow users of different roles to register as volunteers, judges, nominate and vote individuals, organisations and communities who are making impact in education across Africa.",
      image: "/nesa.png",
      link: "https://nesa.africa/",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "E-Commerce App",
      description:
        "A cloned e-commerce platform with product listings, and a shopping cart functionality.",
      image: "/Desserts.png",
      link: "https://milestoneproject2-desserts.vercel.app/",
      github: "https://github.com/Taiyelolu-coder/Milestoneproject2-Desserts",
    },
    {
      title: "Calculator App",
      description:
        "A simple calculator app built with vanilla Javascript. Accurate in calculations and user-friendly.",
      image: "/Calculator.png",
      link: "https://calculator-psi-vert.vercel.app/",
      github: "https://github.com/Taiyelolu-coder/Calculator",
    },
    // {
    //   title: "Country-clone App",
    //   description:
    //     "This project was done using HTML, CSS, and JavaScript to render countries of the world. It has dark and light theme, showing the name, continent and region of each country",
    //   image: "/country.png",
    //   link: "https://milestoneproject2-country.vercel.app/",
    //   github: "https://github.com/Taiyelolu-coder/Milestoneproject2-Country.git",
    // },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "A personal portfolio built with Next.js, TailwindCSS, and Framer Motion to showcasze my skills and work.",
    //   image: "/projects/portfolio.png",
    //   link: "https://yourportfolio.com",
    //   github: "https://github.com/yourusername/portfolio",
    // },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "A personal portfolio built with Next.js, TailwindCSS, and Framer Motion to showcase my skills and work.",
    //   image: "/projects/portfolio.png",
    //   link: "https://yourportfolio.com",
    //   github: "https://github.com/yourusername/portfolio",
    // },
  ];

  return (
    <section className="min-h-screen px-6 md:px-20 py-20 bg-[#ececec] text-[#040d31]">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-12 mt-12 text-center text-[#cc5500]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            {/* Project Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#040d31] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Links */}
              <div className="flex space-x-4">
                <Link
                  href={project.link}
                  target="_blank"
                  className="px-4 py-2 bg-[#040d31] text-white rounded-md font-medium hover:bg-[#cc5500] transition"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 border border-[#040d31] text-[#040d31] rounded-md font-medium hover:bg-[#cc5500] hover:text-white transition"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
