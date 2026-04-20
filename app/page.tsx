"use client";

import React, { useState } from 'react';
import { Mail, Briefcase, ExternalLink, User, Cpu, ShieldCheck, GraduationCap, Code2, ChevronRight, Activity, Globe, Zap } from 'lucide-react';
import { SiGithub, SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiReact } from "react-icons/si";

export default function Portfolio() {
  const [isFlipped, setIsFlipped] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-gray-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- STICKY HUD NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/40 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="font-mono text-sm tracking-tighter text-blue-500 font-bold uppercase">My Portfolio</span>
          </div>
          <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500">
            {['About', 'Journey', 'Projects'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-blue-400 transition-all hover:tracking-[0.2em]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

{/* --- HERO / 3D SECURE ID CARD --- */}

<section className="relative pt-32 pb-16 px-4 flex flex-col items-center">

  <div 

    className="group perspective-1000 w-full max-w-[380px] md:max-w-md h-[240px] md:h-[260px] cursor-pointer"

    onClick={() => setIsFlipped(!isFlipped)}

  >

    <div className={`relative w-full h-full transition-all duration-1000 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

      

      {/* FRONT FACE: SECURE ACCESS */}
      <div className="absolute inset-0 backface-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
        {/* Scanning line effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="w-full h-[2px] bg-blue-500/50 shadow-[0_0_15px_blue] absolute top-0 animate-scan" />
        </div>
        <div className="relative mb-4">
          <div className="absolute -inset-2 bg-blue-500 rounded-full blur opacity-10 group-hover:opacity-30 transition-opacity" />
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-slate-900 rounded-full border border-blue-500/30 flex items-center justify-center overflow-hidden">
            {/* --- FRONT IMAGE START --- */}
            <img 
              src="beh ngeri.png" 
              alt="Syamim Front" 
              className="absolute inset-0 w-full h-full object-cover brightness-50 sepia(100%) hue-rotate(190deg) saturate-200 group-hover:brightness-100 group-hover:sepia-0 
              group-hover:hue-rotate-0 group-hover:saturate-100 transition-all duration-700 ease-in-out"
            />
            {/* --- FRONT IMAGE END --- */}
          </div>
        </div>
      <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase break-words px-4">Muhammad Syamim Bin Syahidan</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-[1px] w-8 bg-blue-500/50" />
          <p className="text-blue-400 font-mono text-[9px] tracking-[0.3em] uppercase">UiTM Student</p>
          <div className="h-[1px] w-8 bg-blue-500/50" />
        </div>
        <div className="mt-auto w-full flex justify-between items-end">
          <div className="text-left">
            <p className="text-[8px] text-gray-500 font-mono">STATUS</p>
            <p className="text-[10px] text-green-400 font-mono animate-pulse">SINGLE</p>
          </div>
          <p className="text-[9px] text-gray-500 font-mono">TAP FOR MORE INFORMATION</p>
        </div>
      </div>

            {/* BACK FACE: DATA ENCRYPTION */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900/90 backdrop-blur-2xl border border-blue-500/40 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-blue-500/10 rounded border border-blue-500/20">
                  <Cpu className="text-blue-400" size={20} />
                </div>
                <div className="text-right">
                  <p className="text-[8px] text-blue-400 font-mono">STUDENT ID</p>
                  <p className="text-[10px] font-bold tracking-widest text-white">2025186799</p>
                </div>
              </div>
              
              <div className="space-y-4 border-t border-white/5 pt-4">
                <div className="group/item flex flex-col gap-1">
                  <span className="text-[8px] text-gray-500 uppercase tracking-tighter">Email</span>
                  <div className="flex items-center gap-2">
                    <Mail size={12} className="text-blue-400" />
                    <span className="text-xs text-gray-200">2025186799@student.uitm.edu.my</span>
                  </div>
                </div>
                <div className="group/item flex flex-col gap-1">
                  <span className="text-[8px] text-gray-500 uppercase tracking-tighter">Phone Number</span>
                  <div className="flex items-center gap-2">
                    <Activity size={12} className="text-blue-400" />
                    <span className="text-xs text-gray-200">+60 19-497 1852</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                 <a href="https://github.com" className="p-2 bg-white/5 rounded hover:bg-blue-500/20 transition-colors">
                    <SiGithub size={16} />
                 </a>
                 <div className="ml-auto flex flex-col items-end">
                    <div className="flex gap-1">
                        {[1,2,3,4].map(i => <div key={i} className="w-1 h-3 bg-blue-500/20" />)}
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION: ABOUT CORE --- */}
      <section id="about" className="relative py-16 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-10">
            <div className="hidden md:flex flex-col items-center gap-4">
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-blue-500" />
                <Globe className="text-blue-500" size={24} />
                <div className="w-[1px] h-full bg-blue-500/20" />
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-xs font-mono text-blue-500 mb-4 tracking-[0.4em] uppercase">ABOUT ME</h2>
                <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                    Engineering <span className="text-blue-500">Trust</span> through Action.
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
                  I am currently pursuing degree in Netcentric Computing at UiTM Shah Alam.
                  When I'm in highschool, my friend once brag about their uncles that work in tech stuff and earns a lot of money and that really piqued my interest.
                  For my hobby, I would say that I enjoy doing nothing on my free time but I also enjoy reading novels and on that note, I like to daydreams a lot too.
                </p>
            </div>
        </div>
      </section>

      {/* --- SECTION: JOURNEY ARCHIVE --- */}
      <section id="journey" className="relative py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          
{/* Example for the Education Card */}
<div className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-2xl transition-all hover:bg-blue-500/[0.05] hover:border-blue-500/30 flex flex-col items-center text-center">
  <GraduationCap className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
  
  <h4 className="font-mono text-xs text-blue-500 mb-4 tracking-widest uppercase">EDUCATION LEVEL</h4>
  
  <div className="space-y-2 w-full">
    <p className="text-sm text-gray-300">UiTM Shah Alam ( 2024 - Present )</p>
    <p className="text-sm text-gray-300">UiTM Machang ( 2021 - 2023 )</p>
  </div>
</div>

{/* Example for the Language Card */}
          <div className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-2xl transition-all hover:bg-indigo-500/[0.05] hover:border-indigo-500/30 flex flex-col items-center text-center">
          <Briefcase className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform" /> 
          <h4 className="font-mono text-xs text-indigo-500 mb-4 tracking-widest uppercase">LANGUAGE</h4>
  
          <div className="space-y-2 w-full">
            <p className="text-sm text-gray-300">Malay - Native speaker.</p>
            <p className="text-sm text-gray-300">English - Intermediate.</p>
            <p className="text-sm text-gray-300">Japanese - Beginner.</p>
           </div>
          </div>

          <div className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-2xl transition-all hover:bg-green-500/[0.05] hover:border-green-500/30">
            <Zap className="text-green-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-mono text-xs text-green-500 mb-2 tracking-widest uppercase">Experience</h4>
            <div className="flex flex-wrap gap-2">
            <p className="text-sm text-gray-400 leading-relaxed">Designing and developing responsive website using VS Code and language like CSS, JavaScript and HTML.</p>
            <p className="text-sm text-gray-400 leading-relaxed">Developing database using MySQL and Oracle.</p>
            <p className="text-sm text-gray-400 leading-relaxed">Doing penetration testing and network scanning regularly using NMAP, BurpSuit and SQLMap.</p>
                {[SiNextdotjs, SiReact, SiTypescript, SiPython, SiTailwindcss].map((Icon, i) => (
                    <Icon key={i} className="text-gray-500 hover:text-white transition-colors" size={18} />
                ))}
            </div>
          </div>

        </div>
      </section>

{/* --- SECTION: PROJECT REPOSITORY --- */}
<section id="projects" className="relative py-24 bg-white/[0.01] px-6 border-t border-white/5">
  <div className="max-w-6xl mx-auto flex flex-col items-center">
    
    {/* --- Section Title (Centered) --- */}
    <div className="text-center mb-12">
      <h2 className="text-xs font-mono text-blue-500 mb-2 tracking-[0.4em] uppercase">Active Repositories</h2>
      <h3 className="text-3xl font-bold">Featured Operations</h3>
    </div>

    {/* --- The Project Card (Centered) --- */}
    <div className="group relative bg-slate-900/40 border border-white/10 rounded-2xl p-8 transition-all hover:border-blue-500/40 w-full max-w-4xl text-center flex flex-col items-center">
      
      {/* Icon: Updated pre-hover opacity & hover effect */}
      <div className="text-blue-500/10 group-hover:text-blue-500/40 transition-colors mb-6">
        <ShieldCheck size={40} />
      </div>
      
      <h4 className="font-bold text-2xl mb-4 group-hover:text-blue-400 transition-colors">Notable Developed Systems</h4>
      
      {/* New: Structured Project Timelines */}
      <div className="w-full text-left space-y-4 mb-8 text-xs font-mono text-gray-500 max-w-2xl border-t border-white/5 pt-6">
        <div>
          <p className="text-blue-400 uppercase">Hotel Room Management System</p>
          <p>Timeframe: Highschool (Guided by teachers)</p>
        </div>
        <div>
          <p className="text-indigo-400 uppercase">Library System</p>
          <p>Timeframe: Diploma (With 3 more team members)</p>
        </div>
        <div>
          <p className="text-green-400 uppercase">File Management System</p>
          <p>Timeframe: Internship (With fellow interns)</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* --- HUD DECORATION --- */}
      <div className="py-10 text-center opacity-20">
        <p className="text-[8px] font-mono tracking-[1em] uppercase">Muhammad Syamim Bin Syahidan - 2026</p>
      </div>

    </div>
  );
}