import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { contact } from '../mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Certifications', href: '#certifications' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-700 px-4 sm:px-6`}
    >
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${isScrolled ? 'w-full' : 'w-full'}`}>
        <div className={`flex items-center justify-between px-6 py-4 rounded-full border transition-all duration-700 ${isScrolled 
          ? 'glass shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'}`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-2xl font-black text-white hover:opacity-80 transition-opacity tracking-tighter flex items-center gap-1 group"
          >
            <span className="text-primary group-hover:rotate-12 transition-transform inline-block">S.</span>
            <span>Hyder</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-white/5 backdrop-blur-md border border-white/5 px-2 py-1 rounded-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 hover:text-white transition-all px-4 py-2 hover:bg-white/5 rounded-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`, '_blank')}
              className="bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all duration-500 rounded-full px-8 py-6 text-sm font-black uppercase tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="flex flex-col space-y-2 p-6 glass border border-white/10 shadow-2xl rounded-[2rem]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-400 hover:text-white hover:bg-white/5 px-4 py-4 rounded-2xl transition-all font-black uppercase tracking-widest text-xs"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`, '_blank')}
              className="w-full mt-4 bg-primary text-white hover:bg-primary/90 rounded-2xl py-8 font-black uppercase tracking-widest shadow-xl"
            >
              Let's Talk
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
