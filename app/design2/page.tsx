"use client";
import React, { useState } from 'react';
import { Send, Zap, Shield, Rocket } from 'lucide-react';

export default function ModernDesign() {
  const [input, setInput] = useState('');

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex h-[80vh]">
        
        {/* Left Stats Bar */}
        <div className="w-20 bg-white/5 border-r border-white/10 flex flex-col items-center py-8 gap-8">
          <div className="text-blue-500"><Zap size={24} /></div>
          <div className="text-purple-500"><Shield size={24} /></div>
          <div className="text-pink-500"><Rocket size={24} /></div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col p-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Dashboard V2
          </h1>
          <p className="text-gray-400 text-sm mb-8">Experience the next generation of AI interfaces.</p>
          
          <div className="flex-1 bg-black/20 rounded-2xl mb-6 p-4 border border-white/5 italic text-gray-500 text-center flex items-center justify-center">
            New UI Concept: Glassmorphism Ready for Batch 01
          </div>

          <div className="relative">
            <input 
              type="text" 
              placeholder="Type your command..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-lg hover:bg-blue-500 transition-all">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}