import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#040d31] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Taiyelolu-coder. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
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
    </footer>
  );
}
