"use client";
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, Code2, Layout, Cpu, Smartphone, Database } from 'lucide-react';

export default function PortfolioUI() {
  const projects = [
    { name: 'AI Chat Bot', desc: 'Gemini AI Powered', link: '/', icon: <Cpu className="text-blue-500" /> },
    { name: 'Glass UI', desc: 'Modern Glassmorphism', link: '/design2', icon: <Layout className="text-purple-500" /> },
    { name: 'Cyberpunk', desc: 'Hacker Style Terminal', link: '/design3', icon: <Code2 className="text-[#00ff41]" /> },
    { name: 'POS System', desc: 'Cloud Billing SaaS', link: '/pos', icon: <Database className="text-orange-500" /> },
    { name: 'Mobile App', desc: 'Fitness Tracker UI', link: '/mobile', icon: <Smartphone className="text-pink-500" /> },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Profile Section (Big Bento) */}
        <div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
          <div>
            <div className="w-20 h-20 bg-blue-600 rounded-3xl mb-6 flex items-center justify-center text-3xl font-black">SK</div>
            <h1 className="text-5xl font-black leading-tight mb-4 tracking-tighter">Sudesh<br/>Kumarasiri</h1>
            <p className="text-gray-400 text-lg">Full-Stack Developer & AI Specialist.</p>
          </div>
          <div className="flex gap-4 mt-8">
            <div className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"><Linkedin size={20}/></div>
            <div className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"><Github size={20}/></div>
            <div className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"><Mail size={20}/></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 rounded-[2.5rem] p-8 flex flex-col justify-center items-center shadow-2xl shadow-blue-900/20">
          <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">Batch 01</p>
          <h2 className="text-5xl font-black">10/10</h2>
          <p className="text-blue-200 text-xs mt-2 uppercase">Students Enrolled</p>
        </div>

        {/* About Section */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
          <h3 className="text-gray-400 text-sm font-bold uppercase mb-4 tracking-widest">About Me</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Building next-generation web applications with Next.js, AI, and Modern UI/UX principles.
          </p>
        </div>

        {/* Projects Grid Section */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4 mt-4 md:mt-0">
          {projects.map((project, i) => (
            <Link key={i} href={project.link} className="bg-[#111] border border-white/5 p-6 rounded-[2rem] hover:border-white/20 transition-all group relative">
              <div className="mb-4">{project.icon}</div>
              <h4 className="font-bold text-lg mb-1">{project.name}</h4>
              <p className="text-xs text-gray-500">{project.desc}</p>
              <ExternalLink size={14} className="absolute top-6 right-6 opacity-0 group-hover:opacity-40 transition-opacity" />
            </Link>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="md:col-span-2 bg-[#111] border border-white/5 rounded-[2.5rem] p-8 flex items-center justify-around overflow-hidden">
           {['Next.js', 'React', 'Node.js', 'Tailwind', 'MongoDB', 'AI'].map((tech) => (
             <span key={tech} className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">{tech}</span>
           ))}
        </div>

      </div>
      
      <footer className="mt-12 text-center text-gray-700 text-[10px] uppercase tracking-[0.5em]">
        Designed & Developed by Sudesh Kumarasiri | © 2026
      </footer>
    </div>
  );
}