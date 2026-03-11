import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { 
  Code2, 
  Server, 
  Palette, 
  Database, 
  AppWindow, 
  Layout, 
  Terminal, 
  FileSpreadsheet,
  Video,
  Cpu,
  ChevronRight,
  Layers,
  Globe,
  Smartphone,
  Activity
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

type CategoryId = 'development' | 'infrastructure' | 'creative';

interface Skill {
  subject: string; // Used for Radar Chart Axis
  value: number;   // 0-100
  fullMark: number;
  icon: React.ReactNode;
  level: string;
  desc: string;
}

interface Category {
  id: CategoryId;
  label: string;
  icon: React.ReactNode;
  description: string;
  items: Skill[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-void border border-border p-3 rounded shadow-xl backdrop-blur-sm">
        <p className="text-acid font-bold text-sm">{label}</p>
        <p className="text-gray-300 text-xs">{payload[0].payload.level}: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<CategoryId>('development');

  const categories: Category[] = [
    {
      id: "development",
      label: t('skills.dev'),
      icon: <Code2 className="w-5 h-5" />,
      description: t('skills.devDesc'),
      items: [
        { subject: t('skills.items.frontend.subject'), value: 95, fullMark: 100, icon: <Layout className="w-4 h-4" />, level: t('skills.items.frontend.level'), desc: t('skills.items.frontend.desc') },
        { subject: t('skills.items.backend.subject'), value: 85, fullMark: 100, icon: <Database className="w-4 h-4" />, level: t('skills.items.backend.level'), desc: t('skills.items.backend.desc') },
        { subject: t('skills.items.mobile.subject'), value: 75, fullMark: 100, icon: <Smartphone className="w-4 h-4" />, level: t('skills.items.mobile.level'), desc: t('skills.items.mobile.desc') },
        { subject: t('skills.items.desktop.subject'), value: 90, fullMark: 100, icon: <AppWindow className="w-4 h-4" />, level: t('skills.items.desktop.level'), desc: t('skills.items.desktop.desc') }
      ]
    },
    {
      id: "infrastructure",
      label: t('skills.infra'),
      icon: <Server className="w-5 h-5" />,
      description: t('skills.infraDesc'),
      items: [
        { subject: t('skills.items.sysadmin.subject'), value: 90, fullMark: 100, icon: <Layers className="w-4 h-4" />, level: t('skills.items.sysadmin.level'), desc: t('skills.items.sysadmin.desc') },
        { subject: t('skills.items.devops.subject'), value: 70, fullMark: 100, icon: <Terminal className="w-4 h-4" />, level: t('skills.items.devops.level'), desc: t('skills.items.devops.desc') },
        { subject: t('skills.items.linux.subject'), value: 85, fullMark: 100, icon: <Cpu className="w-4 h-4" />, level: t('skills.items.linux.level'), desc: t('skills.items.linux.desc') },
        { subject: t('skills.items.security.subject'), value: 75, fullMark: 100, icon: <Globe className="w-4 h-4" />, level: t('skills.items.security.level'), desc: t('skills.items.security.desc') }
      ]
    },
    {
      id: "creative",
      label: t('skills.creative'),
      icon: <Palette className="w-5 h-5" />,
      description: t('skills.creativeDesc'),
      items: [
        { subject: t('skills.items.uiux.subject'), value: 85, fullMark: 100, icon: <Palette className="w-4 h-4" />, level: t('skills.items.uiux.level'), desc: t('skills.items.uiux.desc') },
        { subject: t('skills.items.automation.subject'), value: 95, fullMark: 100, icon: <FileSpreadsheet className="w-4 h-4" />, level: t('skills.items.automation.level'), desc: t('skills.items.automation.desc') },
        { subject: t('skills.items.multimedia.subject'), value: 80, fullMark: 100, icon: <Video className="w-4 h-4" />, level: t('skills.items.multimedia.level'), desc: t('skills.items.multimedia.desc') },
        { subject: t('skills.items.workflow.subject'), value: 85, fullMark: 100, icon: <Activity className="w-4 h-4" />, level: t('skills.items.workflow.level'), desc: t('skills.items.workflow.desc') }
      ]
    }
  ];

  const activeCategory = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <section 
      id="skills" 
      className="bg-void border-b border-border relative overflow-hidden min-h-[800px] py-24"
    >
        {/* Background Elements */}
        <div className="absolute start-0 bottom-0 w-[400px] h-[400px] bg-acid/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-[1400px]">
            
            {/* Header */}
            <div className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                     <span className="w-8 h-1 bg-acid"></span>
                     <span className="text-acid font-mono text-xs tracking-widest uppercase">{t('skills.expertise')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {t('skills.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r rtl:bg-gradient-to-l from-acid to-cyan">{t('skills.title2')}</span>
                </h2>
                <p className="text-gray-400 max-w-2xl text-lg font-light">
                    {t('skills.desc')}
                </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* LEFT: Navigation Tabs */}
                <div className="lg:col-span-3 flex flex-col gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`group flex items-center justify-between p-5 border rounded-xl text-start transition-all duration-300 relative overflow-hidden ${
                                activeTab === cat.id 
                                ? 'bg-void-light border-acid/50 text-white shadow-[0_0_20px_rgba(204,243,129,0.1)]' 
                                : 'bg-transparent border-border text-gray-500 hover:border-gray-600 hover:bg-white/5'
                            }`}
                        >
                            {activeTab === cat.id && (
                                <div className="absolute start-0 top-0 bottom-0 w-1 bg-acid"></div>
                            )}

                            <div className="flex items-center gap-3 relative z-10">
                                <div className={`p-2 rounded-lg border transition-colors ${
                                    activeTab === cat.id 
                                    ? 'bg-acid/10 border-acid/20 text-acid' 
                                    : 'bg-void border-border text-gray-500 group-hover:text-gray-300'
                                }`}>
                                    {cat.icon}
                                </div>
                                <span className={`font-medium ${activeTab === cat.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                    {cat.label}
                                </span>
                            </div>
                            
                            <ChevronRight className={`w-4 h-4 rtl:-scale-x-100 transition-all duration-300 ${
                                activeTab === cat.id 
                                ? 'text-acid opacity-100 translate-x-0' 
                                : 'text-gray-600 opacity-0 -translate-x-4 rtl:translate-x-4 group-hover:opacity-50 group-hover:translate-x-0 rtl:group-hover:translate-x-0'
                            }`} />
                        </button>
                    ))}
                </div>

                {/* RIGHT: Visualization Area */}
                <div className="lg:col-span-9 bg-void-light/30 border border-border rounded-2xl p-6 md:p-10 relative overflow-hidden backdrop-blur-sm">
                    {/* Corner Accent */}
                    <div className="absolute top-0 end-0 p-4">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-acid rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">{t('skills.liveMetrics')}</span>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="grid md:grid-cols-2 gap-10 items-center h-full"
                        >
                            {/* CHART COLUMN */}
                            <div className="h-[300px] md:h-[400px] w-full relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={activeCategory.items}>
                                        <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                        <PolarAngleAxis 
                                            dataKey="subject" 
                                            tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 600 }}
                                        />
                                        <PolarRadiusAxis 
                                            angle={30} 
                                            domain={[0, 100]} 
                                            tick={false} 
                                            axisLine={false} 
                                        />
                                        <Radar
                                            name={activeCategory.label}
                                            dataKey="value"
                                            stroke="#CCF381"
                                            strokeWidth={3}
                                            fill="#CCF381"
                                            fillOpacity={0.2}
                                            isAnimationActive={true}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                    </RadarChart>
                                </ResponsiveContainer>
                                
                                {/* Center Decorative Icon */}
                                <div className="absolute top-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 text-white/10 pointer-events-none">
                                    {React.cloneElement(activeCategory.icon as React.ReactElement, { className: "w-12 h-12" })}
                                </div>
                            </div>

                            {/* DETAILS COLUMN */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                        {activeCategory.label}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6">
                                        {activeCategory.description}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {activeCategory.items.map((skill, idx) => (
                                        <motion.div
                                            key={skill.subject}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group p-4 bg-void border border-border rounded-lg hover:border-acid/30 hover:bg-white/[0.02] transition-colors"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-1.5 bg-void-light rounded text-acid">
                                                        {skill.icon}
                                                    </div>
                                                    <span className="font-bold text-gray-200 group-hover:text-acid transition-colors">
                                                        {skill.subject}
                                                    </span>
                                                </div>
                                                <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">
                                                    {skill.value}%
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500 ps-10 leading-relaxed">
                                                {skill.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;