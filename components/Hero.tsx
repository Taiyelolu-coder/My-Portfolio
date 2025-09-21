"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-28 md:pt-32 bg-[#ececec]">
      {/* Left */}
      <div className="max-w-lg">
        <p className="text-gray-700 font-semibold text-2xl">Hello, I&apos;m</p>
        <h1 className="text-5xl font-extrabold text-[#cc5500]">Taiwo Alayande</h1>
        <h2 className="text-2xl text-gray-700 mt-2">
          Professional Web Developer
        </h2>
        <p className="mt-4 text-gray-500">
          I specialize in crafting modern, responsive, and user-friendly web
          experiences for businesses and individuals.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#040d31] text-white rounded-lg shadow-md font-bold">
          Hire Me
        </button>
        
                {/* Social Links */}
                <div className="flex space-x-6 mt-4 md:mt-10 text-[#0d0d0e]">
                  <a
                    href="https://github.com/Taiyelolu-coder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/taiwo-alayande08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition-colors"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                </div>
      </div>

      {/* Right */}
      <div className="w-[50%] mt-10 md:mt-0 p-5">
      <Image
          src="/HeroImage.png"
          alt="Profile"
          width={500}
          height={500}
          className="w-[90%] shadow-[0_20px_50px_-10px_[#ececec]]"
        />
      </div>
    </section>
  );
}
