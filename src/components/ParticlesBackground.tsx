import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Define the Particle component
const Particle = ({ x, y, size, color, duration }: { 
  x: number; 
  y: number; 
  size: number; 
  color: string;
  duration: number;
}) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        x, 
        y,
        width: size,
        height: size,
        backgroundColor: color,
      }}
      animate={{
        x: x + (Math.random() * 100 - 50),
        y: y + (Math.random() * 100 - 50),
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
};

const ParticlesBackground = () => {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    setIsDarkMode(document.documentElement.classList.contains('dark'));

    // Create particles
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const particleCount = Math.floor((windowWidth * windowHeight) / 40000); // Adjust density
    
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * windowWidth;
      const y = Math.random() * windowHeight;
      const size = Math.random() * 4 + 1; // 1-5px
      const duration = Math.random() * 10 + 10; // 10-20s
      
      // Different colors for light/dark mode
      const colors = isDarkMode 
        ? 	["#ffffff", "#cbd5e1", "#e2e8f0"] // Blue shades for dark mode
        : ["#60a5fa", "#3b82f6", "#2563eb"];// Lighter blue shades for light mode
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      newParticles.push(
        <Particle 
          key={i} 
          x={x} 
          y={y} 
          size={size} 
          color={color}
          duration={duration}
        />
      );
    }
    
    setParticles(newParticles);
    
    // Update particles on window resize
    const handleResize = () => {
      setParticles([]); // Clear particles
      // Particles will be recreated on next render
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  // Listen for dark mode changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles}
    </div>
  );
};

export default ParticlesBackground;