import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { contact } from '../mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Ensure dark mode is active for consistency with design system
    document.documentElement.classList.add('dark');

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-background/50 backdrop-blur-md border-border shadow-lg py-3'
        : 'bg-transparent border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-xl sm:text-2xl font-black text-foreground hover:opacity-80 transition-opacity tracking-tighter flex items-center gap-2"
          >
            <span className="text-primary">S.</span>Hyder
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`, '_blank')}
              className="bg-primary text-white hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300 rounded-full px-6 font-semibold shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="flex flex-col space-y-2 p-4 bg-background/80 backdrop-blur-md border border-border shadow-lg rounded-2xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-muted-foreground hover:text-primary hover:bg-secondary/50 px-4 py-3 rounded-xl transition-colors font-semibold"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`, '_blank')}
              className="w-full mt-4 bg-primary text-white hover:bg-primary/90 rounded-xl py-6 font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              Get In Touch
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
