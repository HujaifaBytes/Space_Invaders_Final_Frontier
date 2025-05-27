
import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollOffset, setScrollOffset] = useState({ x: 0, y: 0 });
  const particleIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      // Create particle trail with scroll offset compensation
      const newParticle: Particle = {
        id: particleIdRef.current++,
        x: newPosition.x + scrollOffset.x,
        y: newPosition.y + scrollOffset.y,
        timestamp: Date.now(),
      };

      setParticles(prev => [...prev, newParticle]);
    };

    const handleScroll = () => {
      setScrollOffset({
        x: window.scrollX,
        y: window.scrollY
      });
    };

    // Clean up old particles
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setParticles(prev => prev.filter(particle => now - particle.timestamp < 800));
    }, 50);

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(cleanupInterval);
    };
  }, [scrollOffset]);

  return (
    <>
      {/* Main cursor */}
      <div
        className="cursor-main"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />

      {/* Particle trail */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="cursor-trail-particle"
          style={{
            left: particle.x - scrollOffset.x - 2,
            top: particle.y - scrollOffset.y - 2,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
