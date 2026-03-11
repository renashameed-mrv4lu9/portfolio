import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Layout, Server, Shield } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      id="about" 
      className="border-b border-border bg-void relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-acid/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="grid md:grid-cols-12 min-h-[600px]">
        
        {/* Col 1: Vertical Title */}
        <div className="md:col-span-2 p-8 md:p-12 border-b md:border-b-0 md:border-e border-border flex items-start md:items-end bg-void-light/50">
           <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white md:-rotate-90 md:origin-bottom-left rtl:md:origin-bottom-right md:translate-x-12 rtl:md:-translate-x-12 md:-translate-y-8 whitespace-nowrap opacity-20">
               {t('about.profile')}
           </h2>
        </div>

        {/* Col 2: Content */}
        <div className="md:col-span-6 p-8 md:p-16 border-b md:border-b-0 md:border-e border-border flex flex-col justify-center relative z-10">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-acid/10 border border-acid/20 text-acid text-xs font-mono mb-6">
                    <Terminal className="w-3 h-3" />
                    <span>{t('about.whoAmI')}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                    {t('about.title1').split('.')[0]}<span className="text-acid">.</span><br/>
                    {t('about.title2').split('.')[0]}<span className="text-cyan">.</span>
                </h3>
                
                <div className="text-gray-400 space-y-6 text-lg leading-relaxed font-light">
                    <p>
                        {t('about.desc1')}
                    </p>
                    <p>
                        {t('about.desc2')}
                    </p>
                </div>
            </motion.div>
        </div>

        {/* Col 3: Competencies */}
        <div className="md:col-span-4 bg-void-light/30 backdrop-blur-sm">
            <motion.div 
                className="grid grid-rows-3 h-full"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <CompetencyBox 
                    icon={<Server className="w-6 h-6 text-acid" />}
                    title={t('about.comp1Title')}
                    desc={t('about.comp1Desc')}
                    delay={0.1}
                />
                <CompetencyBox 
                    icon={<Layout className="w-6 h-6 text-cyan" />}
                    title={t('about.comp2Title')}
                    desc={t('about.comp2Desc')}
                    delay={0.2}
                />
                <CompetencyBox 
                    icon={<Shield className="w-6 h-6 text-violet" />}
                    title={t('about.comp3Title')}
                    desc={t('about.comp3Desc')}
                    delay={0.3}
                />
            </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

const CompetencyBox: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay: number }> = ({ icon, title, desc, delay }) => (
    <motion.div 
        variants={{
            hidden: { opacity: 0, x: 20 },
            show: { opacity: 1, x: 0, transition: { delay: delay, duration: 0.5 } }
        }}
        className="p-8 border-b border-border last:border-b-0 hover:bg-white/5 transition-colors group flex flex-col justify-center relative overflow-hidden"
    >
        <div className="absolute end-0 top-0 w-20 h-20 bg-gradient-to-br rtl:bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full rtl:rounded-bl-none rtl:rounded-br-full transform translate-x-10 rtl:-translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
        
        <div className="mb-4 p-3 w-fit bg-void border border-border rounded-lg group-hover:border-acid/50 transition-colors shadow-lg">
            {icon}
        </div>
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-acid transition-colors">{title}</h4>
        <p className="text-gray-400 text-sm">{desc}</p>
    </motion.div>
);

export default About;