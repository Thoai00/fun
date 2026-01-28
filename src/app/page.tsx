'use client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AttractionsGallery from './components/AttractionsGallery';
import PS5BookingSection from './components/PS5BookingSection';
import GameLibrary from './components/GameLibrary'; // New
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#0a0a10]">
      <Navbar />
      <main>
        <Hero />
        <AttractionsGallery /> 
        <PS5BookingSection />
        
        {/* Game Library placed here to show the variety of games */}
        <GameLibrary /> 
        
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}