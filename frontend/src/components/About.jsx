import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Globe } from 'lucide-react';

export default function About() {
  const features = [
    { icon: <Code className="text-blue-500" size={32} />, title: 'Frontend Dev', desc: 'Crafting pixel-perfect, responsive UI using React, Vite and Tailwind CSS.' },
    { icon: <Server className="text-blue-500" size={32} />, title: 'Backend Dev', desc: 'Building robust, scalable REST APIs using Node.js, Express, and MongoDB.' },
    { icon: <Smartphone className="text-blue-500" size={32} />, title: 'Responsive', desc: 'Ensuring seamless experiences across all devices and screen sizes.' },
    { icon: <Globe className="text-blue-500" size={32} />, title: 'SEO Optimized', desc: 'Implementing best practices to improve visibility and search rankings.' },
  ];

  return (
    <section id="about" className="py-20 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 glass-panel p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Who I Am</h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4">
              I am a passionate Full-Stack Developer dedicated to building high-performance web applications. My journey in tech is driven by a deep curiosity and a desire to solve complex problems with elegant, scalable solutions.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              With expertise in the MERN stack (MongoDB, Express, React, Node.js), I take ideas from concept to deployment. I believe in clean code and intuitive design.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 flex flex-col gap-4 border border-white/5 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-500/10 rounded-xl w-fit group-hover:bg-blue-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{feature.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
