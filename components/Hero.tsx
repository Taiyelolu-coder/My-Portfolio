"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col md:flex-row items-center md:justify-between justify-center px-6 md:px-20 pt-28 md:pt-32 bg-[#ececec]"
    >
      {/* Background image only for mobile */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/HeroImage.png"
          alt="Profile background"
          fill
          className="object-cover opacity-70"
          priority
        />
        {/* Optional overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Left */}
      <motion.div
        className="relative z-10 max-w-lg text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-200 md:text-gray-700 font-semibold text-2xl">
          Hello, I&apos;m
        </p>
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#cc5500]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Taiwo Alayande
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl text-gray-200 md:text-gray-700 mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Professional Web Developer
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-300 md:text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          I specialize in crafting modern, responsive, and user-friendly web
          experiences for businesses and individuals. My passion lies in turning
          complex problems into elegant digital solutions that empower users and
          brands alike.
        </motion.p>

        {/* Call-to-action button */}
        <motion.button
          className="mt-6 px-6 py-3 bg-[#040d31] text-white rounded-lg shadow-md font-bold hover:bg-[#cc5500] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Hire Me
        </motion.button>

        {/* Social Links */}
        <motion.div
          className="flex justify-center md:justify-start space-x-6 mt-4 md:mt-10 text-white md:text-[#0d0d0e]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {[
            {
              href: "https://github.com/Taiyelolu-coder",
              icon: <FaGithub className="w-6 h-6" />,
            },
            {
              href: "https://linkedin.com/in/taiwo-alayande08",
              icon: <FaLinkedin className="w-6 h-6" />,
            },
            {
              href: "https://twitter.com/yourusername",
              icon: <FaTwitter className="w-6 h-6" />,
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cc5500] transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right (desktop image only) */}
      <motion.div
        className="hidden md:flex w-[50%] mt-10 md:mt-0 p-5 justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Image
          src="/HeroImage.png"
          alt="Profile"
          width={500}
          height={500}
          className="w-[90%] shadow-[0_20px_50px_-10px_[#ececec]] hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </section>
  );
}
