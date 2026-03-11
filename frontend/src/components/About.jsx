import React from 'react';
import { about, personalInfo } from '../mock';
import { CheckCircle2, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 bg-background relative overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              About <span className="text-primary italic">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-medium">
              {about.story.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Location */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4 text-white font-semibold">
              <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                <MapPin className="text-secondary w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm text-gray-400 font-medium">Based in</span>
                {personalInfo.location}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-2xl overflow-hidden rounded-[2rem]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                  Key Highlights
                </h3>
                <ul className="space-y-5">
                  {about.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mt-1 mr-4 rounded-full bg-primary/20 border border-primary/30 p-1 group-hover:bg-primary/40 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-base font-medium text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Core Values */}
            <Card className="bg-primary/10 backdrop-blur-md border-primary/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] mt-6 rounded-[2rem]">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">What I Value</h3>
                <ul className="grid grid-cols-2 gap-4 text-sm font-semibold text-gray-200">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(168,85,247,0.8)]" /> Clean Code
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(168,85,247,0.8)]" /> Transparency
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(168,85,247,0.8)]" /> Scalability
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(168,85,247,0.8)]" /> Agile Delivery
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
