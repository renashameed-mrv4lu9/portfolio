import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  AppWindow, 
  Database, 
  Palette, 
  Share2, 
  Target, 
  Activity,
  MessageSquare,
  Code
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>("web");
  const [isHovering, setIsHovering] = useState(false);

  const services = [
    {
      id: "web",
      title: t('services.items.web.title'),
      tagline: t('services.items.web.tagline'),
      desc: t('services.items.web.desc'),
      features: [
          { label: t('services.items.web.f1'), value: t('services.items.web.v1') },
          { label: t('services.items.web.f2'), value: t('services.items.web.v2') }
      ],
      icon: <Globe className="w-6 h-6" />,
      color: "text-cyan",
      borderColor: "border-cyan",
      shadow: "shadow-cyan/50"
    },
    {
      id: "webapp",
      title: t('services.items.webapp.title'),
      tagline: t('services.items.webapp.tagline'),
      desc: t('services.items.webapp.desc'),
      features: [
          { label: t('services.items.webapp.f1'), value: t('services.items.webapp.v1') },
          { label: t('services.items.webapp.f2'), value: t('services.items.webapp.v2') }
      ],
      icon: <Code className="w-6 h-6" />,
      color: "text-indigo-400",
      borderColor: "border-indigo-400",
      shadow: "shadow-indigo-400/50"
    },
    {
      id: "software",
      title: t('services.items.software.title'),
      tagline: t('services.items.software.tagline'),
      desc: t('services.items.software.desc'),
      features: [
          { label: t('services.items.software.f1'), value: t('services.items.software.v1') },
          { label: t('services.items.software.f2'), value: t('services.items.software.v2') }
      ],
      icon: <AppWindow className="w-6 h-6" />,
      color: "text-acid",
      borderColor: "border-acid",
      shadow: "shadow-acid/50"
    },
    {
      id: "data",
      title: t('services.items.data.title'),
      tagline: t('services.items.data.tagline'),
      desc: t('services.items.data.desc'),
      features: [
          { label: t('services.items.data.f1'), value: t('services.items.data.v1') },
          { label: t('services.items.data.f2'), value: t('services.items.data.v2') }
      ],
      icon: <Database className="w-6 h-6" />,
      color: "text-violet",
      borderColor: "border-violet",
      shadow: "shadow-violet/50"
    },
    {
      id: "design",
      title: t('services.items.design.title'),
      tagline: t('services.items.design.tagline'),
      desc: t('services.items.design.desc'),
      features: [
          { label: t('services.items.design.f1'), value: t('services.items.design.v1') },
          { label: t('services.items.design.f2'), value: t('services.items.design.v2') }
      ],
      icon: <Palette className="w-6 h-6" />,
      color: "text-pink-400",
      borderColor: "border-pink-400",
      shadow: "shadow-pink-400/50"
    },
    {
      id: "social",
      title: t('services.items.social.title'),
      tagline: t('services.items.social.tagline'),
      desc: t('services.items.social.desc'),
      features: [
          { label: t('services.items.social.f1'), value: t('services.items.social.v1') },
          { label: t('services.items.social.f2'), value: t('services.items.social.v2') }
      ],
      icon: <Share2 className="w-6 h-6" />,
      color: "text-orange-400",
      borderColor: "border-orange-400",
      shadow: "shadow-orange-400/50"
    },
    {
      id: "manage",
      title: t('services.items.manage.title'),
      tagline: t('services.items.manage.tagline'),
      desc: t('services.items.manage.desc'),
      features: [
          { label: t('services.items.manage.f1'), value: t('services.items.manage.v1') },
          { label: t('services.items.manage.f2'), value: t('services.items.manage.v2') }
      ],
      icon: <Target className="w-6 h-6" />,
      color: "text-emerald-400",
      borderColor: "border-emerald-400",
      shadow: "shadow-emerald-400/50"
    },
    {
      id: "consult",
      title: t('services.items.consult.title'),
      tagline: t('services.items.consult.tagline'),
      desc: t('services.items.consult.desc'),
      features: [
          { label: t('services.items.consult.f1'), value: t('services.items.consult.v1') },
          { label: t('services.items.consult.f2'), value: t('services.items.consult.v2') }
      ],
      icon: <MessageSquare className="w-6 h-6" />,
      color: "text-yellow-400",
      borderColor: "border-yellow-400",
      shadow: "shadow-yellow-400/50"
    }
  ];
  
  // Auto-rotate if not hovering
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
        const currentIndex = services.findIndex(s => s.id === activeId);
        const nextIndex = (currentIndex + 1) % services.length;
        setActiveId(services[nextIndex].id);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeId, isHovering]);

  const activeService = services.find(s => s.id === activeId) || services[0];
  
  // Calculate position on a circle for desktop
  const getPosition = (index: number, total: number, radius: number) => {
    // Start from top (-Math.PI / 2) but shift by (Math.PI / total) so no item is directly at 12 o'clock
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2 + (Math.PI / total); 
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <section 
      id="services" 
      className="bg-void border-b border-border py-20 relative overflow-hidden min-h-[900px] flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
        {/* Ambient Glow */}
        <div className={`absolute top-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 transition-colors duration-1000 ${activeService.color.replace('text-', 'bg-')}`}></div>
        
        <div className="container mx-auto px-4 relative z-10">
            
            {/* Header - Moved up using negative top margin to clear the orbit path */}
            <div className="text-center mb-12 md:mb-0 md:absolute md:-top-16 md:start-0 md:w-full transition-all duration-300">
                <div className="inline-flex items-center justify-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-acid animate-pulse" />
                    <span className="text-xs font-mono text-gray-500 tracking-[0.3em] uppercase">{t('services.systemArch')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {t('services.core')} <span className="text-gray-600">{t('services.modules')}</span>
                </h2>
            </div>

            {/* THE REACTOR LAYOUT */}
            <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
                
                {/* 1. Orbit Rings (Background Decor) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full"></div>
                    <div className="w-[450px] h-[450px] md:w-[700px] md:h-[700px] border border-dashed border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
                    <div className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] border border-white/10 rounded-full animate-[pulse_4s_infinite]"></div>
                </div>

                {/* 2. Central Core (Content Display) */}
                <div className="relative z-20 w-[360px] h-[360px] md:w-[460px] md:h-[460px] bg-void/80 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl overflow-hidden group">
                    {/* Inner Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                    
                    {/* Active Service Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService.id}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.1, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10 flex flex-col items-center w-full px-2"
                        >
                             <div className={`p-2 md:p-3 rounded-xl bg-white/5 mb-1 md:mb-2 ${activeService.color} border border-white/5`}>
                                 {React.cloneElement(activeService.icon as React.ReactElement, { className: "w-6 h-6 md:w-8 md:h-8" })}
                             </div>
                             
                             <div className={`text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase mb-0.5 md:mb-1 ${activeService.color}`}>
                                 {activeService.tagline}
                             </div>
                             
                             <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2 leading-tight">
                                 {activeService.title}
                             </h3>
                             
                             <p className="text-gray-400 text-xs md:text-sm leading-snug max-w-[240px] md:max-w-[280px] mb-2 md:mb-3">
                                 {activeService.desc}
                             </p>

                             {/* Features Grid */}
                             <div className="grid grid-cols-2 gap-2 md:gap-4 w-full border-t border-white/10 pt-2 md:pt-3">
                                 {activeService.features.map((feature, idx) => (
                                     <div key={idx} className="text-center">
                                         <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-mono tracking-wider mb-0.5 md:mb-1">{feature.label}</div>
                                         <div className="text-white font-bold text-xs md:text-sm">{feature.value}</div>
                                     </div>
                                 ))}
                             </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Scanning Line Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-acid/5 to-transparent h-[10px] w-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
                </div>

                {/* 3. Orbiting Satellites (Desktop) */}
                <div className="absolute inset-0 hidden md:block pointer-events-none">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {services.map((service, index) => {
                            const pos = getPosition(index, services.length, 280); // Radius 280px
                            const isActive = activeId === service.id;
                            
                            return (
                                <motion.button
                                    key={service.id}
                                    onClick={() => setActiveId(service.id)}
                                    className={`
                                        absolute w-16 h-16 rounded-full border-2 flex items-center justify-center cursor-pointer pointer-events-auto transition-all duration-300 group
                                        ${isActive 
                                            ? `${service.borderColor} bg-void shadow-[0_0_30px_rgba(0,0,0,0.5)] scale-110 z-30` 
                                            : `border-white/10 bg-void/50 hover:${service.borderColor} text-gray-500 hover:text-white z-20`
                                        }
                                    `}
                                    style={{ 
                                        x: pos.x, 
                                        y: pos.y, 
                                        translateX: '-50%', 
                                        translateY: '-50%' 
                                    }}
                                    animate={{
                                        rotate: isActive ? 360 : 0
                                    }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    {/* Pulse Ring for Inactive Interactive Nodes */}
                                    {!isActive && (
                                        <motion.div
                                            className={`absolute inset-0 -m-2 rounded-full border ${service.borderColor} opacity-30`}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ 
                                                scale: [0.8, 1.4], 
                                                opacity: [0.5, 0] 
                                            }}
                                            transition={{ 
                                                duration: 2, 
                                                repeat: Infinity, 
                                                ease: "easeOut",
                                                delay: index * 0.4 // Staggered pulsing
                                            }}
                                        />
                                    )}

                                    {/* Icon */}
                                    <div className={isActive ? service.color : ''} style={{ transform: isActive ? 'rotate(-360deg)' : 'none' }}> {/* Counter rotate icon if button spins */}
                                        {React.cloneElement(service.icon as React.ReactElement, { 
                                            className: "w-6 h-6",
                                            style: { animation: isActive ? 'none' : 'none' } // Reset animation
                                        })} 
                                    </div>
                                    
                                    {/* Connecting Line (Beam) to Center */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, scaleX: 0 }}
                                                animate={{ opacity: 1, scaleX: 1 }}
                                                exit={{ opacity: 0, scaleX: 0 }}
                                                className={`absolute top-1/2 start-1/2 h-[2px] w-[150px] origin-left rtl:origin-right ${service.color.replace('text-', 'bg-')}`}
                                                style={{ 
                                                    transform: `rotate(${Math.atan2(-pos.y, -pos.x) * (180/Math.PI)}deg) translateX(30px) scaleX(1)`, // Calculate angle to center
                                                    boxShadow: '0 0 10px currentColor'
                                                }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    {/* Label Tooltip */}
                                    {!isActive && (
                                        <div className="absolute top-full mt-2 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-void px-2 py-1 border border-white/10 rounded pointer-events-none">
                                            {service.title}
                                        </div>
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* 4. Mobile Navigation (Orbit Wheel) */}
                <div className="md:hidden absolute bottom-0 start-0 end-0 p-4 bg-void/90 backdrop-blur-lg border-t border-white/10 z-40">
                    <div className="flex justify-between items-center overflow-x-auto gap-4 pb-2 no-scrollbar">
                         {services.map((service) => {
                             const isActive = activeId === service.id;
                             return (
                                 <button
                                    key={service.id}
                                    onClick={() => setActiveId(service.id)}
                                    className={`
                                        flex flex-col items-center gap-2 min-w-[60px] transition-all
                                        ${isActive ? 'opacity-100 scale-110' : 'opacity-50 scale-100'}
                                    `}
                                 >
                                     <div className={`
                                        p-3 rounded-full border 
                                        ${isActive ? `${service.borderColor} bg-white/10` : 'border-white/10 bg-transparent'}
                                     `}>
                                         <div className={isActive ? service.color : 'text-gray-400'}>
                                             {service.icon}
                                         </div>
                                     </div>
                                 </button>
                             )
                         })}
                    </div>
                </div>

            </div>

        </div>
    </section>
  );
};

export default Services;