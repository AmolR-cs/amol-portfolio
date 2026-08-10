import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 pt-12 pb-8 mt-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tighter mb-2">
              Amol<span className="text-white"> R</span>
            </a>
            <p className="text-slate-400 text-sm">Building the future of the web, one line at a time.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/AmolR-cs" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/amol-r-67ba29332" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors p-2 hover:bg-white/5 rounded-lg">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/amol_.r_73/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-400 transition-colors p-2 hover:bg-white/5 rounded-lg">
              <Instagram size={20} />
            </a>
            <a href="mailto:amolrangdol18@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors p-2 hover:bg-white/5 rounded-lg">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Amol R. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
