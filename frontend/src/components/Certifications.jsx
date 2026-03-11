import React from 'react';
import { certifications } from '../mock';
import { Card, CardContent } from './ui/card';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 sm:py-32 px-4 sm:px-6 bg-background relative overflow-hidden">

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Continuous <span className="text-primary italic">Learning</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        Professional certifications and specialized technical workshops
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            key={cert.id}
                        >
                            <Card
                                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group flex flex-col rounded-[2rem] h-full"
                            >
                                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                                        <Award className="text-primary w-8 h-8" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{cert.title}</h3>

                                    <p className="text-base text-gray-400 font-medium mb-4">{cert.issuer}</p>

                                    <div className="mt-auto pt-6 flex items-center justify-between w-full border-t border-white/10">
                                        <span className="text-sm font-semibold text-gray-500">{cert.date}</span>
                                        {cert.credentialId && (
                                            <span className="text-xs font-mono text-gray-400 bg-black/40 border border-white/5 px-3 py-1.5 rounded-lg font-bold">
                                                ID: {cert.credentialId}
                                            </span>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
