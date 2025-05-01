import React from 'react';

const Logo = () => {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 250 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-105 transition-transform duration-300"
    >
      <text
        x="20"
        y="40"
        fill="url(#grad1)"
        fontSize="25"
        fontFamily="'Orbitron', sans-serif"
        fontWeight="bold"
        letterSpacing="1"
        className='cursor-pointer'
      >
        Aayush
      </text>


      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(98.4% 0.019 200.873)" /> 
          <stop offset="100%" stopColor="oklch(45% 0.085 224.283)" /> 
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
