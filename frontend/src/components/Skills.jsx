import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript"]
    },
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      skills: ["MongoDB"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel p-8 border border-white/5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:border-blue-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-400 border-b border-white/10 pb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + (i * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-slate-900/90 text-slate-200 font-medium rounded-xl text-sm border border-blue-500/20 hover:border-blue-400 hover:text-white hover:bg-blue-600/20 shadow-sm transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
