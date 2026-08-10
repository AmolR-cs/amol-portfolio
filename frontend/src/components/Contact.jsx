import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });
    
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      if (res.data.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus({ 
        loading: false, 
        success: false, 
        error: error.response?.data?.error || 'Something went wrong. Please try again.' 
      });
    }
  };

  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-8">
            <h3 className="text-3xl font-bold text-white mb-2">Let's Connect</h3>
            <p className="text-slate-300 mb-4 leading-relaxed text-base md:text-lg">
              I'm currently open for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:amolrangdol18@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">amolrangdol18@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                  <a href="https://wa.me/917019886159" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">7019886159</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-slate-300 font-medium">Shivamogga, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-[1.5] glass-panel p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-200">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-200">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-200">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-200">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-medium"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              {status.error && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  <AlertCircle size={18} /> <span className="text-sm">{status.error}</span>
                </div>
              )}
              
              {status.success && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                  <CheckCircle size={18} /> <span className="text-sm">Message sent successfully!</span>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={status.loading}
                className="btn-primary w-full flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
