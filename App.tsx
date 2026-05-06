import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import { useLanguage } from './LanguageContext';
import { Project } from './types';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { lang } = useLanguage();
  const isRtl = lang === 'ar' || lang === 'ku';
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const scrollPositionRef = useRef(0);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenProject = (project: Project) => {
    scrollPositionRef.current = window.scrollY;
    setActiveProject(project);
  };

  const handleCloseProject = () => {
    setActiveProject(null);
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPositionRef.current);
    });
  };

  return (
    <div className="bg-void text-white min-h-screen font-sans antialiased relative selection:bg-acid selection:text-void flex flex-col">
      {/* Scroll Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r ${isRtl ? 'from-violet via-cyan to-acid origin-right' : 'from-acid via-cyan to-violet origin-left'} z-[60]`}
        style={{ scaleX }}
      />

      {/* Global Background Noise & Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ 
                   backgroundImage: 'linear-gradient(rgba(var(--text-main), 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--text-main), 0.1) 1px, transparent 1px)', 
                   backgroundSize: '50px 50px' 
               }}>
          </div>
      </div>

      <AnimatePresence mode="wait">
        {activeProject ? (
          <motion.div
            key="project-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <ProjectPage project={activeProject} onBack={handleCloseProject} />
          </motion.div>
        ) : (
          <motion.div
            key="main-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Navbar />
            
            <main className="relative z-10 flex-grow border-x border-border max-w-[1600px] mx-auto w-full shadow-2xl shadow-black bg-void/50 backdrop-blur-[2px]">
              <Hero />
              <About />
              <Skills />
              <Services />
              <Projects onOpenProject={handleOpenProject} />
              <Experience />
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;