"use client";
import React, { useState } from 'react';
import { Search, Command, ArrowUpRight } from 'lucide-react';

export default function MinimalDesign() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl p-8 border border-gray-100">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2 opacity-40">
            <Command size={18} />
            <span className="text-xs font-medium tracking-tighter italic">DK_TECH_OS_V4</span>
          </div>
          <div className="text-[10px] font-bold bg-black text-white px-3 py-1 rounded-full uppercase">10/10 Slots Full</div>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight mb-4">How can I assist?</h1>
        <p className="text-gray-400 mb-10 text-sm">Batch 01 is now live. Your AI-powered future starts here.</p>

        <div className="relative group">
          <input 
            type="text" 
            placeholder="Ask anything..."
            className="w-full bg-[#f5f5f7] border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-black/5 transition-all outline-none text-lg"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-xl hover:scale-105 transition-transform">
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}