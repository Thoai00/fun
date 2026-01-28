'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaGamepad, FaFire, FaChild, FaFutbol, FaStar, FaPlayCircle } from 'react-icons/fa';

const categories = [
  { id: 'all', name: 'All Games', icon: <FaGamepad /> },
  { id: 'action', name: 'Action', icon: <FaFire /> },
  { id: 'sports', name: 'Sports', icon: <FaFutbol /> },
  { id: 'kids', name: 'Kids', icon: <FaChild /> },
];

const games = [
  { 
    id: 1, 
    title: "EA Sports FC 25", 
    category: "sports", 
    rating: "4.9", 
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8m6s.webp" 
  },
  { 
    id: 2, 
    title: "Spider-Man 2", 
    category: "action", 
    rating: "5.0", 
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co66qz.webp" 
  },
  { 
    id: 3, 
    title: "Mortal Kombat 1", 
    category: "action", 
    rating: "4.8", 
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6m79.webp" 
  },
  { 
    id: 4, 
    title: "Ratchet & Clank", 
    category: "kids", 
    rating: "4.7", 
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2f6v.webp" 
  },
  { 
    id: 5, 
    title: "Tekken 8", 
    category: "action", 
    rating: "4.9", 
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5v6b.webp" 
  },
  { 
    id: 6, 
    title: "God of War Ragnarök", 
    category: "action", 
    rating: "5.0", 
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.webp" 
  },
];

export default function GameLibrary() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = games.filter(game => {
    const matchesCategory = activeCategory === 'all' || game.category === activeCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#08080c] relative overflow-hidden">
      {/* Cinematic Lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-block mb-4 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-black tracking-[0.3em] uppercase"
          >
            Playstation 5 Original Titles
          </motion.div>
          <h2 className="text-6xl md:text-7xl font-black text-white italic tracking-tighter mb-4">
            GAME <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">VAULT</span>
          </h2>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center mb-16">
          <div className="flex bg-[#12121a] p-1.5 rounded-2xl border border-white/5 shadow-2xl overflow-x-auto no-scrollbar w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === cat.id 
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <input 
              type="text" 
              placeholder="Search library..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#12121a] border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all"
            />
            <FaSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* The Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12">
          <AnimatePresence mode='popLayout'>
            {filteredGames.map((game) => (
              <motion.div
                key={game.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative group cursor-pointer"
              >
                {/* 3D Tilt Card Container */}
                <motion.div 
                   whileHover={{ rotateY: 15, rotateX: -5, scale: 1.05 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                   className="relative aspect-[2/3] rounded-xl overflow-hidden bg-[#1a1a25] shadow-[0_0_0_1px_rgba(255,255,255,0.1)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                   style={{ perspective: "1000px" }}
                >
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png';
                    }}
                  />

                  {/* High-Gloss Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10 opacity-60 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Rating Tag */}
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded shadow-lg z-20">
                    PS5
                  </div>

                  {/* Play Hover State (Fixed Animation) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-900/40 backdrop-blur-[2px] z-10">
                    <FaPlayCircle className="text-white text-5xl drop-shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </motion.div>

                {/* Info Text */}
                <div className="mt-4 space-y-1 text-center">
                  <h3 className="text-white font-bold text-sm truncate px-2 group-hover:text-blue-400 transition-colors">
                    {game.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex text-yellow-500 text-[10px]">
                        <FaStar />
                    </div>
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{game.category}</span>
                  </div>
                </div>

                {/* Reflection/Shadow under the card */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <div className="py-20 text-center">
            <FaGamepad className="text-6xl text-gray-800 mx-auto mb-4" />
            <p className="text-gray-500 font-bold uppercase tracking-widest">No games found in the vault</p>
          </div>
        )}
      </div>
    </section>
  );
}