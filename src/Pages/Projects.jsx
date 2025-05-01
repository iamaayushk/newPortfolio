import React from 'react'
import HeroParallaxDemo from '../Components/ui/Products';
import AnimatedTestimonials from '../Components/ui/AnimatedTestimonial';

const defaultTestimonials = [
    {
      src: "/fintrix.webp",
      title: "Fintrix – AI-Powered Personal Finance Advisor",
      techStack: ["React.js", "Tailwind CSS", "MongoDB", "Express.js", "Node.js", "Python", "LLaMA 3", "Streamlit","Chart.js"]
    },
    {
      src: "/DesignStoreDash.webp",
      title: "Design Store Dashboard ",
      techStack: ["HTML", "CSS", "Javascript"]
    },
    {
      src: "/uberclone.png",
      title: "Uber Clone – Ride Booking Web App",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mapbox API", "Tailwind CSS"]
    },
    {
      src: "/Moviemania.webp",
      title: "MovieMania – Movie Discovery Platform",
      techStack: ["React.js", "TMDB API", "Tailwind CSS", "Axios"]
    },
    {
      src: "/constella.webp",
      title: "The Interactive Constellation Weaver – Creative Story Builder",
      techStack: ["MERN Stack", "Canvas API", "Tailwind CSS"]
    },
    {
      src: "/shapexploreDash.webp",
      title: "ShapeXplore Dashboard – Gym Management System",
      techStack: [ "HTML", "CSS", "JavaScript"]
    }
  ];
  
  

function Projects() {


    return (

        <div className="w-full min-h-screen bg-black px-2 py-5">

            <div>
                <h1 className="text-4xl font-bold text-white text-center mb-10 ">My Project Section </h1>


            </div>
            <HeroParallaxDemo />
            <div>

            <AnimatedTestimonials testimonials={defaultTestimonials}  />
            </div>


        </div>
    )
}

export default Projects;
