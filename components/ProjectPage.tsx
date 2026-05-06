import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, Code2, Trophy, Images, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';
import { Project, LocalizedText } from '../types';
import { useLanguage } from '../LanguageContext';

interface ProjectPageProps {
  project: Project;
  onBack: () => void;
}

/** Resolve a LocalizedText to the current language, falling back to English */
function lt(text: LocalizedText | undefined, lang: string, fallback: string = ''): string {
  if (!text) return fallback;
  return (text as any)[lang] || text.en || fallback;
}

/* ─── Lightbox for Gallery ─── */
const Lightbox: React.FC<{
  images: string[];
  startIndex: number;
  onClose: () => void;
}> = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrent(c => (c === 0 ? images.length - 1 : c - 1));
      if (e.key === 'ArrowRight') setCurrent(c => (c === images.length - 1 ? 0 : c + 1));
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col"
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Images className="w-5 h-5 text-acid" />
          <span className="text-gray-500 text-sm font-mono">{current + 1} / {images.length}</span>
        </div>
        <button onClick={onClose} className="flex items-center gap-2 px-4 py-2 text-white bg-white/10 hover:bg-red-500/80 rounded-lg transition-all border border-white/10 hover:border-red-400">
          <X className="w-5 h-5" />
          <span className="text-sm font-medium hidden sm:inline">Close</span>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center relative px-4 py-6 overflow-hidden cursor-pointer"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <AnimatePresence mode="wait">
          <motion.img key={current} src={images[current]} alt={`Screenshot ${current + 1}`}
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
          />
        </AnimatePresence>
        {images.length > 1 && (
          <>
            <button onClick={() => setCurrent(c => (c === 0 ? images.length - 1 : c - 1))}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 hover:bg-acid text-white hover:text-void rounded-full backdrop-blur-md transition-all hover:scale-110">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button onClick={() => setCurrent(c => (c === images.length - 1 ? 0 : c + 1))}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 hover:bg-acid text-white hover:text-void rounded-full backdrop-blur-md transition-all hover:scale-110">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2 md:gap-3 px-4 py-3 md:py-4 border-t border-white/10 overflow-x-auto">
          {images.map((img, idx) => (
            <button key={idx} onClick={() => setCurrent(idx)}
              className={`relative w-12 h-8 md:w-16 md:h-10 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                idx === current ? 'border-acid shadow-[0_0_12px_rgba(204,243,129,0.4)] scale-110' : 'border-white/10 opacity-50 hover:opacity-80'
              }`}>
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

/* ─── Section Wrapper with scroll animation ─── */
const Section: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.section>
);

/* ─── Section heading labels per language ─── */
const sectionLabels = {
  backToProjects: { en: 'Back to Projects', ar: 'العودة للمشاريع', ku: 'گەڕانەوە بۆ پڕۆژەکان' },
  featured:       { en: 'Featured', ar: 'مميز', ku: 'تایبەت' },
  overview:       { en: 'Overview', ar: 'نبذة عامة', ku: 'پوختە' },
  keyFeatures:    { en: 'Key Features', ar: 'الميزات الرئيسية', ku: 'تایبەتمەندییە سەرەکییەکان' },
  techStack:      { en: 'Technology Stack', ar: 'التقنيات المستخدمة', ku: 'تەکنەلۆژیاکانی بەکارهاتوو' },
  achievements:   { en: 'Technical Achievements', ar: 'الإنجازات التقنية', ku: 'دەستکەوتە تەکنیکییەکان' },
  screenshots:    { en: 'Screenshots', ar: 'لقطات الشاشة', ku: 'وێنەی شاشە' },
  images:         { en: 'images', ar: 'صور', ku: 'وێنە' },
  close:          { en: 'Close', ar: 'إغلاق', ku: 'داخستن' },
};

/* ─── Main Project Page ─── */
const ProjectPage: React.FC<ProjectPageProps> = ({ project, onBack }) => {
  const { lang } = useLanguage();
  const isRtl = lang === 'ar' || lang === 'ku';
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Resolve all text fields for current language
  const i = project.i18n;
  const title     = lt(i?.title, lang, project.title);
  const category  = lt(i?.category, lang, project.category);
  const role      = lt(i?.role, lang, project.role || '');
  const platform  = lt(i?.platform, lang, project.platform || '');
  const overview  = lt(i?.overview, lang, project.overview || project.description);
  const achievements = lt(i?.technicalAchievements, lang, project.technicalAchievements || '');

  // Resolve features
  const features = useMemo(() => {
    if (i?.features) {
      return i.features.map(f => ({
        title: lt(f.title, lang),
        description: lt(f.description, lang),
      }));
    }
    return project.features || [];
  }, [i, project.features, lang]);

  // Resolve tech stack
  const techStack = useMemo(() => {
    if (i?.techStack) {
      return i.techStack.map(s => ({
        category: lt(s.category, lang),
        technologies: s.technologies,
      }));
    }
    return project.techStack || [];
  }, [i, project.techStack, lang]);

  const label = (key: keyof typeof sectionLabels) => (sectionLabels[key] as any)[lang] || sectionLabels[key].en;

  return (
    <div className="min-h-screen bg-void" dir={isRtl ? 'rtl' : 'ltr'}>

      {/* ── Sticky Back Button ── */}
      <div className="sticky top-0 z-50 bg-void/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <button onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-acid transition-colors group">
            <ArrowLeft className={`w-5 h-5 group-hover:-translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
            <span className="text-sm font-medium">{label('backToProjects')}</span>
          </button>
          {project.isFeatured && (
            <span className="flex items-center gap-1 text-xs font-bold text-void bg-acid px-3 py-1 rounded-full">
              <Star className="w-3 h-3 fill-void" /> {label('featured')}
            </span>
          )}
        </div>
      </div>

      {/* ── Hero Section ── */}
      <Section className="relative overflow-hidden" delay={0}>
        {project.image && (
          <div className="relative h-[40vh] md:h-[55vh] overflow-hidden">
            <img src={project.image} alt={title}
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-void/40 to-transparent" />
          </div>
        )}

        <div className={`max-w-6xl mx-auto px-4 md:px-8 ${project.image ? '-mt-32 md:-mt-40 relative z-10' : 'pt-12'}`}>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-mono text-acid bg-acid/10 px-3 py-1.5 border border-acid/20 rounded-md">
              {category}
            </span>
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1.5 border border-white/10 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            {title}
          </h1>

          {(role || platform) && (
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-gray-400 mb-8">
              {role && <span className="text-acid/90 font-medium">{role}</span>}
              {role && platform && <span className="w-1 h-1 rounded-full bg-gray-600" />}
              {platform && <span>{platform}</span>}
            </div>
          )}
        </div>
      </Section>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20 space-y-16 md:space-y-24">

        {/* Overview */}
        {overview && (
          <Section delay={0.1}>
            <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-start">
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-1.5 h-8 bg-acid rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{label('overview')}</h2>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {overview}
                </p>
              </div>
            </div>
          </Section>
        )}

        {/* Features */}
        {features.length > 0 && (
          <Section delay={0.15}>
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-acid" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">{label('keyFeatures')}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="group bg-white/[0.03] border border-white/10 p-5 md:p-6 rounded-xl hover:border-acid/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-acid/10 border border-acid/20 flex items-center justify-center text-acid text-sm font-bold flex-shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-acid font-semibold mb-1.5">{feature.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <Section delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-6 h-6 text-acid" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">{label('techStack')}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {techStack.map((stack, idx) => (
                <div key={idx} className="bg-void-light/30 border border-white/5 p-5 md:p-6 rounded-xl">
                  <h3 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="text-sm font-mono text-gray-300 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 hover:border-acid/30 hover:text-acid transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Technical Achievements */}
        {achievements && (
          <Section delay={0.25}>
            <div className="relative bg-gradient-to-br from-acid/10 via-acid/5 to-transparent border border-acid/20 rounded-2xl p-6 md:p-10 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-acid/15 blur-[80px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-acid/10 blur-[60px] rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-acid" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{label('achievements')}</h2>
                </div>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {achievements}
                </div>
              </div>
            </div>
          </Section>
        )}

        {/* Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <Section delay={0.3}>
            <div className="flex items-center gap-3 mb-8">
              <Images className="w-6 h-6 text-acid" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">{label('screenshots')}</h2>
              <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                {project.galleryImages.length} {label('images')}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {project.galleryImages.map((img, idx) => (
                <motion.button key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-acid/30 transition-all duration-300"
                >
                  <img src={img} alt={`${title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-void/0 group-hover:bg-void/40 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.button>
              ))}
            </div>
          </Section>
        )}

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && project.galleryImages && (
          <Lightbox
            images={project.galleryImages}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectPage;
