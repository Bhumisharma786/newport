import React, { useEffect, useState } from 'react';

const CustomCursor = ({ isInWormhole = false }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId;
    
    const updateCursor = (e) => {
      setPosition({ x: e.clientX - 30, y: e.clientY - 30 });
      setIsMoving(true);
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 100);
    };

    document.addEventListener('mousemove', updateCursor);
    
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      clearTimeout(timeoutId);
    };
  }, []);

  const getAstronautEmoji = () => {
    if (isInWormhole) return '🚀'; // Rocket when in wormhole
    if (isMoving) return '🧑‍🚀'; // Moving astronaut
    return '👨‍💻'; // Sitting with laptop when idle
  };

  return (
    <div 
      className="custom-cursor"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) ${isInWormhole ? 'scale(1.5) rotate(45deg)' : 'scale(1)'}`,
        transition: isInWormhole ? 'transform 0.5s ease' : 'transform 0.05s ease-out'
      }}
    >
      <div className="astronaut">
        {getAstronautEmoji()}
      </div>
    </div>
  );
};

export default CustomCursor;