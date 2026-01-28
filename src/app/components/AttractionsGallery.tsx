'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';

const attractions = [
  { 
    title: "VR Zone", 
    desc: "Step into another dimension with 360° immersion", 
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1000", 
    size: "md:col-span-2",
    status: "5 Slots Open",
    isBusy: false
  },
  { 
    title: "Soft Play", 
    desc: "Safe fun & colorful adventures for the little ones", 
    img: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=800", 
    size: "md:col-span-1",
    status: "Limited Space",
    isBusy: true
  },
  { 
    title: "Arcade Hall", 
    desc: "From Pac-Man to Air Hockey hits", 
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800", 
    size: "md:col-span-1",
    status: "Available",
    isBusy: false
  },
  { 
    title: "Cafe Lounge", 
    desc: "Premium snacks & coffee to refuel your energy", 
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000", 
    size: "md:col-span-2",
    status: "Open Now",
    isBusy: false
  },
];

export default function AttractionsGallery() {
  return (
    <section className="py-24 bg-[#0a0a10] px-4 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#FF6B6B]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter leading-none">
              BEYOND <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]">GAMING</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-md font-medium">
              Real-time updates from Dhaka's favorite 9th-floor destination.
            </p>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-xs tracking-widest rounded-2xl hover:bg-white/10 transition-all uppercase shadow-2xl"
          >
            REFRESH STATUS
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {attractions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative h-[450px] rounded-[3rem] border border-white/5 overflow-hidden group ${item.size}`}
            >
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                unoptimized
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              {/* Status Badge */}
              <div className="absolute top-8 left-8 z-30">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border ${
                  item.isBusy ? 'bg-orange-500/20 border-orange-500/30' : 'bg-green-500/20 border-green-500/30'
                }`}>
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaCircle className={item.isBusy ? 'text-orange-500 text-[10px]' : 'text-green-500 text-[10px]'} />
                  </motion.div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${
                    item.isBusy ? 'text-orange-400' : 'text-green-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-black/10 to-transparent opacity-90 z-10" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-2 group-hover:text-[#FF6B6B] transition-colors">
                  {item.title}
                </h3>
                <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-500">
                  <p className="text-gray-300 font-medium max-w-xs leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Action Circle */}
              <div className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center translate-y-24 group-hover:translate-y-0 transition-transform duration-500 z-30">
                <span className="text-2xl font-bold">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}