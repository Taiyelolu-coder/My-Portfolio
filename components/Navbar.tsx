"use client";
import MobileSidebar from "./SideBar";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="fixed w-full top-0 z-50 bg-[#fff] shadow-md">
        <div className="flex justify-between items-center px-8 py-4">
          <h1 className="text-3xl font-extrabold text-[#040d31]">Taiyelolu-Coder</h1>
          <ul className="hidden md:flex space-x-8 font-bold text-[#757a8f]">
            <li><Link href="/" className="hover:text-[#5d5e64]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#5d5e64]">About</Link></li>
            {/* <li><Link href="#services" className="hover:text-[#5d5e64]">Services</Link></li> */}
            <li><Link href="/skills" className="hover:text-[#5d5e64]">Skills</Link></li>
            {/* <li><Link href="/contact" className="hover:text-[#5d5e64]">Contact</Link></li> */}
            <li><Link href="/projects" className="hover:text-[#5d5e64]">Projects</Link></li>
          </ul>
        </div>
      </nav>
      <MobileSidebar />
    </header>
  );
}
