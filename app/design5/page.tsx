"use client";
import React from 'react';
import { Activity, Layout, Settings, Database, Server } from 'lucide-react';

export default function NebulaDesign() {
  return (
    <div className="min-h-screen bg-[#020204] text-white flex">
      {/* Pro Sidebar */}
      <div className="w-20 bg-[#08080a] border-r border-white/5 flex flex-col items-center py-8 gap-10">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]"><Layout size={20}/></div>
        <div className="text-gray-600 hover:text-white transition-colors cursor-pointer"><Database size={20}/></div>
        <div className="text-gray-600 hover:text-white transition-colors cursor-pointer"><Server size={20}/></div>
        <div className="text-gray-600 hover:text-white transition-colors cursor-pointer mt-auto"><Settings size={20}/></div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-12 relative overflow-hidden">
        {/* Nebula Background Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        
        <div className="flex justify-between items-start mb-16 relative z-10">
          <div>
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-2">Project: AI Bootcamp</h2>
            <h1 className="text-5xl font-black">Nebula Console</h1>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
            <p className="text-[10px] text-gray-500 mb-1 uppercase">Enrollment Status</p>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-mono text-indigo-400">100%</span>
              <Activity size={16} className="text-green-500 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-1 h-[400px] backdrop-blur-sm relative z-10">
          <div className="h-full w-full bg-[#050505] rounded-[2.4rem] flex items-center justify-center italic text-gray-700">
            System ready for deployment...
          </div>
        </div>
      </div>
    </div>
  );
}