import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-center gap-12 pt-20 relative">
      {/* Subtle Background Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col gap-6"
      >
        <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold text-sm w-max mb-4">
          👋 Welcome to my portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-300">Amol R</span><br/>
          <span className="text-slate-300 text-3xl md:text-5xl mt-2 block font-bold">Web Developer | Computer Science & Design Engineering Student</span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed">
          I build modern, scalable web applications with premium user experiences. Let's create something extraordinary together.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <a href="#contact" className="btn-primary flex items-center gap-2 group">
            Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#projects" className="btn-outline">
            View Work
          </a>
          <a href="https://github.com/AmolR-cs" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
            <Github size={18} /> GitHub Profile
          </a>
        </div>

        <div className="flex items-center gap-6 mt-6">
          <a href="https://github.com/AmolR-cs" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/amol-r-67ba29332" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors p-2 hover:bg-white/5 rounded-lg">
            <Linkedin size={24} />
          </a>
          <a href="mailto:amolrangdol18@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors p-2 hover:bg-white/5 rounded-lg">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center items-center"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/40 to-indigo-500/40 animate-glow blur-2xl opacity-60"></div>
          <div className="relative w-full h-full rounded-full border-[4px] border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.25)] overflow-hidden glass-panel z-10 flex items-center justify-center p-2">
            <img 
              src="/profile.jpeg" 
              alt="Amol R" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
