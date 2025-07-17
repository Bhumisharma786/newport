import React, { useEffect, useState, useRef } from 'react';

const STAR_COLORS = [
  '#fff', '#b3caff', '#a3a8ff', '#e0e7ff', '#c7bfff', '#7ecfff', '#b8a3ff', '#e6e6fa', '#b0e0ff', '#d1c4e9', '#c5cae9', '#b2ebf2', '#e1bee7', '#bbdefb', '#e3f2fd', '#d0d7ff', '#a0bfff', '#c0cfff', '#e0e7ff'
];

const StarField = ({ density = 600, background = 'black' }) => {
  const [stars, setStars] = useState([]);
  const animationRef = useRef();

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < density; i++) {
      const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
      const size = Math.random() > 0.97 ? 2 : Math.random() > 0.8 ? 1.2 : 0.7;
      const opacity = Math.random() * 0.5 + 0.5;
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        color,
        opacity,
        speed: 0.05 + Math.random() * 0.15
      });
    }
    setStars(newStars);
  }, [density]);

  useEffect(() => {
    function animate() {
      setStars(prevStars => prevStars.map(star => {
        let newY = star.y + star.speed;
        if (newY > 100) newY = 0;
        return { ...star, y: newY };
      }));
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0" style={{ background }}>
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: star.color,
            opacity: star.opacity,
            filter: `blur(${star.size > 1.5 ? 1 : 0}px)`
          }}
        />
      ))}
      {/* Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '2px',
            height: '2px',
            background: '#fff',
            opacity: 0.8,
            animation: `shooting-star 3s linear infinite`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

export default StarField;