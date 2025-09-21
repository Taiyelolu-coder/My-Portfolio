import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiJavascript, SiTypescript, SiExpress } from "react-icons/si";

export default function TechStackPage() {
  const techStack = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-12 h-12" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-12 h-12" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 w-12 h-12" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-12 h-12" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-12 h-12" /> },
    { name: "React", icon: <FaReact className="text-cyan-500 w-12 h-12 animate-spin-slow" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white w-12 h-12" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-12 h-12" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-12 h-12" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-white w-12 h-12" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 w-12 h-12" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-900 dark:text-white w-12 h-12" /> },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-[white] text-[#040d31]"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#cc5500]">My Tech Stack</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center bg-[#0d0d0e] text-white backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {tech.icon}
            <span className="mt-3 text-lg font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
