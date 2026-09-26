import React from 'react';
import logoImg from '../assets/images/scout-logo.png';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`} style={{ width: size, height: size }}>
       <img 
        src={logoImg}
        alt="49 Corbisier Logo" 
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
