
import React, { useState } from 'react';
import { useLanguage } from '../App';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <h4 className="text-lg font-bold text-brandNavy dark:text-white group-hover:text-primary transition-colors pr-8">
          {question}
        </h4>
        <span className={`material-icons text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const TeamMember: React.FC<{ name: string; role: string; image: string }> = ({ name, role, image }) => (
  <div className="group flex flex-col items-center">
    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-brandNavy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <div className="bg-white/90 p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <svg className="w-5 h-5 fill-brandNavy" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
        </div>
      </div>
    </div>
    <h4 className="text-lg font-bold text-brandNavy dark:text-white mb-1 group-hover:text-primary transition-colors">{name}</h4>
    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{role}</p>
  </div>
);

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
    { q: t('q6'), a: t('a6') },
    { q: t('q7'), a: t('a7') },
  ];

  const team = [
    { name: 'Mohamed Ahmed (Mando)', role: t('Founder & CEO'), image: '/team/mo.png' },
    { name: 'Ibrahim Darwish', role: t('Cofounder & Manger'), image: '/team/Ibrahim.jpeg' },

    { name: 'Abdullah Al Saeed', role: t('Cofounder & CEO of ID-KSA'), image: '' },
  ];

  return (
    <div className="pt-20">
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          alt="Logistics Background" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-brandNavy/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6">
            {t('redefining_trade')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
            {t('about_hero_desc')}
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-icons text-white text-4xl">expand_more</span>
        </div>
      </header>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
              <img 
                alt="Team Collaboration" 
                className="rounded-2xl shadow-2xl relative z-10 border border-slate-200 dark:border-slate-800" 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brandNavy/10 dark:bg-primary/5 rounded-full blur-3xl"></div>
            </div>
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">{t('our_story')}</span>
              <h2 className="font-display text-4xl font-bold text-brandNavy dark:text-white mb-8">{t('about_excellence')}</h2>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>{t('about_p3')}</p>
                <p>{t('about_p4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandNavy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">{t('our_foundation')}</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-icons text-primary group-hover:text-brandNavy text-3xl">rocket_launch</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{t('mission')}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t('mission_desc')}
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-icons text-primary group-hover:text-brandNavy text-3xl">visibility</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{t('vision')}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t('vision_desc')}
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-icons text-primary group-hover:text-brandNavy text-3xl">verified_user</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{t('values')}</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2"><span className="material-icons text-primary text-sm">circle</span> {t('value1')}</li>
                <li className="flex items-center gap-2"><span className="material-icons text-primary text-sm">circle</span> {t('value2')}</li>
                <li className="flex items-center gap-2"><span className="material-icons text-primary text-sm">circle</span> {t('value3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-background-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              {language === 'ar' ? 'فريقنا' : 'THE PEOPLE'}
            </span>
            <h2 className="font-display text-4xl font-extrabold text-brandNavy dark:text-white mb-4">
              {t('team_title')}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
              {t('team_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-background-dark transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              {language === 'ar' ? 'المساعدة والدعم' : (language === 'vi' ? 'TRỢ GIÚP & HỖ TRỢ' : (language === 'zh' ? '帮助与支持' : (language === 'es' ? 'AYUDA Y SOPORTE' : (language === 'fr' ? 'AIDE ET SUPPORT' : 'HELP & SUPPORT'))))}
            </span>
            <h2 className="font-display text-4xl font-extrabold text-brandNavy dark:text-white mb-4">
              {t('faq_title')}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
              {t('faq_subtitle')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              {language === 'ar' ? 'هل لديك المزيد من الأسئلة؟' : (language === 'vi' ? 'Bạn vẫn còn thắc mắc?' : (language === 'zh' ? '还有其他问题吗？' : (language === 'es' ? '¿Aún tiene preguntas?' : (language === 'fr' ? 'Vous avez d\'autres questions ?' : 'Still have more questions?'))))}
            </p>
            <a 
              href="#/contact" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
            >
              {t('contact_hero_desc')}
              <span className={`material-icons text-lg ${language === 'ar' ? 'rotate-180' : ''}`}>arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
