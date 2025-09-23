"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar (only visible on mobile) */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#fff] flex items-center justify-between px-6 py-4 z-50">
        <h1 className="text-2xl font-extrabold text-[#040d31]">Taiyelolu-coder</h1>
        <button onClick={() => setIsOpen(true)}>
          <FiMenu className="w-10 h-10 font-extrabold text-black" />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <motion.div
        className="fixed top-0 left-0 h-full w-64 bg-[#040d31] text-white z-50 p-6 flex flex-col"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        {/* Close button */}
        <button
          className="self-end mb-6"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-7 h-7" />
        </button>

        {/* Links */}
        <nav className="flex flex-col space-y-6 text-2xl font-semibold">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#cc5500]">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#cc5500]">
            About
          </Link>
          <Link href="/techstack" onClick={() => setIsOpen(false)} className="hover:text-[#cc5500]">
            Tech Stack
          </Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-[#cc5500]">
            Portfolio
          </Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-[#cc5500]">
            Contact
          </Link>
        </nav>

        {/* Footer (optional) */}
        <div className="mt-auto text-sm text-gray-400">
          © {new Date().getFullYear()} Taiwo Alayande
        </div>
      </motion.div>
    </>
  );
}
