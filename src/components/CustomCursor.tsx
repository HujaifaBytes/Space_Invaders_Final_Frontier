
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
  const particleIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use pageX and pageY to account for scrolling
      const newPosition = { x: e.pageX, y: e.pageY };
      setMousePosition(newPosition);

      // Create particle trail at the exact cursor position
      const newParticle: Particle = {
        id: particleIdRef.current++,
        x: e.pageX,
        y: e.pageY,
        timestamp: Date.now(),
      };

      setParticles(prev => [...prev, newParticle]);
    };

    // Clean up old particles
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setParticles(prev => prev.filter(particle => now - particle.timestamp < 800));
    }, 50);

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="cursor-main"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          position: 'absolute',
          pointerEvents: 'none',
          zIndex: 9999,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,255,0.8) 0%, rgba(0,255,255,0.3) 70%, transparent 100%)',
          boxShadow: '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff',
        }}
      />

      {/* Particle trail */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="cursor-trail-particle"
          style={{
            left: particle.x - 2,
            top: particle.y - 2,
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 9998,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#00ffff',
            opacity: Math.max(0, 1 - (Date.now() - particle.timestamp) / 800),
            boxShadow: '0 0 10px #00ffff',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
