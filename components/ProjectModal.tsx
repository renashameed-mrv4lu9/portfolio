import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Star, Code2, Trophy, Images } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isRtl: boolean;
}

/* ─── Fullscreen Gallery Overlay ─── */
const GalleryOverlay: React.FC<{
  images: string[];
  projectTitle: string;
  onClose: () => void;
}> = ({ images, projectTitle, onClose }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl"
    >
      {/* Gallery Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Images className="w-5 h-5 text-acid" />
          <span className="text-white font-medium">{projectTitle}</span>
          <span className="text-gray-500 text-sm font-mono">
            {current + 1} / {images.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 text-white bg-white/10 hover:bg-red-500/80 rounded-lg transition-all duration-200 border border-white/10 hover:border-red-400"
        >
          <X className="w-5 h-5" />
          <span className="text-sm font-medium">Close</span>
        </button>
      </div>

      {/* Image Viewport — click empty area to close */}
      <div
        className="flex-1 flex items-center justify-center relative px-4 py-6 overflow-hidden cursor-pointer"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`${projectTitle} screenshot ${current + 1}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-acid text-white hover:text-void rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-acid text-white hover:text-void rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex justify-center gap-3 px-6 py-4 border-t border-white/10">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`relative w-16 h-10 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                idx === current
                  ? 'border-acid shadow-[0_0_12px_rgba(204,243,129,0.4)] scale-110'
                  : 'border-white/10 opacity-50 hover:opacity-80'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

/* ─── Main Project Modal ─── */
const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, isRtl }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-5xl max-h-[90vh] bg-void border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto relative"
              dir={isRtl ? 'rtl' : 'ltr'}
            >
              {/* Glowing Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-acid to-transparent opacity-50" />

              {/* Header */}
              <div className="flex justify-between items-start p-6 border-b border-white/10 bg-void-light/30">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h2 className="text-3xl font-bold text-white tracking-tight">{project.title}</h2>
                    {project.isFeatured && (
                      <span className="flex items-center gap-1 text-xs font-bold text-void bg-acid px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-void" /> Featured
                      </span>
                    )}
                  </div>
                  {(project.role || project.platform) && (
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      {project.role && <span className="font-medium text-acid/80">{project.role}</span>}
                      {project.platform && (
                        <span className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-gray-600" />
                          {project.platform}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content — content-first UX */}
              <div className="overflow-y-auto flex-1 p-6 space-y-10 custom-scrollbar">

                {/* Cover Image Hero — shown for projects without rich detail */}
                {project.image && !project.features && (
                  <div className="relative rounded-xl overflow-hidden h-56 md:h-72">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex items-center gap-3">
                      <span className="text-xs font-mono text-acid bg-void/80 px-3 py-1.5 border border-acid/20 rounded-md backdrop-blur-md">
                        {project.category}
                      </span>
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-gray-300 bg-white/10 px-2.5 py-1.5 rounded-md border border-white/10 backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 1. Overview */}
                {(project.overview || project.description) && (
                  <section>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-acid rounded-full inline-block" />
                      Project Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.overview || project.description}
                    </p>
                  </section>
                )}

                {/* Tags — shown prominently for detailed projects that have them alongside features */}
                {project.features && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-gray-300 bg-white/10 px-3 py-1.5 rounded-md border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* 2. Features & Tech Stack grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Key Features */}
                  {project.features && project.features.length > 0 && (
                    <section>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-acid" />
                        Key Features
                      </h3>
                      <div className="space-y-4">
                        {project.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-acid/30 transition-colors"
                          >
                            <h4 className="text-acid font-medium mb-1">{feature.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Tech Stack */}
                  {project.techStack && project.techStack.length > 0 && (
                    <section>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-acid" />
                        Technology Stack
                      </h3>
                      <div className="space-y-4">
                        {project.techStack.map((stack, idx) => (
                          <div key={idx} className="bg-void-light/30 p-4 rounded-xl border border-white/5">
                            <h4 className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wider">
                              {stack.category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {stack.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-xs font-mono text-gray-300 bg-white/10 px-2.5 py-1 rounded-md border border-white/5"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>

                {/* 3. Technical Achievements */}
                {project.technicalAchievements && (
                  <section className="bg-gradient-to-br from-acid/10 to-transparent border border-acid/20 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-acid/20 blur-3xl rounded-full" />
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2 relative z-10">
                      <Trophy className="w-5 h-5 text-acid" />
                      Technical Achievements
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm relative z-10 whitespace-pre-line">
                      {project.technicalAchievements}
                    </p>
                  </section>
                )}

                {/* 4. Gallery CTA — at the bottom so content is consumed first */}
                {project.galleryImages && project.galleryImages.length > 0 && (
                  <section className="relative">
                    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-void-light/20">
                      {/* Preview strip — small tasteful peek */}
                      <div className="flex gap-1 h-28 overflow-hidden opacity-40">
                        {project.galleryImages.slice(0, 4).map((img, idx) => (
                          <div key={idx} className="flex-1 min-w-0">
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>

                      {/* Gradient overlay + CTA */}
                      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent flex items-end justify-center pb-5">
                        <button
                          onClick={() => setGalleryOpen(true)}
                          className="group flex items-center gap-3 px-8 py-3 bg-acid text-void font-semibold rounded-lg shadow-[0_0_20px_rgba(204,243,129,0.3)] hover:shadow-[0_0_35px_rgba(204,243,129,0.5)] hover:bg-white transition-all duration-300 active:scale-95"
                        >
                          <Images className="w-5 h-5" />
                          <span>View Screenshots</span>
                          <span className="text-xs opacity-60 font-mono">
                            {project.galleryImages.length} images
                          </span>
                        </button>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </motion.div>
          </div>

          {/* Fullscreen Gallery Overlay */}
          <AnimatePresence>
            {galleryOpen && project.galleryImages && (
              <GalleryOverlay
                images={project.galleryImages}
                projectTitle={project.title}
                onClose={() => setGalleryOpen(false)}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
