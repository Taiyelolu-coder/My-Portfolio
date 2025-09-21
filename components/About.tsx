import Link from "next/link";

export default function AboutPage() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-[#040d31] text-white"
    >
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          I’m <span className="font-semibold text-[#cc5500]">Taiwo Alayande</span>, a passionate
          freelance web designer and developer dedicated to crafting modern,
          responsive, and user-friendly websites. With a strong eye for design
          and technical precision, I transform ideas into digital experiences
          that empower brands and engage users.
        </p>

        {/* Skills */}
        <h3 className="text-2xl font-semibold mb-4 ">What I Do</h3>
        <ul className="space-y-3 text-lg">
          <li>✨ Responsive Web Design & Development</li>
          <li>⚡ Frontend Development with React & Next.js</li>
          <li>🛠️ Backend Development with Node.js & Express</li>
          <li>🎨 UI/UX Design with a focus on usability</li>
          <li>🚀 Performance Optimization & SEO</li>
        </ul>

        {/* Call to Action */}
        <div className="mt-10">
          <Link
            href="/#contact"
            className="px-8 py-3 border border-[#cc5500] text-[#cc5500] font-semibold rounded-lg shadow-md hover:bg-gray-100"
          >
            Let’s Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}
