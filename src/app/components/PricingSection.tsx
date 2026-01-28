'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChild, FaUserFriends, FaClock, FaGamepad, FaCalendarAlt, FaStar, FaCheckCircle, FaCrown } from 'react-icons/fa';

export default function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pricingPlans = [
    {
      name: "Silver Pass",
      duration: "1 Month",
      price: "3,999",
      tagline: "Entry level access",
      features: [
        "Everyday + Govt Holidays",
        "Unlimited Playtime",
        "1 Guardian + 1 Child",
        "Ages 2-12 years"
      ],
      additional: [
        { label: "Extra Hour", value: "Free" },
        { label: "Add. Child", value: "2,999 TK" }
      ],
      color: "from-slate-400 to-slate-600",
      highlight: false
    },
    {
      name: "Gold Pack",
      duration: "6 Months",
      price: "11,999",
      tagline: "Our most loved plan",
      features: [
        "Everyday + Govt Holidays",
        "Unlimited Playtime",
        "1 Guardian + 1 Child",
        "1 Breed Game Included"
      ],
      additional: [
        { label: "Extra Hour", value: "Free" },
        { label: "Add. Child", value: "8,999 TK" }
      ],
      color: "from-[#FF6B6B] to-[#FF8E53]",
      highlight: true
    },
    {
      name: "Diamond Elite",
      duration: "12 Months",
      price: "13,999",
      tagline: "The ultimate value",
      features: [
        "Everyday + Govt Holidays",
        "Unlimited Playtime",
        "1 Guardian + 1 Child",
        "2 Breed Games Included"
      ],
      additional: [
        { label: "Extra Hour", value: "Free" },
        { label: "Add. Child", value: "14,999 TK" }
      ],
      color: "from-blue-500 to-purple-600",
      highlight: false
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-[#0a0a10] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,107,107,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-[#FF6B6B]/20 to-[#FF8E53]/20 border border-[#FF6B6B]/30"
          >
            <span className="text-[#FF6B6B] text-sm font-black tracking-[0.2em] uppercase">Membership</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter italic">
            UNLIMITED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]">FUN</span> ACCESS
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Join the community and enjoy priority access to all attractions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group h-full"
            >
              {/* Highlight Glow */}
              {plan.highlight && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              )}

              <div className={`relative h-full flex flex-col bg-[#151522]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'border-[#FF6B6B]/50 -translate-y-2' : ''}`}>
                
                {/* Header Section */}
                <div className={`p-8 bg-gradient-to-br ${plan.color} relative overflow-hidden`}>
                   {/* Abstract Pattern */}
                   <div className="absolute top-0 right-0 p-4 opacity-20">
                      <FaCrown className="text-6xl -rotate-12" />
                   </div>
                   
                   <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-2 opacity-80">{plan.duration}</h3>
                   <h4 className="text-3xl font-black text-white mb-4 italic uppercase">{plan.name}</h4>
                   
                   <div className="flex items-baseline text-white">
                      <span className="text-lg font-bold mr-1">TK</span>
                      <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                   </div>
                   <p className="text-white/70 text-sm mt-2 font-medium">{plan.tagline}</p>
                </div>

                {/* Features Section */}
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300 group/item">
                        <FaCheckCircle className={`transition-colors ${hoveredIndex === index ? 'text-[#FF6B6B]' : 'text-gray-600'}`} />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
                     <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Additional Rates</p>
                     {plan.additional.map((item, i) => (
                        <div key={i} className="flex justify-between items-center bg-black/30 p-3 rounded-xl border border-white/5">
                           <span className="text-xs text-gray-400">{item.label}</span>
                           <span className="text-xs font-bold text-white">{item.value}</span>
                        </div>
                     ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-8 pt-0">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-2xl font-black text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
                      plan.highlight 
                      ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white shadow-lg shadow-[#FF6B6B]/30' 
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    SELECT PLAN
                    <FaGamepad className="text-lg" />
                  </motion.button>
                </div>

                {/* Popular Badge */}
                {plan.highlight && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#FF6B6B] text-white text-[10px] font-black px-10 py-1 rotate-45 translate-x-8 translate-y-4 shadow-xl">
                      POPULAR
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
           <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <FaStar className="text-yellow-500" />
              Custom packages available for corporate events and school trips. 
              <button className="text-[#FF6B6B] font-bold hover:underline ml-1">Contact Sales</button>
           </p>
        </motion.div>
      </div>
    </section>
  );
}