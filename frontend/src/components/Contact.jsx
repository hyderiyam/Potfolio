import React, { useState } from 'react';
import { contact } from '../mock';
import { Button } from './ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { fireConfetti } from '../lib/confetti';

const Contact = () => {
  const [hoveredInfo, setHoveredInfo] = useState('');
  const [hoveredColor, setHoveredColor] = useState('rgba(255, 255, 255, 0.45)');

  const handleGetInTouch = (e) => {
    fireConfetti();
  };

  const handleMouseEnter = (info, color) => {
    setHoveredInfo(info);
    setHoveredColor(color);
  };

  const handleMouseLeave = () => {
    setHoveredInfo('');
    setHoveredColor('rgba(255, 255, 255, 0.45)');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* ── Let's Build Your Product (CTA Box - Shifted to Top) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.1)] p-8 sm:p-16 rounded-[3rem] text-center mb-16 relative overflow-hidden"
        >
          {/* Inner CTA Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight relative z-10">
            Let's Build Your <span className="text-primary italic">Product</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium relative z-10">
            Have a project in mind? We are available for large-scale engineering projects and ready to turn your vision into reality.
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

        {/* ── Connect With Me (Shifted to Bottom) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">
            Connect With Me
          </h3>
          <StyledWrapper>
            <div className="card flex flex-col items-center gap-5">
              {/* Row of Social Buttons */}
              <div className="flex items-center justify-center gap-5">
                
                {/* 1. Phone */}
                <a 
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`} 
                  className="socialContainer containerOne" 
                  onMouseEnter={() => handleMouseEnter(contact.phone, '#6366f1')}
                  onMouseLeave={handleMouseLeave}
                  title="Call Us"
                >
                  <svg className="socialSvg phoneSvg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </a>

                {/* 2. Email */}
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="socialContainer containerFive" 
                  onMouseEnter={() => handleMouseEnter(contact.email, '#ea4335')}
                  onMouseLeave={handleMouseLeave}
                  title="Email"
                >
                  <svg className="socialSvg emailSvg" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-.582-.576L6.76 8.83Zm8.803.02L11 8.83l5.803 3.558V4.697Z"/>
                  </svg>
                </a>

                {/* 3. GitHub */}
                <a 
                  href="https://github.com/hyderiyam" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="socialContainer containerTwo" 
                  onMouseEnter={() => handleMouseEnter('github.com/hyderiyam', '#ffffff')}
                  onMouseLeave={handleMouseLeave}
                  title="GitHub"
                >
                  <svg className="socialSvg githubSvg" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>

                {/* 4. LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/syed-hyder-abbas-73b851230" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="socialContainer containerThree" 
                  onMouseEnter={() => handleMouseEnter('Syed Hyder Abbas', '#0072b1')}
                  onMouseLeave={handleMouseLeave}
                  title="LinkedIn"
                >
                  <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>

                {/* 5. WhatsApp */}
                <a 
                  href={`https://wa.me/${contact.whatsapp.replace('+', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="socialContainer containerFour" 
                  onMouseEnter={() => handleMouseEnter(contact.phone, '#25d366')}
                  onMouseLeave={handleMouseLeave}
                  title="WhatsApp"
                >
                  <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>

              </div>

              {/* Dynamic Info Text Block */}
              <div className="w-full flex items-center justify-center" style={{ minHeight: 28 }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={hoveredInfo || 'default'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="text-sm font-bold tracking-widest uppercase select-none"
                    style={{ color: hoveredColor }}
                  >
                    {hoveredInfo || 'Hover an icon to reveal details'}
                  </motion.span>
                </AnimatePresence>
              </div>

            </div>
          </StyledWrapper>
        </motion.div>

      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: fit-content;
    height: fit-content;
    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px 40px;
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.35);
    border-radius: 28px;
    backdrop-filter: blur(12px);
  }

  /* for all social containers*/
  .socialContainer {
    width: 52px;
    height: 52px;
    background-color: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: 0.3s;
  }
  
  /* Phone containerOne */
  .containerOne:hover {
    background-color: #6366f1;
    transition-duration: 0.3s;
    transform: scale(1.35) translateY(-5px);
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.35);
  }
  
  /* GitHub containerTwo */
  .containerTwo:hover {
    background-color: #24292e;
    transition-duration: 0.3s;
    transform: scale(1.35) translateY(-5px);
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(36, 41, 46, 0.4);
  }
  
  /* LinkedIn containerThree */
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: 0.3s;
    transform: scale(1.35) translateY(-5px);
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 114, 177, 0.35);
  }
  
  /* WhatsApp containerFour */
  .containerFour:hover {
    background-color: #25d366;
    transition-duration: 0.3s;
    transform: scale(1.35) translateY(-5px);
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.35);
  }

  /* Email containerFive */
  .containerFive:hover {
    background-color: #ea4335;
    transition-duration: 0.3s;
    transform: scale(1.35) translateY(-5px);
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(234, 67, 53, 0.35);
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }

  .socialSvg {
    width: 18px;
    transition: transform 0.3s;
  }

  .socialSvg path {
    fill: rgb(255, 255, 255);
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }`;

export default Contact;
