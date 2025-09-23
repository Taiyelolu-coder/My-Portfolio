"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-[#040d31] text-white">
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I’m{" "}
          <span className="font-semibold text-[#cc5500]">Taiwo Alayande</span>, a
          passionate freelance web designer and developer dedicated to crafting
          modern, responsive, and user-friendly websites. With a strong eye for
          design and technical precision, I transform ideas into digital
          experiences that empower brands and engage users.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#cc5500]">
            What I Do
          </h3>
          <ul className="space-y-3 text-lg text-gray-200">
            <li>✨ Responsive Web Design & Development</li>
            <li>⚡ Frontend Development with React & Next.js</li>
            <li>🛠️ Backend Development with Node.js & Express</li>
            <li>🎨 UI/UX Design with a focus on usability</li>
            <li>🚀 Performance Optimization & SEO</li>
          </ul>
        </motion.div>

        {/* Experience / Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "5+", label: "Projects Completed" },
            { number: "3+", label: "Happy Clients" },
            { number: "10+", label: "Tech Stacks" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h4 className="text-3xl font-bold text-[#cc5500]">
                {item.number}
              </h4>
              <p className="text-sm text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            href="/#contact"
            className="px-8 py-3 border border-[#cc5500] text-[#cc5500] font-semibold rounded-lg shadow-md hover:bg-[#cc5500] hover:text-white transition-all duration-300"
          >
            Let’s Work Together
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
