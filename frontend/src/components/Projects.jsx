import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "ZYNC \u2013 Real-Time Chat Application",
      description: "A real-time chat application featuring secure messaging and dynamic user interfaces.",
      tags: ["React", "Node.js", "Express", "Socket.io"],
      github: "https://github.com/AmolR-cs/zync.git",
      demo: "https://zync-mxm2.onrender.com"
    },
    {
      title: "NexCart",
      description: "A full-stack e-commerce solution with product management, shopping cart, user authentication, and secure checkout integration.",
      tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/AmolR-cs/nexcart",
      demo: "https://nexcart-git-master-amolr-cs-projects.vercel.app"
    },
    {
      title: "Real-Time Expense Tracker App",
      description: "A comprehensive financial dashboard to track expenses and income in real-time. Includes visual analytics and categorized spending.",
      tags: ["React", "Chart.js", "MongoDB", "Express", "Node.js"],
      github: "https://github.com/AmolR-cs/expense-tracker",
      demo: "https://expense-tracker-om34.onrender.com"
    }
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="glass-panel overflow-hidden flex flex-col h-full group border border-white/5 hover:border-blue-500/50 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)] transition-all duration-500 rounded-2xl"
            >
              <div className="h-48 bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-950 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                <h3 className="text-2xl font-bold text-white z-10 tracking-wide">{project.title.split(' ')[0]}</h3>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors text-white">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold text-blue-300 bg-blue-500/15 border border-blue-500/20 px-3 py-1.5 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-lg">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors ml-auto p-1.5 hover:bg-blue-500/10 rounded-lg">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
