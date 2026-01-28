'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPlay, FaArrowRight, FaTicketAlt, FaStar, FaPause } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Add state to store window dimensions safely
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);

  // Parallax effect for text on scroll
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Track mouse and window size safely
  useEffect(() => {
    // Set initial size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const floatingElements = [
    { id: 1, icon: FaStar, top: '15%', left: '10%', color: '#FFCA3A', factor: 20 },
    { id: 2, icon: FaStar, top: '25%', left: '85%', color: '#FF6B6B', factor: -25 },
    { id: 3, icon: FaStar, top: '75%', left: '15%', color: '#1982C4', factor: 30 },
    { id: 4, icon: FaStar, top: '60%', left: '90%', color: '#8AC926', factor: -15 },
  ];

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* 1. VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/kids.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#0a0a10]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      </div>

      {/* 2. INTERACTIVE PARALLAX ELEMENTS */}
      {floatingElements.map((el) => {
        const Icon = el.icon;
        return (
          <motion.div
            key={el.id}
            className="absolute z-10 hidden md:block"
            style={{ 
              top: el.top, 
              left: el.left,
              // Use windowSize state instead of window global
              x: (mousePosition.x / windowSize.width - 0.5) * el.factor,
              y: (mousePosition.y / windowSize.height - 0.5) * el.factor,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ color: el.color }}
              className="text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            >
              <Icon />
            </motion.div>
          </motion.div>
        );
      })}

      {/* 3. HERO CONTENT */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            ⭐ The #1 Family Destination
          </motion.span>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
            <span className="block">Experience The</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFCA3A] via-[#FF6B6B] to-[#8AC926] animate-gradient-x">
              Ultimate Fun
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Unleash the joy in a world of thrilling rides and neon dreams. 
            Your adventure starts the moment you step in.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <motion.a
              href="#tickets"
              className="group relative px-10 py-5 bg-[#FF6B6B] text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(255,107,107,0.3)] overflow-hidden"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <FaTicketAlt className="text-xl" />
              <span>BOOK TICKETS</span>
            </motion.a>
            
            <motion.a
              href="#explore"
              className="px-10 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/30 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>EXPLORE WORLD</span>
              <FaArrowRight />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* 4. BOTTOM BAR CONTROLS */}
      <div className="absolute bottom-10 left-0 w-full px-10 flex justify-between items-end z-20">
        <div className="flex flex-col items-center gap-4">
            <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 to-white/100 overflow-hidden relative">
                <motion.div 
                    animate={{ y: [0, 80] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-full h-1/2 bg-gradient-to-b from-transparent to-[#FF6B6B]" 
                />
            </div>
            <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        </div>

        <button
          onClick={toggleVideo}
          className="relative w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 group hover:bg-[#FF6B6B] transition-colors duration-500"
        >
          {isPlaying ? <FaPause className="text-white" /> : <FaPlay className="text-white ml-1" />}
          
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="32" cy="32" r="30"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="188"
              className="opacity-20"
            />
            <motion.circle
              cx="32" cy="32" r="30"
              fill="none"
              stroke="#FF6B6B"
              strokeWidth="2"
              strokeDasharray="188"
              animate={{ strokeDashoffset: isPlaying ? [188, 0] : 188 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </button>
      </div>
    </section>
  );
}