import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Terminal, Cpu, Code2, Zap, Wifi, Layers, Shield, Database, Palette, Smartphone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const revealVariants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.8 }
    }
  };

  return (
    <section id="home" className="relative grid md:grid-cols-12 min-h-screen pt-24 border-b border-border overflow-hidden bg-void">

      {/* Styles for Water Effect */}
      <style>{`
        @keyframes waterFill {
          0% { background-position: 0% 110%; }
          100% { background-position: 0% -10%; }
        }
        .water-text {
          position: relative;
          color: rgba(255, 255, 255, 0.1); /* Fallback/Base dim color */
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          background: linear-gradient(to top, #CCF381 48%, #22d3ee 50%, rgba(255,255,255,0.05) 55%);
          background-size: 100% 250%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: waterFill 5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
        }
        .water-glow {
            filter: drop-shadow(0 0 15px rgba(204, 243, 129, 0.15));
        }
      `}</style>

      {/* Background: Geometric Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 start-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 start-0 w-full h-full bg-gradient-to-b from-void via-transparent to-void"></div>
      </div>

      {/* LEFT COLUMN: Typography & Content */}
      <div className="md:col-span-7 flex flex-col justify-center px-8 md:px-16 py-20 relative z-20 border-e border-border bg-void/60 backdrop-blur-sm">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Identity Header - Architectural Badge */}
          <div className="mb-10 overflow-hidden">
            <motion.div variants={revealVariants} className="inline-flex items-center gap-3 px-3 py-1 border-s-2 border-acid bg-white/5">
              <Layers className="w-3 h-3 text-acid" />
              <h3 className="font-mono text-gray-400 text-xs tracking-[0.2em] uppercase">
                {t('hero.role').split('|')[0]} <span className="text-white/20 mx-2">|</span> {t('hero.role').split('|')[1]}
              </h3>
            </motion.div>
          </div>

          {/* MASSIVE HEADLINE - WATER EFFECT */}
          <div className="relative mb-8 leading-[0.85] select-none water-glow">
            {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.h1
                variants={revealVariants}
                className="water-text text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                data-text={t('hero.firstName')}
              >
                {t('hero.firstName')}
              </motion.h1>
            </div>

            {/* Line 2 */}
            <div className="overflow-hidden flex items-end">
              <motion.h1
                variants={revealVariants}
                className="water-text text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                style={{ animationDelay: '0.5s' }}
                data-text={t('hero.lastName')}
              >
                {t('hero.lastName')}
              </motion.h1>
              <motion.span
                variants={revealVariants}
                className="text-6xl md:text-8xl lg:text-9xl font-black text-acid leading-[0.85]"
              >
                .
              </motion.span>
            </div>
          </div>

          {/* Subtext */}
          <div className="mb-10">
            <motion.p variants={fadeInVariants} className="text-lg md:text-xl text-gray-400 font-light max-w-lg leading-relaxed">
              {t('hero.description')}
            </motion.p>
          </div>

          {/* Buttons */}
          <div>
            <motion.div variants={fadeInVariants} className="flex flex-wrap gap-4">
              <a href="#projects" className="group relative px-8 py-4 bg-acid text-void font-bold uppercase tracking-wider text-sm overflow-hidden hover:bg-white transition-colors shadow-[0_0_20px_rgba(204,243,129,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.viewWork')} <ArrowRight className="w-4 h-4 rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                <Wifi className="w-4 h-4" /> {t('hero.startProject')}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: Visuals */}
      <div className="md:col-span-5 relative min-h-[50vh] md:min-h-full overflow-hidden flex items-center justify-center bg-void-light/30 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-void via-transparent to-acid/5"></div>

        {/* Central System Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] flex items-center justify-center"
        >
          {/* 1. Background Wireframe Rings (Slow Spin) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-white/5 rounded-full"
          >
            <div className="absolute inset-0 border border-dashed border-white/5 rounded-full opacity-50"></div>
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 md:inset-16 border border-white/5 rounded-full opacity-30"
          ></motion.div>

          {/* 2. Core Image Container */}
          <div className="relative w-56 h-56 md:w-80 md:h-80 z-20 flex items-center justify-center">

            {/* Rotating Tech Ring (Immediate neighbor to image) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-5px] rounded-full border border-dashed border-acid/20 border-t-acid/60"
            ></motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-15px] rounded-full border border-dotted border-cyan/20 border-b-cyan/50"
            ></motion.div>

            {/* Glow Behind */}
            <div className="absolute inset-0 bg-acid/10 rounded-full blur-3xl animate-pulse"></div>

            {/* The Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] bg-void group">
              {/* Gradient overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-tr from-void/40 via-transparent to-acid/10 z-10 pointer-events-none"></div>

              {/* Digital Scan Line */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(204,243,129,0.05)_50%)] bg-[length:100%_3px] z-20 pointer-events-none"></div>

              {/* Profile Picture */}
              <img
                src="https://i.ibb.co/DD5LrxD3/IMG-20251227-170531-311.jpg"
                alt="Renas Hameed"
                className="w-full h-full object-cover object-top transition-all duration-700 filter grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100"
              />
            </div>
          </div>

          {/* 3. Orbiting Satellites */}
          {/* Inner Orbit - Counter Clockwise */}
          <OrbitingBadge label={t('hero.badges.systems')} radius={170} duration={30} delay={0} icon={<Terminal size={12} />} />
          <OrbitingBadge label={t('hero.badges.secure')} radius={170} duration={30} delay={7.5} icon={<Shield size={12} />} />
          <OrbitingBadge label={t('hero.badges.logic')} radius={170} duration={30} delay={15} icon={<Cpu size={12} />} />
          <OrbitingBadge label={t('hero.badges.data')} radius={170} duration={30} delay={22.5} icon={<Database size={12} />} />

          {/* Outer Orbit - Clockwise */}
          <OrbitingBadge label={t('hero.badges.web')} radius={220} duration={35} delay={2} icon={<Globe size={12} />} reverse />
          <OrbitingBadge label={t('hero.badges.design')} radius={220} duration={35} delay={11} icon={<Palette size={12} />} reverse />
          <OrbitingBadge label={t('hero.badges.speed')} radius={220} duration={35} delay={20} icon={<Zap size={12} />} reverse />
          <OrbitingBadge label={t('hero.badges.mobile')} radius={220} duration={35} delay={29} icon={<Smartphone size={12} />} reverse />

        </motion.div>
      </div>

      {/* Bottom Bar: Tech Stack Marquee */}
      <div className="md:col-span-12 border-t border-border bg-void-light/50 backdrop-blur-md z-20 h-16 flex items-center overflow-hidden relative">
        <div className="absolute start-0 top-0 bottom-0 w-20 bg-gradient-to-r rtl:bg-gradient-to-l from-void to-transparent z-10"></div>
        <div className="absolute end-0 top-0 bottom-0 w-20 bg-gradient-to-l rtl:bg-gradient-to-r from-void to-transparent z-10"></div>

        <div className="flex items-center gap-12 animate-scroll whitespace-nowrap px-4">
          {["REACT", "TYPESCRIPT", "NODE.JS", ".NET CORE", "CSHARP", "SQL", "NEXT.JS", "TAILWIND", "AZURE", "DOCKER", "FIGMA", "WORDPRESS"].map((tech, i) => (
            <span key={i} className="text-sm font-mono font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-acid/50 rounded-full"></span> {tech}
            </span>
          ))}
          {["REACT", "TYPESCRIPT", "NODE.JS", ".NET CORE", "CSHARP", "SQL", "NEXT.JS", "TAILWIND", "AZURE", "DOCKER", "FIGMA", "WORDPRESS"].map((tech, i) => (
            <span key={`dup-${i}`} className="text-sm font-mono font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-acid/50 rounded-full"></span> {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Helper Components ---

const OrbitingBadge: React.FC<{ icon: React.ReactNode; label: string; radius: number; duration: number; delay: number; reverse?: boolean }> = ({ icon, label, radius, duration, delay, reverse }) => {
  // Adjust radius for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const effectiveRadius = isMobile ? radius * 0.65 : radius;

  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: delay }}
      className="absolute top-1/2 start-1/2 w-0 h-0 flex items-center justify-center z-30"
    >
      <div
        className="absolute flex items-center gap-2 px-3 py-1.5 bg-void/80 border border-white/10 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        style={{ transform: `translateX(${effectiveRadius}px)` }}
      >
        {/* Counter-rotate text container to keep it upright */}
        <motion.div
          animate={{ rotate: reverse ? 360 : -360 }}
          transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: delay }}
          className="flex items-center gap-2"
        >
          <span className="text-acid">{icon}</span>
          <span className="text-[10px] font-bold text-gray-300 tracking-wider">{label}</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;