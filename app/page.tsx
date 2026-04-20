import React from 'react';
import { Mail, ExternalLink, Award, BookOpen, Briefcase, User } from 'lucide-react';
import { SiGithub } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* --- HERO / STUDENT CARD SECTION --- */}
      <section className="pt-10 pb-16 px-4 flex justify-center bg-white border-b">
        <div className="max-w-md w-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden text-white transition-transform hover:scale-[1.02]">
          <div className="p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full mb-4 border-4 border-blue-200 flex items-center justify-center overflow-hidden">
              <User size={48} className="text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Full Name</h1>
            <p className="text-blue-100 opacity-90 mb-6">Student Identification</p>
            
            <div className="w-full space-y-3 pt-4 border-t border-blue-400/30 text-sm">
              <div className="flex justify-between">
                <span className="font-medium opacity-80">Major:</span>
                <span>Computer Science</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium opacity-80">Institution:</span>
                <span>University Name</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium opacity-80">Status:</span>
                <span className="bg-green-400/20 px-2 py-0.5 rounded text-green-100">Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: ABOUT ME --- */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <User className="text-blue-600" /> About Me
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          I am a passionate student focused on bridging the gap between technology and user experience. 
          With a strong foundation in problem-solving and a drive for continuous learning, 
          I aim to create digital solutions that are both functional and impactful.
        </p>
      </section>

      {/* --- SECTION 2: EDUCATION, SKILLS & WORK --- */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><BookOpen size={20} /> Education</h3>
            <div className="border-l-2 border-blue-600 pl-4 space-y-6">
              <div>
                <p className="font-bold">BSc in Computer Science</p>
                <p className="text-sm text-gray-500">2022 - Present</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Briefcase size={20} /> Work Experience</h3>
            <div className="border-l-2 border-gray-300 pl-4 space-y-6">
              <div>
                <p className="font-bold">Intern Developer</p>
                <p className="text-sm text-gray-500">Tech Solutions Inc. | 2024</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Python'].map(skill => (
                <span key={skill} className="bg-white px-3 py-1 rounded-full shadow-sm text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ACADEMIC SHOWCASE --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Academic Projects</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="group bg-white border rounded-xl overflow-hidden transition-all hover:shadow-lg">
            <div className="h-48 bg-gray-200 group-hover:bg-gray-300 transition-colors" />
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2">Algorithm Optimization Project</h4>
              <p className="text-gray-600 text-sm mb-4">A study on improving search efficiency within large datasets using Python.</p>
              <button className="flex items-center gap-1 text-blue-600 font-medium hover:underline">
                View Repository <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CERTIFICATES & AWARDS --- */}
      <section className="py-20 bg-blue-600 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-2">
            <Award /> Recognition
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="font-bold">Dean's List 2024</p>
              <p className="text-sm opacity-80">Academic Excellence Award</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="font-bold">AWS Certified</p>
              <p className="text-sm opacity-80">Cloud Practitioner</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: CONTACT INFO --- */}
      <footer className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-500 mb-8">Feel free to reach out for collaborations or inquiries.</p>
<div className="flex justify-center gap-6">
  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors text-gray-700 hover:text-blue-600">
    <Mail />
  </a>
  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors text-gray-700 hover:text-blue-600">
    <SiGithub size={24} /> 
  </a>
</div>
      </footer>
    </div>
  );
}