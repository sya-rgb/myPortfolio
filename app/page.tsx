import React from 'react';
import { Mail, ExternalLink, Award, BookOpen, Briefcase, User, Cpu, ShieldCheck, GraduationCap, Code2 } from 'lucide-react';
import { SiGithub, SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiReact } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-blue-500/30">
      {/* --- BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-indigo-900/10 blur-[100px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-12 px-4 flex justify-center">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-white group hover:border-blue-500/40 transition-colors duration-500">
          <div className="p-8 flex flex-col items-center text-center">
            <div className="relative mb-6">
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
               <div className="relative w-28 h-28 bg-[#0f172a] rounded-full border-2 border-white/10 flex items-center justify-center overflow-hidden">
                 <User size={56} className="text-blue-400 group-hover:scale-110 transition-transform duration-500" />
               </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Syamim</h1>
            <p className="text-blue-400 font-mono text-xs mt-2 tracking-widest uppercase">Netcentric Computing Specialist</p>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: ACADEMIC & WORK JOURNEY --- */}
      <section className="relative py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Education Card */}
          <div className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
            <div className="mb-4 p-3 w-fit rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-blue-400 font-medium">BSc in Netcentric Computing</p>
                <p className="text-sm text-gray-500">University Name • 2022 - Present</p>
                <p className="text-xs mt-2 text-gray-400 font-mono">Focus: Cryptography & Network Security</p>
              </div>
            </div>
          </div>

          {/* Work Experience Card */}
          <div className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]">
            <div className="mb-4 p-3 w-fit rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <Briefcase size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <div className="space-y-4">
              <div>
                <p className="text-indigo-400 font-medium">Intern Network Developer</p>
                <p className="text-sm text-gray-500">Tech Corp | 2024</p>
                <ul className="text-xs mt-2 text-gray-400 space-y-1 list-disc list-inside">
                  <li>Automated security protocols</li>
                  <li>Assisted in TLS handshake optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]">
            <div className="mb-4 p-3 w-fit rounded-2xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiReact />, name: "React" },
                { icon: <SiTypescript />, name: "TS" },
                { icon: <SiTailwindcss />, name: "Tailwind" },
                { icon: <SiPython />, name: "Python" }
              ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-xl border border-white/5 text-xs hover:border-green-500/50 transition-colors">
                  <span className="text-gray-400">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="relative py-20 bg-white/[0.01] px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <ShieldCheck className="text-blue-500" /> Security Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cryptography Project */}
            <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-blue-500/30 overflow-hidden">
              <div className="relative h-48 bg-[#0a0f1d] rounded-2xl mb-6 border border-white/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="font-mono text-[10px] text-blue-900 leading-tight">
                  HASH_BLOCK: 0x82f1...<br/>STATUS: VERIFIED
                </p>
              </div>
              <h4 className="font-bold text-2xl mb-3 text-white">Product Authenticity Protocol</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Implementation of a cryptographic hash-linked database to prevent counterfeit products in supply chains.
              </p>
              <button className="flex items-center gap-2 text-blue-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
                Explore Tech Stack <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative py-20 px-6 text-center">
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