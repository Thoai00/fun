'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGamepad } from 'react-icons/fa';

interface IconStyle {
  top: string;
  left: string;
}

// Function to generate the random positions
const generateRandomStyles = (): IconStyle[] => {
  return [...Array(15)].map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));
};

export default function FloatingIcons() {
  const [iconStyles, setIconStyles] = useState<IconStyle[]>([]);

  // Runs ONLY after the component mounts on the client.
  useEffect(() => {
    setIconStyles(generateRandomStyles());
  }, []);

  // Server renders 'null'. Client renders the icons after mount.
  if (iconStyles.length === 0) {
    return null; 
  }

  return (
    <>
      {iconStyles.map((style, i) => (
        <motion.div
          key={i}
          className="absolute text-[#FF6B6B]/10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.2, 0],
            scale: [0, 1, 0],
            rotate: [0, 180],
            y: [0, -30, 0]
          }}
          transition={{
            // Math.random() is safe here as it's used for client-side animation properties
            duration: 4 + Math.random() * 5, 
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          style={style} // Uses the client-generated random style
        >
          <FaGamepad className="text-4xl" />
        </motion.div>
      ))}
    </>
  );
}