import React from 'react';
import { services } from '../mock';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

// Using names that match Lucide icons exactly
const serviceIcons = ['Smartphone', 'Globe', 'Database', 'GitBranch', 'Wrench'];

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 bg-background relative overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Specialized <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            End-to-end development solutions tailored for scale and performance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const iconName = serviceIcons[index % serviceIcons.length];
            const IconComponent = LucideIcons[iconName];

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                key={service.id}
              >
                <Card
                  className="group border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col relative overflow-hidden rounded-[2rem] h-full"
                >
                  <CardHeader className="p-8 pb-4 relative z-10">
                    <div className="w-14 h-14 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                      {IconComponent && <IconComponent className="text-primary" size={28} strokeWidth={1.5} />}
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-8 pt-0 mt-auto relative z-10">
                    <div className="space-y-3 pt-6 border-t border-white/10">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-400 font-medium group-hover:text-white transition-colors">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                          <span className="leading-snug">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
