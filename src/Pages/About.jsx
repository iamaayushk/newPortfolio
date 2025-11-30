import React from "react";
import img from "../assets/aboutpic.jpg/"; // Adjust the path as necessary
function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full flex-col items-center justify-start  bg-black scroll-mt-20 py-10 sm:py-20 overflow-hidden border-t-1 border-zinc-500"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(0,0,0,0.2)_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)]" />

      {/* Sticky Title */}
      <h2 className="sticky top-0 z-30 mt-0 bg-black bg-opacity-80 px-4 py-4 backdrop-blur-sm bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl text-center">
        About Me
      </h2>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row mt-12 gap-10 z-20 items-center px-6 md:px-10 w-full max-w-6xl">
        {/* Image on the left */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={img}
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Text on the right */}
        <div className="w-full md:w-2/3 text-white text-base sm:text-lg max-w-2xl">
          <p className="mb-4">
            Hello! I'm <strong>Aayush Kumar Singh</strong>, a full-stack developer with a strong passion for building innovative digital experiences.
          </p>
          <p className="mb-4">
            I'm skilled in <strong>React.js, Node.js, Express.js, MongoDB (MERN stack)</strong>, as well as <strong>Java, Python, MySQL</strong>, and <strong>data structures & algorithms</strong>. I also design engaging UIs using <strong>HTML, CSS, Tailwind, and JavaScript</strong>.
          </p>
          <p className="mb-6">
            I'm currently pursuing a B.Tech in CSE from GGSIPU and BS in Data Science from IIT Madras. I'm always excited to collaborate and learn more about cutting-edge technologies.
          </p>

          <div className="w-full flex justify-center sm:justify-start">
            <a
              href="/Resume_Aayush.pdf"
              download
              className="inline-block mt-2 px-6 py-3 bg-sky-700 hover:bg-gray-900 text-white rounded-xl shadow-md transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
