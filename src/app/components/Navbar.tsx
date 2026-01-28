'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPhone, FaBars, FaTimes, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type NavItem = { label: string; href: string };
const navItems: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contacts', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'mt-4 px-4' // Floating effect when scrolled
          : 'mt-0 px-0'
      }`}
    >
      <div 
        className={`mx-auto transition-all duration-500 relative overflow-hidden ${
          scrolled 
            ? 'max-w-6xl rounded-2xl bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 py-2' 
            : 'max-w-full bg-gradient-to-r from-[#1a1020] via-[#0a0a10] to-[#1a1020] py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <motion.a 
            href="/"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/s1.jpg"
                alt="Logo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 border-2 rounded-xl transition-colors ${scrolled ? 'border-[#FF6B6B]/20' : 'border-white/20'}`} />
            </div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              BRAND<span className="text-[#FF6B6B]">NAME</span>
            </span>
          </motion.a>

          {/* DESKTOP NAVIGATION (Floating Pill Style) */}
          <nav className="hidden lg:flex items-center bg-black/5 dark:bg-white/5 p-1 rounded-full relative">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative z-10 px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                  hoveredIndex === index 
                    ? 'text-white' 
                    : scrolled ? 'text-gray-600' : 'text-white/80'
                }`}
              >
                {item.label}
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-[#FF6B6B] rounded-full -z-10 shadow-lg shadow-[#FF6B6B]/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* ACTION BUTTONS */}
          <div className="hidden md:flex items-center space-x-3">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
              scrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-white'
            }`}>
              <FaPhone className="text-[#FF6B6B] text-xs" />
              <span className="text-sm font-bold">+880100 000000</span>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 rounded-full bg-[#FF6B6B] text-white text-sm font-bold shadow-lg shadow-[#FF6B6B]/20 hover:shadow-[#FF6B6B]/40 transition-all"
            >
              Book Now
            </motion.a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-xl transition-all ${
              scrolled ? 'bg-gray-100 text-gray-900' : 'bg-white/10 text-white'
            }`}
          >
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 p-4 bg-[#0a0a10] border border-white/10 rounded-3xl shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-2xl hover:bg-white/5 text-white/90 font-medium flex items-center justify-between group"
                >
                  {item.label}
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a href="#location" className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 text-white text-sm font-bold border border-white/10">
                  <FaMapMarkerAlt /> Map
                </a>
                <a href="#contact" className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#FF6B6B] text-white text-sm font-bold">
                  <FaCalendarAlt /> Book
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}