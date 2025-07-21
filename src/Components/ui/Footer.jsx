import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Aayush Kumar</h3>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/iamaayushk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aayush-kumar-singh-/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              LinkedIn
            </a>
            <a href="https://x.com/aayushkr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              Twitter
            </a>
            <a href="https://leetcode.com/u/imaayush_k/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            Leetcode
            </a>

          </div>  
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Aayush Kumar SIngh. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
