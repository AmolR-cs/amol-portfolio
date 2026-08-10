import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Full-Stack Web Development Intern",
      company: "CodeAlpha",
      duration: "Present",
      description: "Developing and maintaining full-stack applications. Implementing real-time features, secure authentication, and responsive UIs."
    },
    {
      role: "Web Development Intern",
      company: "Sky Forger Technology",
      duration: "Previous",
      description: "Assisted in building responsive front-end components and integrating backend systems."
    }
  ];

  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">Experience</h2>
        
        <div className="max-w-3xl mx-auto mt-12 relative border-l-2 border-blue-500/30 pl-8 ml-4 md:ml-auto">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-[41px] top-0 p-2 bg-[#0b0f17] border-2 border-blue-500 rounded-full text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Briefcase size={16} />
              </div>
              
              <div className="glass-panel p-6 border border-white/5 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-300">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm mt-2 mb-4">
                  <span className="text-blue-400 font-semibold">{exp.company}</span>
                  <span className="text-slate-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full text-xs font-medium">{exp.duration}</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
