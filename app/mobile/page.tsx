"use client";
import React from 'react';
import { Heart, Activity, Flame, Moon, Bell, Home, Search, Settings } from 'lucide-react';

export default function MobileAppUI() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Mobile Device Frame */}
      <div className="w-[375px] h-[750px] bg-white rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.1)] border-[8px] border-gray-900 overflow-hidden relative flex flex-col">
        
        {/* Status Bar */}
        <div className="h-10 w-full flex justify-between items-center px-8 pt-4">
          <span className="text-xs font-bold">9:41</span>
          <div className="flex gap-1.5">
            <div className="w-4 h-4 rounded-full border border-black/20 flex items-center justify-center text-[8px]">5G</div>
            <div className="w-6 h-3 bg-black rounded-sm"></div>
          </div>
        </div>

        {/* Top Header */}
        <div className="p-6 flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-xs font-medium">Monday, Feb 21</p>
            <h1 className="text-2xl font-black text-gray-900">Hey, Sudesh!</h1>
          </div>
          <div className="relative">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Bell size={20} className="text-blue-600" />
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 space-y-6 pb-24">
          
          {/* Main Card */}
          <div className="bg-blue-600 rounded-[2rem] p-6 text-white shadow-xl shadow-blue-200 relative overflow-hidden">
            <div className="relative z-10">
              <p className="opacity-80 text-xs uppercase tracking-widest font-bold">Today's Progress</p>
              <h2 className="text-3xl font-black mt-1">85%</h2>
              <p className="text-sm mt-4 opacity-90">You've almost reached your daily AI training goal!</p>
            </div>
            <Activity className="absolute right-[-10px] bottom-[-10px] w-32 h-32 opacity-20 rotate-12" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 p-4 rounded-3xl border border-orange-100">
              <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-3">
                <Flame size={20} />
              </div>
              <p className="text-gray-500 text-xs font-bold uppercase">Calories</p>
              <h3 className="text-xl font-black">1,240</h3>
            </div>
            <div className="bg-purple-50 p-4 rounded-3xl border border-purple-100">
              <div className="w-10 h-10 bg-purple-500 rounded-2xl flex items-center justify-center text-white mb-3">
                <Moon size={20} />
              </div>
              <p className="text-gray-500 text-xs font-bold uppercase">Sleep</p>
              <h3 className="text-xl font-black">7h 20m</h3>
            </div>
          </div>

          {/* Batch 01 Special Section */}
          <div className="bg-black rounded-3xl p-6 text-white flex items-center justify-between">
            <div>
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Course Update</p>
              <h4 className="font-bold text-sm">Batch 01: 10/10 Registered</h4>
            </div>
            <div className="h-10 w-10 border-2 border-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold">
              FULL
            </div>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 backdrop-blur-xl border border-gray-100 h-16 rounded-2xl flex items-center justify-around px-4 shadow-lg">
          <Home size={20} className="text-blue-600" />
          <Search size={20} className="text-gray-400" />
          <Heart size={20} className="text-gray-400" />
          <Settings size={20} className="text-gray-400" />
        </div>

      </div>
    </div>
  );
}