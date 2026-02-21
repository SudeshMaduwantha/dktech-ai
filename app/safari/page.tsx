"use client";
import React from 'react';
import { Navigation, ArrowRight, Instagram, Facebook, Twitter, MapPin } from 'lucide-react';

export default function SafariLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#e2b810] selection:text-black">
      
      {/* 1. Transparent Navbar (Figma Style) */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-8 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="text-2xl font-black tracking-tighter italic">WILD CAT.</div>
        <div className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-[0.2em] text-gray-300">
          <a href="#" className="hover:text-[#e2b810] transition-colors">Home</a>
          <a href="#" className="hover:text-[#e2b810] transition-colors">Expeditions</a>
          <a href="#" className="hover:text-[#e2b810] transition-colors">Lodges</a>
          <a href="#" className="hover:text-[#e2b810] transition-colors">Contact</a>
        </div>
        <button className="border border-white/20 px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-white hover:text-black transition-all">
          Book Now
        </button>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative h-screen flex items-center px-12 overflow-hidden">
        {/* Background Image Placeholder (High-end Safari vibe) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=2071" 
            alt="Safari Hero" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-3xl">
          <div className="flex items-center gap-3 mb-6 text-[#e2b810]">
            <div className="w-12 h-[2px] bg-[#e2b810]"></div>
            <span className="uppercase tracking-[0.4em] text-xs font-black">Untamed Sri Lanka</span>
          </div>
          <h1 className="text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            Discover the <br/><span className="text-[#e2b810]">Wild</span> Heart.
          </h1>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">
            Join our exclusive expeditions into the deepest jungles of Yala and Wilpattu. 10 slots remaining for Batch 01.
          </p>
          <div className="flex gap-6">
            <button className="bg-[#e2b810] text-black px-10 py-5 font-black uppercase text-xs flex items-center gap-3 hover:bg-white transition-all group">
              Explore Tours <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* Social Links Side (Vertical) */}
        <div className="absolute right-12 bottom-12 flex flex-col gap-6 items-center text-gray-500">
          <Instagram size={20} className="hover:text-white cursor-pointer" />
          <Facebook size={20} className="hover:text-white cursor-pointer" />
          <Twitter size={20} className="hover:text-white cursor-pointer" />
          <div className="w-[1px] h-20 bg-gray-800"></div>
        </div>
      </section>

      {/* 3. Expedition Info Bar */}
      <div className="absolute bottom-0 w-full bg-white/5 border-t border-white/10 backdrop-blur-xl p-8 hidden md:block z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <MapPin className="text-[#e2b810]" />
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Next Expedition</p>
              <p className="font-bold">Yala National Park</p>
            </div>
          </div>
          <div className="h-10 w-[1px] bg-white/10"></div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Duration</p>
            <p className="font-bold">04 Days / 03 Nights</p>
          </div>
          <div className="h-10 w-[1px] bg-white/10"></div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Enrollment Status</p>
            <p className="font-bold text-[#e2b810]">10 / 10 Fully Booked</p>
          </div>
        </div>
      </div>
    </div>
  );
}