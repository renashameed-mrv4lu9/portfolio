import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink, Trophy, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../LanguageContext';
import { projectsData } from '../projectsData';

const Projects: React.FC<{ onOpenProject: (project: Project) => void }> = ({ onOpenProject }) => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar' || lang === 'ku';

  const projects = projectsData.map((project) => {
    if (project.id === 0) return project; // Eris project uses raw data for now
    
    return {
      ...project,
      title: t(`projects.items.p${project.id}.title`) || project.title,
      category: t(`projects.items.p${project.id}.category`) || project.category,
      description: t(`projects.items.p${project.id}.desc`) || project.description
    };
  });

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
                        onViewDetails={() => onOpenProject(project)}
                    />
                ))}
            </div>
        </div>

    </motion.section>
  );
};

const ProjectCard: React.FC<{ project: Project; className?: string; isRtl: boolean; t: any; onViewDetails: () => void }> = ({ project, className, isRtl, t, onViewDetails }) => {
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
                    
                    <div className="flex gap-2 flex-wrap mb-6">
                         {project.tags.map(tag => (
                             <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-800 px-2 py-1">
                                 {tag}
                             </span>
                         ))}
                    </div>
                    
                    <button 
                        onClick={(e) => { e.stopPropagation(); onViewDetails(); }}
                        className="flex items-center gap-2 text-sm font-medium text-void bg-acid px-6 py-2.5 rounded-sm hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(204,243,129,0.3)] hover:shadow-[0_0_25px_rgba(204,243,129,0.5)] active:scale-95"
                    >
                        {t('projects.viewDetails') || 'View Details'}
                        <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Projects;