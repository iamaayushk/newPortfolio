import React, { Suspense } from 'react';
import { Spotlight } from './Hero';
import Navbar from '../Components/ui/Navbar';
import Footer from '../Components/ui/Footer';
// import { IconHome, IconMessage, IconUser, IconBriefcase } from "@tabler/icons-react";
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


function Home() {
  // const dockItems = [
  //   {
  //     title: "Home",
  //     icon: <IconHome className="h-5 w-5" />,
  //     href: "/",
  //   },
  //   {
  //     title: "About",
  //     icon: <IconUser className="h-5 w-5" />,
  //     href: "/about",
  //   },
  //   {
  //     title: "Projects",
  //     icon: <IconBriefcase className="h-5 w-5" />,
  //     href: "/projects",
  //   },
  //   {
  //     title: "Contact",
  //     icon: <IconMessage className="h-5 w-5" />,
  //     href: "/contact",
  //   },
  // ];

  return (
    <>
      <div className="relative w-full h-screen bg-black border-b-2 border-dotted border-zinc-800">
      <Navbar /> 
      <div id='home'>
        <Spotlight />
      </div>
      </div>
      <div className="relative w-full h-screen bg-black border-b-2 border-dotted border-zinc-800" id='about'>
      <About /> 
      </div>
      <div className="w-full min-h-screen bg-black px-10 py-10 " id='skills'>
          <Skills />
        </div>
        <div className="w-full min-h-screen bg-black px-2 py-10" id='projects'>
        
          <Projects />
      </div>
      <div className="w-full min-h-screen bg-black px-10 py-10 border-t border-neutral-800" id='contact'>
        <div className="mb-10 relative z-20 bg-gradient-to-b text-center from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Connect with me
        </div>
        <Contact/>
      </div>
      

      <div className="rounded-md flex ">
       <Footer />
      </div>
    </>
  );
}

export default Home;