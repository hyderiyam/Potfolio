import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import GitHub from './components/GitHub';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

import NeuralBackground from './components/effects/NeuralBackground';
import CustomCursor from './components/effects/CustomCursor';
import ScrollProgress from './components/effects/ScrollProgress';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <div className="App bg-background min-h-screen transition-colors duration-300 relative">
        <NeuralBackground />
        <ScrollProgress />
        <CustomCursor />
        <Header />

        <main className="relative z-10">
          <Hero />
          <Services />
          <Process />
          <Projects />
          <TechStack />
          <Certifications />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
