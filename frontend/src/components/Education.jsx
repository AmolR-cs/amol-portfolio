import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "B.E. in Computer Science and Design",
      institution: "PES Institute of Technology and Management, Shivamogga",
      university: "VTU, Belagavi",
      duration: "2024 - 2028"
    }
  ];

  const certifications = [
    {
      name: "Database Management System",
      issuer: "NPTEL",
      link: "https://drive.google.com/file/d/1WitK58JugVRaSpEYvrGe4C1PcS3om3iJ/view?usp=drivesdk"
    },
    {
      name: "Azure AI Fundamentals",
      issuer: "Microsoft",
      link: "https://drive.google.com/file/d/16F5zQCwb9WQVzF_pEDZqUIcGD1Nrdrd_/view?usp=drivesdk"
    },
    {
      name: "Direct Entry Certificate",
      issuer: "Internshala Student Partner Program",
      link: "https://drive.google.com/file/d/1RN66SYKfgD2yCwuAD7sxOHuQdUhiv8yM/view?usp=drivesdk"
    }
  ];

  return (
    <section id="education" className="py-20 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">Education & Certifications</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Education */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
              <GraduationCap className="text-blue-400" /> Education
            </h3>
            <div className="flex flex-col gap-6">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="glass-panel p-6 border-l-4 border-blue-500 rounded-l-none border-y border-r border-white/5 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <p className="text-blue-400 font-semibold mt-1">{edu.institution}</p>
                  <p className="text-slate-300 text-sm mt-1">{edu.university}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-slate-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-semibold">{edu.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
              <Award className="text-blue-400" /> Certifications
            </h3>
            <div className="flex flex-col gap-6">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="glass-panel p-6 border border-white/5 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] flex flex-col gap-2 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-white">{cert.name}</h4>
                  <p className="text-slate-300 text-sm">Issued by: <span className="text-slate-200 font-medium">{cert.issuer}</span></p>
                  <div className="flex justify-between items-center mt-2">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">
                      View Certificate →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
