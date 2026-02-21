"use client";
import React, { useState } from 'react';
import { Terminal, Cpu, HardDrive, Globe, Send, ShieldAlert } from 'lucide-react';

export default function CyberpunkDesign() {
  const [input, setInput] = useState('');

  return (
    <div className="min-h-screen bg-black text-[#00ff41] font-mono p-4 md:p-12 selection:bg-[#00ff41] selection:text-black">
      {/* Matrix Style Border Overlay */}
      <div className="max-w-6xl mx-auto border-2 border-[#00ff41] shadow-[0_0_30px_rgba(0,255,65,0.15)] relative overflow-hidden bg-black">
        
        {/* Header Section */}
        <div className="border-b-2 border-[#00ff41] p-6 flex justify-between items-center bg-[#00ff41]/5">
          <div className="flex items-center gap-4">
            <div className="animate-pulse bg-[#00ff41] p-1 rounded-sm text-black">
              <Terminal size={20} />
            </div>
            <h2 className="text-xl font-black tracking-[0.3em] uppercase underline decoration-double">
              System_Override_v3.0
            </h2>
          </div>
          <div className="hidden md:flex gap-6 text-xs opacity-70 italic">
            <span className="flex items-center gap-1"><Cpu size={14}/> CPU: OPTIMIZED</span>
            <span className="flex items-center gap-1"><ShieldAlert size={14}/> SECURE: 100%</span>
            <span className="flex items-center gap-1"><Globe size={14}/> REGIONS: ACTIVE</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[60vh]">
          
          {/* Left Sidebar - Terminal Style */}
          <div className="border-r-2 border-[#00ff41] p-6 space-y-6 bg-[#00ff41]/2">
            <div>
              <p className="text-[10px] opacity-50 mb-2">// NODE_STATUS</p>
              <div className="bg-[#00ff41]/20 p-2 text-xs border border-[#00ff41]/30">
                STABLE_CONNECTION
              </div>
            </div>
            <div>
              <p className="text-[10px] opacity-50 mb-2">// ENROLLMENT_SYNC</p>
              <div className="text-sm">
                BATCH_01: <span className="text-white">10 / 10</span>
              </div>
              <div className="w-full bg-[#00ff41]/10 h-1 mt-2">
                <div className="bg-[#00ff41] h-full w-full shadow-[0_0_10px_#00ff41]"></div>
              </div>
            </div>
          </div>

          {/* Chat Display */}
          <div className="md:col-span-3 p-8 flex flex-col justify-between">
            <div className="space-y-4 opacity-80">
              <p className="text-sm">{">"} INITIALIZING FULL-STACK PROTOCOL...</p>
              <p className="text-sm text-white/70">{">"} LOADING NEXT.JS 15 LIBRARIES...</p>
              <p className="text-sm">{">"} DARK_MODE_UI_GENERATED_SUCCESSFULLY.</p>
              <p className="text-sm border-l-2 border-[#00ff41] pl-4 py-2 bg-[#00ff41]/5 animate-pulse">
                [SYSTEM]: WELCOME TO THE FUTURE OF WEB DEVELOPMENT.
              </p>
            </div>

            {/* Cyberpunk Input */}
            <div className="mt-12 relative">
              <div className="absolute -top-6 left-0 text-[10px] opacity-40 uppercase tracking-widest">
                Input_Terminal_CMD
              </div>
              <div className="flex gap-4">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="EXECUTE COMMAND..."
                  className="w-full bg-transparent border-2 border-[#00ff41]/40 py-4 px-6 focus:outline-none focus:border-[#00ff41] transition-all text-[#00ff41] placeholder:text-[#00ff41]/30"
                />
                <button className="bg-[#00ff41] text-black px-8 font-bold hover:bg-white transition-colors flex items-center gap-2">
                  <Send size={18} /> RUN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Text */}
      <div className="mt-8 text-center text-[10px] tracking-[0.5em] opacity-30 uppercase">
        Built by Sudesh Kumarasiri | Batch 01 Authorized Access Only
      </div>
    </div>
  );
}