import React from 'react';
import { Mail, ExternalLink, Award, BookOpen, Briefcase, User, Cpu, ShieldCheck } from 'lucide-react';
import { SiGithub} from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-blue-500/30">
      {/* --- FUTURISTIC BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-indigo-900/20 blur-[100px]" />
      </div>

      {/* --- HERO / STUDENT CARD SECTION --- */}
      <section className="relative pt-20 pb-16 px-4 flex justify-center">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-white transition-all hover:border-blue-500/50">
          <div className="p-8 flex flex-col items-center text-center">
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
               <div className="relative w-28 h-28 bg-[#0f172a] rounded-full mb-4 border-2 border-white/10 flex items-center justify-center overflow-hidden">
                 <User size={56} className="text-blue-400" />
               </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Syamim
            </h1>
            <p className="text-blue-400 font-mono text-sm mt-1 mb-6 tracking-widest">NETCENTRIC COMPUTING STUDENT</p>
            
            <div className="w-full space-y-3 pt-6 border-t border-white/5 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-400">Specialization:</span>
                <span className="text-blue-200">Network Security</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-400">Status:</span>
                <span className="flex items-center gap-1.5 text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: ABOUT ME --- */}
      <section id="about" className="relative py-20 px-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-blue-600/10 p-4 rounded-2xl border border-blue-500/20">
                <Cpu className="text-blue-400" size={32} />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-6 text-white">System Architecture</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Third-year Netcentric Computing student specializing in cryptographic verification and network infrastructure. 
                  Currently developing hash-linked database solutions to solve product authenticity challenges.
                </p>
            </div>
        </div>
      </section>

      {/* --- SECTION 2: ACADEMIC PROJECTS (More Responsive Grid) --- */}
      <section className="relative py-20 bg-white/[0.02] px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <ShieldCheck className="text-blue-500" /> Security Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 hover:-translate-y-2">
              <div className="h-40 bg-[#0f172a] rounded-xl mb-4 flex items-center justify-center border border-white/5 overflow-hidden">
                <div className="text-blue-500/20 font-mono text-xs p-4">
                  01001000 01000001 01010011 01001000
                </div>
              </div>
              <h4 className="font-bold text-xl mb-2 text-white">Cryptographic Verification</h4>
              <p className="text-gray-400 text-sm mb-6">Product authenticity verification system using a hash-linked database protocol.</p>
              <button className="flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:text-blue-300">
                View Repository <ExternalLink size={16} />
              </button>
            </div>

            {/* Project 2 (Example) */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 hover:-translate-y-2">
              <div className="h-40 bg-[#0f172a] rounded-xl mb-4 flex items-center justify-center border border-white/5">
                <Cpu className="text-blue-500/20" size={64} />
              </div>
              <h4 className="font-bold text-xl mb-2 text-white">Smart Waste IoT</h4>
              <p className="text-gray-400 text-sm mb-6">Automated waste management using RFID authentication and conveyor mechanics.</p>
              <button className="flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:text-blue-300">
                View Repository <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER: CONTACT INFO --- */}
      <footer className="relative py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Let's Connect
        </h2>
        <p className="text-gray-500 mb-10 max-w-md mx-auto">Available for networking and security-focused collaborations.</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:your-email@example.com" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:bg-blue-500/10">
            <Mail className="text-blue-400" />
          </a>
          <a href="#" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:bg-blue-500/10">
            <SiGithub size={24} className="text-white" />
          </a>
        </div>
      </footer>
    </div>
  );
}