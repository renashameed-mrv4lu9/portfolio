import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { t, lang, setLang } = useLanguage();

  // Initialize theme from local storage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light-mode');
    } else {
      setIsDark(true);
      document.documentElement.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
  ];

  return (
    <>
      <header className="fixed top-0 start-0 end-0 z-50 border-b border-border bg-void/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto border-x border-border flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center h-full px-6 border-e border-border min-w-[200px]">
            <a href="#" className="relative group block py-2">
              <div className="absolute -inset-4 bg-acid/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="https://i.ibb.co/1tVnxn28/logo1-transparent1.png" 
                alt="Renas Hameed Logo" 
                className="h-8 md:h-10 w-auto relative z-10 object-contain transition-transform duration-300 group-hover:scale-105 [.light-mode_&]:brightness-0 [.light-mode_&]:invert"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center h-full flex-grow justify-end">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="h-full flex items-center px-6 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 border-s border-border transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Toggle */}
            <div className="relative group h-full flex items-center px-6 border-s border-border hover:bg-white/5 transition-colors cursor-pointer">
                <Globe className="w-5 h-5 text-gray-400 group-hover:text-acid transition-colors" />
                <span className="ms-2 text-sm font-medium text-gray-400 uppercase">{lang}</span>
                
                {/* Dropdown */}
                <div className="absolute top-full end-0 w-32 bg-void border border-border hidden group-hover:block">
                    <button onClick={() => setLang('en')} className="w-full text-start px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">English</button>
                    <button onClick={() => setLang('ar')} className="w-full text-start px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">العربية</button>
                    <button onClick={() => setLang('ku')} className="w-full text-start px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">کوردی</button>
                </div>
            </div>

            {/* Theme Toggle */}
            <button 
                onClick={toggleTheme}
                className="h-full flex items-center px-6 border-s border-border hover:bg-white/5 transition-colors group"
                aria-label="Toggle Theme"
            >
                {isDark ? (
                    <Sun className="w-5 h-5 text-gray-400 group-hover:text-acid transition-colors" />
                ) : (
                    <Moon className="w-5 h-5 text-gray-400 group-hover:text-acid transition-colors" />
                )}
            </button>

            <a
              href="#contact"
              className="h-full flex items-center gap-2 px-8 text-sm font-bold text-void bg-acid hover:bg-white hover:text-void border-s border-border transition-colors uppercase tracking-wider"
            >
              {t('nav.contact')} <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden h-full flex items-center px-4 border-s border-border gap-4">
             <button
                onClick={toggleTheme}
                className="text-white hover:text-acid transition-colors"
             >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
             </button>
             <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-acid transition-colors"
             >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 start-0 end-0 z-40 bg-void border-b border-border md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-6 border-b border-border text-lg font-medium text-gray-300 hover:text-acid hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="p-6 border-b border-border flex justify-around">
                  <button onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }} className={`text-sm ${lang === 'en' ? 'text-acid' : 'text-gray-400'}`}>EN</button>
                  <button onClick={() => { setLang('ar'); setIsMobileMenuOpen(false); }} className={`text-sm ${lang === 'ar' ? 'text-acid' : 'text-gray-400'}`}>AR</button>
                  <button onClick={() => { setLang('ku'); setIsMobileMenuOpen(false); }} className={`text-sm ${lang === 'ku' ? 'text-acid' : 'text-gray-400'}`}>KU</button>
              </div>
              <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-6 text-lg font-bold text-acid"
              >
                  {t('nav.contact')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;