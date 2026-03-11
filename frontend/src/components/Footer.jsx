import React from 'react';
import { personalInfo, contact } from '../mock';
import * as LucideIcons from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0F0721] text-white py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="inline-block text-2xl sm:text-3xl font-black text-white hover:opacity-80 transition-opacity tracking-tight mb-4"
            >
              <span className="text-primary italic">S.</span>Hyder
            </a>
            <p className="text-base text-gray-400 mb-4 max-w-sm font-medium leading-relaxed">
              {personalInfo.title}
            </p>
            <p className="text-sm font-semibold text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm font-medium text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {contact.social.map((social, index) => {
                const IconComponent = LucideIcons[social.icon];
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 hover:bg-primary/20 hover:border-primary/50 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm text-gray-300 hover:text-primary"
                    aria-label={social.platform}
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium text-center md:text-left">
            © {currentYear} {personalInfo.username}. Crafted with precision.
          </p>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <span>Powered by</span>
            <span className="text-white">React</span>
            <span>&bull;</span>
            <span className="text-white">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
