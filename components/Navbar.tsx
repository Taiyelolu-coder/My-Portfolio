"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#fff] shadow-md">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-3xl font-extrabold text-[#040d31]">Taiyelolu-Coder</h1>
        <ul className="hidden md:flex space-x-8 font-bold text-[#757a8f]">
          <li><Link href="#home" className="hover:text-[#5d5e64]">Home</Link></li>
          <li><Link href="#about" className="hover:text-[#5d5e64]">About</Link></li>
          <li><Link href="#services" className="hover:text-[#5d5e64]">Services</Link></li>
          <li><Link href="#portfolio" className="hover:text-[#5d5e64]">Portfolio</Link></li>
          <li><Link href="#pricing" className="hover:text-[#5d5e64]">Pricing</Link></li>
          <li><Link href="#experience" className="hover:text-[#5d5e64]">Experience</Link></li>
        </ul>
      </div>
    </nav>
  );
}
