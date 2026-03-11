import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const experienceData = [
  {
    id: 'e1',
    role: "IT Administrator",
    company: "Rast Private School",
    period: "2022 – Present",
    desc: "Managing full-stack IT operations, network security, and student database integrity."
  },
  {
    id: 'e2',
    role: "Social Media Manager",
    company: "Starfish Company",
    period: "2022 – Present",
    desc: "Digital marketing strategy, content creation, and analytics to drive brand growth."
  }
];

const educationData = [
    {
        id: 'ed1',
        title: "BSc Computer Science",
        place: "University of Zakho",
        year: "2018-2022"
    },
    {
        id: 'ed2',
        title: "IELTS Certification",
        place: "Band 6.0 (CEFR B2)",
        year: "2022"
    }
]

const Experience: React.FC = () => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar' || lang === 'ku';

  const experience = experienceData.map(item => ({
    ...item,
    role: t(`experience.items.${item.id}.role`),
    company: t(`experience.items.${item.id}.company`),
    period: t(`experience.items.${item.id}.period`),
    desc: t(`experience.items.${item.id}.desc`)
  }));

  const education = educationData.map(item => ({
    ...item,
    title: t(`experience.eduItems.${item.id}.title`),
    place: t(`experience.eduItems.${item.id}.place`),
    year: t(`experience.eduItems.${item.id}.year`)
  }));

  return (
    <motion.section 
      id="experience" 
      className="bg-void border-b border-border"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
        <div className="grid md:grid-cols-2">
            
            {/* Experience Col */}
            <div className="border-e border-border border-b md:border-b-0">
                <div className="p-8 border-b border-border bg-void-light/30">
                    <h2 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 bg-acid rounded-full"></span>
                        {t('experience.experience')}
                    </h2>
                </div>
                <div className="relative">
                    {/* Continuous Line */}
                    <div className="absolute start-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
                    
                    {experience.map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: isRtl ? 10 : -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 ps-16 border-b border-border last:border-b-0 hover:bg-white/5 transition-colors relative"
                        >
                            <div className="absolute start-[31px] top-10 w-2 h-2 bg-void border border-acid rounded-full z-10 hidden md:block"></div>
                            
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-lg font-bold text-white group-hover:text-acid transition-colors">{item.role}</h3>
                                <span className="text-xs font-mono text-acid bg-acid/10 px-2 py-1 rounded">{item.period}</span>
                            </div>
                            <h4 className="text-sm font-medium text-gray-400 mb-4">{item.company}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-md">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Education Col */}
            <div>
                <div className="p-8 border-b border-border bg-void-light/30">
                    <h2 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan rounded-full"></span>
                        {t('experience.education')}
                    </h2>
                </div>
                <div>
                    {education.map((item, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: isRtl ? -10 : 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 border-b border-border last:border-b-0 hover:bg-white/5 transition-colors"
                        >
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <span className="text-xs font-mono text-cyan">{item.year}</span>
                            </div>
                            <p className="text-sm text-gray-400">{item.place}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    </motion.section>
  );
};

export default Experience;