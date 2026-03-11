import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink, Trophy, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../LanguageContext';

const projectsData: Project[] = [
  {
    id: 1,
    title: "Kurdish-Letters App",
    category: "Mobile / Education",
    description: "Award-winning educational tool for children with learning disabilities. Developer of Rwanga Awards 2024 Winner Software.",
    tags: ["Mobile", "Award Winner"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1596464716127-f9a829be9efc?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Patient Flow System",
    category: "Healthcare / DB",
    description: "Hospital management system designed to optimize patient intake and discharge.",
    tags: ["Database", "Optimization"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Fast-Rest POS",
    category: "Hospitality",
    description: "High-speed point of sale system for fast-food environments.",
    tags: ["POS", "Retail"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "School Absence",
    category: "Admin Tool",
    description: "Automated tracking system for student attendance and reports.",
    tags: ["Admin", "Automation"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Solar Manager",
    category: "IoT / Green Tech",
    description: "System for monitoring solar energy output and consumption.",
    tags: ["IoT", "Green Tech"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "MedNexus",
    category: "Healthcare SaaS",
    description: "Lead Full-Stack Architect. Global dashboard for real-time biological supply chain visualization. Features zero-latency state sync, live hospital tracking, and enterprise-grade security.",
    tags: ["React 19", "TypeScript", "Laravel"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "KurdîClass",
    category: "EdTech Platform",
    description: "Full-Stack Developer & UI/UX Designer. Comprehensive educational portal for the Kurdistan Region. Features flawless RTL architecture, seamless multi-language toggling, and premium dark-mode UI.",
    tags: ["Full-Stack", "UI/UX", "RTL"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Starfish Co.",
    category: "Commercial E-Commerce",
    description: "WordPress Architect & UI/UX Designer. High-performance corporate platform managing multiple sub-brands. Features complex nested navigation, high-conversion UI, and optimized media integration.",
    tags: ["WordPress", "UI/UX", "E-Commerce"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Hospital DB System",
    category: "Healthcare Infrastructure",
    description: "Secure, centralized database architecture for patient registries and medical inventories. Engineered for strict data integrity, complex relational mapping, and enterprise-grade role-based access control.",
    tags: ["SQL", "Relational DB", "Backend"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1551076805-e18690c5e45e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Election DB System",
    category: "Civic & Security Systems",
    description: "High-security relational database handling voter registration and real-time tabulation. Focuses on absolute data immutability, cryptographic audit trails, and high-concurrency transaction management.",
    tags: ["Secure SQL", "Cryptography", "Backend"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Dormitory Management",
    category: "Higher Education Logistics",
    description: "Institutional logistics platform managing student housing and capacity planning. Features automated room assignment logic, occupancy analytics, and highly structured data models for large-scale operations.",
    tags: ["Full-Stack", "SQL", "Logistics"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Teacher Records Hub",
    category: "Educational Admin",
    description: "Digital administrative hub securing faculty credentials and performance metrics. Delivers secure document indexing and high-speed search algorithms via a streamlined, optimized UI.",
    tags: ["Web System", "Database", "Frontend"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 13,
    title: "Shopping Management",
    category: "Commercial E-Commerce",
    description: "Robust commercial backend processing product lifecycles and secure checkouts. Highlights include real-time inventory state synchronization and complex relational mapping for financial data.",
    tags: ["Full-Stack", "Transactional DB", "E-Commerce"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 14,
    title: "Gym DB System",
    category: "Facility Management",
    description: "Scalable membership lifecycle platform tracking active subscriptions and access control. Built with automated status flagging, renewal logic, and a highly scalable schema design.",
    tags: ["Relational DB", "Web Interface", "Schema Design"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "Tic-Tac-Toe AI",
    category: "Mobile App (Android)",
    description: "Highly responsive Android application demonstrating fundamental state management. Implements complex min-max algorithms for an unbeatable AI opponent with efficient local state handling.",
    tags: ["Android SDK", "Java/Kotlin", "Mobile UI"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000&auto=format&fit=crop"
  }
];

const Projects: React.FC = () => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar' || lang === 'ku';

  const projects = projectsData.map((project, index) => ({
    ...project,
    title: t(`projects.items.p${index + 1}.title`),
    category: t(`projects.items.p${index + 1}.category`),
    description: t(`projects.items.p${index + 1}.desc`)
  }));

  return (
    <motion.section 
      id="projects" 
      className="border-b border-border bg-void"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
        <div className="grid md:grid-cols-12">
            
            {/* Header Column */}
            <div className="md:col-span-3 p-8 md:p-12 border-b md:border-b-0 md:border-e border-border flex flex-col justify-between bg-void-light/50">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">{t('projects.title1')}<br/>{t('projects.title2')}</h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        {t('projects.desc')}
                    </p>
                </div>
                <div className="hidden md:block">
                     <div className="w-12 h-1 bg-acid mb-4"></div>
                     <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">{t('projects.portfolio')}</span>
                </div>
            </div>

            {/* Grid Column */}
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={project.id} 
                        project={project} 
                        className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
                        isRtl={isRtl}
                        t={t}
                    />
                ))}
            </div>
        </div>
    </motion.section>
  );
};

const ProjectCard: React.FC<{ project: Project; className?: string; isRtl: boolean; t: any }> = ({ project, className, isRtl, t }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div 
            className={`group relative border-b border-e border-border overflow-hidden min-h-[350px] flex flex-col justify-between bg-void hover:bg-void-light transition-colors duration-300 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] ${className}`}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(204, 243, 129, 0.1),
                        transparent 80%
                        )
                    `,
                }}
            />

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale contrast-125 opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-void/80 group-hover:bg-void/70 transition-colors"></div>
            </div>

            <div className="relative z-20 p-8 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-acid bg-void/80 px-2 py-1 border border-acid/20 backdrop-blur-md">
                        {project.category}
                    </span>
                    {project.isFeatured && (
                        <span className="flex items-center gap-1 text-xs font-bold text-void bg-acid px-3 py-1 animate-pulse">
                            <Trophy className="w-3 h-3" /> {t('projects.winner')}
                        </span>
                    )}
                </div>

                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className={`w-5 h-5 opacity-0 ${isRtl ? 'translate-x-2' : '-translate-x-2'} group-hover:opacity-100 group-hover:translate-x-0 transition-all text-acid ${isRtl ? '-scale-x-100' : ''}`} />
                    </h3>
                    <p className="text-gray-300 text-sm mb-6 max-w-md opacity-60 group-hover:opacity-100 transition-opacity">
                        {project.description}
                    </p>
                    
                    <div className="flex gap-2 flex-wrap">
                         {project.tags.map(tag => (
                             <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-800 px-2 py-1">
                                 {tag}
                             </span>
                         ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;