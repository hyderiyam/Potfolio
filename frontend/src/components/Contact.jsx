import React from 'react';
import { contact } from '../mock';
import { Button } from './ui/button';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

import { fireConfetti } from '../lib/confetti';

const Contact = () => {
  const handleGetInTouch = (e) => {
    fireConfetti();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.1)] p-8 sm:p-16 rounded-[3rem] text-center mb-16 relative overflow-hidden"
        >
          {/* Inner CTA Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight relative z-10">
            Let's Build Your <span className="text-primary italic">Product</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium relative z-10">
            Have a project in mind? I'm available for freelance work and ready to turn your vision into reality.
          </p>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative z-10"
          >
            <Button 
              onClick={handleGetInTouch}
              className="bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 duration-300 px-8 py-6 sm:px-10 sm:py-7 text-lg rounded-full font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <Mail className="mr-2" size={24} />
              Get In Touch
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </a>
        </motion.div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group shadow-xl"
          >
            <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              <Mail className="text-primary w-7 h-7" />
            </div>
            <span className="text-[10px] font-black text-gray-400 mb-1 tracking-widest uppercase">Email</span>
            <span className="text-sm text-gray-300 font-bold group-hover:text-white transition-colors">{contact.email}</span>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href={`tel:${contact.phone}`}
            className="flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-secondary/50 hover:bg-white/10 transition-all duration-300 group shadow-xl"
          >
            <div className="w-14 h-14 bg-secondary/10 border border-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.1)]">
              <Phone className="text-secondary w-7 h-7" />
            </div>
            <span className="text-[10px] font-black text-gray-400 mb-1 tracking-widest uppercase">Phone</span>
            <span className="text-sm text-gray-300 font-bold group-hover:text-white transition-colors">{contact.phone}</span>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href={`https://wa.me/${contact.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 group shadow-xl"
          >
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <LucideIcons.MessageSquare className="text-emerald-500 w-7 h-7" />
            </div>
            <span className="text-[10px] font-black text-gray-400 mb-1 tracking-widest uppercase">WhatsApp</span>
            <span className="text-sm text-gray-300 font-bold group-hover:text-white transition-colors">Chat on WhatsApp</span>
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] shadow-xl"
        >
          <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {contact.social.map((social, index) => {
              const IconComponent = LucideIcons[social.icon];
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-black/40 hover:bg-primary/20 hover:border-primary/50 border border-white/5 text-gray-300 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1 font-semibold"
                >
                  {IconComponent && <IconComponent size={20} className="group-hover:text-primary transition-colors" />}
                  <span>{social.platform}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
