import React from "react";
import { useNavigate } from "react-router-dom";

export const Spotlight = () => {
  const navigate = useNavigate();

  const projectView = () => {
    navigate("#projects");
  };

  return (
    <div id="home" className="relative w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Aayush Kumar Singh
      </h1>
      <h2 className="text-lg md:text-2xl font-medium mb-2">
        Full Stack Engineer
      </h2>
      <p className="text-base md:text-lg italic text-gray-300 mb-6">
        Code. Create. Repeat.
      </p>

      <button
  onClick={projectView}
  className="px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-800 to-blue-400 hover:from-blue-400 hover:to-blue-800 transition-colors duration-300 rounded-full text-white font-semibold text-lg shadow-lg"
>
  View Projects
</button>


      {/* Optional background grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
    </div>
  );
};
