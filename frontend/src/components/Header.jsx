import React, { useState, useEffect } from 'react';
import {
  Home, Briefcase, FolderOpen, Cpu, Award, User, Mail,
  Layers, ChevronLeft, Menu, X
} from 'lucide-react';
import { contact } from '../mock';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home',           href: '#hero',           icon: Home },
  { label: 'Services',       href: '#services',       icon: Briefcase },
  { label: 'Projects',       href: '#projects',       icon: FolderOpen },
  { label: 'Process',        href: '#process',        icon: Layers },
  { label: 'Tech Stack',     href: '#techstack',      icon: Cpu },
  { label: 'Certifications', href: '#certifications', icon: Award },
  { label: 'About',          href: '#about',          icon: User },
  { label: 'Contact',        href: '#contact',        icon: Mail },
];

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    document.documentElement.classList.add('dark');

    const observers = navItems.map(({ href }) => {
      const el = document.querySelector(href);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(href); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ─── DESKTOP: Vertical Pill Sidebar ─── */}
      <motion.aside
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        animate={{ width: isExpanded ? 200 : 62 }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        className="fixed top-1/2 left-5 -translate-y-1/2 z-50 hidden md:block overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(12,7,36,0.92) 0%, rgba(7,4,26,0.95) 100%)',
          border: '1px solid rgba(168,85,247,0.12)',
          backdropFilter: 'blur(28px)',
          borderRadius: 31,
          boxShadow: '0 25px 70px rgba(0,0,0,0.55), 0 0 1px rgba(168,85,247,0.15)',
        }}
      >
        <div className="flex flex-col py-5 px-[10px] gap-[6px]">

          {/* ── Logo ── */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="flex items-center gap-3 mb-3 group"
            style={{ height: 42, paddingLeft: 1 }}
          >
            <div
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #A855F7, #6366F1)',
                boxShadow: '0 0 20px rgba(168,85,247,0.45)',
              }}
            >
              <span className="text-white font-black text-sm select-none">S</span>
            </div>
            <motion.span
              animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -6 }}
              transition={{ duration: 0.2, delay: isExpanded ? 0.08 : 0 }}
              className="text-white font-black text-sm tracking-tight whitespace-nowrap"
              style={{ pointerEvents: isExpanded ? 'auto' : 'none' }}
            >
              Syed Hyder Abbas
            </motion.span>
          </a>

          {/* ── Divider ── */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '0 4px 4px 4px' }} />

          {/* ── Nav Items ── */}
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="flex items-center gap-3 group relative"
                style={{ height: 42, paddingLeft: 1 }}
              >
                {/* Icon circle */}
                <div
                  className="w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 relative"
                  style={{
                    background: isActive
                      ? 'rgba(168,85,247,0.18)'
                      : 'rgba(255,255,255,0.03)',
                    border: isActive
                      ? '2px solid rgba(168,85,247,0.55)'
                      : '2px solid transparent',
                    boxShadow: isActive
                      ? '0 0 16px rgba(168,85,247,0.4), inset 0 0 8px rgba(168,85,247,0.15)'
                      : 'none',
                  }}
                >
                  <Icon
                    size={17}
                    strokeWidth={isActive ? 2.2 : 1.6}
                    className="transition-colors duration-300"
                    style={{
                      color: isActive ? '#A855F7' : 'rgba(255,255,255,0.4)',
                    }}
                  />

                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavDot"
                      className="absolute -bottom-[2px] left-1/2 -translate-x-1/2"
                      style={{
                        width: 5, height: 5,
                        borderRadius: '50%',
                        background: '#A855F7',
                        boxShadow: '0 0 8px #A855F7',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    />
                  )}
                </div>

                {/* Label text */}
                <motion.span
                  animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -6 }}
                  transition={{ duration: 0.18, delay: isExpanded ? 0.06 : 0 }}
                  className="text-[11px] font-bold uppercase tracking-[0.14em] whitespace-nowrap select-none"
                  style={{
                    color: isActive ? '#C084FC' : 'rgba(255,255,255,0.45)',
                    pointerEvents: isExpanded ? 'auto' : 'none',
                    textShadow: isActive ? '0 0 12px rgba(168,85,247,0.3)' : 'none',
                  }}
                >
                  {label}
                </motion.span>
              </a>
            );
          })}

          {/* ── Divider ── */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '4px 4px 4px 4px' }} />

          {/* ── Hire Me ── */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 group"
            style={{ height: 42, paddingLeft: 1 }}
          >
            <div
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(168,85,247,0.22), rgba(99,102,241,0.18))',
                border: '2px solid rgba(168,85,247,0.35)',
                boxShadow: '0 0 14px rgba(168,85,247,0.25)',
              }}
            >
              <Mail size={15} strokeWidth={2} style={{ color: '#A855F7' }} />
            </div>
            <motion.span
              animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -6 }}
              transition={{ duration: 0.18, delay: isExpanded ? 0.06 : 0 }}
              className="text-[11px] font-black uppercase tracking-[0.14em] whitespace-nowrap select-none"
              style={{
                color: '#C084FC',
                pointerEvents: isExpanded ? 'auto' : 'none',
                textShadow: '0 0 12px rgba(168,85,247,0.3)',
              }}
            >
              Hire Me
            </motion.span>
          </a>
        </div>
      </motion.aside>

      {/* ─── MOBILE: Top floating pill ─── */}
      <MobileNav />
    </>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="md:hidden fixed top-4 left-4 right-4 z-50">
      <div
        className="flex items-center justify-between px-5 py-3 rounded-full"
        style={{
          background: 'rgba(7,4,26,0.9)',
          border: '1px solid rgba(168,85,247,0.12)',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        }}
      >
        <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #A855F7, #6366F1)' }}
          >
            <span className="text-white font-black text-xs">S</span>
          </div>
          <span className="text-white font-black text-sm tracking-tight">Syed Hyder Abbas</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: isOpen ? 'rgba(168,85,247,0.22)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${isOpen ? 'rgba(168,85,247,0.4)' : 'rgba(255,255,255,0.08)'}`,
          }}
        >
          {isOpen ? <X size={15} style={{ color: '#A855F7' }} /> : <Menu size={15} style={{ color: 'rgba(255,255,255,0.6)' }} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="mt-2 py-3 px-3 rounded-[2rem] flex flex-col gap-1"
            style={{
              background: 'rgba(7,4,26,0.92)',
              border: '1px solid rgba(168,85,247,0.1)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            }}
          >
            {navItems.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Icon size={15} strokeWidth={1.8} />
                <span className="text-[11px] font-bold uppercase tracking-[0.15em]">{label}</span>
              </a>
            ))}
            <div className="pt-2 border-t border-white/5 mt-1">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl font-black uppercase tracking-widest text-[11px]"
                style={{
                  background: 'rgba(168,85,247,0.15)',
                  border: '1px solid rgba(168,85,247,0.3)',
                  color: '#A855F7',
                }}
              >
                <Mail size={13} /> Hire Me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
