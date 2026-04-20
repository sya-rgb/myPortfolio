"use client"; // Required for the flip animation state

import React, { useState } from 'react';
import { Mail, ExternalLink, Award, BookOpen, Briefcase, User, Cpu, ShieldCheck, GraduationCap, Code2, ChevronRight } from 'lucide-react';
import { SiGithub, SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiReact } from "react-icons/si";

export default function Portfolio() {
  const [isFlipped, setIsFlipped] = useState(false);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-blue-500/30">
      
      {/* --- STICKY NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-mono text-blue-500 font-bold tracking-tighter text-xl">S.NET</span>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            {['About', 'Journey', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-indigo-900/10 blur-[100px]" />
      </div>

      {/* --- HERO / 3D FLIP CARD --- */}
      <section className="relative pt-32 pb-12 px-4 flex flex-col items-center">
        <div 
          className="group perspective-1000 w-full max-w-md h-[280px] cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
            
            {/* FRONT FACE */}
            <div className="absolute inset-0 backface-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl">
              <div className="relative mb-4">
                <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-20" />
                <div className="relative w-24 h-24 bg-[#0f172a] rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
                  <User size={48} className="text-blue-400" />
                  {/* <img src="/front-image.jpg" className="absolute inset-0 object-cover" /> */}
                </div>
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Syamim</h1>
              <p className="text-blue-400 font-mono text-[10px] tracking-widest uppercase mt-2">Student Identification</p>
              <div className="mt-6 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-blue-500" />
              </div>
              <p className="text-[10px] text-gray-500 mt-2">CLICK TO VIEW BACK</p>
            </div>

            {/* BACK FACE */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Cpu className="text-blue-400" size={24} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-blue-400 font-mono">ENCRYPTED ID</p>
                  <p className="text-xs font-bold tracking-widest">#001-4492-X</p>
                </div>
              </div>
              <div className="space-y-3 border-t border-white/10 pt-4">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Spec:</span>
                  <span className="text-gray-200">Netcentric Computing</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Auth:</span>
                  <span className="text-green-400 font-bold">LEVEL 3 ACCESS</span>
                </div>
              </div>
              {/* <img src="/back-image.jpg" className="mt-4 w-full h-16 object-cover rounded-lg opacity-50" /> */}
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION: ABOUT ME --- */}
      <section id="about" className="relative py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-mono text-blue-500 mb-4 tracking-[0.3em] uppercase">Overview</h2>
        <h3 className="text-4xl font-bold mb-6 italic">"Securing the future, one hash at a time."</h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          I'm a final-year student diving deep into the world of Netcentric Computing. My current focus is on building 
          tamper-proof systems through cryptographic verification. When I'm not configuring network security 
          protocols, I'm experimenting with modern full-stack development to create responsive, high-performance web apps.
        </p>
      </section>

      {/* --- SECTION: JOURNEY --- */}
      <section id="journey" className="relative py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-blue-500/5 transition-colors">
            <GraduationCap className="text-blue-400 mb-4" />
            <h4 className="font-bold mb-2">Academic</h4>
            <p className="text-sm text-gray-500">Focusing on cryptography and network infrastructure at university.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-indigo-500/5 transition-colors">
            <Briefcase className="text-indigo-400 mb-4" />
            <h4 className="font-bold mb-2">Work</h4>
            <p className="text-sm text-gray-500">Exploring real-world applications of full-stack engineering.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-green-500/5 transition-colors">
            <Code2 className="text-green-400 mb-4" />
            <h4 className="font-bold mb-2">Stack</h4>
            <p className="text-sm text-gray-500">React, Next.js, TypeScript, Python, and Network Security tools.</p>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="relative py-20 bg-white/[0.01] px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <ShieldCheck className="text-blue-500" /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 transition-all hover:border-blue-500/30">
              <h4 className="font-bold text-xl mb-3">Product Authenticity Protocol</h4>
              <p className="text-gray-400 text-sm mb-6">A cryptographic hash-linked database to verify genuine products.</p>
              <button className="flex items-center gap-2 text-blue-400 text-sm font-bold group-hover:gap-4 transition-all">
                Details <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="relative py-20 px-6 text-center">
        <div className="flex justify-center gap-4">
          <a href="#" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1">
            <Mail className="text-blue-400" />
          </a>
          <a href="#" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1">
            <SiGithub size={24} className="text-white" />
          </a>
        </div>
      </footer>
    </div>
  );
}