'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaGamepad, FaCalendarAlt, FaPlaystation, FaStar, FaMapMarkerAlt, FaChevronRight, FaClock, FaUsers } from 'react-icons/fa';

const games = [
  { id: 1, title: "Spider-Man 2", image: "/s1.jpg", theme: "#FF0000" },
  { id: 2, title: "God of War", image: "/god1.jpg", theme: "#00E5FF" },
  { id: 3, title: "Horizon West", image: "/games/horizon.jpg", theme: "#00FFCC" },
  { id: 4, title: "The Last of Us", image: "/games/tlou.jpg", theme: "#6BFF6B" },
];

export default function PS5BookingSection() {
  const [selectedGame, setSelectedGame] = useState(0);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isVibrating, setIsVibrating] = useState(false);

  const handleButtonPress = (button: string) => {
    setActiveButton(button);
    setIsVibrating(true);
    setTimeout(() => {
      setActiveButton(null);
      setIsVibrating(false);
    }, 150);
    
    if (button === 'right' || button === 'circle') setSelectedGame(prev => (prev + 1) % games.length);
    if (button === 'left' || button === 'square') setSelectedGame(prev => (prev - 1 + games.length) % games.length);
  };

  return (
    <section className="relative py-24 px-4 bg-[#0a0a10] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            backgroundColor: [games[selectedGame].theme + '10', '#FF6B6B10', games[selectedGame].theme + '10'],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 transition-colors duration-1000"
        />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B6B]/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <FaPlaystation className="text-[#0070D1] animate-pulse" />
            <span className="text-sm font-black tracking-[0.3em] text-white/70">PRO GAMING LOUNGE</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 italic tracking-tighter">
            READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]">PLAY?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* INTERACTIVE CONTROLLER SECTION */}
          <motion.div
            animate={isVibrating ? { x: [0, -2, 2, -2, 0] } : {}}
            transition={{ duration: 0.1 }}
            className="relative order-2 lg:order-1 flex justify-center"
          >
            {/* The "Console" UI */}
            <div className="relative w-full max-w-[500px] aspect-square bg-[#151522] rounded-[3rem] p-8 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              
              {/* Screen Display */}
              <div className="relative h-2/3 w-full rounded-2xl overflow-hidden border-4 border-black group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedGame}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={games[selectedGame].image} 
                      alt="Game"
                      fill
                      className="object-cover"
                    />
                    {/* Screen Glow */}
                    <div 
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{ boxShadow: `inset 0 0 80px ${games[selectedGame].theme}90` }}
                    />
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
                  <motion.h3 
                    key={`title-${selectedGame}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-2xl font-black text-white uppercase italic"
                  >
                    {games[selectedGame].title}
                  </motion.h3>
                </div>
              </div>

              {/* CONTROLS AREA - Mobile Optimized */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {/* D-PAD Left */}
                <div className="flex items-center justify-center gap-2">
                  <ControllerButton active={activeButton === 'left'} onClick={() => handleButtonPress('left')} direction="left" />
                  <div className="flex flex-col gap-2">
                    <ControllerButton active={activeButton === 'up'} onClick={() => handleButtonPress('up')} direction="up" />
                    <ControllerButton active={activeButton === 'down'} onClick={() => handleButtonPress('down')} direction="down" />
                  </div>
                  <ControllerButton active={activeButton === 'right'} onClick={() => handleButtonPress('right')} direction="right" />
                </div>

                {/* Face Buttons Right */}
                <div className="flex items-center justify-center gap-2">
                    <div className="flex flex-col items-center gap-4">
                        <ControllerButton active={activeButton === 'triangle'} onClick={() => handleButtonPress('triangle')} type="triangle" label="△" />
                        <div className="flex gap-4">
                            <ControllerButton active={activeButton === 'square'} onClick={() => handleButtonPress('square')} type="square" label="□" />
                            <ControllerButton active={activeButton === 'circle'} onClick={() => handleButtonPress('circle')} type="circle" label="○" />
                        </div>
                        <ControllerButton active={activeButton === 'cross'} onClick={() => handleButtonPress('cross')} type="cross" label="✕" />
                    </div>
                </div>
              </div>
            </div>

            {/* Floating PS Logo Accessory */}
            <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-10 -right-5 w-24 h-24 bg-gradient-to-br from-[#0070D1] to-[#00E5FF] rounded-2xl flex items-center justify-center shadow-[0_0_30px_#0070D1] hidden md:flex"
            >
                <FaPlaystation className="text-white text-4xl" />
            </motion.div>
          </motion.div>

          {/* BOOKING FORM SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">Secure Your <span className="text-[#FF6B6B]">Session</span></h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input type="text" placeholder="Full Name" className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#FF6B6B] outline-none transition-all" />
                </div>
                <div className="relative">
                    <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input type="date" className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#FF6B6B] outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="relative">
                    <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <select className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white appearance-none outline-none">
                        <option>1 Hour Session</option>
                        <option>2 Hours (Save 10%)</option>
                        <option>Full Day Pass</option>
                    </select>
                </div>
                <div className="bg-[#FF6B6B] rounded-2xl flex flex-col items-center justify-center text-white">
                    <span className="text-xs opacity-80 uppercase font-bold">Total</span>
                    <span className="text-2xl font-black">Tk 250</span>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 py-5 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-2xl text-white font-black text-xl tracking-tighter flex items-center justify-center gap-3 shadow-[0_15px_40px_rgba(255,107,107,0.4)]"
              >
                LEVEL UP NOW
                <FaChevronRight />
              </motion.button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-3">
                {[
                    { icon: FaPlaystation, label: "PS5 Pro" },
                    { icon: FaGamepad, label: "DualSense" },
                    { icon: FaStar, label: "4K HDR" }
                ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center group hover:bg-white/10 transition-all cursor-default">
                        <item.icon className="text-[#FF6B6B] mx-auto text-xl mb-2 group-hover:scale-125 transition-transform" />
                        <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">{item.label}</span>
                    </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Fixed & Styled Controller Button
const ControllerButton = ({ active, onClick, direction, type = 'dpad', label }: any) => {
  const base = "flex items-center justify-center transition-all duration-100 shadow-lg";
  const styles: any = {
    dpad: `w-12 h-12 bg-[#1a1a2e] rounded-xl border-b-4 border-black text-white hover:bg-[#252545] ${active ? 'translate-y-1 border-b-0 bg-[#FF6B6B]' : ''}`,
    triangle: `w-14 h-14 bg-[#1a1a2e] rounded-full border-b-4 border-black text-[#4daa5a] text-xl ${active ? 'translate-y-1 border-b-0 bg-[#4daa5a] text-white' : ''}`,
    circle: `w-14 h-14 bg-[#1a1a2e] rounded-full border-b-4 border-black text-[#e04a45] text-xl ${active ? 'translate-y-1 border-b-0 bg-[#e04a45] text-white' : ''}`,
    square: `w-14 h-14 bg-[#1a1a2e] rounded-full border-b-4 border-black text-[#3a71e0] text-xl ${active ? 'translate-y-1 border-b-0 bg-[#3a71e0] text-white' : ''}`,
    cross: `w-14 h-14 bg-[#1a1a2e] rounded-full border-b-4 border-black text-[#888] text-xl ${active ? 'translate-y-1 border-b-0 bg-white text-black' : ''}`,
  };

  const getRotation = () => {
    if (direction === 'up') return 'rotate-0';
    if (direction === 'right') return 'rotate-90';
    if (direction === 'down') return 'rotate-180';
    if (direction === 'left') return '-rotate-90';
    return '';
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[type]}`}>
      {direction ? <span className={`${getRotation()} text-2xl`}>▲</span> : <b>{label}</b>}
    </button>
  );
};