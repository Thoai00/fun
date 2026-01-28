// app/components/Footer.tsx
'use client';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#050508] pt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-black text-white italic mb-6">FUN<span className="text-[#FF6B6B]">PARADISE.</span></h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dhaka's ultimate destination for next-gen gaming and family entertainment. Located in the heart of the city.
            </p>
            <div className="flex gap-4 mt-8">
              <SocialIcon icon={<FaFacebook />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaYoutube />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Attractions</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Book Session</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Visit Us</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-[#FF6B6B] text-xl shrink-0" />
                <p className="text-gray-500 text-sm">
                  Level 9, Bashundhara City Shopping Complex,<br /> Panthapath, Dhaka 1215
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <FaPhone className="text-[#FF6B6B]" /> +880 1XXX-XXXXXX
                </div>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <FaEnvelope className="text-[#FF6B6B]" /> play@funparadise.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] font-bold tracking-widest uppercase">
          <p>© 2026 FUN PARADISE DHAKA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Neon Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent opacity-30" />
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#FF6B6B] transition-all border border-white/10">
      {icon}
    </a>
  );
}