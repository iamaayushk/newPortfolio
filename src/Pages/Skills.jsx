import React, { Suspense, lazy } from 'react'
import {useNavigate} from 'react-router-dom'
import GlowingCard from '../Components/ui/Glowingcard';


function Skills() {
  const navigate = useNavigate();
  const mainPage = () => {
    navigate('/');
  }

  return (

    <div className="w-full min-h-screen bg-black px-10 py-10 mt-20">
      
      <div className=" mb-10 relative z-20 bg-gradient-to-b text-center from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        My Tech Arsenal
      </div>
      
        <GlowingCard />
      
    </div>

  )
}

export default Skills
