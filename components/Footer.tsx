import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar' || lang === 'ku';

  return (
    <footer id="contact" className="bg-void-light border-x border-border max-w-[1600px] mx-auto w-full transition-colors duration-300">
      <div className="grid md:grid-cols-4">
        
        {/* Col 1: Brand */}
        <div className="p-10 border-b md:border-b-0 md:border-e border-border">
             <a href="#" className="block mb-6 relative group w-fit">
                <img 
                    src="https://i.ibb.co/1tVnxn28/logo1-transparent1.png" 
                    alt="Renas Hameed" 
                    className="h-20 md:h-24 w-auto relative z-10 object-contain transition-transform duration-300 group-hover:scale-105 [.light-mode_&]:brightness-0 [.light-mode_&]:invert"
                />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {t('footer.desc')}
            </p>
            <div className="flex gap-4">
                <a href="#" className="p-2 bg-void border border-border hover:border-acid hover:text-acid text-gray-400 transition-all rounded-lg">
                    <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-void border border-border hover:border-cyan hover:text-cyan text-gray-400 transition-all rounded-lg">
                    <Linkedin className="w-5 h-5" />
                </a>
             </div>
        </div>

        {/* Col 2: Contact */}
        <div className="p-10 border-b md:border-b-0 md:border-e border-border flex flex-col justify-center">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
                <li>
                    <a href="mailto:renassindy78@gmail.com" className="flex items-center gap-3 text-white hover:text-acid transition-colors">
                        <Mail className="w-4 h-4" /> renassindy78@gmail.com
                    </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-4 h-4" /> <span dir="ltr">+964 750 014 0294</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4" /> Zakho, Duhok, Iraq
                </li>
            </ul>
        </div>

        {/* Col 3: Quick Links */}
        <div className="p-10 border-b md:border-b-0 md:border-e border-border flex flex-col justify-center">
             <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">{t('footer.nav')}</h4>
             <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">{t('footer.home')}</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">{t('footer.about')}</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">{t('footer.projects')}</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">{t('footer.skills')}</a></li>
             </ul>
        </div>

        {/* Col 4: CTA */}
        <div className="p-10 flex flex-col justify-center bg-acid relative overflow-hidden group">
             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
             
             <h3 className="text-xl font-bold mb-2 text-void relative z-10">{t('footer.haveProject')}</h3>
             <p className="text-sm text-void/70 mb-8 relative z-10 font-medium">{t('footer.discuss')}</p>
             
             <a href="mailto:renassindy78@gmail.com" className="w-full py-4 bg-void text-white text-center font-bold uppercase text-xs tracking-wider hover:bg-white hover:text-void transition-all relative z-10 shadow-xl">
                {t('footer.startConv')}
             </a>
        </div>

      </div>
      <div className="border-t border-border p-6 text-center text-xs text-gray-700 bg-void">
         {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;