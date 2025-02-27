import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const NotFound = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: Math.max(10, Math.min(90, prev.x + (Math.random() - 0.5) * 10)),
        y: Math.max(10, Math.min(70, prev.y + (Math.random() - 0.5) * 10))
      }));
      setRotation(prev => prev + (Math.random() - 0.5) * 30);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Stars background */}
      {[...Array(50)].map((_, i) => (
        <div 
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animation: `twinkle ${Math.random() * 3 + 1}s ease-in-out infinite alternate`
          }}
        />
      ))}
      
      {/* Lost astronaut */}
      <div 
        className="absolute"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: `rotate(${rotation}deg)`,
          transition: 'all 2s ease-out'
        }}
      >
        <div className="relative w-16 h-24">
          {/* Astronaut helmet */}
          <div className="absolute w-12 h-12 bg-white rounded-full top-0 left-2 z-10 flex items-center justify-center">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-red-500 rounded-full absolute top-3 right-3 animate-ping" />
              <div className="w-2 h-1 bg-white rounded-full absolute top-5 left-2 rotate-12" />
              <div className="w-2 h-1 bg-white rounded-full absolute top-6 left-4" />
            </div>
          </div>
          
          {/* Astronaut body */}
          <div className="absolute w-16 h-16 bg-white rounded-lg top-8 left-0">
            <div className="absolute w-3 h-6 bg-blue-500 top-2 left-2" />
            <div className="absolute w-3 h-8 bg-gray-300 rounded-full top-10 left-1 rotate-12 z-0" />
            <div className="absolute w-3 h-8 bg-gray-300 rounded-full top-10 right-1 -rotate-12 z-0" />
            <div className="absolute w-4 h-2 bg-red-500 top-3 right-2" />
          </div>
        </div>
      </div>
      
      {/* Planet */}
      <div className="absolute bottom-6 left-6 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center opacity-80">
        <div className="w-20 h-6 bg-green-400 rounded-full absolute top-6" />
        <div className="w-10 h-4 bg-green-400 rounded-full absolute bottom-6 right-4" />
        <div className="w-4 h-4 bg-gray-300 rounded-full absolute top-4 right-6" />
      </div>

      {/* 404 Text */}
      <div className="z-10 text-center">
        <h1 className="text-8xl font-bold text-red-500 animate-bounce">404</h1>
        <div className="mt-4 text-2xl font-light">
          <p className="mb-1">MISSION CONTROL, WE HAVE A PROBLEM!</p>
          <p className="text-blue-300">This page is lost in space...</p>
        </div>
        
        <p className="mt-6 text-gray-400 max-w-md">It seems the coordinates you were looking for don't exist in our universe. Let's get you back to the mothership.</p>
        
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all duration-300 flex items-center mx-auto">
          <Link to="/" className="mr-2">Return to Home Base</Link>
          <span className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default NotFound;
