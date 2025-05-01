import React, { useState, useEffect } from 'react';
import Logo from './Logo.jsx'; 
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = "block py-2 px-4 text-gray-700 font-sans scroll-smooth dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition";


  return (
    <nav
      className={`fixed top-0 left-0 w-full sm:top-5 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-[95%] border-b sm:border border-gray-700 sm:rounded-4xl z-50 transition-colors duration-300
      ${isScrolled
        ? 'sm:backdrop-blur-md shadow-lg'
        : 'bg-black/90 border-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
         
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={navLinkClasses} onClick={(e) => {e.preventDefault(); document.getElementById('home').scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}}>Home</a>
            <a href="#about" className={navLinkClasses} onClick={(e) => {e.preventDefault(); document.getElementById('about').scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}}>About</a>
            <a href="#skills" className={navLinkClasses} onClick={(e) => {e.preventDefault(); document.getElementById('skills').scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}}>Skills</a>
            <a href="#projects" className={navLinkClasses} onClick={(e) => {e.preventDefault(); document.getElementById('projects').scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}}>Projects</a>
            <a href="#contact" className={navLinkClasses} onClick={(e) => {e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}}>Contact</a>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-3xl text-gray-200 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden px-4 pb-4 pt-2 bg-gray-800 dark:bg-[#040508] transition-all duration-300 space-y-2 w-full rounded-lg shadow-lg">
              <a href="#home" onClick={(e) => {e.preventDefault(); document.getElementById('home').scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}} className={`${navLinkClasses} block text-center`}>Home</a>
              <a href="#about" onClick={(e) => {e.preventDefault(); document.getElementById('about').scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}} className={`${navLinkClasses} block text-center`}>About</a>
              <a href="#skills" onClick={(e) => {e.preventDefault(); document.getElementById('skills').scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}} className={`${navLinkClasses} block text-center`}>Skills</a>
              <a href="#projects" onClick={(e) => {e.preventDefault(); document.getElementById('projects').scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}} className={`${navLinkClasses} block text-center`}>Projects</a>
              <a href="#contact" onClick={(e) => {e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}} className={`${navLinkClasses} block text-center`}>Contact</a>
            </div>
          )}
    </nav>
  );
}

export default Navbar;
